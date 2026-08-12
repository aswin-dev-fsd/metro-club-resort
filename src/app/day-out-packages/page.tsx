import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { DAY_OUT_PACKAGES, IMAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "Day Out Packages Near Coimbatore | Family, Corporate & College | Metro Club Resort",
  description:
    "Day out packages near Coimbatore with buffet lunch, swimming pool, rain dance, indoor and outdoor games, and evening hi-tea — for families, teams, schools, and friends.",
};

export default function DayOutPackagesPage() {
  return (
    <main className="bg-[#FCFBFA]">
      <PageHero
        eyebrow="Day Out"
        title="One day, fully planned"
        subtitle="Arrive at breakfast, leave after hi-tea — food, pool, rain dance, and games included."
        image={IMAGES.rainDance}
        crumbs={[{ label: "Day Out Packages", to: "/day-out-packages" }]}
      />

      <Section eyebrow="Packages" title="Pick your group">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DAY_OUT_PACKAGES.map((pkg) => (
            <article
              key={pkg.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#E8E3D9] bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-52 w-full bg-neutral-100">
                <Image src={pkg.image} alt={pkg.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#1B4332]">{pkg.name}</h3>
                  <p className="mt-1 text-[10px] font-sans font-bold uppercase tracking-wider text-[#D48C00]">
                    {pkg.subtitle}
                  </p>
                  <ul className="mt-5 space-y-2 pt-4 border-t border-[#E8E3D9]/60">
                    {pkg.inclusions.map((inclusion) => (
                      <li key={inclusion} className="flex items-center gap-2 text-xs sm:text-sm text-[#2D312E] font-sans">
                        <Check className="h-4 w-4 shrink-0 text-[#D48C00]" />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="muted" eyebrow="Enquire" title="Book a Day Out" center>
        <div className="mx-auto max-w-2xl w-full">
          <EnquiryForm defaultInterest="Day Out Package" />
        </div>
      </Section>
    </main>
  );
}
