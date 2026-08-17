"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/gallery";
import { Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Rooms", "Pool & Water", "Activities", "Dining & Events"];

  const filteredItems =
    activeTab === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  return (
    <div className="pb-20 bg-[#FCFBFA]">
      {/* 1. Header */}
      <section className="bg-[#112d22] text-white pt-28 pb-16 md:pt-36 md:pb-20 mb-12 text-center border-b border-[#D48C00]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-[#D48C00]/20 text-[#D48C00] border border-[#D48C00]/30">
            Visual Experience
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4 text-white">
            Resort Moments & Gallery
          </h1>
          <p className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our tranquil grounds, luxury suites, swimming pool, sports arena, and celebratory events.
          </p>
        </div>
      </section>

      {/* 2. Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.1em] transition-all ${
                activeTab === cat
                  ? "bg-[#1B4332] text-[#D48C00] shadow-md scale-105"
                  : "bg-white text-[#5e6660] hover:bg-[#F4F1EA] border border-[#E8E3D9]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8E3D9] bg-neutral-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D48C00]">
                  {item.category}
                </span>
                <h3 className="text-sm font-serif font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom WhatsApp CTA */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <div className="p-8 rounded-3xl bg-[#1B4332] text-white">
          <h2 className="text-2xl font-serif font-bold mb-2 text-white">Ready to Experience It in Person?</h2>
          <p className="text-xs text-neutral-200 mb-6">
            Book your stay directly on WhatsApp for personalized room recommendations and special weekend rates.
          </p>
          <a
            href={createWhatsAppUrl(
              "Hello Metro Club Resort! I loved the gallery and would like to book a stay."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-sans font-bold uppercase tracking-[0.1em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] px-6 py-3 rounded-xl shadow transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Chat with Front Desk</span>
          </a>
        </div>
      </section>
    </div>
  );
}
