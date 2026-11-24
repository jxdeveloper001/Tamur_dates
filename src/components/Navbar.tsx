"use client";

import React, { useState, useEffect } from "react";
import { IconClose } from "./Icons";
import TamurLogo from "./TamurLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "উৎস ও ঐতিহ্য", href: "#story" },
    { label: "পণ্যের বিশেষত্ব", href: "#details" },
    { label: "খেজুর সংগ্রহ", href: "#product" },
    { label: "গ্রাহক সন্তুষ্টি", href: "#reviews" },
    { label: "প্রশ্নোত্তর", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#EDE2D0]/95 backdrop-blur-md border-b border-[#E0CFBA] transition-shadow duration-300">
      <nav
        className={`px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3 shadow-xs" : "py-4"
        }`}
      >
        {/* Brand Identity with Arabic-Inspired Boutique Logo */}
        <a href="#" className="inline-block">
          <TamurLogo variant="header" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#735744]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#493326] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action CTA with Periodic Light Shine Animation */}
        <div className="flex items-center gap-4">
          <a
            href="#order"
            className="shine-button px-5 sm:px-6 py-2.5 rounded-full bg-[#493326] text-[#F4EAE0] text-xs font-semibold tracking-wider hover:bg-[#38261C] active:scale-95 transition-all shadow-xs cursor-pointer"
          >
            <span className="relative z-10">অর্ডার করুন</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#493326] cursor-pointer"
            aria-label="মেনু খুলুন বা বন্ধ করুন"
          >
            {mobileMenuOpen ? (
              <IconClose className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E0CFBA] bg-[#F4EAE0] px-6 py-5 shadow-lg space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#493326] font-medium py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#order"
            onClick={() => setMobileMenuOpen(false)}
            className="shine-button block w-full text-center py-3 rounded-xl bg-[#493326] text-[#F4EAE0] text-xs font-bold tracking-wider cursor-pointer shadow-xs"
          >
            <span className="relative z-10">অর্ডার করুন</span>
          </a>
        </div>
      )}
    </header>
  );
}
