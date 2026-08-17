"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
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
    {
      label: "Events & Packages",
      href: "#",
      dropdown: [
        { label: "AC Banquet Hall", href: "/banquet-hall" },
        { label: "Outdoor Event Lawn", href: "/outdoor-lawn" },
        { label: "Corporate Outings", href: "/corporate" },
        { label: "Day Out Packages", href: "/day-out-packages" },
        { label: "Occasions & Celebrations", href: "/celebrations" },
      ],
    },
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
             {/* Double-ring gold emblem seal */}
             <div className="flex items-center justify-center w-11 h-11 rounded-full border border-[#D48C00]/40 transition-transform duration-300 group-hover:scale-105">
               <div className="w-8 h-8 rounded-full bg-[#D48C00] flex items-center justify-center text-[#1B4332] font-serif font-bold text-lg shadow-sm">
                 M
               </div>
             </div>
             <div>
               <span className="block text-xl md:text-2xl font-serif font-bold tracking-tight text-white group-hover:text-[#D48C00] transition-colors">
                 METRO CLUB
               </span>
               <span className="block text-[9px] tracking-[0.4em] uppercase text-[#D48C00] font-sans font-bold mt-0.5">
                 Resort
               </span>
             </div>
           </Link>
 
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isAnySubActive = link.dropdown.some((sub) => pathname === sub.href);
                return (
                  <div key={link.label} className="relative group py-1">
                    <button
                      className={`text-[12px] xl:text-[13px] font-sans font-medium uppercase tracking-[0.12em] transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                        isAnySubActive ? "text-[#D48C00]" : "text-white/90 hover:text-[#D48C00]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <svg
                        className="h-3 w-3 fill-current mt-0.5 group-hover:rotate-180 transition-transform duration-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    {/* Hover Dropdown Wrapper to bridge the hover gap */}
                    <div className="absolute left-0 top-full pt-2 w-56 z-50 hidden group-hover:block transition-all duration-300">
                      <div className="rounded-xl bg-[#1B4332] border border-[#D48C00]/30 shadow-2xl py-2.5">
                        {link.dropdown.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block px-5 py-2.5 text-xs font-sans font-semibold uppercase tracking-wider transition-colors ${
                                isSubActive
                                  ? "text-[#D48C00] bg-white/5"
                                  : "text-white/80 hover:text-[#D48C00] hover:bg-white/5"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                 <Link
                   key={link.href}
                   href={link.href}
                   className={`text-[12px] xl:text-[13px] font-sans font-medium uppercase tracking-[0.12em] transition-colors relative py-1 whitespace-nowrap ${
                     isActive ? "text-[#D48C00] font-semibold" : "text-white/90 hover:text-[#D48C00]"
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
 
          {/* Right Action Dropdown (Combines Call & WhatsApp) */}
          <div className="hidden sm:block relative group/book z-50">
            <button
              className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.08em] bg-[#D48C00] hover:bg-[#b87900] text-[#1B4332] px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Book Now</span>
              <svg
                className="h-3 w-3 fill-current mt-0.5 group-hover/book:rotate-180 transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            
            {/* Dropdown Options */}
            <div className="absolute right-0 top-full pt-2 w-52 hidden group-hover/book:block transition-all duration-300">
              <div className="rounded-xl bg-[#1B4332] border border-[#D48C00]/30 shadow-2xl py-2 z-50 overflow-hidden">
                <a
                  href={createWhatsAppUrl("Hello Metro Club Resort! I would like to enquire about room bookings and availability.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 text-xs font-sans font-bold uppercase tracking-wider text-white/90 hover:text-[#D48C00] hover:bg-white/5 transition-colors border-b border-[#D48C00]/15"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#D48C00] fill-current" />
                  <span>Book via WhatsApp</span>
                </a>
                <a
                  href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 px-5 py-3 text-xs font-sans font-bold uppercase tracking-wider text-white/90 hover:text-[#D48C00] hover:bg-white/5 transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#D48C00]" />
                  <span>Call Front Desk</span>
                </a>
              </div>
            </div>
          </div>
 
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
 
      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#1B4332] border-b border-[#D48C00]/20 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="space-y-1 py-1">
                    <span className="px-3 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#D48C00]/70">
                      {link.label}
                    </span>
                    <div className="pl-3 flex flex-col space-y-1 mt-1 border-l border-[#D48C00]/20">
                      {link.dropdown.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className={`px-3 py-2 rounded-md text-[11px] font-sans font-semibold uppercase tracking-wider transition-colors ${
                              isSubActive
                                ? "bg-[#D48C00]/20 text-[#D48C00]"
                                : "text-white/80 hover:text-[#D48C00]"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

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
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
