"use client";

import React from "react";
import Link from "next/link";
import { WaveformGlyph } from "./WaveformGlyph";

interface LogoProps {
  animated?: boolean;
  className?: string;
  glyphSize?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  animated = false,
  className = "",
  glyphSize = "md",
}) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E93] rounded-md ${className}`}
      aria-label="Offbeats home"
    >
      <span className="font-heading text-xl font-semibold tracking-tight text-[#F4F4F5] lowercase">
        offbeats
      </span>
      <WaveformGlyph animated={animated} size={glyphSize} className="text-[#F4F4F5]" />
    </Link>
  );
};
