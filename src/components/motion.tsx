"use client";

import { MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";

/** Global motion defaults keep transitions consistent and respect reduced motion preferences. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 230, damping: 28, mass: 0.8 }}>
      {children}
    </MotionConfig>
  );
}

/** Shared reveal primitive used by page sections as they enter the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
