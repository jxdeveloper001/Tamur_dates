"use client";

import React from "react";
import ArabicHeadingFlourish from "./ArabicHeadingFlourish";

export default function BrandStory() {
  const pillars = [
    {
      num: "০১",
      title: "মরূদ্যানের উর্বর মাটি",
      desc: "ভূগর্ভস্থ প্রাকৃতিক খনিজ পানির পুষ্টিতে খেজুর পায় প্রাকৃতিক পটাশিয়াম ও স্নিগ্ধ মিষ্টতা।",
    },
    {
      num: "০২",
      title: "রোদে পাকা পূর্ণতা",
      desc: "গাছেই সম্পূর্ণ প্রাকৃতিক নিয়মে পরিপক্ব করা হয়, ফলে শাঁস হয় অতুলনীয় নরম ও ক্যারামেল স্বাদের।",
    },
    {
      num: "০৩",
      title: "সিল্ড ফ্রেশনেস",
      desc: "সংগ্রহের পরপরই ৪০০ গ্রামের এয়ারটাইট সিল্ড জারে প্যাক করা হয় যাতে আর্দ্রতা পুরোপুরি অটুট থাকে।",
    },
  ];

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-[#EDE2D0] text-[#493326] overflow-hidden">
      {/* Subtle Warm Micro-Grain Aesthetic Texture */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#CDB69D_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12 sm:space-y-14">
        
        {/* Section Header: Centered & Regal */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E0CFBA] bg-[#F4EAE0]/80 text-[#735744] text-xs font-medium tracking-wider">
            <span>উৎস ও ঐতিহ্য</span>
            <span className="text-[#E0CFBA]">•</span>
            <span className="font-arabic text-sm text-[#493326]">الأصالة والتراث</span>
          </div>
          <h2 className="font-bengali-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#493326]">
            মরু-রোদের পরশে তৈরি প্রাকৃতিক উপহার
          </h2>
          <span className="font-arabic text-2xl sm:text-3xl text-[#735744] font-normal block pt-0.5">
            أصالة وجودة التمور
          </span>
          <ArabicHeadingFlourish align="center" color="#735744" width={160} className="pt-2" />
        </div>

        {/* Narrative Lead Paragraph: Editorial Typography */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg text-[#735744] font-normal leading-relaxed">
            প্রাকৃতিক খনিজসমৃদ্ধ মরূদ্যানের মাটিতে উৎপন্ন তেমুর মেডজুল খেজুর। মরুভূমির মিষ্টি রোদে ধীরে ধীরে পরিপক্ব হয় প্রতিটি ফল। কোনো কৃত্রিম প্রলেপ বা চিনি ছাড়া, প্রকৃতির আসল স্বাদ আর কোমলতা সরাসরি পৌঁছে যায় আপনার ঘরে।
          </p>
        </div>

        {/* Sophisticated Editorial Pillars (Seamless Layout with Subtle Dividers) */}
        <div className="rounded-3xl border border-[#E0CFBA] bg-[#F4EAE0]/75 backdrop-blur-xs p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E0CFBA]/80">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`py-5 md:py-2 ${
                  idx === 0
                    ? "md:pr-8"
                    : idx === 1
                    ? "md:px-8"
                    : "md:pl-8"
                } space-y-2 text-center md:text-left transition-colors duration-300`}
              >
                {/* Subtle, Normal-Sized Numbering */}
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-xs font-medium text-[#735744]/80 tracking-wider">
                    ধাপ {pillar.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CDB69D]" />
                </div>

                <h3 className="font-bengali-heading text-lg sm:text-xl font-bold text-[#493326]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#735744] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
