"use client";
import React from "react";
import { useModal } from "./ModalContext";
import { TornEdge, Tape } from "./Collage";
import { TILTS, Z_INDEX } from "@/lib/collage";

export const WaysToWork = () => {
  const { openBooking } = useModal();

  return (
    <section id="pricing" className="py-24 sm:py-32 relative bg-pink" style={{ zIndex: Z_INDEX.sheet }}>
      <TornEdge position="top" fill="var(--pink)" variant={3} />
      
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center relative z-20">
        <h2 className="font-heading text-5xl sm:text-6xl text-ink uppercase mb-20 leading-none">
          Choose your starting level.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center sm:items-start mb-16 text-left">
          {/* Ticket Stub (Launch) */}
          <div className="bg-white border-3 border-ink shadow-hard p-8 pb-10 relative min-h-[380px] flex flex-col justify-between max-w-sm mx-auto w-full" style={{ transform: `rotate(${TILTS.ways.ticket}deg)`, clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), 95% 100%, 90% calc(100% - 12px), 85% 100%, 80% calc(100% - 12px), 75% 100%, 70% calc(100% - 12px), 65% 100%, 60% calc(100% - 12px), 55% 100%, 50% calc(100% - 12px), 45% 100%, 40% calc(100% - 12px), 35% 100%, 30% calc(100% - 12px), 25% 100%, 20% calc(100% - 12px), 15% 100%, 10% calc(100% - 12px), 5% 100%, 0 calc(100% - 12px))' }}>
            <Tape tilt={2} className="-top-3 left-10" width="w-20" />
            <div>
              <h3 className="font-heading text-3xl uppercase mb-4">Launch.</h3>
              <p className="font-body text-base font-medium">New brand? Get the identity, the website and your first month of content.</p>
            </div>
            <button onClick={openBooking} className="btn-secondary mt-8 w-full border-ink border-3">Start here</button>
          </div>

          {/* Index Card + Flag (Growth) */}
          <div className="bg-paper border-3 border-ink shadow-hard p-8 relative min-h-[420px] flex flex-col justify-between max-w-sm mx-auto w-full z-10" style={{ transform: `rotate(${TILTS.ways.index}deg)` }}>
            <div className="absolute top-10 left-0 w-full h-[2px] bg-pink"></div>
            <div className="absolute -top-4 -right-4 bg-yellow border-3 border-ink px-3 py-1 font-hand text-xl shadow-hard-sm" style={{ transform: `rotate(${TILTS.ways.badge}deg)` }}>Best starting point</div>
            
            <div className="mt-8 relative z-10">
              <h3 className="font-heading text-3xl uppercase mb-4">Growth.</h3>
              <p className="font-body text-base font-medium">Content, ads and reporting every month. For brands ready to get loud.</p>
            </div>
            <button onClick={openBooking} className="btn-primary mt-8 w-full">Let's talk</button>
          </div>

          {/* Receipt Roll (Full partner) */}
          <div className="bg-white border-3 border-ink border-b-0 shadow-hard p-8 pb-14 relative min-h-[380px] flex flex-col justify-between max-w-sm mx-auto w-full" style={{ transform: `rotate(${TILTS.ways.receipt}deg)`, clipPath: 'polygon(0 0, 100% 0, 100% 95%, 90% 100%, 80% 95%, 70% 100%, 60% 95%, 50% 100%, 40% 95%, 30% 100%, 20% 95%, 10% 100%, 0 95%)' }}>
            <Tape tilt={-2} className="-top-3 right-10" width="w-24" />
            <div>
              <div className="w-12 h-[2px] bg-ink mb-6 mx-auto border-t-2 border-b-2 border-dashed border-ink/40 bg-transparent"></div>
              <h3 className="font-heading text-3xl uppercase mb-4 text-center">Full partner.</h3>
              <p className="font-body text-base font-medium text-center">Hand us the whole thing. You focus on running the business.</p>
              <div className="w-12 h-[2px] bg-ink mt-6 mx-auto border-t-2 border-b-2 border-dashed border-ink/40 bg-transparent"></div>
            </div>
            <button onClick={openBooking} className="btn-ink mt-8 w-full">Take it all</button>
          </div>
        </div>

        {/* Hand-drawn note */}
        <div className="inline-block mt-8 font-hand text-2xl text-ink bg-paper px-4 py-2 border-3 border-ink shadow-hard-sm" style={{ transform: `rotate(${TILTS.ways.note}deg)` }}>
          Month to month. Stay only if it's working.
        </div>
      </div>
    </section>
  );
};
