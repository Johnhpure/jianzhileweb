# Design: launch-jianzhile-official-website

## 1. Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js 15 App Router                │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌─────────┐ │
│  │   Pages   │ │ Components│ │  Layouts  │ │  Hooks  │ │
│  │ (static)  │ │ (shadcn)  │ │ (shared)  │ │         │ │
│  └─────┬─────┘ └─────┬─────┘ └─────┬─────┘ └────┬────┘ │
│        │              │              │             │      │
│  ┌─────┴──────────────┴──────────────┴─────────────┴───┐ │
│  │               Route Handlers (/api/leads)           │ │
│  │    zod validation → anti-spam → DB write → response │ │
│  └─────────────────────────┬───────────────────────────┘ │
│                            │                             │
│  ┌─────────────────────────┴───────────────────────────┐ │
│  │             Analytics Layer (consent-gated)          │ │
│  │       GA4 (all pages) + Hotjar (high-intent)        │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                             │
                    ┌────────┴────────┐
                    │   PostgreSQL    │
                    │  (leads table)  │
                    └─────────────────┘
```

## 2. Directory Structure

```
jianzhileweb/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (nav + footer + consent + analytics)
│   │   ├── page.tsx                  # Home page
│   │   ├── solutions/
│   │   │   └── employer/
│   │   │       └── page.tsx          # B-end solution page
│   │   ├── pricing/
│   │   │   └── page.tsx              # Pricing page
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact/Trial dual-mode page
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── privacy/
│   │   │   └── page.tsx              # Privacy policy placeholder
│   │   ├── terms/
│   │   │   └── page.tsx              # Terms of service placeholder
│   │   └── api/
│   │       └── leads/
│   │           └── route.ts          # Lead submission API
│   ├── components/
│   │   ├── ui/                       # shadcn/ui primitives (auto-generated)
│   │   ├── layout/
│   │   │   ├── header.tsx            # Site header/nav
│   │   │   ├── footer.tsx            # Site footer
│   │   │   ├── mobile-nav.tsx        # Mobile navigation drawer
│   │   │   └── consent-banner.tsx    # Analytics consent banner
│   │   ├── home/
│   │   │   ├── hero-section.tsx
│   │   │   ├── stats-section.tsx
│   │   │   ├── b-end-value.tsx
│   │   │   ├── c-end-value.tsx
│   │   │   └── trust-section.tsx
│   │   ├── solutions/
│   │   │   ├── feature-card.tsx
│   │   │   ├── workflow-diagram.tsx
│   │   │   ├── comparison-table.tsx
│   │   │   └── case-study-card.tsx
│   │   ├── pricing/
│   │   │   ├── plan-card.tsx
│   │   │   └── faq-accordion.tsx
│   │   ├── contact/
│   │   │   ├── lead-form.tsx         # Main form with tab switch
│   │   │   ├── employer-fields.tsx
│   │   │   └── candidate-fields.tsx
│   │   └── shared/
│   │       ├── section-header.tsx
│   │       ├── cta-button.tsx
│   │       ├── animated-counter.tsx
│   │       └── logo-wall.tsx
│   ├── lib/
│   │   ├── db.ts                     # Database connection (postgres client)
│   │   ├── leads.ts                  # Lead creation logic
│   │   ├── validation.ts             # Shared zod schemas
│   │   ├── anti-spam.ts              # Honeypot + rate limit + Turnstile
│   │   ├── analytics.ts              # GA4/Hotjar event tracker wrapper
│   │   ├── metadata.ts               # SEO metadata factory
│   │   └── site-config.ts            # Centralized site constants
│   ├── hooks/
│   │   ├── use-consent.ts            # Consent state management
│   │   └── use-analytics.ts          # Analytics event dispatch
│   └── types/
│       └── leads.ts                  # Lead-related TypeScript types
├── public/
│   ├── images/                       # Static images, OG images
│   ├── robots.txt                    # SEO robots (build-generated override)
│   └── sitemap.xml                   # Auto-generated at build time
├── next.config.ts                    # Next.js config (standalone output)
├── tailwind.config.ts
├── components.json                   # shadcn/ui config
├── tsconfig.json
├── package.json
├── .env.example                      # Environment variable template
├── .env.local                        # Local dev (gitignored)
├── Dockerfile                        # Standalone deployment
└── docker-compose.yml                # Local dev with Postgres
```

## 3. Key Design Decisions

### 3.1 Rendering Strategy

| Page | Strategy | Reason |
|---|---|---|
| Home | Static (SSG) | Content changes infrequently, best performance |
| B-end Solution | Static (SSG) | Same as above |
| Pricing | Static (SSG) | No public prices, content is fixed |
| Contact/Trial | Static shell + client form | Form is client-side interactive |
| About | Static (SSG) | Content changes infrequently |
| Privacy/Terms | Static (SSG) | Legal content is versioned |
| /api/leads | Server runtime | Needs DB access |

### 3.2 Database Strategy

- **Engine**: PostgreSQL (managed service or Docker for dev)
- **Client**: `pg` (node-postgres) with connection pooling
- **No ORM in P0**: Direct SQL with parameterized queries for simplicity
- **Schema migration**: SQL files in `db/migrations/`, applied manually or via simple script
- **Connection string**: via `DATABASE_URL` environment variable

### 3.3 Lead Submission Flow

```
Client                    Server (/api/leads)              Database
  │                            │                              │
  ├─ zod client validation ──→ │                              │
  │                            ├─ zod server validation       │
  │                            ├─ honeypot check              │
  │                            ├─ rate limit check (IP)       │
  │                            ├─ generate submission_id      │
  │                            ├─ INSERT with idempotency ──→ │
  │                            │  (ON CONFLICT → return existing)
  │  ←── { success, ids } ────┤                              │
  │                            │                              │
  ├─ track lead_form_success   │                              │
```

### 3.4 Anti-Spam Layers

| Layer | Mechanism | P0 Status |
|---|---|---|
| L1 | Honeypot hidden field | Enabled |
| L2 | IP-based rate limiting (in-memory, 5 req/IP/min) | Enabled |
| L3 | Idempotency key dedup (DB unique constraint) | Enabled |
| L4 | Cloudflare Turnstile | Toggle-ready, disabled by default |

### 3.5 Analytics Architecture

```typescript
// Consent-gated loading pattern
if (consentGranted && isProduction) {
  loadGA4(GA_MEASUREMENT_ID);
  if (isHighIntentPage) {
    loadHotjar(HOTJAR_SITE_ID);
  }
}
```

- **Event tracker**: Thin wrapper `trackEvent(name, params)` that checks consent before firing
- **High-intent pages**: `/contact`, `/pricing`
- **Blocked in**: dev, preview, and non-production environments

### 3.6 SEO Implementation

- **Metadata factory**: `generateMetadata()` function per page, returns `Metadata` object
- **JSON-LD**: `Organization` and `WebSite` in root layout; `BreadcrumbList` per page
- **Sitemap**: Generated at build time via `next-sitemap` or custom script
- **robots.txt**: Production allows all P0 routes; preview returns `Disallow: /`
- **Canonical**: All pages use production domain, no trailing slash

### 3.7 Deployment Architecture (China-Compatible)

```
┌──────────────────┐     ┌──────────────────┐
│  Docker Container│     │  Managed Postgres │
│  (Next.js        │────→│  (RDS/PolarDB/   │
│   standalone)    │     │   Supabase etc.)  │
└────────┬─────────┘     └──────────────────┘
         │
    ┌────┴────┐
    │  Nginx  │  ← SSL termination, static caching
    │  / CDN  │
    └─────────┘
```

- **Build**: `next build` with `output: "standalone"` in next.config.ts
- **Container**: Multi-stage Dockerfile (build → slim runtime)
- **NO Vercel-only features**: No `@vercel/*` packages, no Edge Runtime, no ISR revalidate tags
- **Environment variables**: Validated at startup via zod schema

### 3.8 Responsive Design Strategy

- **Mobile-first**: Base styles target 375px+ screens
- **Breakpoint progression**: mobile → tablet (768px) → desktop (1024px) → wide (1440px)
- **Navigation**: Hamburger + drawer on mobile, horizontal links on desktop
- **Grid**: Single column mobile, 2-col tablet, 3-col desktop for card grids
- **Images**: Next.js `<Image>` with responsive sizes, WebP format preferred

## 4. Environment Variables

```bash
# Database
DATABASE_URL=postgresql://user:pass@host:5432/jianzhile

# Analytics (production only)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_SITE_ID=XXXXXXX

# Anti-spam
TURNSTILE_SECRET_KEY=           # Optional, enable when needed
NEXT_PUBLIC_TURNSTILE_SITE_KEY= # Optional

# Site
NEXT_PUBLIC_SITE_URL=https://www.jianzhile.com  # Canonical URL
NEXT_PUBLIC_SITE_ENV=production|preview|development

# Legal
NEXT_PUBLIC_POLICY_VERSION=1.0.0
```

## 5. Component Design Patterns

### 5.1 Naming Conventions
- **Files**: kebab-case (`hero-section.tsx`)
- **Components**: PascalCase (`HeroSection`)
- **Hooks**: camelCase with `use` prefix (`useConsent`)
- **Utils/Lib**: camelCase (`generateMetadata`)
- **Types**: PascalCase (`LeadPayload`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RATE_LIMIT`)

### 5.2 Import Order
1. React/Next.js imports
2. External dependencies
3. Internal `@/lib/*` imports
4. Internal `@/components/*` imports
5. Internal `@/hooks/*` imports
6. Type imports
7. Style imports (if any)

### 5.3 Component Structure
```typescript
// 1. Imports
// 2. Types/Interfaces
// 3. Constants
// 4. Component definition (export default function)
// 5. Sub-components (if small, otherwise separate file)
```

## 6. Design Tokens (Brand)

```css
/* Primary palette */
--color-primary: #2563EB;        /* 科技蓝 */
--color-primary-dark: #1D4ED8;
--color-primary-light: #3B82F6;
--color-bg: #FFFFFF;
--color-text: #1F2937;           /* 深灰 */
--color-text-secondary: #6B7280;
--color-border: #E5E7EB;
--color-success: #10B981;        /* C-end green */
--color-surface: #F9FAFB;

/* Typography */
--font-heading: "Inter", "PingFang SC", sans-serif;
--font-body: "Inter", "PingFang SC", sans-serif;

/* Spacing scale */
--space-section: 80px (desktop) / 48px (mobile);
--space-card-gap: 24px (desktop) / 16px (mobile);
--max-content-width: 1280px;
```
