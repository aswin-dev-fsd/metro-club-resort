import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Compass,
  Star,
  CheckCircle2,
  Wifi,
  Car,
  Coffee,
  Clock,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomCard } from "@/components/ui/RoomCard";
import { AmenityCard } from "@/components/ui/AmenityCard";
import { roomsData } from "@/data/rooms";
import { amenitiesData } from "@/data/amenities";
import { resortInfo } from "@/data/resortInfo";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const featuredRooms = roomsData.slice(0, 4);
  const featuredAmenities = amenitiesData.filter((a) => a.highlight).slice(0, 6);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#112d22]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg"
            alt="Metro Club Resort Coimbatore"
            fill
            priority
            className="object-cover object-center scale-105 animate-pulse transition-transform duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#112d22] via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <div className="inline-flex items-center space-x-2 bg-[#D48C00]/20 border border-[#D48C00]/40 text-[#D48C00] px-4 py-1.5 rounded-full text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#D48C00]" />
            <span>A Perfect Retreat for Family & Friends</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6">
            Escape. Relax. Experience Luxury in Nature.
          </h1>

          <p className="text-lg md:text-xl text-neutral-200 font-sans font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            A tranquil retreat for families, celebrations, and corporate getaways in Sultanpet, Coimbatore. Featuring modern suites, swimming pool, sports turf arena, and live campfire evenings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={createWhatsAppUrl(
                "Hello Metro Club Resort! I would like to check availability and book a stay."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.1em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Book via WhatsApp</span>
            </a>

            <Link
              href="/rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.1em] bg-white/15 hover:bg-white/25 text-white border border-white/20 px-8 py-4 rounded-xl backdrop-blur-md transition-all"
            >
              <span>Explore Rooms & Rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-1 font-sans">Scroll to Discover</span>
          <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-2 bg-[#D48C00] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. QUICK FEATURE BANNERS */}
      <section className="bg-[#1B4332] border-y border-[#D48C00]/20 py-6 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#D48C00]/20 border border-[#D48C00]/40 flex items-center justify-center text-[#D48C00] shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-sans">Free Parking</h4>
                <p className="text-xs text-neutral-300">Secure on-site space</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#D48C00]/20 border border-[#D48C00]/40 flex items-center justify-center text-[#D48C00] shrink-0">
                <Wifi className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-sans">High Speed WiFi</h4>
                <p className="text-xs text-neutral-300">All rooms & lawn</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#D48C00]/20 border border-[#D48C00]/40 flex items-center justify-center text-[#D48C00] shrink-0">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-sans">Breakfast Included</h4>
                <p className="text-xs text-neutral-300">Gourmet chef dishes</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#D48C00]/20 border border-[#D48C00]/40 flex items-center justify-center text-[#D48C00] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-sans">24/7 Front Desk</h4>
                <p className="text-xs text-neutral-300">Warm attentive care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT RESORT HIGHLIGHTS & STATS */}
      <section className="py-20 md:py-28 bg-[#FCFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Stack */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg"
                  alt="Metro Club Resort Landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Review Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-[#E8E3D9] max-w-xs">
                <div className="flex items-center space-x-1 text-[#D48C00] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-serif italic text-[#1B4332] font-semibold">
                  "{resortInfo.officialTestimonial.quote.slice(0, 75)}..."
                </p>
                <span className="block text-[10px] text-[#5e6660] font-sans mt-1">
                  — {resortInfo.officialTestimonial.author} (TripAdvisor)
                </span>
              </div>
            </div>

            {/* Right Column: Story & Metrics */}
            <div>
              <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-[0.15em] rounded-full bg-[#fef3d6] text-[#D48C00] border border-[#D48C00]/20">
                Brand Vision
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1B4332] mb-6 leading-tight">
                A Peaceful Haven with Active Lifestyle Adventures.
              </h2>
              <p className="text-base md:text-lg text-[#5e6660] leading-relaxed mb-6">
                Metro Club Resort combines a tranquil, picturesque atmosphere with premium modern amenities and warm, attentive hospitality. Serving as an ideal staycation destination for families, social gatherings, and business travelers attending events at Codissia, our resort balances peaceful relaxation with active recreation.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#E8E3D9] my-8">
                {resortInfo.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <span className="block text-3xl md:text-4xl font-serif font-bold text-[#1B4332]">
                      {stat.value}
                      <span className="text-[#D48C00]">{stat.suffix}</span>
                    </span>
                    <span className="block text-xs font-sans text-[#5e6660] mt-1 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.08em] bg-[#1B4332] hover:bg-[#112d22] text-white px-6 py-3 rounded-xl shadow-md transition-colors"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 text-[#D48C00]" />
                </Link>
                <a
                  href={`tel:${resortInfo.phoneRaw}`}
                  className="inline-flex items-center space-x-2 text-sm font-sans font-semibold text-[#1B4332] hover:text-[#D48C00] px-4 py-3"
                >
                  <Phone className="w-4 h-4 text-[#D48C00]" />
                  <span>Call {resortInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED ACCOMMODATIONS */}
      <section className="py-20 md:py-28 bg-[#F4F1EA] border-t border-[#E8E3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Official Pricing & Luxury Stays"
            title="Featured Rooms & Suites"
            description="Meticulously crafted sanctuaries with scenic country views, premium bedding, and instant WhatsApp booking confirmation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/rooms"
              className="inline-flex items-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.1em] bg-[#1B4332] hover:bg-[#112d22] text-white px-8 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <span>View All 4 Room Types & Amenities</span>
              <ArrowRight className="w-4 h-4 text-[#D48C00]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED AMENITIES */}
      <section className="py-20 md:py-28 bg-[#FCFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Active Recreation & Comfort"
            title="Exceptional Amenities for Everyone"
            description="From energetic sports on our professional turf to tranquil swims, rain dances, and evening bonfires."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAmenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/amenities"
              className="inline-flex items-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.1em] bg-[#0077B6] hover:bg-[#005b8c] text-white px-8 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <span>Explore All 10 Amenities</span>
              <ArrowRight className="w-4 h-4 text-[#D48C00]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED TRIPADVISOR TESTIMONIAL BANNER */}
      <section className="py-16 bg-[#112d22] text-white relative overflow-hidden border-y border-[#D48C00]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center space-x-1.5 text-[#D48C00] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed mb-6 text-neutral-100">
            "{resortInfo.officialTestimonial.quote}"
          </blockquote>
          <cite className="block not-italic font-sans">
            <span className="font-bold text-[#D48C00] text-base tracking-wider uppercase">
              {resortInfo.officialTestimonial.author}
            </span>
            <span className="block text-xs text-neutral-400 mt-0.5">
              {resortInfo.officialTestimonial.source}
            </span>
          </cite>
        </div>
      </section>

      {/* 7. LOCATION & QUICK MAP */}
      <section className="py-20 bg-[#FCFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4F1EA] rounded-3xl p-8 md:p-12 border border-[#E8E3D9] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-[0.15em] rounded-full bg-[#fef3d6] text-[#D48C00]">
                Easy Connectivity
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B4332] mb-4">
                Conveniently Located in Sultanpet, Coimbatore
              </h2>
              <p className="text-base text-[#5e6660] leading-relaxed mb-6">
                Escape the city rush without traveling far. Situated just minutes from key highways and 35-40 minutes from Coimbatore Airport and Codissia Trade Fair Complex.
              </p>
              <div className="space-y-3 mb-8 text-sm text-[#2D312E]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#D48C00] shrink-0 mt-0.5" />
                  <span>{resortInfo.fullAddress}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#D48C00] shrink-0" />
                  <span>Call: {resortInfo.phoneDisplay}</span>
                </div>
              </div>
              <a
                href={resortInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.08em] bg-[#1B4332] hover:bg-[#112d22] text-white px-6 py-3.5 rounded-xl shadow-md transition-colors"
              >
                <Compass className="w-4 h-4 text-[#D48C00]" />
                <span>Open in Google Maps Navigation</span>
              </a>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src="https://metroclubresort.in/wp-content/uploads/2025/05/3-3.jpg"
                alt="Metro Club Resort Pool and Green Campus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
