"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, CheckCircle, ShieldCheck } from "lucide-react";

interface Message {
  sender: "offbeats" | "you";
  senderName: string;
  time: string;
  text: string;
}

const MESSAGES: Message[] = [
  {
    sender: "offbeats",
    senderName: "Offbeats",
    time: "10:14 AM",
    text: "Reel 4 is ready. First frame is steam rising off the cup. Trust us.",
  },
  {
    sender: "you",
    senderName: "You",
    time: "10:18 AM",
    text: "Okay that's actually fire. Post at 7?",
  },
  {
    sender: "offbeats",
    senderName: "Offbeats",
    time: "10:21 AM",
    text: "Locked for 7. Ad B is beating Ad A, so we're moving the budget over.",
  },
  {
    sender: "you",
    senderName: "You",
    time: "10:22 AM",
    text: "Do it.",
  },
];

export const WorkingTogether: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleMessagesCount, setVisibleMessagesCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timers: NodeJS.Timeout[] = [];
    MESSAGES.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleMessagesCount((prev) => Math.max(prev, index + 1));
      }, (index + 1) * 650);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [hasStarted]);

  return (
    <section ref={containerRef} className="py-20 sm:py-32 relative overflow-hidden" aria-labelledby="working-together-heading">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 text-left">
            <span className="eyebrow-text block mb-3">The vibe</span>
            <h2 id="working-together-heading" className="headline-h2 text-[#F4F4F5] mb-5">
              Basically your in-house team. Minus the salaries.
            </h2>
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-10">
              One group chat, one-tap approvals, replies the same day. Marketing shouldn&apos;t feel like waiting for a parcel.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0 text-[#FF5A1F]">
                  <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F4F4F5] mb-1">The group chat.</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Your team and ours in one place. Ask anything, get an answer before your chai goes cold.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0 text-[#FF2E93]">
                  <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F4F4F5] mb-1">Thumbs up to approve.</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    See it, tap it, done. Or tell us what to tweak.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0 text-[#C6FF3D]">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F4F4F5] mb-1">Zero sugarcoating.</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    If something&apos;s not working, you hear it from us first.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Chat mockup */}
          <div className="lg:col-span-7">
            <div className="glass-card-featured p-6 sm:p-8 bg-[var(--surface-2)] shadow-[0_25px_60px_rgba(0,0,0,0.7)] text-left relative">
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF5A1F] via-[#FF2E93] to-[#7B5CFF] flex items-center justify-center text-xs font-bold text-white shadow-sm">
                      OB
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#C6FF3D] border-2 border-[var(--surface-2)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F4F4F5]">Offbeats x Your Brand</h4>
                    <p className="text-[11px] text-[var(--muted)] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] inline-block" />
                      Online
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[var(--muted)] px-2.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)]">
                  WhatsApp
                </span>
              </div>

              {/* Chat Messages */}
              <div className="flex flex-col gap-4 min-h-[300px]">
                {MESSAGES.map((msg, idx) => {
                  const isVisible = idx < visibleMessagesCount;
                  const isOffbeats = msg.sender === "offbeats";

                  return (
                    <div
                      key={idx}
                      className={`flex flex-col transition-all duration-300 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
                      } ${isOffbeats ? "items-start" : "items-end"}`}
                    >
                      <div className="flex items-center gap-2 mb-1 px-1">
                        <span className="text-[11px] font-medium text-[var(--muted)]">{msg.senderName}</span>
                        <span className="text-[10px] text-neutral-600">{msg.time}</span>
                      </div>
                      <div
                        className={`max-w-[85%] sm:max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          isOffbeats
                            ? "bg-[var(--surface)] text-[#F4F4F5] border border-[var(--border)] rounded-tl-sm shadow-sm"
                            : "bg-gradient-to-r from-[#FF5A1F] to-[#FF2E93] text-white rounded-tr-sm shadow-[0_4px_16px_rgba(255,90,31,0.25)] font-medium"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  );
                })}

                {visibleMessagesCount > 0 && visibleMessagesCount < MESSAGES.length && (
                  <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] w-max text-xs text-[var(--muted)] animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
