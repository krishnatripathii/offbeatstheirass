# Offbeats

Marketing agency website for Offbeats. Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. Visual and architectural inspiration from huly.io.

## Architecture

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with design tokens mapped to CSS variables
- **Motion**: Framer Motion with reduced-motion support
- **Icons**: Lucide icons (stroke 1.5)
- **Typography**: Inter (Body) and Space Grotesk (Headings, wordmark) via `next/font/google`
- **Lead Intake**: `/api/lead` route handler with spam honeypot and swappable delivery provider (Resend + dev console fallback)
- **Configuration**: All editable facts live in `site.config.ts`

## Getting Started

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Set up environment variables (optional for local dev):

```bash
cp .env.example .env.local
```

Populate the keys if you want live Resend email delivery:
```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
LEAD_NOTIFICATION_EMAIL=hello@offbeats.agency
```

If `RESEND_API_KEY` is not present, the API route logs incoming leads directly to your server console so you never drop an inquiry during testing.

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Production build:

```bash
npm run build
npm run start
```

## How to Edit Site Content

- **Brand Details & Contacts**: Edit `site.config.ts` to update email, phone, WhatsApp number, city, socials, and navigation links.
- **Case Studies**: Edit `data/work.ts` to add or update client projects. Leave `result` blank if you do not have verified metrics yet.
- **Testimonials**: Edit `data/testimonials.ts`. The strip remains hidden until real items are added.

## Deploying to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework preset is automatically detected as **Next.js**.
4. Add environment variables if using Resend (`RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`).
5. Deploy.
