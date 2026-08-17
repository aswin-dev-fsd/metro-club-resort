import React from "react";
import { Metadata } from "next";
import { Check } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { IMAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "Banquet Hall Coimbatore | AC Wedding & Event Hall | Metro Club Resort",
  description:
    "An elegant air-conditioned banquet hall near Coimbatore for weddings, receptions, engagements, corporate events, and celebrations — seating up to 270 guests.",
};

const FEATURES = [
  "Seating for up to 270 guests",
  "Stage, backdrop, and grand lighting",
  "Sound system",
  "Air-conditioned interiors",
  "Multi-cuisine in-house catering",
  "Bridal & green rooms",
  "Ample parking space",
  "On-site guest accommodation",
];

export default function BanquetHallPage() {
  return (
    <main className="bg-[#FCFBFA]">
      <PageHero
        eyebrow="Banquet Hall"
        title="An interior built for big evenings"
        subtitle="Refined ambiance, spacious seating, and full event support — the centrepiece venue at Metro Club Resort."
        image={IMAGES.banquet}
        crumbs={[{ label: "Banquet Hall", to: "/banquet-hall" }]}
      />

      <Section eyebrow="The Hall" title="Grand, but always warm">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-[#E8E3D9] shadow-sm bg-neutral-100">
            <Image
              src={IMAGES.banquet}
              alt="Banquet hall interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-[#5e6660] font-sans">
              Host unforgettable celebrations in our elegant banquet hall — perfect for weddings,
              parties, or corporate events with spacious seating and refined ambiance. Warm wood,
              soft lighting, and a layout that flows from welcome drinks to the stage to dinner
              without any bottlenecks.
            </p>
            <ul className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 pt-6 border-t border-[#E8E3D9]/60">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[#2D312E] font-medium font-sans">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D48C00]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="muted" eyebrow="Enquire" title="Reserve the Hall" center>
        <div className="mx-auto max-w-2xl w-full">
          <EnquiryForm defaultInterest="Banquet Hall" />
        </div>
      </Section>
    </main>
  );
}
