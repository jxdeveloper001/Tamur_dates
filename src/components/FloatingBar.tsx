"use client";

import React, { useState, useEffect } from "react";
import { IconShoppingBag } from "./Icons";
import { ProductOption } from "../data/siteData";

export default function FloatingBar({ selectedTier }: { selectedTier?: ProductOption }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const orderEl = document.getElementById("order");
      const orderPos = orderEl ? orderEl.offsetTop - 300 : 999999;
      setVisible(scrollPos > 400 && scrollPos < orderPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const grams = selectedTier
    ? selectedTier.weightGrams === 1200
      ? "১.২ কেজি"
      : `${selectedTier.weightGrams}g`
    : "৪০০ গ্রাম";
  const price = selectedTier ? `৳${selectedTier.salePrice.toLocaleString()}` : "৳১,২৫০";

  return (
    <div className="fixed bottom-5 inset-x-4 sm:inset-x-auto sm:right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-[#F4EAE0]/95 backdrop-blur-md border border-[#E0CFBA] text-[#493326] shadow-xl">
        
        {/* Product Thumbnail */}
        <div className="w-11 h-11 rounded-xl bg-[#EDE2D0] border border-[#E0CFBA] p-1 flex items-center justify-center shrink-0">
          <img
            src="/assets/tamur-product.png"
            alt="তেমুর মেডজুল খেজুর ৪০০ গ্রাম"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Info */}
        <div className="pr-2">
          <p className="font-semibold text-xs text-[#493326] leading-tight font-bengali-heading">
            মেডজুল খেজুর ({grams})
          </p>
          <p className="font-bold text-xs text-[#493326]">
            {price}
          </p>
        </div>

        {/* CTA Button with periodic subtle shine */}
        <a
          href="#order"
          className="shine-button btn-lift flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#493326] text-[#F4EAE0] text-xs font-semibold tracking-wider hover:bg-[#5C4033] active:scale-95 transition-all shadow-xs cursor-pointer"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            <IconShoppingBag className="w-3.5 h-3.5" />
            <span>অর্ডার করুন</span>
          </span>
        </a>

      </div>
    </div>
  );
}
