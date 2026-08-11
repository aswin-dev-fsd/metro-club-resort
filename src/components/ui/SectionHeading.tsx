import React from "react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  lightMode?: boolean;
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  lightMode = false,
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left";

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClass}`}>
      {tag && (
        <span
          className={`inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-[0.15em] rounded-full ${
            lightMode
              ? "bg-[#D48C00]/20 text-[#D48C00] border border-[#D48C00]/30"
              : "bg-[#fef3d6] text-[#D48C00] border border-[#D48C00]/20"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4 ${
          lightMode ? "text-white" : "text-[#1B4332]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            lightMode ? "text-neutral-300" : "text-[#5e6660]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
