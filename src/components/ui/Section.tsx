import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: string;
  children?: ReactNode;
  className?: string;
  center?: boolean;
  tone?: "default" | "muted" | "forest";
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  center,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 sm:py-28",
        tone === "muted" && "bg-[#FCFBFA] border-y border-[#E8E3D9]/60", // Soft Cream
        tone === "forest" && "bg-[#1B4332] text-white",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
            {eyebrow && (
              <p
                className={cn(
                  "text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] mb-4",
                  tone === "forest" ? "text-[#D48C00]" : "text-[#D48C00]"
                )}
              >
                {eyebrow}
              </p>
            )}
            
            {title && (
              <h2
                className={cn(
                  "mt-4 text-3xl font-serif font-bold leading-[1.1] sm:text-4xl md:text-5xl",
                  tone === "forest" ? "text-white" : "text-[#1B4332]"
                )}
              >
                {title}
              </h2>
            )}

            {intro && (
              <p
                className={cn(
                  "mt-6 text-base leading-relaxed sm:text-lg font-sans",
                  tone === "forest"
                    ? "text-neutral-300"
                    : "text-[#5e6660]" // Clean Slate Muted
                )}
              >
                {intro}
              </p>
            )}
          </div>
        )}
        
        {children && (
          <div className={cn(eyebrow || title ? "mt-12 sm:mt-16" : "")}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
