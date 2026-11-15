"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/lib/site-content";
import { ArrowLink } from "@/components/ui/arrow-link";

/** Responsive navigation with animated dropdowns and a mobile drawer. */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="TRAMCO home">
        <Image src="/images/source/logo-modern.png" width={1200} height={349} alt="TRAMCO Texas Realty and Management Company" priority />
      </a>

      <nav className={mobileOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
        {navigation.map((item) => (
          <div
            className="nav-group"
            key={item.label}
            onMouseEnter={() => setActiveMenu(item.children ? item.label : null)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {item.children ? (
              <motion.button
                className="nav-trigger"
                type="button"
                aria-expanded={activeMenu === item.label}
                onClick={() => setActiveMenu((current) => (current === item.label ? null : item.label))}
                whileHover={{ color: "var(--brand)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{item.label}</span>
                <motion.span animate={{ rotate: activeMenu === item.label ? 180 : 0 }}>
                  <ChevronDown size={15} aria-hidden="true" />
                </motion.span>
              </motion.button>
            ) : (
              <motion.a href={item.href} whileHover={{ color: "var(--brand)" }} onClick={() => setMobileOpen(false)}>
                {item.label}
              </motion.a>
            )}

            <AnimatePresence>
              {item.children && activeMenu === item.label ? (
                <motion.div className="nav-dropdown" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                  {item.children.map((child) => (
                    <motion.a key={child.label} href={child.href} whileHover={{ x: 5, color: "var(--brand)" }} onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </motion.a>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      <ArrowLink href="#contact" className="button button-header">Request a consultation</ArrowLink>

      <motion.button
        className="menu-toggle"
        type="button"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        {mobileOpen ? <X size={23} /> : <Menu size={23} />}
      </motion.button>
    </header>
  );
}
