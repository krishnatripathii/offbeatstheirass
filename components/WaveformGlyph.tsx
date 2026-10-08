"use client";

import React from "react";

interface WaveformGlyphProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export const WaveformGlyph: React.FC<WaveformGlyphProps> = ({
  className = "",
  size = "md",
  animated = false,
}) => {
  // Height and scale dimensions
  const dimensions = {
    sm: { width: 18, height: 16 },
    md: { width: 22, height: 20 },
    lg: { width: 28, height: 26 },
  }[size];

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .offbeats-bar-1 { animation: pulseBar1 1.4s ease-in-out infinite; }
          .offbeats-bar-2 { animation: pulseBar2 1.3s ease-in-out infinite 0.15s; }
          .offbeats-bar-3 { animation: pulseBar3 1.5s ease-in-out infinite 0.3s; }
          .offbeats-bar-4 { animation: pulseBar4 1.7s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.6s; }
          .offbeats-bar-5 { animation: pulseBar5 1.35s ease-in-out infinite 0.2s; }
        }

        @keyframes pulseBar1 {
          0%, 100% { transform: scaleY(0.7); }
          50% { transform: scaleY(1.15); }
        }
        @keyframes pulseBar2 {
          0%, 100% { transform: scaleY(1.15); }
          50% { transform: scaleY(0.65); }
        }
        @keyframes pulseBar3 {
          0%, 100% { transform: scaleY(0.85); }
          50% { transform: scaleY(1.25); }
        }
        @keyframes pulseBar4 {
          0%, 100% { transform: scaleY(0.55) translateY(2px); }
          45% { transform: scaleY(1.05) translateY(-1px); }
          75% { transform: scaleY(0.4) translateY(3px); }
        }
        @keyframes pulseBar5 {
          0%, 100% { transform: scaleY(1.0); }
          50% { transform: scaleY(0.6); }
        }
      `}</style>

      {/* Bar 1 */}
      <rect
        x="2"
        y="5"
        width="2.5"
        height="14"
        rx="1.25"
        fill="currentColor"
        className={animated ? "offbeats-bar-1 origin-center" : ""}
      />

      {/* Bar 2 */}
      <rect
        x="6.5"
        y="2"
        width="2.5"
        height="20"
        rx="1.25"
        fill="currentColor"
        className={animated ? "offbeats-bar-2 origin-center" : ""}
      />

      {/* Bar 3 */}
      <rect
        x="11"
        y="4"
        width="2.5"
        height="16"
        rx="1.25"
        fill="currentColor"
        className={animated ? "offbeats-bar-3 origin-center" : ""}
      />

      {/* Bar 4: The broken/off-beat bar, shifted downward and colored lime */}
      <rect
        x="15.5"
        y="9"
        width="2.5"
        height="11"
        rx="1.25"
        fill="#C6FF3D"
        className={animated ? "offbeats-bar-4 origin-bottom" : ""}
      />

      {/* Bar 5 */}
      <rect
        x="20"
        y="6"
        width="2.5"
        height="12"
        rx="1.25"
        fill="currentColor"
        className={animated ? "offbeats-bar-5 origin-center" : ""}
      />
    </svg>
  );
};
