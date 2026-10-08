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
  tagline: "Marketing for brands off the beaten track.",
  email: "hello@offbeats.agency",
  phone: "+91 98765 43210",
  whatsappNumber: "+919876543210",
  whatsappLink: "https://wa.me/919876543210",
  whatsappPrefillText: "Hi Offbeats, I'd like to talk about my business.",
  city: "Bengaluru",
  country: "India",
  availability: "Open for new projects",
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
