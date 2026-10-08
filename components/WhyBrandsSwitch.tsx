"use client";

import React from "react";
import { User, Mic, TrendingUp, CalendarCheck } from "lucide-react";

const FEATURES = [
  {
    icon: User,
    title: "One person who answers.",
    description: "You talk to the people doing the work. No account managers playing telephone.",
    accent: "from-[#FF5A1F]/20 to-[#FF5A1F]/5",
    iconColor: "text-[#FF5A1F]",
  },
  {
    icon: Mic,
    title: "Content in your voice.",
    description: "We spend week one learning how you talk, sell and joke. Then we write it that way.",
    accent: "from-[#FF2E93]/20 to-[#FF2E93]/5",
    iconColor: "text-[#FF2E93]",
  },
  {
    icon: TrendingUp,
    title: "Ads tied to revenue.",
    description: "Every rupee has a job. You'll see what it brought in, not just how many people scrolled past.",
    accent: "from-[#7B5CFF]/20 to-[#7B5CFF]/5",
    iconColor: "text-[#7B5CFF]",
  },
  {
    icon: CalendarCheck,
    title: "A Friday update you'll read.",
    description: "One short note in plain language. What worked, what didn't, what changes next week.",
    accent: "from-[#C6FF3D]/20 to-[#C6FF3D]/5",
    iconColor: "text-[#C6FF3D]",
  },
];

export const WhyBrandsSwitch: React.FC = () => {
  return (
    <section id="why" className="py-20 sm:py-32 relative" aria-labelledby="why-heading">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="eyebrow-text block mb-3">Why Offbeats</span>
          <h2 id="why-heading" className="headline-h2 text-[#F4F4F5] mb-5">
            Most agencies send a calendar and vanish. We stay until the numbers move.
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            You hired someone to grow the business, not to produce posts. Here&apos;s how we work differently.
          </p>
        </div>

        {/* 2x2 Grid on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-[20px] bg-[var(--surface)] border border-[var(--border)] hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle top gradient light on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Rounded glowing square icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${item.iconColor}`} strokeWidth={1.5} />
                </div>

                <h3 className="font-heading text-xl font-semibold text-[#F4F4F5] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
