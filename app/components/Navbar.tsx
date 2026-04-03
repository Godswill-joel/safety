/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { X, Phone, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { navLinks } from "../data/data";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-8xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="text-2xl font-bold tracking-tight text-white cursor-pointer"
          >
            <Link href={"/home"}>
              Safety<span className="text-orange-600">Bridge</span>
            </Link>
          </button>

          {/* ── DESKTOP LINKS ── */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-[20px] font-medium uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick("/contact")}
            className="hidden md:inline-flex items-center text-[12px] font-semibold uppercase tracking-widest bg-orange-600 hover:bg-white hover:text-orange-600 text-white px-5 py-2.5 rounded-md border border-orange-600 transition-all duration-300 cursor-pointer"
          >
            Contact Us
          </button>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 p-1 cursor-pointer"
          >
            <span className={`block h-[1.5px] bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-[1.5px] bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── BACKDROP ── */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── DRAWER PANEL ── */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[min(85vw,340px)] bg-[#0d0d0d] border-l border-white/[0.06] flex flex-col transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <button
            onClick={() => handleNavClick("/")}
            className="text-lg font-bold text-white"
          >
            Safety<span className="text-orange-600">Bridge</span>
          </button>
          <button onClick={closeMenu}>
            <X size={18} />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex-1 overflow-y-auto">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-6 py-4 text-gray-200 border-b border-white/10 hover:text-white hover:bg-white/5 transition"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                transitionDelay: `${index * 0.05}s`,
              }}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Contact */}
        <div className="px-6 py-5 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 text-gray-400">
            <MapPin size={14} />
            <span>Apapa, Lagos</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 mt-2">
            <Phone size={14} />
            <span>+234 — — —</span>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 pb-6">
          <button
            onClick={() => handleNavClick("/contact")}
            className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-white hover:text-orange-600 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}