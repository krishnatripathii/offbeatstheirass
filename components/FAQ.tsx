"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How fast will this work?",
    answer: "Ads and content start moving within the first month. Brand and search are slow burns. We'll tell you which is which.",
  },
  {
    question: "Do I need deep pockets?",
    answer: "Nope. We'll tell you what to spend and what to skip. If a smaller plan does the job, that's the plan.",
  },
  {
    question: "Do you get my kind of business?",
    answer: "We're best with cafes, clinics, retail, education and D2C. Not a fit? We'll say so on the call. No hard feelings.",
  },
  {
    question: "Who owns everything?",
    answer: "You do. Every account, file and password is yours from day one.",
  },
  {
    question: "Am I locked in?",
    answer: "No traps. Everything runs month to month.",
  },
  {
    question: "What do I have to do?",
    answer: "Show up for a 30-minute call, give us access and approve things quickly. We handle the rest.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 sm:py-32 relative" aria-labelledby="faq-heading">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 text-left">
            <span className="eyebrow-text block mb-3">FAQ</span>
            <h2 id="faq-heading" className="headline-h2 text-[#F4F4F5] mb-5">
              Stuff you&apos;re probably wondering.
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Short answers. Still curious? Ask us on the call.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-[18px] bg-[var(--surface)] border border-[var(--border)] overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E93]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                  >
                    <span className="font-heading text-lg font-medium text-[#F4F4F5]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0 text-[#F4F4F5] transition-transform duration-200 ${
                        isOpen ? "rotate-45 text-[var(--accent-1)]" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      className="px-6 pb-6 text-sm sm:text-base text-[var(--muted)] leading-relaxed animate-in fade-in duration-200"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
