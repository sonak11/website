"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Zap, Brain } from "lucide-react";

const domains = [
  {
    icon: Heart,
    label: "Medical AI",
    headline: "Clinicians deserve more than a score.",
    body: "I build explainable AI systems for clinical decision support — where a model's output includes not just a prediction, but a human-readable reason. Uncertainty quantification, SHAP-based explanations, and clinician-in-the-loop feedback loops.",
    tags: ["XAI", "SHAP", "EHR", "Clinical NLP"],
    color: "from-rose-500/10 to-pink-500/5",
    border: "border-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: Zap,
    label: "Energy AI",
    headline: "The grid needs better foresight.",
    body: "Generative models for synthetic time-series data in renewable energy — solving the sparse-data problem that plagues grid forecasting. Day-ahead load prediction that actually generalizes across weather regimes and seasonality shifts.",
    tags: ["Diffusion Models", "Time-Series", "Forecasting", "PyTorch"],
    color: "from-amber-500/10 to-yellow-500/5",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Brain,
    label: "Agentic Systems",
    headline: "Reasoning that checks its own work.",
    body: "Multi-step LLM agents with structured reflection loops, tool use, and retrieval-augmented reasoning — built for closed-domain expert tasks where hallucination is unacceptable. Architecture-first, not prompt-first.",
    tags: ["LangGraph", "RAG", "Tool Use", "Reflection Loops"],
    color: "from-indigo-500/10 to-violet-500/5",
    border: "border-indigo-500/20",
    iconColor: "text-indigo-400",
  },
];

export function WhatImBuilding() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="building" className="py-32 px-6">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-widest mb-4">
            What I&apos;m Building
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] max-w-2xl leading-tight">
            Three domains.{" "}
            <span className="text-[var(--muted-foreground)] font-light">
              One thread.
            </span>
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-xl text-lg leading-relaxed">
            Whether in a hospital, a control room, or a research lab — the best
            AI augments expert judgment rather than replacing it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className={`relative rounded-2xl border ${domain.border} bg-gradient-to-b ${domain.color} p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`mb-4 inline-flex rounded-xl bg-[var(--background)] p-2.5 ${domain.iconColor}`}>
                <domain.icon size={20} />
              </div>
              <p className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
                {domain.label}
              </p>
              <h3 className="text-base font-semibold text-[var(--foreground)] leading-snug mb-3">
                {domain.headline}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
                {domain.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {domain.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[var(--background)] border border-[var(--border)] px-2.5 py-1 text-xs font-mono text-[var(--muted-foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
