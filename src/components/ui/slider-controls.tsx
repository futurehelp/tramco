"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SliderControlsProps = {
  activeIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  label: string;
};

/** Shared slider controls keep the carousel interaction compact and accessible. */
export function SliderControls({ activeIndex, total, onPrevious, onNext, onSelect, label }: SliderControlsProps) {
  const current = String(activeIndex + 1).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");

  return (
    <div className="slider-controls" aria-label={label}>
      <div className="slider-counter" aria-live="polite">
        <span className="slider-counter-current">{current}</span>
        <span className="slider-counter-total">/ {totalLabel}</span>
      </div>
      <div className="slider-progress" role="tablist" aria-label={`${label} slides`}>
        {Array.from({ length: total }, (_, index) => (
          <motion.button
            key={index}
            type="button"
            role="tab"
            aria-label={`Show slide ${index + 1} of ${total}`}
            aria-selected={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => onSelect(index)}
            whileHover={{ scaleY: 1.8 }}
            whileTap={{ scale: 0.92 }}
          >
            <motion.span animate={{ scaleX: index === activeIndex ? 1 : 0.62 }} transition={{ duration: 0.25 }} />
          </motion.button>
        ))}
      </div>
      <div className="slider-arrows">
        <motion.button className="slider-arrow" type="button" aria-label="Previous slide" onClick={onPrevious} whileHover={{ x: -2 }} whileTap={{ scale: 0.9 }}>
          <ChevronLeft size={18} />
        </motion.button>
        <motion.button className="slider-arrow" type="button" aria-label="Next slide" onClick={onNext} whileHover={{ x: 2 }} whileTap={{ scale: 0.9 }}>
          <ChevronRight size={18} />
        </motion.button>
      </div>
    </div>
  );
}
