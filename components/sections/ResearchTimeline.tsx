"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { timeline } from "@/lib/data";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  research: "bg-indigo-500",
  fellowship: "bg-violet-500",
  leadership: "bg-emerald-500",
};

const typeLabels: Record<string, string> = {
  research: "Research",
  fellowship: "Fellowship",
  leadership: "Leadership",
};

const filters = ["all", "research", "fellowship", "leadership"] as const;

export function ResearchTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? timeline : timeline.filter((t) => t.type === filter);

  return (
    <section id="timeline" className="py-24 px-6 bg-[var(--muted)]/30">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-widest mb-4">
            Research Timeline
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            How I got here.
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all capitalize",
                filter === f
                  ? "bg-indigo-600 text-white"
                  : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              )}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border)] md:left-8" />

          <div className="space-y-8">
            {filtered.map((event, i) => (
              <motion.div
                key={`${event.role}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 + 0.3 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Dot */}
                <div
                  className={cn(
                    "absolute left-2.5 top-1.5 w-3 h-3 rounded-full ring-4 ring-[var(--background)] md:left-6",
                    typeColors[event.type]
                  )}
                />

                <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-indigo-500/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--foreground)]">
                        {event.role}
                      </h3>
                      <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                        {event.org}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-mono text-[var(--muted-foreground)]">
                        {event.year}
                      </span>
                      <span
                        className={cn(
                          "rounded-full w-1.5 h-1.5",
                          typeColors[event.type]
                        )}
                      />
                      <span className="text-xs text-[var(--muted-foreground)] capitalize">
                        {typeLabels[event.type]}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
