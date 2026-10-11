"use client";
import React from "react";
import { useModal } from "./ModalContext";
import { Z_INDEX } from "@/lib/collage";

export const FinalCTA = () => {
  const { openBooking } = useModal();

  return (
    <section className="py-24 sm:py-32 relative bg-ink overflow-hidden border-b-3 border-paper" style={{ zIndex: Z_INDEX.sheet }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col items-center text-center relative z-20">
        
        <div className="relative mb-12 select-none">
          <span className="font-hand text-3xl text-pink absolute -top-10 left-1/2 -translate-x-1/2 transform -rotate-2 whitespace-nowrap">
            Last chance
          </span>
          <div className="relative">
            {/* Misregistration effect */}
            <h2 className="font-heading text-5xl sm:text-7xl uppercase leading-none text-pink absolute top-[4px] left-[4px] w-full pointer-events-none blend-multiply">
              Ready to stop blending in?
            </h2>
            <h2 className="font-heading text-5xl sm:text-7xl uppercase leading-none text-white relative">
              Ready to stop blending in?
            </h2>
          </div>
        </div>

        <p className="font-body text-xl max-w-2xl font-medium mb-12 text-paper leading-relaxed">
          Thirty minutes. We look at your brand, tell you what's broken, and how to fix it. If you want our help after that, great. If not, steal the plan.
        </p>

        <button onClick={openBooking} className="btn-primary text-xl px-12 py-5 shadow-hard hover:shadow-hard-hover active:shadow-hard-active">
          Book a call
        </button>
      </div>
    </section>
  );
};
