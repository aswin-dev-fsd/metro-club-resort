import React from "react";
import { Metadata } from "next";
import { AmenityCard } from "@/components/ui/AmenityCard";
import { amenitiesData } from "@/data/amenities";
import { Phone, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Amenities & Activities | Sports Turf, Pool & Events",
  description:
    "Discover amenities at Metro Club Resort Coimbatore: Swimming Pool, Sports Turf Arena, Rain Dance, Camp Fire, Banquet Hall, Indoor Games, Conference Hall, and Restaurant.",
};

export default function AmenitiesPage() {
  return (
    <div className="pb-20 bg-[#FCFBFA]">
      {/* 1. Header Banner */}
      <section className="bg-[#112d22] text-white pt-28 pb-16 md:pt-36 md:pb-20 mb-16 text-center border-b border-[#D48C00]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-[#D48C00]/20 text-[#D48C00] border border-[#D48C00]/30">
            Resort Facilities & Fun
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4 text-white">
            World-Class Amenities & Active Fun
          </h1>
          <p className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            From serene pool dips to energetic turf matches and starry bonfire nights, explore our 10 signature resort experiences.
          </p>
        </div>
      </section>

      {/* 2. Amenities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((amenity) => (
            <AmenityCard key={amenity.id} amenity={amenity} />
          ))}
        </div>
      </section>

      {/* 3. Event & Day Outing CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 md:p-12 rounded-3xl bg-[#0077B6] text-white shadow-xl">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-[0.15em] rounded-full bg-white/20 text-white">
            Day Outings & Events
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Planning a Day Outing, Turf Match or Private Event?
          </h2>
          <p className="text-sm md:text-base text-cyan-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            We host customized corporate team outings, birthday parties, turf cricket tournaments, and rain dance events. Speak to our events manager on WhatsApp for tailored group packages.
          </p>
          <a
            href={createWhatsAppUrl(
              "Hello Metro Club Resort! I would like to inquire about Day Outing and Turf / Event packages."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.1em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] px-8 py-4 rounded-xl shadow-lg transition-all"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span>Enquire for Day Outings & Events</span>
          </a>
        </div>
      </section>
    </div>
  );
}
