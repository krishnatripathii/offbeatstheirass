import React from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Z_INDEX } from "@/lib/collage";

export const Footer = () => {
  const year = "2024";
  
  return (
    <footer className="bg-ink text-white pt-24 pb-0 relative overflow-hidden" style={{ zIndex: Z_INDEX.sheet }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b-3 border-white/20 pb-16">
        <div className="md:col-span-6 lg:col-span-4">
          <h3 className="font-heading text-4xl uppercase mb-6 text-white tracking-tight">offbeats</h3>
          <p className="font-body text-paper/90 max-w-sm font-medium text-lg leading-relaxed">
            We build brands, content and ads that get your business noticed, shared and booked.
          </p>
          <div className="mt-8">
            <a href={`mailto:${siteConfig.email}`} className="font-heading text-xl uppercase hover:text-yellow transition-colors underline decoration-2 underline-offset-4">{siteConfig.email}</a>
          </div>
        </div>

        <div className="md:col-span-3 lg:col-span-2 lg:col-start-7 mt-8 md:mt-0">
          <h4 className="font-hand text-2xl text-paper/50 mb-6 transform -rotate-2">Navigation</h4>
          <ul className="space-y-4 font-heading text-xl uppercase">
            <li><Link href="#services" className="hover:text-pink transition-colors inline-block hover:translate-x-1">Services</Link></li>
            <li><Link href="#process" className="hover:text-pink transition-colors inline-block hover:translate-x-1">Process</Link></li>
            <li><Link href="#work" className="hover:text-pink transition-colors inline-block hover:translate-x-1">Work</Link></li>
            <li><Link href="#faq" className="hover:text-pink transition-colors inline-block hover:translate-x-1">FAQ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3 lg:col-span-2 mt-8 md:mt-0">
          <h4 className="font-hand text-2xl text-paper/50 mb-6 transform rotate-2">Socials</h4>
          <ul className="space-y-4 font-heading text-xl uppercase">
            <li><a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors inline-block hover:translate-x-1">Instagram</a></li>
            <li><a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors inline-block hover:translate-x-1">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row justify-between items-center text-sm font-body font-medium text-paper/60 mb-[16vw] sm:mb-[10vw]">
        <p>© {year} Offbeats Agency. All rights reserved.</p>
        <p>Made in {siteConfig.city}, {siteConfig.country}</p>
      </div>

      {/* Giant half-clipped pink wordmark */}
      <div className="w-full flex justify-center absolute bottom-0 left-0 right-0 pointer-events-none select-none translate-y-[35%]">
        <span className="font-heading text-[28vw] leading-none uppercase text-pink tracking-tighter mix-blend-screen opacity-90" style={{ transform: 'scaleY(0.9)' }}>
          offbeats
        </span>
      </div>
    </footer>
  );
};
