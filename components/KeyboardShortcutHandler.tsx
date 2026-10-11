"use client";
import React, { useEffect, useState } from "react";
import { useModal } from "./ModalContext";
import { TILTS } from "@/lib/collage";

export const KeyboardShortcutHandler: React.FC = () => {
  const { openBooking, isBookingOpen } = useModal();
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const checkTouch = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(checkTouch());

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }
      if ((e.key === "b" || e.key === "B") && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        if (!isBookingOpen) openBooking();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openBooking, isBookingOpen]);

  if (isTouchDevice) return null;

  return (
    <div
      onClick={openBooking}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openBooking();
        }
      }}
      className="hidden lg:flex fixed bottom-8 right-8 z-[90] items-center gap-3 cursor-pointer group"
      aria-label="Press B to book a call"
    >
      <span className="font-hand text-xl text-ink transition-transform group-hover:-translate-y-1">book a call</span>
      <div 
        className="w-12 h-12 bg-white border-3 border-ink shadow-hard rounded-sm flex items-center justify-center font-heading text-2xl text-ink uppercase transition-all shadow-hard-hover shadow-hard-active" 
        style={{ transform: `rotate(${TILTS.hero?.keycap || -2}deg)` }}
      >
        B
      </div>
    </div>
  );
};
