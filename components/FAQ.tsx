"use client";
import React, { useState } from "react";
import { Z_INDEX } from "@/lib/collage";

const FAQS = [
  { question: "How fast will this work?", answer: "Ads and content start moving within the first month. Brand and search are slow burns. We'll tell you which is which." },
  { question: "Do I need deep pockets?", answer: "Nope. We'll tell you what to spend and what to skip. If a smaller plan does the job, that's the plan." },
  { question: "Do you get my kind of business?", answer: "We're best with cafes, clinics, retail, education and D2C. Not a fit? We'll say so on the call. No hard feelings." },
  { question: "Who owns everything?", answer: "You do. Every account, file and password is yours from day one." },
  { question: "Am I locked in?", answer: "No traps. Everything runs month to month." },
  { question: "What do I have to do?", answer: "Show up for a 30-minute call, give us access and approve things quickly. We handle the rest." }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => setOpenIndex(prev => (prev === index ? null : index));

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-paper border-y-3 border-ink" style={{ zIndex: Z_INDEX.sheet }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 text-left relative">
          <span className="font-hand text-3xl text-ink absolute -top-8 left-0 transform -rotate-2">FAQ</span>
          <h2 className="font-heading text-5xl sm:text-6xl text-ink uppercase mt-6 leading-none">
            Stuff you're probably wondering.
          </h2>
          <p className="font-body text-lg text-ink font-medium mt-6 max-w-sm">
            Short answers. Still curious? Ask us on the call.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col border-t-3 border-ink">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b-3 border-ink relative overflow-hidden group">
                {/* Highlighter fill */}
                <div className={`absolute inset-0 bg-yellow transition-transform duration-300 origin-left ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}></div>
                
                <button onClick={() => toggleFAQ(idx)} className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 relative z-10 cursor-pointer">
                  <span className="font-heading text-xl sm:text-2xl uppercase pr-4">{faq.question}</span>
                  <span className="font-hand text-4xl shrink-0 transition-transform duration-300 origin-center leading-none" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </button>
                
                <div className={`relative z-10 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 font-body text-lg font-medium">
                    {faq.answer}
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
