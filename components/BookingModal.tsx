"use client";

import React, { useEffect, useRef } from "react";
import { useModal } from "./ModalContext";
import { BookingForm } from "./BookingForm";
import { X } from "lucide-react";

export const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBooking } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isBookingOpen) {
        closeBooking();
      }
    };

    if (isBookingOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isBookingOpen, closeBooking]);

  if (!isBookingOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={closeBooking}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg z-10 my-auto rounded-3xl bg-[var(--surface-2)] border border-[var(--border)] shadow-2xl p-6 sm:p-8 overflow-hidden"
      >
        {/* Glow */}
        <div
          className="absolute -top-24 -left-24 w-64 h-64 bg-[#7B5CFF]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#FF5A1F]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Header */}
        <div className="flex items-center justify-between mb-5 relative z-10">
          <div>
            <span className="eyebrow-text block mb-1">Direct Booking</span>
            <h2 id="booking-modal-title" className="font-heading text-xl sm:text-2xl font-semibold text-[#F4F4F5]">
              Book a free strategy call
            </h2>
          </div>
          <button
            onClick={closeBooking}
            className="w-9 h-9 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[#F4F4F5] hover:border-neutral-500 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Form */}
        <div className="relative z-10">
          <BookingForm className="!p-0 !bg-transparent !border-0 !shadow-none" />
        </div>
      </div>
    </div>
  );
};
