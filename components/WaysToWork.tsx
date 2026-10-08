"use client";

import React from "react";
import { useModal } from "./ModalContext";
import { ArrowRight, Sparkles } from "lucide-react";

export const WaysToWork: React.FC = () => {
  const { openBooking } = useModal();

  const tiers = [
    {
      name: "Launch.",
      description: "For new brands. Identity, website and your first month of content.",
      featured: false,
    },
    {
      name: "Growth.",
      description: "Monthly content, ads and reporting. For businesses ready to scale.",
      featured: true,
      badge: "Most picked",
    },
    {
      name: "Full partner.",
      description: "We run your whole marketing. You run your business.",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-32 relative" aria-labelledby="ways-to-work-heading">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
        {/* H2 */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 id="ways-to-work-heading" className="headline-h2 text-[#F4F4F5] mb-4">
            Pick how you want to start.
          </h2>
        </div>

        {/* 3 Pricing-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10 text-left">
          {tiers.map((tier, idx) => {
            if (tier.featured) {
              return (
                <div
                  key={idx}
                  className="glass-card-featured p-8 sm:p-9 bg-[var(--surface-2)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between relative transform md:-translate-y-2 hover:-translate-y-3 transition-transform duration-300"
                >
                  <div>
                    {/* Small badge: Most picked */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF5A1F]/15 text-[#FF5A1F] border border-[#FF5A1F]/30 shadow-[0_0_12px_rgba(255,90,31,0.2)]">
                        <Sparkles className="w-3.5 h-3.5" />
                        {tier.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-semibold text-[#F4F4F5] mb-3">
                      {tier.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-8">
                      {tier.description}
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={openBooking}
                      className="w-full h-12 btn-primary text-sm font-semibold cursor-pointer shadow-[0_0_24px_rgba(255,255,255,0.2)]"
                    >
                      Talk to us
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="p-8 sm:p-9 rounded-[20px] bg-[var(--surface)] border border-[var(--border)] hover:border-white/20 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-[#F4F4F5] mb-3 mt-8">
                    {tier.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-8">
                    {tier.description}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={openBooking}
                    className="w-full h-12 btn-secondary text-sm font-medium cursor-pointer"
                  >
                    Talk to us
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small muted line under cards */}
        <p className="text-sm text-[var(--muted)]">
          Month-to-month. Stay because it&apos;s working.
        </p>
      </div>
    </section>
  );
};
