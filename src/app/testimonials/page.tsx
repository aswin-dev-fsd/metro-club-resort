import React from "react";
import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import { testimonialsData } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Guest Reviews | Metro Club Resort Near Coimbatore",
  description:
    "Read Google and TripAdvisor reviews from families, couples, and corporate teams who stayed and celebrated at Metro Club Resort, Sultanpet, Coimbatore.",
};

// We will use the about1 image link for hero
const HERO_IMAGE = "https://metroclubresort.in/wp-content/uploads/2025/05/about-1.png";

export default function TestimonialsPage() {
  return (
    <main className="bg-[#FCFBFA]">
      <PageHero
        eyebrow="Testimonials"
        title="What our guests say"
        image={HERO_IMAGE}
        crumbs={[{ label: "Testimonials", to: "/testimonials" }]}
      />

      <Section eyebrow="Reviews" title="Guest Highlights">
        <TestimonialSlider />
      </Section>

      <Section tone="muted" eyebrow="All Reviews" title="In their words">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 font-sans">
          {testimonialsData.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid rounded-3xl border border-[#E8E3D9] bg-white p-7 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-sm leading-relaxed text-[#5e6660]">“{t.text}”</p>
              <p className="mt-5 text-sm font-bold text-[#1B4332]">{t.name}</p>
              <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-neutral-400 mt-1">
                Review from {t.source}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
