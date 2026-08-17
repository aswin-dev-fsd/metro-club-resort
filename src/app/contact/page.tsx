"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Clock,
  Send,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { resortInfo } from "@/data/resortInfo";
import { roomsData } from "@/data/rooms";
import { createWhatsAppUrl, DISPLAY_PHONE } from "@/lib/whatsapp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [roomType, setRoomType] = useState("Deluxe Room");
  const [notes, setNotes] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hello Metro Club Resort! 
I would like to enquire about a reservation:
• Name: ${name || "Guest"}
• Room: ${roomType}
• Dates: ${checkIn || "Flexible"} to ${checkOut || "Flexible"}
• Guests: ${guests}
${notes ? `• Special Requests: ${notes}` : ""}

Please share availability and payment details. Thank you!`;

    window.open(createWhatsAppUrl(formattedMessage), "_blank");
  };

  return (
    <div className="pb-20 bg-[#FCFBFA]">
      {/* 1. Header Banner */}
      <section className="bg-[#112d22] text-white pt-28 pb-16 md:pt-36 md:pb-20 mb-16 text-center border-b border-[#D48C00]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-[#D48C00]/20 text-[#D48C00] border border-[#D48C00]/30">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4 text-white">
            Contact & Plan Your Visit
          </h1>
          <p className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Reach out to our reservations desk on WhatsApp or phone for immediate booking assistance, directions, and custom event planning.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-[#E8E3D9] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#fef3d6] flex items-center justify-center text-[#D48C00] mb-4">
                <WhatsAppIcon className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1B4332] mb-1">WhatsApp Bookings</h3>
              <p className="text-xs text-[#5e6660] mb-4">Fastest response for rates & instant reservation confirmation.</p>
              <p className="text-base font-bold text-[#1B4332] font-mono">{DISPLAY_PHONE}</p>
            </div>
            <a
              href={createWhatsAppUrl("Hello Metro Club Resort! I'd like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider bg-[#D48C00] text-[#1B4332] py-2.5 px-4 rounded-xl hover:bg-[#b87900] transition-colors text-center"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E8E3D9] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#e0f4fc] flex items-center justify-center text-[#0077B6] mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1B4332] mb-1">Direct Call</h3>
              <p className="text-xs text-[#5e6660] mb-4">Speak directly with our concierge and front desk team.</p>
              <p className="text-base font-bold text-[#1B4332] font-mono">{DISPLAY_PHONE}</p>
            </div>
            <a
              href={`tel:${resortInfo.phoneRaw}`}
              className="mt-6 inline-flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider bg-[#1B4332] text-white py-2.5 px-4 rounded-xl hover:bg-[#112d22] transition-colors text-center"
            >
              <span>Call Front Desk</span>
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E8E3D9] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#fef3d6] flex items-center justify-center text-[#D48C00] mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1B4332] mb-1">Resort Location</h3>
              <p className="text-xs text-[#5e6660] mb-4">{resortInfo.fullAddress}</p>
            </div>
            <a
              href={resortInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider bg-[#F4F1EA] text-[#1B4332] py-2.5 px-4 rounded-xl hover:bg-[#E8E3D9] transition-colors text-center"
            >
              <Navigation className="w-3.5 h-3.5 mr-1 text-[#D48C00]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* 3. Interactive Enquiry Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-[#E8E3D9] shadow-md">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-[0.15em] rounded-full bg-[#fef3d6] text-[#D48C00]">
              Instant Reservation Generator
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B4332] mb-2">
              Send Your Booking Details
            </h2>
            <p className="text-xs text-[#5e6660] mb-8">
              Fill out your preferences below. It will automatically construct an intelligent WhatsApp message for instant response.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E3D9] focus:outline-none focus:border-[#D48C00] text-sm bg-[#FCFBFA]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E3D9] focus:outline-none focus:border-[#D48C00] text-sm bg-[#FCFBFA]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E3D9] focus:outline-none focus:border-[#D48C00] text-sm bg-[#FCFBFA]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                    Preferred Room Category
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E3D9] focus:outline-none focus:border-[#D48C00] text-sm bg-[#FCFBFA]"
                  >
                    {roomsData.map((room) => (
                      <option key={room.id} value={room.name}>
                        {room.name} (₹{room.pricePerNight})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E3D9] focus:outline-none focus:border-[#D48C00] text-sm bg-[#FCFBFA]"
                  >
                    <option value="2 Adults">2 Adults</option>
                    <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                    <option value="4 Adults (Family Suite)">4 Adults (Family Suite)</option>
                    <option value="Group / Event (5+ Guests)">Group / Event (5+ Guests)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-1.5">
                  Special Requests / Inquiries (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Turf booking timing, birthday setup, early check-in"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E3D9] focus:outline-none focus:border-[#D48C00] text-sm bg-[#FCFBFA]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 text-sm font-sans font-bold uppercase tracking-[0.1em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] py-4 px-6 rounded-xl shadow-lg hover:scale-[1.01] transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right Col: FAQ Accordion */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 mb-2 text-xs font-bold uppercase tracking-[0.15em] rounded-full bg-[#fef3d6] text-[#D48C00]">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B4332] mb-6">
                Guest Queries & Policies
              </h2>
            </div>

            <div className="space-y-3">
              {resortInfo.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E8E3D9] overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between font-serif font-bold text-sm text-[#1B4332] hover:text-[#D48C00] transition-colors"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#D48C00] shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#5e6660] shrink-0 ml-2" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 pt-1 text-xs text-[#5e6660] leading-relaxed border-t border-[#E8E3D9]/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
