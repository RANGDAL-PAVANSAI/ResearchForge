# ResearchForge — AI-Powered Research & Innovation Lab

A production-ready Next.js 16 website for **ResearchForge**, built with TypeScript, Tailwind CSS v4, and the App Router.

---

## Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Framework  | Next.js 16 (App Router)  |
| Language   | TypeScript 5             |
| Styling    | Tailwind CSS v4          |
| Runtime    | React 19                 |
| Font       | Inter (Google Fonts)     |

---

## Folder Structure

```
app/
  globals.css             # Tailwind v4 theme, animations, utilities
  layout.tsx              # Root layout with Navbar, Footer, WhatsApp
  page.tsx                # Home (/)
  about/page.tsx          # About (/about)
  services/page.tsx       # Services (/services)
  contact/page.tsx        # Contact (/contact)
  privacy/page.tsx        # Privacy Policy
  terms/page.tsx          # Terms of Service
  api/contact/route.ts    # POST /api/contact — ready for MongoDB

components/
  Navbar.tsx              # Sticky responsive navbar + hamburger menu
  Footer.tsx              # Footer with links, contact, social icons
  WhatsAppButton.tsx      # Floating WhatsApp CTA
  ServiceCard.tsx         # Reusable card (grid + full variants)
  ContactForm.tsx         # Validated form with client-side + server validation

lib/
  metadata.ts             # SEO metadata factory + siteConfig
  constants.ts            # Services, process steps, testimonials data

types/
  index.ts                # Shared TypeScript interfaces
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build && npm run start

# Type check
npx tsc --noEmit
```

---

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://researchforge.in
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/researchforge
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_TO=contact@researchforge.in
```

---

## Customisation Checklist

- [ ] Update email + WhatsApp in `lib/metadata.ts`
- [ ] Add `public/og-image.png` (1200×630) for Open Graph
- [ ] Add `public/favicon.ico` and `public/apple-touch-icon.png`
- [ ] Replace testimonials in `lib/constants.ts` with real quotes
- [ ] Connect MongoDB — see commented TODO in `app/api/contact/route.ts`
- [ ] Add Resend/Nodemailer for email notifications

---

## Deploying on DigitalOcean (App Platform)

1. Push to GitHub.
2. Open [DigitalOcean App Platform](https://cloud.digitalocean.com/apps) → **Create App**.
3. Select repo → set **Build Command:** `npm run build`, **Run Command:** `npm run start`.
4. Add environment variables in **Settings → App-Level Env Vars**.
5. Choose plan (Basic $5/mo) → **Deploy**.
6. Add custom domain + enable HTTPS (automatic).

### Droplet (manual)

```bash
npm install -g pm2
npm install && npm run build
pm2 start npm --name "researchforge" -- start
pm2 save && pm2 startup
# Configure nginx reverse proxy on port 3000
# sudo certbot --nginx -d researchforge.in
```

---

© 2026 ResearchForge. All rights reserved.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
