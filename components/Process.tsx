"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Tape } from "./Collage";
import { TILTS, Z_INDEX } from "@/lib/collage";

export const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 70%", "end 80%"] });

  const STEPS = [
    { title: "Do the homework.", desc: "We study your customers, your rivals and your numbers before opening a design file.", tilt: TILTS.process.scrap1, num: "01", icon: <circle cx="12" cy="12" r="8" fill="var(--yellow)" stroke="var(--ink)" strokeWidth="3" /> },
    { title: "Map it.", desc: "One plan: who we're talking to, what we're saying, where, and how often.", tilt: TILTS.process.scrap2, num: "02", icon: <rect x="4" y="4" width="16" height="16" fill="var(--blue)" stroke="var(--ink)" strokeWidth="3" /> },
    { title: "Ship it.", desc: "Everything goes live on a set schedule. \"Almost ready\" is not in our vocabulary.", tilt: TILTS.process.scrap3, num: "03", icon: <path d="M4 12l16 0 M14 6l6 6-6 6" fill="none" stroke="var(--ink)" strokeWidth="3" /> },
    { title: "Turn it up.", desc: "Every week we read the results and pour fuel on whatever's working.", tilt: TILTS.process.scrap4, num: "04", icon: <path d="M12 20v-8 M8 20v-4 M16 20v-12" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" /> }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-24 sm:py-32 relative bg-paper border-b-3 border-ink overflow-hidden" style={{ zIndex: Z_INDEX.sheet }}>
      {/* Continuous Dashed Arrow */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10 w-full h-full">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800" fill="none">
          <motion.path
            d="M 300 240 Q 600 200 900 350 T 300 550 Q 500 700 800 750"
            stroke="var(--ink)" strokeWidth="4" strokeDasharray="12 12" strokeLinecap="round"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-20">
        <div className="max-w-3xl mb-16 text-left relative">
          <span className="font-hand text-2xl text-ink absolute -top-8 left-0">The Offbeat method</span>
          <h2 className="font-heading text-5xl sm:text-6xl text-ink uppercase mt-6 leading-none">
            Four moves. No smoke and mirrors.
          </h2>
          <p className="font-body text-lg text-ink mt-6 max-w-[56ch] border-l-3 border-ink pl-4">
            You'll see every move before it goes live.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 mt-16">
          {STEPS.map((step, idx) => (
            <div key={idx} className={`relative flex flex-col items-center justify-center ${idx % 2 !== 0 ? 'lg:mt-32' : ''}`}>
              <div className="bg-white p-8 border-3 border-ink shadow-hard relative w-full max-w-sm" style={{ transform: `rotate(${step.tilt}deg)` }}>
                <Tape tilt={idx % 2 === 0 ? 2 : -2} className="-top-3 left-1/2 -translate-x-1/2" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full border-3 border-ink flex items-center justify-center font-hand text-3xl bg-pink text-ink shadow-hard-sm">
                    {step.num}
                  </div>
                  <svg width="40" height="40" viewBox="0 0 24 24" className="opacity-80">
                    {step.icon}
                  </svg>
                </div>
                
                <h3 className="font-heading text-2xl uppercase mb-3">{step.title}</h3>
                <p className="font-body text-base font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
