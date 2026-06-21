"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-10 pt-32 overflow-hidden">
      {/* Faint vertical rule, purely decorative */}
      <div
        className="absolute left-[calc(50%+120px)] top-0 bottom-0 w-px hidden xl:block"
        style={{ background: "var(--border)" }}
      />

      <div className="max-site w-full">
        {/* Pre-title label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="label text-[var(--ink-faint)] mb-8"
        >
          AI Researcher & Engineer · Rutgers University · Class of 2026
        </motion.p>

        {/* Main name — editorial display */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="display-xl text-[var(--ink)]"
          >
            Sonakshi
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="display-xl text-[var(--ink)]"
            style={{ fontStyle: "italic" }}
          >
            Sharma
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="rule mt-10 mb-10"
        />

        {/* Tagline + credentials row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 300 }}
            className="text-2xl md:text-3xl text-[var(--ink)] leading-snug max-w-lg"
          >
            Building systems that help experts{" "}
            <em>make better decisions.</em>
          </p>

          <div className="flex flex-col gap-2 md:text-right shrink-0">
            {[
              "Cornell Break Through Tech AI Fellow",
              "IEEE NLP Fellow",
              "Medical AI Researcher",
              "RAD Collaboratory",
            ].map((cred) => (
              <p key={cred} className="label text-[var(--ink-faint)]">
                {cred}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-[var(--ink-faint)]"
        />
        <p className="label text-[var(--ink-faint)]">Scroll</p>
      </motion.div>
    </section>
  );
}
