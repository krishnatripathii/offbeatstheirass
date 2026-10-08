"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { WaveformGlyph } from "./WaveformGlyph";
import { useModal } from "./ModalContext";
import { Check, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Hero: React.FC = () => {
  const { openBooking } = useModal();
  const heroRef = useRef<HTMLElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 35 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current || !isDesktop) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x, y });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative pt-24 sm:pt-32 pb-20 sm:pb-32 overflow-hidden text-center"
      aria-label="Hero"
    >
      {/* Background radial glow */}
      <div className="radial-glow-hero" aria-hidden="true" />

      {/* Interactive cursor follow glow (desktop only) */}
      {isDesktop && (
        <div
          className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-25 transition-transform duration-300 ease-out z-0"
          style={{
            left: `${cursorPos.x}%`,
            top: `${cursorPos.y}%`,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(255, 90, 31, 0.4) 0%, rgba(255, 46, 147, 0.3) 40%, rgba(123, 92, 255, 0.2) 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Masked faint grid pattern */}
      <div
        className="absolute inset-0 bg-grid-pattern mask-radial-fade-hero pointer-events-none opacity-40 z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--surface-2)] border border-[var(--border)] shadow-inner mb-8 transition-transform hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-[#C6FF3D] shadow-[0_0_8px_#C6FF3D] animate-pulse" />
          <WaveformGlyph animated size="sm" className="text-[#F4F4F5]" />
          <span className="text-xs font-semibold tracking-wide text-[#F4F4F5]">
            Open for new projects
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="headline-h1 text-[#F4F4F5] max-w-4xl mx-auto mb-6">
          Your competitors are going to{" "}
          <span className="text-brand-gradient italic">hate this</span>.
        </h1>

        {/* Subhead */}
        <p className="text-base sm:text-lg text-[var(--muted)] max-w-[640px] mx-auto leading-relaxed mb-10">
          Offbeats builds brands, content and ads that make your competitors check your page twice. Your phone starts ringing. Your shop starts filling up.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
          <button
            onClick={openBooking}
            className="btn-primary w-full sm:w-auto px-7 h-12 text-sm font-semibold cursor-pointer shadow-[0_0_24px_rgba(255,255,255,0.2)]"
          >
            Book a free strategy call
          </button>
          <Link
            href="#work"
            className="btn-secondary w-full sm:w-auto px-7 h-12 text-sm font-medium"
          >
            See the work
          </Link>
        </div>

        {/* Micro line under buttons */}
        <div className="flex items-center justify-center gap-2 text-xs text-[var(--muted)] mb-16 sm:mb-20">
          <Check className="w-3.5 h-3.5 text-[#C6FF3D]" strokeWidth={2} />
          <span>Free 30-minute call. No pitch deck. No pressure.</span>
        </div>

        {/* Floating UI Cards Cluster */}
        <div className="w-full max-w-[1140px] relative mx-auto mt-2">
          {/* Mobile version: stacked 2 key cards */}
          <div className="flex flex-col gap-4 md:hidden text-left">
            {/* Card 1 on Mobile: Lead Alert */}
            <div className="glass-card-featured p-4 bg-[var(--surface-2)] shadow-2xl">
              <div className="flex items-center justify-between mb-3 border-b border-[var(--border)] pb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF5A1F] to-[#7B5CFF] flex items-center justify-center text-xs font-semibold text-white">
                    NE
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#F4F4F5]">New enquiry</div>
                    <div className="text-[10px] text-[var(--muted)]">WhatsApp chat</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#C6FF3D]/15 text-[#C6FF3D] border border-[#C6FF3D]/30">
                  Replied in 12s
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--surface)] text-xs text-[#F4F4F5] border border-white/5">
                &ldquo;Hi, do you have a table for 6 on Saturday?&rdquo;
              </div>
            </div>

            {/* Card 2 on Mobile: Content Calendar Preview */}
            <div className="glass-card p-4 bg-[var(--surface)] shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">Weekly Schedule</span>
                <span className="w-2 h-2 rounded-full bg-[#C6FF3D]" />
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
                <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                  <span className="block text-[var(--muted)] mb-1">Mon</span>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-[#FF5A1F]/20 text-[#FF5A1F] font-medium">Reel</span>
                </div>
                <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                  <span className="block text-[var(--muted)] mb-1">Wed</span>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-[#7B5CFF]/20 text-[#7B5CFF] font-medium">Carousel</span>
                </div>
                <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                  <span className="block text-[var(--muted)] mb-1">Fri</span>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-[#FF2E93]/20 text-[#FF2E93] font-medium">Story</span>
                </div>
                <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                  <span className="block text-[var(--muted)] mb-1">Sun</span>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-[#C6FF3D]/20 text-[#C6FF3D] font-medium">Offer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop & Tablet: Layered composed cluster */}
          <div className="hidden md:grid md:grid-cols-12 gap-5 relative text-left items-start">
            {/* 1. Content Calendar Card (Col 1-7) */}
            <div className="md:col-span-7 glass-card-featured p-5 bg-[var(--surface)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:translate-y-[-2px] transition-transform duration-300">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-[var(--text)] uppercase">
                    Publishing Matrix
                  </span>
                </div>
                <span className="text-[11px] text-[var(--muted)]">Week 42</span>
              </div>

              {/* 7-column calendar grid */}
              <div className="grid grid-cols-7 gap-2 text-center">
                {[
                  { day: "Mon", tag: "Reel", color: "bg-[#FF5A1F]/15 text-[#FF5A1F] border-[#FF5A1F]/30" },
                  { day: "Tue", tag: "Story", color: "bg-[#FF2E93]/15 text-[#FF2E93] border-[#FF2E93]/30" },
                  { day: "Wed", tag: "Carousel", color: "bg-[#7B5CFF]/15 text-[#7B5CFF] border-[#7B5CFF]/30" },
                  { day: "Thu", tag: "Reel", color: "bg-[#FF5A1F]/15 text-[#FF5A1F] border-[#FF5A1F]/30" },
                  { day: "Fri", tag: "Story", color: "bg-[#FF2E93]/15 text-[#FF2E93] border-[#FF2E93]/30" },
                  { day: "Sat", tag: "Offer", color: "bg-[#C6FF3D]/15 text-[#C6FF3D] border-[#C6FF3D]/30" },
                  { day: "Sun", tag: "Story", color: "bg-[#FF2E93]/15 text-[#FF2E93] border-[#FF2E93]/30" },
                ].map((col, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex flex-col items-center gap-2 transition-colors hover:border-white/20"
                  >
                    <span className="text-[11px] font-medium text-[var(--muted)]">{col.day}</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${col.color}`}>
                      {col.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Lead alert card (Col 8-12) */}
            <div className="md:col-span-5 glass-card-featured p-5 bg-[var(--surface-2)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:translate-y-[-2px] transition-transform duration-300">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF5A1F] via-[#FF2E93] to-[#7B5CFF] flex items-center justify-center text-xs font-bold text-white shadow-sm">
                    NE
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F4F4F5]">New enquiry</h4>
                    <p className="text-[10px] text-[var(--muted)]">Direct customer message</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#C6FF3D]/15 text-[#C6FF3D] border border-[#C6FF3D]/30 shadow-[0_0_8px_rgba(198,255,61,0.15)]">
                  Replied in 12s
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--surface)] text-xs text-[#F4F4F5] border border-[var(--border)] leading-relaxed relative">
                <span className="text-[var(--muted)] text-[10px] block mb-1">Incoming query</span>
                &ldquo;Hi, do you have a table for 6 on Saturday?&rdquo;
              </div>
            </div>

            {/* 3. Campaign card with rising trend (Col 1-7) */}
            <div className="md:col-span-7 glass-card p-5 bg-[var(--surface-2)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:translate-y-[-2px] transition-transform duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#F4F4F5] tracking-wide">
                  Enquiries this week
                </span>
                <span className="text-[11px] text-[#C6FF3D] font-medium flex items-center gap-1">
                  Active trajectory <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bar chart with 6 bars and rising trend line */}
              <div className="relative h-24 flex items-end justify-between px-3 pt-4">
                {/* SVG trend line overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path
                    d="M 8 72 Q 25 65 42 50 T 75 30 T 92 14"
                    fill="none"
                    stroke="#FF2E93"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(255,46,147,0.6)]"
                  />
                </svg>

                {/* 6 Bars */}
                {[
                  { height: "30%", active: false },
                  { height: "42%", active: false },
                  { height: "55%", active: false },
                  { height: "68%", active: false },
                  { height: "82%", active: false },
                  { height: "98%", active: true },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 z-10 w-8">
                    <div
                      style={{ height: bar.height }}
                      className={`w-full rounded-t-md transition-all ${
                        bar.active
                          ? "bg-gradient-to-t from-[#FF5A1F] via-[#FF2E93] to-[#7B5CFF] shadow-[0_0_14px_rgba(255,46,147,0.5)]"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Small approval card (Col 8-12) */}
            <div className="md:col-span-5 glass-card p-5 bg-[var(--surface)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:translate-y-[-2px] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A1D24] to-[#252A34] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <div className="w-5 h-5 rounded-md bg-[#FF5A1F]/30 border border-[#FF5A1F]/50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F4F4F5]">Reel 04 Final Cut</div>
                  <div className="text-[10px] text-[var(--muted)]">Ready for launch</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-[var(--border)]">
                <button
                  type="button"
                  className="flex-1 h-9 rounded-lg bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" strokeWidth={2} />
                  Approve
                </button>
                <button
                  type="button"
                  className="flex-1 h-9 rounded-lg bg-transparent text-[var(--muted)] hover:text-[#F4F4F5] border border-[var(--border)] hover:border-neutral-500 text-xs font-medium transition-colors cursor-pointer"
                >
                  Request change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
