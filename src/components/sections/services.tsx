"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { services } from "@/lib/site-content";

/** Four original service destinations become touch-friendly cards with restrained hover motion. */
export function ServicesSection() {
  return (
    <section className="section services-section" id="management">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow">WHAT WE DO</p><h2>Real estate with<br /><em>the long view.</em></h2></div>
          <p className="section-lede">From a first home to a long-term investment, TRAMCO brings clear guidance and dependable service to every decision.</p>
        </Reveal>
        <div className="service-grid" id="real-estate">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <motion.a className="service-card" href={service.href} whileHover={{ y: -8 }} whileTap={{ scale: 0.985 }}>
                <div className="service-image"><Image src={service.image} alt="" fill sizes="(max-width: 760px) 100vw, 25vw" /></div>
                <div className="service-card-body">
                  <span className="service-number">{service.number}</span>
                  <div><h3>{service.title}</h3><p>{service.description}</p></div>
                  <span className="service-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
