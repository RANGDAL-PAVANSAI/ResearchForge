import Link from "next/link";
import type { Service } from "@/types";

interface Props {
  service: Service;
  variant?: "grid" | "full";
}

export default function ServiceCard({ service, variant = "grid" }: Props) {
  if (variant === "full") {
    return (
      <article
        id={service.id}
        className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 scroll-mt-24"
        aria-labelledby={`${service.id}-title`}
      >
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
          {/* Icon + Header */}
          <div className="lg:w-2/5 space-y-4 sm:space-y-5">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl sm:text-3xl"
              aria-hidden="true"
            >
              {service.icon}
            </div>
            <h2
              id={`${service.id}-title`}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug"
            >
              {service.title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-fit min-h-11"
            >
              {service.cta} →
            </Link>
          </div>

          {/* Features */}
          <div className="lg:w-3/5">
            <h3 className="text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-widest mb-4 sm:mb-5">
              What&apos;s Included
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3" role="list">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 sm:gap-3 bg-brand-bg/60 border border-brand-border rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3"
                >
                  <span
                    className="text-blue-400 text-sm sm:text-base mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="glass-card rounded-2xl p-5 sm:p-7 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
      aria-labelledby={`card-${service.id}-title`}
    >
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5"
        aria-hidden="true"
      >
        {service.icon}
      </div>
      <h3
        id={`card-${service.id}-title`}
        className="text-base sm:text-lg font-bold text-white mb-2.5 sm:mb-3"
      >
        {service.title}
      </h3>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1 mb-5 sm:mb-6">
        {service.shortDesc}
      </p>
      <Link
        href={`/services#${service.id}`}
        className="text-blue-400 text-xs sm:text-sm font-semibold hover:text-blue-300 transition-colors flex items-center gap-1.5 group w-fit min-h-11 py-2"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <span
          className="group-hover:translate-x-1 transition-transform duration-200"
          aria-hidden="true"
        >
          →
        </span>
      </Link>
    </article>
  );
}
