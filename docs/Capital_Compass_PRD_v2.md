# CAPITAL COMPASS
## Product Requirements Document

**From MVP to Business Model Intelligence Platform**

Version 2.0 | February 2026

---

# Executive Summary

Capital Compass is a financial literacy and investment research platform designed to help retail investors understand markets before making investment decisions. The current MVP provides a functional sector/subsector navigator with curated content across 35 industry subsectors.

This PRD outlines the transformation from a functional prototype to a differentiated, monetizable product. The strategy has two pillars:

1. **Education Layer** — Structured learning modules that teach users how sectors and business models work
2. **Business Model Intelligence** — An AI-powered search tool that explains how any US public company makes money, sourced from SEC filings and real-time data

The combination creates a unique value proposition: Capital Compass doesn't just show you data — it teaches you how to think about businesses and then lets you research any company with that framework.

---

# Product Vision

## The Problem

Most retail investors don't understand how businesses actually make money. They use Instagram daily but don't know the ad revenue model. They invest in Tesla without understanding that automotive margins, energy storage, and regulatory credits are completely different businesses. They buy Netflix stock without knowing how content amortization affects profitability.

The information exists — it's in 10-K filings, earnings transcripts, and analyst reports — but it's inaccessible to normal people. Reading a 10-K requires expertise most investors don't have.

## The Solution

**Capital Compass** makes business models understandable. We provide two things:

- **The framework:** Learning modules that teach you how to think about different types of businesses (SaaS vs. hardware vs. advertising vs. commodities)
- **The tool:** AI-powered search that synthesizes SEC filings into plain-English explanations of any company's revenue streams, margins, and key dependencies

## Positioning Statement

> *Capital Compass is the business model intelligence platform for retail investors who want to understand how companies make money before investing. Unlike data terminals that assume expertise, we teach you how to evaluate different business models, then give you AI-powered tools to research any US public company in plain English.*

---

# Current State Assessment

## What We Have Built

The MVP is complete and functional. The application consists of a React frontend with Tailwind CSS and a Node.js/Express backend that aggregates data from financial APIs with graceful fallback to mock data.

### Technical Foundation

| Component | Status |
|-----------|--------|
| Frontend | React 18 + Vite + Tailwind CSS, responsive design, session caching |
| Backend | Express + Node.js, dual-cache system (stocks 6h, news 1h) |
| Data Sources | Yahoo Finance (live), NewsAPI (live), comprehensive mock fallbacks |
| Content Coverage | 11 sectors, 35 subsectors with editorial content, ~130 ticker mocks |
| Architecture | Modular, no database (content in code), URL-driven navigation |

### Strengths

- **Clean, professional UI** appropriate for a financial product
- **Zero-friction access** with no login required, no paywalls
- **Graceful degradation** means the app works fully on mock data
- **Editorial-quality content** for all 35 subsectors
- **Extensible architecture** ready for additional features

### Gaps to Address

- **No differentiation:** Sector data is available elsewhere (Finviz, Yahoo Finance)
- **No retention mechanism:** No user accounts, saved state, or personalization
- **No proprietary value:** Organization alone is not defensible
- **No monetization:** No revenue mechanism in current product

---

# Core Features

## Feature 1: Business Model Intelligence

**Type:** Paid feature (Premium tier)  
**Priority:** Critical — primary monetization driver

### Overview

An AI-powered search bar where users type any US public company name and receive a plain-English breakdown of how that business makes money. The AI synthesizes information from SEC filings (10-K, 10-Q) and real-time web search to generate structured, understandable analysis.

### User Experience

User types: *"How does Spotify make money?"*

System returns:

- **Revenue Streams:** Premium subscriptions (87% of revenue), ad-supported tier (13%)
- **Key Metrics:** Monthly Active Users, Premium subscribers, Average Revenue Per User, churn rate
- **Cost Structure:** ~70% of revenue goes to rights holders (labels, publishers); high gross margin pressure
- **Key Dependencies:** Label relationships, podcast investments, emerging markets growth
- **Business Model Risk:** Content costs are largely fixed by industry structure; limited pricing power
- **Peer Comparison:** vs. Apple Music, Amazon Music, YouTube Music

### Data Sources

| Source | Data Type | Access Method |
|--------|-----------|---------------|
| SEC EDGAR | 10-K, 10-Q filings | Free API |
| Web Search | Recent earnings, news, analyst coverage | Search API (paid) |
| Company IR | Investor presentations, earnings transcripts | Web scraping / fetch |

### Technical Architecture

- **Query Router:** Parses user query, identifies company (ticker lookup), determines data freshness requirements
- **SEC Fetcher:** Pulls latest 10-K and 10-Q from EDGAR, extracts key sections (Business Description, Risk Factors, MD&A)
- **Web Search Layer:** Supplements with recent news, earnings call summaries, analyst commentary
- **AI Synthesis:** LLM processes combined context, generates structured output in consistent format
- **Cache Layer:** Pre-generated summaries for top 500-1000 companies; live generation for long-tail

### Cost Management Strategy

AI inference on full 10-K documents is expensive. The following strategies manage costs:

- **Pre-processing:** Generate and cache summaries for S&P 500 + most-queried companies on a weekly refresh cycle
- **Section extraction:** Parse 10-K to extract only relevant sections before sending to LLM (reduces token count by ~80%)
- **Query limits:** Paid users get 50 queries/month; overage billed or rate-limited
- **Tiered models:** Use faster/cheaper models for cache refresh; premium models for live queries

---

## Feature 2: Sector Financial Literacy

**Type:** Paid feature (part of learning modules)  
**Priority:** High — differentiator and upsell driver

### Overview

Pre-generated educational content that teaches users how to read and interpret financials for different types of businesses. Built by analyzing 10-Ks from multiple companies within each sector to identify the metrics, ratios, and patterns that matter.

### Content Structure

Each sector gets a *"How to Analyze [Sector] Companies"* module covering:

- **Key metrics that matter:** What numbers to look at first (ARR for SaaS, same-store sales for retail, reserves for banks)
- **Typical margin profiles:** What 'good' looks like (80% gross margin in software vs. 20% in grocery)
- **Revenue recognition:** How revenue works in this sector (subscription vs. transaction vs. advertising)
- **Red flags to watch:** Warning signs specific to this business model
- **Comparison frameworks:** How to compare companies within the sector fairly

### Example: SaaS vs. Oil & Gas

| Dimension | SaaS Company | Oil & Gas E&P |
|-----------|--------------|---------------|
| Key metric | ARR, Net Revenue Retention | Proved reserves, production cost/barrel |
| Good gross margin | 75-85% | 40-60% (varies with oil price) |
| Revenue type | Recurring subscriptions | Commodity sales (price volatility) |
| CapEx profile | Low (cloud infrastructure) | Very high (drilling, equipment) |
| Red flag | Declining NRR, rising CAC | Reserve replacement ratio < 100% |

### Production Process

This is editorial content, not live AI. Created by:

1. Analyzing 10-Ks from 5-10 representative companies per sector
2. Identifying common metrics, terminology, and financial patterns
3. Writing plain-English explanations with concrete examples
4. Updating quarterly or when significant changes occur

---

## Feature 3: Sector Learning Modules

**Type:** Free (sector-level) / Paid (subsector-level)  
**Priority:** High — differentiation and acquisition driver

### Overview

Card-based educational content that walks users through foundational knowledge about each sector and subsector. This is the 'teach you how to think' layer that makes the Business Model Intelligence feature more valuable.

### Module Structure (7 Cards per Sector)

1. **What This Sector Does** — Plain-English explanation of the sector's economic role
2. **How It Makes Money** — Core business models and revenue drivers
3. **What Moves It** — Key factors that drive sector performance
4. **Current State** — Where the sector stands today
5. **Key Terms** — Essential vocabulary
6. **Sector Connections** — Relationships with other sectors
7. **Questions Before Investing** — Critical questions to ask

### Free vs. Paid Boundary

- **Free:** All 11 sector-level modules (broad overview)
- **Paid:** All 55 subsector-level modules (deeper, more specific)
- **Paid:** Sector Financial Literacy modules (how to analyze)

---

# Product Tiers

| Free Tier | Premium — $15/month |
|-----------|---------------------|
| All sector/subsector data views | Everything in Free |
| Sector learning modules (11) | Subsector learning modules (55) |
| Basic news feed (7 days) | Extended news (30 days) |
| Save up to 3 sectors | Unlimited watchlist |
| Weekly email digest | Daily alerts on watched sectors |
| — | Sector Financial Literacy modules |
| — | Business Model Intelligence (50 queries/mo) |
| — | Downloadable PDF reports |
| — | Sector comparison tools |

## Pricing Rationale

$15/month positions Capital Compass below premium tools (Morningstar Premium at $35/month, Seeking Alpha Premium at $20/month) while reflecting the value of AI-powered analysis. Annual plans at $120/year (33% discount) encourage commitment and reduce churn.

---

# Product Roadmap

## Phase 1B: Sector Learning Modules

**Timeline:** 4-6 weeks  
**Goal:** Launch free educational layer to drive differentiation and traffic

### Deliverables

- Learning module UI (card carousel with progress tracking)
- Content for all 11 sectors (7 cards each = 77 cards)
- localStorage progress tracking (no auth required yet)
- Email capture on module completion
- Analytics integration (Plausible or similar)

---

## Phase 2A: User Accounts + Subsector Learning

**Timeline:** 6-8 weeks  
**Goal:** Enable retention, personalization, and paid content gating

### Deliverables

- Email-based authentication (magic link or password)
- Database integration (PostgreSQL)
- Watchlist functionality (sectors/subsectors)
- Subsector learning modules (35 subsectors × 5-7 cards)
- Feature flagging for free/paid content gating

---

## Phase 2B: Sector Financial Literacy

**Timeline:** 4-6 weeks  
**Goal:** Launch 'how to analyze' content that sets up Business Model Intelligence

### Deliverables

- Financial literacy modules for all 11 sectors
- Sector comparison tables (key metrics, typical margins, red flags)
- Glossary/dictionary of financial terms

---

## Phase 3: Business Model Intelligence + Payments

**Timeline:** 10-12 weeks  
**Goal:** Launch flagship paid feature and monetization

### Deliverables

- Stripe subscription billing integration
- SEC EDGAR integration (10-K/10-Q fetching and parsing)
- AI synthesis pipeline (query → sources → response)
- Pre-generated cache for S&P 500 companies
- Business Model Search UI (search bar + results view)
- Query usage tracking and limits

---

## Phase 4: Scale + Expansion

**Timeline:** Ongoing

### Potential Features

- Portfolio integration (upload holdings, see sector exposure)
- Third-party ratings display (Morningstar, Zacks — no liability)
- Sector comparison tools (head-to-head analysis)
- B2B API licensing (sell intelligence to fintechs/robo-advisors)
- International expansion (non-US public companies)

---

# Technical Architecture

## System Overview

The architecture evolves from the current simple backend to a more sophisticated system that handles AI inference, SEC data fetching, and user management.

### Component Architecture

| Component | Technology | Purpose |
|-----------|------------|---------|
| Frontend | React + Vite + Tailwind | User interface (existing) |
| API Server | Node.js + Express | REST API, auth, routing (existing) |
| Database | PostgreSQL | Users, preferences, usage tracking |
| Cache | Redis | Session, API responses, AI summaries |
| AI Service | OpenAI / Anthropic API | Business model synthesis |
| SEC Fetcher | Custom service | EDGAR API integration, 10-K parsing |
| Search Service | Bing/Google API | Real-time web search for recent data |
| Payments | Stripe | Subscription billing |
| Email | Resend / SendGrid | Auth emails, digests, alerts |

## Business Model Intelligence Pipeline

Query flow for the AI-powered search feature:

1. **Query received:** User submits "How does Airbnb make money?"
2. **Cache check:** Check if Airbnb summary exists and is fresh (< 7 days)
3. **If cached:** Return cached summary immediately
4. **If not cached:** Identify ticker (ABNB), fetch latest 10-K from EDGAR
5. **Section extraction:** Parse 10-K, extract Business Description, Risk Factors, MD&A
6. **Web search:** Fetch recent earnings coverage, analyst commentary
7. **AI synthesis:** Send combined context to LLM with structured output prompt
8. **Cache + return:** Store result in Redis, return to user

## Cost Estimates

| Service | Estimated Cost | Notes |
|---------|----------------|-------|
| AI inference (per query) | $0.05 - $0.15 | Depends on token count |
| Web search API | $0.005 per query | Bing Search API |
| SEC EDGAR | Free | Public API |
| Redis (managed) | $15-30/month | Upstash or Railway |
| PostgreSQL (managed) | $15-25/month | Supabase, Neon, or Railway |
| Hosting (app) | $20-50/month | Vercel, Railway, or Render |

**Unit economics:** At $0.10 average cost per Business Model query and 50 queries/month included in Premium, the AI cost per user is ~$5/month. At $15/month subscription, this leaves healthy margin for infrastructure and growth.

---

# Competitive Landscape

| Competitor | Strength | Weakness | Our Advantage |
|------------|----------|----------|---------------|
| Finviz | Free, data-dense screeners | No education, overwhelming UI | Learning + accessibility |
| Morningstar | Trusted ratings, deep analysis | Expensive ($35/mo), complex | Price, beginner focus |
| Seeking Alpha | Community, diverse opinions | Noisy, variable quality | Curated, AI-synthesized |
| Yahoo Finance | Free, comprehensive | Generic, ad-heavy, no structure | Sector focus, clean UX |
| Investopedia | Great education, SEO dominance | No live data, article-only | Education + live data + AI |
| ChatGPT/Claude | General AI, broad knowledge | No live SEC data, generic | Specialized, sourced, current |

## Defensibility

- **Educational content:** Original pedagogy and explanations are labor-intensive to replicate well
- **Sector expertise framing:** Teaching 'how to analyze' different business models is a unique angle
- **Integrated experience:** Learning + research in one tool creates workflow stickiness
- **SEC synthesis pipeline:** While not proprietary, the engineering to make this work well is non-trivial

---

# Risks and Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| AI costs exceed revenue | High | Aggressive caching, query limits, tiered models, monitor unit economics closely |
| Low conversion to paid | High | Validate engagement before building payments; ensure free tier demonstrates clear value of paid |
| AI hallucinations in financial data | Medium | Source attribution, confidence indicators, human review of cached summaries, clear disclaimers |
| SEC data parsing breaks | Medium | Fallback to web search, monitoring for format changes, graceful error handling |
| Content maintenance burden | Medium | Focus on evergreen concepts; quarterly review cycle; hire content help post-revenue |
| Regulatory/compliance | Low | Educational framing, no 'buy' recommendations, clear disclaimers, consult lawyer at scale |
| Competitor copies features | Low | Speed to market, brand building, community, continuous improvement |

---

# Success Metrics

## Phase 1B (Learning Launch)

- Learning module completion rate > 60%
- Average session duration > 4 minutes
- Email capture rate > 15% of visitors
- Return visit rate (7-day) > 25%

## Phase 2 (User Accounts)

- Account creation rate > 10% of visitors
- Weekly active users (WAU) / Monthly active users (MAU) > 40%
- Watchlist usage > 50% of registered users

## Phase 3 (Monetization)

- Free-to-paid conversion > 5%
- Monthly churn < 8%
- Business Model queries per paid user > 15/month
- AI cost per user < $6/month
- NPS > 40

---

# Immediate Next Steps

Actions to begin Phase 1B (Sector Learning Modules):

1. **Create data structure** for learning content in backend (sectorLearning.js)
2. **Write content for 3 pilot sectors** (Technology, Healthcare, Financials)
3. **Build LearningModule UI component** (card carousel with progress)
4. **Add /api/learn endpoints** to backend
5. **Implement localStorage progress tracking**
6. **Add analytics** (Plausible or similar)
7. **Add email capture** on homepage and learning completion
8. **Complete content for remaining 8 sectors**

---

*Capital Compass PRD v2.0 — February 2026*  
*Confidential — Internal Use Only*
