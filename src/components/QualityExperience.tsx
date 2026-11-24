"use client";

import React from "react";
import { IconSparkles, IconShield, IconAward, IconCheck } from "./Icons";
import { QUALITY_PILLARS } from "../data/siteData";

export default function QualityExperience() {
  return (
    <section id="quality" className="relative py-24 bg-[#120A07] text-[#FBF8F2] overflow-hidden">
      {/* Dates Macro Photographic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-color-dodge scale-100"
        style={{
          backgroundImage: "url('/assets/bg-dates-macro-texture.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Deep Espresso Scrim Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120A07] via-[#1C120C]/90 to-[#120A07] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C6A664]/30 bg-[#1C120C]/80 text-[#C6A664] text-xs font-semibold tracking-widest uppercase">
            <span>Craftsmanship & Calibration</span>
            <span>•</span>
            <span className="font-arabic">معايير الجودة</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FBF8F2]">
            The Four Pillars of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFBE7B] via-[#C6A664] to-[#B66C32]">
              Jumbo Perfection.
            </span>
          </h2>
          <p className="text-base text-[#FBF8F2]/75 leading-relaxed">
            Not all Medjoul dates are created equal. Less than 10% of any desert harvest meets TAMUR's exacting criteria for weight, skin cohesion, and moisture equilibrium.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUALITY_PILLARS.map((pillar) => (
            <div
              key={pillar.step}
              className="relative rounded-2xl p-6 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-[#C6A664]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-[#C6A664]">
                  {pillar.step}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#C6A664]/10 border border-[#C6A664]/30 flex items-center justify-center text-[#DFBE7B] group-hover:bg-[#C6A664]/20 transition-colors">
                  <IconAward className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FBF8F2] mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#FBF8F2]/70 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Nutritional & Pure Purity Matrix */}
        <div className="mt-16 rounded-2xl border border-[#C6A664]/25 bg-gradient-to-r from-[#1C120C]/90 via-[#2B1B13]/80 to-[#1C120C]/90 p-8 backdrop-blur-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            
            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#DFBE7B]">
                100%
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#FBF8F2]/80 font-medium">
                Raw & Natural
              </span>
              <span className="text-[10px] text-[#C6A664]/70">No additives or syrups</span>
            </div>

            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#DFBE7B]">
                24-26%
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#FBF8F2]/80 font-medium">
                Moisture Balance
              </span>
              <span className="text-[10px] text-[#C6A664]/70">Never dry or tough</span>
            </div>

            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#DFBE7B]">
                0g
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#FBF8F2]/80 font-medium">
                Added Sugars
              </span>
              <span className="text-[10px] text-[#C6A664]/70">Natural fruit fructose</span>
            </div>

            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#DFBE7B]">
                High
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#FBF8F2]/80 font-medium">
                Potassium
              </span>
              <span className="text-[10px] text-[#C6A664]/70">Heart & muscle stamina</span>
            </div>

            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#DFBE7B]">
                Fiber
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#FBF8F2]/80 font-medium">
                Prebiotic Health
              </span>
              <span className="text-[10px] text-[#C6A664]/70">Gentle digestion support</span>
            </div>

            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#DFBE7B]">
                400g
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#FBF8F2]/80 font-medium">
                Sealed Tub
              </span>
              <span className="text-[10px] text-[#C6A664]/70">Hygienic fresh container</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
