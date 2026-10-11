"use client";
import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { useModal } from "./ModalContext";

export const Navbar = () => {
  const { openBooking } = useModal();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-white border-b-3 border-ink z-[100] h-20 flex items-center">
        <div className="max-w-[1200px] w-full mx-auto px-5 sm:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl lowercase tracking-tight">offbeats</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
              <path d="M4 12h4l2-6 4 12 2-6h4" stroke="var(--pink)" />
            </svg>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 font-heading-ui text-sm uppercase">
            <Link href="#services" className="hover:bg-yellow hover:shadow-hard-sm px-2 py-1 transition-all border-2 border-transparent hover:border-ink">Services</Link>
            <Link href="#process" className="hover:bg-yellow hover:shadow-hard-sm px-2 py-1 transition-all border-2 border-transparent hover:border-ink">Process</Link>
            <Link href="#work" className="hover:bg-yellow hover:shadow-hard-sm px-2 py-1 transition-all border-2 border-transparent hover:border-ink">Work</Link>
            <Link href="#faq" className="hover:bg-yellow hover:shadow-hard-sm px-2 py-1 transition-all border-2 border-transparent hover:border-ink">FAQ</Link>
            <a href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`} className="hover:bg-yellow hover:shadow-hard-sm px-2 py-1 transition-all border-2 border-transparent hover:border-ink" target="_blank" rel="noopener noreferrer">
              Slide into WhatsApp
            </a>
            <button onClick={openBooking} className="btn-primary py-2 px-5 text-xs">Book a call</button>
          </nav>
          
          <button className="md:hidden p-2 border-3 border-ink shadow-hard-sm bg-yellow" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="font-heading-ui text-sm uppercase">{mobileOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-pink z-[90] flex flex-col pt-24 px-5 pb-10 overflow-y-auto border-b-3 border-ink">
          <nav className="flex flex-col gap-6 font-heading text-4xl uppercase mb-12">
            <Link href="#services" onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors w-max">Services</Link>
            <Link href="#process" onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors w-max">Process</Link>
            <Link href="#work" onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors w-max">Work</Link>
            <Link href="#faq" onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors w-max">FAQ</Link>
            <a href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`} className="hover:text-white transition-colors w-max" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </nav>
          <button onClick={() => { setMobileOpen(false); openBooking(); }} className="btn-ink mt-auto w-full text-center py-5 text-xl">
            Book a call
          </button>
        </div>
      )}
    </>
  );
};
