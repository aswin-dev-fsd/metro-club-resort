"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { resortInfo } from "@/data/resortInfo";

const INTERESTS = [
  "Room Booking",
  "Day Out Package",
  "Corporate Day Out",
  "Corporate Stay",
  "Banquet Hall",
  "Outdoor Lawn",
  "Celebration / Function",
  "General Enquiry",
];

interface EnquiryFormProps {
  defaultInterest?: string;
}

export function EnquiryForm({ defaultInterest }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: defaultInterest ?? "General Enquiry",
    date: "",
    guests: "",
    message: "",
  });

  const [notification, setNotification] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("resort_enquiry_form");
      if (savedData) {
        const parsed = JSON.parse(savedData);
        setFormData((prev) => ({
          ...prev,
          ...parsed,
          // Keep defaultInterest if it is passed explicitly and no saved interest
          interest: defaultInterest ?? parsed.interest ?? "General Enquiry",
        }));
      }
    } catch (e) {
      console.error("Failed to load form data from localStorage:", e);
    }
  }, [defaultInterest]);

  // Save to localStorage on change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    try {
      localStorage.setItem("resort_enquiry_form", JSON.stringify(updated));
    } catch (err) {
      console.error("Failed to save to localStorage:", err);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Format WhatsApp message
    const waMessage = [
      `*New Enquiry - Metro Club Resort*`,
      `---------------------------------`,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Interest:* ${formData.interest}`,
      `*Preferred Date:* ${formData.date || "Flexible"}`,
      `*Number of Guests:* ${formData.guests || "Not specified"}`,
      `*Message:* ${formData.message || "None"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${resortInfo.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Display temporary success notice
    setNotification("Enquiry ready! Opening WhatsApp to send message...");
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E3D9] shadow-sm">
      <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#D48C00] block mb-2">
        Quick Enquiry
      </span>
      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mb-2">
        Plan Your Experience
      </h3>
      <p className="text-sm text-[#5e6660] mb-8 font-sans">
        Tell us about your plan and our team will get back to you with availability and details via WhatsApp.
      </p>

      {notification && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-sans">
          {notification}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 font-sans">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#1B4332]">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full rounded-xl border border-[#E8E3D9] bg-[#FCFBFA] px-4 py-3 text-sm text-[#2D312E] placeholder:text-neutral-400 focus:border-[#1B4332] focus:outline-none focus:ring-1 focus:ring-[#1B4332]"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[#1B4332]">
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full rounded-xl border border-[#E8E3D9] bg-[#FCFBFA] px-4 py-3 text-sm text-[#2D312E] placeholder:text-neutral-400 focus:border-[#1B4332] focus:outline-none focus:ring-1 focus:ring-[#1B4332]"
            />
          </div>

          {/* Interest Select */}
          <div className="space-y-1.5">
            <label htmlFor="interest" className="text-xs font-bold uppercase tracking-wider text-[#1B4332]">
              Interested In
            </label>
            <div className="relative">
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full appearance-none rounded-xl border border-[#E8E3D9] bg-[#FCFBFA] px-4 py-3 text-sm text-[#2D312E] focus:border-[#1B4332] focus:outline-none focus:ring-1 focus:ring-[#1B4332]"
              >
                {INTERESTS.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#1B4332]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Preferred Date */}
          <div className="space-y-1.5">
            <label htmlFor="date" className="text-xs font-bold uppercase tracking-wider text-[#1B4332]">
              Preferred Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#E8E3D9] bg-[#FCFBFA] px-4 py-3 text-sm text-[#2D312E] focus:border-[#1B4332] focus:outline-none focus:ring-1 focus:ring-[#1B4332]"
            />
          </div>

          {/* Number of Guests */}
          <div className="space-y-1.5 sm:col-span-2">
            <label htmlFor="guests" className="text-xs font-bold uppercase tracking-wider text-[#1B4332]">
              Estimated Guests
            </label>
            <input
              id="guests"
              name="guests"
              type="number"
              min={1}
              value={formData.guests}
              onChange={handleChange}
              placeholder="e.g. 50"
              className="w-full rounded-xl border border-[#E8E3D9] bg-[#FCFBFA] px-4 py-3 text-sm text-[#2D312E] placeholder:text-neutral-400 focus:border-[#1B4332] focus:outline-none focus:ring-1 focus:ring-[#1B4332]"
            />
          </div>

          {/* Special Requests */}
          <div className="space-y-1.5 sm:col-span-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#1B4332]">
              Tell Us More About Your Plan
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Any details or queries you have..."
              className="w-full rounded-xl border border-[#E8E3D9] bg-[#FCFBFA] px-4 py-3 text-sm text-[#2D312E] placeholder:text-neutral-400 focus:border-[#1B4332] focus:outline-none focus:ring-1 focus:ring-[#1B4332] resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] font-bold uppercase tracking-wider py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm mt-6 cursor-pointer"
        >
          <MessageCircle className="h-5 w-5 fill-current" />
          Send Enquiry via WhatsApp
        </button>

        <p className="text-center text-xs text-neutral-400 mt-4 leading-normal">
          Direct questions? Feel free to call us at{" "}
          <a href={`tel:${resortInfo.phoneRaw}`} className="font-bold text-[#1B4332] hover:underline">
            {resortInfo.phoneDisplay}
          </a>
        </p>
      </form>
    </div>
  );
}
