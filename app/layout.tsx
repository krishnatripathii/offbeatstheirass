import type { Metadata } from "next";
import { Archivo, Libre_Franklin, Caveat_Brush } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModalProvider } from "@/components/ModalContext";
import { NoiseOverlay } from "@/components/Collage";
import { KeyboardShortcutHandler } from "@/components/KeyboardShortcutHandler";
import { BookingModal } from "@/components/BookingModal";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
});

const caveat = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://offbeats.agency"),
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${archivo.variable} ${libre.variable} ${caveat.variable} bg-paper text-ink antialiased relative selection:bg-yellow selection:text-ink overflow-x-hidden`}>
        <NoiseOverlay />
        <ModalProvider>
          <Navbar />
          <main className="relative z-10 pt-20">{children}</main>
          <Footer />
          <BookingModal />
          <KeyboardShortcutHandler />
        </ModalProvider>
      </body>
    </html>
  );
}
