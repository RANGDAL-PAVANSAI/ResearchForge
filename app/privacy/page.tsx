import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata(
  'Privacy Policy',
  'ResearchForge privacy policy — how we collect, use, and protect your information.',
  '/privacy',
);

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <span className="section-tag mb-6 inline-flex"><span aria-hidden="true">🔒</span> Legal</span>
      <h1 className="text-4xl font-extrabold text-white mb-10">Privacy Policy</h1>
      <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 text-gray-400 text-sm leading-relaxed">
        <section aria-labelledby="pp-collection">
          <h2 id="pp-collection" className="text-white font-bold text-lg mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly — such as your name, email address, phone number, and research details — when you submit our contact form or reach us via WhatsApp. We do not collect sensitive personal data without explicit consent.</p>
        </section>
        <section aria-labelledby="pp-use">
          <h2 id="pp-use" className="text-white font-bold text-lg mb-3">2. How We Use Your Information</h2>
          <p>Your information is used solely to provide and improve our services, respond to enquiries, and communicate project updates. We never sell, rent, or share your data with third parties for marketing purposes.</p>
        </section>
        <section aria-labelledby="pp-confidentiality">
          <h2 id="pp-confidentiality" className="text-white font-bold text-lg mb-3">3. Research Confidentiality</h2>
          <p>All research materials, documents, and data shared with ResearchForge are treated as strictly confidential. We operate under an implicit non-disclosure agreement for all client engagements. Your research will never be shared, published, or used for any purpose beyond your agreed service scope.</p>
        </section>
        <section aria-labelledby="pp-cookies">
          <h2 id="pp-cookies" className="text-white font-bold text-lg mb-3">4. Cookies &amp; Analytics</h2>
          <p>We may use minimal, privacy-respecting analytics to understand how users interact with our website. No personally identifiable information is collected through analytics. You may disable cookies in your browser settings at any time.</p>
        </section>
        <section aria-labelledby="pp-contact">
          <h2 id="pp-contact" className="text-white font-bold text-lg mb-3">5. Contact</h2>
          <p>For any privacy-related queries, contact us at <a href="mailto:contact@researchforge.in" className="text-blue-400 hover:underline">contact@researchforge.in</a>.</p>
        </section>
        <p className="text-gray-600 text-xs border-t border-[#1E2A3D] pt-6">Last updated: February 2026</p>
      </div>
    </main>
  );
}
