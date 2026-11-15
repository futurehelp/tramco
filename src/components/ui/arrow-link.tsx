"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function ArrowLink({
  href,
  children,
  className = "button button-primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <motion.a
      className={className}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 360, damping: 22 }}
    >
      <span>{children}</span>
      <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
    </motion.a>
  );
}
