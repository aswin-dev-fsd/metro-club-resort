import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Navigation, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { resortInfo } from "@/data/resortInfo";
import { roomsData } from "@/data/rooms";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#112d22] text-white pt-16 pb-8 border-t border-[#D48C00]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D48C00] flex items-center justify-center text-[#1B4332] font-serif font-bold text-xl">
                M
              </div>
              <div>
                <span className="block text-xl font-serif font-bold tracking-tight text-white">
                  METRO CLUB
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#D48C00] font-sans font-semibold">
                  Resort • Coimbatore
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              A tranquil, high-end family and active-recreation retreat in Sultanpet, Coimbatore. Combining natural serenity with premium modern hospitality.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href={createWhatsAppUrl("Hello Metro Club Resort!")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#D48C00] text-[#1B4332] flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </a>
              <a
                href={`tel:${resortInfo.phoneRaw}`}
                className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={resortInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Google Maps Directions"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Experiences */}
          <div>
            <h3 className="text-sm font-sans font-bold uppercase tracking-[0.12em] text-[#D48C00] mb-4">
              Experiences
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/banquet-hall" className="hover:text-[#D48C00] transition-colors">
                  AC Banquet Hall
                </Link>
              </li>
              <li>
                <Link href="/outdoor-lawn" className="hover:text-[#D48C00] transition-colors">
                  Outdoor Event Lawn
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-[#D48C00] transition-colors">
                  Corporate Day Out & Stay
                </Link>
              </li>
              <li>
                <Link href="/day-out-packages" className="hover:text-[#D48C00] transition-colors">
                  Day Out Packages
                </Link>
              </li>
              <li>
                <Link href="/celebrations" className="hover:text-[#D48C00] transition-colors">
                  Occasions & Celebrations
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-[#D48C00] transition-colors">
                  Turf, Pool & Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#D48C00] transition-colors">
                  Photo & Activity Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Explore & Guest Info */}
          <div>
            <h3 className="text-sm font-sans font-bold uppercase tracking-[0.12em] text-[#D48C00] mb-4">
              Explore & Guest Info
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/rooms" className="hover:text-[#D48C00] transition-colors">
                  Rooms & Suites Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D48C00] transition-colors">
                  About Our Resort
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#D48C00] transition-colors">
                  Guest Reviews
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#D48C00] transition-colors">
                  Frequently Asked FAQs
                </Link>
              </li>
              <li>
                <Link href="/weather" className="hover:text-[#D48C00] transition-colors">
                  Local Weather Forecast
                </Link>
              </li>
              <li>
                <Link href="/nearby-attractions" className="hover:text-[#D48C00] transition-colors">
                  Nearby Attractions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D48C00] transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Us */}
          <div>
            <h3 className="text-sm font-sans font-bold uppercase tracking-[0.12em] text-[#D48C00] mb-4">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D48C00] shrink-0 mt-1" />
                <span>{resortInfo.fullAddress}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D48C00] shrink-0" />
                <a href={`tel:${resortInfo.phoneRaw}`} className="hover:text-[#D48C00] transition-colors">
                  {resortInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#D48C00] shrink-0" />
                <a
                  href={createWhatsAppUrl("Hello Metro Club Resort, I have a booking enquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D48C00] transition-colors"
                >
                  WhatsApp: +91 90430 01799
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <a
                href={resortInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.08em] bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-lg transition-colors border border-white/15"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D48C00]" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Metro Club Resort. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>Official Brand Website</span>
            <span>•</span>
            <span className="text-[#D48C00]">Sultanpet, Coimbatore</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
