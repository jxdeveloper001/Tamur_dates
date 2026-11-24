"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ProductDetails from "@/components/ProductDetails";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import OrderSection from "@/components/OrderSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingBar from "@/components/FloatingBar";
import { PRICING_TIERS, ProductOption } from "@/data/siteData";

export default function Home() {
  const [selectedTier, setSelectedTier] = useState<ProductOption>(PRICING_TIERS[0]);

  return (
    <main className="min-h-screen bg-[#EDE2D0] text-[#493326] selection:bg-[#E0CFBA] selection:text-[#493326]">
      {/* 1. Clean Header & Navigation (Sticky at Top) */}
      <Navbar />

      {/* 2. Hero Section (Starts Directly Below Header Without Overlap) */}
      <Hero />

      {/* 3. Heritage Brand Story (Origin & Heritage) */}
      <BrandStory />

      {/* 4 & 5. Continuous Visual Canvas: Product Details & Product Masterpiece Sharing ONE Background (Attachment 1) */}
      <div className="relative overflow-hidden border-t border-[#E0CFBA]/70">
        {/* ONE continuous photographic background spanning both sections seamlessly.
            The wooden-board dates photo with the cream blur BAKED INTO the image
            itself (soft blur + the site's own cream colour mixed into the pixels)
            — fully opaque, no CSS filter, no transparent layer on top.
            The hero background is left exactly as it is. */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/assets/bg-details-wooden-dates-v3.jpg')",
          }}
          aria-hidden="true"
        />

        {/* 4. Product Details */}
        <ProductDetails />

        {/* 5. Product Masterpiece — Centered Selection Container */}
        <ProductShowcase
          selectedTier={selectedTier}
          onSelectTier={setSelectedTier}
        />
      </div>

      {/* 6. Customer Impressions & Continuously Sliding Reviews */}
      <Testimonials />

      {/* 7. Frequently Asked Questions (before the order form) */}
      <FAQ />

      {/* 8. Simplified Centered Order Online Section (Synchronized Quantity & Price) */}
      <OrderSection selectedTier={selectedTier} />

      {/* 9. Coffee Brown Luxury Footer */}
      <Footer />

      {/* 10. Minimal Synchronized Quick-Order Bar */}
      <FloatingBar selectedTier={selectedTier} />
    </main>
  );
}
