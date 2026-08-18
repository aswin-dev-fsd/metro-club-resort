import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CORPORATE_DAY_OUT, CORPORATE_STAY, IMAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "Corporate Day Out & Offsite Resort Near Coimbatore | Metro Club Resort",
  description:
    "Corporate day out and corporate stay packages near Coimbatore — team building, conference setup, sound system, buffet meals, turf, swimming pool with music, and rain dance.",
};

interface PackageProps {
  title: string;
  subtitle: string;
  items: string[];
  image: string;
}

function CorporatePackage({ title, subtitle, items, image }: PackageProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[2rem] border border-[#E8E3D9] bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-64 w-full bg-neutral-100">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">{title}</h3>
          <p className="mt-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#D48C00]">{subtitle}</p>
          <ul className="mt-7 grid gap-3 grid-cols-1 sm:grid-cols-2 pt-6 border-t border-[#E8E3D9]/60">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#2D312E] font-medium font-sans">
                <Check className="h-4 w-4 shrink-0 text-[#D48C00]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CorporatePage() {
  return (
    <main className="bg-[#FCFBFA]">
      <PageHero
        eyebrow="Corporate"
        title="Offsites, day outs and away days"
        subtitle="A full-service corporate venue near Coimbatore with conference setup, team activities, and everything your team needs to actually enjoy the day."
        image={IMAGES.turf}
        crumbs={[{ label: "Corporate", to: "/corporate" }]}
      />

      <Section eyebrow="Packages" title="Two ways to bring the team">
        <div className="grid gap-8 lg:grid-cols-2">
          <CorporatePackage
            title="Corporate Day Out"
            subtitle="One full day, start to sunset"
            items={CORPORATE_DAY_OUT}
            image={IMAGES.corporateDayOut}
          />
          <CorporatePackage
            title="Corporate Stay"
            subtitle="Overnight offsites with conference and campfire"
            items={CORPORATE_STAY}
            image={IMAGES.corporateStay}
          />
        </div>
        <div className="mt-12 text-center">
          <a
            href="#corporate-enquiry"
            className="inline-flex items-center justify-center bg-[#1B4332] hover:bg-[#112d22] text-white font-sans font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow transition-colors cursor-pointer"
          >
            Plan Your Corporate Event
          </a>
        </div>
      </Section>

      <Section id="corporate-enquiry" tone="muted" eyebrow="Enquire" title="Tell us about your team" center>
        <div className="mx-auto max-w-2xl w-full">
          <EnquiryForm defaultInterest="Corporate Day Out" />
        </div>
      </Section>

      <Section eyebrow="Corporate FAQs" title="Questions from event planners">
        <FaqAccordion categories={["Corporate Events"]} />
      </Section>
    </main>
  );
}
