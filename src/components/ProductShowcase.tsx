"use client";

import React from "react";
import { PRICING_TIERS, ProductOption } from "../data/siteData";
import ArabicHeadingFlourish from "./ArabicHeadingFlourish";

interface ProductShowcaseProps {
  selectedTier: ProductOption;
  onSelectTier: (tier: ProductOption) => void;
}

export default function ProductShowcase({
  selectedTier,
  onSelectTier,
}: ProductShowcaseProps) {
  const getWeightLabel = (grams: number) => {
    if (grams === 400) return "৪০০ গ্রাম";
    if (grams === 800) return "৮০০ গ্রাম";
    if (grams === 1200) return "১.২ কেজি";
    return `${grams}g`;
  };

  return (
    <section
      id="product"
      className="relative py-20 sm:py-28 bg-transparent text-[#493326]"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Centered Vertical Product Selection Container: Solid Warm Cream (NO Photographic Image) */}
        <div className="relative max-w-lg mx-auto rounded-[2rem] bg-[#F4EAE0] border border-[#CDB69D] ring-1 ring-[#E0CFBA] p-7 sm:p-11 text-center space-y-7 shadow-[0_24px_60px_-18px_rgba(73,51,38,0.4)] z-10 transition-shadow duration-300 hover:shadow-[0_28px_70px_-18px_rgba(73,51,38,0.5)] overflow-hidden">
          {/* Corner ornaments + gold hairline top accent */}
          <span aria-hidden="true" className="absolute top-3 left-3 w-2.5 h-2.5 rotate-45 bg-[#CDB69D]" />
          <span aria-hidden="true" className="absolute top-3 right-3 w-2.5 h-2.5 rotate-45 bg-[#CDB69D]" />
          <span aria-hidden="true" className="absolute bottom-3 left-3 w-2.5 h-2.5 rotate-45 bg-[#CDB69D]" />
          <span aria-hidden="true" className="absolute bottom-3 right-3 w-2.5 h-2.5 rotate-45 bg-[#CDB69D]" />
          <span aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#CDB69D] to-transparent" />
          
          {/* Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E0CFBA] bg-[#EDE2D0] text-[#735744] text-[11px] font-medium tracking-wide">
              <span>আমাদের মাস্টারপিস</span>
              <span className="text-[#E0CFBA]">•</span>
              <span className="font-arabic text-sm text-[#493326]">تحفة التمور</span>
            </div>
            <h2 className="font-bengali-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#493326]">
              প্রিমিয়াম জাম্বো মেডজুল
            </h2>
            <ArabicHeadingFlourish align="center" color="#735744" width={140} className="pt-1" />
            <p className="text-xs text-[#735744] leading-relaxed pt-1">
              বেরিজ ও নাটস সিলেকশন • ১০০% প্রাকৃতিক তাজা সিল্ড জার
            </p>
          </div>

          {/* Actual Product Image */}
          <div className="py-2 flex justify-center items-center">
            <img
              src="/assets/tamur-product.png"
              alt="তেমুর বেরিজ ও নাটস ১০০% প্রাকৃতিক মেডজুল খেজুর"
              className="max-h-[220px] sm:max-h-[260px] w-auto object-contain filter drop-shadow-[0_18px_28px_rgba(73,51,38,0.22)] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Quantity Selector: 400g, 800g, 1200g */}
          <div className="space-y-3 pt-2 border-t border-[#E0CFBA]/80">
            <div className="flex items-center justify-between text-xs text-[#735744]">
              <span className="font-medium">পরিমাণ নির্বাচন করুন</span>
              <span className="font-arabic text-xs text-[#493326]">اختر الكمية</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {PRICING_TIERS.map((tier) => {
                const isSelected = selectedTier.id === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => onSelectTier(tier)}
                    className={`btn-lift py-3 px-2 rounded-2xl border text-center cursor-pointer relative min-h-[64px] flex flex-col justify-center items-center ${
                      isSelected
                        ? "bg-[#493326] text-[#F4EAE0] border-[#493326] shadow-md font-bold scale-[1.02]"
                        : "bg-[#EDE2D0] text-[#735744] border-[#E0CFBA] hover:border-[#735744] hover:shadow-sm font-medium"
                    }`}
                  >
                    {tier.badge && (
                      <span
                        className={`absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-tight whitespace-nowrap shadow-xs ${
                          isSelected
                            ? "bg-[#E0CFBA] text-[#493326]"
                            : "bg-[#493326] text-[#F4EAE0]"
                        }`}
                      >
                        {tier.badge}
                      </span>
                    )}
                    <span className="block text-xs sm:text-sm font-semibold">
                      {getWeightLabel(tier.weightGrams)}
                    </span>
                    <span className={`block text-[10px] sm:text-[11px] mt-0.5 ${isSelected ? "text-[#E0CFBA]" : "text-[#735744]/80"}`}>
                      {tier.boxesCount === 1 ? "১টি জার" : `${tier.boxesCount}টি জার`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Corresponding Price Display */}
          <div className="pt-1 flex items-baseline justify-center gap-3">
            <span className="text-xs text-[#735744] font-medium">
              মূল্য:
            </span>
            <span className="font-bengali-heading text-3xl font-bold text-[#493326]">
              ৳{selectedTier.salePrice.toLocaleString()}
            </span>
            {selectedTier.regularPrice > selectedTier.salePrice && (
              <span className="text-xs text-[#735744] line-through">
                ৳{selectedTier.regularPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Order CTA Button with Periodic Shine Animation */}
          <div>
            <a
              href="#order"
              className="shine-button btn-lift inline-flex w-full items-center justify-center gap-2 py-3.5 sm:py-4 px-8 rounded-full bg-[#493326] text-[#F4EAE0] text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#5C4033] active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <span className="relative z-10">
                {getWeightLabel(selectedTier.weightGrams)} প্যাকেজ অর্ডার করুন
              </span>
              <svg className="relative z-10 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
