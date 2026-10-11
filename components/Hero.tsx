"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useModal } from "./ModalContext";
import { Tape, Sticker, RansomWord } from "./Collage";
import { TILTS, Z_INDEX } from "@/lib/collage";

export const Hero = () => {
  const { openBooking } = useModal();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowArrow(true), 800);
    return () => clearTimeout(t);
  }, []);

  const WORDS = [
    { text: "Your", bg: "pink", color: "ink", tilt: TILTS.hero.scrap1, delay: 0 },
    { text: "competitors", bg: "yellow", color: "ink", tilt: TILTS.hero.scrap2, delay: 0.07 },
    { text: "are", bg: "paper", color: "ink", tilt: TILTS.hero.scrap3, delay: 0.14 },
    { text: "going", bg: "paper", color: "ink", tilt: TILTS.hero.scrap4, delay: 0.21 },
    { text: "to", bg: "blue", color: "white", tilt: TILTS.hero.scrap5, delay: 0.28 },
    { text: "hate", bg: "ink", color: "paper", tilt: TILTS.hero.tape1, delay: 0.35 },
    { text: "this.", bg: "paper", color: "ink", tilt: TILTS.hero.tape2, delay: 0.42 },
  ];

  return (
    <section className="pt-24 sm:pt-32 pb-24 relative overflow-hidden bg-paper" style={{ zIndex: Z_INDEX.sheet }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Content Left */}
        <div className="lg:col-span-6 relative z-20">
          <Sticker tilt={TILTS.hero.sticker} className="absolute -top-6 -right-4 sm:-top-10 sm:-right-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full !bg-blue text-white z-40 flex">
            <div className="text-center font-heading text-[15px] sm:text-lg leading-tight uppercase">
              Taking on<br/>new brands
            </div>
          </Sticker>

          <h1 className="flex flex-wrap items-center gap-x-2 gap-y-3 sm:gap-y-4 mb-8 max-w-2xl relative text-5xl sm:text-7xl">
            <Tape tilt={-2} className="-top-3 left-10" width="w-20" />
            <Tape tilt={3} className="bottom-0 right-10" width="w-16" />
            {WORDS.map((w, i) => (
              <RansomWord key={i} text={w.text} bg={w.bg} color={w.color} tilt={w.tilt} delay={w.delay} />
            ))}
          </h1>

          <div className="relative mb-10 p-5 bg-white border-3 border-ink shadow-hard-sm" style={{ transform: `rotate(${TILTS.hero.scrap1}deg)` }}>
            <Tape tilt={2} className="-top-3 right-5" width="w-16" />
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(transparent 95%, var(--blue) 95%)', backgroundSize: '100% 28px' }} />
            <p className="font-body text-base sm:text-lg leading-relaxed relative z-10 max-w-[56ch]">
              Offbeats builds the brand, the content and the ads. You get the DMs, the bookings and the line out the door.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 relative">
            <button onClick={openBooking} className="btn-primary">
              Get your free game plan
            </button>
            <Link href="#work" className="btn-secondary">
              Peek at the work
            </Link>
            
            {showArrow && (
              <svg className="absolute -right-8 -bottom-10 w-20 h-20 animate-draw hidden sm:block" fill="none" viewBox="0 0 100 100" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 10 Q 50 80, 90 40 M 80 40 L 90 40 L 85 55" />
              </svg>
            )}
          </div>

          <div className="flex items-center gap-3 font-hand text-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12l4 4 12-12" />
            </svg>
            <span>30 minutes. Free. Zero cringe sales pitch.</span>
          </div>
        </div>

        {/* Pasted Objects Right */}
        <div className="lg:col-span-6 relative min-h-[400px] z-10 mt-10 lg:mt-0">
          <div className="absolute right-0 top-0 sm:top-10 w-full sm:w-[80%] bg-white border-3 border-ink shadow-hard p-6" style={{ transform: `rotate(${TILTS.hero.calendar}deg)`, backgroundImage: 'linear-gradient(var(--blue) 1px, transparent 1px), linear-gradient(90deg, var(--blue) 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundPosition: '-1px -1px' }}>
            <Tape tilt={-3} className="-top-3 left-10" width="w-24" />
            <div className="bg-paper border-3 border-ink p-1.5 px-3 mb-4 font-hand text-xl inline-block">This week's posts</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 bg-pink border-3 border-ink shadow-hard-sm transform -rotate-2"></div>
              <div className="h-16 bg-yellow border-3 border-ink shadow-hard-sm transform rotate-1"></div>
              <div className="h-16 bg-blue border-3 border-ink shadow-hard-sm transform -rotate-1"></div>
            </div>
          </div>

          <div className="absolute left-0 bottom-0 sm:bottom-10 w-[80%] sm:w-[60%] bg-white border-3 border-ink shadow-hard p-2 pb-6" style={{ transform: `rotate(${TILTS.hero.alert}deg)` }}>
            <Tape tilt={4} className="-top-4 right-4" width="w-20" />
            <div className="bg-paper border-3 border-ink h-32 flex items-center justify-center p-4 text-center">
              <div className="w-full">
                <span className="font-hand text-lg block mb-1">New message</span>
                <span className="font-body text-sm font-semibold">"Hi, do you have a table for 6 on Saturday?"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
