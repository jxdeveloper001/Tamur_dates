"use client";

import React from "react";
import ArabicHeadingFlourish from "./ArabicHeadingFlourish";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center py-16 sm:py-24 px-6 text-center text-[#F6EFE4]">
      {/* Existing Attached Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/hero-dates-bg.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Moderately Darker Warm Luxury Overlay for High Text Readability */}
      <div className="absolute inset-0 bg-[#2E1E15]/65 backdrop-brightness-[0.8] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#251810]/85 via-[#38261C]/50 to-[#251810]/45 pointer-events-none" />

      {/* Content Container - Beautifully Centered, Proportioned & Balanced */}
      <div className="relative max-w-3xl mx-auto flex flex-col items-center space-y-6 sm:space-y-7 animate-in fade-in zoom-in-95 duration-700 ease-out z-10">
        
        {/* 1. Arabic Brand Text & Bengali Headline with Arabic-Inspired Typography */}
        <div className="space-y-2 sm:space-y-2.5">
          <p className="font-arabic text-3xl sm:text-4xl text-[#E5D6C2] tracking-wide font-normal">
            تمور
          </p>
          <h1 className="font-bengali-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F6EFE4] leading-[1.16]">
            প্রাকৃতিক মিষ্টতার অনন্য রূপ
          </h1>
          <ArabicHeadingFlourish align="center" color="#E5D6C2" width={190} className="pt-1.5" />
          <p className="text-sm sm:text-base text-[#E5D6C2]/90 max-w-lg mx-auto font-normal pt-1 px-4 leading-relaxed">
            মরুদ্যানের রোদ-পাকা খাঁটি জাম্বো মেডজুল খেজুর • কোনো প্রিজারভেটিভ ছাড়া
          </p>
        </div>

        {/* 2. Actual Dates Product Image directly BELOW Headline (Slightly Enlarged) */}
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] flex justify-center py-1 float-soft">
          <img
            src="/assets/tamur-product.png"
            alt="তেমুর ১০০% প্রাকৃতিক প্রিমিয়াম জাম্বো মেডজুল খেজুর ৪০০ গ্রাম"
            className="w-full h-auto max-h-[295px] sm:max-h-[355px] md:max-h-[395px] object-contain filter drop-shadow-[0_24px_38px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* 3. Order Now Button with Subtle Light Shine Animation */}
        <div className="pt-1">
          <a
            href="#order"
            className="shine-button btn-lift group inline-flex items-center justify-center gap-2 px-9 sm:px-11 py-3.5 sm:py-4 rounded-full bg-[#F1E7D7] text-[#493326] font-semibold text-xs sm:text-sm tracking-wider hover:bg-[#E5D6C2] active:scale-95 transition-all shadow-xl cursor-pointer"
          >
            <span className="relative z-10">এখনই অর্ডার করুন</span>
            <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
