"use client";

import React from "react";

interface ArabicHeadingFlourishProps {
  className?: string;
  color?: string;
  align?: "center" | "left" | "right";
  width?: number;
}

export default function ArabicHeadingFlourish({
  className = "",
  color = "currentColor",
  align = "center",
  width = 160,
}: ArabicHeadingFlourishProps) {
  return (
    <div
      className={`flex items-center ${
        align === "center"
          ? "justify-center"
          : align === "right"
          ? "justify-end"
          : "justify-start"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        width={width}
        height="18"
        viewBox="0 0 160 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible opacity-85"
      >
        {/* Exact Arabic Calligraphic Baseline Swash with Left Upward Terminal Hook */}
        <path
          d="M156 13.5H32C20 13.5 10 9 10 2"
          stroke={color}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Characteristic Twin Diacritical Nuqta Dots */}
        <circle cx="21" cy="6.5" r="2.2" fill={color} />
        <circle cx="31" cy="6.5" r="2.2" fill={color} />
      </svg>
    </div>
  );
}
