import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/site.config";

export const metadata = {
  title: "Terms of Service | Offbeats",
  description: "Terms and conditions for working with Offbeats.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-24 px-5 sm:px-8 max-w-3xl mx-auto text-left">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[#F4F4F5] mb-12 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Offbeats</span>
      </Link>

      <span className="eyebrow-text block mb-3">Terms</span>
      <h1 className="headline-h2 text-[#F4F4F5] mb-8">How we work together.</h1>

      <div className="flex flex-col gap-8 text-[var(--muted)] leading-relaxed text-base">
        <section>
          <h2 className="text-lg font-semibold text-[#F4F4F5] mb-2 font-heading">
            No long lock-ins.
          </h2>
          <p>
            We work on monthly cycles. If our work moves the needle for you, you stay. If it does not, you can pause or cancel before the next billing cycle.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F4F4F5] mb-2 font-heading">
            You own everything.
          </h2>
          <p>
            Every design file, raw video clip, ad copy document and creative asset produced during our engagement belongs to you. If we part ways, everything stays in your hands.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F4F4F5] mb-2 font-heading">
            Fast approvals.
          </h2>
          <p>
            Campaign momentum relies on quick reviews. We send content schedules and creatives in advance. When you approve promptly, we hit every delivery target without delay.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-[#F4F4F5] mb-2 font-heading">
            Questions?
          </h2>
          <p>
            Reach out directly at {siteConfig.email} or WhatsApp us anytime.
          </p>
        </section>
      </div>
    </main>
  );
}
