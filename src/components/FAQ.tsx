"use client";

import React, { useState } from "react";
import { IconChevronDown } from "./Icons";
import { FAQS } from "../data/siteData";
import ArabicHeadingFlourish from "./ArabicHeadingFlourish";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#EDE2D0] text-[#493326]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E0CFBA] bg-[#F4EAE0]/80 text-[#735744] text-xs font-medium">
            <span>সাধারণ প্রশ্নাবলি</span>
            <span className="text-[#E0CFBA]">•</span>
            <span className="font-arabic text-sm text-[#493326]">الأسئلة الشائعة</span>
          </div>
          <h2 className="font-bengali-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#493326]">
            সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তর
          </h2>
          <ArabicHeadingFlourish align="center" color="#735744" width={150} className="pt-1" />
        </div>

        {/* Refined Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#CDB69D] bg-[#F4EAE0] shadow-md"
                    : "border-[#E0CFBA] bg-[#F4EAE0]/85 hover:border-[#CDB69D] hover:bg-[#F4EAE0] hover:shadow-sm hover:-translate-y-0.5"
                }`}
              >
                {/* Left gold accent — fades in/out with the open state */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#CDB69D] via-[#735744] to-[#CDB69D] transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full min-h-[56px] p-4.5 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-2">
                    <span
                      className={`w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#493326] text-white"
                          : "bg-[#E0CFBA]/70 text-[#735744]"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="font-bengali-heading font-semibold text-sm sm:text-base text-[#493326] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#493326] text-white"
                        : "bg-[#E0CFBA]/70 text-[#493326]"
                    }`}
                  >
                    <IconChevronDown className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* Answer — fast, snappy open/close: 200ms ease-out, height +
                    fade + a small slide of the text. Transition is scoped to
                    grid rows + opacity only, so nothing else animates. The
                    grid-rows trick animates the real content height:
                    0fr (closed) -> 1fr (open), no fixed max-height guessing. */}
                <div
                  data-faq-answer
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#735744] leading-relaxed border-t border-[#E0CFBA]/70 transition-transform duration-200 ease-out motion-reduce:transition-none ${
                        isOpen ? "translate-y-0" : "-translate-y-1"
                      }`}
                    >
                      <p className="pl-9">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
