"use client";

import React from "react";

interface TamurLogoProps {
  className?: string;
  variant?: "header" | "footer";
}

export default function TamurLogo({
  className = "",
  variant = "header",
}: TamurLogoProps) {
  const isFooter = variant === "footer";

  // Brand Palette:
  // Light / Header: Coffee Brown (#493326) on warm cream background
  // Dark / Footer: Warm Cream (#EDE2D0) on dark coffee background
  const primaryText = isFooter ? "text-[#EDE2D0]" : "text-[#493326]";
  const arabicText = isFooter ? "text-[#E0CFBA]" : "text-[#5C4033]";
  const dividerBg = isFooter ? "bg-[#CDB69D]/40" : "bg-[#735744]/35";

  return (
    <div
      className={`inline-flex items-center select-none group transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="TAMUR تمور - Premium Arabian Dates"
    >
      {/* 
        Typography-Only Arabic-Inspired Bespoke Logo Lockup
        Strictly letters only:
        - English brand wordmark: TAMUR in bespoke Roman-Kufic flared serif capitals
        - Arabic brand name: تمور in noble classical Arabic calligraphy
        - Elegant typographic hairline separator preserving optical breathing room
      */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 tracking-normal">
        {/* English Brand Wordmark */}
        <span
          className={`font-['Cinzel_Decorative','Cinzel',serif] text-xl sm:text-2xl md:text-[26px] font-bold tracking-[0.14em] leading-none transition-colors duration-300 ${primaryText}`}
        >
          TAMUR
        </span>

        {/* Slender Typographic Hairline Separator */}
        <span
          className={`h-4 sm:h-[18px] w-[1px] transition-colors duration-300 ${dividerBg}`}
          aria-hidden="true"
        />

        {/* Authentic Arabic Calligraphic Brand Name */}
        <span
          dir="rtl"
          lang="ar"
          className={`font-['Amiri','Traditional_Arabic',serif] text-xl sm:text-2xl md:text-[25px] font-bold leading-none -translate-y-[1px] transition-colors duration-300 ${arabicText}`}
        >
          تمور
        </span>
      </div>
    </div>
  );
}
