"use client";

import React, { useEffect, useState } from "react";

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full transition-transform duration-75 ease-out origin-left"
        style={{
          width: "100%",
          transform: `scaleX(${progress / 100})`,
          background: "linear-gradient(90deg, #FF5A1F 0%, #FF2E93 50%, #7B5CFF 100%)",
        }}
      />
    </div>
  );
};
