"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { createWhatsAppUrl, DISPLAY_PHONE } from "@/lib/whatsapp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Amenities", href: "/amenities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  // Determine navbar background based on page and scroll position
  const navBackground =
    !isHomePage || isScrolled
      ? "bg-[#1B4332] shadow-xl py-3.5 border-b border-[#D48C00]/30"
      : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#D48C00] flex items-center justify-center text-[#1B4332] font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <span className="block text-xl md:text-2xl font-serif font-bold tracking-tight text-white group-hover:text-[#D48C00] transition-colors">
                METRO CLUB
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#D48C00] font-sans font-semibold">
                Resort • Coimbatore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-sans font-medium uppercase tracking-[0.08em] transition-colors relative py-1 ${
                    isActive
                      ? "text-[#D48C00] font-semibold"
                      : "text-white/90 hover:text-[#D48C00]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D48C00] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`}
              className="flex items-center space-x-2 text-xs font-sans font-semibold text-white/90 hover:text-white px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#D48C00]" />
              <span className="hidden md:inline">{DISPLAY_PHONE}</span>
            </a>

            <a
              href={createWhatsAppUrl(
                "Hello Metro Club Resort! I would like to enquire about room bookings and availability."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-sans font-bold uppercase tracking-[0.08em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#1B4332] border-b border-[#D48C00]/20 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-sans font-semibold uppercase tracking-[0.08em] transition-colors ${
                    isActive
                      ? "bg-[#D48C00] text-[#1B4332]"
                      : "text-white/90 hover:bg-white/10 hover:text-[#D48C00]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <a
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`}
              className="flex items-center justify-center space-x-2 w-full py-2.5 text-sm font-semibold text-white bg-white/10 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#D48C00]" />
              <span>Call Front Desk: {DISPLAY_PHONE}</span>
            </a>

            <a
              href={createWhatsAppUrl(
                "Hello Metro Club Resort! I would like to enquire about room bookings and availability."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 text-sm font-bold uppercase tracking-[0.08em] bg-[#D48C00] text-[#1B4332] rounded-lg shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
