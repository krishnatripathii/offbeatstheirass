"use client";

import React from "react";
import { siteConfig } from "@/site.config";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact">
      <style>{`
        @keyframes pulseWhatsApp {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
            transform: scale(1);
          }
          4% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
            transform: scale(1.06);
          }
          8% {
            transform: scale(1);
          }
        }
        .whatsapp-pulse {
          animation: pulseWhatsApp 8s infinite ease-in-out;
        }
      `}</style>
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-xl whatsapp-pulse active:scale-95 transition-transform"
        aria-label="Chat with Offbeats on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" strokeWidth={1.5} />
      </a>
    </aside>
  );
};
