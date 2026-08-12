"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { resortFaqs } from "@/data/faqs";

interface FaqAccordionProps {
  categories?: string[];
}

export function FaqAccordion({ categories }: FaqAccordionProps) {
  const groups = categories
    ? resortFaqs.filter((g) => categories.includes(g.category))
    : resortFaqs;

  // Track open state as `{ "Category-Index": boolean }`
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (groupIdx: number, itemIdx: number) => {
    const key = `${groupIdx}-${itemIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-12">
      {groups.map((group, groupIdx) => (
        <div key={group.category} className="space-y-4">
          <h3 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#D48C00] border-b border-[#E8E3D9] pb-2">
            {group.category}
          </h3>
          
          <div className="divide-y divide-[#E8E3D9]/60">
            {group.items.map((item, itemIdx) => {
              const isOpen = !!openItems[`${groupIdx}-${itemIdx}`];
              return (
                <div key={item.q} className="py-4">
                  <button
                    onClick={() => toggleItem(groupIdx, itemIdx)}
                    className="flex w-full items-start justify-between text-left focus:outline-none group"
                  >
                    <span className="text-lg font-serif font-bold text-[#1B4332] group-hover:text-[#D48C00] transition-colors leading-snug pr-4">
                      {item.q}
                    </span>
                    <span className="ml-6 flex h-7 items-center shrink-0">
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-[#1B4332] transition-transform duration-300",
                          isOpen && "rotate-180 text-[#D48C00]"
                        )}
                      />
                    </span>
                  </button>
                  
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm font-sans text-[#5e6660] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

