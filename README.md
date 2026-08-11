# Metro Club Resort — Official Website

> A premium, high-performance resort website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-16.3.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?logo=tailwindcss)
![Build](https://img.shields.io/badge/Build-15%2F15_Pages_%E2%9C%93-success)

---

## 🏨 About Metro Club Resort

**Metro Club Resort** is a luxury getaway destination located in Sultanpet, Coimbatore, Tamil Nadu, India. The resort offers premium accommodation, swimming pool, multi-sport turf, banquet facilities, and curated guest experiences for families, couples, and corporate groups.

📍 1/47 Puliyamarathupalayam, Varapatti, Sultanpet, Coimbatore – 641658  
📞 [+91 90430 01799](tel:+919043001799)  
💬 [WhatsApp Bookings](https://wa.me/919043001799)  
🌐 [metroclubresort.in](https://metroclubresort.in)

---

## 🚀 Tech Stack

| Technology | Version | Role |
|---|---|---|
| Next.js | 16.3.0 | App Router, SSG, Server Components |
| React | 19.2.8 | UI rendering |
| TypeScript | 5.x | Type-safe development |
| Tailwind CSS | 4.x | Utility-first styling |
| Lucide React | 1.31.0 | Icon system |

---

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages (15 static routes)
├── components/       # Reusable UI, Layout, and SEO components
├── data/             # Content layer — rooms, amenities, gallery, resort info
└── lib/              # Utilities (WhatsApp URL builder)
```

---

## 🖥️ Pages

| URL | Page |
|---|---|
| `/` | Home |
| `/about` | About the Resort |
| `/rooms` | Rooms & Suites Listing |
| `/rooms/[slug]` | Individual Room Detail (4 pre-rendered) |
| `/amenities` | All Amenities |
| `/gallery` | Filterable Photo Gallery |
| `/contact` | Contact, Enquiry Form & FAQ |
| `/sitemap.xml` | SEO Sitemap |
| `/robots.txt` | Crawling Rules |

---

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Run production server
npm run start
```

### Build Verification

```bash
npm run build
# Expected: 15/15 pages generated, 0 errors
```

---

## 🎨 Brand Design System

| Color | Hex | Usage |
|---|---|---|
| Forest Green | `#1B4332` | Primary (60%) — Navbar, hero, headings |
| Campfire Gold | `#D48C00` | Accent (15%) — CTAs, labels, borders |
| Pool Teal | `#0077B6` | Water accent (15%) — Pool, rain dance |
| Clean Slate | `#2D312E` | Body text |
| Soft Cream | `#FCFBFA` | Page background canvas |

**Typography:** Liberation Serif / Georgia (headings) · Liberation Sans / Arial (body)

---

## 📞 WhatsApp Booking Integration

All "Book Now" buttons construct pre-filled WhatsApp messages via:

```typescript
import { createWhatsAppUrl } from "@/lib/whatsapp";

const url = createWhatsAppUrl("Hello! I'd like to book the Deluxe Double Room...");
```

WhatsApp Number: `919043001799`

---

## 🌍 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Auto-detect Next.js — click Deploy
4. Add custom domain `metroclubresort.in` in project settings

### Other Platforms

Standard Next.js — deployable to Vercel, AWS Amplify, Netlify, Hostinger, or any Node.js host.

---

## 📄 License

Private project — Metro Club Resort. All rights reserved.
