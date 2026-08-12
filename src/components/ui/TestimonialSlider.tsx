"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % testimonialsData.length), 6500);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonialsData[i];

  return (
    <div
      className="relative font-sans"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Testimonial Card */}
      <div className="bg-[#FCFBFA] border border-[#E8E3D9] rounded-3xl p-8 sm:p-12 md:p-16 shadow-sm">
        <Quote className="h-8 w-8 text-[#D48C00] opacity-80" />
        
        <blockquote
          key={t.name}
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#1B4332] leading-snug animate-fade-in"
        >
          “{t.text}”
        </blockquote>
        
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E8E3D9]/60">
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-[#1B4332]">{t.name}</p>
            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#5e6660] mt-1">
              Review from {t.source}
            </p>
          </div>
          
          <div className="flex shrink-0 gap-1 text-[#D48C00]">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="mt-6 flex items-center justify-between gap-4">
        {/* Dot Indicators */}
        <div className="flex flex-wrap gap-1.5">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.name}
              aria-label={`Review ${idx + 1}`}
              onClick={() => setI(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-500 cursor-pointer",
                idx === i ? "w-8 bg-[#1B4332]" : "w-2 bg-[#1B4332]/25 hover:bg-[#1B4332]/50"
              )}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex shrink-0 gap-2">
          <button
            aria-label="Previous review"
            onClick={() => setI((v) => (v - 1 + testimonialsData.length) % testimonialsData.length)}
            className="flex items-center justify-center h-10 w-10 rounded-full border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next review"
            onClick={() => setI((v) => (v + 1) % testimonialsData.length)}
            className="flex items-center justify-center h-10 w-10 rounded-full border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
