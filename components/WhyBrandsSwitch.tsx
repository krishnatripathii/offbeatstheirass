"use client";
import React from "react";
import { TornEdge, Tape } from "./Collage";
import { TILTS, Z_INDEX } from "@/lib/collage";

const FEATURES = [
  {
    type: "sticky",
    title: "No middleman.",
    description: "The person who makes your stuff is the person who picks up your call.",
    tilt: TILTS.why.sticky
  },
  {
    type: "index",
    title: "Sounds like you, only better.",
    description: "Week one, we learn how you talk, sell and joke. After that, your posts stop reading like a template.",
    tilt: TILTS.why.index
  },
  {
    type: "notebook",
    title: "Every rupee earns its keep.",
    description: "Your ad money has a job. You'll see what it brought in, not how many strangers glanced at it.",
    tilt: TILTS.why.notebook
  },
  {
    type: "label",
    title: "Friday report, no jargon.",
    description: "One short message. What worked, what flopped, what we're changing. Two minutes to read.",
    tilt: TILTS.why.label
  }
];

export const WhyBrandsSwitch = () => {
  return (
    <section id="why" className="py-24 sm:py-32 relative bg-pink" style={{ zIndex: Z_INDEX.sheet }}>
      <TornEdge position="top" fill="var(--pink)" variant={1} />
      
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-16 relative">
          <span className="font-hand text-2xl text-ink absolute -top-8 left-0" style={{ transform: `rotate(${TILTS.why.eyebrow}deg)` }}>
            Why Offbeats
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,9 100,2" stroke="var(--ink)" strokeWidth="2" fill="none"/></svg>
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl text-ink leading-[1.05] uppercase mt-6">
            Other agencies send a calendar and ghost you. We're not built like that.
          </h2>
          <p className="font-body text-lg mt-6 max-w-[56ch] text-ink border-l-3 border-ink pl-4">
            You hired us to grow the business, not to post for the sake of posting. Fair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-12 relative">
          {/* Sticky Note */}
          <div className="bg-yellow p-8 shadow-hard relative aspect-square max-w-sm mx-auto flex flex-col justify-center" style={{ transform: `rotate(${FEATURES[0].tilt}deg)` }}>
            <Tape tilt={3} className="-top-3 left-1/2 -translate-x-1/2" width="w-16" />
            <h3 className="font-heading text-2xl uppercase mb-4">{FEATURES[0].title}</h3>
            <p className="font-body text-base">{FEATURES[0].description}</p>
          </div>

          {/* Index Card */}
          <div className="bg-paper p-8 border-3 border-ink shadow-hard relative aspect-video max-w-md mx-auto flex flex-col justify-center" style={{ transform: `rotate(${FEATURES[1].tilt}deg)` }}>
            <div className="absolute top-8 left-0 w-full h-[2px] bg-pink"></div>
            <Tape tilt={-2} className="-top-3 -right-2" width="w-16" />
            <h3 className="font-heading text-2xl uppercase mt-4 mb-4 relative z-10">{FEATURES[1].title}</h3>
            <p className="font-body text-base relative z-10">{FEATURES[1].description}</p>
          </div>

          {/* Notebook */}
          <div className="bg-white p-8 border-3 border-ink shadow-hard relative aspect-square max-w-sm mx-auto flex flex-col justify-center" style={{ transform: `rotate(${FEATURES[2].tilt}deg)`, backgroundImage: 'linear-gradient(transparent 95%, var(--blue) 95%)', backgroundSize: '100% 28px' }}>
            <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-pink"></div>
            <Tape tilt={1} className="-left-4 top-1/2 -translate-y-1/2" width="w-16" />
            <h3 className="font-heading text-2xl uppercase mb-4 pl-4 bg-white relative z-10">{FEATURES[2].title}</h3>
            <p className="font-body text-base pl-4 bg-white relative z-10 leading-relaxed">{FEATURES[2].description}</p>
          </div>

          {/* Label Maker */}
          <div className="bg-ink text-white p-6 border-3 border-white shadow-hard relative max-w-md mx-auto self-center" style={{ transform: `rotate(${FEATURES[3].tilt}deg)` }}>
            <Tape tilt={-3} className="-right-4 -bottom-4" width="w-16" />
            <h3 className="font-heading text-2xl uppercase mb-3">{FEATURES[3].title}</h3>
            <p className="font-body text-base">{FEATURES[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
