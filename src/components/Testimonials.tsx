"use client";

import React, { useRef, useEffect } from "react";
import { IconStar } from "./Icons";
import { TESTIMONIALS } from "../data/siteData";
import ArabicHeadingFlourish from "./ArabicHeadingFlourish";

function ReviewCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <div className="relative w-[280px] sm:w-[350px] shrink-0 rounded-2xl p-5 bg-[#F4EAE0] border border-[#E0CFBA] flex flex-col justify-between space-y-3.5 shadow-xs overflow-hidden hover:border-[#CDB69D] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 select-none">
      {/* Gold top accent + quote mark */}
      <span aria-hidden="true" className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#CDB69D] to-transparent" />
      <span aria-hidden="true" className="absolute -top-1 right-4 font-bengali-heading text-5xl text-[#CDB69D]/50 leading-none select-none">”</span>
      {/* Top: Star Rating + Verified Badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[#735744]">
          {[...Array(testimonial.rating)].map((_, i) => (
            <IconStar key={i} className="w-3.5 h-3.5 fill-[#735744]" />
          ))}
        </div>
        <span className="text-[10px] font-medium text-[#735744] bg-[#E0CFBA]/60 px-2.5 py-0.5 rounded-full border border-[#CDB69D]/50">
          ভেরিফাইড ক্রেতা
        </span>
      </div>

      {/* Middle: Compact Readable Quote */}
      <p className="text-xs sm:text-[13px] text-[#493326] leading-relaxed line-clamp-3">
        "{testimonial.quote}"
      </p>

      {/* Bottom: Author Details */}
      <div className="pt-2.5 border-t border-[#E0CFBA]/80 flex items-center justify-between">
        <div>
          <h4 className="font-bengali-heading font-bold text-xs sm:text-sm text-[#493326]">
            {testimonial.name}
          </h4>
          <p className="text-[11px] text-[#735744]">
            {testimonial.role} • {testimonial.location}
          </p>
        </div>
        <span className="font-arabic text-xs text-[#735744]/70">تمر</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Respect reduced-motion accessibility preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;
    let isPaused = false;
    const speed = 0.75; // Pixels per frame (~45px/sec), smooth, unhurried, luxury pace

    const step = () => {
      if (!isPaused && scroller) {
        // The container holds 2 identical tracks side by side.
        // When scrollLeft reaches half the scrollable distance, wrap seamlessly to 0.
        const halfWidth = scroller.scrollWidth / 2;
        scroller.scrollLeft += speed;
        if (scroller.scrollLeft >= halfWidth) {
          scroller.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    const onPause = () => {
      isPaused = true;
    };
    const onResume = () => {
      isPaused = false;
    };

    scroller.addEventListener("mouseenter", onPause);
    scroller.addEventListener("mouseleave", onResume);
    scroller.addEventListener("touchstart", onPause, { passive: true });
    scroller.addEventListener("touchend", onResume, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      scroller.removeEventListener("mouseenter", onPause);
      scroller.removeEventListener("mouseleave", onResume);
      scroller.removeEventListener("touchstart", onPause);
      scroller.removeEventListener("touchend", onResume);
    };
  }, []);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#EDE2D0] text-[#493326] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <p className="text-xs uppercase tracking-widest text-[#735744] font-medium">
            গ্রাহকদের অভিজ্ঞতা
          </p>
          <h2 className="font-bengali-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#493326]">
            আমাদের সম্মানিত গ্রাহকদের মতামত
          </h2>
          <ArabicHeadingFlourish align="center" color="#735744" width={140} className="pt-1.5" />
        </div>

      </div>

      {/* Continuous Automatic Right-to-Left Sliding Marquee */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Subtle Vignette Fade Masks on Left & Right */}
        <div
          className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-[#EDE2D0] via-[#EDE2D0]/90 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-[#EDE2D0] via-[#EDE2D0]/90 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* The Seamless Infinite Auto-Scrolling Container */}
        <div
          ref={scrollerRef}
          id="reviews-track"
          className="flex overflow-x-hidden select-none cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Track Copy 1 */}
          <div className="flex gap-4 sm:gap-6 shrink-0 pr-4 sm:pr-6">
            {TESTIMONIALS.map((t, idx) => (
              <ReviewCard key={`t1-${idx}`} testimonial={t} />
            ))}
          </div>

          {/* Track Copy 2 (Identical width for seamless zero-gap wrap) */}
          <div className="flex gap-4 sm:gap-6 shrink-0 pr-4 sm:pr-6" aria-hidden="true">
            {TESTIMONIALS.map((t, idx) => (
              <ReviewCard key={`t2-${idx}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
