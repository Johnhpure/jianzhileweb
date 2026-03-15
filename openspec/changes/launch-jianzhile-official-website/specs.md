# Specifications: launch-jianzhile-official-website

## 1. Frozen Constraints Summary

### 1.1 Scope Boundary (P0 MVP)

| Included (P0) | Excluded (P1/P2) |
|---|---|
| Home (首页) | Customer Stories (客户案例) |
| B-end Solution (B 端解决方案) | Blog / Resource Center (博客/资源中心) |
| Pricing (定价) | Full C-end Product Page (完整 C 端产品页) |
| Contact/Trial (申请试用/联系我们) | Help Center / FAQ (帮助中心) |
| About (关于我们) | |
| Privacy Policy placeholder (`/privacy`) | |
| Terms of Service placeholder (`/terms`) | |

### 1.2 User Decisions Log

| Decision Point | User Choice | Impact |
|---|---|---|
| B-end form submission | Site-internal backend | Need API route + DB |
| C-end P0 form shape | Contact page dual-mode (Candidate tab) | No new top-level route |
| C-end data scope | Lightweight intent: name, phone, target position, target city | Minimal lead schema |
| Lead persistence | DB only, no email/CRM in P0 | Simplest backend |
| Data retention | Long-term retention, manual deletion | No auto-purge job needed |
| Analytics | GA4 + Hotjar on high-intent pages, consent-gated | Consent banner required |
| Pricing disclosure | Show plan structure only, all CTAs → contact sales | No payment integration |
| Legal content | Structure-first with placeholder, replace before go-live | Go-live blocker checklist |
| Domain/Deploy | Domestic (China) compatible, no Vercel-only features | Next.js standalone output |

---

## 2. Functional Specifications

### 2.1 Site Foundation

- **Framework**: Next.js 15, App Router, TypeScript strict mode
- **Styling**: TailwindCSS + shadcn/ui component library
- **Animation**: Framer Motion (lightweight, non-blocking)
- **Rendering**: Static generation by default; only `/api/*` routes use server runtime
- **Build output**: `standalone` mode to enable portable deployment
- **Language**: `zh-CN` only, no i18n in P0

### 2.2 Shared Layout

- **Header/Nav**: Logo, nav links (首页, 产品方案, 定价, 关于我们), primary CTA button ("免费试用")
  - Mobile: hamburger menu with slide-out drawer
  - Sticky on scroll with backdrop blur
- **Footer**: Company info placeholder, ICP placeholder, links to /privacy and /terms, social media icons (WeChat QR, Weibo), contact email placeholder
- **Responsive breakpoints**: mobile-first; `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`, `2xl:1440px`

### 2.3 Home Page (`/`)

| Section | Content | CTA |
|---|---|---|
| Hero | H1 headline, subtitle, dual CTA buttons (B-end blue / C-end green) | "我是企业 HR，免费试用" / "我是求职者，免费注册" |
| Stats bar | 4 animated counter cards (processing speed, match accuracy, companies served, candidates helped) | — |
| B-end value props | 3 pain-point → solution cards | "预约产品演示" |
| C-end value props | 3 pain-point → solution cards | "免费注册体验" |
| Trust section | Partner logo wall (placeholder slots), user testimonials (3-4 cards), media badges | — |

### 2.4 B-end Solution Page (`/solutions/employer`)

| Section | Content |
|---|---|
| Hero | H1 + subtitle with scenario description |
| Feature cards (4) | Smart JD parsing, AI resume scoring, batch comparison, interview suggestion |
| Workflow diagram | 6-step horizontal flow |
| Comparison table | Traditional vs 简职了 (3 metrics) |
| Case study placeholders | 2 slots with company type + challenge + outcome |
| CTA block | Primary: "申请 14 天免费试用", Secondary: "预约 30 分钟在线演示" |

### 2.5 Pricing Page (`/pricing`)

- **3 plan cards**: Free Trial / Enterprise Standard / Enterprise Flagship
- All cards show feature comparison rows (resume quota, positions, team seats, API, dedicated CS, export)
- **No public prices**: Standard shows "联系我们获取报价", Flagship shows "联系销售"
- Free plan CTA → Contact/Trial page (employer mode)
- Standard/Flagship CTA → Contact/Trial page (employer mode)
- **FAQ accordion**: 5 items (data security, privacy, ATS integration, billing, cancellation)

### 2.6 Contact/Trial Page (`/contact`)

**Dual-mode form** with tab selector: "企业 HR" (default) | "求职者"

#### Employer Mode Fields (required):
| Field | Type | Validation |
|---|---|---|
| 姓名 | text | 2-20 chars |
| 公司名称 | text | 2-50 chars |
| 职位 | text | 2-30 chars |
| 手机号 | tel | China mobile regex |
| 月均招聘职位数 | select | 1-5, 6-20, 21-50, 50+ |
| 主要招聘城市 | text | 2-30 chars |
| 目前使用的招聘工具 | multi-select checkboxes | BOSS直聘, 猎聘, 前程无忧, 智联招聘, 拉勾, 其他 |
| 隐私政策同意 | checkbox | must be checked |

#### Candidate Mode Fields (required):
| Field | Type | Validation |
|---|---|---|
| 姓名 | text | 2-20 chars |
| 手机号 | tel | China mobile regex |
| 目标岗位 | text | 2-30 chars |
| 目标城市 | text | 2-20 chars |
| 隐私政策同意 | checkbox | must be checked |

#### Submission behavior:
- Client: react-hook-form + zod validation → POST `/api/leads`
- Success: show inline success message with submission ID
- Failure: show inline error with retry option
- Anti-spam: honeypot field + IP-based rate limiting + optional Turnstile toggle

### 2.7 About Page (`/about`)

| Section | Content |
|---|---|
| Mission & Vision | Company mission statement, vision statement |
| Team cards | 3-4 founder/core team placeholder cards (photo, name, title, brief bio) |
| Timeline | 4 milestones (project start, beta, launch, growth) |
| Media section | Placeholder for press coverage / awards |

### 2.8 Legal Pages

- `/privacy` — Privacy Policy placeholder page with version marker
- `/terms` — Terms of Service placeholder page with version marker
- Both use a simple prose layout, content marked as placeholder with go-live replacement requirement

---

## 3. API Specification

### 3.1 Lead Submission Endpoint

```
POST /api/leads
Content-Type: application/json
```

**Request body schema (Zod)**:

```typescript
{
  audienceType: "employer" | "candidate",
  leadType: "trial" | "demo" | "contact" | "registration_intent",
  idempotencyKey: string (UUID v4),
  sourcePage: string,
  utmSource?: string,
  utmMedium?: string,
  utmCampaign?: string,
  policyVersion: string,
  consentTimestamp: string (ISO 8601),
  payload: {
    // Employer mode
    name: string,
    company?: string,
    position?: string,
    phone: string,
    monthlyPositions?: string,
    primaryCity?: string,
    currentTools?: string[],
    // Candidate mode
    targetPosition?: string,
    targetCity?: string,
  }
}
```

**Response (success)**:
```json
{
  "success": true,
  "submissionId": "uuid",
  "requestId": "uuid"
}
```

**Response (error)**:
```json
{
  "success": false,
  "error": { "code": "VALIDATION_ERROR" | "RATE_LIMITED" | "DUPLICATE" | "INTERNAL_ERROR", "message": "..." },
  "requestId": "uuid"
}
```

### 3.2 Database Schema (Lead table)

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id UUID UNIQUE NOT NULL,
  request_id UUID NOT NULL,
  idempotency_key UUID NOT NULL,
  audience_type VARCHAR(20) NOT NULL,
  lead_type VARCHAR(30) NOT NULL,
  source_page VARCHAR(100),
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  policy_version VARCHAR(20) NOT NULL,
  consent_timestamp TIMESTAMPTZ NOT NULL,
  payload JSONB NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(idempotency_key, audience_type)
);
```

---

## 4. Analytics Event Dictionary

| Event Name | Trigger | Required Params |
|---|---|---|
| `page_view` | Page load (auto by GA4) | page_path, page_title |
| `cta_click` | Any CTA button click | audience_type, cta_id, source_page |
| `lead_form_view` | Contact form becomes visible | audience_type, source_page |
| `lead_form_submit` | Form submit button clicked | audience_type, lead_type, source_page |
| `lead_form_success` | API returns success | audience_type, lead_type, submission_id, source_page |
| `lead_form_failure` | API returns error | audience_type, lead_type, error_code, source_page |

**Consent rule**: GA4 and Hotjar scripts MUST NOT load until user explicitly consents via consent banner. Preview/dev environments MUST never load production analytics.

**Hotjar scope**: Only enabled on `/contact` and `/pricing` pages (high-intent).

---

## 5. SEO Requirements

| Asset | Requirement |
|---|---|
| Page metadata | Every P0 page has unique title, description, canonical, og:title, og:description, og:image |
| robots.txt | Allow indexing of all P0 public routes; block /api/*, preview domains |
| sitemap.xml | Auto-generated, includes all P0 public routes only |
| JSON-LD | `Organization` (site-wide), `WebSite` (site-wide), `BreadcrumbList` (per page) |
| Canonical | Production domain only, trailing slash consistent (no trailing slash) |
| Preview env | Must output `noindex, nofollow` on all pages |

---

## 6. PBT Properties (Verifiable Invariants)

| ID | Property | Falsification Strategy |
|---|---|---|
| PBT-1 | Any valid lead payload creates exactly 1 DB record | Submit same valid payload with same idempotency key twice; assert count=1 |
| PBT-2 | Any invalid payload returns 4xx and creates 0 DB records | Fuzz payload with missing/malformed fields; assert no DB writes |
| PBT-3 | Success response never precedes durable write | Simulate DB failure; assert no success response |
| PBT-4 | Every P0 route returns 200 with complete metadata in production | Crawl all P0 routes; assert title, description, canonical, og:* all present |
| PBT-5 | Preview environment outputs noindex on all pages | Request all routes with preview host; assert noindex header/meta |
| PBT-6 | No analytics script loads without consent | Intercept network requests with consent=false; assert zero GA4/Hotjar requests |
| PBT-7 | Analytics events never contain PII | Intercept all GA4 events; assert no email/phone/name in params |
| PBT-8 | Form submission requires consent checkbox | Submit form with consent unchecked; assert 4xx or client-side block |
| PBT-9 | All internal links resolve to valid P0 routes | Crawl all links in nav/footer/CTAs; assert no 404 |
| PBT-10 | No horizontal overflow at any viewport 320-1440px | Render each page at sampled widths; assert no overflow-x |
