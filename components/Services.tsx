"use client";
import React, { useState } from "react";
import { useModal } from "./ModalContext";
import { TornEdge, Tape } from "./Collage";
import { TILTS, Z_INDEX } from "@/lib/collage";

const SERVICES = [
  { id: "brand", type: "sticker", title: "Brand identity.", summary: "A name, a look and a voice people spot from across the street.", expandLine: "You also get a one-page brand guide so everything you put out looks like the same hand made it.", tilt: TILTS.services.brand },
  { id: "social", type: "polaroid", title: "Social media.", summary: "Posts people send to their friends instead of scrolling past.", expandLine: "Planned monthly, designed in-house, posted when your customers are actually awake.", tilt: TILTS.services.social },
  { id: "video", type: "film", title: "Reels and video.", summary: "Videos that hook in two seconds flat. The rest is easy.", expandLine: "Script, shoot direction, edit and captions. You just show up.", tilt: TILTS.services.reels },
  { id: "ads", type: "tag", title: "Performance ads.", summary: "Meta and Google ads built to get enquiries. Likes don't pay rent.", expandLine: "We test, kill whatever wastes money and feed whatever works.", tilt: TILTS.services.ads },
  { id: "web", type: "window", title: "Websites.", summary: "A site that loads fast, looks sharp and turns visitors into bookings.", expandLine: "Built to fly on a budget phone and a patchy connection, because that's where your customers are.", tilt: TILTS.services.web },
  { id: "seo", type: "map", title: "Local SEO.", summary: "So when someone nearby searches for what you sell, it's you.", expandLine: "Google profile, reviews, local pages and the small fixes that push you up the map.", tilt: TILTS.services.seo }
];

export const Services = () => {
  const { openBooking } = useModal();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => setExpandedId(prev => (prev === id ? null : id));

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-blue" style={{ zIndex: Z_INDEX.sheet }}>
      <TornEdge position="top" fill="var(--blue)" variant={2} />
      
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-16 text-left relative">
          <span className="font-hand text-2xl text-white absolute -top-8 left-0">What we do</span>
          <h2 className="font-heading text-5xl sm:text-6xl text-white uppercase mt-6 leading-none">
            Your brand's full glow-up, à la carte.
          </h2>
          <p className="font-body text-lg text-white mt-6 max-w-[56ch] border-l-3 border-white pl-4 font-medium">
            Take one service or hand us the keys. Either way the plan is simple: more customers.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-12 pb-16 relative">
          {SERVICES.map((s) => {
            const isExpanded = expandedId === s.id;
            
            return (
              <div key={s.id} className="break-inside-avoid relative block w-full mb-8 cursor-pointer" onClick={() => toggleExpand(s.id)}>
                <div className={`relative transition-transform duration-200 ${isExpanded ? 'scale-[1.02]' : ''}`} style={{ transform: `rotate(${s.tilt}deg)` }}>
                  {s.type === "sticker" && (
                     <div className="bg-pink p-6 rounded-[22px] border-5 border-white ring-[1.5px] ring-ink shadow-hard relative">
                       <Tape tilt={-2} className="-top-3 right-4" width="w-16" />
                       <h3 className="font-heading text-2xl uppercase mb-2">{s.title}</h3>
                       <p className="font-body text-sm font-medium">{s.summary}</p>
                     </div>
                  )}
                  {s.type === "polaroid" && (
                     <div className="bg-white p-3 pb-8 border-3 border-ink shadow-hard relative">
                       <Tape tilt={2} className="-top-3 left-1/2 -translate-x-1/2" width="w-20" />
                       <div className="w-full aspect-square halftone-pink border-3 border-ink mb-4"></div>
                       <h3 className="font-heading text-xl uppercase mb-1">{s.title}</h3>
                       <p className="font-body text-sm font-medium">{s.summary}</p>
                     </div>
                  )}
                  {s.type === "film" && (
                     <div className="bg-ink p-4 border-3 border-white shadow-hard relative text-white">
                       <div className="flex gap-2 mb-4">
                         <div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div>
                       </div>
                       <h3 className="font-heading text-xl uppercase mb-2 text-yellow">{s.title}</h3>
                       <p className="font-body text-sm font-medium">{s.summary}</p>
                     </div>
                  )}
                  {s.type === "tag" && (
                     <div className="bg-paper p-6 border-3 border-ink shadow-hard relative" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 25%)' }}>
                       <div className="w-5 h-5 rounded-full bg-blue border-3 border-ink absolute top-5 left-5"></div>
                       <h3 className="font-heading text-2xl uppercase mb-2 mt-6">{s.title}</h3>
                       <p className="font-body text-sm font-medium">{s.summary}</p>
                     </div>
                  )}
                  {s.type === "window" && (
                     <div className="bg-white border-3 border-ink shadow-hard relative">
                       <div className="h-8 border-b-3 border-ink bg-paper flex items-center px-3 gap-2">
                         <span className="w-3 h-3 rounded-full border-2 border-ink bg-white"></span>
                         <span className="w-3 h-3 rounded-full border-2 border-ink bg-white"></span>
                         <span className="w-3 h-3 rounded-full border-2 border-ink bg-white"></span>
                       </div>
                       <div className="p-6">
                         <h3 className="font-heading text-xl uppercase mb-2">{s.title}</h3>
                         <p className="font-body text-sm font-medium">{s.summary}</p>
                       </div>
                     </div>
                  )}
                  {s.type === "map" && (
                     <div className="bg-yellow p-6 border-3 border-ink shadow-hard relative overflow-hidden">
                       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--ink) 1px, transparent 1.4px)', backgroundSize: '10px 10px' }}></div>
                       <div className="relative z-10">
                         <h3 className="font-heading text-2xl uppercase mb-2 bg-white px-2 py-1 inline-block border-2 border-ink">{s.title}</h3>
                         <p className="font-body text-sm font-semibold mt-2">{s.summary}</p>
                       </div>
                     </div>
                  )}
                </div>
                
                {/* Slide-out description */}
                <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-40 mt-3' : 'max-h-0 opacity-0'}`}>
                   <div className="p-4 bg-white border-3 border-ink font-body text-sm font-medium shadow-hard-sm" style={{ transform: `rotate(${-s.tilt}deg)` }}>
                     {s.expandLine}
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner tape strip */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between p-6 bg-ink border-y-4 border-paper shadow-hard mt-8" style={{ transform: `rotate(${TILTS.services.banner}deg)` }}>
          <div className="max-w-xl text-left mb-6 md:mb-0">
            <h3 className="font-heading text-2xl uppercase text-yellow mb-2 leading-none">Still replying to enquiries at midnight?</h3>
            <p className="font-body text-white font-medium">We set up WhatsApp replies that answer instantly, size up the lead and book the call while you sleep.</p>
          </div>
          <button onClick={openBooking} className="btn-primary">Make it automatic</button>
        </div>
      </div>
    </section>
  );
};
