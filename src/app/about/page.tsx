import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Star, Users, Coffee, Bed, ArrowRight, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resortInfo } from "@/data/resortInfo";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us | Luxury Retreat in Coimbatore",
  description:
    "Learn about Metro Club Resort in Sultanpet, Coimbatore. A premier family retreat combining rural tranquility, attentive hospitality, turf arena, and pool amenities.",
};

export default function AboutPage() {
  return (
    <div className="pb-20 bg-[#FCFBFA]">
      {/* 1. Page Header Banner */}
      <section className="bg-[#112d22] text-white pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden mb-16 border-b border-[#D48C00]/20">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg"
            alt="Resort Landscape"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-[#D48C00]/20 text-[#D48C00] border border-[#D48C00]/30">
            Our Story & Heritage
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4 text-white">
            A Perfect Retreat for Family & Friends
          </h1>
          <p className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Discover a tranquil sanctuary situated amidst Coimbatore's lush countryside, engineered for pure relaxation, active sports, and memorable gatherings.
          </p>
        </div>
      </section>

      {/* 2. Brand Vision & Positioning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-[0.15em] rounded-full bg-[#fef3d6] text-[#D48C00]">
              Brand Vision & Positioning
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B4332] mb-6 leading-tight">
              Bridging Peaceful Relaxation with Active Lifestyle Experiences
            </h2>
            <p className="text-base text-[#5e6660] leading-relaxed mb-4">
              Metro Club Resort combines a tranquil, picturesque atmosphere with premium modern amenities and warm, attentive hospitality. Serving as an ideal staycation destination for families, social gatherings, and business travelers attending events at the Codissia Trade Fair Complex, our design choices bridge peaceful relaxation with high-energy experiences.
            </p>
            <p className="text-base text-[#5e6660] leading-relaxed mb-6">
              From our professional sports turf and serene pool to live rain dance events and starry campfire circles, every visual output and service touchpoint evokes clean, spacious luxury.
            </p>

            {/* Value checklist */}
            <div className="space-y-2.5 mb-8">
              <div className="flex items-center space-x-3 text-sm text-[#2D312E] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#D48C00] shrink-0" />
                <span>Attentive, personalized hospitality and local guidance</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#2D312E] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#D48C00] shrink-0" />
                <span>Dedicated recreation zones: Turf, Pool, Rain Dance, and Horse Carts</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#2D312E] font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#D48C00] shrink-0" />
                <span>Authentic regional & multi-cuisine gourmet dining</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={createWhatsAppUrl("Hello Metro Club Resort! I'd like to book a retreat.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.08em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] px-6 py-3 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book Direct on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="https://metroclubresort.in/wp-content/uploads/2025/05/3-3.jpg"
              alt="Metro Club Resort Pool and Lawn View"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 3. Verified Metrics & Statistics */}
      <section className="bg-[#1B4332] text-white py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
            Trusted by Travelers Across South India
          </h2>
          <p className="text-sm text-neutral-300 mb-10">
            Real metrics backed by hundreds of satisfied family and corporate weekend stays.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Bed className="w-8 h-8 text-[#D48C00] mx-auto mb-3" />
              <span className="block text-4xl font-serif font-bold text-white mb-1">3+</span>
              <span className="text-xs uppercase tracking-wider text-neutral-300 font-sans font-semibold">
                Luxury Room Categories
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Users className="w-8 h-8 text-[#D48C00] mx-auto mb-3" />
              <span className="block text-4xl font-serif font-bold text-white mb-1">1.5k+</span>
              <span className="text-xs uppercase tracking-wider text-neutral-300 font-sans font-semibold">
                Delighted Guests
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Star className="w-8 h-8 text-[#D48C00] mx-auto mb-3 fill-current" />
              <span className="block text-4xl font-serif font-bold text-white mb-1">365</span>
              <span className="text-xs uppercase tracking-wider text-neutral-300 font-sans font-semibold">
                Five-Star Ratings
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Coffee className="w-8 h-8 text-[#D48C00] mx-auto mb-3" />
              <span className="block text-4xl font-serif font-bold text-white mb-1">1k+</span>
              <span className="text-xs uppercase tracking-wider text-neutral-300 font-sans font-semibold">
                Served Breakfasts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Guest Testimonial Spotlight */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#E8E3D9] shadow-lg">
          <div className="flex items-center justify-center space-x-1 text-[#D48C00] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-serif italic text-[#1B4332] leading-relaxed mb-6">
            "{resortInfo.officialTestimonial.quote}"
          </blockquote>
          <span className="block font-sans font-bold text-base text-[#D48C00] uppercase tracking-wider">
            {resortInfo.officialTestimonial.author}
          </span>
          <span className="block text-xs text-[#5e6660] mt-1">
            {resortInfo.officialTestimonial.source}
          </span>
        </div>
      </section>
    </div>
  );
}
