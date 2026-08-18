import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { ResortJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://metroclubresort.in"),
  title: {
    default: "Metro Club Resort | Luxury Staycation, Turf & Pool in Coimbatore",
    template: "%s | Metro Club Resort Coimbatore",
  },
  description:
    "Experience Metro Club Resort in Sultanpet, Coimbatore. A perfect retreat for family & friends featuring luxury rooms, swimming pool, sports turf, rain dance, banquet hall, and campfire.",
  keywords: [
    "Metro Club Resort",
    "Resort in Coimbatore",
    "Resort in Sultanpet",
    "Family resort Coimbatore",
    "Staycation Coimbatore",
    "Swimming pool resort Coimbatore",
    "Sports turf resort",
    "Weekend getaway Coimbatore",
    "Codissia trade fair accommodation",
  ],
  authors: [{ name: "Metro Club Resort" }],
  creator: "Metro Club Resort",
  publisher: "Metro Club Resort",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://metroclubresort.in",
    siteName: "Metro Club Resort",
    title: "Metro Club Resort | Luxury Retreat for Family & Friends in Coimbatore",
    description:
      "Tranquil luxury resort in Sultanpet, Coimbatore with premium rooms, turf arena, swimming pool, and campfire evenings. Book direct on WhatsApp.",
    images: [
      {
        url: "https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Club Resort Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metro Club Resort | Coimbatore",
    description:
      "A perfect retreat for family and friends in Sultanpet, Coimbatore. Luxury rooms, swimming pool, and sports turf.",
    images: ["https://metroclubresort.in/wp-content/uploads/2025/11/4-1-scaled.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/logo/logo-emblem.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/logo-emblem.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/images/logo/logo-emblem.png",
    apple: "/images/logo/logo-emblem.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ResortJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FCFBFA] text-[#2D312E]">
        <Navbar />
        <main className="flex-grow pt-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
