"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Logo } from "./Logo";
import { useModal } from "./ModalContext";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 h-[68px] w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#07080A]/85 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-[#07080A]/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto h-full px-5 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Logo glyphSize="md" />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] hover:text-[#F4F4F5] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--muted)] hover:text-[#F4F4F5] transition-colors"
          >
            WhatsApp us
          </a>
          <button
            onClick={openBooking}
            className="btn-primary text-xs px-5 h-9 cursor-pointer"
          >
            Book a free call
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-[var(--muted)] hover:text-[#F4F4F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E93] rounded-lg"
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#07080A] flex flex-col p-6 sm:p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between h-[68px]">
            <Logo glyphSize="md" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[var(--muted)] hover:text-[#F4F4F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E93] rounded-lg"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto text-left" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-3xl font-semibold text-[#F4F4F5] hover:text-[var(--accent-1)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-6 border-t border-[var(--border)]">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full h-12 btn-secondary text-sm flex items-center justify-center font-medium"
            >
              WhatsApp us
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full h-12 btn-primary text-sm font-semibold cursor-pointer"
            >
              Book a free call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
