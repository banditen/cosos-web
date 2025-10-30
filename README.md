# COSOS Landing Page

Official marketing website for **COSOS** – the AI chief of staff that keeps founders and lean teams focused on the moves that matter.

🌐 **Live Site**: [cosos.xyz](https://cosos.xyz)  
📱 **App**: [app.cosos.xyz](https://app.cosos.xyz)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3001)
npm run dev
```

The app router automatically reloads when files change.

---

## 🌐 Environment Configuration

The landing page relies on a single public environment variable for cross-linking with the COSOS app.

---

## 🧩 UI Toolkit (shadcn/ui)

This project is pre-configured with [shadcn/ui](https://ui.shadcn.com) components for consistent, accessible primitives.

- CLI configuration lives in `components.json` and targets the `src` directory (`@/components`, `@/lib/utils`).
- Base utilities such as the `cn` helper (`src/lib/utils.ts`) and primitives (`Button`, `Badge`, `Card`, `Separator`, `Sheet`) are available under `src/components/ui`.
- Tailwind is configured with shadcn token layers and the `tailwindcss-animate` plugin while preserving the existing primary palette.

### Adding additional components

```bash
npx shadcn@latest add component-name
```

The command will respect the repository aliases and Tailwind setup. Prefer reusing existing primitives when possible to keep the dependency footprint minimal.

After installing new components, run `npm run lint` and `npm run build` to ensure the UI toolkit stays compatible with the deployment pipeline.

---

## 🌐 Environment Variables
| Variable | Purpose | Default Fallback |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | Base URL for in-product CTAs and metadata | `https://app.cosos.xyz` (prod) / `http://localhost:3000` (dev) |

Optional:

| Variable | Purpose | Default Fallback |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Override for the marketing site base URL | Derived from `NEXT_PUBLIC_APP_URL` (`https://cosos.xyz` in prod / `http://localhost:3001` in dev) |

Values are centralized in [`src/lib/site-config.ts`](./src/lib/site-config.ts). Use the exported helpers instead of reaching for `process.env` directly.

---

## 📁 Project Structure

```
cosos-landing/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── page.tsx       # Landing page
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Global styles
│   ├── components/
│   │   └── ui/            # shadcn/ui primitives
│   └── lib/
│       └── utils.ts       # Shared utilities (cn helper)
├── public/                # Static assets
├── components.json        # shadcn/ui CLI config
├── package.json
├── next.config.js
├── tailwind.config.ts
│   │   ├── layout.tsx          # Global metadata, theme setup, analytics placeholder
│   │   ├── page.tsx            # Landing page
│   │   ├── sitemap.ts          # Dynamic sitemap (home + pricing)
│   │   ├── robots.ts           # Robots configuration referencing sitemap
│   │   └── pricing/page.tsx    # Pricing page
│   ├── components/
│   │   ├── landing/            # Home page sections
│   │   ├── pricing/            # Pricing page sections
│   │   ├── layout/             # Shared layout primitives (e.g., SiteHeader)
│   │   └── system/             # Infrastructure helpers (analytics + theming)
│   ├── content/                # Content and metadata copy
│   └── lib/
│       └── site-config.ts      # Environment-aware site + app URL helpers
├── tailwind.config.ts          # Theme tokens & Tailwind setup
└── README.md
```

---

## 🧠 Configuration & Utilities

### `site-config`
- `siteConfig.getAppUrl(path?)` and `siteConfig.getSiteUrl(path?)` append cleanly sanitized paths.
- Defaults keep production and local URLs aligned; `NEXT_PUBLIC_SITE_URL` can override the marketing host if needed.
- Exported `marketingRoutes` powers sitemap generation so new primary routes only need to be added in one place.

### Metadata & Structured Data
- Global defaults are defined in `layout.tsx` using Next.js Metadata API (OG/Twitter cards, canonical URLs, favicons, manifest, robots).
- Structured data placeholders for the organization and product are injected via `<script type="application/ld+json">`.
- Page-level metadata (home + pricing) layer in canonical URLs and OG/Twitter overrides via `getSiteUrl`.

### Analytics Placeholder
[`AnalyticsPlaceholder`](./src/components/system/analytics-placeholder.tsx) mounts a deferred script in production builds only.
- Replace the `src` and `data-website-id` once a tracking provider (e.g., Umami, PostHog, Vercel Analytics) is chosen.
- Development builds keep analytics disabled to avoid noisy logs.

---

## 🧩 Component Usage Guidelines

| Area | Components | Notes |
| --- | --- | --- |
| Navigation & layout | `components/layout/*` | `SiteHeader` consumes navigation content and automatically resolves CTAs through `getAppUrl`. |
| Landing sections | `components/landing/*` | All sections accept typed `content` props sourced from `content/landing.ts` for consistency and copy updates. |
| Pricing sections | `components/pricing/*` | CTA helpers centralize plan URLs and query string handling. |
| System helpers | `components/system/*` | `ThemeScript` sets the initial color scheme before hydration; `AnalyticsPlaceholder` handles analytics injection. |

When adding new sections:
1. Define copy in `src/content/...`.
2. Build a typed component under the appropriate folder.
3. Wire it into the page and extend `marketingRoutes` if it introduces a new top-level route.

---

## 🎨 Styling & Theme Tokens

- Tailwind is configured in [`tailwind.config.ts`](./tailwind.config.ts) with `darkMode: 'class'` and a custom `primary` scale.
- The root layout applies Inter via `next/font` and sets up a theme script that honors the user’s saved preference or system default.
- Global styles live in `src/app/globals.css`. Use utility classes or `@apply` for shared patterns (`btn-primary`, `card`, etc.).
- **Updating theme tokens**:
  1. Adjust color values or spacing in `tailwind.config.ts`.
  2. Restart `npm run dev` if tokens change (Tailwind needs to rebuild).
  3. Validate dark/light legibility—`ThemeScript` toggles the `dark` class on `<html>`.

---

## 🔍 SEO & Performance Tooling

- Canonical URLs, Open Graph, and Twitter metadata are hydrated from `siteConfig` to keep environments consistent.
- `src/app/sitemap.ts` and `src/app/robots.ts` are generated at build time so deployments (Vercel, Render, etc.) automatically serve current routes.
- Favicons and a web manifest ship with multiple icon sizes for device support.
- Lighthouse target: **90+** across Performance, Accessibility, Best Practices, and SEO.

---

## 📈 Analytics Setup

1. Configure your analytics provider (e.g., host Umami or enable Vercel Analytics).
2. Update [`AnalyticsPlaceholder`](./src/components/system/analytics-placeholder.tsx) with the production script URL and site identifier.
3. Deploy—scripts load only in production builds.
4. Document the provider + access details for the go-to-market team.

---

## 🚢 Deployment

### Deploy to Vercel (recommended)
1. Push changes to GitHub.
2. Import the repository into Vercel and select the Next.js preset.
3. Set environment variables (see table above).
4. Add custom domains (`cosos.xyz`, `www.cosos.xyz`).

### Deploy to Render / other hosts
- Next.js static output works as long as you run `npm run build && npm run start`.
- No extra configuration is required beyond the environment variables and a Node 18+ runtime.

---

## ✅ Manual QA Checklist

Use this checklist before shipping significant changes:

| Check | Status |
| --- | --- |
| Lighthouse audit ≥ 90 across Performance / Accessibility / Best Practices / SEO | ☐ |
| Responsive review at 320px, 768px, 1024px, 1440px | ☐ |
| Keyboard navigation (skip links, focus rings, CTA buttons) | ☐ |
| Header + footer navigation links resolve to the correct routes | ☐ |
| Dark/light mode switch respects saved/system preference without hydration warnings | ☐ |
| Analytics placeholder configured with production credentials | ☐ |

Record findings (and any follow-up issues) alongside deployment notes to keep stakeholders aligned.

---

## 📝 License & Contact

- License: Proprietary – All rights reserved.
- Questions? Reach out at [hello@cosos.xyz](mailto:hello@cosos.xyz).

Built with ❤️ for founders who want to stay in momentum.
