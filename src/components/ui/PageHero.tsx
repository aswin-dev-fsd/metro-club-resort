import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  crumbs?: { label: string; to: string }[];
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs = [],
}: PageHeroProps) {
  return (
    <header className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-[#112d22]">
      {/* Background Image with Fallback */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
      </div>

      {/* Dark Overlay Gradient for Text Contrast */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#112d22] via-[#112d22]/80 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-32 md:pt-40">
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-sans text-neutral-300"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.to} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 text-neutral-500" />
                <span className="text-white font-medium">{c.label}</span>
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#D48C00] mb-4">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1]">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-200 leading-relaxed font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
