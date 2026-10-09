export interface WorkItem {
  id: string;
  name: string;
  category: string;
  summary: string;
  result?: string;
  image?: string;
  link?: string;
}

export const workItems: WorkItem[] = [
  {
    id: "cafe-brand-refresh",
    name: "Cafe, brand refresh",
    category: "Brand identity & Content",
    summary: "A fresh look, signage that stops people on the pavement, and a seasonal menu launch built for reels.",
    link: "#contact",
  },
  {
    id: "clinic-social-presence",
    name: "Clinic, social presence",
    category: "Social media & Ads",
    summary: "Short videos that make health advice watchable, plus local ads that bring in consultation requests.",
    link: "#contact",
  },
  {
    id: "retail-launch-campaign",
    name: "Retail, launch campaign",
    category: "Launch campaign & Web",
    summary: "A teaser campaign, launch-day content and a mobile catalog page that loads before the customer changes their mind.",
    link: "#contact",
  },
];
