import React from 'react';
import { Z_INDEX } from '@/lib/collage';

export const NoiseOverlay = () => (
  <svg className="pointer-events-none fixed inset-0 w-full h-full opacity-5 blend-multiply" style={{ zIndex: Z_INDEX.overlay }} aria-hidden="true">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

export const Tape = ({ className = "", tilt = 1, width = "w-24" }: { className?: string, tilt?: number, width?: string }) => (
  <div
    className={`absolute h-6 bg-[#E8E2B8] opacity-90 border border-white/40 shadow-sm backdrop-blur-[2px] ${width} ${className}`}
    style={{
      transform: `rotate(${tilt}deg)`,
      clipPath: 'polygon(0% 0%, 98% 5%, 100% 95%, 2% 100%, 0% 50%)',
      zIndex: Z_INDEX.tape
    }}
  />
);

export const TornEdge = ({ position = "top", fill = "var(--paper)", variant = 1, className = "" }: { position?: 'top' | 'bottom', fill?: string, variant?: number, className?: string }) => {
  const paths = [
    "M0,10 Q50,0 100,15 T200,5 T300,12 T400,2 T500,15 T600,5 T700,18 T800,8 T900,15 T1000,5 T1100,18 T1200,10 L1200,30 L0,30 Z",
    "M0,5 Q60,15 120,5 T240,18 T360,2 T480,15 T600,8 T720,20 T840,5 T960,15 T1080,2 T1200,12 L1200,30 L0,30 Z",
    "M0,15 Q40,5 80,15 T160,2 T240,18 T320,5 T400,20 T480,8 T560,15 T640,2 T720,18 T800,5 T880,15 T960,2 T1040,18 T1120,5 T1200,15 L1200,30 L0,30 Z",
    "M0,8 Q50,18 100,2 T200,15 T300,5 T400,20 T500,2 T600,15 T700,5 T800,18 T900,2 T1000,15 T1100,5 T1200,18 L1200,30 L0,30 Z"
  ];
  const d = paths[(variant - 1) % 4];
  return (
    <div className={`absolute left-0 right-0 h-[30px] w-full overflow-hidden ${position === 'top' ? '-top-[29px]' : '-bottom-[29px] rotate-180'} ${className}`} style={{ zIndex: Z_INDEX.sheet + 1 }} aria-hidden="true">
      <svg viewBox="0 0 1200 30" preserveAspectRatio="none" className="w-full h-full block">
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
};

export const Sticker = ({ children, tilt, className = "" }: { children: React.ReactNode, tilt: number, className?: string }) => (
  <div
    className={`absolute rounded-[22px] border-[5px] border-white ring-[1.5px] ring-ink shadow-hard-sm bg-pink text-ink flex items-center justify-center p-3 ${className}`}
    style={{ transform: `rotate(${tilt}deg)`, zIndex: Z_INDEX.sticker }}
  >
    {children}
  </div>
);

export const RansomWord = ({ text, bg, color, tilt, delay }: { text: string, bg: string, color: string, tilt: number, delay: number }) => (
  <span
    className="inline-block font-heading px-2 py-0.5 border-3 border-ink shadow-hard mx-1 uppercase animate-dropIn"
    style={{
      backgroundColor: `var(--${bg})`,
      color: `var(--${color})`,
      animationDelay: `${delay}s`,
    }}
  >
    <span className="inline-block" style={{ transform: `rotate(${tilt}deg)` }}>
      {text}
    </span>
  </span>
);
