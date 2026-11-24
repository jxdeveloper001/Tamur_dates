"use client";

import React from "react";
import TamurLogo from "./TamurLogo";

export default function Footer() {
  return (
    <footer className="bg-[#493326] text-[#EDE2D0] border-t-2 border-[#CDB69D]/60 py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand with Arabic-Inspired Boutique Logo */}
          <div className="space-y-2">
            <TamurLogo variant="footer" />
            <p className="text-xs text-[#CDB69D] max-w-sm leading-relaxed pt-1">
              প্রিমিয়াম ১০০% প্রাকৃতিক জাম্বো মেডজুল খেজুর — ৪০০ গ্রামের এয়ারটাইট সতেজ বক্সে।
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 text-xs text-[#E0CFBA] font-medium">
            <a href="#story" className="hover:text-[#EDE2D0] transition-colors">উৎস ও ঐতিহ্য</a>
            <a href="#details" className="hover:text-[#EDE2D0] transition-colors">পণ্যের বিশেষত্ব</a>
            <a href="#product" className="hover:text-[#EDE2D0] transition-colors">খেজুর সংগ্রহ</a>
            <a href="#reviews" className="hover:text-[#EDE2D0] transition-colors">গ্রাহক সন্তুষ্টি</a>
            <a href="#faq" className="hover:text-[#EDE2D0] transition-colors">প্রশ্নোত্তর</a>
            <a href="#order" className="hover:text-[#EDE2D0] transition-colors">অর্ডার করুন</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#735744]/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#CDB69D] gap-4">
          <p>© {new Date().getFullYear()} TAMUR (تمور)। সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="font-arabic text-sm text-[#E0CFBA]">
            تمر طبيعي نقي — جودة استثنائية
          </p>
          <p>সারা দেশে ক্যাশ অন ডেলিভারি সুবিধা</p>
        </div>

      </div>
    </footer>
  );
}
