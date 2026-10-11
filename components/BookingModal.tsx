"use client";
import React, { useEffect, useRef } from "react";
import { useModal } from "./ModalContext";
import { BookingForm } from "./BookingForm";
import { Tape } from "./Collage";
import { TILTS } from "@/lib/collage";

export const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBooking } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape" && isBookingOpen) closeBooking(); };
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
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-ink/90 backdrop-blur-sm" onClick={closeBooking} />

      <div ref={modalRef} className="relative w-full max-w-lg z-10 my-auto animate-dropIn" style={{ transform: `rotate(${TILTS.hero.scrap1 || -1}deg)` }}>
        <Tape tilt={2} className="-top-3 left-1/2 -translate-x-1/2" width="w-24" />
        
        <button
          onClick={closeBooking}
          className="absolute -top-4 -right-4 w-12 h-12 bg-white border-3 border-ink shadow-hard rounded-full flex items-center justify-center font-hand text-3xl text-ink hover:bg-yellow hover:scale-110 transition-all cursor-pointer z-50 pb-1"
        >
          x
        </button>

        <div className="relative z-10 pt-4">
          <BookingForm className="!transform-none" />
        </div>
      </div>
    </div>
  );
};
