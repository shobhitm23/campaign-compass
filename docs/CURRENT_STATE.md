# Capital Compass — Current State

Last updated: 2026-02-18

---

## What Is This

Capital Compass is a full-stack financial literacy web app. It presents curated, editorial-quality analysis for 35 industry subsectors across 11 market sectors — covering outlook, risks, opportunities, key companies (with live or mock price data), and recent news.

---

## Status: MVP Complete ✅

The full application is built and functional end-to-end. Both backend and frontend are wired together, all 35 subsectors serve content, and live data falls back gracefully to mock when no API keys are present.

---

## How to Run

```bash
# Backend — terminal 1
cd backend
npm install
npm run dev           # Express on http://localhost:3001

# Frontend — terminal 2
cd frontend
npm install
npm run dev           # Vite on http://localhost:5173
```

No API keys required. The app works fully on mock data out of the box.

Optional keys (add to `backend/.env`):
```
NEWS_API_KEY=your_key_here   # https://newsapi.org/register — free tier
```

---

## Project Structure

```
capital_compass/
├── CURRENT_STATE.md          ← this file
├── backend/
│   ├── server.js
│   ├── .env.example
│   ├── package.json
│   ├── config/
│   │   └── constants.js      # TTLs, port, NewsAPI base URL
│   ├── data/
│   │   └── sectors.js        # ALL static content — 11 sectors, 35 subsectors
│   ├── cache/
│   │   └── cacheManager.js   # stockCache (6h TTL) + newsCache (1h TTL)
│   ├── mock/
│   │   ├── stockMock.js      # ~130 tickers with realistic static quotes
│   │   └── newsMock.js       # 5-8 articles for all 35 subsectors
│   ├── services/
│   │   ├── stockService.js   # yahoo-finance2 → mock fallback
│   │   └── newsService.js    # NewsAPI → mock fallback
│   └── routes/
│       ├── index.js
│       ├── sectors.router.js
│       ├── subsectors.router.js
│       ├── companies.router.js
│       └── news.router.js
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js         # /api proxy → localhost:3001
    ├── tailwind.config.js
    ├── postcss.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx            # BrowserRouter + routes
        ├── index.css          # Tailwind base + sidebar-link component
        ├── api/
        │   └── client.js      # Axios instance, baseURL /api
        ├── context/
        │   └── AppContext.jsx # sectors list (fetched once) + sidebarOpen state
        ├── hooks/
        │   ├── useSubsector.js   # /api/subsectors/:id + sessionStorage cache
        │   ├── useCompanies.js   # /api/companies?tickers=...
        │   └── useNews.js        # /api/news?subsector=...
        ├── components/
        │   ├── layout/
        │   │   ├── AppShell.jsx  # Top bar + sidebar + main content wrapper
        │   │   ├── TopBar.jsx    # Logo, hamburger for mobile
        │   │   └── Sidebar.jsx   # Fixed panel, mobile drawer with overlay
        │   ├── sidebar/
        │   │   ├── SectorList.jsx
        │   │   ├── SectorItem.jsx    # Accordion expand/collapse
        │   │   └── SubsectorLink.jsx # NavLink with active styling
        │   ├── subsector/
        │   │   ├── SubsectorPage.jsx     # Route component, orchestrates all panels
        │   │   ├── OutlookPanel.jsx      # Summary + time horizon + key drivers
        │   │   ├── RisksPanel.jsx        # Risk cards with severity badges
        │   │   ├── OpportunitiesPanel.jsx # Opportunity cards with potential badges
        │   │   ├── CompaniesTable.jsx    # Responsive table with column hiding
        │   │   ├── CompanyRow.jsx        # Price coloring, mock indicator
        │   │   └── NewsFeed.jsx          # Article list with timeAgo, external links
        │   ├── home/
        │   │   └── HomePage.jsx  # Sector grid with subsector pill links
        │   └── common/
        │       ├── Card.jsx
        │       ├── LoadingSpinner.jsx
        │       ├── ErrorBanner.jsx
        │       └── Badge.jsx     # severity (red/amber/green) + potential (emerald/blue)
        └── pages/
            └── NotFound.jsx
```

---

## API Endpoints

| Method | Path | Behavior |
|--------|------|----------|
| GET | `/api/health` | `{ status: 'ok' }` |
| GET | `/api/sectors` | All 11 sectors with subsector id+name stubs |
| GET | `/api/sectors/:sectorId` | Single sector detail |
| GET | `/api/subsectors/:subsectorId` | Full static content: outlook, risks, opportunities, tickers, newsQuery |
| GET | `/api/companies?tickers=A,B` | Stock quotes — live via yahoo-finance2 → mock fallback; cached 6h |
| GET | `/api/news?subsector=X&days=7` | Articles — live via NewsAPI → mock fallback; cached 1h |

---

## Data Coverage

### Sectors & Subsectors (35 total)

| Sector | Subsectors |
|--------|-----------|
| 💻 Technology | Software & SaaS, Semiconductors, Cybersecurity, Cloud Infrastructure, Hardware & Devices |
| 🏥 Healthcare | Pharmaceuticals, Biotechnology, Medical Devices, Health Insurance & Managed Care, Healthcare Services |
| 🏦 Financials | Large-Cap Banks, Insurance, Asset Management, Fintech & Payments, Real Estate & REITs |
| ⚡ Energy | Oil & Gas, Renewable Energy, Utilities |
| 🛍️ Consumer | E-Commerce & Retail, Consumer Staples, Restaurants & Leisure |
| 🏭 Industrials | Aerospace & Defense, Industrial Automation, Logistics & Supply Chain |
| 📡 Communication Services | Social Media & Digital Advertising, Telecommunications, Streaming & Entertainment |
| ⚗️ Materials | Critical Minerals & Mining, Specialty Chemicals |
| 🏗️ Real Estate | Residential Real Estate, Commercial Real Estate |
| ✈️ Transportation | Airlines, Automotive & EVs |
| 🌾 Agriculture & Food | Crop Inputs & Fertilizers, Food Processing & Distribution |

### Per-Subsector Content

Each of the 35 subsectors has:
- **Outlook** — 2–3 sentence summary, 4 key drivers, time horizon
- **Risks** — 3–4 items, each with title + severity (high/medium/low) + description
- **Opportunities** — 3 items, each with title + potential (high/medium) + description
- **Tickers** — 5–8 representative company tickers
- **newsQuery** — search string for NewsAPI

### Mock Data
- **Stocks**: ~130 tickers with realistic price, change%, market cap, P/E, 52-week range
- **News**: 5–8 mock articles per subsector (all 35 covered), with realistic headlines and sources

---

## Tech Stack

### Backend
| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.18.3 | HTTP server + routing |
| cors | ^2.8.5 | Cross-origin headers |
| dotenv | ^16.4.5 | Environment config |
| node-cache | ^5.1.2 | In-memory TTL cache |
| yahoo-finance2 | ^2.11.3 | Live stock quotes (ESM — imported via `import()`) |
| axios | ^1.6.8 | NewsAPI HTTP client |
| nodemon | ^3.1.0 | Dev auto-restart |

### Frontend
| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.1 | UI framework |
| react-dom | ^18.3.1 | DOM renderer |
| react-router-dom | ^6.22.3 | Client-side routing |
| axios | ^1.6.8 | API client |
| vite | ^5.2.8 | Dev server + bundler |
| tailwindcss | ^3.4.3 | Utility CSS |

---

## Key Design Decisions

- **No database** — editorial content lives in `data/sectors.js`, version-controlled, zero-latency
- **Two cache instances** — stock (6h) and news (1h) are isolated to prevent TTL collision
- **Vite proxy** — `/api` → backend avoids CORS config and matches production topology
- **URL as nav state** — `useParams` drives content, not context; browser back/forward works naturally
- **sessionStorage for static data** — subsector content never changes mid-session, so it's cached in the browser for instant re-navigation
- **Mock-first fallback** — services treat mock as the baseline; live calls are wrapped in try/catch; no broken states possible
- **yahoo-finance2 ESM workaround** — package has no CJS export; loaded via dynamic `import()` inside an async function and cached in module scope

---

## Known Gaps / Not Yet Built

- No user accounts, watchlists, or personalization
- No search or filtering across sectors
- No price chart / sparkline on company rows
- No sector-level comparison view
- No dark mode
- No tests (unit or integration)
- No production deployment config (Docker, env management, etc.)
- Subsector count is 35, plan called for 55 — 20 more could be added to `data/sectors.js` following the same schema
- `BRK-B` ticker has a hyphen — works in mock but may need URL encoding if passed raw in query strings

---

## Verified Working (as of 2026-02-18)

```
✅ GET /api/health                                → { status: 'ok' }
✅ GET /api/sectors                               → 11 sectors, 35 subsectors
✅ GET /api/subsectors/software-saas             → full content, 4 risks, 3 opportunities
✅ GET /api/companies?tickers=MSFT,AAPL          → mock quotes with price/change/marketCap
✅ GET /api/news?subsector=software-saas&days=7  → 6 mock articles
✅ Frontend build (vite build)                   → 0 errors, 218KB JS bundle
✅ Sidebar accordion expand/collapse
✅ Active subsector auto-expands its sector
✅ Mobile sidebar drawer + overlay dismiss
✅ All 5 subsector panels render (Outlook, Risks, Opportunities, Companies, News)
✅ Price change coloring (green positive, red negative)
✅ Mock data indicators visible on company rows and articles
```
