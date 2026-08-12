import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { CELEBRATIONS } from "@/data/packages";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return CELEBRATIONS.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = CELEBRATIONS.find((x) => x.slug === slug);
  
  if (!c) {
    return {
      title: "Celebration Venue not found",
    };
  }

  return {
    title: `${c.name} Venue Near Coimbatore | Metro Club Resort`,
    description: `${c.description} Enquire about our custom ${c.name.toLowerCase()} packages at Metro Club Resort, Sultanpet, Coimbatore.`,
  };
}

export default async function CelebrationDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = CELEBRATIONS.find((x) => x.slug === slug);

  if (!c) {
    notFound();
  }

  return (
    <main className="bg-[#FCFBFA]">
      <PageHero
        eyebrow={c.tagline}
        title={c.name}
        subtitle={c.description}
        image={c.image}
        crumbs={[
          { label: "Celebrations", to: "/celebrations" },
          { label: c.name, to: `/celebrations/${c.slug}` },
        ]}
      />

      <Section eyebrow="Highlights" title="What's included">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 font-sans">
          {c.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-4 rounded-3xl border border-[#E8E3D9] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Check className="mt-1 h-5 w-5 shrink-0 text-[#D48C00]" />
              <span className="text-sm font-semibold text-[#2D312E]">{highlight}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted" eyebrow="Gallery" title="A look around">
        <div className="grid gap-6 sm:grid-cols-3">
          {c.gallery.map((src, index) => (
            <div
              key={src + "-" + index}
              className="relative h-64 w-full overflow-hidden rounded-3xl border border-[#E8E3D9]/60 shadow-sm bg-neutral-100 group"
            >
              <Image
                src={src}
                alt={`${c.name} highlights at Metro Club Resort`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Enquire" title={`Plan Your ${c.name}`} center>
        <div className="mx-auto max-w-2xl w-full">
          <EnquiryForm defaultInterest="Celebration / Function" />
        </div>
      </Section>
    </main>
  );
}
