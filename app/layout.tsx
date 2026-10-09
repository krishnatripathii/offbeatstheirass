import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/site.config";
import { ModalProvider } from "@/components/ModalContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import { KeyboardShortcutHandler } from "@/components/KeyboardShortcutHandler";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BookingModal } from "@/components/BookingModal";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07080A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://offbeats.agency"), // [ADD] replace with your real domain once connected
  title: "Offbeats | Marketing That Gets Your Brand Talked About",
  description:
    "Offbeats builds brands, content and ads that get your business noticed, shared and booked. Free strategy call.",
  keywords: [
    "marketing agency",
    "brand identity",
    "performance ads",
    "social media agency",
    "reels production",
    "local seo",
    "india marketing agency",
  ],
  authors: [{ name: "Offbeats" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Offbeats | Marketing That Gets Your Brand Talked About",
    description:
      "Offbeats builds brands, content and ads that get your business noticed, shared and booked. Free strategy call.",
    url: "https://offbeats.agency",
    siteName: "Offbeats",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offbeats | Marketing That Gets Your Brand Talked About",
    description:
      "Offbeats builds brands, content and ads that get your business noticed, shared and booked. Free strategy call.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brandName,
    description:
      "Offbeats builds brands, content and ad campaigns that get local and growing businesses noticed. Book a free strategy call.",
    url: "https://offbeats.agency",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.country,
    },
    priceRange: "$$",
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.linkedin,
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#07080A] text-[#F4F4F5] font-sans antialiased selection:bg-[#FF2E93] selection:text-white">
        {/* Subtle noise overlay at 3% opacity */}
        <div className="noise-overlay" aria-hidden="true" />

        <ModalProvider>
          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Sticky glass navbar */}
          <Navbar />

          {/* Main page content */}
          <div className="flex-1">{children}</div>

          {/* Global Booking modal */}
          <BookingModal />

          {/* B shortcut listener and desktop chip */}
          <KeyboardShortcutHandler />

          {/* Mobile floating WhatsApp button */}
          <FloatingWhatsApp />
        </ModalProvider>
      </body>
    </html>
  );
}
