"use client";

import React, { useEffect, useState } from "react";
import { useModal } from "./ModalContext";

export const KeyboardShortcutHandler: React.FC = () => {
  const { openBooking, isBookingOpen } = useModal();
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect if device supports touch only
    const checkTouch = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };
    setIsTouchDevice(checkTouch());

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input, textarea, or contentEditable element
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
        if (!isBookingOpen) {
          openBooking();
        }
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
      className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-2)]/90 backdrop-blur-md border border-[var(--border)] shadow-lg hover:border-neutral-500 cursor-pointer transition-all hover:scale-105 group"
      aria-label="Press B to book a call"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] animate-pulse" />
      <span className="text-xs text-[var(--muted)] group-hover:text-[#F4F4F5] font-medium">
        Press <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-white/10 text-white font-mono text-[11px] font-semibold">B</kbd> to book
      </span>
    </div>
  );
};
