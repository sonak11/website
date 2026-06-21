"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { questions } from "@/lib/data";

export function ThreeQuestions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="questions" className="section-pad border-t border-[var(--border)]" ref={ref}>
      <div className="max-site">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-20"
        >
          <span className="label text-[var(--ink-faint)]">Three questions I keep returning to</span>
          <div className="flex-1 rule" />
        </motion.div>

        {/* Questions */}
        <div className="space-y-0">
          {questions.map((q, i) => (
            <QuestionItem key={q.number} q={q} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuestionItem({
  q,
  i,
  inView,
}: {
  q: (typeof questions)[0];
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.15 + 0.2 }}
      className="group grid md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 py-12 border-b border-[var(--border)] items-start"
    >
      {/* Number */}
      <span
        className="label text-[var(--ink-faint)] pt-1"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1rem", letterSpacing: "0.05em" }}
      >
        {q.number}
      </span>

      {/* Question */}
      <h3
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        className="text-2xl md:text-3xl font-light text-[var(--ink)] leading-snug"
      >
        {q.question}
      </h3>

      {/* Context — appears on hover on desktop, always visible on mobile */}
      <p className="text-sm leading-relaxed text-[var(--ink-muted)] md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
        {q.context}
      </p>
    </motion.div>
  );
}
