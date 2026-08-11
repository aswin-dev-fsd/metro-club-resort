import React from "react";
import Image from "next/image";
import { Amenity } from "@/data/amenities";

interface AmenityCardProps {
  amenity: Amenity;
}

export function AmenityCard({ amenity }: AmenityCardProps) {
  const isTealAccent =
    amenity.id === "swimming-pool" || amenity.id === "rain-dance";

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8E3D9] flex flex-col h-full">
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100">
        <Image
          src={amenity.image}
          alt={amenity.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4">
          <span
            className={`text-[10px] font-sans font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full shadow-md ${
              isTealAccent
                ? "bg-[#0077B6] text-white"
                : "bg-[#1B4332] text-[#D48C00]"
            }`}
          >
            {amenity.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className={`text-2xl font-serif font-bold mb-1 transition-colors ${
              isTealAccent
                ? "text-[#1B4332] group-hover:text-[#0077B6]"
                : "text-[#1B4332] group-hover:text-[#D48C00]"
            }`}
          >
            {amenity.name}
          </h3>
          <p className="text-xs font-sans font-medium text-[#D48C00] mb-3">
            {amenity.tagline}
          </p>
          <p className="text-sm text-[#5e6660] leading-relaxed">
            {amenity.description}
          </p>
        </div>
      </div>
    </div>
  );
}
