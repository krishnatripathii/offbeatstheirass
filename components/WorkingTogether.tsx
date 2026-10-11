"use client";
import React from "react";
import { Tape } from "./Collage";
import { TILTS, Z_INDEX } from "@/lib/collage";

const MESSAGES = [
  { sender: "offbeats", time: "10:14 AM", text: "Reel 4 is ready. First frame is steam rising off the cup. Trust us." },
  { sender: "you", time: "10:18 AM", text: "Okay that's actually fire. Post at 7?" },
  { sender: "offbeats", time: "10:21 AM", text: "Locked for 7. Ad B is beating Ad A, so we're moving the budget over." },
  { sender: "you", time: "10:22 AM", text: "Do it." }
];

export const WorkingTogether = () => {
  return (
    <section className="py-24 sm:py-32 relative bg-paper border-b-3 border-ink overflow-hidden" style={{ zIndex: Z_INDEX.sheet }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left: Text & Features */}
        <div className="lg:col-span-5 text-left relative z-20">
          <span className="font-hand text-2xl text-ink absolute -top-10 left-0" style={{ transform: `rotate(${TILTS.vibe.header}deg)` }}>
            The vibe
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl text-ink uppercase mb-6 leading-none">
            Basically your in-house team.<br/>Minus the salaries.
          </h2>
          <p className="font-body text-lg text-ink mb-10 max-w-[50ch]">
            One group chat, one-tap approvals, replies the same day. Marketing shouldn't feel like waiting for a parcel.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { title: "The group chat.", desc: "Your team and ours in one place. Ask anything, get an answer before your chai goes cold." },
              { title: "Thumbs up to approve.", desc: "See it, tap it, done. Or tell us what to tweak." },
              { title: "Zero sugarcoating.", desc: "If something's not working, you hear it from us first." }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12l4 4 12-12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl uppercase mb-1">{feature.title}</h3>
                  <p className="font-body text-base font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Phone Screenshot */}
        <div className="lg:col-span-7 relative z-10 flex justify-center lg:justify-end lg:pr-10">
          <div className="w-full max-w-md bg-white border-3 border-ink shadow-hard p-4 pb-8 relative" style={{ transform: `rotate(${TILTS.vibe.phone}deg)` }}>
            <Tape tilt={-2} className="-top-3 left-1/2 -translate-x-1/2" width="w-24" />
            
            {/* Chat Header */}
            <div className="flex items-center justify-between pb-3 border-b-3 border-ink mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-pink border-3 border-ink rounded-full flex items-center justify-center font-heading text-sm shadow-hard-sm">OB</div>
                <div>
                  <h4 className="font-heading text-sm uppercase leading-none mt-1">Offbeats x Your Brand</h4>
                  <p className="font-hand text-sm leading-none mt-1">Online</p>
                </div>
              </div>
              <span className="font-hand text-lg border-2 border-ink px-2 bg-yellow">WhatsApp</span>
            </div>

            {/* Chat Messages */}
            <div className="flex flex-col gap-4">
              {MESSAGES.map((msg, idx) => {
                const isOffbeats = msg.sender === "offbeats";
                return (
                  <div key={idx} className={`flex flex-col ${isOffbeats ? "items-start" : "items-end"}`}>
                    <div className={`max-w-[85%] px-4 py-3 border-3 border-ink shadow-hard-sm font-body text-sm font-medium ${isOffbeats ? "bg-paper rounded-tl-none" : "bg-yellow rounded-tr-none"}`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
