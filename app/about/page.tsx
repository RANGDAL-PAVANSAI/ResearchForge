import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "About Us",
  "ResearchForge is a newly launched academic paper preparation and formatting service for engineering students across India. Professional IEEE formatting, manuscript structuring, and document preparation.",
  "/about",
);

const VALUES = [
  {
    icon: "📝",
    title: "Professional Formatting",
    desc: "Every document is formatted to meet academic and publication standards with attention to detail.",
  },
  {
    icon: "⚡",
    title: "Quick Delivery",
    desc: "Clear timelines and fast turnaround times to meet your submission deadlines.",
  },
  {
    icon: "⚖️",
    title: "Confidential Service",
    desc: "Your documents and information are handled with complete confidentiality. We never share client work.",
  },
  {
    icon: "📞",
    title: "Direct Communication",
    desc: "Reach us directly on WhatsApp for quick responses and clear communication throughout the process.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 grid-pattern overflow-hidden"
        aria-labelledby="about-heading"
      >
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-75 h-50 sm:w-125 sm:h-62.5 md:w-175 md:h-75 opacity-20 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #06B6D4 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="section-tag">
            <span aria-hidden="true">🔍</span> About ResearchForge
          </span>
          <h1
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 sm:mb-6"
          >
            Professional Paper{" "}
            <span className="gradient-text">Formatting Service</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            ResearchForge is a newly launched academic paper preparation and
            formatting service for engineering students and researchers across
            India.
          </p>
        </div>
      </section>

      {/* ─── What We Do ──────────────────────────────────────────────────── */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        aria-labelledby="what-we-do-heading"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-10 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-40 h-40 opacity-10 blur-2xl"
              style={{
                background: "radial-gradient(circle, #3B82F6, transparent)",
              }}
            />
            <div
              className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-3xl mb-6"
              aria-hidden="true"
            >
              🎯
            </div>
            <h2
              id="what-we-do-heading"
              className="text-2xl font-bold text-white mb-4"
            >
              What We Do
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We provide professional formatting services for academic papers,
              manuscripts, and research documents. Our services include:
            </p>
            <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
              <li>• IEEE paper formatting</li>
              <li>• Academic manuscript formatting</li>
              <li>• Paper structuring and organization</li>
              <li>• Documentation preparation</li>
              <li>• Plagiarism formatting support</li>
            </ul>
          </div>
          <div className="glass-card rounded-2xl p-10 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-40 h-40 opacity-10 blur-2xl"
              style={{
                background: "radial-gradient(circle, #06B6D4, transparent)",
              }}
            />
            <div
              className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-3xl mb-6"
              aria-hidden="true"
            >
              📞
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              How to Reach Us
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Contact us directly via WhatsApp or through our contact form.
              Share your document and requirements, and we'll provide a quote
              and timeline.
            </p>
            <a
              href="https://wa.me/917386627447?text=Hello%20ResearchForge!%20I%20need%20help%20with%20paper%20formatting."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              <span>💬</span> WhatsApp: 7386627447
            </a>
          </div>
        </div>
      </section>

      {/* ─── Our Commitment ──────────────────────────────────────────── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-surface/40"
        aria-labelledby="commitment-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-tag">
              <span aria-hidden="true">✅</span> Our Commitment
            </span>
            <h2
              id="commitment-heading"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Quality, Speed,{" "}
              <span className="gradient-text">Confidentiality</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📄",
                title: "Professional Standards",
                desc: "Every document is formatted to meet academic and publication requirements with careful attention to detail.",
              },
              {
                icon: "⏱️",
                title: "Timely Delivery",
                desc: "We understand deadlines matter. Clear timelines and reliable delivery to meet your submission dates.",
              },
              {
                icon: "🔒",
                title: "Complete Privacy",
                desc: "Your documents and personal information are handled with strict confidentiality. We never share or reuse client work.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-7">
                <div
                  className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-5"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Core Values ──────────────────────────────────────────────── */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        aria-labelledby="values-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">
              <span aria-hidden="true">💡</span> Core Values
            </span>
            <h2
              id="values-heading"
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Principles That Drive{" "}
              <span className="gradient-text">Every Decision</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-7 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl mx-auto bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-5 group-hover:bg-blue-500/20 transition-colors"
                  aria-hidden="true"
                >
                  {value.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        aria-labelledby="about-cta-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="about-cta-heading"
            className="text-3xl font-extrabold text-white mb-5"
          >
            Ready to Get Your Paper{" "}
            <span className="gradient-text">Formatted</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Contact us on WhatsApp or through our contact form. Share your
            requirements and we'll provide a clear quote and timeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/917386627447?text=Hello%20ResearchForge!%20I%20need%20help%20with%20paper%20formatting."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4"
            >
              <span className="mr-2">💬</span> WhatsApp Us
            </a>
            <Link href="/services" className="btn-secondary px-8 py-4">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
