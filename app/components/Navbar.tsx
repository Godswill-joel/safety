/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { ChevronDown, X, Phone, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { navLinks } from "../data/data";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null> (null);

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
    setDropdownOpen(null);
    router.push(path);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
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
            <Link href={"/home"}>Safety<span className="text-orange-600">Bridge</span></Link>

          </button>

          {/* ── DESKTOP LINKS ── */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <button
                  onClick={() =>
                    link.children
                      ? setDropdownOpen(dropdownOpen === link.name ? null : link.name)
                      : handleNavClick(link.href)
                  }
                  className="flex items-center gap-1 text-[20px] font-medium uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                  {link.children && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${dropdownOpen === link.name ? "rotate-180 text-orange-600" : ""
                        }`}
                    />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {link.children && dropdownOpen === link.name && (
                  <ul className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 bg-[#0d0d0d] border border-white/10 rounded-xl min-w-[210px] py-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.children.map((child) => (
                      <li key={child.name}>
                        <button
                          onClick={() => handleNavClick(child.href)}
                          className="w-full text-left px-4 py-2.5 text-[13px] text-gray-400 hover:text-white hover:bg-white/5 hover:pl-6 transition-all duration-200 rounded-lg cursor-pointer"
                        >
                          {child.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
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
            <span
              className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen
                  ? "w-[22px] translate-y-[6.5px] rotate-45"
                  : "w-[22px]"
                }`}
            />
            <span
              className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen
                  ? "opacity-0 scale-x-0"
                  : "w-[16px] ml-[6px]"
                }`}
            />
            <span
              className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen
                  ? "w-[22px] -translate-y-[6.5px] -rotate-45"
                  : "w-[22px]"
                }`}
            />
          </button>
        </div>
      </nav>

      {/* ── BACKDROP ── */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      />

      {/* ── DRAWER PANEL ── */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[min(85vw,340px)] bg-[#0d0d0d] border-l border-white/[0.06] flex flex-col transition-transform duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06] flex-shrink-0">
          <button
            onClick={() => handleNavClick("/")}
            className="text-lg font-bold tracking-tight text-white cursor-pointer"
          >
            Safety<span className="text-orange-600">Bridge</span>
          </button>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex-1 overflow-y-auto">
          {navLinks.map((link, index) => (
            <div
              key={link.name}
              className="transition-all duration-300"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                transitionDelay: isMobileMenuOpen ? `${0.08 + index * 0.05}s` : "0s",
              }}
            >
              {/* Main Row */}
              <button
                onClick={() => {
                  if (link.children) {
                    setDropdownOpen(dropdownOpen === link.name ? null : link.name);
                  } else {
                    handleNavClick(link.href);
                  }
                }}
                className="group w-full flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-200 border-b border-white/[0.04] hover:text-white hover:bg-white/[0.03] transition-all duration-200 text-left cursor-pointer"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  {link.name}
                </span>
                {link.children && (
                  <ChevronDown
                    size={16}
                    className={`transition-all duration-300 flex-shrink-0 ${dropdownOpen === link.name
                        ? "rotate-180 text-orange-400"
                        : "text-gray-600 group-hover:text-gray-300"
                      }`}
                  />
                )}
              </button>

              {/* Sub-items accordion */}
              {link.children && (
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: dropdownOpen === link.name ? `${link.children.length * 52}px` : "0px",
                  }}
                >
                  {link.children.map((child) => (
                    <button
                      key={child.name}
                      onClick={() => handleNavClick(child.href)}
                      className="group w-full text-left px-6 pl-10 py-3.5 text-[20px] text-gray-500 border-b border-white/[0.03] hover:text-orange-600 hover:bg-white/[0.02] transition-all duration-200 cursor-pointer"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                        {child.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info Block */}
        <div
          className="px-6 py-5 border-t border-white/[0.06] flex-shrink-0 transition-all duration-300"
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(12px)",
            transitionDelay: isMobileMenuOpen ? "0.35s" : "0s",
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mb-3 font-semibold">
            Contact Info
          </p>
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-[18px] text-gray-500">
              <MapPin size={13} className="text-orange-600 flex-shrink-0" />
              <span>Apapa, Lagos State</span>
            </div>
            <div className="flex items-center gap-3 text-[18px] text-gray-500">
              <Phone size={13} className="text-orange-600 flex-shrink-0" />
              <span>+234 — — — — — —</span>
            </div>
          </div>
        </div>

        {/* Drawer CTA */}
        <div
          className="px-6 pb-8 pt-3 flex-shrink-0 transition-all duration-300"
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(12px)",
            transitionDelay: isMobileMenuOpen ? "0.42s" : "0s",
          }}
        >
          <button
            onClick={() => handleNavClick("/contact")}
            className="w-full py-3.5 text-white bg-orange-600 hover:bg-white active:scale-[0.98] hover:text-orange-600 text-[12px] font-semibold uppercase tracking-[0.12em] rounded-lg shadow-lg shadow-orange-600/20 transition-all duration-300 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
