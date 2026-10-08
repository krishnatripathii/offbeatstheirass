"use client";

import React, { useState } from "react";
import { siteConfig } from "@/site.config";
import { Check, Loader2, ArrowRight } from "lucide-react";

interface BookingFormProps {
  onSuccess?: () => void;
  className?: string;
}

const NEED_OPTIONS = [
  "Brand",
  "Social",
  "Ads",
  "Website",
  "Automation",
  "Not sure",
];

export const BookingForm: React.FC<BookingFormProps> = ({
  onSuccess,
  className = "",
}) => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const toggleNeed = (option: string) => {
    if (needs.includes(option)) {
      setNeeds(needs.filter((item) => item !== option));
    } else {
      setNeeds([...needs, option]);
    }
    if (validationErrors.needs) {
      setValidationErrors((prev) => ({ ...prev, needs: "" }));
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "Please enter your name";
    if (!businessName.trim()) errors.businessName = "Please enter your business name";
    if (!whatsapp.trim()) errors.whatsapp = "Please enter your WhatsApp number";
    if (needs.length === 0) errors.needs = "Please select at least one option";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          businessName: businessName.trim(),
          whatsapp: whatsapp.trim(),
          needs,
          notes: notes.trim(),
          honeypot,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      if (onSuccess) onSuccess();
    } catch {
      setStatus("error");
      setErrorMessage("That didn't go through. Try again or message us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className={`p-8 sm:p-10 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] text-center ${className}`}>
        <div className="w-12 h-12 rounded-full bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 text-[#C6FF3D] flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6" strokeWidth={2} />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-[#F4F4F5] mb-2">
          Got it. We&apos;ll message you shortly.
        </h3>
        <p className="text-[var(--muted)] text-sm mb-6 max-w-sm mx-auto">
          We received your details and are reviewing your market before we reach out.
        </p>
        <a
          href={siteConfig.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted)] hover:text-[#F4F4F5] transition-colors"
        >
          <span>Need immediate answers? WhatsApp us</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`relative p-6 sm:p-8 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] shadow-2xl flex flex-col gap-4 text-left ${className}`}
    >
      {/* Honeypot field for bot suppression */}
      <input
        type="text"
        id="company_title_check"
        name="company_title_check"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />

      {status === "error" && (
        <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-200 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="lead-name" className="block text-xs uppercase tracking-wider text-[var(--muted)] font-medium mb-1.5">
          Name
        </label>
        <input
          id="lead-name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (validationErrors.name) setValidationErrors((prev) => ({ ...prev, name: "" }));
          }}
          placeholder="Rohan Sharma"
          className={`w-full h-11 px-3.5 rounded-xl bg-[var(--surface)] text-[#F4F4F5] text-sm border ${
            validationErrors.name ? "border-red-500" : "border-[var(--border)]"
          } focus:outline-none focus:border-[#FF2E93] transition-colors placeholder:text-neutral-600`}
        />
        {validationErrors.name && (
          <p className="text-red-400 text-xs mt-1">{validationErrors.name}</p>
        )}
      </div>

      {/* Business Name */}
      <div>
        <label htmlFor="lead-business" className="block text-xs uppercase tracking-wider text-[var(--muted)] font-medium mb-1.5">
          Business name
        </label>
        <input
          id="lead-business"
          type="text"
          value={businessName}
          onChange={(e) => {
            setBusinessName(e.target.value);
            if (validationErrors.businessName) setValidationErrors((prev) => ({ ...prev, businessName: "" }));
          }}
          placeholder="Third Wave Roasters"
          className={`w-full h-11 px-3.5 rounded-xl bg-[var(--surface)] text-[#F4F4F5] text-sm border ${
            validationErrors.businessName ? "border-red-500" : "border-[var(--border)]"
          } focus:outline-none focus:border-[#FF2E93] transition-colors placeholder:text-neutral-600`}
        />
        {validationErrors.businessName && (
          <p className="text-red-400 text-xs mt-1">{validationErrors.businessName}</p>
        )}
      </div>

      {/* WhatsApp number */}
      <div>
        <label htmlFor="lead-whatsapp" className="block text-xs uppercase tracking-wider text-[var(--muted)] font-medium mb-1.5">
          WhatsApp number
        </label>
        <input
          id="lead-whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => {
            setWhatsapp(e.target.value);
            if (validationErrors.whatsapp) setValidationErrors((prev) => ({ ...prev, whatsapp: "" }));
          }}
          placeholder="+91 98765 43210"
          className={`w-full h-11 px-3.5 rounded-xl bg-[var(--surface)] text-[#F4F4F5] text-sm border ${
            validationErrors.whatsapp ? "border-red-500" : "border-[var(--border)]"
          } focus:outline-none focus:border-[#FF2E93] transition-colors placeholder:text-neutral-600`}
        />
        {validationErrors.whatsapp && (
          <p className="text-red-400 text-xs mt-1">{validationErrors.whatsapp}</p>
        )}
      </div>

      {/* Multi-select chips: What do you need? */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-[var(--muted)] font-medium mb-2">
          What do you need?
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Services needed">
          {NEED_OPTIONS.map((option) => {
            const isSelected = needs.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleNeed(option)}
                aria-pressed={isSelected}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-black border-white font-medium shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                    : "bg-[var(--surface)] text-[var(--text)] border-[var(--border)] hover:border-neutral-500"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        {validationErrors.needs && (
          <p className="text-red-400 text-xs mt-1">{validationErrors.needs}</p>
        )}
      </div>

      {/* Anything else we should know? */}
      <div>
        <label htmlFor="lead-notes" className="block text-xs uppercase tracking-wider text-[var(--muted)] font-medium mb-1.5">
          Anything else we should know?
        </label>
        <textarea
          id="lead-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Current hurdles, timeline, or current ad spend"
          className="w-full p-3 rounded-xl bg-[var(--surface)] text-[#F4F4F5] text-sm border border-[var(--border)] focus:outline-none focus:border-[#FF2E93] transition-colors placeholder:text-neutral-600 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 btn-primary mt-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </span>
        ) : (
          "Get my free plan"
        )}
      </button>

      {/* WhatsApp fallback link */}
      <div className="text-center mt-2">
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--muted)] hover:text-[#F4F4F5] transition-colors inline-block"
        >
          Prefer chatting? Message us on WhatsApp
        </a>
      </div>
    </form>
  );
};
