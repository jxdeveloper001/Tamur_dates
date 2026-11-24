"use client";

import React, { useState } from "react";
import { IconShoppingBag } from "./Icons";
import { ProductOption } from "../data/siteData";
import OrderSuccessModal, { OrderConfirmationData } from "./OrderSuccessModal";
import ArabicHeadingFlourish from "./ArabicHeadingFlourish";

interface OrderSectionProps {
  selectedTier: ProductOption;
}

export default function OrderSection({ selectedTier }: OrderSectionProps) {
  const [zone, setZone] = useState<"inside" | "outside">("inside");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("ক্যাশ অন ডেলিভারি");
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

  return (
    <section id="order" className="relative py-20 sm:py-28 text-[#493326] overflow-hidden">
      {/* 1. Surrounding Order Section Photographic Background (Exact Attached Mosque Sunset & Dates Image) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/assets/bg-order-mosque-dates.jpg')",
        }}
        aria-hidden="true"
      />
      {/* 2. Warm Cream Translucent Softening Overlay for Natural Details and Ideal Contrast */}
      <div className="absolute inset-0 bg-[#EDE2D0]/85 backdrop-blur-[0.5px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <p className="text-xs uppercase tracking-widest text-[#735744] font-medium">
            অনলাইন অর্ডার • حجز الطلب
          </p>
          <h2 className="font-bengali-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#493326]">
            আপনার পছন্দের প্যাকেজ অর্ডার করুন
          </h2>
          <ArabicHeadingFlourish align="center" color="#735744" width={150} className="pt-1" />
          <p className="text-xs text-[#735744] pt-1">
            সারা দেশে ক্যাশ অন ডেলিভারি সুবিধা ও দ্রুততম সময়ে হোম ডেলিভারি।
          </p>
        </div>

        {/* 3. The Clean, Focused Order Form Container (Strictly NO Background Image Inside) */}
        <div className="max-w-xl mx-auto rounded-3xl bg-[#F4EAE0] border border-[#E0CFBA] p-6 sm:p-11 space-y-7 shadow-xl">
          
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
                <h4 className="font-bengali-heading font-bold text-sm sm:text-base text-[#493326] truncate">
                  মেডজুল খেজুর — {selectedTier.weightGrams === 1200 ? "১.২ কেজি" : `${selectedTier.weightGrams}g`}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#735744]">
                  {selectedTier.boxesCount === 1 ? "১টি সিল্ড জার (৪০০ গ্রাম)" : `${selectedTier.boxesCount}টি সিল্ড জার (${selectedTier.weightGrams === 1200 ? "১.২ কেজি" : `${selectedTier.weightGrams}g`})`}
                </p>
              </div>
              <div className="text-right">
                <span className="font-bengali-heading text-lg sm:text-xl font-bold text-[#493326]">
                  ৳{selectedTier.salePrice.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="pt-3 border-t border-[#E0CFBA]/80 space-y-1.5 text-xs">
              <div className="flex justify-between text-[#735744]">
                <span>পণ্যের মূল্য:</span>
                <span className="font-semibold text-[#493326]">৳{selectedTier.salePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#735744]">
                <span>ডেলিভারি চার্জ ({zone === "inside" ? "ঢাকার ভেতরে" : "ঢাকার বাইরে"}):</span>
                <span className="font-semibold text-[#493326]">
                  {deliveryFee === 0 ? "সম্পূর্ণ ফ্রি" : `৳${deliveryFee}`}
                </span>
              </div>
              <div className="pt-2 border-t border-[#E0CFBA] flex justify-between text-sm sm:text-base font-bold text-[#493326]">
                <span>সর্বমোট প্রদেয়:</span>
                <span className="font-bengali-heading text-lg text-[#493326]">
                  ৳{grandTotal.toLocaleString()}
                </span>
              </div>
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
                className={`w-full px-4 py-3 rounded-xl bg-[#EDE2D0]/90 border text-sm text-[#493326] placeholder-[#735744]/55 focus:outline-none focus:border-[#493326] transition-colors ${
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
                className={`w-full px-4 py-3 rounded-xl bg-[#EDE2D0]/90 border text-sm text-[#493326] placeholder-[#735744]/55 focus:outline-none focus:border-[#493326] transition-colors ${
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
                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer min-h-[44px] ${
                    zone === "inside"
                      ? "bg-[#EDE2D0] border-[#493326] text-[#493326] font-semibold shadow-2xs"
                      : "bg-[#F4EAE0] border-[#E0CFBA] text-[#735744]"
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
                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer min-h-[44px] ${
                    zone === "outside"
                      ? "bg-[#EDE2D0] border-[#493326] text-[#493326] font-semibold shadow-2xs"
                      : "bg-[#F4EAE0] border-[#E0CFBA] text-[#735744]"
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
                className={`w-full px-4 py-3 rounded-xl bg-[#EDE2D0]/90 border text-sm text-[#493326] placeholder-[#735744]/55 focus:outline-none focus:border-[#493326] transition-colors resize-none ${
                  errors.address ? "border-red-500" : "border-[#E0CFBA]"
                }`}
              />
              {errors.address && (
                <p className="text-xs text-red-500 mt-1">{errors.address}</p>
              )}
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-semibold tracking-wider text-[#735744] mb-1.5">
                পেমেন্ট মাধ্যম
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("ক্যাশ অন ডেলিভারি")}
                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer min-h-[44px] ${
                    paymentMethod === "ক্যাশ অন ডেলিভারি"
                      ? "bg-[#EDE2D0] border-[#493326] text-[#493326] font-semibold shadow-2xs"
                      : "bg-[#F4EAE0] border-[#E0CFBA] text-[#735744]"
                  }`}
                >
                  <span className="block font-semibold">ক্যাশ অন ডেলিভারি</span>
                  <span className="text-[10px] opacity-80">পণ্য হাতে পেয়ে মূল্য পরিশোধ</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("বিকাশ / অনলাইন")}
                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer min-h-[44px] ${
                    paymentMethod === "বিকাশ / অনলাইন"
                      ? "bg-[#EDE2D0] border-[#493326] text-[#493326] font-semibold shadow-2xs"
                      : "bg-[#F4EAE0] border-[#E0CFBA] text-[#735744]"
                  }`}
                >
                  <span className="block font-semibold">বিকাশ / অনলাইন</span>
                  <span className="text-[10px] opacity-80">নিরাপদ ডিজিটাল পেমেন্ট</span>
                </button>
              </div>
            </div>

            {/* Submit Order Button with Periodic Light Shine Animation */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="shine-button w-full py-4 rounded-full bg-[#493326] text-[#F4EAE0] font-semibold text-xs sm:text-sm tracking-wider hover:bg-[#38261C] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
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
            </div>

          </form>

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
