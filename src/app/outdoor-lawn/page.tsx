import React from "react";
import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { IMAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "Outdoor Lawn Venue Near Coimbatore | Garden Wedding & Events | Metro Club Resort",
  description:
    "A lush open-air lawn near Coimbatore for receptions, destination weddings, haldi, sangeet, annual days, and corporate award functions at Metro Club Resort.",
};

const USES = [
  { t: "Garden Celebrations", d: "Open-air gatherings surrounded by greenery and soft lighting." },
  { t: "Reception", d: "Grand outdoor receptions with stage, lighting, and live food counters." },
  { t: "Destination Weddings", d: "Picturesque open-air destination weddings, muhurtham, and complete wedding-day setups." },
  { t: "Haldi", d: "Daylight, marigolds, and water access — the ideal haldi venue." },
  { t: "Sangeet", d: "Open dance floor, full sound system, and dinner served under the stars." },
  { t: "Annual Days & Corporate Award Functions", d: "Grand outdoor stage, award ceremonies, and team celebrations on lush green lawns." },
];

export default function OutdoorLawnPage() {
  return (
    <main className="bg-[#FCFBFA]">
      <PageHero
        eyebrow="Outdoor Lawn"
        title="Open sky, open lawn, open evening"
        subtitle="Lush green, lantern light, and space for hundreds — our lawn turns an event into an evening."
        image={IMAGES.lawn}
        crumbs={[{ label: "Outdoor Lawn", to: "/outdoor-lawn" }]}
      />

      <Section eyebrow="Perfect For" title="What the Lawn can hold">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {USES.map((use) => (
            <div
              key={use.t}
              className="rounded-3xl border border-[#E8E3D9] bg-white p-8 shadow-sm hover:shadow-md hover:border-[#D48C00]/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-serif font-bold text-[#1B4332]">
                {use.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5e6660] font-sans">
                {use.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted" eyebrow="Enquire" title="Book the Lawn" center>
        <div className="mx-auto max-w-2xl w-full">
          <EnquiryForm defaultInterest="Outdoor Lawn" />
        </div>
      </Section>
    </main>
  );
}
