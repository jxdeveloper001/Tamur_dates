"use client";

import React from "react";
import { IconCheck, IconClose, IconTruck } from "./Icons";

export interface OrderConfirmationData {
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  zone: string;
  tierName: string;
  boxesCount: number;
  totalWeight: string;
  subtotal: number;
  savings: number;
  deliveryFee: number;
  grandTotal: number;
  paymentMethod: string;
  orderDate: string;
}

export default function OrderSuccessModal({
  order,
  onClose,
}: {
  order: OrderConfirmationData | null;
  onClose: () => void;
}) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#F4EAE0] text-[#493326] border border-[#E0CFBA] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#E0CFBA]/60 hover:bg-[#E0CFBA] text-[#493326] transition-colors cursor-pointer"
          aria-label="বন্ধ করুন"
        >
          <IconClose className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-full bg-[#E0CFBA] flex items-center justify-center text-[#493326] mx-auto mb-2">
            <IconCheck className="w-7 h-7 stroke-[2.5]" />
          </div>
          <p className="text-xs tracking-widest text-[#735744] font-semibold">
            অর্ডার গৃহীত হয়েছে • <span className="font-arabic text-sm text-[#493326]">شكراً</span>
          </p>
          <h3 className="font-bengali-heading text-2xl sm:text-3xl font-bold text-[#493326]">
            ধন্যবাদ, {order.customerName}!
          </h3>
          <p className="text-xs text-[#735744]">
            আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে। অর্ডার আইডি: #{order.orderId}
          </p>
        </div>

        {/* Order Details Receipt Card */}
        <div className="rounded-2xl bg-[#EDE2D0]/85 border border-[#E0CFBA] p-5 space-y-4 text-xs">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E0CFBA]">
            <img
              src="/assets/tamur-product.png"
              alt="তেমুর মেডজুল খেজুর জার"
              className="w-12 h-12 object-contain rounded-lg bg-[#F4EAE0] p-1 border border-[#E0CFBA]"
            />
            <div className="flex-1">
              <h4 className="font-bengali-heading font-bold text-sm text-[#493326]">{order.tierName}</h4>
              <p className="text-[#735744]">{order.boxesCount} × ৪০০ গ্রাম জার ({order.totalWeight})</p>
            </div>
            <div className="text-right font-semibold text-sm text-[#493326]">
              ৳{order.subtotal.toLocaleString()}
            </div>
          </div>

          <div className="space-y-1.5 text-[#735744]">
            <div className="flex justify-between">
              <span>পণ্যের মূল্য:</span>
              <span className="font-semibold text-[#493326]">৳{order.subtotal.toLocaleString()}</span>
            </div>
            {order.savings > 0 && (
              <div className="flex justify-between text-[#493326] font-medium">
                <span>প্যাকেজ সাশ্রয়:</span>
                <span className="font-semibold text-[#493326]">-৳{order.savings.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>ডেলিভারি চার্জ ({order.zone}):</span>
              <span className="font-semibold text-[#493326]">
                {order.deliveryFee === 0 ? "ফ্রি" : `৳${order.deliveryFee}`}
              </span>
            </div>
            <div className="pt-2 border-t border-[#E0CFBA] flex justify-between text-base font-bold text-[#493326]">
              <span>সর্বমোট প্রদেয়:</span>
              <span className="font-bengali-heading text-lg font-bold">৳{order.grandTotal.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E0CFBA] space-y-1 text-[#735744]">
            <p><span className="text-[#493326] font-medium">ফোন নম্বর:</span> {order.phone}</p>
            <p><span className="text-[#493326] font-medium">ঠিকানা:</span> {order.address}</p>
            <p><span className="text-[#493326] font-medium">পেমেন্ট মাধ্যম:</span> {order.paymentMethod}</p>
          </div>
        </div>

        {/* Dispatch Note */}
        <div className="p-3.5 rounded-xl bg-[#E0CFBA]/60 flex items-center gap-3 text-xs text-[#493326]">
          <IconTruck className="w-5 h-5 text-[#735744] shrink-0" />
          <p>
            পার্সেল পাঠানোর পূর্বে আমাদের প্রতিনিধি কল করে অর্ডারটি নিশ্চিত করে নেবেন।
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-full bg-[#493326] text-[#F4EAE0] font-semibold text-xs tracking-wider hover:bg-[#38261C] active:scale-95 transition-all shadow-sm cursor-pointer"
        >
          মূল পেজে ফিরে যান
        </button>

      </div>
    </div>
  );
}
