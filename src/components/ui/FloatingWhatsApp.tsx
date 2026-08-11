"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const whatsappUrl = createWhatsAppUrl(
    "Hello Metro Club Resort! I would like to enquire about room bookings, pricing, and availability."
  );

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Booking Chat with Metro Club Resort"
        className="flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/30"
      >
        <MessageCircle className="w-6 h-6 fill-current animate-bounce" />
        <span className="hidden sm:inline font-sans font-bold text-sm tracking-wide">
          Book on WhatsApp
        </span>
      </a>
    </aside>
  );
}
