# Capital Compass — CLAUDE.md

> **Start here.** Read this entire file before writing any code.
> This is the authoritative onboarding guide for every Claude Code session.

---

## 1. What This Project Is

**Capital Compass** is a financial literacy and investment research platform for retail investors.

**The problem it solves:** Most retail investors don't understand how businesses actually make money. They use Instagram daily but don't know the ad revenue model. They invest in Tesla without understanding that automotive margins, energy storage, and regulatory credits are completely different businesses. The information exists — it's buried in 10-K filings and analyst reports — but it's inaccessible.

**What the product does (now and in the future):**

1. **Education layer (built)** — Curated editorial content for 35 industry subsectors: sector outlook, investment risks, opportunities, representative companies with live/mock stock prices, and recent news.
2. **Sector Learning Modules (Phase 1B — next up)** — Card-based learning content that teaches users how each sector works and what drives it.
3. **Business Model Intelligence (Phase 3 — flagship paid feature)** — AI-powered search that synthesizes SEC filings (10-K, 10-Q) into plain-English explanations of how any US public company makes money.

The MVP (Phase 1A) is complete and working. The roadmap transforms it from a useful reference tool into a monetizable platform. Read `docs/Capital_Compass_PRD_v2.md` for the full product spec before starting any Phase 2+ work.

**GitHub:** `https://github.com/shobhitm23/Campaign-Compass`

---

## 2. Planning & Reference Documents

All planning documents live in `docs/`. Read these before making significant changes.

| File | What it contains |
|---|---|
| `docs/Capital_Compass_PRD_v2.md` | Full product requirements: vision, all feature specs, roadmap phases, pricing, competitive analysis, success metrics |
| `docs/CURRENT_STATE.md` | Build snapshot: what's done, all API endpoints, data coverage, verified working features as of 2026-02-18 |

Both are plain markdown — readable directly in Claude Code.

---

## 3. Tech Stack & Rationale

### Backend (Node.js / Express)

| Package | Version | Why it was chosen |
|---|---|---|
| `express` | ^4.18.3 | Minimal HTTP framework — this is a thin API layer over static content and two external services. No ORM, no framework overhead needed. |
| `cors` | ^2.8.5 | Enables the dev frontend (port 5173) to call the backend (port 3001) during development. |
| `dotenv` | ^16.4.5 | Loads `backend/.env` at startup. Keeps API keys out of source code. |
| `node-cache` | ^5.1.2 | In-process TTL cache. No Redis needed at MVP scale — prevents hammering external APIs without infra overhead. |
| `yahoo-finance2` | ^2.11.3 | Free stock quotes with no API key required. **Critical caveat: ESM-only package** — requires a dynamic `import()` workaround in this CommonJS backend. See Section 6. |
| `axios` | ^1.6.8 | HTTP client for calling NewsAPI. Simpler error handling than `fetch`. |
| `nodemon` | ^3.1.0 (dev) | Auto-restarts the server on file save during development. |

### Frontend (React / Vite / Tailwind)

| Package | Version | Why it was chosen |
|---|---|---|
| `react` + `react-dom` | ^18.3.1 | Component model fits the repeating panel structure (outlook, risks, opportunities per subsector). |
| `react-router-dom` | ^6.22.3 | Client-side routing. The URL encodes which subsector is selected — browser back/forward works naturally without any extra state management. |
| `axios` | ^1.6.8 | Same HTTP client as the backend. Consistent error handling patterns across the stack. |
| `vite` | ^5.2.8 | Fast dev server with HMR. Built-in `/api` proxy removes CORS friction during development. |
| `tailwindcss` | ^3.4.3 | Utility-first CSS. Enables fast, consistent UI without a component library or custom stylesheet sprawl. |
| `autoprefixer` + `postcss` | ^10.4.19 / ^8.4.38 | Required by Tailwind. No direct usage needed. |

### Phase 2+ technology additions (not yet installed)

These will be needed when Phase 2A begins. Do not install them speculatively.

| Technology | Phase | Purpose |
|---|---|---|
| PostgreSQL | 2A | Users, preferences, watchlists, usage tracking |
| Redis | 2A + 3 | Session storage, AI summary cache |
| Stripe | 3 | Subscription billing ($15/mo or $120/yr) |
| Resend or SendGrid | 2A | Auth emails, weekly digests, daily alerts |
| OpenAI or Anthropic API | 3 | AI synthesis for Business Model Intelligence |
| SEC EDGAR | 3 | 10-K/10-Q fetching and parsing |
| Bing Search API | 3 | Real-time earnings and analyst coverage |

---

## 4. Project Structure

Every file and folder explained. Read this before creating or moving files.

```
capital_compass/
├── CLAUDE.md                          ← you are here
├── .gitignore                         ← excludes node_modules/, dist/, .env*, .claude/
│
├── docs/                              ← all planning and reference documents
│   ├── Capital_Compass_PRD_v2.md      ← FULL PRD — read before Phase 2+ work
│   ├── Capital_Compass_PRD_v2.docx    ← original source (same content as .md)
│   └── CURRENT_STATE.md               ← build snapshot; update when features ship
│
├── backend/                           ← Node.js/Express API server
│   ├── server.js                      ← entry point: loads env, mounts cors + /api router, listens on PORT
│   ├── package.json                   ← dependencies; CommonJS (no "type":"module")
│   ├── .env.example                   ← template; copy to backend/.env and fill keys
│   │
│   ├── config/
│   │   └── constants.js               ← single home for ALL magic numbers:
│   │                                     PORT, STOCK_CACHE_TTL (6h), NEWS_CACHE_TTL (1h),
│   │                                     NEWS_API_BASE, DEFAULT_NEWS_DAYS (7), MAX_TICKERS_PER_REQUEST (20)
│   │
│   ├── data/
│   │   └── sectors.js                 ← THE editorial database. ~3000 lines.
│   │                                     Contains all 11 sectors and all 35 subsectors with
│   │                                     full editorial content: outlook, risks, opportunities,
│   │                                     tickers, newsQuery. Also exports sectorMap and subsectorMap
│   │                                     for O(1) lookup by ID.
│   │                                     This is content, not code. Edit here to change what users see.
│   │
│   ├── cache/
│   │   └── cacheManager.js            ← creates and exports two separate NodeCache instances:
│   │                                     stockCache (6h TTL, checkperiod 600s)
│   │                                     newsCache (1h TTL, checkperiod 120s)
│   │                                     Kept separate intentionally — see Architecture Decisions.
│   │
│   ├── mock/
│   │   ├── stockMock.js               ← ~245 tickers with realistic static quotes
│   │   │                                (price, change, changePct, marketCap, peRatio, 52w range)
│   │   │                                Used as fallback when yahoo-finance2 fails or returns nothing.
│   │   └── newsMock.js                ← 5–8 articles per subsector, all 35 covered.
│   │                                     Keyed by subsector ID. Used when NEWS_API_KEY is absent
│   │                                     or any NewsAPI call fails.
│   │
│   ├── services/
│   │   ├── stockService.js            ← fetchStocks(tickers[])
│   │   │                                Flow: stockCache hit → return cached
│   │   │                                      miss → yahoo-finance2.quote() → normalize → cache → return
│   │   │                                      error → getMockStocks(tickers) → return
│   │   │                                Max 20 tickers per call (MAX_TICKERS_PER_REQUEST).
│   │   │                                Always returns normalized objects; caller never checks source.
│   │   │
│   │   └── newsService.js             ← fetchNews(subsectorId, newsQuery, days)
│   │                                     Flow: newsCache hit → return cached
│   │                                           no API key → getMockNews(subsectorId) → return
│   │                                           has key → NewsAPI /everything → normalize → cache → return
│   │                                           error → getMockNews(subsectorId) → return
│   │                                     Cache key: "${subsectorId}:${days}"
│   │
│   └── routes/
│       ├── index.js                   ← root router: defines GET /health; mounts all sub-routers
│       ├── sectors.router.js          ← GET /api/sectors, GET /api/sectors/:sectorId
│       ├── subsectors.router.js       ← GET /api/subsectors/:subsectorId
│       ├── companies.router.js        ← GET /api/companies?tickers=A,B,C
│       └── news.router.js             ← GET /api/news?subsector=X&days=7
│
└── frontend/                          ← React 18 SPA (ESM, "type":"module")
    ├── index.html                     ← Vite HTML entry; mounts <div id="root">
    ├── package.json                   ← frontend dependencies; note "type":"module" (ESM)
    ├── vite.config.js                 ← /api proxy → http://localhost:3001 (dev only)
    ├── tailwind.config.js             ← custom brand palette: brand-{50,100,500,600,700,900}
    │                                    all map to blue family (#eff6ff → #1e3a8a)
    ├── postcss.config.js              ← tailwind + autoprefixer (Vite requirement)
    │
    └── src/
        ├── main.jsx                   ← React entry point; renders <App /> into #root
        ├── App.jsx                    ← BrowserRouter wrapping AppProvider wrapping AppShell
        │                                Routes: / → HomePage, /subsector/:subsectorId → SubsectorPage
        │                                         * → NotFound
        ├── index.css                  ← Tailwind @layer base + @layer components
        │                                The ONLY custom CSS: .sidebar-link, .sidebar-link:hover,
        │                                .sidebar-link.active (needed for NavLink's active class)
        │
        ├── api/
        │   └── client.js              ← Axios instance: baseURL '/api', timeout 10s
        │                                Import this everywhere you need to call the backend.
        │                                Never construct fetch/axios calls inline in components.
        │
        ├── context/
        │   └── AppContext.jsx         ← Global state via React Context.
        │                                State: sectors[] (fetched once on mount), sectorsLoading,
        │                                       sectorsError, sidebarOpen (mobile drawer toggle).
        │                                Exposes useApp() hook. Throws if used outside AppProvider.
        │                                Rule: Only app-wide state goes here. No per-route data.
        │
        ├── hooks/                     ← Data fetching hooks. Pattern: one hook per data type.
        │   ├── useSubsector.js        ← useSubsector(subsectorId) → {data, loading, error}
        │   │                            Checks sessionStorage first (key: "subsector:{id}").
        │   │                            Fetches GET /api/subsectors/:id on cache miss.
        │   │                            Writes result to sessionStorage for instant re-navigation.
        │   ├── useCompanies.js        ← useCompanies(tickers[]) → {data, loading, error}
        │   │                            Fetches GET /api/companies?tickers=...
        │   │                            Re-runs when tickers array changes (dependency: tickers.join(','))
        │   └── useNews.js             ← useNews(subsectorId, days=7) → {data, loading, error}
        │                                Fetches GET /api/news?subsector=...&days=...
        │
        ├── components/
        │   │
        │   ├── layout/                ← App chrome: always visible regardless of route
        │   │   ├── AppShell.jsx       ← Outer wrapper. Renders TopBar + Sidebar + <main>.
        │   │   │                        main has pt-14 (clears TopBar) and lg:pl-64 (clears Sidebar).
        │   │   │                        Content area: max-w-5xl, centered, px-4 py-6.
        │   │   ├── TopBar.jsx         ← Fixed header (z-50, h-14). Hamburger (mobile), logo, tagline.
        │   │   │                        Hamburger toggles sidebarOpen via useApp().
        │   │   └── Sidebar.jsx        ← Fixed left panel on desktop (lg:translate-x-0, w-64).
        │   │                            Overlay drawer on mobile (translate-x-full when closed).
        │   │                            Black/30 overlay behind it when open. Closes on navigation.
        │   │
        │   ├── sidebar/               ← Sidebar navigation components
        │   │   ├── SectorList.jsx     ← Maps sectors → <SectorItem> for each.
        │   │   ├── SectorItem.jsx     ← Accordion item. Sector icon + name + chevron.
        │   │   │                        Collapses/expands subsector list on click.
        │   │   │                        Auto-expands on mount if a subsector in this sector is active.
        │   │   └── SubsectorLink.jsx  ← <NavLink> to /subsector/:id with className="sidebar-link".
        │   │                            Active state: bg-blue-50, text-blue-700, font-medium.
        │   │
        │   ├── home/
        │   │   └── HomePage.jsx       ← Hero section + responsive sector card grid (1 col → 2 col → 3 col).
        │   │                            Each card: sector icon, name, description, subsector pill links.
        │   │
        │   ├── subsector/             ← Route-level components for /subsector/:id
        │   │   ├── SubsectorPage.jsx  ← Orchestrator. Calls all 3 hooks. Renders all 5 panels.
        │   │   │                        Layout: header → OutlookPanel → [RisksPanel | OpportunitiesPanel]
        │   │   │                                → CompaniesTable → NewsFeed
        │   │   ├── OutlookPanel.jsx   ← Card: summary text, timeHorizon badge, keyDrivers bullet list.
        │   │   ├── RisksPanel.jsx     ← Card: list of risk items, each with title + severity Badge + description.
        │   │   ├── OpportunitiesPanel.jsx ← Card: list of opportunity items with potential Badge + description.
        │   │   ├── CompaniesTable.jsx ← Card with responsive table. Columns hidden by breakpoint:
        │   │   │                        Name (hidden < sm), Mkt Cap (hidden < md), P/E (hidden < lg),
        │   │   │                        52W Range (hidden < xl). Always shows: Ticker, Price, Chg%.
        │   │   ├── CompanyRow.jsx     ← Table row. Green (emerald-600) for positive change, red-500 for negative.
        │   │   │                        Shows "(mock)" label next to ticker when isMock=true.
        │   │   └── NewsFeed.jsx       ← Card with article list. Shows title, description (2-line clamp),
        │   │                            source, timeAgo, external link icon. "(mock)" tag on mock articles.
        │   │
        │   └── common/                ← Reusable primitives used across multiple features
        │       ├── Card.jsx           ← White card with optional title header. Use for all panel containers.
        │       │                        Props: title (string, optional), children, className.
        │       ├── Badge.jsx          ← Colored pill badge. Two types:
        │       │                        type="severity": high=red, medium=amber, low=green
        │       │                        type="potential": high=emerald, medium=blue, low=gray
        │       ├── LoadingSpinner.jsx ← Animated spinner with text prop. Use while fetching.
        │       └── ErrorBanner.jsx    ← User-visible error alert. Use for all user-facing errors.
        │
        └── pages/
            └── NotFound.jsx           ← 404 fallback page. Linked from <Route path="*">.
```

---

## 5. API Endpoints

All endpoints are prefixed `/api`. The frontend calls them as relative paths (e.g. `/api/sectors`) via the Vite proxy in development. In production, a reverse proxy handles the rewrite.

### Endpoint reference

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/health` | Returns `{ status: 'ok' }`. Use for uptime checks. |
| `GET` | `/api/sectors` | All 11 sectors with subsector id+name stubs. Used by sidebar and home page. |
| `GET` | `/api/sectors/:sectorId` | Single sector (same shape). Rarely needed directly. |
| `GET` | `/api/subsectors/:subsectorId` | Full editorial content for one subsector. |
| `GET` | `/api/companies?tickers=A,B` | Stock quotes for comma-separated tickers. Max 20. |
| `GET` | `/api/news?subsector=X&days=7` | News articles for a subsector. `days` defaults to 7. |

### Data schemas

**Subsector** (returned by `/api/subsectors/:id` and stored in `data/sectors.js`):

```js
{
  id: 'software-saas',           // kebab-case; must be unique; used in URL + cache key + newsMock key
  name: 'Software & SaaS',
  sectorId: 'technology',        // parent sector id
  sectorName: 'Technology',      // parent sector display name
  outlook: {
    summary: '...',              // 2–3 sentences
    keyDrivers: ['...', ...],    // array of exactly 4 strings
    timeHorizon: '3–5 years',   // e.g. '2–4 years', 'Short-term', 'Long-term'
  },
  risks: [                       // 3–4 items
    { title: '...', severity: 'high', description: '...' }
    // severity: 'high' | 'medium' | 'low'
  ],
  opportunities: [               // exactly 3 items
    { title: '...', potential: 'high', description: '...' }
    // potential: 'high' | 'medium' | 'low'
  ],
  tickers: ['MSFT', 'CRM', ...], // 5–8 uppercase strings; must exist in stockMock.js
  newsQuery: 'SaaS software enterprise cloud AI', // 3–6 keywords for NewsAPI
}
```

**Company quote** (returned by `/api/companies` from stockService or stockMock):

```js
{
  ticker: 'MSFT',
  name: 'Microsoft Corporation',
  price: 415.32,
  change: 2.14,
  changePct: 0.52,
  marketCap: 3090000000000,
  peRatio: 36.2,
  week52High: 468.35,
  week52Low: 309.45,
  isMock: false,   // true when sourced from stockMock.js
}
```

**Article** (returned by `/api/news` from newsService or newsMock):

```js
{
  id: 'live-0-1708000000000',   // or 'mock-saas-0' style for mock articles
  title: '...',
  description: '...',
  source: 'Bloomberg',
  url: 'https://...',
  publishedAt: '2026-02-15T14:30:00Z',
  isMock: false,   // true when sourced from newsMock.js
}
```

---

## 6. External APIs

### yahoo-finance2 — Stock Quotes

- **API key required:** No
- **Rate limits:** Unofficial and undocumented. Treat as fragile. Never call without checking cache first.
- **Cache TTL:** 6 hours (`STOCK_CACHE_TTL` in `constants.js`). Cached per individual ticker.
- **CRITICAL — ESM workaround:** `yahoo-finance2` is ESM-only. The backend is CommonJS (`require` throughout). You cannot `require('yahoo-finance2')`. The solution in `stockService.js`:

  ```js
  let _yahooFinance = null;
  async function getYahooFinance() {
    if (!_yahooFinance) {
      const mod = await import('yahoo-finance2');
      _yahooFinance = mod.default;
    }
    return _yahooFinance;
  }
  ```

  This lazy-loads the ESM module once, caches it in module scope, and reuses it on subsequent calls. **Do not change this pattern.** Do not `require()` it. Do not switch the whole backend to ESM to "fix" this — that would require converting every `require()` call.

- **Failure mode:** Any error from yahoo-finance2 → `console.warn` → return mock data with `isMock: true`. No error is ever thrown to the route layer.

### NewsAPI — News Articles

- **API key required:** Optional. App works fully without it (serves mock news).
- **Free tier limits:** 100 requests/day, 1-month historical window, no commercial use.
- **Where to get a key:** `https://newsapi.org/register`
- **Endpoint used:** `GET https://newsapi.org/v2/everything` with params: `q`, `from`, `sortBy=publishedAt`, `pageSize=10`, `language=en`, `apiKey`
- **Cache TTL:** 1 hour (`NEWS_CACHE_TTL` in `constants.js`). Cache key: `"${subsectorId}:${days}"`.
- **Failure mode:** No key, placeholder key (`your_newsapi_key_here`), or any HTTP error → return `getMockNews(subsectorId)`. No error thrown.
- **`newsQuery` field:** Each subsector in `sectors.js` has a `newsQuery` string (3–6 keywords). This is the `q` parameter sent to NewsAPI. Too broad → irrelevant results. Too narrow → no results.

### SEC EDGAR — 10-K / 10-Q (Phase 3 only — not yet integrated)

- Free public API. No key required.
- Will power the Business Model Intelligence feature.
- Full integration spec is in `docs/Capital_Compass_PRD_v2.md` under "Business Model Intelligence Pipeline".
- Do not implement until Phase 3 begins.

---

## 7. Environment Variables

All variables live in `backend/.env`. There is no `.env` file in the frontend.

To set up: `cp backend/.env.example backend/.env` then fill in any optional keys.

### Current variables

| Variable | Required | Default | Effect |
|---|---|---|---|
| `PORT` | No | `3001` | Port the Express server listens on |
| `NEWS_API_KEY` | No | *(unset)* | If set to a valid key, enables live news from NewsAPI. If absent or set to the placeholder, mock news is served automatically. |

### Phase 2+ variables (not needed yet)

| Variable | Phase | Purpose |
|---|---|---|
| `DATABASE_URL` | 2A | PostgreSQL connection string |
| `REDIS_URL` | 2A | Redis connection string |
| `STRIPE_SECRET_KEY` | 3 | Stripe billing |
| `STRIPE_WEBHOOK_SECRET` | 3 | Stripe webhook verification |
| `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` | 3 | AI synthesis |
| `BING_SEARCH_API_KEY` | 3 | Web search supplement |
| `RESEND_API_KEY` | 2A | Transactional email |

When adding new variables: add them to `backend/.env.example` with a comment explaining what they do and where to get them.

---

## 8. Running the Project

```bash
# Terminal 1 — backend
cd backend
npm install       # first time only
npm run dev       # nodemon; auto-restarts; http://localhost:3001

# Terminal 2 — frontend
cd frontend
npm install       # first time only
npm run dev       # Vite dev server; HMR enabled; http://localhost:5173

# Frontend production build
cd frontend
npm run build     # outputs to frontend/dist/ — verified: 0 errors, 218KB JS bundle
npm run preview   # serves dist/ locally for final check before deploy
```

**No API keys needed to run the app.** Everything works on mock data out of the box.

To test live stock quotes: just run both servers. `yahoo-finance2` works without any key.
To test live news: add `NEWS_API_KEY=your_key` to `backend/.env`.

---

## 9. Coding Conventions

Follow these patterns exactly. Do not introduce new patterns without a good reason.

### Backend

**Module system: CommonJS only**
The backend uses `require` / `module.exports` throughout. The one exception is `yahoo-finance2` which uses dynamic `import()`. Do not add `import`/`export` syntax to any backend file.

**Route handlers are thin**
Routes parse and validate request params, call a service function, and return JSON. Business logic lives in `services/`. Never put data transformation, caching, or API calls inside a route handler.

**Services normalize output**
Both services (`stockService`, `newsService`) return the same schema regardless of whether data came from a live API or mock. The caller — including route handlers and the frontend — never needs to check the data source. Only `isMock: true` distinguishes them.

**Error handling in services**
Wrap every external API call in `try/catch`. On error: `console.warn('[serviceName] error message:', err.message)`, then return mock data. Never `throw` from a service function — errors must not reach the route layer.

**All constants in one place**
Every magic number (TTL, limit, URL) goes in `backend/config/constants.js`. Import from there. Never hardcode values in service or route files.

**Cache key conventions**
Stock cache: keyed by individual ticker string (e.g. `'MSFT'`).
News cache: keyed by `"${subsectorId}:${days}"` (e.g. `'software-saas:7'`).

---

### Frontend

**One hook per data type**
`useSubsector`, `useCompanies`, `useNews` each handle one endpoint. Every hook returns `{ data, loading, error }`. When adding new data fetching, add a new hook in `src/hooks/` — do not fetch inline in components.

**Components receive data via props or hooks — never fetch directly**
`SubsectorPage` is the only orchestrator that calls all three hooks and passes results down as props. Leaf components like `CompaniesTable` and `NewsFeed` receive data as props. They do not call hooks or `client.get()` themselves.

**URL is the source of truth for navigation state**
`useParams()` provides the `subsectorId`. Do not store the active subsector in context, local state, or a global store. Deep-linking to `/subsector/semiconductors` must work on page load, and it does because the URL is the source.

**Context holds only app-wide shared state**
`AppContext` holds: `sectors[]` (fetched once, consumed by sidebar and home page) and `sidebarOpen` (consumed by TopBar and Sidebar). Do not add per-route data or frequently-changing state to context.

**sessionStorage for static editorial content only**
`useSubsector` writes fetched data to `sessionStorage` with key `subsector:{id}`. This is safe because editorial content in `sectors.js` never changes mid-session. Do not apply this pattern to live data (stocks, news) — those should always refetch.

**Tailwind only — no inline styles, no extra CSS files**
All styling is done with Tailwind utility classes. The only exception is `.sidebar-link` in `index.css`, which must be a `@layer components` definition because react-router-dom's `NavLink` applies an `active` class at runtime that can't be targeted with Tailwind alone. Do not add more classes to `index.css`.

**Brand color usage**
The custom palette in `tailwind.config.js` defines `brand-{50,100,500,600,700,900}` (all blue tones). Use `brand-*` for primary brand elements. Use standard Tailwind blue/gray/emerald/red/amber for semantic meaning (success, error, etc.).

**Badge component rules**
Always use `<Badge type="severity" value="high" />` or `<Badge type="potential" value="high" />`. The accepted values:
- `severity`: `'high'` (red) | `'medium'` (amber) | `'low'` (green)
- `potential`: `'high'` (emerald) | `'medium'` (blue) | `'low'` (gray)

Do not invent new badge types. If a new type is needed, update `Badge.jsx`.

**Error rendering**
Always use `<ErrorBanner message={...} />` for user-visible errors. Always log the raw error first: `console.error('[componentName] error:', err)`.

**Responsive table column visibility**
The `CompaniesTable` / `CompanyRow` pattern hides columns at specific breakpoints:
- Always visible: Ticker, Price, Chg%
- `hidden sm:table-cell`: Name
- `hidden md:table-cell`: Market Cap
- `hidden lg:table-cell`: P/E Ratio
- `hidden xl:table-cell`: 52W Range

If you change column visibility breakpoints, you must update both the `<th>` in `CompaniesTable.jsx` and the corresponding `<td>` in `CompanyRow.jsx` at the same time.

---

### Editorial data (`backend/data/sectors.js`)

This is a content file, not a code file. Treat changes as editorial work, not engineering work.

**Adding a new subsector:**
1. Add the entry to the correct sector's `subsectors` array in `data/sectors.js`, following the exact schema in Section 5.
2. Add all tickers to `backend/mock/stockMock.js` (the `getMockStocks` function needs to know about them).
3. Add 5–8 mock articles to `backend/mock/newsMock.js`, keyed by the new subsector's `id`.
4. No route, service, or frontend code changes are needed.

**Subsector ID rules:**
- Must be kebab-case (e.g. `'cloud-infrastructure'`)
- Must be globally unique across all 35 subsectors
- The ID is used simultaneously as: URL param, sessionStorage cache key, newsCache key, `newsMock.js` map key — keep all in sync
- Do not rename an ID without updating mock files

---

## 10. Phase Scope Boundaries

### Phase 1A — MVP ✅ COMPLETE

Do not re-implement, restructure, or "improve" anything in this list without an explicit request.

- 11 sectors, 35 subsectors, full editorial content in `data/sectors.js`
- Express REST API with 5 endpoints + health check
- yahoo-finance2 stock quotes: 6h cache, per-ticker granularity, mock fallback
- NewsAPI news: 1h cache, subsector+days cache key, mock fallback
- React/Vite frontend with sidebar navigation
- Home page: sector grid with subsector pill links
- Subsector page: 5 panels (Outlook, Risks, Opportunities, Companies, News)
- Mobile-responsive sidebar: overlay drawer, auto-close on navigation
- sessionStorage cache for subsector editorial content
- All error states handled — no broken UI states possible
- `(mock)` indicators on company rows and news articles
- Verified build: `vite build` → 0 errors, 218KB JS bundle

---

### Phase 1B — Sector Learning Modules (NEXT UP)

**Goal:** Free educational layer. Differentiates the product from generic data aggregators and drives traffic.

**Deliverables:**
- New data file: `backend/data/sectorLearning.js` — 11 sector entries × 7 cards each = 77 cards
- New backend endpoint: `GET /api/learn/:sectorId` → returns card array for that sector
- New frontend component: `LearningModule` — card carousel with forward/back navigation and progress indicator
- Progress tracking: `localStorage` keyed by sector ID (no auth required)
- Email capture form: displayed on learning module completion
- Analytics: lightweight integration (Plausible or similar)

**Card structure (7 cards per sector):**
1. What This Sector Does
2. How It Makes Money
3. What Moves It
4. Current State
5. Key Terms
6. Sector Connections
7. Questions Before Investing

**Scope boundary:** Sector-level only (11 modules). Subsector-level learning modules are Phase 2A.
**Free/paid:** All 11 sector modules are free tier.

---

### Phase 2A — User Accounts + Subsector Learning

**Goal:** Enable retention, personalization, and paid content gating.

**Deliverables:**
- Email-based authentication (magic link or password — TBD)
- PostgreSQL database for users, preferences, usage tracking
- Watchlist (save sectors/subsectors; unlimited for paid, 3 for free)
- Subsector learning modules (35 subsectors × 5–7 cards; paid tier)
- Feature flags for free/paid content gating
- Weekly digest email for registered users

**New infra:** PostgreSQL, Redis (sessions), Resend or SendGrid

---

### Phase 2B — Sector Financial Literacy

**Goal:** "How to analyze" educational content that sets up the Business Model Intelligence feature as a logical next step.

**Deliverables:**
- "How to Analyze [Sector] Companies" module for all 11 sectors (paid tier)
- Content per sector: key metrics, typical margin profiles, revenue recognition patterns, red flags, comparison frameworks
- Sector comparison tables (e.g. SaaS vs Oil & Gas side by side)
- Financial glossary / terminology dictionary

**Content process:** Editorial, not AI-generated. Written by analyzing 10-Ks from 5–10 representative companies per sector. Updated quarterly.

---

### Phase 3 — Business Model Intelligence + Payments (Primary Monetization)

**Goal:** Launch the flagship paid feature and subscription billing.

**Deliverables:**
- Stripe subscription billing: $15/month or $120/year
- Business Model Search UI: search bar + structured result view
- SEC EDGAR integration: fetch 10-K/10-Q, extract Business Description + Risk Factors + MD&A
- Web search layer (Bing API) for recent earnings / analyst coverage
- AI synthesis pipeline: query → ticker lookup → EDGAR fetch → web search → LLM → structured response
- Redis cache: pre-generated summaries for S&P 500, refreshed weekly
- Query usage tracking: 50 queries/month per paid user; rate-limit on overage

**AI response structure per company:**
- Revenue Streams (with % breakdown)
- Key Metrics (what numbers matter for this business model)
- Cost Structure (major cost drivers and leverage)
- Key Dependencies (supply chain, partnerships, regulatory)
- Business Model Risk (structural vulnerabilities)
- Peer Comparison (vs. direct competitors)

**Cost targets:** ~$0.10/query AI cost. Extract only relevant 10-K sections before LLM call (reduces tokens ~80%). Pre-generate S&P 500 on weekly schedule. Target: AI cost < $6/user/month at 50 queries.

---

### Phase 4 — Scale & Expansion (Future, do not build)

- Portfolio integration (upload holdings → sector exposure view)
- Third-party ratings display (Morningstar, Zacks)
- Sector comparison tools (head-to-head analysis)
- B2B API licensing (sell intelligence to fintechs/robo-advisors)
- International expansion (non-US public companies)

---

## 11. Product Tiers

Pricing defined in the PRD. Summarized here for scope reference.

| Feature | Free | Premium ($15/mo or $120/yr) |
|---|---|---|
| All sector/subsector data (outlook, risks, companies, news) | ✅ | ✅ |
| Sector learning modules (11) | ✅ | ✅ |
| News feed, 7 days | ✅ | ✅ |
| Save up to 3 sectors (watchlist) | ✅ | ✅ |
| Weekly email digest | ✅ | ✅ |
| Subsector learning modules (55) | — | ✅ |
| Extended news, 30 days | — | ✅ |
| Unlimited watchlist | — | ✅ |
| Daily sector alerts | — | ✅ |
| Sector Financial Literacy modules (how to analyze) | — | ✅ |
| Business Model Intelligence (50 queries/month) | — | ✅ |
| Downloadable PDF reports | — | ✅ |
| Sector comparison tools | — | ✅ |

---

## 12. Architectural Decisions (Already Made — Do Not Revisit)

These decisions were made deliberately. Future sessions should not re-litigate them. If a decision needs to change, make a conscious case for it first.

---

**Decision 1: Editorial content lives in code, not a database.**

All sector and subsector content is in `backend/data/sectors.js`, versioned alongside the codebase. This gives zero read latency, no migration complexity, and history tracked in git. The only reason to move to a database is if content needs non-developer editing (a CMS) or if the file becomes too large to manage — neither is true yet.

---

**Decision 2: Two separate NodeCache instances, never one shared cache.**

`stockCache` (6h TTL) and `newsCache` (1h TTL) are separate objects created in `cacheManager.js`. A single shared cache would create TTL collision risk — a short-TTL item expiring could trigger a flush that evicts long-TTL items, or vice versa. Keep them separate forever, even if TTLs are ever aligned.

---

**Decision 3: Vite `/api` proxy, not CORS headers.**

The frontend calls `/api/...` (relative URLs). In dev, Vite rewrites these to `http://localhost:3001`. In production, a reverse proxy (nginx, Vercel edge, etc.) does the same. This means zero CORS configuration is needed on either side, and the exact same frontend code works in both environments without `NODE_ENV` checks.

---

**Decision 4: URL is the source of truth for which subsector is shown.**

`SubsectorPage` reads `subsectorId` from `useParams()` — it doesn't come from context, router state, or prop drilling. This means `/subsector/semiconductors` works as a deep link, the browser back button is naturally correct, and React Router handles all the bookkeeping. Do not replace this with a context-based selection model.

---

**Decision 5: Mock-first fallback — services never throw.**

Both services (`stockService`, `newsService`) catch all external API errors silently and return mock data. The route layer receives a valid array every time. The UI cannot break due to API unavailability. This is intentional: the app must work fully in any environment, including no internet access. The `isMock: true` flag lets the UI show a "mock" indicator without affecting behavior.

---

**Decision 6: yahoo-finance2 dynamic import is the only ESM workaround.**

The package has no CommonJS export. The backend is CommonJS. The chosen solution (lazy `import()`, result cached in module-scope variable) is minimal, correct, and adds zero dependencies. The alternative — converting the backend to ESM — would require changing every single `require()` call and is not worth the churn at this stage.

---

**Decision 7: sessionStorage for subsector editorial content — not for live data.**

`useSubsector` stores the API response in `sessionStorage` with key `subsector:{id}`. Editorial content never changes within a browser session, so this cache is always valid. Re-navigation to a subsector is instant. This pattern must not be extended to live data (stock quotes, news) — those should always re-fetch because their TTL is server-side, not session-scoped.

---

## 13. Known Issues & Carry-Forward Notes

**`BRK-B` ticker hyphen**
Works fine in mock data. If it's ever passed raw as a URL query param to an external API (not Yahoo Finance), it may need `encodeURIComponent`. Route handlers currently do no URL encoding on ticker strings.

**No input validation on query params**
`tickers`, `days`, and `subsector` params are checked for presence but not sanitized. Malformed values are silently ignored or return empty results. There is no injection risk (no SQL, no `eval`), but validation should be hardened before a public launch.

**35 of the planned 55 subsectors are built**
20 more can be added purely through `data/sectors.js`, `mock/stockMock.js`, and `mock/newsMock.js` — no route or service code changes needed.

**No tests exist**
Zero unit, integration, or E2E tests. Before Phase 2 goes live: add Vitest for frontend hooks and components, Supertest for backend route handlers.

**No production deployment configuration**
No Dockerfile, no PM2 config, no nginx config, no environment secret management. This is needed before any paid-tier launch.

**`docs/CURRENT_STATE.md` may lag behind**
Last verified: 2026-02-18. Update it whenever a significant feature ships or a new endpoint is added.
