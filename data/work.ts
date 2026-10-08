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
    summary: "Visual identity refresh, in-store signage guidelines, and a high-retention launch series for seasonal menus.",
    link: "#contact",
  },
  {
    id: "clinic-social-presence",
    name: "Clinic, social presence",
    category: "Social media & Ads",
    summary: "Educational short-form video systems and localized Meta ad funnels designed to increase consultation inquiries.",
    link: "#contact",
  },
  {
    id: "retail-launch-campaign",
    name: "Retail, launch campaign",
    category: "Launch campaign & Web",
    summary: "Pre-launch teaser campaign, storefront launch content, and a fast mobile catalog landing page.",
    link: "#contact",
  },
];
