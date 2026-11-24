"use client";

import React from "react";
import { IconCheck, IconClose, IconShield } from "./Icons";
import { COMPARISON_DATA } from "../data/siteData";

export default function WhyTamur() {
  return (
    <section id="why-tamur" className="relative py-24 bg-[#FAF6EE] text-[#1C120C]">
      {/* Subtle Sand Cream Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/assets/bg-cream-sand.jpg')",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C4A1F]/20 bg-[#EFE6D5] text-[#8C4A1F] text-xs font-semibold tracking-widest uppercase">
            <span>The Decisive Difference</span>
            <span>•</span>
            <span className="font-arabic">لماذا تمور؟</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C120C]">
            Why Discerning Palates <br />
            <span className="text-[#8C4A1F]">
              Choose TAMUR.
            </span>
          </h2>
          <p className="text-base text-[#6B5B52] leading-relaxed">
            Many dates sold in street markets have spent months in hot open sacks or have been sprayed with sugar syrup to mimic freshness. 
            Here is how TAMUR protects your experience.
          </p>
        </div>

        {/* Side-by-side Comparison Matrix */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#DFCCA4] shadow-xl overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#1C120C] text-[#FBF8F2] p-5 sm:p-6 text-sm font-semibold tracking-wider uppercase">
            <div className="col-span-4 sm:col-span-4 text-xs sm:text-sm text-[#C6A664]">
              Evaluation Criteria
            </div>
            <div className="col-span-4 sm:col-span-4 text-xs sm:text-sm text-[#DFBE7B] text-center font-serif">
              TAMUR Jumbo Tub
            </div>
            <div className="col-span-4 sm:col-span-4 text-xs sm:text-sm text-[#FBF8F2]/60 text-center font-normal">
              Conventional Market Dates
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#DFCCA4]/40">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-12 p-5 sm:p-6 items-center text-xs sm:text-sm transition-colors ${
                  idx % 2 === 0 ? "bg-[#FAF6EE]/50" : "bg-white"
                }`}
              >
                {/* Feature Name */}
                <div className="col-span-4 sm:col-span-4 font-semibold text-[#1C120C]">
                  {row.feature}
                </div>

                {/* TAMUR Advantage */}
                <div className="col-span-4 sm:col-span-4 px-2 text-center text-[#8C4A1F] font-medium flex items-center justify-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#8C4A1F]/15 flex items-center justify-center text-[#8C4A1F] shrink-0">
                    <IconCheck className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-left text-xs leading-tight sm:text-sm">{row.tamur}</span>
                </div>

                {/* Conventional Downside */}
                <div className="col-span-4 sm:col-span-4 px-2 text-center text-[#6B5B52] flex items-center justify-center gap-1.5 opacity-80">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                    <IconClose className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-left text-xs leading-tight sm:text-sm">{row.conventional}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Note */}
          <div className="p-4 bg-[#EFE6D5]/60 border-t border-[#DFCCA4] text-center text-xs text-[#6B5B52]">
            <span>100% Cash on Delivery available nationwide • Check package upon delivery</span>
          </div>

        </div>

      </div>
    </section>
  );
}
