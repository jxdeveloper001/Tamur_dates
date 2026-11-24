"use client";

import React from "react";
import { IconLeaf, IconAward, IconSparkles, IconShield, IconPackage } from "./Icons";
import ArabicHeadingFlourish from "./ArabicHeadingFlourish";

export default function ProductDetails() {
  const details = [
    {
      title: "১০০% খাঁটি ও প্রাকৃতিক",
      subtitle: "কোনো চিনি বা প্রিজারভেটিভ ছাড়া",
      description: "গাছপাকা তাজা ফল। কোনো বাড়তি চিনি, গ্লুকোজ সিরাপ বা রাসায়নিক প্রিজারভেটিভ মেশানো হয় না।",
      icon: IconLeaf,
    },
    {
      title: "বাছাইকৃত জাম্বো গ্রেড",
      subtitle: "নিখুঁত ও বড় আকারের ফল",
      description: "কঠোর মাননিয়ন্ত্রণে প্রতিটি খেজুর হাতে বাছাই করা, যা নিশ্চিত করে সুষম আকার ও নিখুঁত খোসা।",
      icon: IconAward,
    },
    {
      title: "নরম ও রেশমি ক্যারামেল স্বাদ",
      subtitle: "মুখে মিলিয়ে যাওয়া মোলায়েম শাঁস",
      description: "দাঁতে কোনো টান লাগে না; প্রাকৃতিক বুনো ক্যারামেল ও মধুর অসাধারণ মিষ্টি স্বাদ।",
      icon: IconSparkles,
    },
    {
      title: "আর্দ্রতা ও সতেজতা বজায় রাখা",
      subtitle: "২৪-২৬% প্রাকৃতিক আর্দ্রতা",
      description: "প্রাকৃতিক জুসিনেস সংরক্ষিত থাকায় খেজুর কখনো অতিরিক্ত শুকিয়ে বা শক্ত হয়ে যায় না।",
      icon: IconShield,
    },
    {
      title: "এয়ারটাইট ফ্রেশনেস সিল্ড জার",
      subtitle: "৪০০ গ্রামের হাইজিন বক্স",
      description: "এয়ারটাইট ফুড-গ্রেড স্বচ্ছ জারে প্যাক করা, যা বাহ্যিক ধুলাবালি থেকে সুরক্ষিত রাখে ও সুবাস অক্ষুণ্ণ রাখে।",
      icon: IconPackage,
    },
  ];

  return (
    <section
      id="details"
      className="relative py-20 sm:py-28 bg-transparent text-[#493326]"
    >
      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Section Heading: Centered Editorial Style */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E0CFBA] bg-[#F4EAE0]/80 backdrop-blur-xs text-[#735744] text-xs font-medium">
            <span>পণ্যের বিশেষত্ব ও গুণমান</span>
            <span className="text-[#E0CFBA]">•</span>
            <span className="font-arabic text-sm text-[#493326]">تفاصيل الجودة</span>
          </div>
          <h2 className="font-bengali-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#493326]">
            স্বাদে ও মানে প্রিমিয়াম জাম্বো মেডজুল
          </h2>
          <ArabicHeadingFlourish align="center" color="#735744" width={160} className="pt-1.5" />
          <p className="text-xs sm:text-sm text-[#735744] leading-relaxed max-w-lg mx-auto pt-1">
            হাতে বাছাইকৃত প্রতিটি ফলের অনন্য বৈশিষ্ট্য ও খাঁটি সতেজতার নিশ্চয়তা
          </p>
        </div>

        {/* 1. Product Image Positioned at TOP-CENTER (Slightly Enlarged, Naturally Floating) */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[310px] sm:max-w-[370px] md:max-w-[420px] flex flex-col items-center group">
            {/* Soft Ambient Depth Glow */}
            <div
              className="absolute inset-0 -top-4 rounded-full bg-[#E0CFBA]/30 blur-2xl pointer-events-none scale-110"
              aria-hidden="true"
            />

            {/* The Actual Product Tub Floating Prominently */}
            <div className="relative z-10 w-full flex justify-center py-2">
              <img
                src="/assets/tamur-product.png"
                alt="তেমুর প্রিমিয়াম জাম্বো মেডজুল খেজুর ৪০০ গ্রাম"
                className="w-full h-auto max-h-[310px] sm:max-h-[365px] object-contain filter drop-shadow-[0_24px_35px_rgba(73,51,38,0.25)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Minimal Subtle Product Caption */}
            <div className="relative z-10 mt-2 text-center">
              <span className="inline-block text-[11px] sm:text-xs font-medium text-[#735744] bg-[#F4EAE0]/85 px-3.5 py-1 rounded-full border border-[#E0CFBA]/70 shadow-2xs">
                ৪০০ গ্রাম এয়ারটাইট সিল্ড ফ্রেশনেস জার • ১০০% প্রাকৃতিক
              </span>
            </div>
          </div>
        </div>

        {/* 2. Product Detail Cards: Refined Minimal Normal State, Smoothly Turning Coffee Brown on Hover with White Text & Icons */}
        <div className="max-w-4xl mx-auto pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {details.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl border border-[#E0CFBA]/80 bg-[#F4EAE0]/75 p-5 sm:p-6 transition-all duration-300 hover:bg-[#493326] hover:border-[#493326] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex flex-col items-center text-center ${
                    idx === 3 || idx === 4
                      ? "sm:col-span-1 lg:translate-x-1/2"
                      : ""
                  }`}
                >
                  {/* Subtle Minimalist Icon Circle (Transitions to White on Hover) */}
                  <div className="w-12 h-12 rounded-full bg-[#E0CFBA]/80 text-[#493326] border border-[#CDB69D]/70 flex items-center justify-center mb-3.5 shadow-2xs transition-colors duration-300 group-hover:bg-[#5C4334] group-hover:text-white group-hover:border-white/20">
                    <IconComp className="w-5 h-5 text-[#493326] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Feature Content: Smoothly Turning to White on Hover */}
                  <div className="space-y-1">
                    <h3 className="font-bengali-heading text-base sm:text-lg font-bold text-[#493326] group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-medium text-[#735744] group-hover:text-[#EDE2D0] transition-colors duration-300">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#735744] leading-relaxed pt-1.5 group-hover:text-[#F4EAE0]/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
