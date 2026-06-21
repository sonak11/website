"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const domainAccents: Record<string, string> = {
  "Agentic Systems": "border-t-indigo-500",
  "Medical AI": "border-t-rose-500",
  "Energy AI": "border-t-amber-500",
  "Research Infrastructure": "border-t-emerald-500",
};

export function FeaturedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-widest mb-4">
            Featured Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Built, not imagined.
          </h2>
          <p className="mt-3 text-[var(--muted-foreground)] text-lg">
            Systems that exist outside of notebooks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative flex flex-col rounded-2xl border border-[var(--border)] border-t-2 ${domainAccents[project.domain]} bg-[var(--card)] p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider mb-1">
                    {project.domain}
                  </p>
                  <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 mt-1 text-[var(--muted-foreground)] group-hover:text-indigo-400 transition-colors"
                />
              </div>

              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-[var(--background)] border border-[var(--border)] px-2 py-0.5 text-xs font-mono text-[var(--muted-foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
