# Metro Club Resort — Official Website

> A premium, high-performance resort website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-16.3.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?logo=tailwindcss)
![Build](https://img.shields.io/badge/Build-40%2F40_Pages_%E2%9C%93-success)

---

## 🏨 About the Project

**Metro Club Resort** website is a modern digital experience for a countryside getaway resort in Coimbatore, Tamil Nadu. The platform showcases accommodations, amenities, photo galleries, celebration venues, day-out packages, guest testimonials, and direct WhatsApp reservation flows.

---

## 🚀 Tech Stack

| Technology | Version | Role |
|---|---|---|
| Next.js | 16.3.0 | App Router, SSG (Turbopack), Server Components |
| React | 19.2.8 | UI rendering |
| TypeScript | 5.x | Type-safe development |
| Tailwind CSS | 4.x | Utility-first styling |
| Lucide React | 1.31.0 | Icon system |
| Sharp | 0.35.x | High-performance image processing & WebP optimization |

---

## 📁 Project Structure

```
Metro_Club_Resort/
├── public/
│   └── images/               # High-performance local WebP assets
│       ├── amenities/        # Conference hall, lawn, dining, indoor games
│       ├── packages/         # Corporate, friends, college, wedding lawns
│       └── rooms/            # Deluxe, Balcony, Standard room photography
├── scripts/
│   └── process-images.js     # Batch asset optimization utility
├── src/
│   ├── app/                  # Next.js App Router pages (40 static routes)
│   ├── components/           # Reusable UI, Layout, and SEO components
│   ├── data/                 # Content layer — rooms, packages, amenities, gallery
│   └── lib/                  # Utilities (WhatsApp URL builder)
└── docs/                     # Full project documentation & specs
```

---

## 🖥️ Pages & Routes (40 Static Pre-rendered)

| URL | Page | Description |
|---|---|---|
| `/` | Home | Hero, accommodations, highlights, reviews & booking |
| `/about` | About the Resort | Story, mission, countryside campus, hospitality values |
| `/rooms` | Rooms & Suites | Overview listing of all accommodations |
| `/rooms/[slug]` | Room Details | 4 SSG routes (`standard-room`, `deluxe-room`, `deluxe-room-balcony`, `master-room-pool-view`) |
| `/amenities` | Amenities Hub | Swimming pool, rain dance, turf, lawn, restaurant, games |
| `/banquet-hall` | Grand Banquet Hall | Capacity, layout options, catering & AV specs |
| `/outdoor-lawn` | Lush Outdoor Lawn | Wedding & reception lawns with scenic greenery |
| `/corporate` | Corporate Offsites | Day out and overnight corporate retreat packages |
| `/day-out-packages` | Day Out Packages | Family, Friends, School, College, and Photoshoot packages |
| `/celebrations` | Celebrations Hub | Overview of 16 signature event & function formats |
| `/celebrations/[slug]` | Event Sub-Pages | 16 pre-rendered routes (Birthday, Wedding Reception, Haldi, Mehendi, Sangeet, etc.) |
| `/gallery` | Filterable Gallery | 16 high-resolution categorized resort scenes |
| `/testimonials` | Guest Reviews | Verified guest ratings and customer stories |
| `/weather` | Local Weather Guide | Best time to visit and local climate guide |
| `/nearby-attractions` | Nearby Sightseeing | Tourist spots & travel distance guide |
| `/faqs` | FAQs | Complete resort policies, timings, and FAQs |
| `/contact` | Contact & Enquiries | Interactive booking inquiry form & Google Map |
| `/sitemap.xml` | SEO Sitemap | Dynamic sitemap indexing all 40 URLs |
| `/robots.txt` | Robots Policy | Crawling instructions for search engines |

---

## 🖼️ Media & Image Optimization

The repository includes a dedicated asset optimization pipeline that compresses high-resolution DSLR photography into lightweight, retina-sharp WebP assets:
* **Total Media Weight:** **5.7 MB** across 28 local assets (**99.2% reduction** from 720 MB raw DSLR sources).
* **Automated Batch Processing:** Run `node scripts/process-images.js` to process and optimize new raw assets.

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

# Batch-optimize image assets (optional)
node scripts/process-images.js

# Production build
npm run build

# Run production server
npm run start
```

### Build Verification

```bash
npm run build
# Expected: 40/40 static pages generated, 0 errors
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

All "Book Now" buttons dynamically construct pre-filled WhatsApp messages via `src/lib/whatsapp.ts`:

```typescript
import { createWhatsAppUrl } from "@/lib/whatsapp";

const url = createWhatsAppUrl("Hello! I'd like to make an enquiry...");
```

---

## 🌍 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Auto-detect Next.js — click Deploy
4. Add your custom domain in project settings

### Other Platforms

Standard Next.js — deployable to Vercel, AWS Amplify, Netlify, Hostinger, or any Node.js host.

---

## 📄 License

Private project. All rights reserved.
