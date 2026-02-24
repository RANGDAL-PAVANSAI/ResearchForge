import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata(
  'Terms of Service',
  'ResearchForge terms of service — the terms and conditions governing use of our academic paper formatting services.',
  '/terms',
);

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <span className="section-tag mb-6 inline-flex"><span aria-hidden="true">📋</span> Legal</span>
      <h1 className="text-4xl font-extrabold text-white mb-10">Terms of Service</h1>
      <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 text-gray-400 text-sm leading-relaxed">
        <section aria-labelledby="tos-acceptance">
          <h2 id="tos-acceptance" className="text-white font-bold text-lg mb-3">1. Acceptance of Terms</h2>
          <p>By engaging ResearchForge&apos;s services, you agree to these Terms of Service. These terms govern the relationship between ResearchForge and you (the client) for all formatting service engagements.</p>
        </section>
        <section aria-labelledby="tos-services">
          <h2 id="tos-services" className="text-white font-bold text-lg mb-3">2. Nature of Services</h2>
          <p>ResearchForge provides professional academic paper formatting, manuscript structuring, and document preparation services. All intellectual work and content remains the property of the client. ResearchForge provides formatting services only and does not create or modify research content.</p>
        </section>
        <section aria-labelledby="tos-conduct">
          <h2 id="tos-conduct" className="text-white font-bold text-lg mb-3">3. Academic Integrity</h2>
          <p>Clients are responsible for ensuring that all work submitted to institutions or journals complies with the relevant academic integrity policies. ResearchForge&apos;s services are limited to formatting and document preparation only.</p>
        </section>
        <section aria-labelledby="tos-payment">
          <h2 id="tos-payment" className="text-white font-bold text-lg mb-3">4. Payments &amp; Refunds</h2>
          <p>Service fees are communicated and agreed upon before project commencement. Refund eligibility is assessed on a case-by-case basis in accordance with the milestones completed. Disputes must be raised within 7 days of delivery.</p>
        </section>
        <section aria-labelledby="tos-liability">
          <h2 id="tos-liability" className="text-white font-bold text-lg mb-3">5. Limitation of Liability</h2>
          <p>ResearchForge is not liable for publication acceptance or rejection outcomes, as these are determined solely by journals and conferences. Our commitment is to provide high-quality formatting services that meet publication standards.</p>
        </section>
        <section aria-labelledby="tos-contact">
          <h2 id="tos-contact" className="text-white font-bold text-lg mb-3">6. Contact</h2>
          <p>For any queries regarding these terms, reach us at <a href="mailto:contact@researchforge.in" className="text-blue-400 hover:underline">contact@researchforge.in</a>.</p>
        </section>
        <p className="text-gray-600 text-xs border-t border-brand-border pt-6">Last updated: February 2026</p>
      </div>
    </main>
  );
}
