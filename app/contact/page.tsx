import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { buildMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Contact Us",
  "Contact ResearchForge for professional academic paper formatting services. IEEE paper formatting, manuscript structuring, and document preparation. Quick WhatsApp support available.",
  "/contact",
);

const CONTACT_ITEMS = [
  {
    icon: "✉️",
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    desc: "For detailed queries and document sharing",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "7386627447",
    href: `https://wa.me/917386627447?text=${encodeURIComponent("Hello ResearchForge! I need help with paper formatting.")}`,
    desc: "Quick responses during business hours",
    external: true,
  },
  {
    icon: "📍",
    label: "Coverage",
    value: "Pan India",
    href: null,
    desc: "Serving researchers in every state",
  },
  {
    icon: "⏰",
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    desc: "Monday – Saturday, 9 AM – 7 PM IST",
  },
];

const FAQ = [
  {
    q: "How long does paper formatting take?",
    a: "Most formatting projects are completed within 2–5 business days, depending on document length and complexity. We provide clear timelines upfront.",
  },
  {
    q: "What types of documents do you format?",
    a: "We format IEEE conference and journal papers, academic manuscripts, theses, dissertations, project reports, and technical documentation.",
  },
  {
    q: "How is my document kept confidential?",
    a: "All client documents are protected under strict confidentiality. We never share, publish, or reuse client work for any purpose.",
  },
  {
    q: "What are your pricing and payment terms?",
    a: "Pricing depends on document length and formatting requirements. We provide a clear quote before starting work. Payment is accepted after delivery and your satisfaction.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 grid-pattern overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-62.5 opacity-20 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #8B5CF6 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="section-tag">
            <span aria-hidden="true">📩</span> Get in Touch
          </span>
          <h1
            id="contact-heading"
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Get Your Paper <span className="gradient-text">Formatted</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Contact us via WhatsApp or the form below. Share your document and requirements — we&apos;ll respond with a quote and timeline within 24 hours.
          </p>
        </div>
      </section>

      {/* ─── Main grid ─────────────────────────────────────────────────── */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        aria-label="Contact options and form"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8 sm:gap-10">
          {/* ── Left sidebar ───────────────────────────────── */}
          <aside className="lg:col-span-2 space-y-5 sm:space-y-6">
            {/* Contact items */}
            <div className="glass-card rounded-2xl p-5 sm:p-7 space-y-5 sm:space-y-6">
              <h2 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
                Contact Details
              </h2>
              {CONTACT_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-base sm:text-lg shrink-0"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-white text-xs sm:text-sm font-semibold hover:text-blue-400 transition-colors min-h-11 inline-flex items-center"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white text-xs sm:text-sm font-semibold">
                        {item.value}
                      </div>
                    )}
                    <div className="text-gray-500 text-[10px] sm:text-xs mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello ResearchForge! I need help with my research.")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with ResearchForge on WhatsApp"
              className="flex items-center gap-3 sm:gap-4 rounded-2xl p-5 sm:p-6 border border-green-500/25 hover:border-green-500/50 transition-all duration-300 group min-h-11"
              style={{
                background:
                  "linear-gradient(135deg, rgba(37,211,102,0.08), rgba(18,140,126,0.05))",
              }}
            >
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl shrink-0"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                }}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm group-hover:text-green-400 transition-colors">
                  Chat on WhatsApp
                </div>
                <div className="text-gray-500 text-xs mt-0.5">
                  Fastest way to reach us
                </div>
              </div>
              <span
                className="ml-auto text-gray-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-200"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            {/* Trust badges */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 space-y-3">
              {[
                "✅ 100% confidential engagement",

                "✅ Flexible scheduling",
                "✅ No hidden charges",
              ].map((badge) => (
                <div key={badge} className="text-gray-400 text-xs sm:text-sm">
                  {badge}
                </div>
              ))}
            </div>
          </aside>

          {/* ── Contact Form ────────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
                Fill in the details below and we&apos;ll get back to you within
                one business day.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────── */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8 bg-brand-surface/40"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="section-tag">
              <span aria-hidden="true">❓</span> FAQ
            </span>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-bold text-white"
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-4" role="list">
            {FAQ.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-5 sm:p-6"
                role="listitem"
              >
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
