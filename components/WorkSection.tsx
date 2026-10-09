"use client";

import React from "react";
import { workItems } from "@/data/work";
import { useModal } from "./ModalContext";
import { ArrowUpRight } from "lucide-react";

export const WorkSection: React.FC = () => {
  const { openBooking } = useModal();

  return (
    <section id="work" className="py-20 sm:py-32 relative" aria-labelledby="work-heading">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="eyebrow-text block mb-3">Selected work</span>
          <h2 id="work-heading" className="headline-h2 text-[#F4F4F5] mb-5">
            A taste of what we make.
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Concepts built to get brands noticed.
          </p>
        </div>

        {/* Sticky stacking cards */}
        <div className="flex flex-col gap-8 relative">
          {workItems.map((item, idx) => {
            const abstractGradients = [
              "radial-gradient(ellipse at 80% 20%, rgba(255, 90, 31, 0.28) 0%, rgba(255, 46, 147, 0.15) 40%, rgba(13, 15, 18, 0.95) 100%)",
              "radial-gradient(ellipse at 20% 80%, rgba(123, 92, 255, 0.3) 0%, rgba(255, 46, 147, 0.18) 40%, rgba(13, 15, 18, 0.95) 100%)",
              "radial-gradient(ellipse at 60% 60%, rgba(198, 255, 61, 0.2) 0%, rgba(255, 90, 31, 0.2) 50%, rgba(13, 15, 18, 0.95) 100%)",
            ];

            return (
              <div
                key={item.id}
                style={{ top: `calc(100px + ${idx * 24}px)` }}
                className="sticky rounded-[24px] bg-[var(--surface)] border border-[var(--border)] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
                  {/* Left: Content */}
                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between text-left">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--surface-2)] border border-[var(--border)] text-[var(--muted)] mb-6">
                        Sample concept
                      </span>

                      <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#F4F4F5] mb-4">
                        {item.name}
                      </h3>

                      <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
                        {item.summary}
                      </p>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={openBooking}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#F4F4F5] hover:text-[var(--accent-1)] transition-colors group cursor-pointer"
                      >
                        <span>View concept</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right: Abstract gradient visual */}
                  <div
                    className="lg:col-span-7 relative min-h-[260px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[var(--border)] flex items-center justify-center p-8 overflow-hidden"
                    style={{ background: abstractGradients[idx % abstractGradients.length] }}
                  >
                    <div className="w-full max-w-md h-52 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 flex flex-col justify-between relative shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        </div>
                        <span className="text-[10px] font-mono tracking-wider text-[var(--muted)] uppercase">{item.category}</span>
                      </div>

                      <div className="space-y-2.5">
                        <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                        <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                      </div>

                      <div className="flex items-center pt-4 border-t border-white/10">
                        <span className="text-xs text-[var(--muted)]">Sample concept</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
