"use client";
import React, { useState } from "react";
import { siteConfig } from "@/site.config";

const NEED_OPTIONS = ["Brand", "Content", "Ads", "Web", "SEO", "Everything"];

export const BookingForm = ({ className = "", onSuccess }: { className?: string; onSuccess?: () => void }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [needs, setNeeds] = useState<string[]>([]);

  const toggleNeed = (need: string) => {
    setNeeds(prev => prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      if (onSuccess) onSuccess();
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className={`p-10 text-center bg-white border-3 border-ink shadow-hard ${className}`}>
        <div className="font-hand text-5xl text-pink mb-4 inline-block transform -rotate-6">Done!</div>
        <h3 className="font-heading text-3xl uppercase mb-2">You're on the list.</h3>
        <p className="font-body text-lg font-medium mb-8 max-w-sm mx-auto">
          We received your details. Keep an eye on WhatsApp.
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-lg uppercase underline decoration-3 decoration-pink hover:text-pink transition-colors"
        >
          Message us now instead
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-8 text-left bg-white p-8 border-3 border-ink shadow-hard ${className}`}>
      
      <div>
        <label htmlFor="lead-name" className="font-heading text-xl uppercase block mb-1">Name</label>
        <input
          id="lead-name" type="text" required placeholder=" "
          className="w-full bg-transparent border-0 border-b-3 border-ink py-2 focus:ring-0 focus:outline-none focus:border-pink font-body text-lg transition-colors placeholder:text-transparent"
        />
      </div>

      <div>
        <label htmlFor="lead-business" className="font-heading text-xl uppercase block mb-1">Business Name</label>
        <input
          id="lead-business" type="text" required placeholder=" "
          className="w-full bg-transparent border-0 border-b-3 border-ink py-2 focus:ring-0 focus:outline-none focus:border-pink font-body text-lg transition-colors placeholder:text-transparent"
        />
      </div>

      <div>
        <label htmlFor="lead-whatsapp" className="font-heading text-xl uppercase block mb-1">WhatsApp Number</label>
        <input
          id="lead-whatsapp" type="tel" required placeholder=" "
          className="w-full bg-transparent border-0 border-b-3 border-ink py-2 focus:ring-0 focus:outline-none focus:border-pink font-body text-lg transition-colors placeholder:text-transparent"
        />
      </div>

      <div>
        <label className="font-heading text-xl uppercase block mb-3">What do you need?</label>
        <div className="flex flex-wrap gap-4">
          {NEED_OPTIONS.map(option => {
            const isSelected = needs.includes(option);
            return (
              <button
                key={option} type="button" onClick={() => toggleNeed(option)}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <div className={`w-6 h-6 border-3 border-ink flex items-center justify-center transition-colors ${isSelected ? 'bg-yellow' : 'bg-transparent group-hover:bg-paper'}`}>
                  {isSelected && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-12 translate-x-0.5 -translate-y-1">
                      <path d="M4 12l4 4 12-12" />
                    </svg>
                  )}
                </div>
                <span className="font-body text-lg font-medium">{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="lead-notes" className="font-heading text-xl uppercase block mb-2">Anything else?</label>
        <textarea
          id="lead-notes" rows={3}
          className="w-full bg-transparent border-3 border-ink p-3 font-body text-lg focus:outline-none focus:border-pink resize-none shadow-inner"
          style={{ backgroundImage: 'linear-gradient(transparent 27px, var(--blue) 28px)', backgroundSize: '100% 28px', lineHeight: '28px' }}
        />
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full text-xl mt-4 cursor-pointer">
        {status === "loading" ? "Sending..." : "Submit details"}
      </button>
    </form>
  );
};
