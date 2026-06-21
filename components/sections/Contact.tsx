"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contact" className="section-pad border-t border-[var(--border)]" ref={ref}>
      <div className="max-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-20"
        >
          <span className="label text-[var(--ink-faint)]">Contact</span>
          <div className="flex-1 rule" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              className="display-md text-[var(--ink)] mb-8"
            >
              Let&apos;s think<br />
              <em>together.</em>
            </h2>
            <p className="text-sm leading-loose text-[var(--ink-muted)] max-w-sm">
              I&apos;m open to research collaborations, engineering roles, and
              conversations about AI in high-stakes domains. If you&apos;re
              working on something hard, I&apos;d love to hear about it.
            </p>
          </motion.div>

          {/* Right — links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-0"
          >
            {[
              { label: "Email", value: "sonakshi@example.com", href: "mailto:sonakshi@example.com", note: "Best for research conversations" },
              { label: "LinkedIn", value: "/in/sonakshisharma", href: "https://linkedin.com", note: "Professional background" },
              { label: "GitHub", value: "github.com/sonakshi", href: "https://github.com", note: "Code and projects" },
              { label: "Resume", value: "Download PDF", href: "#", note: "Full CV on request" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 + 0.3 }}
                className="group flex items-center justify-between py-6 border-b border-[var(--border)] hover:border-[var(--copper-light)] transition-colors duration-300"
              >
                <div>
                  <p className="label text-[var(--ink-faint)] mb-1">{item.label}</p>
                  <p className="text-base text-[var(--ink)] group-hover:text-[var(--copper)] transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
                <div className="text-right">
                  <p className="label text-[var(--ink-faint)]">{item.note}</p>
                  <p className="text-[var(--copper)] text-sm mt-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    ↗
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 text-center"
        >
          <p
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            className="text-lg font-light text-[var(--ink-faint)] italic"
          >
            Based in New Jersey · Open to remote and on-site · Available Summer 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
