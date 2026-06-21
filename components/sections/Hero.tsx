"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Status badge */}
        <motion.div variants={item} className="mb-8 inline-flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            Open to research & engineering roles · Summer 2025
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.05]"
        >
          Sonakshi Sharma
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mt-4 text-2xl md:text-3xl font-light tracking-tight"
        >
          <span className="gradient-text font-medium">AI/ML Engineer</span>
          <span className="text-[var(--muted-foreground)]"> & </span>
          <span className="gradient-text font-medium">Researcher</span>
        </motion.p>

        {/* Statement */}
        <motion.p
          variants={item}
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed font-light"
        >
          I build intelligent systems that help experts make better decisions —
          in healthcare, energy, and beyond. Currently researching at the
          intersection of{" "}
          <span className="text-[var(--foreground)] font-medium">
            explainable AI
          </span>
          ,{" "}
          <span className="text-[var(--foreground)] font-medium">
            generative modeling
          </span>
          , and{" "}
          <span className="text-[var(--foreground)] font-medium">
            agentic reasoning
          </span>
          .
        </motion.p>

        {/* Credentials row */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--muted-foreground)]"
        >
          {[
            "Rutgers Honors College",
            "Cornell Break Through Tech AI",
            "IEEE NLP Fellow",
            "Medical AI Researcher",
          ].map((cred) => (
            <span key={cred} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-indigo-500" />
              {cred}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#building"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
          >
            <Sparkles size={15} />
            See what I&apos;m building
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/20 transition-all active:scale-95"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted-foreground)]"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
