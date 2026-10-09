"use client";

import React, { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 80%"],
  });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 sm:py-32 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative">
        {/* Animated Dashed Connecting Line for Desktop Bento Tiles */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0" aria-hidden="true">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800" fill="none">
            <motion.path
              d="M 400 240 Q 600 240 800 240 C 950 240 950 480 800 480 Q 600 480 400 480 C 250 480 250 700 600 700"
              stroke="url(#process-line-gradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              style={{ pathLength: scrollYProgress }}
            />
            <defs>
              <linearGradient id="process-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#FF2E93" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7B5CFF" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="eyebrow-text block mb-3">The Offbeat method</span>
          <h2 id="process-heading" className="headline-h2 text-[#F4F4F5] mb-5">
            Four moves. No smoke and mirrors.
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            You&apos;ll see every move before it goes live.
          </p>
        </div>

        {/* 12-Column Asymmetric Bento Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tile 1: Do the homework (7 cols) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-[20px] bg-[var(--surface)] border border-[var(--border)] hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group text-left">
            <div className="relative z-10 mb-8 max-w-md">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5A1F] via-[#FF2E93] to-[#7B5CFF] p-[1px] mb-4">
                <div className="w-full h-full bg-[#0D0F12] rounded-full flex items-center justify-center text-xs font-semibold text-white">
                  01
                </div>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-[#F4F4F5] mb-2">
                Do the homework.
              </h3>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                We study your customers, your rivals and your numbers before opening a design file.
              </p>
            </div>

            {/* Mockup: Stack of 3 research notes */}
            <div className="relative h-28 sm:h-32 w-full max-w-[260px] self-end mt-4">
              <div className="absolute bottom-0 right-4 w-48 h-20 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-3 rotate-3 shadow-lg opacity-40">
                <div className="w-16 h-1.5 rounded-full bg-white/20 mb-2" />
                <div className="w-28 h-1.5 rounded-full bg-white/10" />
              </div>
              <div className="absolute bottom-2 right-2 w-48 h-20 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] p-3 -rotate-2 shadow-lg opacity-70">
                <div className="w-20 h-1.5 rounded-full bg-white/30 mb-2" />
                <div className="w-32 h-1.5 rounded-full bg-[#FF5A1F]/40" />
              </div>
              <div className="absolute bottom-4 right-0 w-52 h-22 rounded-xl bg-[#161A22] border border-white/15 p-3.5 shadow-xl rotate-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-[var(--muted)] uppercase">Competitor Audit</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
                </div>
                <div className="w-36 h-2 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#FF2E93] mb-1.5" />
                <div className="w-24 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          {/* Tile 2: Map it (5 cols) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-[20px] bg-[var(--surface)] border border-[var(--border)] hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group text-left">
            <div className="relative z-10 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5A1F] via-[#FF2E93] to-[#7B5CFF] p-[1px] mb-4">
                <div className="w-full h-full bg-[#0D0F12] rounded-full flex items-center justify-center text-xs font-semibold text-white">
                  02
                </div>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-[#F4F4F5] mb-2">
                Map it.
              </h3>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                One plan: who we&apos;re talking to, what we&apos;re saying, where, and how often.
              </p>
            </div>

            {/* Mockup: Mini month calendar */}
            <div className="p-3.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] w-full max-w-[220px] self-end mt-4 shadow-xl">
              <div className="text-[10px] font-medium text-[var(--muted)] mb-2 flex justify-between">
                <span>Month Plan</span>
                <span className="text-[#F4F4F5]">30 Days</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {[
                  "#FF5A1F", "#7B5CFF", "#FF2E93", "#C6FF3D", "#FF5A1F",
                  "#7B5CFF", "#FF2E93", "#C6FF3D", "#FF5A1F", "#7B5CFF",
                  "#FF2E93", "#C6FF3D", "#FF5A1F", "#7B5CFF", "#FF2E93",
                ].map((color, i) => (
                  <div key={i} className="h-4 rounded bg-[var(--surface)] border border-white/5 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tile 3: Ship it (5 cols) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-[20px] bg-[var(--surface)] border border-[var(--border)] hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group text-left">
            <div className="relative z-10 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5A1F] via-[#FF2E93] to-[#7B5CFF] p-[1px] mb-4">
                <div className="w-full h-full bg-[#0D0F12] rounded-full flex items-center justify-center text-xs font-semibold text-white">
                  03
                </div>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-[#F4F4F5] mb-2">
                Ship it.
              </h3>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                Everything goes live on a set schedule. &ldquo;Almost ready&rdquo; is not in our vocabulary.
              </p>
            </div>

            {/* Mockup: Publish queue */}
            <div className="p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] w-full max-w-[240px] self-end mt-4 shadow-xl flex flex-col gap-2">
              {[
                { title: "Meta Ad Creative", status: "Live" },
                { title: "Video Campaign", status: "Live" },
                { title: "Landing Page", status: "Live" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-[var(--surface)] border border-white/5 text-xs">
                  <span className="text-xs text-[#F4F4F5] font-medium">{row.title}</span>
                  <div className="flex items-center gap-1 text-[10px] text-[#C6FF3D] font-semibold">
                    <Check className="w-3 h-3 text-[#C6FF3D]" strokeWidth={2.5} />
                    <span>{row.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 4: Turn it up (7 cols) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-[20px] bg-[var(--surface)] border border-[var(--border)] hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group text-left">
            <div className="relative z-10 mb-6 max-w-md">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5A1F] via-[#FF2E93] to-[#7B5CFF] p-[1px] mb-4">
                <div className="w-full h-full bg-[#0D0F12] rounded-full flex items-center justify-center text-xs font-semibold text-white">
                  04
                </div>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-[#F4F4F5] mb-2">
                Turn it up.
              </h3>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                Every week we read the results and pour fuel on whatever&apos;s working.
              </p>
            </div>

            {/* Mockup: Bar chart — no number label */}
            <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] w-full max-w-[240px] self-end mt-4 shadow-xl">
              <div className="flex justify-between items-center text-[10px] text-[var(--muted)] mb-3">
                <span>Weekly iteration</span>
              </div>
              <div className="h-16 flex items-end justify-between gap-2 px-1">
                <div className="w-5 h-6 rounded-t bg-white/10" />
                <div className="w-5 h-9 rounded-t bg-white/15" />
                <div className="w-5 h-8 rounded-t bg-white/15" />
                <div className="w-5 h-15 rounded-t bg-gradient-to-t from-[#FF5A1F] via-[#FF2E93] to-[#7B5CFF] shadow-[0_0_12px_rgba(255,46,147,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
