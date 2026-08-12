import React from "react";
import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { WeatherPanel } from "@/components/ui/WeatherPanel";
import { AttractionsGrid } from "@/components/ui/AttractionsGrid";

export const metadata: Metadata = {
  title: "Weather at Metro Club Resort | Sulur, Coimbatore Forecast",
  description:
    "Live weather and hourly forecast for Metro Club Resort in Sulur, Coimbatore — temperature, humidity, wind, sunrise, and sunset before you plan your visit.",
};

const HERO_IMAGE = "https://metroclubresort.in/wp-content/uploads/2025/05/about-2.jpg";

export default function WeatherPage() {
  return (
    <main className="bg-[#FCFBFA]">
      <PageHero
        eyebrow="Weather"
        title="What it feels like right now"
        subtitle="Live conditions at Sulur, Coimbatore — so you know what to pack."
        image={HERO_IMAGE}
        crumbs={[{ label: "Weather", to: "/weather" }]}
      />

      <Section eyebrow="Live Forecast" title=" Sulur Conditions">
        <WeatherPanel />
      </Section>

      <Section tone="muted" eyebrow="Nearby Attractions" title="While you're here">
        <AttractionsGrid />
      </Section>
    </main>
  );
}
