import React from "react";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { WhyBrandsSwitch } from "@/components/WhyBrandsSwitch";
import { WorkingTogether } from "@/components/WorkingTogether";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WorkSection } from "@/components/WorkSection";
import { WaysToWork } from "@/components/WaysToWork";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative flex flex-col w-full overflow-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Marquee strip */}
      <MarqueeStrip />

      {/* 3. Why brands switch */}
      <WhyBrandsSwitch />

      {/* 4. Working together */}
      <WorkingTogether />

      {/* 5. Services */}
      <Services />

      {/* 6. Process */}
      <Process />

      {/* 7. Work */}
      <WorkSection />

      {/* 8. Ways to work with us */}
      <WaysToWork />

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. Final CTA */}
      <FinalCTA />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}
