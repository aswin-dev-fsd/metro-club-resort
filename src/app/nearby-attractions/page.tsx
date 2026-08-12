import React from "react";
import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { AttractionsGrid } from "@/components/ui/AttractionsGrid";
import { resortInfo } from "@/data/resortInfo";

export const metadata: Metadata = {
  title: "Nearby Attractions | Dams, Temples & Top Slip Near the Resort | Metro Club Resort",
  description:
    "Amaravathi Dam, Thirumoorthy Dam, Aaliyar Dam, Top Slip, Sulur Lake, and temples — distances and drive times from Metro Club Resort near Coimbatore.",
};

const HERO_IMAGE = "https://metroclubresort.in/wp-content/uploads/2025/05/img-1.jpg";
const MAPS_EMBED = "https://www.google.com/maps?q=Metro+Club+Resort+Sultanpet+Coimbatore&output=embed";

export default function NearbyAttractionsPage() {
  return (
    <main className="bg-[#FCFBFA]">
      <PageHero
        eyebrow="Nearby"
        title="Attractions around the resort"
        subtitle="Dams, temples, and forest — all within an easy drive."
        image={HERO_IMAGE}
        crumbs={[{ label: "Nearby Attractions", to: "/nearby-attractions" }]}
      />

      <Section eyebrow="Explore" title="Worth the drive">
        <AttractionsGrid />
      </Section>

      <Section tone="muted" eyebrow="Location" title="Find Us" center>
        <div className="overflow-hidden rounded-[2rem] border border-[#E8E3D9] shadow-sm max-w-5xl mx-auto w-full">
          <iframe
            title="Metro Club Resort location map"
            src={MAPS_EMBED}
            loading="lazy"
            className="h-[28rem] w-full border-0"
            allowFullScreen
          />
        </div>
      </Section>
    </main>
  );
}
