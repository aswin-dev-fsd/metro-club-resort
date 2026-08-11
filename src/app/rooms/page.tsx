import React from "react";
import { Metadata } from "next";
import { RoomCard } from "@/components/ui/RoomCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { roomsData } from "@/data/rooms";
import { Check, Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Rooms & Suites | Official Rates & Direct Booking",
  description:
    "Explore luxury rooms and suites at Metro Club Resort, Coimbatore. From Standard Rooms to Pool View Suites with complimentary breakfast and WiFi.",
};

export default function RoomsPage() {
  return (
    <div className="pb-20 bg-[#FCFBFA]">
      {/* 1. Hero Header */}
      <section className="bg-[#112d22] text-white pt-28 pb-16 md:pt-36 md:pb-20 mb-16 text-center border-b border-[#D48C00]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-[#D48C00]/20 text-[#D48C00] border border-[#D48C00]/30">
            Accommodations & Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4 text-white">
            Luxury Rooms & Countryside Suites
          </h1>
          <p className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Thoughtfully designed sanctuaries featuring plush bedding, garden or pool vistas, and transparent brand pricing starting at ₹2,499 / night.
          </p>
        </div>
      </section>

      {/* 2. Room Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      {/* 3. Complimentary Booking Inclusions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#F4F1EA] rounded-3xl p-8 md:p-12 border border-[#E8E3D9]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-[0.15em] rounded-full bg-[#fef3d6] text-[#D48C00]">
              Every Stay Includes
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B4332]">
              Complimentary Inclusions with All Bookings
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-[#E8E3D9]">
              <span className="w-8 h-8 rounded-lg bg-[#D48C00]/20 flex items-center justify-center text-[#D48C00] shrink-0 font-bold">
                ✓
              </span>
              <span className="text-sm font-semibold text-[#1B4332]">
                Complimentary Daily Gourmet Breakfast
              </span>
            </div>

            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-[#E8E3D9]">
              <span className="w-8 h-8 rounded-lg bg-[#D48C00]/20 flex items-center justify-center text-[#D48C00] shrink-0 font-bold">
                ✓
              </span>
              <span className="text-sm font-semibold text-[#1B4332]">
                High-Speed Wi-Fi Across All Areas
              </span>
            </div>

            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-[#E8E3D9]">
              <span className="w-8 h-8 rounded-lg bg-[#D48C00]/20 flex items-center justify-center text-[#D48C00] shrink-0 font-bold">
                ✓
              </span>
              <span className="text-sm font-semibold text-[#1B4332]">
                Access to Swimming Pool & Turf
              </span>
            </div>

            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-[#E8E3D9]">
              <span className="w-8 h-8 rounded-lg bg-[#D48C00]/20 flex items-center justify-center text-[#D48C00] shrink-0 font-bold">
                ✓
              </span>
              <span className="text-sm font-semibold text-[#1B4332]">
                Complimentary On-Site Secure Parking
              </span>
            </div>

            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-[#E8E3D9]">
              <span className="w-8 h-8 rounded-lg bg-[#D48C00]/20 flex items-center justify-center text-[#D48C00] shrink-0 font-bold">
                ✓
              </span>
              <span className="text-sm font-semibold text-[#1B4332]">
                Evening Campfire Experience
              </span>
            </div>

            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-[#E8E3D9]">
              <span className="w-8 h-8 rounded-lg bg-[#D48C00]/20 flex items-center justify-center text-[#D48C00] shrink-0 font-bold">
                ✓
              </span>
              <span className="text-sm font-semibold text-[#1B4332]">
                24/7 Front Desk & Concierge
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Direct WhatsApp Booking CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 rounded-3xl bg-[#1B4332] text-white">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
            Looking for Custom Group or Corporate Rates?
          </h3>
          <p className="text-sm text-neutral-300 mb-6 max-w-xl mx-auto">
            Contact our reservations team directly on WhatsApp to get tailored packages for wedding guests, trade fair attendees, or family reunions.
          </p>
          <a
            href={createWhatsAppUrl(
              "Hello Metro Club Resort! I would like to inquire about group booking discounts."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.1em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] px-8 py-3.5 rounded-xl shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat for Group Packages</span>
          </a>
        </div>
      </section>
    </div>
  );
}
