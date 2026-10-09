"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Logo } from "./Logo";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";

// Lucide-style 1.5 stroke brand icons
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050608] border-t border-[var(--border)] pt-16 pb-12 text-left" aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--border)]">
          {/* Brand Col (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Logo animated glyphSize="md" />
            <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed">
              Marketing for brands that don&apos;t do beige.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[#F4F4F5] hover:border-neutral-500 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[#F4F4F5] hover:border-neutral-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[#F4F4F5] hover:border-neutral-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Col 1: Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-[#F4F4F5] font-semibold mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {siteConfig.servicesList.slice(0, 6).map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-[var(--muted)] hover:text-[#F4F4F5] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Company (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-[#F4F4F5] font-semibold mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="#process" className="text-[var(--muted)] hover:text-[#F4F4F5] transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-[var(--muted)] hover:text-[#F4F4F5] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-[var(--muted)] hover:text-[#F4F4F5] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Reach us (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-[#F4F4F5] font-semibold mb-4">
              Reach us
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[var(--muted)]">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--muted)] shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#F4F4F5] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--muted)] shrink-0" strokeWidth={1.5} />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-[#F4F4F5] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[var(--muted)] shrink-0" strokeWidth={1.5} />
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4F4F5] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--muted)] shrink-0" strokeWidth={1.5} />
                <span>{siteConfig.city}, {siteConfig.country}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <p>© 2026 Offbeats. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#F4F4F5] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#F4F4F5] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
