"use client";

import { useEffect, useRef } from "react";

type GpuDevice = {
  queue: { submit(commands: unknown[]): void };
  createCommandEncoder(): GpuCommandEncoder;
};

type GpuCommandEncoder = {
  beginRenderPass(description: unknown): { end(): void };
  finish(): unknown;
};

type GpuContext = {
  configure(configuration: unknown): void;
  getCurrentTexture(): { createView(): unknown };
};

type GpuApi = {
  requestAdapter(): Promise<{ requestDevice(): Promise<GpuDevice> } | null>;
};

/** Adds a low-contrast ambient texture with a graceful canvas fallback. */
export function GpuLens() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let frame = 0;
    let stopped = false;
    const context = canvas.getContext("webgpu" as never) as unknown as GpuContext | null;
    const gpu = (navigator as Navigator & { gpu?: GpuApi }).gpu;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
    };

    const drawFallback = (time: number) => {
      const fallback = canvas.getContext("2d");
      if (!fallback) return;
      const x = canvas.width * (0.72 + Math.sin(time / 5000) * 0.08);
      const y = canvas.height * (0.2 + Math.cos(time / 6000) * 0.05);
      const gradient = fallback.createRadialGradient(x, y, 0, x, y, canvas.width * 0.38);
      gradient.addColorStop(0, "rgba(134, 0, 32, 0.18)");
      gradient.addColorStop(1, "rgba(134, 0, 32, 0)");
      fallback.clearRect(0, 0, canvas.width, canvas.height);
      fallback.fillStyle = gradient;
      fallback.fillRect(0, 0, canvas.width, canvas.height);
      frame = window.requestAnimationFrame(drawFallback);
    };

    const drawWebGpu = async () => {
      if (!gpu || !context) {
        resize();
        frame = window.requestAnimationFrame(drawFallback);
        return;
      }

      const adapter = await gpu.requestAdapter();
      if (!adapter || stopped) return;
      const device = await adapter.requestDevice();
      if (stopped) return;

      context.configure({ device, format: "bgra8unorm", alphaMode: "premultiplied" });
      const render = () => {
        if (stopped) return;
        const encoder = device.createCommandEncoder();
        const pass = encoder.beginRenderPass({
          colorAttachments: [{
            view: context.getCurrentTexture().createView(),
            clearValue: { r: 0.09, g: 0.01, b: 0.025, a: 0 },
            loadOp: "clear",
            storeOp: "store",
          }],
        });
        pass.end();
        device.queue.submit([encoder.finish()]);
        frame = window.requestAnimationFrame(render);
      };
      render();
    };

    resize();
    window.addEventListener("resize", resize);
    void drawWebGpu();

    return () => {
      stopped = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="gpu-lens" aria-hidden="true" />;
}
