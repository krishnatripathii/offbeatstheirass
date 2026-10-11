"use client";
import React from "react";
import { TILTS, Z_INDEX } from "@/lib/collage";

export const MarqueeStrip = () => {
  const items = Array.from({ length: 12 }).map(() => "offbeats");

  return (
    <div 
      className="w-full bg-ink overflow-hidden py-3 border-y-3 border-ink relative shadow-hard" 
      style={{ transform: `rotate(${TILTS.marquee}deg) scale(1.05)`, zIndex: Z_INDEX.tape }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeScroll { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .marquee-scroll { animation: marqueeScroll 20s linear infinite; }
      `}} />
      <div className="flex whitespace-nowrap marquee-scroll hover:[animation-play-state:paused] motion-reduce:animate-none w-max">
        {items.map((text, i) => (
          <div key={i} className="flex items-center">
            <span className="font-heading text-white text-3xl mx-6 uppercase tracking-tight">{text}</span>
            <span className="font-hand text-pink text-4xl mx-2 mt-2">*</span>
          </div>
        ))}
      </div>
    </div>
  );
};
