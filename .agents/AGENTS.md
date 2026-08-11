# Metro Club Resort Workspace Rules & Engineering Standards

## 1. Antigravity Agentic Operating Principles
- **Plan First, Execute with Permission:** Major changes, architectural pivots, or new screen generation must first be detailed in `implementation_plan.md` and approved by the user.
- **Artifact-Driven & Verifiable:** Maintain updated artifacts (`implementation_plan.md`, `walkthrough.md`) for complete execution transparency.
- **Dedicated Tool Precision:** Always use dedicated file and search tools (`write_to_file`, `replace_file_content`, `grep_search`, `view_file`) with absolute paths instead of raw shell commands (`cat`, `sed`, `ls`, `grep`).
- **Phase-by-Phase Verification:** Never complete tasks without building (`npm run build`) and verifying responsive rendering and link functionality.

## 2. Technology Stack
- **Framework:** Next.js 14/15 (App Router, Server Components by default)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Generation & Management:** Stitch MCP for creating design systems, component libraries, and screen generation.

## 3. Brand Identity & Strict Design Rules (Brand PDF Compliance)
- **Core Signature Color Ratios:**
  - **Forest Green (`#1B4332`) — 60%:** Dominates primary layouts, hero headings, and brand backgrounds.
  - **Campfire Gold (`#D48C00`) — 15%:** Primary CTA buttons, sub-headings, review highlights, and luxury borders.
  - **Pool Teal (`#0077B6`) — 15%:** Secondary accent specifically for water amenities (Swimming Pool, Rain Dance).
  - **Clean Slate (`#2D312E`) & Soft Cream (`#FCFBFA`) — 10%:** Slate for body typography; Soft Cream for luxury background canvas.
- **Typography & Spacing Standards:**
  - **Headings:** Liberation Serif Bold (Strict fallback: Georgia).
  - **Sub-headings & UI:** Liberation Sans Bold, Uppercase with `0.1em` tracking/letter spacing.
  - **Body Copy:** Liberation Sans Regular (Strict fallback: Helvetica / Arial).
  - **Line Spacing (Leading):** Must always be 3-4pt larger than font size (e.g. `leading-relaxed` or `leading-loose`).
  - **STRICT PROHIBITION:** Never mix unauthorized font families (e.g., Comic Sans, Impact, standard unformatted sans).

## 4. WhatsApp Conversion & Contact Flow (CRO)
- **Official Booking Number:** `+91 90430 01799` (International: `919043001799`).
- **Dynamic WhatsApp Links:** All "Book Now" buttons must construct formatted URLs via `createWhatsAppUrl(message)` with `encodeURIComponent` pre-filling the selected room name, occupancy, and rates.
- **Direct Link Protocols:** Use `<a href="tel:+919043001799">` for phone calls and direct Google Maps navigation links.

## 5. SEO & Structured Data Best Practices
- **Server-Rendered JSON-LD:** Inject schema.org `LodgingBusiness` / `Resort` markup inside Server Components with XSS-safe `<script>` tags (`.replace(/</g, '\\u003c')`).
- **Metadata Exports:** Every `page.tsx` must export complete `metadata` (Title, Description, OpenGraph, Canonical URL).
- **Technical SEO Assets:** Include `src/app/sitemap.ts` and `src/app/robots.ts`.
- **Pre-rendering:** Use `generateStaticParams()` on `/rooms/[slug]` for 100% pre-rendered static HTML.
- **Semantic HTML:** Enforce single `<h1>` per page, `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>`.

## 6. Architecture & Content Separation
- **Data Layer:** Keep content completely separate from UI inside `data/` (`rooms.ts`, `amenities.ts`, `gallery.ts`). Never hardcode marketing copy or pricing directly inside JSX components.
- **Asset Handling:** Use Next.js `<Image />` with configured `remotePatterns` for `metroclubresort.in`, explicit dimensions to prevent CLS (Cumulative Layout Shift), and `priority` on above-the-fold hero imagery.
