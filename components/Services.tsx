"use client";

import React, { useState } from "react";
import {
  Palette,
  Share2,
  Video,
  Target,
  Globe,
  MapPin,
  ChevronDown,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useModal } from "./ModalContext";

interface ServiceItem {
  id: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  summary: string;
  expandLine: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "brand-identity",
    icon: Palette,
    title: "Brand identity.",
    summary: "A name, a look and a voice people spot from across the street.",
    expandLine: "You also get a one-page brand guide so everything you put out looks like the same hand made it.",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social media.",
    summary: "Posts people send to their friends instead of scrolling past.",
    expandLine: "Planned monthly, designed in-house, posted when your customers are actually awake.",
  },
  {
    id: "reels-video",
    icon: Video,
    title: "Reels and video.",
    summary: "Videos that hook in two seconds flat. The rest is easy.",
    expandLine: "Script, shoot direction, edit and captions. You just show up.",
  },
  {
    id: "performance-ads",
    icon: Target,
    title: "Performance ads.",
    summary: "Meta and Google ads built to get enquiries. Likes don't pay rent.",
    expandLine: "We test, kill whatever wastes money and feed whatever works.",
  },
  {
    id: "websites",
    icon: Globe,
    title: "Websites.",
    summary: "A site that loads fast, looks sharp and turns visitors into bookings.",
    expandLine: "Built to fly on a budget phone and a patchy connection, because that's where your customers are.",
  },
  {
    id: "local-seo",
    icon: MapPin,
    title: "Local SEO.",
    summary: "So when someone nearby searches for what you sell, it's you.",
    expandLine: "Google profile, reviews, local pages and the small fixes that push you up the map.",
  },
];

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { openBooking } = useModal();

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-20 sm:py-32 relative" aria-labelledby="services-heading">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="eyebrow-text block mb-3">What we do</span>
          <h2 id="services-heading" className="headline-h2 text-[#F4F4F5] mb-5">
            Your brand&apos;s full glow-up, à la carte.
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Take one service or hand us the keys. Either way the plan is simple: more customers.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="group p-7 rounded-[20px] bg-[var(--surface)] border border-[var(--border)] hover:border-white/20 transition-all duration-300 flex flex-col justify-between text-left hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-white/5 flex items-center justify-center text-[#F4F4F5] group-hover:text-[#FF5A1F] transition-colors mb-5">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-[#F4F4F5] mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[var(--muted)] leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4F4F5] hover:text-[var(--accent-1)] transition-colors cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <span>Learn more</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-[var(--accent-1)]" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>

                  {isExpanded && (
                    <div className="mt-3 p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-xs text-[#F4F4F5] leading-relaxed animate-in fade-in duration-200">
                      {service.expandLine}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Below grid: Wide banner card */}
        <div className="glass-card-featured p-6 sm:p-8 bg-[var(--surface-2)] shadow-2xl relative overflow-hidden text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 text-[#C6FF3D] flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(198,255,61,0.15)]">
                <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="max-w-2xl">
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#F4F4F5] mb-1.5">
                  Still replying to enquiries at midnight?
                </h3>
                <p className="text-sm sm:text-[15px] text-[var(--muted)] leading-relaxed">
                  We set up WhatsApp replies that answer instantly, size up the lead and book the call while you sleep.
                </p>
              </div>
            </div>

            <button
              onClick={openBooking}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F4F4F5] hover:text-[var(--lime)] transition-colors shrink-0 group cursor-pointer"
            >
              <span>Make it automatic</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
