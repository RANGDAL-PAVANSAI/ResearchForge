import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://researchforge.in';
const BRAND    = 'ResearchForge';
const TAGLINE  = 'Academic Paper Preparation & Formatting Service';

export const siteConfig = {
  name:        BRAND,
  tagline:     TAGLINE,
  url:         BASE_URL,
  description: 'ResearchForge is a newly launched academic paper preparation and formatting service for engineering students, offering IEEE paper formatting, manuscript structuring, and plagiarism formatting support.',
  keywords: [
    'IEEE paper formatting India',
    'academic manuscript formatting',
    'paper structuring service',
    'plagiarism formatting support',
    'research paper formatting',
    'ResearchForge',
    'document preparation India',
  ],
  ogImage: `${BASE_URL}/og-image.png`,
  twitterHandle: '@researchforge',
  email: 'contact@researchforge.in',
  whatsapp: '+917386627447',
};

// ─── Shared Open Graph base ──────────────────────────────────────────────────
const sharedOG = {
  siteName:  BRAND,
  type:      'website' as const,
  images: [
    {
      url:    siteConfig.ogImage,
      width:  1200,
      height: 630,
      alt:    `${BRAND} – ${TAGLINE}`,
    },
  ],
};

// ─── Page metadata factories ─────────────────────────────────────────────────
export function buildMetadata(
  title: string,
  description: string,
  path = '',
): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title: `${title} | ${BRAND}`,
    description,
    keywords: siteConfig.keywords,
    authors:  [{ name: BRAND, url: BASE_URL }],
    metadataBase: new URL(BASE_URL),
    openGraph: {
      ...sharedOG,
      title:       `${title} | ${BRAND}`,
      description,
      url,
    },
    twitter: {
      card:        'summary_large_image',
      title:       `${title} | ${BRAND}`,
      description,
      images:      [siteConfig.ogImage],
      creator:     siteConfig.twitterHandle,
    },
    alternates: { canonical: url },
    robots: {
      index:  true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
