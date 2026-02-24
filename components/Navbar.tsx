"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* ─── Logo ───────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 group min-h-11"
            aria-label="ResearchForge Home"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm animate-pulse-glow"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              }}
              aria-hidden="true"
            >
              RF
            </div>
            <span className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:opacity-90 transition-opacity">
              Research<span className="gradient-text-blue">Forge</span>
            </span>
          </Link>

          {/* ─── Desktop Nav ─────────────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm font-medium transition-colors duration-200 relative group ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ─── Desktop CTA ─────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-sm px-5 py-2.5 min-h-11"
            >
              Get Started
            </Link>
          </div>

          {/* ─── Mobile Hamburger ────────────────────── */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="md:hidden flex flex-col items-center justify-center w-11 h-11 gap-1.5 rounded-md hover:bg-white/5 transition-colors"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
              aria-hidden="true"
            />
            <span
              className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
              aria-hidden="true"
            />
            <span
              className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* ─── Mobile Menu ────────────────────────────────────────── */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-brand-surface/95 backdrop-blur-md rounded-b-xl ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-brand-border py-4 space-y-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3.5 rounded-lg text-sm font-medium transition-colors min-h-11 ${
                    isActive
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="pt-3 px-4">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center text-sm py-3.5 min-h-11"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
