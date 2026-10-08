"use client";

import React from "react";
import { BookingForm } from "./BookingForm";
import { Check } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 sm:py-36 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Huge violet-to-orange glow */}
      <div className="radial-glow-cta" aria-hidden="true" />

      {/* Masked line / grid pattern */}
      <div
        className="absolute inset-0 bg-grid-pattern mask-radial-fade opacity-35 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Sub, and 2 check lines */}
          <div className="lg:col-span-6 text-left">
            <span className="eyebrow-text block mb-3">Get in touch</span>
            <h2 id="cta-heading" className="headline-h2 text-[#F4F4F5] mb-5">
              Ready to stop being the best-kept secret?
            </h2>
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-8">
              Tell us about your business. We&apos;ll come back with a plan, not a pitch.
            </p>

            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-3 text-sm sm:text-base text-[#F4F4F5]">
                <div className="w-5 h-5 rounded-full bg-[#C6FF3D]/15 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
                <span>Free strategy call</span>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base text-[#F4F4F5]">
                <div className="w-5 h-5 rounded-full bg-[#C6FF3D]/15 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D] shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
                <span>Clear next steps, even if we don&apos;t work together</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glass card with BookingForm */}
          <div className="lg:col-span-6">
            <div className="glass-card-featured p-1 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              <BookingForm className="!bg-[var(--surface-2)]/90 backdrop-blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
