"use client";
import React from "react";
import { workItems } from "@/data/work";
import { useModal } from "./ModalContext";
import { Tape } from "./Collage";
import { TILTS, Z_INDEX } from "@/lib/collage";

export const WorkSection = () => {
  const { openBooking } = useModal();
  const tilts = [TILTS.work.card1, TILTS.work.card2, TILTS.work.card3];

  return (
    <section id="work" className="pt-16 pb-24 sm:pb-32 relative bg-paper border-b-3 border-ink overflow-hidden" style={{ zIndex: Z_INDEX.sheet }}>
      {/* Highlighter marker band across top */}
      <div className="absolute top-32 left-0 w-full h-12 bg-yellow mix-blend-multiply transform -skew-y-1"></div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-20 mt-8">
        <div className="max-w-3xl mb-24 text-left relative">
          <span className="font-hand text-2xl text-ink absolute -top-8 left-0" style={{ transform: `rotate(${TILTS.work.card1}deg)` }}>Selected work</span>
          <h2 className="font-heading text-5xl sm:text-6xl text-ink uppercase mt-6 leading-none relative z-10">
            A taste of what we make.
          </h2>
          <p className="font-body text-lg text-ink mt-6 max-w-[56ch] font-medium">
            Concepts built to get brands noticed.
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16 relative">
          {workItems.map((item, idx) => {
            const tilt = tilts[idx % tilts.length];

            return (
              <div key={item.id} className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row bg-white border-3 border-ink shadow-hard p-4 sm:p-6" style={{ transform: `rotate(${tilt}deg)` }}>
                <Tape tilt={idx % 2 === 0 ? 3 : -2} className="-top-4 left-1/2 -translate-x-1/2" width="w-24" />
                
                {/* Pink Rubber Stamp */}
                <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 border-4 border-pink text-pink rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center font-heading text-lg sm:text-xl uppercase text-center mix-blend-multiply opacity-90 p-2 leading-none shadow-hard-sm bg-paper/50 backdrop-blur-sm" style={{ transform: `rotate(${TILTS.work.stamp}deg)`, zIndex: Z_INDEX.sticker }}>
                  Sample<br/>Concept
                </div>

                {/* Image Area (Halftone) */}
                <div className="w-full md:w-1/2 aspect-video bg-paper border-3 border-ink halftone-blue flex items-center justify-center mb-6 md:mb-0 md:mr-8 relative overflow-hidden shadow-inner">
                  <span className="font-hand text-2xl text-ink bg-white px-3 py-1 border-2 border-ink shadow-sm">{item.category}</span>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center py-4 relative z-10">
                  <h3 className="font-heading text-2xl sm:text-3xl uppercase mb-4 pr-16">{item.name}</h3>
                  <p className="font-body text-base font-medium mb-8 leading-relaxed">
                    {item.summary}
                  </p>
                  
                  <div>
                    <button type="button" onClick={openBooking} className="group relative inline-flex items-center text-ink font-heading text-lg uppercase cursor-pointer">
                      <span className="relative z-10">View concept</span>
                      <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow mix-blend-multiply transition-all group-hover:h-[80%]"></span>
                    </button>
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
