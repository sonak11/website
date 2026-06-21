"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, FileText, ArrowUpRight } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "sonakshi@example.com",
    href: "mailto:sonakshi@example.com",
    desc: "Best for research conversations",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "/in/sonakshisharma",
    href: "https://linkedin.com",
    desc: "Professional background",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/sonakshi",
    href: "https://github.com",
    desc: "Code and projects",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "#",
    desc: "Full CV available on request",
  },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-5">
            Let&apos;s work together.
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-xl mx-auto leading-relaxed">
            I&apos;m actively looking for research collaborations, engineering
            roles, and conversations about the intersection of AI and
            high-stakes decision-making.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
              className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="rounded-lg bg-[var(--muted)] p-2.5 text-[var(--muted-foreground)] group-hover:text-indigo-400 transition-colors shrink-0">
                <link.icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-mono font-medium text-[var(--muted-foreground)] uppercase tracking-wider">
                    {link.label}
                  </p>
                  <ArrowUpRight
                    size={14}
                    className="text-[var(--muted-foreground)] group-hover:text-indigo-400 transition-colors shrink-0"
                  />
                </div>
                <p className="text-sm font-medium text-[var(--foreground)] mt-0.5 truncate">
                  {link.value}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                  {link.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[var(--muted-foreground)]">
            Based in New Jersey · Open to remote and on-site opportunities
          </p>
          <p className="text-xs text-[var(--muted-foreground)]/60 mt-2 font-mono">
            CS + Data Science · Statistics Minor · Rutgers Honors College &apos;26
          </p>
        </motion.div>
      </div>
    </section>
  );
}
