"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { learningNotes } from "@/lib/data";

const tagColors: Record<string, string> = {
  "Energy AI": "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "Medical AI": "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "Agentic Systems": "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
};

export function LearningInPublic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-widest mb-4">
              Learning in Public
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
              Notes from the lab.
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)] text-lg max-w-lg">
              Short, honest write-ups on things I&apos;m figuring out — not
              polished posts, just thinking in public.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors shrink-0"
          >
            All notes <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {learningNotes.map((note, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                    tagColors[note.tag] || "text-gray-400 bg-gray-500/10 border-gray-500/20"
                  }`}
                >
                  {note.tag}
                </span>
                <span className="text-xs font-mono text-[var(--muted-foreground)]">
                  {note.date}
                </span>
              </div>

              <div className="mb-3 flex items-start gap-2">
                <BookOpen
                  size={14}
                  className="shrink-0 mt-1 text-[var(--muted-foreground)]"
                />
                <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug group-hover:text-indigo-400 transition-colors">
                  {note.title}
                </h3>
              </div>

              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {note.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
