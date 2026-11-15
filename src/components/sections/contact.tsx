"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion";

/** Lightweight local contact form preserves the original fields without embedding WordPress forms. */
export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section contact-section">
      <div className="container contact-grid">
        <Reveal><p className="eyebrow">LET&apos;S TALK</p><h2>Ready for a more<br /><em>confident next step?</em></h2><p className="contact-lede">Tell us what you are working toward. A TRAMCO specialist will follow up with a clear path forward.</p><a className="contact-phone" href="tel:2818936777">281.893.6777</a></Reveal>
        <Reveal delay={0.12}>
          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <label><span>Name</span><input name="name" required placeholder="Your name" /></label>
            <label><span>Email</span><input type="email" name="email" required placeholder="you@example.com" /></label>
            <label><span>Phone</span><input type="tel" name="phone" placeholder="281.000.0000" /></label>
            <label><span>How can we help?</span><textarea name="message" rows={4} placeholder="Tell us a little about your goals" /></label>
            <motion.button className="button button-primary" type="submit" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>{submitted ? "Message ready to send" : "Submit inquiry"}<span aria-hidden="true">↗</span></motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
