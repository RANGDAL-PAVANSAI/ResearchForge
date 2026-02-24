import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import {
  SERVICES,
  PROCESS_STEPS,
  TESTIMONIALS,
  WHY_CHOOSE,
} from "@/lib/constants";

export const metadata: Metadata = buildMetadata(
  "Academic Paper Preparation & Formatting",
  siteConfig.description,
  "/",
);

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-75 h-75 md:w-150 md:h-150 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-10 w-62.5 h-62.5 md:w-125 md:h-125 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-32">
        <div className="flex justify-center mb-6 animate-fade-in">
          <span className="section-tag">
            <span aria-hidden="true">⚡</span> Newly Launched Formatting Service
          </span>
        </div>
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Professional{" "}
          <span className="gradient-text block sm:inline">Paper Formatting</span>
        </h1>
        <p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          ResearchForge provides professional academic paper formatting services for engineering students and researchers across India. IEEE formatting, manuscript structuring, and document preparation.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="https://wa.me/917386627447?text=Hello%20ResearchForge!%20I%20need%20help%20with%20paper%20formatting."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 w-full sm:w-auto min-h-11"
          >
            <span className="mr-2">💬</span> WhatsApp Us
          </a>
          <Link
            href="/services"
            className="btn-secondary text-base px-8 py-4 w-full sm:w-auto min-h-11"
          >
            View Services
          </Link>
        </div>
        <div
          className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-brand-border pt-8 sm:pt-10 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
          aria-label="Our commitment"
        >
          {[
            { value: "Fresh", label: "Newly Launched" },
            { value: "24/7", label: "WhatsApp Support" },
            { value: "Pro", label: "Formatting Standards" },
            { value: "100%", label: "Confidential" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text-blue mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500 text-[11px] sm:text-xs leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      className="section-padding px-4 sm:px-6 lg:px-8"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-tag">
            <span aria-hidden="true">📝</span> Our Services
          </span>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
          >
            Professional Formatting for{" "}
            <span className="gradient-text">Academic Excellence</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Specialized formatting services for IEEE papers, manuscripts, and academic documents.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/services"
            className="btn-secondary px-8 py-3.5 w-full sm:w-auto min-h-11 inline-flex"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section
      className="section-padding px-4 sm:px-6 lg:px-8 bg-brand-surface/40"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-tag">
            <span aria-hidden="true">🏆</span> Why Choose Us
          </span>
          <h2
            id="why-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          >
            Professional Service.{" "}
            <span className="gradient-text">Clear Communication.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {WHY_CHOOSE.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl p-6 sm:p-7 group"
            >
              <div
                className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-4 sm:mb-5 group-hover:bg-blue-500/20 transition-colors"
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
  );
}

function ProcessSection() {
  return (
    <section
      className="section-padding px-4 sm:px-6 lg:px-8"
      aria-labelledby="process-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-tag">
            <span aria-hidden="true">🔄</span> How It Works
          </span>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          >
            From Enquiry to{" "}
            <span className="gradient-text">Successful Outcome</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
            A streamlined three-step engagement model designed for clarity,
            progress, and results.
          </p>
        </div>
        <ol
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
          aria-label="Our process"
        >
          {PROCESS_STEPS.map((step, idx) => (
            <li key={step.step} className="relative">
              {idx < PROCESS_STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-9 left-[calc(50%+3.5rem)] right-0 h-px border-t border-dashed border-brand-border"
                  aria-hidden="true"
                />
              )}
              <div className="glass-card rounded-2xl p-6 sm:p-7 text-center relative">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mx-auto flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 border border-blue-500/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.1))",
                  }}
                  aria-hidden="true"
                >
                  {step.icon}
                </div>
                <div
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 text-xs font-bold text-blue-400/50 bg-blue-500/10 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  {step.step}
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      className="section-padding px-4 sm:px-6 lg:px-8 bg-brand-surface/40"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag">
            <span aria-hidden="true">💬</span> Client Feedback
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Currently Onboarding <span className="gradient-text">Our First Clients</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base">
            As a newly launched formatting service, we’re building our reputation one paper at a time. Your satisfaction and feedback will help us grow.
          </p>
        </div>
        {TESTIMONIALS.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.id}
                className="glass-card rounded-2xl p-7 flex flex-col gap-4"
              >
                <div
                  className="flex gap-1"
                  aria-label={`Rating: ${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span
                      key={i}
                      className="text-yellow-400 text-base"
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <blockquote>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-brand-border pt-4 mt-auto">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                    }}
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      {t.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {t.role} · {t.college}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center max-w-2xl mx-auto">
            <div className="text-6xl mb-6" aria-hidden="true">
              �
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Get Professional Formatting Today
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Be among our first clients. Contact us on WhatsApp for quick, professional paper formatting services.
            </p>
            <a
              href="https://wa.me/917386627447?text=Hello%20ResearchForge!%20I%20need%20help%20with%20paper%20formatting."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 inline-flex items-center gap-2"
            >
              <span>💬</span> Contact on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="section-padding px-4 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border-glow"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.08) 50%, rgba(139,92,246,0.08) 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <span className="section-tag mb-5">
              <span aria-hidden="true">�</span> Get Started
            </span>
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 sm:mb-5"
            >
              Professional Paper Formatting{" "}
              <span className="gradient-text">Made Simple</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Contact us today for professional academic paper formatting services. Quick turnaround, clear pricing, complete confidentiality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/917386627447?text=Hello%20ResearchForge!%20I%20need%20help%20with%20paper%20formatting."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-10 py-4 w-full sm:w-auto min-h-11"
              >
                <span className="mr-2">💬</span> WhatsApp Us
              </a>
              <Link
                href="/services"
                className="btn-secondary text-base px-8 py-4 w-full sm:w-auto min-h-11"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
