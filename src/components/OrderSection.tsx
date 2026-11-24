"use client";

import React, { useState } from "react";
import { IconShoppingBag, IconCheck, IconTruck } from "./Icons";
import { ProductOption } from "../data/siteData";
import OrderSuccessModal, { OrderConfirmationData } from "./OrderSuccessModal";
import ArabicHeadingFlourish from "./ArabicHeadingFlourish";

interface OrderSectionProps {
  selectedTier: ProductOption;
}

function IconCash({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M6 9.5h.01M18 14.5h.01" />
    </svg>
  );
}

export default function OrderSection({ selectedTier }: OrderSectionProps) {
  const [zone, setZone] = useState<"inside" | "outside">("inside");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // Cash on Delivery only — no bKash, no card, no online payment.
  const paymentMethod = "ক্যাশ অন ডেলিভারি";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; address?: string }>({});
  const [confirmedOrder, setConfirmedOrder] = useState<OrderConfirmationData | null>(null);

  // Delivery fee calculation
  const deliveryFee =
    selectedTier.boxesCount >= (zone === "inside" ? 2 : 3)
      ? 0
      : zone === "inside"
      ? 70
      : 130;

  const grandTotal = selectedTier.salePrice + deliveryFee;

  const handleValidation = () => {
    const newErrors: { name?: string; phone?: string; address?: string } = {};
    if (!customerName.trim()) {
      newErrors.name = "অনুগ্রহ করে আপনার পুরো নাম লিখুন";
    }
    const cleanPhone = phone.trim().replace(/[\s-]/g, "");
    if (!cleanPhone || cleanPhone.length < 11) {
      newErrors.phone = "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)";
    }
    if (!address.trim() || address.trim().length < 8) {
      newErrors.address = "অনুগ্রহ করে আপনার সম্পূর্ণ ঠিকানা লিখুন";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrder: OrderConfirmationData = {
        orderId: Math.floor(100000 + Math.random() * 900000).toString(),
        customerName: customerName.trim(),
        phone: phone.trim(),
        address: address.trim(),
        zone: zone === "inside" ? "ঢাকার ভেতরে" : "ঢাকার বাইরে",
        tierName: selectedTier.name,
        boxesCount: selectedTier.boxesCount,
        totalWeight: `${selectedTier.weightGrams === 1200 ? "১.২ কেজি" : `${selectedTier.weightGrams}g`} (${selectedTier.boxesCount === 1 ? "১টি জার" : `${selectedTier.boxesCount}টি জার`})`,
        subtotal: selectedTier.salePrice,
        savings: selectedTier.savings,
        deliveryFee,
        grandTotal,
        paymentMethod,
        orderDate: new Date().toLocaleDateString("bn-BD", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };
      setConfirmedOrder(generatedOrder);
    }, 600);
  };

  const orderSteps = [
    { num: "১", title: "ফর্ম পূরণ করুন", desc: "নাম, ফোন ও ঠিকানা দিন" },
    { num: "২", title: "কল করে কনফার্ম", desc: "আমাদের প্রতিনিধি কল করবেন" },
    { num: "৩", title: "পণ্য হাতে পেয়ে পেমেন্ট", desc: "দেখে নিয়ে নগদে পরিশোধ" },
  ];

  return (
    <section id="order" className="relative py-20 sm:py-28 text-[#493326] overflow-hidden">
      {/* 1. Surrounding Order Section Photographic Background (Exact Attached Mosque Sunset & Dates Image) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none blur-[4px] scale-110"
        style={{
          backgroundImage: "url('/assets/bg-order-mosque-dates.jpg')",
        }}
        aria-hidden="true"
      />
      {/* 2. Warm Cream Translucent Softening Overlay for Natural Details and Ideal Contrast */}
      <div className="absolute inset-0 bg-[#EDE2D0]/85 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#493326] text-[#F4EAE0] text-xs font-semibold tracking-wide shadow-md">
            <IconCash className="w-4 h-4" />
            <span>শুধুমাত্র ক্যাশ অন ডেলিভারি</span>
          </div>
          <h2 className="font-bengali-heading text-4xl sm:text-5xl text-[#493326] pt-1">
            আপনার পছন্দের প্যাকেজ অর্ডার করুন
          </h2>
          <ArabicHeadingFlourish align="center" color="#735744" width={150} className="pt-1" />
          <p className="text-xs sm:text-sm text-[#735744] pt-1 leading-relaxed">
            কোনো অগ্রিম পেমেন্ট নয় — পণ্য হাতে পেয়ে দেখে নগদে মূল্য পরিশোধ করুন। সারা দেশে দ্রুত হোম ডেলিভারি।
          </p>
        </div>

        {/* 3. The Order Form Container — gold double frame, corner ornaments,
            periodic light shine sweeping across it every few seconds */}
        <div className="order-shine max-w-xl mx-auto rounded-[2rem] bg-[#F4EAE0] border border-[#CDB69D] p-6 sm:p-10 space-y-7 shadow-[0_24px_60px_-18px_rgba(73,51,38,0.45)] ring-1 ring-[#E0CFBA]">
          {/* Corner ornaments */}
          <span aria-hidden="true" className="absolute top-3 left-3 w-2.5 h-2.5 rotate-45 bg-[#CDB69D] z-[2]" />
          <span aria-hidden="true" className="absolute top-3 right-3 w-2.5 h-2.5 rotate-45 bg-[#CDB69D] z-[2]" />
          <span aria-hidden="true" className="absolute bottom-3 left-3 w-2.5 h-2.5 rotate-45 bg-[#CDB69D] z-[2]" />
          <span aria-hidden="true" className="absolute bottom-3 right-3 w-2.5 h-2.5 rotate-45 bg-[#CDB69D] z-[2]" />
          {/* Gold hairline top accent */}
          <span aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#CDB69D] to-transparent z-[2]" />

          <div className="relative z-[2] space-y-7">
            {/* How ordering works — 3 steps */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              {orderSteps.map((step) => (
                <div key={step.num} className="rounded-2xl bg-[#EDE2D0]/90 border border-[#E0CFBA] px-2 py-3 space-y-1">
                  <span className="mx-auto w-7 h-7 rounded-full bg-[#493326] text-[#F4EAE0] text-xs font-bold flex items-center justify-center font-bengali-heading">
                    {step.num}
                  </span>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#493326] leading-tight">{step.title}</p>
                  <p className="text-[10px] text-[#735744] leading-tight hidden sm:block">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Synchronized Selected Product Display */}
            <div className="rounded-2xl bg-[#EDE2D0]/90 border border-[#E0CFBA] p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#F4EAE0] border border-[#E0CFBA] p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
                  <img
                    src="/assets/tamur-product.png"
                    alt="তেমুর মেডজুল খেজুর জার"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] tracking-wider text-[#735744] font-semibold">
                    নির্বাচিত প্যাকেজ
                  </span>
                  <h4 className="font-bengali-heading text-base sm:text-lg text-[#493326] truncate">
                    মেডজুল খেজুর — {selectedTier.weightGrams === 1200 ? "১.২ কেজি" : `${selectedTier.weightGrams}g`}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#735744]">
                    {selectedTier.boxesCount === 1 ? "১টি সিল্ড জার (৪০০ গ্রাম)" : `${selectedTier.boxesCount}টি সিল্ড জার (${selectedTier.weightGrams === 1200 ? "১.২ কেজি" : `${selectedTier.weightGrams}g`})`}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-bengali-heading text-xl sm:text-2xl text-[#493326]">
                    ৳{selectedTier.salePrice.toLocaleString()}
                  </span>
                  {selectedTier.regularPrice > selectedTier.salePrice && (
                    <span className="block text-[11px] text-[#735744] line-through">
                      ৳{selectedTier.regularPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              {/* Financial Summary */}
              <div className="pt-3 border-t border-[#E0CFBA]/80 space-y-1.5 text-xs">
                <div className="flex justify-between text-[#735744]">
                  <span>পণ্যের মূল্য:</span>
                  <span className="font-semibold text-[#493326]">৳{selectedTier.salePrice.toLocaleString()}</span>
                </div>
                {selectedTier.savings > 0 && (
                  <div className="flex justify-between text-[#493326] font-medium">
                    <span>প্যাকেজ সাশ্রয়:</span>
                    <span className="font-semibold">−৳{selectedTier.savings.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#735744]">
                  <span>ডেলিভারি চার্জ ({zone === "inside" ? "ঢাকার ভেতরে" : "ঢাকার বাইরে"}):</span>
                  <span className="font-semibold text-[#493326]">
                    {deliveryFee === 0 ? "সম্পূর্ণ ফ্রি" : `৳${deliveryFee}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#E0CFBA] flex justify-between text-sm sm:text-base font-bold text-[#493326]">
                  <span>সর্বমোট প্রদেয়:</span>
                  <span className="font-bengali-heading text-xl text-[#493326]">
                    ৳{grandTotal.toLocaleString()}
                  </span>
                </div>
                <p className="text-center text-[11px] text-[#735744] pt-1">
                  এই টাকাটাই ডেলিভারির সময় নগদে দেবেন — এর বাইরে আর কিছু নয়
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleOrderSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Customer Full Name: Exact Placeholder 'নাম' */}
              <div>
                <label className="block text-xs font-semibold tracking-wider text-[#735744] mb-1.5">
                  আপনার পুরো নাম *
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="নাম"
                  className={`w-full px-4 py-3 rounded-xl bg-[#EDE2D0]/90 border text-sm text-[#493326] placeholder-[#735744]/55 focus:outline-none focus:border-[#493326] focus:ring-2 focus:ring-[#493326]/15 transition-all ${
                    errors.name ? "border-red-500" : "border-[#E0CFBA]"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Mobile Phone Number: Exact Placeholder 'ফোন নাম্বার' */}
              <div>
                <label className="block text-xs font-semibold tracking-wider text-[#735744] mb-1.5">
                  মোবাইল নম্বর *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="ফোন নাম্বার"
                  className={`w-full px-4 py-3 rounded-xl bg-[#EDE2D0]/90 border text-sm text-[#493326] placeholder-[#735744]/55 focus:outline-none focus:border-[#493326] focus:ring-2 focus:ring-[#493326]/15 transition-all ${
                    errors.phone ? "border-red-500" : "border-[#E0CFBA]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Delivery Area Selector */}
              <div>
                <label className="block text-xs font-semibold tracking-wider text-[#735744] mb-1.5">
                  ডেলিভারি এলাকা *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setZone("inside")}
                    className={`btn-lift p-3 rounded-xl border text-left text-xs cursor-pointer min-h-[44px] ${
                      zone === "inside"
                        ? "bg-[#EDE2D0] border-[#493326] text-[#493326] font-semibold shadow-2xs"
                        : "bg-[#F4EAE0] border-[#E0CFBA] text-[#735744] hover:border-[#735744]"
                    }`}
                  >
                    <span className="block font-semibold">ঢাকার ভেতরে</span>
                    <span className="text-[11px] opacity-85">
                      {selectedTier.boxesCount >= 2 ? "ফ্রি ডেলিভারি" : "৳৭০ ডেলিভারি চার্জ"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setZone("outside")}
                    className={`btn-lift p-3 rounded-xl border text-left text-xs cursor-pointer min-h-[44px] ${
                      zone === "outside"
                        ? "bg-[#EDE2D0] border-[#493326] text-[#493326] font-semibold shadow-2xs"
                        : "bg-[#F4EAE0] border-[#E0CFBA] text-[#735744] hover:border-[#735744]"
                    }`}
                  >
                    <span className="block font-semibold">ঢাকার বাইরে</span>
                    <span className="text-[11px] opacity-85">
                      {selectedTier.boxesCount >= 3 ? "ফ্রি ডেলিভারি" : "৳১৩০ ডেলিভারি চার্জ"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <label className="block text-xs font-semibold tracking-wider text-[#735744] mb-1.5">
                  ডেলিভারির পূর্ণাঙ্গ ঠিকানা *
                </label>
                <textarea
                  rows={3}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (errors.address) setErrors({ ...errors, address: undefined });
                  }}
                  placeholder="বাসা নং, রোড নং, এলাকা ও থানার বিস্তারিত লিখুন"
                  className={`w-full px-4 py-3 rounded-xl bg-[#EDE2D0]/90 border text-sm text-[#493326] placeholder-[#735744]/55 focus:outline-none focus:border-[#493326] focus:ring-2 focus:ring-[#493326]/15 transition-all resize-none ${
                    errors.address ? "border-red-500" : "border-[#E0CFBA]"
                  }`}
                />
                {errors.address && (
                  <p className="text-xs text-red-500 mt-1">{errors.address}</p>
                )}
              </div>

              {/* Payment Method — Cash on Delivery ONLY */}
              <div>
                <label className="block text-xs font-semibold tracking-wider text-[#735744] mb-1.5">
                  পেমেন্ট মাধ্যম
                </label>
                <div className="rounded-2xl border-2 border-[#493326] bg-[#493326] text-[#F4EAE0] p-4 flex items-start gap-3 shadow-md">
                  <span className="w-11 h-11 rounded-full bg-[#F4EAE0]/15 border border-[#F4EAE0]/25 flex items-center justify-center shrink-0">
                    <IconCash className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-bengali-heading text-lg leading-snug flex items-center gap-2 flex-wrap">
                      ক্যাশ অন ডেলিভারি
                      <span className="inline-flex items-center gap-1 text-[10px] font-sans font-bold tracking-wide bg-[#E0CFBA] text-[#493326] px-2 py-0.5 rounded-full">
                        <IconCheck className="w-3 h-3" /> একমাত্র মাধ্যম
                      </span>
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#EDE2D0]/85 leading-relaxed pt-0.5">
                      পণ্য হাতে পেয়ে দেখে নগদে মূল্য পরিশোধ করুন — কোনো অগ্রিম, বিকাশ বা কার্ড পেমেন্ট লাগবে না।
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2.5">
                  {["অগ্রিম পেমেন্ট নেই", "পার্সেল দেখে পেমেন্ট", "সারা দেশে ডেলিভারি"].map((chip) => (
                    <span key={chip} className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#735744] bg-[#EDE2D0] border border-[#E0CFBA] px-2.5 py-1 rounded-full">
                      <IconCheck className="w-3 h-3 text-[#493326]" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Submit Order Button with Periodic Light Shine Animation */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shine-button btn-lift w-full py-4 rounded-full bg-[#493326] text-[#F4EAE0] font-semibold text-xs sm:text-sm tracking-wider hover:bg-[#5C4033] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#F4EAE0] border-t-transparent rounded-full animate-spin" />
                        <span>অর্ডার কনফার্ম করা হচ্ছে...</span>
                      </>
                    ) : (
                      <>
                        <IconShoppingBag className="w-4 h-4" />
                        <span>অর্ডার নিশ্চিত করুন (৳{grandTotal.toLocaleString()})</span>
                      </>
                    )}
                  </span>
                </button>
                <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#735744] pt-2.5 text-center">
                  <IconTruck className="w-3.5 h-3.5 shrink-0" />
                  পণ্য হাতে পেয়ে নগদে পরিশোধ করবেন — এখন কিছু দিতে হবে না
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      <OrderSuccessModal
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
      />
    </section>
  );
}
