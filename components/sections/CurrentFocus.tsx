"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { currentFocus } from "@/lib/data";

export function CurrentFocus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-pad border-t border-[var(--border)]" ref={ref}>
      <div className="max-site grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left — headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="label text-[var(--ink-faint)] mb-8">Current focus</p>
          <h2
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            className="display-md text-[var(--ink)]"
          >
            What occupies<br />
            <em>my thinking</em><br />
            right now.
          </h2>

          <div className="mt-12 flex items-center gap-3">
            <span className="inline-flex w-2 h-2 rounded-full bg-[var(--sage)]" />
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="label text-[var(--sage)]"
            >
              Actively building
            </motion.span>
          </div>
        </motion.div>

        {/* Right — focus items */}
        <div className="space-y-0">
          {currentFocus.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              className="grid grid-cols-[90px_1fr] gap-6 py-7 border-b border-[var(--border)]"
            >
              <span className="label text-[var(--ink-faint)] pt-0.5">{item.label}</span>
              <p className="text-sm leading-loose text-[var(--ink-muted)]">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
