import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/site.config";

export const metadata = {
  title: "Privacy Policy | Offbeats",
  description: "How Offbeats handles your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-24 px-5 sm:px-8 max-w-3xl mx-auto text-left">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[#F4F4F5] mb-12 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Offbeats</span>
      </Link>

      <span className="eyebrow-text block mb-3">Privacy</span>
      <h1 className="headline-h2 text-[#F4F4F5] mb-8">How we handle your data.</h1>

      <div className="flex flex-col gap-8 text-[var(--muted)] leading-relaxed text-base">
        <section>
          <h2 className="text-lg font-semibold text-[#F4F4F5] mb-2 font-heading">
            What we collect.
          </h2>
          <p>
            When you book a call or send a note through our site, you give us your name, business name, WhatsApp number and project notes. That is all we ask for.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F4F4F5] mb-2 font-heading">
            What we do with it.
          </h2>
          <p>
            We use your details to answer your questions, review your business and message you back. We never sell your contact details to third parties or ad brokers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F4F4F5] mb-2 font-heading">
            Your accounts and passwords.
          </h2>
          <p>
            When we run ad campaigns or manage channels for you, you invite our agency profile or share credentials securely. You remain the sole owner of all ad accounts, assets and media.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F4F4F5] mb-2 font-heading">
            Want your data deleted?
          </h2>
          <p>
            Send a note to {siteConfig.email}. We will delete your lead submission and records from our logs immediately.
          </p>
        </section>
      </div>
    </main>
  );
}
