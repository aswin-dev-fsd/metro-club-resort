import React from "react";
import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqSchema } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs | Booking, Facilities, Corporate & Celebration Questions | Metro Club Resort",
  description:
    "Answers about rooms, check-in times, payment, parking, corporate day outs, banquet bookings, and celebrations at Metro Club Resort near Coimbatore.",
};

const HERO_IMAGE = "https://metroclubresort.in/wp-content/uploads/2025/05/about-3.jpg";

export default function FaqsPage() {
  const schema = faqSchema();

  return (
    <main className="bg-[#FCFBFA]">
      {/* Inject FAQ structured data for search engine optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        subtitle="Kindly review the questions below. Should any additional concerns arise, reach out and we will promptly address them."
        image={HERO_IMAGE}
        crumbs={[{ label: "FAQs", to: "/faqs" }]}
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <FaqAccordion />
        </div>
      </Section>
    </main>
  );
}
