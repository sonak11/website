"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { researchNotes } from "@/lib/data";

const tagColors: Record<string, string> = {
  "Medical AI": "var(--copper)",
  "Energy AI": "var(--sage)",
  "Agentic Systems": "var(--ink-muted)",
};

export function ResearchNotes() {
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
          className="flex items-center gap-6 mb-6"
        >
          <span className="label text-[var(--ink-faint)]">Research notes</span>
          <div className="flex-1 rule" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          className="text-xl md:text-2xl font-light text-[var(--ink-muted)] mb-16 max-w-lg"
        >
          Thinking in public. Not polished posts — honest notes.
        </motion.p>

        <div className="space-y-0">
          {researchNotes.map((note, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.2 }}
              className="group grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 py-10 border-b border-[var(--border)] cursor-pointer"
            >
              {/* Meta */}
              <div className="flex flex-col gap-2">
                <p className="label text-[var(--ink-faint)]">{note.date}</p>
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: tagColors[note.tag] || "var(--ink-faint)" }}
                  />
                  <span className="label" style={{ color: tagColors[note.tag] || "var(--ink-faint)" }}>
                    {note.tag}
                  </span>
                </div>
                <p className="label text-[var(--ink-faint)] mt-1">{note.readTime} read</p>
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  className="text-2xl md:text-3xl font-light text-[var(--ink)] leading-snug mb-4 group-hover:text-[var(--copper)] transition-colors duration-400"
                >
                  {note.title}
                </h3>
                <p className="text-sm leading-loose text-[var(--ink-muted)] max-w-prose">
                  {note.excerpt}
                </p>
                <p className="label text-[var(--copper)] mt-5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  Read more →
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
