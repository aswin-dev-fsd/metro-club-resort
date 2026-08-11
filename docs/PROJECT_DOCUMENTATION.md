# Metro Club Resort — Complete Project Documentation

> **Project:** Full-stack resort website redesign & rebuild  
> **Client:** Metro Club Resort, Sultanpet, Coimbatore, Tamil Nadu  
> **Tech Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4  
> **Status:** Build verified · 15/15 static pages · Zero errors  
> **Last Updated:** August 2026

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Directory Structure](#3-project-directory-structure)
4. [Brand Identity & Design System](#4-brand-identity--design-system)
5. [Data Layer](#5-data-layer)
6. [Component Library](#6-component-library)
7. [Page Architecture](#7-page-architecture)
8. [SEO & Structured Data](#8-seo--structured-data)
9. [WhatsApp CRO Integration](#9-whatsapp-cro-integration)
10. [Responsive Design Strategy](#10-responsive-design-strategy)
11. [Configuration Files](#11-configuration-files)
12. [Workspace Rules & Coding Standards](#12-workspace-rules--coding-standards)
13. [GitHub Deployment Guide](#13-github-deployment-guide)
14. [Vercel Deployment Guide](#14-vercel-deployment-guide)
15. [Future Roadmap & Planned Improvements](#15-future-roadmap--planned-improvements)

---

## 1. Project Overview

### What Was Built

Metro Club Resort's existing WordPress website was fully redesigned and rebuilt from scratch as a high-performance, SEO-optimised, conversion-focused Next.js web application. The goal was to create a premium digital presence that reflects the resort's brand identity (based on official Brand PDF guidelines), drives WhatsApp enquiries, and delivers instant page loads on all devices.

### Business Goals Achieved

| Goal | Implementation |
|---|---|
| Instant page loads | 100% static pre-rendering (SSG) — no server wait |
| Higher WhatsApp conversions | Every CTA deep-links with pre-filled booking message |
| Mobile-first guest experience | Responsive layouts, touch menus, native tel: links |
| SEO-ready from day 1 | JSON-LD schema, sitemap.xml, robots.txt, Open Graph |
| Brand consistency | PDF-compliant color ratios, typography, spacing enforced |
| Zero vendor lock-in | Standard Next.js — deployable anywhere (Vercel, AWS, Hostinger, cPanel) |

### Live Reference Used During Development
Temporary image assets were referenced from `https://metroclubresort.in/wp-content/uploads/` (existing WordPress uploads). The `next.config.ts` is configured to allow these as remote image sources, and the architecture is ready for migration to any CDN or local asset store.

---

## 2. Technology Stack

### Core Framework

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.3.0 | App Router, SSG, Server Components |
| **React** | 19.2.8 | UI rendering library |
| **TypeScript** | 5.x | Type-safe development |
| **Tailwind CSS** | 4.x | Utility-first responsive styling |
| **Tailwind PostCSS** | 4.x | Build pipeline integration |

### UI & Icon Libraries

| Package | Version | Purpose |
|---|---|---|
| **lucide-react** | 1.31.0 | Premium icon system (Phone, MapPin, Menu, etc.) |

### Build Tooling

| Tool | Purpose |
|---|---|
| **Turbopack** | Next.js 16 default bundler (20x faster than Webpack) |
| **ESLint 9** | Code quality linting with Next.js config |
| **TypeScript strict** | Full type checking on build |

### Why This Stack?

- **Next.js App Router** allows mixing Server Components (fast, SEO-crawlable) with Client Components (interactive) on a per-component basis.
- **Tailwind CSS v4** uses native CSS variables internally, eliminating the build-time config file and improving performance.
- **Turbopack** compiles code on-demand in dev mode but produces fully pre-built static HTML in production — meaning zero compilation delays for real visitors.
- **TypeScript** catches bugs at compile time rather than at runtime in production.

---

## 3. Project Directory Structure

```
d:\Aswin\Projects\Metro_Club_Resort\
│
├── .agents/                          # Antigravity AI workspace rules
│   ├── AGENTS.md                     # Engineering standards & brand rules
│   └── rules/
│       └── ask.md                    # Read-only consultation mode trigger
│
├── docs/                             # Full technical documentation
│   └── PROJECT_DOCUMENTATION.md      # Architecture, specs & deployment
│
├── public/                           # Static assets served at root URL
│   └── (favicon, og-image, etc.)
│
├── src/
│   ├── app/                          # Next.js App Router — all pages live here
│   │   ├── layout.tsx                # Root layout: metadata, fonts, Navbar, Footer
│   │   ├── globals.css               # Brand CSS variables & base typography
│   │   ├── page.tsx                  # Home page (/)
│   │   ├── robots.ts                 # /robots.txt — crawling rules
│   │   ├── sitemap.ts                # /sitemap.xml — search engine map
│   │   ├── about/
│   │   │   └── page.tsx              # /about
│   │   ├── rooms/
│   │   │   ├── page.tsx              # /rooms — all rooms listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # /rooms/[slug] — individual room detail
│   │   ├── amenities/
│   │   │   └── page.tsx              # /amenities
│   │   ├── gallery/
│   │   │   └── page.tsx              # /gallery — filterable photo gallery
│   │   └── contact/
│   │       └── page.tsx              # /contact — enquiry form + FAQ
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Fixed, page-aware navigation bar
│   │   │   └── Footer.tsx            # Site-wide footer
│   │   ├── ui/
│   │   │   ├── RoomCard.tsx          # Room listing card with WhatsApp CTA
│   │   │   ├── AmenityCard.tsx       # Amenity display card
│   │   │   ├── SectionHeading.tsx    # Dual-font section heading component
│   │   │   └── FloatingWhatsApp.tsx  # Persistent floating WhatsApp button
│   │   └── seo/
│   │       └── JsonLd.tsx            # Server-rendered schema.org JSON-LD
│   │
│   ├── data/                         # Content layer — separated from UI
│   │   ├── rooms.ts                  # All 4 room types with full specs
│   │   ├── amenities.ts              # All 10 resort amenities
│   │   ├── gallery.ts                # 12 categorised gallery images
│   │   └── resortInfo.ts             # Contact, FAQs, stats, testimonials
│   │
│   └── lib/
│       └── whatsapp.ts               # WhatsApp URL builder utility
│
├── next.config.ts                    # Next.js config: image domains
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies & scripts
├── postcss.config.mjs                # PostCSS + Tailwind build pipeline
└── eslint.config.mjs                 # Linting rules
```

---

## 4. Brand Identity & Design System

### Core Color Palette (PDF-Compliant)

The resort's official brand PDF mandates strict color distribution ratios. These are implemented as CSS custom properties in `globals.css`:

```css
/* globals.css — Brand Token System */
:root {
  /* Forest Green — 60% dominance: hero backgrounds, navbars, primary sections */
  --forest-green:       #1B4332;
  --forest-green-dark:  #112d22;  /* Deep hero banners */
  --forest-green-light: #2d5e49;  /* Hover states */

  /* Campfire Gold — 15%: CTAs, sub-headings, borders, highlights */
  --campfire-gold:      #D48C00;
  --campfire-gold-hover:#b87900;
  --campfire-gold-light:#fef3d6;  /* Soft badge backgrounds */

  /* Pool Teal — 15%: Water amenity accents (pool, rain dance) */
  --pool-teal:          #0077B6;
  --pool-teal-hover:    #005b8c;
  --pool-teal-light:    #e0f4fc;

  /* Clean Slate — body text and UI neutrals */
  --clean-slate:        #2D312E;
  --clean-slate-muted:  #5e6660;

  /* Soft Cream — page background canvas */
  --soft-cream:         #FCFBFA;
  --soft-cream-alt:     #F4F1EA;
  --soft-cream-border:  #E8E3D9;
}
```

### Typography System (Brand PDF Rules)

| Element | Font | Style | Rule |
|---|---|---|---|
| Headings (h1–h6) | Liberation Serif → Georgia | Bold | Fallback chain enforced in CSS |
| Sub-heading Labels | Liberation Sans → Helvetica/Arial | Bold, UPPERCASE, 0.1em tracking | Never mix unauthorized fonts |
| Body Copy | Liberation Sans → Arial | Regular | 1.65 line-height |
| Code / Numbers | Monospace (font-mono) | Regular | Pricing displays only |

### Spacing & Layout Philosophy

- **Hero Sections:** `pt-28 pb-16 md:pt-36 md:pb-20` — inner pages have dark Forest Green hero banners from the very top edge, eliminating the white gap above the fixed Navbar.
- **Content Sections:** `py-16 md:py-24` — generous breathing room between sections.
- **Max Width:** `max-w-7xl` container centering prevents content from stretching on ultra-wide screens.
- **Card Rounding:** `rounded-2xl` (16px) for cards, `rounded-3xl` (24px) for major content blocks.

---

## 5. Data Layer

### Architecture Principle

All marketing copy, pricing, and content is **completely separated from JSX UI components** and lives exclusively in `src/data/`. This means updating room prices or amenities never requires touching any page or component code — only the relevant data file.

---

### `src/data/rooms.ts`

Defines the `Room` interface and exports `roomsData` — an array of all 4 room types.

**Room Data Model:**
```typescript
interface Room {
  id: string;            // Unique identifier
  slug: string;          // URL slug (e.g. "deluxe-double-room")
  name: string;          // Display name
  tagline: string;       // One-line marketing copy
  size: string;          // Room size (e.g. "350 sq.ft.")
  maxOccupancy: string;  // "2 Adults" or "4 Adults"
  pricePerNight: number; // INR pricing
  bedType: string;       // Bed configuration
  image: string;         // Primary hero image URL
  gallery: string[];     // Additional images array
  description: string;   // Marketing description paragraph
  amenities: string[];   // In-room amenity list
  whatsappMessage: string; // Pre-filled WhatsApp booking message
}
```

**Rooms Catalogue:**

| Room | Size | Max Guests | Price/Night |
|---|---|---|---|
| Standard Room | 200 sq.ft. | 2 Adults | ₹2,499 |
| Deluxe Double Room | 350 sq.ft. | 2 Adults | ₹3,999 |
| Double Room with Balcony | 450 sq.ft. | 2 Adults | ₹5,499 |
| Suite with Pool View | 600 sq.ft. | 4 Adults | ₹6,999 |

---

### `src/data/amenities.ts`

Exports all 10 official resort amenities with category tags and icons.

**Categories:** `sports` (Campfire Gold badge), `water` (Pool Teal badge), `leisure`, `dining`, `events`

| Amenity | Category |
|---|---|
| Swimming Pool | water |
| Rain Dance Area | water |
| Multi-Sport Turf Arena | sports |
| Kids Play Area | leisure |
| Outdoor Lawn & Garden | leisure |
| Multi-Cuisine Restaurant | dining |
| Air-Conditioned Banquet Hall | events |
| High-Speed WiFi | leisure |
| Free Parking | leisure |
| 24/7 Concierge Service | leisure |

---

### `src/data/resortInfo.ts`

Single source of truth for all resort metadata:

```typescript
resortInfo = {
  name: "Metro Club Resort",
  fullAddress: "1/47 Puliyamarathupalayam, Varapatti, Sultanpet, Coimbatore – 641658",
  phoneDisplay: "+91 90430 01799",
  phoneRaw: "+919043001799",
  whatsappNumber: "919043001799",
  checkInTime: "12:00 PM",
  checkOutTime: "11:00 AM",
  geo: { latitude: 10.9167, longitude: 77.1500 },
  stats: [ /* 4 key metrics */ ],
  quickFeatures: [ /* 4 highlight banners */ ],
  officialTestimonial: { /* Dhiwakar Kumar TripAdvisor review */ },
  faqs: [ /* 5 FAQ entries */ ]
}
```

---

### `src/data/gallery.ts`

12 gallery images across 4 categories: **Rooms**, **Pool & Water**, **Activities**, **Dining & Events**.

---

## 6. Component Library

### `src/components/layout/Navbar.tsx`

**Type:** Client Component (`"use client"`)

**Behavior:**
- **Home page (`/`):** Transparent on scroll position 0, transitions to solid Forest Green (`#1B4332`) with gold border on scroll down.
- **All inner pages** (`/about`, `/rooms`, `/amenities`, `/gallery`, `/contact`): **Always solid Forest Green** — no transparent state regardless of scroll position.
- **Mobile:** Collapses to a hamburger icon that opens an animated full-screen slide-down menu drawer.
- **Active Route Highlighting:** Current page link is highlighted with gold color and underline.

**Navigation Links:**
```
Home | Rooms | Amenities | Gallery | About | Contact
```
Plus a prominent "Book Now" WhatsApp CTA button in the top right.

---

### `src/components/layout/Footer.tsx`

**Type:** Server Component

**Sections:**
1. **Brand Column:** Logo wordmark + tagline + WhatsApp CTA button
2. **Quick Links:** All 6 navigation routes
3. **Contact Info:** Address, phone (tel: link), email, check-in/out times
4. **Location CTA:** Google Maps navigation link
5. **Bottom Bar:** Copyright notice + compliance links

---

### `src/components/ui/RoomCard.tsx`

**Type:** Server Component

**Displays:**
- Room hero image with hover zoom effect
- Room name + tagline
- Size, max occupancy, bed type badges
- Starting price pill in Campfire Gold
- "View Details" link → `/rooms/[slug]`
- "Book on WhatsApp" button with pre-filled message

---

### `src/components/ui/AmenityCard.tsx`

**Type:** Server Component

**Displays:**
- Amenity icon (Lucide React)
- Category badge (Teal for water, Gold for sports, neutral for others)
- Amenity name + description

---

### `src/components/ui/SectionHeading.tsx`

**Type:** Server Component

**Props:** `tag` (small uppercase label), `title` (serif heading), `subtitle` (body paragraph)

Used on every major content section. Enforces dual-font typography: Gold tag in Liberation Sans, title in Liberation Serif.

---

### `src/components/ui/FloatingWhatsApp.tsx`

**Type:** Client Component

**Behavior:** Fixed to bottom-right corner of every page. Pulses gently with CSS animation. On click, opens WhatsApp with a generic greeting pre-filled. Stays visible on all screen sizes.

---

### `src/components/seo/JsonLd.tsx`

**Type:** Server Component

**Outputs:** XSS-safe `<script type="application/ld+json">` tag containing full `schema.org/Resort` structured data including:
- `LodgingBusiness` + `Resort` type
- Official name, address, geo coordinates
- Phone, email, website URL
- Check-in/check-out times
- Price range
- Aggregated rating (from TripAdvisor review data)

**XSS Safety:** JSON is serialized through `.replace(/</g, '\\u003c')` before injection.

---

## 7. Page Architecture

All pages are **100% statically pre-rendered at build time** (SSG). There is no server-side rendering or API waiting time for real visitors.

### Home Page — `/`

**Route:** `src/app/page.tsx`  
**Type:** Server Component  
**Sections:**

1. **Hero Banner** — Full-viewport Forest Green section with animated heading, gold accent tag, key stats bar, and dual CTA buttons (WhatsApp Book + Explore Rooms)
2. **Quick Feature Banners** — 4 icon-driven trust signals (WiFi, Parking, Breakfast, Concierge)
3. **About Teaser** — Brand story excerpt with 4 stat counters, linking to `/about`
4. **Featured Rooms** — 4 `RoomCard` components with pricing
5. **Amenities Highlights** — Selected amenity cards
6. **TripAdvisor Testimonial** — Dhiwakar Kumar's review in a styled quote block
7. **Location Block** — Address + directions + resort map context

---

### About Page — `/about`

**Route:** `src/app/about/page.tsx`  
**Sections:** Vision & story, verified resort stats, brand values, guest review

**Header Pattern:** Dark `#112d22` hero section starts from the top edge (`pt-28 md:pt-36`), no white gap. `text-white` explicitly on `<h1>` to override CSS specificity.

---

### Rooms Listing — `/rooms`

**Route:** `src/app/rooms/page.tsx`  
**Sections:** Hero header + 4 `RoomCard` grid + pricing inclusions table + day outing CTA

---

### Room Detail — `/rooms/[slug]`

**Route:** `src/app/rooms/[slug]/page.tsx`  
**Type:** SSG with `generateStaticParams()`  
**Pre-rendered Slugs:**
```typescript
['standard-room', 'deluxe-double-room', 'double-room-balcony', 'suite-pool-view']
```

**Sections:**
- Breadcrumb back link
- Room name, size, occupancy, price header
- Hero image gallery
- Full description paragraph
- In-room amenities checklist
- Prominent WhatsApp Book CTA
- "Other Rooms" cross-sell grid (3 other rooms)

**Metadata:** Each slug generates unique `<title>`, `<meta description>`, and Open Graph tags for that specific room.

---

### Amenities Page — `/amenities`

**Route:** `src/app/amenities/page.tsx`  
**Sections:** Hero header + all 10 `AmenityCard` components in responsive grid + day outing WhatsApp CTA

---

### Gallery Page — `/gallery`

**Route:** `src/app/gallery/page.tsx`  
**Type:** Client Component (interactive filter)  
**Filter Categories:** All · Rooms · Pool & Water · Activities · Dining & Events

**Image Grid:** `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4` — responsive masonry-style layout. Images have hover zoom + title overlay.

---

### Contact Page — `/contact`

**Route:** `src/app/contact/page.tsx`  
**Type:** Client Component (interactive form)

**Sections:**
1. **Contact Cards Row** — WhatsApp, Direct Call, Google Maps directions
2. **Reservation Generator Form** — Guest name, check-in/out dates, room selector (driven by `roomsData`), guest count, special notes → generates a formatted WhatsApp message on submit
3. **FAQ Accordion** — 5 FAQs from `resortInfo.faqs`, expand/collapse with animation

---

### Technical SEO Pages

| Route | File | Purpose |
|---|---|---|
| `/sitemap.xml` | `src/app/sitemap.ts` | Auto-generated sitemap for all routes |
| `/robots.txt` | `src/app/robots.ts` | Crawling rules for search engines |

---

## 8. SEO & Structured Data

### Per-Page Metadata

Every page exports a `metadata` object with:
```typescript
export const metadata: Metadata = {
  title: "Metro Club Resort | [Page-specific title]",
  description: "[Unique, keyword-rich description]",
  openGraph: {
    title: "...",
    description: "...",
    images: [{ url: "/og-image.jpg" }],
  },
  alternates: {
    canonical: "https://metroclubresort.in/[page]",
  },
};
```

### JSON-LD Structured Data (`JsonLd.tsx`)

Injected in root `layout.tsx`. Schema types: `Resort`, `LodgingBusiness`  
Fields: name, address (PostalAddress), geo, telephone, email, checkinTime, checkoutTime, aggregateRating, url, priceRange

Search engines (Google) read this to power **Rich Snippets** in search results (star ratings, address, price range).

### Sitemap

`/sitemap.xml` lists all 15 routes with priorities and change frequencies:
- Home: priority 1.0
- Rooms listing + 4 room detail pages: priority 0.9
- About, Amenities, Gallery, Contact: priority 0.8

---

## 9. WhatsApp CRO Integration

### The Core Utility — `src/lib/whatsapp.ts`

```typescript
export const WHATSAPP_NUMBER = "919043001799";
export const DISPLAY_PHONE = "+91 90430 01799";

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
```

### Where WhatsApp CTAs Are Used

| Location | Pre-filled Message |
|---|---|
| Navbar "Book Now" button | Generic enquiry |
| Home Hero | Generic "I want to book a stay" |
| Each RoomCard | Specific room name + price + occupancy |
| Room Detail page | Specific room name + price + availability request |
| Contact form submit | Fully formatted enquiry with guest name, dates, room type, guests, notes |
| Gallery page CTA | "I loved the gallery and would like to book" |
| Amenities day outing CTA | Day outing specific enquiry |
| Floating WhatsApp badge | Generic greeting |
| Footer | Generic enquiry |

### Direct Phone Link
All phone number displays use `<a href="tel:+919043001799">` to trigger native phone dialer on mobile.

### Google Maps
All location CTAs link to `https://maps.google.com/?q=Metro+Club+Resort+Sultanpet+Coimbatore` which opens in Google Maps app on mobile or Google Maps website on desktop.

---

## 10. Responsive Design Strategy

### Breakpoint System (Tailwind)

| Breakpoint | Width | Target |
|---|---|---|
| (default) | 0px+ | Mobile phones |
| `sm:` | 640px+ | Large phones / small tablets |
| `md:` | 768px+ | iPad and tablets |
| `lg:` | 1024px+ | Laptops |
| `xl:` | 1280px+ | Large desktops |

### Navigation Responsiveness

- **Mobile:** Hamburger icon → animated full-screen overlay menu
- **Desktop:** Horizontal nav bar with inline links

### Grid Responsiveness

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Room Cards | 1 column | 2 columns | 2 or 4 columns |
| Amenity Cards | 1 column | 2 columns | 3 columns |
| Gallery Grid | 1 column | 2 columns | 4 columns |
| Contact Cards | 1 column | 3 columns | 3 columns |
| Quick Features | 2 columns | 2 columns | 4 columns |

### Image Optimization

All images use Next.js `<Image />` component with:
- `sizes` prop for responsive image loading (browser loads correct size for screen width)
- `priority` flag on above-the-fold hero images
- `fill` with `object-cover` for responsive aspect ratio containers
- No CLS (Cumulative Layout Shift) — dimensions always explicit

---

## 11. Configuration Files

### `next.config.ts`

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "metroclubresort.in", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};
```

Allows Next.js Image Optimization for remote images from the WordPress site and Unsplash (future).

### `tsconfig.json`

- Strict TypeScript enabled
- `@/*` path alias maps to `./src/*`
- Target: ES2017, Module: ESNext

### `.gitignore`

Standard Next.js gitignore — excludes `.next/`, `node_modules/`, `.env*`, `*.log`.

---

## 12. Workspace Rules & Coding Standards

Defined in `.agents/AGENTS.md`, enforced automatically by the Antigravity AI assistant:

1. **Plan-first execution:** Major changes require `implementation_plan.md` approval
2. **Data separation:** No hardcoded content in JSX — always use `src/data/`
3. **WhatsApp CRO:** All booking CTAs use `createWhatsAppUrl()` with pre-filled messages
4. **Build verification:** Every change session ends with `npm run build` — zero error tolerance
5. **Image rules:** Always use `<Image />` with explicit dimensions; no `<img>` tags
6. **SEO compliance:** Every page must export `metadata`; single `<h1>` per page; semantic HTML
7. **Brand compliance:** Color ratios, font stack, and spacing must match PDF specifications
8. **No unauthorized fonts:** Only Liberation Serif/Georgia (headings) and Liberation Sans/Arial (body)

---

## 13. GitHub Deployment Guide

### Step 1: Initialize Git

Open terminal in the project root and run:

```bash
git init
git add .
git commit -m "feat: initial Metro Club Resort Next.js redesign

- Full App Router architecture with 15 static pages
- Brand-compliant design system (Forest Green, Gold, Teal palette)
- WhatsApp CRO integration across all CTAs
- schema.org Resort JSON-LD structured data
- Responsive mobile-first design with interactive gallery and FAQ
- Build verified: 15/15 pages generated with zero errors"
```

### Step 2: Create GitHub Repository

1. Go to **github.com** → click **"New repository"**
2. Repository name: `metro-club-resort`
3. Set to **Private** (recommended until launch)
4. Do **NOT** initialize with README (you already have one)
5. Click **"Create repository"**

### Step 3: Connect & Push

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/metro-club-resort.git
git branch -M main
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

> [!IMPORTANT]
> Make sure `.gitignore` exists and includes `node_modules/` and `.next/` before pushing — both directories are large and must never be pushed to GitHub.

---

## 14. Vercel Deployment Guide

### Step 1: Connect to Vercel

1. Go to **vercel.com** → Sign in with your GitHub account
2. Click **"Add New Project"**
3. Select your `metro-club-resort` repository from the list
4. Click **"Import"**

### Step 2: Configure Project Settings

Vercel auto-detects Next.js. Verify these settings:

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Root Directory | `./` (default) |
| Build Command | `npm run build` |
| Output Directory | `.next` (auto) |
| Install Command | `npm install` |

### Step 3: Set Domain

After first deploy:
1. Go to **Project → Settings → Domains**
2. Add `metroclubresort.in` as a custom domain
3. Vercel provides DNS records (CNAME/A records) to add in your domain registrar

### Step 4: Deploy

Click **"Deploy"**. Vercel will:
1. Pull code from GitHub
2. Run `npm install`
3. Run `npm run build` (pre-render all 15 pages)
4. Deploy globally to Vercel's Edge Network (CDN)

Every time you push new code to GitHub's `main` branch, Vercel **automatically re-deploys** within 1-2 minutes.

### Environment Variables

Currently no environment variables are required. If in the future you add:
- Analytics keys
- Email service API keys
- CMS tokens

Add them in **Vercel → Project → Settings → Environment Variables**.

> [!TIP]
> Vercel's free Hobby plan supports unlimited personal/client projects with global CDN, SSL certificates, and automatic GitHub deployments at no cost.

---

## 15. Future Roadmap & Planned Improvements

### Phase 2 — Image Asset Migration
- Move all images from WordPress CDN to Vercel Blob Storage or Cloudinary
- Add `alt` text audit for all images (accessibility compliance)
- Implement AVIF/WebP format optimization

### Phase 3 — Enhanced Booking Flow
- WhatsApp Business API integration for automated booking confirmation
- Real-time room availability calendar widget
- Inline pricing calculator (per-night × number of nights)

### Phase 4 — Content Management
- Integrate **Sanity.io** or **Contentful** CMS so the resort team can update rooms, prices, and gallery without code changes
- Admin dashboard for viewing WhatsApp enquiry analytics

### Phase 5 — Performance & Analytics
- Google Analytics 4 integration
- Hotjar heatmaps for CRO optimization
- Core Web Vitals monitoring dashboard

### Phase 6 — Advanced Features
- Multi-language support (Tamil, English)
- Loyalty/returning guest recognition
- Day outing online booking form with payment gateway

---

## Build Output Reference

```
Route (app)
┌ ○ /                         Home page
├ ○ /about                    About page
├ ○ /amenities                Amenities page
├ ○ /contact                  Contact & FAQ page
├ ○ /gallery                  Photo gallery (filtered)
├ ○ /rooms                    Rooms listing
├ ● /rooms/standard-room      SSG room detail
├ ● /rooms/deluxe-double-room SSG room detail
├ ● /rooms/double-room-balcony SSG room detail
├ ● /rooms/suite-pool-view    SSG room detail
├ ○ /sitemap.xml              Search engine sitemap
├ ○ /robots.txt               Crawling rules
└ ○ /_not-found               404 page

○ = Static (pre-rendered HTML)
● = SSG (generateStaticParams)

Total: 15 pages | 0 errors | 0 TypeScript warnings
```

---

*Documentation written August 2026 | Metro Club Resort Next.js Redesign Project*
