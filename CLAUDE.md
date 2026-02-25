# Capital Compass — CLAUDE.md

> **Start here.** Read this entire file before writing any code or making any changes.

---

## 1. What This Project Is

**Capital Compass** is a financial literacy and investment research platform for retail investors.

**The problem:** Most retail investors don't understand how businesses make money. They invest in Tesla without understanding that automotive, energy storage, and regulatory credits are completely different businesses. The information exists in 10-K filings — but it's inaccessible.

**The product:**
1. **Sector Intelligence (built)** — Curated editorial content for 35 industry subsectors
2. **Sector Learning Modules (Phase 1B)** — Card-based education on how sectors work
3. **Business Model Intelligence (Phase 3)** — AI-powered search explaining how any US public company makes money

**Repository:** `https://github.com/shobhitm23/Campaign-Compass`

---

## 2. How We Work — The Workflow

This project follows a strict **ideation → planning → execution** workflow. Claude must understand which mode it's operating in.

### Mode 1: Ideation (Plan Mode)

**Trigger:** User wants to discuss ideas, explore features, evaluate business decisions, or brainstorm.

**What Claude does:**
- Discusses freely, asks questions, proposes alternatives
- Helps think through tradeoffs, priorities, and scope
- May reference existing docs for context
- **Does NOT write code**
- **Does NOT create files**
- **Does NOT modify the codebase**

**Output:** Conversation, decisions, and clarity on what to build next.

**Transition to Planning:** When the user says something like "let's do this" or "let's plan this out" or "create issues for this."

---

### Mode 2: Planning

**Trigger:** User wants to formalize decisions into trackable work items.

**What Claude does:**
1. Creates or updates a **Milestone** in GitHub for the body of work
2. Creates **Issues** with clear scope, acceptance criteria, and labels
3. Assigns issues to the milestone
4. Updates `docs/` if the PRD or architecture needs changes

**Required before any issue is created:**
- Clear scope boundary (what's in, what's out)
- Labels assigned (see Label Reference below)
- Milestone assigned
- Acceptance criteria defined

**GitHub CLI commands Claude should use:**
```bash
# Create milestone
gh milestone create "Phase X — Feature Name" --repo shobhitm23/Campaign-Compass

# Create issue
gh issue create --title "Issue title" \
  --body "Description and acceptance criteria" \
  --label "phase-x,frontend" \
  --milestone "Phase X — Feature Name" \
  --repo shobhitm23/Campaign-Compass

# List issues
gh issue list --repo shobhitm23/Campaign-Compass --milestone "Phase X"
```

**Output:** GitHub issues and milestones ready for execution.

**Transition to Execution:** When the user says "work on issue #X" or "start building" or "pull an issue."

---

### Mode 3: Execution

**Trigger:** User points to a specific GitHub issue to implement.

**What Claude does:**
1. Reads the issue and confirms understanding
2. Reads relevant reference docs (`docs/Capital_Compass_PRD_v2.md`, `docs/CURRENT_STATE.md`)
3. Implements the feature following coding conventions (Section 6)
4. Tests the implementation
5. Updates `docs/CURRENT_STATE.md` if the feature changes API surface or architecture
6. Commits with a message referencing the issue: `git commit -m "feat: description (#XX)"`

**Rules:**
- Only work on issues that exist in GitHub
- One issue at a time
- Ask clarifying questions before starting if scope is unclear
- Don't scope-creep — if you discover adjacent work, note it but don't do it
- After every `git push`, update `docs/CURRENT_STATE.md` to reflect any new endpoints, components, or architectural changes shipped in that push. This is not optional — do it in the same session before moving on.

**Output:** Working code, committed and ready for review.

---

### Workflow Summary

```
┌─────────────────────────────────────────────────────────────────┐
│                         IDEATION                                │
│  "Let's discuss..." / "What if we..." / "How should we..."     │
│                                                                 │
│  → No code. No files. Just conversation and decisions.         │
└─────────────────────────────┬───────────────────────────────────┘
                              │ "Let's plan this" / "Create issues"
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         PLANNING                                │
│  "Create a milestone for..." / "Break this into issues..."     │
│                                                                 │
│  → Create GitHub milestones and issues with labels.            │
│  → Update PRD/docs if needed.                                  │
│  → No implementation code yet.                                 │
└─────────────────────────────┬───────────────────────────────────┘
                              │ "Work on issue #X" / "Start building"
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         EXECUTION                               │
│  "Implement #12" / "Build the carousel component"              │
│                                                                 │
│  → Pull the issue, implement, test, commit.                    │
│  → Reference issue number in commit message.                   │
│  → Update CURRENT_STATE.md when done.                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Reference Documents

All planning documents live in `docs/`. **Read these before Phase 2+ work.**

| File | Purpose | When to read |
|------|---------|--------------|
| `docs/Capital_Compass_PRD_v2.md` | Full product spec: vision, features, roadmap, pricing, architecture | Before any new feature work |
| `docs/CURRENT_STATE.md` | What's built, all endpoints, verified working features | Before modifying existing code |

**Keep docs current:** After shipping a feature that changes API surface or architecture, update `CURRENT_STATE.md`.

---

## 4. GitHub Structure

### Label Reference

| Label | Use when |
|-------|----------|
| `phase-1b` / `phase-2a` / `phase-2b` / `phase-3` | Assign to milestone phase |
| `frontend` | React/UI work |
| `backend` | Express/API work |
| `data` | Editorial content or data structure work |
| `ai` | LLM/AI pipeline work |
| `auth` | Authentication and sessions |
| `payments` | Stripe/billing |
| `infrastructure` | Database, Redis, hosting, DevOps |
| `analytics` | Tracking, Plausible, metrics |
| `bug` | Something broken |
| `documentation` | Docs-only changes |

### Milestone Naming Convention

```
Phase 1B — Sector Learning Modules
Phase 2A — User Accounts + Subsector Learning
Phase 2B — Sector Financial Literacy
Phase 3 — Business Model Intelligence + Payments
```

### Issue Template

When creating issues, use this structure:

```markdown
## Summary
One sentence describing what this issue delivers.

## Context
Why this matters. Link to PRD section if relevant.

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Notes
Any implementation hints, file locations, or constraints.

## Out of Scope
Explicitly list what this issue does NOT include.
```

---

## 5. Project Structure (Quick Reference)

```
capital_compass/
├── CLAUDE.md              ← You are here
├── docs/
│   ├── Capital_Compass_PRD_v2.md   ← Product spec
│   └── CURRENT_STATE.md            ← Build snapshot
│
├── backend/
│   ├── server.js          ← Entry point
│   ├── config/constants.js ← All magic numbers
│   ├── data/sectors.js    ← Editorial content (11 sectors, 35 subsectors)
│   ├── cache/             ← NodeCache instances
│   ├── mock/              ← Fallback data (stocks, news)
│   ├── services/          ← stockService, newsService
│   └── routes/            ← API route handlers
│
└── frontend/
    ├── src/
    │   ├── api/client.js  ← Axios instance
    │   ├── context/       ← AppContext (sectors, sidebar state)
    │   ├── hooks/         ← useSubsector, useCompanies, useNews
    │   ├── components/    ← All UI components
    │   └── pages/         ← Route-level pages
    └── vite.config.js     ← Dev proxy: /api → localhost:3001
```

For detailed file-by-file documentation, see `docs/CURRENT_STATE.md`.

---

## 6. Coding Conventions

### Backend (Node.js / Express)

- **CommonJS only** — Use `require`/`module.exports`. Exception: `yahoo-finance2` uses dynamic `import()`.
- **Routes are thin** — Parse params, call service, return JSON. No business logic in routes.
- **Services never throw** — Catch all errors, log with `console.warn`, return mock data.
- **Constants centralized** — All magic numbers in `config/constants.js`.
- **Cache keys:**
  - Stocks: ticker string (`'MSFT'`)
  - News: `"${subsectorId}:${days}"` (`'software-saas:7'`)

### Frontend (React / Vite / Tailwind)

- **One hook per data type** — `useSubsector`, `useCompanies`, `useNews`. Each returns `{ data, loading, error }`.
- **URL is source of truth** — `useParams()` provides route state. No duplicating in context.
- **Context is minimal** — Only app-wide state: `sectors[]`, `sidebarOpen`.
- **Tailwind only** — No inline styles, no additional CSS files (except `.sidebar-link` in `index.css`).
- **sessionStorage for static content only** — Editorial content from `useSubsector`. Never for live data.

### Editorial Content

- **Location:** `backend/data/sectors.js`
- **Adding a subsector:** Add to `sectors.js` + add tickers to `stockMock.js` + add articles to `newsMock.js`. No code changes needed.
- **Subsector IDs:** kebab-case, globally unique, used in URLs and cache keys.

---

## 7. Architectural Decisions (Do Not Revisit)

These are settled. Don't re-litigate without explicit discussion.

| Decision | Rationale |
|----------|-----------|
| Editorial content in code, not DB | Zero latency, git-versioned, no migration complexity |
| Two separate NodeCache instances | Prevents TTL collision between stocks (6h) and news (1h) |
| Vite `/api` proxy | Same code works in dev and prod, no CORS config needed |
| URL as navigation state | Deep links work, back button works, React Router handles it |
| Mock-first fallback | App works offline, UI never breaks from API failure |
| yahoo-finance2 dynamic import | Only way to use ESM package in CommonJS backend |
| sessionStorage for editorial only | Static content can be cached client-side; live data cannot |

---

## 8. Running the Project

```bash
# Backend (Terminal 1)
cd backend && npm install && npm run dev
# → http://localhost:3001

# Frontend (Terminal 2)
cd frontend && npm install && npm run dev
# → http://localhost:5173
```

**No API keys required.** App works fully on mock data.

Optional: Add `NEWS_API_KEY=your_key` to `backend/.env` for live news.

---

## 9. Phase Boundaries

### Phase 1A — MVP ✅ COMPLETE
11 sectors, 35 subsectors, 5 data panels, responsive sidebar, mock fallbacks.

### Phase 1B — Sector Learning Modules
Card-based learning for 11 sectors. Free tier. See PRD for spec.

### Phase 2A — User Accounts + Subsector Learning
Auth, PostgreSQL, watchlists, subsector learning (paid). Requires new infrastructure.

### Phase 2B — Sector Financial Literacy
"How to analyze" content by sector. Editorial work + paid tier.

### Phase 3 — Business Model Intelligence + Payments
AI-powered company search, Stripe billing, SEC EDGAR integration. Flagship paid feature.

### Phase 4 — Future
Portfolio integration, third-party ratings, B2B API. Do not build yet.

---

## 10. External APIs

| API | Key Required | Cache TTL | Fallback |
|-----|--------------|-----------|----------|
| yahoo-finance2 | No | 6 hours | `stockMock.js` |
| NewsAPI | Optional | 1 hour | `newsMock.js` |
| SEC EDGAR | No (Phase 3) | — | — |
| Stripe | Yes (Phase 3) | — | — |
| OpenAI/Anthropic | Yes (Phase 3) | — | — |

---

## 11. Environment Variables

All in `backend/.env`. Copy from `backend/.env.example`.

**Current:**
| Variable | Required | Purpose |
|----------|----------|---------|
| `PORT` | No (default 3001) | Server port |
| `NEWS_API_KEY` | No | Live news (mock if absent) |

**Phase 2+:** `DATABASE_URL`, `REDIS_URL`, `STRIPE_SECRET_KEY`, `OPENAI_API_KEY`, etc.

---

## 12. Quick Commands

```bash
# Check what's in GitHub
gh issue list --repo shobhitm23/Campaign-Compass
gh milestone list --repo shobhitm23/Campaign-Compass

# Create an issue
gh issue create --title "Title" --body "Body" --label "label" --milestone "Milestone" --repo shobhitm23/Campaign-Compass

# Frontend build check
cd frontend && npm run build  # Should be 0 errors

# After every push — required
# Edit docs/CURRENT_STATE.md to reflect new state
```

---

## 13. Checklist Before Starting Work

- [ ] Confirmed which mode I'm in (Ideation / Planning / Execution)
- [ ] If Execution: Issue exists in GitHub with clear acceptance criteria
- [ ] Read relevant sections of PRD and CURRENT_STATE
- [ ] Understand what files I'll be touching
- [ ] Know what's out of scope for this task

---

*Last updated: 24th February 2026*