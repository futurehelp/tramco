"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion";
import { testimonials } from "@/lib/site-content";

/** Testimonial carousel keeps longer original reviews readable on every screen size. */
export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <Reveal><p className="eyebrow">CLIENT EXPERIENCES</p><h2>Trusted by people<br /><em>who stay for the long run.</em></h2></Reveal>
        <Reveal className="testimonial-card" delay={0.1}>
          <Quote className="quote-mark" size={52} strokeWidth={1.2} aria-hidden="true" />
          <motion.div key={item.author} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
            <p className="testimonial-quote">“{item.quote}”</p>
            <div className="testimonial-person"><Image src="/images/source/user.png" width={58} height={58} alt="" /><div><strong>{item.author}</strong><span>{item.detail}</span></div></div>
          </motion.div>
          <div className="testimonial-controls"><button type="button" aria-label="Previous testimonial" onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}><ChevronLeft size={20} /></button><span>{String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span><button type="button" aria-label="Next testimonial" onClick={() => setActive((active + 1) % testimonials.length)}><ChevronRight size={20} /></button></div>
        </Reveal>
      </div>
    </section>
  );
}
