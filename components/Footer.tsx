import Link from 'next/link';
import { siteConfig, } from '@/lib/metadata';
import { NAV_LINKS, SERVICES } from '@/lib/constants';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href:  '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href:  '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href:  '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-[#1E2A3D] bg-[#0B0F19]"
    >
      {/* ─── Main footer grid ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" aria-label="ResearchForge Home" className="flex items-center gap-2.5 group w-fit">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
                aria-hidden="true"
              >
                RF
              </div>
              <span className="text-xl font-bold text-white">
                Research<span className="gradient-text-blue">Forge</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional academic paper formatting service for engineering students and researchers across India. IEEE formatting, manuscript structuring, and document preparation.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#111827] border border-[#1E2A3D] flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICES.map(({ id, title }) => (
                <li key={id}>
                  <Link
                    href={`/services#${id}`}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors" aria-hidden="true" />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic space-y-5">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 text-gray-400 text-sm hover:text-blue-400 transition-colors group"
              >
                <span
                  className="mt-0.5 w-8 h-8 rounded-lg bg-[#111827] border border-[#1E2A3D] flex items-center justify-center text-blue-400 shrink-0 group-hover:border-blue-500/40"
                  aria-hidden="true"
                >
                  ✉️
                </span>
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 text-sm hover:text-green-400 transition-colors group"
              >
                <span
                  className="mt-0.5 w-8 h-8 rounded-lg bg-[#111827] border border-[#1E2A3D] flex items-center justify-center shrink-0 group-hover:border-green-500/40"
                  aria-hidden="true"
                >
                  💬
                </span>
                <span>WhatsApp Us</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <span
                  className="mt-0.5 w-8 h-8 rounded-lg bg-[#111827] border border-[#1E2A3D] flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  📍
                </span>
                <span>India — Serving researchers nationwide</span>
              </div>
            </div>
          </address>
        </div>
      </div>

      {/* ─── Bottom bar ──────────────────────────────────────── */}
      <div className="border-t border-[#1E2A3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {currentYear} ResearchForge. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
