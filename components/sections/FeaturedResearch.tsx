"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { research } from "@/lib/data";
import { cn } from "@/lib/utils";

const domainColors: Record<string, string> = {
  "Medical AI": "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "Energy AI": "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "NLP Research": "text-sky-400 bg-sky-500/10 border-sky-500/20",
};

const statusColors: Record<string, string> = {
  Active: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Published: "text-violet-400 bg-violet-500/10 border-violet-500/20",
};

export function FeaturedResearch() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<string | null>(null);

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
            Featured Research
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Active directions.
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)] text-lg">
            Research that&apos;s meant to leave the notebook.
          </p>
        </motion.div>

        <div className="space-y-4">
          {research.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === item.id ? null : item.id)
                }
                className="w-full text-left p-6 flex items-start justify-between gap-4 group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                        domainColors[item.domain]
                      )}
                    >
                      {item.domain}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                        statusColors[item.status]
                      )}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expanded === item.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1 shrink-0 text-[var(--muted-foreground)]"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expanded === item.id ? "auto" : 0,
                  opacity: expanded === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-[var(--border)] pt-5">
                  <div className="rounded-xl bg-indigo-500/5 border border-indigo-500/15 p-4 mb-4">
                    <p className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                      Key finding
                    </p>
                    <p className="text-sm text-[var(--foreground)]">
                      {item.highlight}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[var(--muted)] px-2.5 py-1 text-xs font-mono text-[var(--muted-foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
