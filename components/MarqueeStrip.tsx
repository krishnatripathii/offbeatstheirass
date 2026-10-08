"use client";

import React from "react";

const CAPABILITIES = [
  "Brand identity",
  "Social media",
  "Reels and video",
  "Performance ads",
  "Websites",
  "Local SEO",
  "WhatsApp automation",
  "Content strategy",
];

export const MarqueeStrip: React.FC = () => {
  return (
    <section className="relative py-8 overflow-hidden border-y border-[var(--border)] bg-[#07080A]/60" aria-label="Capabilities marquee">
      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          display: flex;
          width: max-content;
          animation: ticker 32s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-ticker {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
        }
        .mask-marquee-edges {
          mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
        }
      `}</style>

      <div className="mask-marquee-edges w-full overflow-hidden">
        <div className="animate-ticker items-center py-1">
          {/* Loop sequence duplicated for seamless scroll */}
          {[...CAPABILITIES, ...CAPABILITIES].map((item, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              <span className="text-sm md:text-base font-medium text-[var(--muted)] hover:text-[#F4F4F5] transition-colors px-6 tracking-wide">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
