"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { beyondItems } from "@/lib/data";

export function BeyondResume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="section-pad border-t border-[var(--border)] bg-[var(--bg-card)]" ref={ref}>
      <div className="max-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-20"
        >
          <span className="label text-[var(--ink-faint)]">Beyond the resume</span>
          <div className="flex-1 rule" />
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-20 max-w-3xl"
        >
          <p
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            className="text-3xl md:text-4xl font-light text-[var(--ink)] leading-snug"
          >
            &ldquo;The best AI systems I&apos;ve seen don&apos;t try to replace
            the expert — they try to make the expert&apos;s knowledge{" "}
            <em>go further.</em>&rdquo;
          </p>
        </motion.blockquote>

        {/* Grid of items */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0">
          {beyondItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
              className="py-8 pr-8 border-r border-[var(--border)] last:border-r-0 border-b sm:border-b-0 first:pl-0"
              style={{ paddingLeft: i === 0 ? 0 : "2rem" }}
            >
              <p className="label text-[var(--copper)] mb-4">{item.label}</p>
              <p className="text-sm leading-loose text-[var(--ink-muted)]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
