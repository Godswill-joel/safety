"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { navLinks } from "../data/data";

export default function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    setDropdownOpen(null);
    router.push(path);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavClick("/")}
          className="text-2xl font-bold text-blue-700 cursor-pointer"
        >
          Safety bridge
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                <div
                  onClick={() =>
                    link.children
                      ? setDropdownOpen(
                          dropdownOpen === link.name ? null : link.name
                        )
                      : handleNavClick(link.href)
                  }
                  className="cursor-pointer flex items-center gap-1 font-medium hover:text-blue-600"
                >
                  {link.name}
                  {link.children && <ChevronDown size={16} />}
                </div>

                {/* Dropdown */}
                {link.children && dropdownOpen === link.name && (
                  <ul className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-56 py-2">
                    {link.children.map((child, i) => (
                      <li
                        key={i}
                        onClick={() => handleNavClick(child.href)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {child.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleNavClick("/Page/contact")}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 px-4 py-4">
          <ul className="space-y-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <div
                  onClick={() =>
                    link.children
                      ? setDropdownOpen(
                          dropdownOpen === link.name ? null : link.name
                        )
                      : handleNavClick(link.href)
                  }
                  className="flex justify-between items-center cursor-pointer font-medium"
                >
                  {link.name}
                  {link.children && <ChevronDown size={16} />}
                </div>

                {/* Mobile Dropdown */}
                {link.children && dropdownOpen === link.name && (
                  <ul className="pl-4 mt-2 space-y-2 border-l">
                    {link.children.map((child, i) => (
                      <li
                        key={i}
                        onClick={() => handleNavClick(child.href)}
                        className="cursor-pointer text-gray-600 hover:text-blue-600"
                      >
                        {child.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleNavClick("/Page/contact")}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-full"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}