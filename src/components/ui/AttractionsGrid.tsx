import React from "react";
import { Clock, MapPin, Navigation } from "lucide-react";
import { attractionsData } from "@/data/attractions";

export function AttractionsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 font-sans">
      {attractionsData.map((attraction) => (
        <a
          key={attraction.name}
          href={`https://www.google.com/maps/search/${encodeURIComponent(attraction.name + " Coimbatore")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-3xl border border-[#E8E3D9] bg-white p-6 shadow-sm hover:shadow-md hover:border-[#D48C00]/40 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div>
            <span className="inline-flex rounded-full bg-[#FCFBFA] border border-[#E8E3D9] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1B4332]">
              {attraction.type}
            </span>
            <h3 className="mt-4 text-xl font-serif font-bold text-[#1B4332] group-hover:text-[#D48C00] transition-colors leading-snug">
              {attraction.name}
            </h3>
          </div>
          
          <div className="mt-8 space-y-2.5 text-xs text-[#5e6660]">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#D48C00]" /> 
              <span>{attraction.distance} from resort</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#D48C00]" /> 
              <span>{attraction.time} drive</span>
            </p>
            <p className="flex items-center gap-2 text-[#D48C00] font-bold uppercase tracking-wider text-[10px] pt-2 border-t border-[#E8E3D9]/60 group-hover:translate-x-1 transition-transform">
              <Navigation className="h-3.5 w-3.5" /> 
              <span>Open in Maps</span>
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
