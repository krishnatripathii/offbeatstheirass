export interface SiteConfig {
  brandName: string;
  tagline: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappLink: string;
  whatsappPrefillText: string;
  city: string;
  country: string;
  availability: string;
  socials: {
    instagram: string;
    linkedin: string;
    whatsapp: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  servicesList: string[];
}

export const siteConfig: SiteConfig = {
  brandName: "Offbeats",
  tagline: "Marketing for brands that don't do beige.",
  email: "hello@offbeats.agency",        // [ADD] your real email
  phone: "+91 98765 43210",              // [ADD] your real phone
  whatsappNumber: "+919876543210",       // [ADD] digits only, no spaces
  whatsappLink: "https://wa.me/919876543210",
  whatsappPrefillText: "Hi Offbeats, I'd like to talk about my business.",
  city: "Bengaluru",                     // [ADD] your real city
  country: "India",
  availability: "Taking on new brands",
  socials: {
    instagram: "https://instagram.com/offbeats.agency",
    linkedin: "https://linkedin.com/company/offbeats-agency",
    whatsapp: "https://wa.me/919876543210?text=Hi%20Offbeats%2C%20I%27d%20like%20to%20talk%20about%20my%20business.",
  },
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
  ],
  servicesList: [
    "Brand identity",
    "Social media",
    "Reels and video",
    "Performance ads",
    "Websites",
    "Local SEO",
    "WhatsApp automation",
    "Content strategy",
  ],
};
