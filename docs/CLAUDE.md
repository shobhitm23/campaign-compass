# Capital Compass — CLAUDE.md

> **Onboarding guide for Claude Code.** Read this entire file before touching any code.
> Source of truth for architecture, conventions, scope boundaries, and design decisions.

---

## 1. Project Name & Purpose

**Capital Compass** is a financial literacy and investment research platform for retail investors.

The core insight: most retail investors don't understand how businesses actually make money. They use a product daily (Instagram, Netflix, Spotify) but couldn't explain the underlying revenue model or the metrics that drive it. Capital Compass solves this by combining two things:

1. **Education layer** — curated, editorial content that explains how 35 industry subsectors work: outlook, risks, opportunities, key companies, and recent news.
2. **Business Model Intelligence** (Phase 3 feature, not yet built) — an AI-powered search tool that synthesizes SEC filings (10-K, 10-Q) into plain-English explanations of how any US public company makes money.

The MVP (Phase 1A) is complete. It delivers the education layer across 11 sectors and 35 subsectors. The roadmap through Phase 3 transforms it into a monetizable product with user accounts and AI-powered company research.

**GitHub repo:** `https://github.com/shobhitm23/capital-compass`

---

## 2. Docs & Planning Files

All planning documents live in `docs/`:

| File | Purpose |
|---|---|
| `docs/Capital_Compass_PRD_v2.docx` | Full PRD: product vision, feature specs, roadmap, pricing, competitive analysis |
| `docs/CURRENT_STATE.md` | Build snapshot: what's done, API endpoints, data coverage, verified working features |

Read the PRD before starting any Phase 2+ work. It contains the canonical feature specs.

---

## 3. Tech Stack & Rationale

### Backend

| Package | Version | Why chosen |
|---|---|---|
| `express` | ^4.18.3 | Minimal HTTP framework — this is a thin API layer over static content and two external services; no ORM or heavy framework needed |
| `cors` | ^2.8.5 | Enables dev frontend (port 5173) to reach backend (port 3001) in development |
| `dotenv` | ^16.4.5 | Standard `.env` loading — keeps API keys out of source |
| `node-cache` | ^5.1.2 | In-process TTL cache — no Redis needed at MVP scale; prevents hammering external APIs |
| `yahoo-finance2` | ^2.11.3 | Free stock quotes with no API key required. **ESM-only** — must be loaded with dynamic `import()` in this CommonJS backend |
| `axios` | ^1.6.8 | HTTP client for calling NewsAPI; simpler error handling than `fetch` |
| `nodemon` | ^3.1.0 (dev) | Auto-restarts server on file change |

### Frontend

| Package | Version | Why chosen |
|---|---|---|
| `react` + `react-dom` | ^18.3.1 | Component model fits the repeating panel structure per subsector |
| `react-router-dom` | ^6.22.3 | Client-side routing; URL encodes navigation state so back/forward works naturally |
| `axios` | ^1.6.8 | Consistent HTTP client; shared familiarity with backend |
| `vite` | ^5.2.8 | Fast dev server with HMR; built-in `/api` proxy removes CORS friction in dev |
| `tailwindcss` | ^3.4.3 | Utility-first CSS; enables fast, consistent UI without a component library |

### Phase 2+ additions (not yet installed — see PRD)

When Phase 2A begins: PostgreSQL (users/watchlists), Redis (session + AI cache), Stripe (billing), Resend/SendGrid (email), OpenAI or Anthropic API (AI synthesis), SEC EDGAR integration.

---

## 4. Project Structure

```
capital_compass/
├── CLAUDE.md                          ← this file
├── docs/
│   ├── Capital_Compass_PRD_v2.docx    ← full product requirements document
│   └── CURRENT_STATE.md               ← build snapshot (keep updated as work progresses)
├── .gitignore                         ← excludes node_modules/, dist/, .env*, .claude/
│
├── backend/                           ← Node.js/Express API server
│   ├── server.js                      ← entry point; mounts /api router; reads PORT from env
│   ├── package.json
│   ├── .env.example                   ← copy to .env and fill in real keys
│   │
│   ├── config/
│   │   └── constants.js               ← ALL magic numbers live here: PORT, TTLs, API URLs, limits
│   │
│   ├── data/
│   │   └── sectors.js                 ← THE editorial database. All 11 sectors, 35 subsectors.
│   │                                     ~3000 lines. This is content, not code — edit to change
│   │                                     what users see. Adding a subsector? Only edit this file
│   │                                     + mock/stockMock.js + mock/newsMock.js.
│   │
│   ├── cache/
│   │   └── cacheManager.js            ← exports stockCache (6h TTL) and newsCache (1h TTL)
│   │                                     Two separate NodeCache instances — intentional.
│   │
│   ├── mock/
│   │   ├── stockMock.js               ← ~245 tickers with realistic static price/change/marketCap/PE
│   │   └── newsMock.js                ← 5–8 realistic articles per subsector, all 35 covered
│   │                                     Used whenever API keys are absent or live calls fail.
│   │
│   ├── services/
│   │   ├── stockService.js            ← fetchStocks(tickers[]): checks cache → yahoo-finance2 → mock
│   │   └── newsService.js             ← fetchNews(subsectorId, newsQuery, days): checks cache → NewsAPI → mock
│   │
│   └── routes/
│       ├── index.js                   ← mounts all sub-routers; defines /health
│       ├── sectors.router.js          ← GET /api/sectors, GET /api/sectors/:sectorId
│       ├── subsectors.router.js       ← GET /api/subsectors/:subsectorId
│       ├── companies.router.js        ← GET /api/companies?tickers=A,B,C
│       └── news.router.js             ← GET /api/news?subsector=X&days=7
│
└── frontend/                          ← React/Vite SPA
    ├── index.html
    ├── package.json
    ├── vite.config.js                 ← /api proxy → http://localhost:3001 (dev only)
    ├── tailwind.config.js             ← brand color palette: `brand-{50,100,500,600,700,900}`
    ├── postcss.config.js
    │
    └── src/
        ├── main.jsx                   ← React entry; renders <App /> into #root
        ├── App.jsx                    ← BrowserRouter + route table
        ├── index.css                  ← Tailwind layers + .sidebar-link custom component class
        │
        ├── api/
        │   └── client.js              ← Axios instance; baseURL '/api'; 10s timeout
        │
        ├── context/
        │   └── AppContext.jsx         ← Global state: sectors list (fetched once on mount),
        │                                sidebarOpen (mobile drawer). Exposes useApp() hook.
        │                                Do not add per-route data here.
        │
        ├── hooks/                     ← One hook per data type. All return { data, loading, error }.
        │   ├── useSubsector.js        ← GET /api/subsectors/:id + sessionStorage cache
        │   ├── useCompanies.js        ← GET /api/companies?tickers=...
        │   └── useNews.js             ← GET /api/news?subsector=...&days=7
        │
        ├── components/
        │   ├── layout/
        │   │   ├── AppShell.jsx       ← Outer wrapper: TopBar + Sidebar + <main pt-14 lg:pl-64>
        │   │   ├── TopBar.jsx         ← Fixed header (h-14): hamburger, logo, tagline
        │   │   └── Sidebar.jsx        ← Fixed w-64 on desktop; overlay drawer on mobile
        │   │
        │   ├── sidebar/
        │   │   ├── SectorList.jsx     ← Renders SectorItem for each sector
        │   │   ├── SectorItem.jsx     ← Accordion: icon + sector name, toggles subsector list;
        │   │   │                        auto-expands if active subsector is in this sector
        │   │   └── SubsectorLink.jsx  ← NavLink with .sidebar-link class; active = blue-50/blue-700
        │   │
        │   ├── home/
        │   │   └── HomePage.jsx       ← Hero + responsive sector grid (1/2/3 cols) with subsector pills
        │   │
        │   ├── subsector/
        │   │   ├── SubsectorPage.jsx  ← Route component; calls all 3 hooks; orchestrates 5 panels
        │   │   ├── OutlookPanel.jsx   ← Summary + time horizon badge + key drivers list
        │   │   ├── RisksPanel.jsx     ← Risk items with severity badges (high/medium/low)
        │   │   ├── OpportunitiesPanel.jsx ← Opportunity items with potential badges
        │   │   ├── CompaniesTable.jsx ← Responsive table; columns hidden below sm/md/lg/xl
        │   │   ├── CompanyRow.jsx     ← Green/red change coloring; (mock) label on ticker
        │   │   └── NewsFeed.jsx       ← Article list with timeAgo, source, external link, (mock) tag
        │   │
        │   └── common/
        │       ├── Card.jsx           ← White card with optional title header
        │       ├── Badge.jsx          ← type="severity" | type="potential"; see Badge rules below
        │       ├── LoadingSpinner.jsx ← Animated spinner with text prop
        │       └── ErrorBanner.jsx    ← User-visible error alert (use this, not raw divs)
        │
        └── pages/
            └── NotFound.jsx           ← 404 fallback
```

---

## 5. API Endpoints

All endpoints are prefixed `/api`. The frontend calls them as relative paths via the Vite proxy.

| Method | Path | Returns |
|---|---|---|
| `GET` | `/api/health` | `{ status: 'ok' }` |
| `GET` | `/api/sectors` | Array of 11 sector objects `{ id, name, icon, description, subsectors: [{id, name}] }` |
| `GET` | `/api/sectors/:sectorId` | Single sector (same shape) |
| `GET` | `/api/subsectors/:subsectorId` | Full editorial object (see schema below) |
| `GET` | `/api/companies?tickers=A,B` | Array of quote objects (see schema below) |
| `GET` | `/api/news?subsector=X&days=7` | Array of article objects (see schema below) |

### Subsector object schema (from `data/sectors.js`)

```js
{
  id: 'software-saas',           // kebab-case; used in URL, cache key, and newsMock.js key
  name: 'Software & SaaS',
  sectorId: 'technology',
  sectorName: 'Technology',
  outlook: {
    summary: '...',              // 2–3 sentences
    keyDrivers: ['...', ...],    // exactly 4 items
    timeHorizon: '3–5 years',   // format: 'N–N years' or 'Short/Medium/Long-term'
  },
  risks: [
    {
      title: '...',
      severity: 'high',          // 'high' | 'medium' | 'low'
      description: '...',
    },
    // 3–4 items total
  ],
  opportunities: [
    {
      title: '...',
      potential: 'high',         // 'high' | 'medium' | 'low'
      description: '...',
    },
    // exactly 3 items
  ],
  tickers: ['MSFT', 'CRM', ...], // 5–8 uppercase tickers
  newsQuery: 'SaaS software enterprise cloud AI',  // 3–6 keywords for NewsAPI
}
```

### Company quote schema (from stockService / stockMock)

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
  isMock: false,                 // true when data comes from mock file
}
```

### Article schema (from newsService / newsMock)

```js
{
  id: 'mock-1',
  title: '...',
  description: '...',
  source: 'Bloomberg',
  url: 'https://...',
  publishedAt: '2026-02-15T14:30:00Z',
  isMock: false,                 // true when data comes from mock file
}
```

---

## 6. External APIs

### 1. yahoo-finance2 (stock quotes)

- **API key**: None required
- **Rate limits**: Unofficial/undocumented — treat as fragile; never call without cache
- **Cache TTL**: 6 hours (`STOCK_CACHE_TTL` in `constants.js`)
- **ESM workaround** (critical): `yahoo-finance2` ships only as ESM. The backend is CommonJS. Pattern used in `stockService.js`:
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
  Do **not** `require()` it. Do **not** convert the backend to ESM without updating every `require()` call. This pattern must be preserved.
- **Failure**: Any error → silent fallback to `stockMock.js`. `isMock: true` is set on results.

### 2. NewsAPI (`newsapi.org`)

- **API key**: Optional. Without it the app serves mock news automatically.
- **Free tier**: 100 requests/day, 1-month historical window, no commercial use
- **Endpoint**: `GET https://newsapi.org/v2/everything` with `q`, `from`, `sortBy`, `language`, `pageSize` params
- **Cache TTL**: 1 hour (`NEWS_CACHE_TTL` in `constants.js`)
- **Cache key format**: `${subsectorId}:${days}` — e.g. `software-saas:7`
- **Failure**: Missing key, invalid key, or any HTTP error → silent fallback to `newsMock.js`

### 3. SEC EDGAR (Phase 3 — not yet integrated)

- Free public API at `https://efts.sec.gov/LATEST/search-index`
- Will fetch 10-K and 10-Q for the Business Model Intelligence feature
- See PRD for full spec on section extraction and AI synthesis pipeline

---

## 7. Environment Variables

All variables live in `backend/.env`. Copy `backend/.env.example` to start.

| Variable | Required | Default | Purpose |
|---|---|---|---|
| `PORT` | No | `3001` | Port the Express server listens on |
| `NEWS_API_KEY` | No | *(none)* | Enables live news from NewsAPI. If absent or set to placeholder, mock news is served automatically. |

The frontend has **no** `.env` file. The Vite proxy in `vite.config.js` is the only frontend config that touches the backend URL.

**Phase 2+ additions** (not yet needed): `DATABASE_URL`, `REDIS_URL`, `STRIPE_SECRET_KEY`, `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`, `RESEND_API_KEY`.

---

## 8. Development Commands

```bash
# Terminal 1 — backend (runs on http://localhost:3001)
cd backend
npm install        # first time only
npm run dev        # nodemon watches server.js; auto-restarts on save

# Terminal 2 — frontend (runs on http://localhost:5173)
cd frontend
npm install        # first time only
npm run dev        # Vite dev server with HMR; /api proxied to :3001

# Production build (frontend only)
cd frontend
npm run build      # outputs to frontend/dist/; previously verified: 0 errors, 218KB JS bundle
npm run preview    # serves the dist build locally for final check
```

No API keys are needed. The app runs fully on mock data out of the box.

---

## 9. Coding Conventions & Patterns

### Backend conventions

- **Module system**: CommonJS (`require` / `module.exports`) throughout. The only exception is `yahoo-finance2` loaded via dynamic `import()`. Do not mix ESM syntax into backend files.
- **Route handlers are thin**: validation and business logic go in `services/` or helpers, not route files. Route handlers only parse request params and call service functions.
- **Services return normalized objects**: callers never check whether data is live or mock. The schema is always the same; only `isMock` differs.
- **Error handling in services**: wrap live API calls in `try/catch`, log with `console.warn`, return mock. Never let an external API error propagate to the route layer.
- **No magic numbers**: all TTLs, limits, and URLs go in `backend/config/constants.js`. Import them where needed.
- **Cache keys**: use the natural identifier — `subsectorId:days` for news, individual `ticker` for stocks.

### Frontend conventions

- **One hook per data type**: `useSubsector`, `useCompanies`, `useNews`. Each returns `{ data, loading, error }`. Add new remote data fetching as a new hook in `src/hooks/`.
- **Components do not fetch directly**: they receive data as props or call hooks. `SubsectorPage` is the orchestrator — it calls all three hooks and passes data down.
- **URL is the single source of truth for navigation**: `useParams()` drives content loading. Do not store the selected subsector in context or component state.
- **Context is for app-wide shared state only**: currently `sectors` (fetched once, used by sidebar and home) and `sidebarOpen` (mobile drawer toggle). Do not put per-route or per-subsector data in `AppContext`.
- **sessionStorage for static editorial content**: `useSubsector` caches responses in `sessionStorage` because this content never changes mid-session. This makes back-navigation instant. Do not apply this to live data (companies, news).
- **Tailwind utility classes only**: no inline `style` props, no CSS modules, no additional CSS files. The only exception is `.sidebar-link` in `index.css`, which is a `@layer components` definition required because react-router-dom's `NavLink` applies an `active` class that can't be expressed with pure Tailwind.
- **Badge usage**: `<Badge type="severity" value="high" />` or `<Badge type="potential" value="medium" />`. Accepted values: severity → `high | medium | low`; potential → `high | medium | low`. Do not add new badge types without updating `Badge.jsx`.
- **Error states**: use `<ErrorBanner message={...} />` for user-facing errors. Always `console.error` the raw error first.
- **Responsive table columns**: hide with `hidden sm:table-cell` (name), `hidden md:table-cell` (market cap), `hidden lg:table-cell` (P/E), `hidden xl:table-cell` (52W range). Do not reorder or change visibility breakpoints without updating both `CompaniesTable.jsx` header and `CompanyRow.jsx` cells in sync.

### Data file conventions (`backend/data/sectors.js`)

This file is editorial content version-controlled alongside code. Treat changes as content edits.

- Subsector `id` values are kebab-case and must be unique across all 35 subsectors
- The `id` is used as the URL param, cache key, and key in `newsMock.js` — keep them in sync
- `tickers` values must exist in `stockMock.js` (add them there first)
- `newsQuery` should be 3–6 keywords — too broad returns noise, too narrow returns nothing
- Before adding a new subsector: add mock stock data to `stockMock.js` and mock articles to `newsMock.js` keyed by the new subsector `id`. No route or service code changes needed.

---

## 10. Phase Scope Boundaries

### Phase 1A — MVP (COMPLETE ✅)

Everything below is **built and working**. Do not re-implement or restructure unless explicitly asked.

- 11 sectors, 35 subsectors with full editorial content in `data/sectors.js`
- Express API with 5 endpoints
- yahoo-finance2 stock quotes with 6-hour cache + mock fallback
- NewsAPI news with 1-hour cache + mock fallback
- React/Vite frontend: sidebar navigation, home page, subsector page with 5 panels
- Mobile-responsive sidebar drawer
- All error states handled; no broken UI states possible
- sessionStorage cache for subsector content
- `(mock)` indicators on company rows and articles
- Git history on GitHub: `https://github.com/shobhitm23/capital-compass`

---

### Phase 1B — Sector Learning Modules (NEXT UP)

**Goal**: Free educational layer to differentiate the product and drive traffic.

**What to build**:
- Data structure for learning content (`backend/data/sectorLearning.js` — new file)
- Content for all 11 sectors, 7 cards each (77 cards total)
- Card carousel UI component with progress tracking (`LearningModule` component)
- New backend endpoint: `GET /api/learn/:sectorId`
- `localStorage` progress tracking (no auth required)
- Email capture on module completion
- Analytics integration (Plausible or similar)

**Card structure per sector** (7 cards):
1. What This Sector Does
2. How It Makes Money
3. What Moves It
4. Current State
5. Key Terms
6. Sector Connections
7. Questions Before Investing

**Scope boundary**: Sector-level modules only (11 modules). Subsector-level modules are Phase 2A.

---

### Phase 2A — User Accounts + Subsector Learning

**Goal**: Enable retention, personalization, and paid content gating.

**What to build**:
- Email-based authentication (magic link or password)
- Database (PostgreSQL) for users, preferences, usage tracking
- Watchlist functionality (save sectors/subsectors)
- Subsector learning modules (35 subsectors × 5–7 cards)
- Feature flagging for free/paid content gating
- Weekly active user / email digest infrastructure

**New infrastructure needed**: PostgreSQL, Redis (sessions), Resend or SendGrid (email)

---

### Phase 2B — Sector Financial Literacy

**Goal**: "How to analyze" content that sets up the Business Model Intelligence feature.

**What to build**:
- Financial literacy modules for all 11 sectors (paid tier)
- Key metrics per sector (ARR for SaaS, same-store sales for retail, reserves for banks)
- Typical margin profiles, revenue recognition patterns, red flags
- Comparison tables within sectors
- Financial glossary / dictionary

**Content note**: This is editorial, not AI-generated. Created by analyzing 10-Ks from 5–10 representative companies per sector. Updated quarterly.

---

### Phase 3 — Business Model Intelligence + Payments (PRIMARY MONETIZATION)

**Goal**: Launch AI-powered company research and subscription billing.

**What to build**:
- Stripe subscription billing ($15/month or $120/year)
- Business Model Search UI (search bar + structured results)
- SEC EDGAR integration (fetch 10-K/10-Q, extract Business Description + Risk Factors + MD&A)
- Web search layer (Bing API) for recent earnings/analyst coverage
- AI synthesis pipeline: query → ticker lookup → EDGAR fetch → web search → LLM → structured output
- Redis cache for pre-generated S&P 500 summaries (weekly refresh)
- Query usage tracking (50 queries/month per paid user)

**AI response structure** (per company):
- Revenue Streams (with % breakdown)
- Key Metrics (what numbers matter for this business)
- Cost Structure (major cost drivers)
- Key Dependencies (supply chain, partnerships, regulatory)
- Business Model Risk (structural vulnerabilities)
- Peer Comparison (vs. direct competitors)

**Cost management**: Pre-generate and cache summaries for S&P 500. Extract only relevant 10-K sections before LLM call (reduces tokens ~80%). Use cheaper models for cache refresh; premium model for live queries. Target AI cost < $6/user/month at 50 queries.

---

### Phase 4 — Scale & Expansion (Future)

Do not build. Documented for awareness only.

- Portfolio integration (upload holdings → sector exposure view)
- Third-party ratings display (Morningstar, Zacks)
- Sector comparison tools (head-to-head analysis)
- B2B API licensing (sell intelligence to fintechs/robo-advisors)
- International expansion (non-US public companies)

---

## 11. Product Tiers (Planned)

| | Free | Premium ($15/mo) |
|---|---|---|
| Sector/subsector data views | ✅ | ✅ |
| Sector learning modules (11) | ✅ | ✅ |
| Basic news feed (7 days) | ✅ | ✅ |
| Subsector learning modules (55) | — | ✅ |
| Extended news (30 days) | — | ✅ |
| Unlimited watchlist | — | ✅ |
| Daily alerts | — | ✅ |
| Sector Financial Literacy modules | — | ✅ |
| Business Model Intelligence (50 queries/mo) | — | ✅ |
| Downloadable PDF reports | — | ✅ |
| Sector comparison tools | — | ✅ |

Annual plan: $120/year (33% discount).

---

## 12. Architectural Decisions (Already Made — Do Not Revisit)

**1. No database for editorial content.**
All sector and subsector content lives in `backend/data/sectors.js`, version-controlled alongside code. Zero read latency, no migrations, changes tracked in git. Only justified revisiting if content becomes too large for a single file or requires non-developer editing.

**2. Two separate NodeCache instances.**
`stockCache` (6h) and `newsCache` (1h) are separate objects in `cacheManager.js`. A single shared cache would risk TTL collisions where a shorter TTL flush inadvertently evicts longer-TTL entries. Keep them separate.

**3. Vite `/api` proxy.**
The frontend calls `/api/...` (relative URL). Vite rewrites this to `http://localhost:3001` in dev. In production, a reverse proxy (nginx, etc.) does the same. This means no CORS configuration is required on either side, and the same frontend code works in both environments without changes.

**4. URL-driven subsector state.**
The active subsector comes from `useParams()` in `SubsectorPage`, not from context or a global store. This means deep-linking to `/subsector/semiconductors` works correctly on page load, and the browser back button is naturally correct. Do not replace this with context-based navigation.

**5. Mock-first fallback architecture.**
Services (`stockService.js`, `newsService.js`) always attempt live data first, catch any failure silently, and return mock data. The route layer and UI cannot tell the difference except for the `isMock` flag. This guarantees the UI never breaks regardless of API availability or key configuration. This is intentional — do not add error throws to services.

**6. yahoo-finance2 dynamic import workaround.**
The package is ESM-only. The backend is CommonJS. The solution (module-scope variable, loaded via `import()` once) must be preserved. Switching the entire backend to ESM (`"type": "module"` in package.json) would require converting every `require()` call — that's a significant refactor and not worth it at current scale.

**7. sessionStorage for subsector editorial content.**
`useSubsector` caches API responses in `sessionStorage` with key `subsector:{id}`. The editorial content in `data/sectors.js` never changes mid-session, so the cache is always valid. This makes back-navigation instant (no spinner, no API call). The cache is cleared automatically on tab close. Do not apply this pattern to live data (stock quotes, news articles).

---

## 13. Known Issues & Carry-Forward Notes

- **`BRK-B` hyphen**: Works in mock data. If this ticker is ever passed raw in a URL query string to an external API, it may need `encodeURIComponent`. Route handlers currently do no URL encoding.
- **No input validation**: Query params (`tickers`, `days`, `subsector`) are not validated beyond basic checks. Malformed inputs are silently ignored or cause empty results. No injection risk (no SQL, no eval), but worth hardening before public launch.
- **35 of 55 planned subsectors built**: The original plan called for 55 subsectors. 20 more can be added purely by editing `data/sectors.js`, `mock/stockMock.js`, and `mock/newsMock.js` — no route or service code changes required.
- **No tests**: No unit, integration, or E2E tests exist. Before Phase 2 launch, add Vitest for frontend hooks/components and Supertest for backend routes.
- **No production deployment config**: No Docker, no PM2, no nginx config, no environment management for production. Needed before any paid-tier launch.
- **`docs/CURRENT_STATE.md`**: Last updated 2026-02-18. Update it when significant features are added or verified working.
