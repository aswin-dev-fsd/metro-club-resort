import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Users,
  Maximize,
  Check,
  MessageCircle,
  Phone,
  ArrowLeft,
  Bed,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { roomsData, Room } from "@/data/rooms";
import { createWhatsAppUrl, DISPLAY_PHONE } from "@/lib/whatsapp";

interface RoomDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return roomsData.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({
  params,
}: RoomDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = roomsData.find((r) => r.slug === slug);

  if (!room) {
    return {
      title: "Room Not Found",
    };
  }

  return {
    title: `${room.name} | ₹${room.pricePerNight.toLocaleString("en-IN")}/night`,
    description: room.description,
    openGraph: {
      title: `${room.name} | Metro Club Resort Coimbatore`,
      description: room.description,
      images: [
        {
          url: room.image,
          alt: room.name,
        },
      ],
    },
  };
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { slug } = await params;
  const room = roomsData.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const otherRooms = roomsData.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <div className="pt-32 pb-20 bg-[#FCFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/rooms"
            className="inline-flex items-center text-sm font-sans font-semibold text-[#5e6660] hover:text-[#1B4332] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to All Rooms & Suites</span>
          </Link>
        </div>

        {/* Room Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-[#E8E3D9] gap-4">
          <div>
            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-[0.15em] rounded-full bg-[#fef3d6] text-[#D48C00]">
              Official Accommodation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1B4332]">
              {room.name}
            </h1>
            <p className="text-base text-[#5e6660] mt-1 font-sans">{room.tagline}</p>
          </div>

          <div className="bg-[#1B4332] text-white p-4 rounded-2xl flex items-center space-x-4 shadow-md shrink-0">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#D48C00] font-semibold block leading-tight">
                Official Price
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-sans font-bold leading-none">
                  &#x20B9;{room.pricePerNight.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-neutral-300 leading-none">/ night</span>
              </div>
            </div>
            <a
              href={createWhatsAppUrl(room.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-sans font-bold uppercase tracking-[0.08em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] px-4 py-3 rounded-xl shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Media Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-neutral-100">
            <Image
              src={room.gallery[0] || room.image}
              alt={room.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div className="relative aspect-[16/10] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow border-2 border-white bg-neutral-100">
              <Image
                src={room.gallery[1] || room.image}
                alt={`${room.name} View`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[16/10] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow border-2 border-white bg-neutral-100">
              <Image
                src={room.gallery[2] || room.image}
                alt={`${room.name} Detail`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Room Specs & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left 2 Cols: Description & Amenities */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-[#E8E3D9] shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#1B4332] mb-4">
                Room Overview
              </h2>
              <p className="text-base text-[#5e6660] leading-relaxed mb-6">
                {room.description}
              </p>

              {/* Key Specs Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8E3D9]">
                <div className="text-center p-3 rounded-xl bg-[#F4F1EA]">
                  <Maximize className="w-5 h-5 text-[#D48C00] mx-auto mb-1" />
                  <span className="block text-xs text-[#5e6660]">Room Area</span>
                  <span className="block text-sm font-bold text-[#1B4332]">{room.size}</span>
                </div>
                <div className="text-center p-3 rounded-xl bg-[#F4F1EA]">
                  <Users className="w-5 h-5 text-[#D48C00] mx-auto mb-1" />
                  <span className="block text-xs text-[#5e6660]">Occupancy</span>
                  <span className="block text-sm font-bold text-[#1B4332]">{room.maxOccupancy}</span>
                </div>
                <div className="text-center p-3 rounded-xl bg-[#F4F1EA]">
                  <Bed className="w-5 h-5 text-[#D48C00] mx-auto mb-1" />
                  <span className="block text-xs text-[#5e6660]">Bed Config</span>
                  <span className="block text-xs font-bold text-[#1B4332] truncate">{room.bedType}</span>
                </div>
              </div>
            </div>

            {/* In-Room Amenities */}
            <div className="bg-white p-8 rounded-3xl border border-[#E8E3D9] shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-[#1B4332] mb-6">
                Included Features & Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-[#2D312E]">
                    <span className="w-6 h-6 rounded-full bg-[#fef3d6] flex items-center justify-center text-[#D48C00] font-bold text-xs shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Col: Instant Reservation Box */}
          <div className="space-y-6">
            <div className="bg-[#1B4332] text-white p-8 rounded-3xl shadow-xl sticky top-28 border border-[#D48C00]/30">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-[0.15em] rounded-full bg-[#D48C00]/20 text-[#D48C00]">
                Direct Reservation
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Reserve {room.name}
              </h3>
              <p className="text-xs text-neutral-300 mb-6">
                Book directly via WhatsApp for guaranteed best rates, instant confirmation, and flexible check-in support.
              </p>

              <div className="bg-white/10 rounded-2xl p-4 mb-6 space-y-2 text-xs text-neutral-200">
                <div className="flex justify-between">
                  <span>Room Rate:</span>
                  <span className="font-bold text-[#D48C00]">&#x20B9;{room.pricePerNight.toLocaleString("en-IN")} / night</span>
                </div>
                <div className="flex justify-between">
                  <span>Breakfast:</span>
                  <span className="text-green-300 font-semibold">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>WiFi & Parking:</span>
                  <span className="text-green-300 font-semibold">Free</span>
                </div>
              </div>

              <a
                href={createWhatsAppUrl(room.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.1em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] py-4 px-6 rounded-xl shadow-lg transition-all text-center mb-3"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book via WhatsApp Now</span>
              </a>

              <a
                href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-center space-x-2 text-xs font-sans font-semibold text-white/80 hover:text-white py-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#D48C00]" />
                <span>Call Reservations: {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Other Accommodations */}
        <div className="pt-12 border-t border-[#E8E3D9]">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B4332] mb-8 text-center">
            Explore Other Accommodations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherRooms.map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8E3D9] p-4 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <Image src={r.image} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#1B4332]">{r.name}</h3>
                  <p className="text-xs text-[#D48C00] font-semibold mb-3">&#x20B9;{r.pricePerNight.toLocaleString("en-IN")} / night</p>
                  <Link
                    href={`/rooms/${r.slug}`}
                    className="block text-xs font-bold uppercase tracking-wider text-center bg-[#F4F1EA] hover:bg-[#E8E3D9] text-[#1B4332] py-2 rounded-lg transition-colors"
                  >
                    View Room
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
