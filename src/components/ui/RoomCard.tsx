import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Maximize, ArrowRight, Bed } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Room } from "@/data/rooms";
import { createWhatsAppUrl } from "@/lib/whatsapp";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8E3D9] flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Pricing Badge */}
        <div className="absolute top-4 right-4 bg-[#1B4332]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg border border-[#D48C00]/30 shadow-md text-right">
          <span className="text-[10px] font-sans text-[#D48C00] uppercase tracking-wider block leading-tight">
            Starting from
          </span>
          <div className="flex items-baseline gap-0.5 justify-end">
            <span className="text-sm font-sans font-bold text-white leading-none">
              &#x20B9;{room.pricePerNight.toLocaleString("en-IN")}
            </span>
            <span className="text-[10px] text-neutral-300 leading-none">/ night</span>
          </div>
        </div>

        {/* Category / Occupancy Pill */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <span className="inline-flex items-center text-xs font-medium bg-white/90 backdrop-blur-sm text-[#1B4332] px-2.5 py-1 rounded-md shadow">
            <Maximize className="w-3 h-3 mr-1 text-[#D48C00]" />
            {room.size}
          </span>
          <span className="inline-flex items-center text-xs font-medium bg-white/90 backdrop-blur-sm text-[#1B4332] px-2.5 py-1 rounded-md shadow">
            <Users className="w-3 h-3 mr-1 text-[#D48C00]" />
            {room.maxOccupancy}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-serif font-bold text-[#1B4332] group-hover:text-[#D48C00] transition-colors mb-2">
            {room.name}
          </h3>
          <p className="text-xs font-sans font-semibold uppercase tracking-[0.1em] text-[#D48C00] mb-3">
            {room.bedType}
          </p>
          <p className="text-sm text-[#5e6660] leading-relaxed line-clamp-2 mb-4">
            {room.description}
          </p>

          {/* Amenities Mini-List */}
          <div className="space-y-1.5 mb-6 pt-3 border-t border-[#E8E3D9]">
            {room.amenities.slice(0, 3).map((amenity, idx) => (
              <div key={idx} className="flex items-center text-xs text-[#2D312E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D48C00] mr-2 shrink-0" />
                <span className="truncate">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E8E3D9]">
          <Link
            href={`/rooms/${room.slug}`}
            className="inline-flex items-center justify-center space-x-1.5 text-xs font-sans font-bold uppercase tracking-[0.08em] text-[#1B4332] bg-[#F4F1EA] hover:bg-[#E8E3D9] py-2.5 px-3 rounded-lg transition-colors text-center"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={createWhatsAppUrl(room.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-1.5 text-xs font-sans font-bold uppercase tracking-[0.08em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] py-2.5 px-3 rounded-lg shadow-sm hover:shadow transition-all text-center"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
