"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-content";
import { ArrowLink } from "@/components/ui/arrow-link";

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
      <div className="container hero-stage">
        <AnimatePresence mode="wait">
          <motion.div key={slide.image} className="hero-image" initial={{ opacity: 0, scale: 1.018 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.65 }}>
            <Image src={slide.image} alt={`${slide.eyebrow.toLowerCase()} at TRAMCO`} fill priority={activeSlide === 0} sizes="(max-width: 760px) calc(100vw - 40px), 1240px" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="container hero-rail">
        <AnimatePresence mode="wait">
          <motion.div className="hero-note" key={slide.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
            <span className="hero-index">0{activeSlide + 1}</span>
            <p>{slide.description}</p>
            <ArrowLink href={slide.href} className="hero-link">{slide.cta}</ArrowLink>
          </motion.div>
        </AnimatePresence>
        <div className="hero-controls" aria-label="Hero slide controls">
          <motion.button type="button" aria-label="Previous slide" onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)} whileHover={{ x: -3 }} whileTap={{ scale: 0.92 }}><ChevronLeft size={19} /></motion.button>
          <div className="hero-dots">
            {heroSlides.map((item, index) => <motion.button key={item.title} type="button" aria-label={`Show ${item.eyebrow.toLowerCase()}`} className={index === activeSlide ? "is-active" : ""} onClick={() => setActiveSlide(index)} whileHover={{ scaleX: 1.35 }} />)}
          </div>
          <motion.button type="button" aria-label="Next slide" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} whileHover={{ x: 3 }} whileTap={{ scale: 0.92 }}><ChevronRight size={19} /></motion.button>
        </div>
      </div>
    </section>
  );
}
