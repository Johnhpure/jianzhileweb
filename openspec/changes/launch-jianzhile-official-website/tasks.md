## 1. Project Initialization

- [ ] 1.1 Initialize Next.js 15 project with TypeScript, App Router, TailwindCSS, and standalone output mode
- [ ] 1.2 Install and configure shadcn/ui with project design tokens (primary blue #2563EB, fonts, spacing)
- [ ] 1.3 Install dependencies: framer-motion, react-hook-form, zod, pg (node-postgres), uuid
- [ ] 1.4 Create .env.example with all environment variables documented and add zod-based env validation at startup
- [ ] 1.5 Create Dockerfile (multi-stage build for standalone Next.js) and docker-compose.yml (app + Postgres for local dev)
- [ ] 1.6 Create site-config.ts with centralized constants (site name, URLs, company info placeholders, policy version)

## 2. Shared Layout & Navigation

- [ ] 2.1 Implement root layout.tsx with HTML lang="zh-CN", metadata defaults, and shared structure
- [ ] 2.2 Build Header component with logo, nav links, primary CTA button, and sticky scroll behavior
- [ ] 2.3 Build MobileNav component with hamburger toggle and slide-out drawer
- [ ] 2.4 Build Footer component with company info placeholder, ICP placeholder, legal links, social icons
- [ ] 2.5 Build ConsentBanner component with accept/reject analytics tracking, persisted via localStorage
- [ ] 2.6 Create metadata factory function (generatePageMetadata) for consistent title/description/canonical/OG per page

## 3. Home Page

- [ ] 3.1 Build HeroSection with H1 headline, subtitle, dual CTA buttons (employer blue / candidate green), and background visual
- [ ] 3.2 Build StatsSection with 4 animated counter cards using framer-motion (processing speed, accuracy, companies, candidates)
- [ ] 3.3 Build BEndValue section with 3 pain-point/solution cards and "预约产品演示" CTA
- [ ] 3.4 Build CEndValue section with 3 pain-point/solution cards and "免费注册体验" CTA
- [ ] 3.5 Build TrustSection with partner logo wall (placeholder slots), testimonial cards (3-4), and media badge placeholders
- [ ] 3.6 Assemble Home page.tsx with all sections, page-level metadata, and JSON-LD (WebSite + Organization)

## 4. B-end Solution Page

- [ ] 4.1 Build solution page hero with H1, subtitle, and scenario description
- [ ] 4.2 Build 4 FeatureCard components (JD parsing, AI scoring, batch comparison, interview suggestions)
- [ ] 4.3 Build WorkflowDiagram component showing 6-step horizontal flow (responsive: vertical on mobile)
- [ ] 4.4 Build ComparisonTable component (Traditional vs 简职了, 3 metrics)
- [ ] 4.5 Build CaseStudyCard component with placeholder slots for 2 case studies
- [ ] 4.6 Build CTA block with primary "申请 14 天免费试用" and secondary "预约 30 分钟在线演示" buttons
- [ ] 4.7 Assemble B-end solution page.tsx with all sections and page-level metadata

## 5. Pricing Page

- [ ] 5.1 Build PlanCard component with feature rows, highlight for recommended plan, and CTA button
- [ ] 5.2 Build pricing grid layout with 3 plan cards (Free / Standard / Flagship), all CTAs → /contact
- [ ] 5.3 Build FAQAccordion component with 5 items (data security, privacy, ATS integration, billing, cancellation)
- [ ] 5.4 Assemble Pricing page.tsx with plan grid, FAQ section, and page-level metadata

## 6. Contact/Trial Page (Dual-Mode Form)

- [ ] 6.1 Create shared zod validation schemas for employer and candidate lead payloads in lib/validation.ts
- [ ] 6.2 Build LeadForm component with tab selector ("企业 HR" / "求职者") and shared form container
- [ ] 6.3 Build EmployerFields component with all B-end form fields (name, company, position, phone, monthly positions, city, current tools, consent checkbox)
- [ ] 6.4 Build CandidateFields component with C-end form fields (name, phone, target position, target city, consent checkbox)
- [ ] 6.5 Integrate react-hook-form with zod resolver, honeypot hidden field, and idempotency key generation
- [ ] 6.6 Implement form submission handler: client validation → POST /api/leads → success/error inline feedback
- [ ] 6.7 Assemble Contact page.tsx with LeadForm, page-level metadata, and multi-contact-channel info block

## 7. About Page

- [ ] 7.1 Build Mission/Vision section with company mission and vision statements
- [ ] 7.2 Build TeamCard component and team grid with 3-4 placeholder cards (photo, name, title, bio)
- [ ] 7.3 Build Timeline component with 4 milestone entries (horizontal desktop, vertical mobile)
- [ ] 7.4 Build Media/Press section with placeholder slots for coverage and awards
- [ ] 7.5 Assemble About page.tsx with all sections and page-level metadata

## 8. Legal Pages

- [ ] 8.1 Create Privacy Policy page (/privacy) with versioned placeholder content and prose layout
- [ ] 8.2 Create Terms of Service page (/terms) with versioned placeholder content and prose layout
- [ ] 8.3 Ensure both pages are linked from footer and form consent checkboxes

## 9. Lead Submission Backend

- [ ] 9.1 Create database connection module (lib/db.ts) with connection pooling and env-based config
- [ ] 9.2 Create SQL migration file for leads table schema (with idempotency unique constraint)
- [ ] 9.3 Implement POST /api/leads route handler: parse body → server-side zod validation → honeypot check → rate limit check → generate IDs → INSERT with ON CONFLICT → return result
- [ ] 9.4 Implement IP-based rate limiting (in-memory store, 5 requests per IP per minute)
- [ ] 9.5 Implement honeypot field detection in anti-spam module
- [ ] 9.6 Add Turnstile verification as toggle-ready module (disabled by default, activated via env var)
- [ ] 9.7 Add structured error responses with stable error codes (VALIDATION_ERROR, RATE_LIMITED, DUPLICATE, INTERNAL_ERROR) and request_id

## 10. Analytics Integration

- [ ] 10.1 Create analytics wrapper (lib/analytics.ts) with consent-gated GA4 script loading
- [ ] 10.2 Create Hotjar loader with consent-gating and page-scope restriction (only /contact and /pricing)
- [ ] 10.3 Create useConsent hook for managing consent state (localStorage-based)
- [ ] 10.4 Create useAnalytics hook with trackEvent function that respects consent and environment
- [ ] 10.5 Implement event tracking on all CTA buttons (cta_click with audience_type, cta_id, source_page)
- [ ] 10.6 Implement form lifecycle events (lead_form_view, lead_form_submit, lead_form_success, lead_form_failure)
- [ ] 10.7 Ensure preview/dev environments never load GA4 or Hotjar scripts

## 11. SEO Assets

- [ ] 11.1 Create robots.txt generation logic (allow P0 routes in production, disallow all in preview)
- [ ] 11.2 Create sitemap.xml generation at build time covering all P0 public routes
- [ ] 11.3 Add JSON-LD structured data: Organization and WebSite in root layout
- [ ] 11.4 Add BreadcrumbList JSON-LD per page
- [ ] 11.5 Verify all P0 pages have unique title, description, canonical, og:title, og:description, og:image
- [ ] 11.6 Configure next.config.ts for trailing slash consistency (no trailing slash), canonical host enforcement

## 12. Responsive & Visual Polish

- [ ] 12.1 Audit all pages at 375px, 768px, 1024px, 1440px viewports for layout correctness
- [ ] 12.2 Verify no horizontal overflow at any viewport width 320-1440px
- [ ] 12.3 Verify all navigation and CTAs are reachable on mobile
- [ ] 12.4 Add framer-motion entrance animations to key sections (hero, stats, feature cards)
- [ ] 12.5 Verify font loading (Inter + PingFang SC fallback) and typography scale consistency

## 13. Go-Live Checklist Verification

- [ ] 13.1 Verify all internal links resolve to valid P0 routes (no 404s)
- [ ] 13.2 Verify form submission end-to-end: valid payload → DB record → success response
- [ ] 13.3 Verify invalid payload rejection: missing fields → 4xx → no DB record
- [ ] 13.4 Verify idempotency: duplicate submission → same submission_id → count=1
- [ ] 13.5 Verify consent banner blocks analytics until accepted
- [ ] 13.6 Verify preview environment outputs noindex on all pages
- [ ] 13.7 Verify privacy/terms pages are accessible and linked from footer and form
- [ ] 13.8 Verify Docker build produces working standalone container
- [ ] 13.9 Document go-live blockers: legal content replacement, domain/DNS, ICP filing, production DB provisioning
