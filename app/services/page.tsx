import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = buildMetadata(
  "Our Services",
  "Professional academic paper formatting services: IEEE paper formatting, manuscript structuring, document preparation, and plagiarism formatting support for engineering students across India.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 grid-pattern overflow-hidden"
        aria-labelledby="services-page-heading"
      >
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-75 h-50 sm:w-125 sm:h-62.5 md:w-175 md:h-75 opacity-20 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #3B82F6 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="section-tag">
            <span aria-hidden="true">📝</span> Our Services
          </span>
          <h1
            id="services-page-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 sm:mb-5"
          >
            Professional Formatting for{" "}
            <span className="gradient-text">Academic Papers</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need IEEE conference paper formatting, manuscript structuring, or document preparation — we provide specialized formatting services for your academic work.
          </p>
        </div>
      </section>

      {/* ─── Services grid — quick overview ───────────────────────────── */}
      <section
        className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8"
        aria-label="Services overview"
      >
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="glass-card rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform min-h-11"
              aria-label={`Jump to ${service.title}`}
            >
              <span className="text-lg sm:text-xl" aria-hidden="true">
                {service.icon}
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                {service.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ─── Detailed service sections ─────────────────────────────────── */}
      <section
        className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8"
        aria-label="Detailed service descriptions"
      >
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} variant="full" />
          ))}
        </div>
      </section>

      {/* ─── Engagement banner ─────────────────────────────────────────── */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        aria-labelledby="services-cta-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl p-8 sm:p-10 md:p-16 text-center border-glow overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.10), rgba(6,182,212,0.07))",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 60% 0%, rgba(59,130,246,0.12) 0%, transparent 60%)",
              }}
            />
            <div className="relative z-10">
              <span className="section-tag">
                <span aria-hidden="true">💬</span> Get Started
              </span>
              <h2
                id="services-cta-heading"
                className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4"
              >
                Need Help With Your Paper?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
                Contact us on WhatsApp with your document and requirements. We&apos;ll provide a clear quote and timeline.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/917386627447?text=Hello%20ResearchForge!%20I%20need%20help%20with%20paper%20formatting."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-10 py-4 w-full sm:w-auto min-h-11"
                >
                  <span className="mr-2">💬</span> WhatsApp Us
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary px-8 py-4 w-full sm:w-auto min-h-11"
                >
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
