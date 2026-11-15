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
      <AnimatePresence mode="wait">
        <motion.div key={slide.image} className="hero-image" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }}>
          <Image src={slide.image} alt="" fill priority={activeSlide === 0} sizes="100vw" />
        </motion.div>
      </AnimatePresence>
      <div className="hero-scrim" />
      <div className="container hero-content">
        <AnimatePresence mode="wait">
          <motion.div key={slide.title} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.55 }}>
            <p className="eyebrow eyebrow-light">{slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <p className="hero-description">{slide.description}</p>
            <ArrowLink href={slide.href} className="button button-light">{slide.cta}</ArrowLink>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="hero-controls" aria-label="Hero slide controls">
        <motion.button type="button" aria-label="Previous slide" onClick={() => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}><ChevronLeft size={20} /></motion.button>
        <div className="hero-dots">
          {heroSlides.map((item, index) => <motion.button key={item.title} type="button" aria-label={`Show ${item.eyebrow.toLowerCase()}`} className={index === activeSlide ? "is-active" : ""} onClick={() => setActiveSlide(index)} whileHover={{ scale: 1.25 }} />)}
        </div>
        <motion.button type="button" aria-label="Next slide" onClick={() => setActiveSlide((activeSlide + 1) % heroSlides.length)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}><ChevronRight size={20} /></motion.button>
      </div>
    </section>
  );
}
