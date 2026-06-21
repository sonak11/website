"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#questions", label: "Questions" },
  { href: "#work", label: "Work" },
  { href: "#notes", label: "Notes" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 60));

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-[#F8F7F4]/90 backdrop-blur-sm border-b border-[var(--border)]" : ""
      )}
    >
      <nav className="max-site flex items-center justify-between px-6 md:px-10 py-5">
        <a
          href="#"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          className="text-lg font-light tracking-wide text-[var(--ink)] hover:text-[var(--copper)] transition-colors duration-300"
        >
          Sonakshi Sharma
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:sonakshi@example.com"
          className="label hidden md:block text-[var(--ink-muted)] hover:text-[var(--copper)] transition-colors duration-300 underline-copper"
        >
          Get in touch ↗
        </a>
      </nav>
    </motion.header>
  );
}
