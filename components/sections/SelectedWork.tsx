"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { selectedWork } from "@/lib/data";

export function SelectedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="work" className="section-pad border-t border-[var(--border)]" ref={ref}>
      <div className="max-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-20"
        >
          <span className="label text-[var(--ink-faint)]">Selected work</span>
          <div className="flex-1 rule" />
        </motion.div>

        {/* Project 001 — Large, 2-col */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 pb-16 border-b border-[var(--border)] mb-16"
        >
          <div>
            <ProjectMeta project={selectedWork[0]} />
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm leading-loose text-[var(--ink-muted)] mb-6">
              {selectedWork[0].description}
            </p>
            <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border)] p-5">
              <p className="label text-[var(--ink-faint)] mb-2">Key result</p>
              <p className="text-sm text-[var(--ink)] leading-relaxed">
                {selectedWork[0].highlight}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects 002 + 003 — side by side */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* 002 — narrow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            <ProjectMeta project={selectedWork[1]} />
            <p className="text-sm leading-loose text-[var(--ink-muted)]">
              {selectedWork[1].description}
            </p>
            <p className="text-xs text-[var(--copper)] leading-relaxed border-l-2 border-[var(--copper-light)] pl-3">
              {selectedWork[1].highlight}
            </p>
          </motion.div>

          {/* Vertical rule */}
          <div className="hidden md:flex justify-center">
            <div className="w-px bg-[var(--border)] h-full" />
          </div>

          {/* 003 — wide */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            <ProjectMeta project={selectedWork[2]} />
            <p className="text-sm leading-loose text-[var(--ink-muted)]">
              {selectedWork[2].description}
            </p>
            <p className="text-xs text-[var(--copper)] leading-relaxed border-l-2 border-[var(--copper-light)] pl-3">
              {selectedWork[2].highlight}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectMeta({ project }: { project: (typeof selectedWork)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Index */}
      <p
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        className="text-4xl font-light text-[var(--border)] mb-4"
      >
        {project.index}
      </p>

      {/* Domain */}
      <p className="label text-[var(--sage)] mb-3">{project.domain} · {project.year}</p>

      {/* Title */}
      <h3
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        className="text-3xl md:text-4xl font-light text-[var(--ink)] leading-tight mb-2"
      >
        {project.title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-[var(--ink-muted)] mb-5">{project.subtitle}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--ink-faint)]"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", letterSpacing: "0.04em" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
