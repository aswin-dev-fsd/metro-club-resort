import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqSchema } from "@/data/faqs";
import { CELEBRATIONS, IMAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "Celebrations | Wedding, Birthday & Party Venue Near Coimbatore | Metro Club Resort",
  description:
    "Host weddings, receptions, engagements, haldi, mehendi, sangeet, birthdays, baby showers, and reunions at Metro Club Resort near Coimbatore.",
};

export default function CelebrationsPage() {
  const schema = faqSchema(["Celebrations"]);

  return (
    <main className="bg-[#FCFBFA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <PageHero
        eyebrow="Celebrations"
        title="Every milestone, held beautifully"
        subtitle="Sixteen kinds of celebration, one address — banquet hall, outdoor lawn, poolside, and gardens."
        image={IMAGES.banquet}
        crumbs={[{ label: "Celebrations", to: "/celebrations" }]}
      />

      <Section eyebrow="Occasions" title="Choose your celebration">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CELEBRATIONS.map((c) => (
            <Link
              key={c.slug}
              href={`/celebrations/${c.slug}`}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#E8E3D9] bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-56 w-full bg-neutral-100 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#1B4332] group-hover:text-[#D48C00] transition-colors leading-snug">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-sans font-bold uppercase tracking-wider text-[#D48C00]">
                    {c.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#5e6660] font-sans">
                    {c.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted" eyebrow="Celebration FAQs" title="Planning questions, answered">
        <FaqAccordion categories={["Celebrations"]} />
      </Section>
    </main>
  );
}
