"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-content";
import { ArrowLink } from "@/components/ui/arrow-link";
import { GpuLens } from "@/components/ui/gpu-lens";
import { SliderControls } from "@/components/ui/slider-controls";

/** Full width hero that preserves the original four-slide story without the WordPress slider runtime. */
export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="top" aria-label="TRAMCO services">
      <GpuLens />
      <div className="container hero-stage">
        <AnimatePresence mode="wait">
          <motion.div key={slide.image} className="hero-image" initial={{ opacity: 0, scale: 1.018 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.65 }}>
            <Image src={slide.image} alt={`${slide.eyebrow.toLowerCase()} at TRAMCO`} fill priority={activeSlide === 0} sizes="(max-width: 760px) calc(100vw - 40px), 1240px" />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div className="hero-copy" key={slide.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease: "easeOut" }}>
            <p className="eyebrow eyebrow-light">{slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <p className="hero-description">{slide.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="container hero-rail">
        <AnimatePresence mode="wait">
          <motion.div className="hero-note" key={slide.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
            <span className="hero-index">0{activeSlide + 1}</span>
            <p>Consistency, expertise, and longevity across Houston real estate.</p>
            <ArrowLink href={slide.href} className="hero-link">{slide.cta}</ArrowLink>
          </motion.div>
        </AnimatePresence>
        <SliderControls
          activeIndex={activeSlide}
          total={heroSlides.length}
          onPrevious={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)}
          onNext={() => setActiveSlide((activeSlide + 1) % heroSlides.length)}
          onSelect={setActiveSlide}
          label="Hero slide controls"
        />
      </div>
    </section>
  );
}
