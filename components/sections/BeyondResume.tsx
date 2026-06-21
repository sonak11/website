"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const facts = [
  {
    label: "I believe in",
    value: "Explainability as a first-class design constraint — not an afterthought.",
  },
  {
    label: "Mentoring",
    value:
      "I mentor first-year Honors students on breaking into research. Getting that first lab opportunity is the hardest part.",
  },
  {
    label: "Learning loop",
    value:
      "Paper → implement a minimal version → find where it breaks → understand why. Reading alone doesn't stick.",
  },
  {
    label: "Currently reading",
    value: "Thinking Fast and Slow (Kahneman) and papers on uncertainty quantification in safety-critical ML.",
  },
  {
    label: "Pet peeve",
    value:
      "Dashboards that show a model's output without any indication of confidence or failure modes.",
  },
  {
    label: "What drives me",
    value:
      "The gap between what ML can do in a notebook and what it actually does in deployment is still enormous. I want to close it.",
  },
];

export function BeyondResume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-[var(--muted)]/30">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-widest mb-4">
            Beyond the Resume
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            How I actually think.
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)] text-lg">
            Things that don&apos;t fit neatly into a bullet point.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5"
            >
              <p className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider mb-2">
                {fact.label}
              </p>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">
                {fact.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 text-center"
        >
          <p className="text-lg md:text-xl font-light text-[var(--foreground)] leading-relaxed max-w-2xl mx-auto">
            &ldquo;The best AI systems I&apos;ve seen don&apos;t try to replace the
            expert — they try to make the expert&apos;s knowledge go further.&rdquo;
          </p>
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">
            — How I approach every project
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
