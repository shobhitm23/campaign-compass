// backend/data/sectorLearning.js
// Phase 1B — Sector Learning Modules
// 77 educational cards (7 per sector × 11 sectors)
// Issue #3: Technology, Healthcare, Financials
// Issue #4: Energy, Consumer, Industrials, Communication Services, Materials, Real Estate, Transportation, Agriculture

const sectorLearning = [
  // ─────────────────────────────────────────────
  // TECHNOLOGY  (Issue #3)
  // ─────────────────────────────────────────────
  {
    sectorId: 'technology',
    sectorName: 'Technology',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The technology sector builds the tools, platforms, and infrastructure that power modern economic activity. It spans software companies that sell subscriptions for cloud-based applications, hardware makers that design chips and devices, semiconductor manufacturers that fabricate the silicon inside nearly every electronic product, and IT services firms that implement and manage all of it. Technology is unusual in that it simultaneously serves consumers (your iPhone), businesses (Salesforce CRM), and governments (cloud contracts). Unlike most sectors, tech products often get cheaper and more powerful over time — a dynamic called Moore\'s Law — which constantly reshapes competitive landscapes and creates new markets out of thin air.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: 'Technology companies use several distinct revenue models:\n\n**Subscription (SaaS):** Companies like Salesforce and Microsoft charge monthly or annual fees for cloud software. Revenue is predictable and sticky — customers rarely cancel because switching costs are high.\n\n**Hardware sales:** Apple and NVIDIA sell physical products (iPhones, GPUs) at a markup. Margins depend on component costs and pricing power.\n\n**Licensing:** Companies like Qualcomm license patents or software; others pay royalties per unit shipped.\n\n**Advertising:** Google and Meta sell targeted ad placements. Revenue is tied directly to user attention and economic activity.\n\n**Cloud infrastructure (IaaS/PaaS):** AWS, Azure, and Google Cloud charge for compute, storage, and networking by the hour or gigabyte.\n\nThe most valuable tech businesses combine several models — selling hardware, locking users into software, then monetising through services.',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Key drivers that shape technology sector performance:\n\n**Interest rates:** Growth stocks are valued on future cash flows. When rates rise, those future dollars are worth less today — so high-multiple tech stocks fall harder than the market.\n\n**Enterprise IT spending:** Corporate budgets drive software and services revenue. In recessions, companies cut or delay IT projects, hurting vendors.\n\n**AI adoption cycles:** Generative AI has triggered a new capex supercycle in data centres, GPUs, and cloud infrastructure.\n\n**Regulatory environment:** Antitrust investigations, data privacy laws (GDPR, CCPA), and export controls on advanced chips all create headline risk.\n\n**Product cycles:** A new iPhone launch or a new chip architecture can swing revenue significantly in a single quarter.\n\n**Talent and R&D:** The best engineers cluster at a handful of companies; losing them to startups or competitors is an existential risk.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'As of 2025–26, the technology sector is in the middle of an AI-driven investment supercycle. Cloud hyperscalers (AWS, Azure, Google Cloud) are spending hundreds of billions on data centres and custom AI silicon. NVIDIA dominates GPU supply for AI training; its valuation reflects this dominance. Software companies are racing to embed AI copilots into existing products to justify price increases and defend market share against AI-native startups.\n\nAt the same time, the sector faces valuation scrutiny — many companies still trade at high price-to-earnings multiples, making them sensitive to any earnings miss. Geopolitical tensions around chip exports to China remain a persistent risk. Consumer hardware growth is modest outside of AI-capable devices. The market is bifurcated: AI infrastructure winners are booming; legacy IT is stagnant.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**SaaS (Software-as-a-Service):** Software delivered via the internet on a subscription basis — no installation required.\n\n**ARR (Annual Recurring Revenue):** The annualised value of subscription contracts; the primary growth metric for SaaS businesses.\n\n**NRR (Net Revenue Retention):** How much recurring revenue existing customers generate year-over-year, including expansions and churn. Above 100% means existing customers are spending more.\n\n**Gross margin:** Revenue minus the direct cost to deliver the product, expressed as a percentage. Software has 70–80%+ gross margins; hardware is much lower.\n\n**Hyperscaler:** The three dominant cloud platforms — AWS (Amazon), Azure (Microsoft), and Google Cloud.\n\n**Fabless:** A chip company that designs semiconductors but outsources manufacturing to a foundry like TSMC.\n\n**LTV/CAC:** Lifetime value of a customer divided by the cost to acquire them — measures sales efficiency.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'Technology does not operate in isolation — it is deeply interconnected with the rest of the economy:\n\n**Financials:** Banks are among the largest enterprise software buyers (trading systems, compliance tools, fraud detection). Fintech disrupts traditional banking.\n\n**Healthcare:** Electronic health records, diagnostic AI, and genomics platforms are all technology businesses embedded in healthcare.\n\n**Industrials:** Smart factories, robotics, and predictive maintenance software blur the line between tech and industrial companies.\n\n**Communication Services:** Streaming platforms, social networks, and telecoms depend on cloud infrastructure and semiconductor advances.\n\n**Consumer:** E-commerce (Amazon), gaming, and consumer devices are the retail face of the tech sector.\n\nTechnology also depends heavily on the **materials** sector for rare earth elements and specialty chemicals used in chip manufacturing, and on **energy** for the massive power consumption of data centres.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in a technology company, ask:\n\n1. **What is the switching cost?** Can customers easily move to a competitor, or are they locked in by data, integrations, or trained workflows?\n\n2. **Is the growth organic or acquisition-driven?** Organic growth compounds; acquisitions can mask underlying stagnation.\n\n3. **How does it monetise AI?** Is AI a genuine revenue driver or just marketing language? Ask for the ARR or revenue from AI-specific products.\n\n4. **What is the margin trajectory?** For SaaS businesses, are gross and operating margins expanding as the company scales?\n\n5. **Who are the top three customers, and what is revenue concentration risk?** Losing a 20% customer is catastrophic.\n\n6. **What does the competitive moat actually look like?** Network effects, proprietary data, switching costs, and regulatory licences are durable; brand alone is not.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // HEALTHCARE  (Issue #3)
  // ─────────────────────────────────────────────
  {
    sectorId: 'healthcare',
    sectorName: 'Healthcare',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The healthcare sector encompasses every business involved in maintaining or restoring human health. It ranges from pharmaceutical companies that discover and manufacture drugs, to medical device makers that build everything from MRI machines to insulin pumps, to health insurers that pool and price risk, to hospital networks and pharmacy chains that deliver care directly. Healthcare is one of the most regulated industries in the world — every drug must be approved by the FDA, every device must meet safety standards, and pricing is negotiated with government programmes and private insurers. Unlike most sectors, demand for healthcare is largely non-discretionary: people need treatment regardless of economic conditions, which gives the sector a defensive character that attracts investors during downturns.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: 'Revenue models vary sharply by sub-sector:\n\n**Pharmaceuticals:** Drug companies earn revenue from selling branded drugs at high margins during the patent exclusivity window (typically 20 years from filing, ~10 from launch). After patent expiry, generic competition collapses prices. Royalties from licensing and milestone payments from partnerships also contribute.\n\n**Medical devices:** One-time hardware sales (capital equipment like surgical robots) combined with recurring consumables and service contracts. High-volume, low-cost consumables often generate more profit than the initial device sale.\n\n**Health insurance (managed care):** Insurers collect premiums and aim to pay out less in claims than they collect. The spread is called the medical loss ratio. They also earn fees from pharmacy benefit management.\n\n**Hospitals and clinics:** Charge fees-for-service to insurers and self-pay patients. Profitability depends on payer mix and procedure volume.',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Key drivers of healthcare sector performance:\n\n**Drug pipeline and FDA approvals:** A single successful Phase 3 trial can double a biotech\'s stock overnight; a clinical failure can wipe out 80% of its value.\n\n**Patent cliffs:** When a blockbuster drug loses exclusivity, revenue can fall 50–90% within two years as generics enter.\n\n**Government policy:** Medicare/Medicaid reimbursement rates, the Inflation Reduction Act\'s drug price negotiation provisions, and ACA subsidies all directly affect company revenues.\n\n**Demographics:** Ageing populations in the US, Europe, and Japan structurally increase demand for chronic disease management, orthopaedics, and oncology treatments.\n\n**M&A activity:** Large pharma companies regularly acquire biotechs to replenish pipelines — this drives premiums in the biotech sector.\n\n**Pricing pressure:** Pharmacy benefit managers (PBMs) and government negotiators continuously push back on list prices.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'Healthcare in 2025–26 is defined by two dominant themes:\n\n**GLP-1 revolution:** Drugs like Ozempic and Wegovy (semaglutide) have become blockbusters for weight loss and diabetes, reshaping the entire sector. Winners include Novo Nordisk and Eli Lilly; potential losers include medical device companies that treat obesity-related conditions and food companies.\n\n**AI in drug discovery:** Machine learning is accelerating protein structure prediction and molecule screening, compressing early-stage drug discovery timelines. Partnerships between Big Pharma and AI companies are proliferating.\n\n**Managed care pressure:** Health insurers face rising medical costs post-COVID as utilisation normalises and pent-up demand for procedures clears. UnitedHealth and Humana have flagged margin pressure.\n\n**Biosimilars:** As biologic drugs lose exclusivity, biosimilar competition is intensifying — a structural headwind for originators but a tailwind for generic manufacturers.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**Pipeline:** The collection of drug candidates a pharmaceutical company is developing at various clinical stages (Phase 1, 2, 3).\n\n**FDA approval:** The US Food and Drug Administration clearance required before a drug or device can be sold commercially.\n\n**Patent cliff:** The period when a drug\'s patent expires, allowing generics to enter and prices to collapse.\n\n**Medical Loss Ratio (MLR):** For insurers, the percentage of premiums paid out as medical claims. Federal law requires most insurers to maintain MLR above 80%.\n\n**Biosimilar:** A near-identical copy of a complex biologic drug, approved after the original\'s patent expires — the biologic equivalent of a generic pill.\n\n**EHR (Electronic Health Record):** Digital systems storing patient medical histories; adoption is near-universal in large hospital systems.\n\n**CAGR:** Compound annual growth rate — how fast a drug\'s market or a company\'s revenue is expected to grow per year.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'Healthcare intersects with the broader economy in important ways:\n\n**Technology:** AI companies are partnering with pharma on drug discovery. Cloud infrastructure underpins hospital systems. Digital health (telehealth, remote monitoring) is a direct overlap.\n\n**Financials:** Health insurers are effectively financial intermediaries — they manage risk pools. Private equity has aggressively acquired physician practices and hospital chains.\n\n**Consumer:** Consumer healthcare (OTC drugs, nutritional supplements, fitness) blurs the line between healthcare and consumer staples.\n\n**Government:** Healthcare is the largest single category of US federal spending (Medicare + Medicaid). Policy changes directly affect sector revenues.\n\n**Materials and chemicals:** Active pharmaceutical ingredients (APIs) are often manufactured using speciality chemicals. Drug supply chains depend on bulk chemical producers, many in India and China.\n\n**Industrials:** Medical device supply chains depend on precision manufacturers and specialty plastics producers.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in a healthcare company, ask:\n\n1. **For pharma/biotech: what is the pipeline depth?** A company that depends on a single drug is a binary bet — approval or failure determines the outcome.\n\n2. **When does the next patent cliff hit?** How much revenue is at risk, and what is in the pipeline to replace it?\n\n3. **What is the payer mix?** High government (Medicare/Medicaid) exposure means vulnerability to reimbursement rate cuts.\n\n4. **For insurers: what is the medical loss ratio trend?** Rising MLRs compress margins; falling MLRs may reflect aggressive claims denial that creates regulatory risk.\n\n5. **Is the company in a regulated market or a direct-pay market?** The regulatory pathway matters enormously for timelines and pricing power.\n\n6. **What is the exposure to drug price negotiation?** The Inflation Reduction Act allows Medicare to negotiate prices for high-spend drugs — understand which products are at risk.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // FINANCIALS  (Issue #3)
  // ─────────────────────────────────────────────
  {
    sectorId: 'financials',
    sectorName: 'Financials',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The financial sector is the circulatory system of the economy — it moves money from where it is to where it is needed. Banks take deposits from households and lend to businesses and homebuyers. Insurance companies pool risk so that individuals and corporations do not face catastrophic single losses alone. Asset managers invest savings on behalf of pension funds, endowments, and individual investors. Payment networks like Visa and Mastercard move trillions of dollars every day between buyers and sellers. Investment banks advise on mergers and underwrite stocks and bonds. Without financial intermediation, a startup could not get a loan, a homeowner could not get a mortgage, and a retiree could not receive a pension cheque. The sector\'s health is a leading indicator for the broader economy.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: 'Revenue models differ by sub-sector:\n\n**Banks:** Earn the spread between what they pay depositors and what they charge borrowers (net interest income). They also earn fees from transaction processing, wealth management, and investment banking.\n\n**Insurance:** Collect premiums upfront, invest them (the "float"), and pay claims later. Profitability depends on accurate underwriting (not paying more in claims than you collected in premiums) plus investment returns on the float.\n\n**Asset managers:** Charge a percentage of assets under management (AUM) annually — typically 0.03% for passive index funds to 2%+ for hedge funds. Performance fees ("carried interest") apply in private equity and hedge funds.\n\n**Payment networks:** Charge a percentage of each transaction value (interchange fees) split between the network, issuing bank, and acquiring bank. High-margin, capital-light business model.\n\n**Investment banks:** Earn advisory fees on M&A transactions and underwriting fees when companies issue stocks or bonds.',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Key drivers of financial sector performance:\n\n**Interest rates:** The most important driver for banks. Rising rates widen the spread between lending and deposit rates, boosting net interest income. But very high rates can cause loan defaults and reduce borrowing demand.\n\n**Credit quality:** In recessions, borrowers default on loans and insurance claims spike. Banks build loan loss reserves, which reduces reported earnings.\n\n**Regulatory capital requirements:** Post-2008 Basel III rules require banks to hold more capital as a buffer against losses, constraining how much they can lend and the returns they can generate.\n\n**Consumer and corporate spending:** More transactions mean more fee income for payment networks and more advisory work for investment banks.\n\n**M&A volume:** Investment banking revenue is directly tied to deal-making activity, which falls sharply in uncertain markets.\n\n**Catastrophic events:** Hurricanes, wildfires, and pandemics create large insured losses that test underwriting discipline.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'The financials sector in 2025–26 is navigating a complex environment:\n\n**Net interest income normalising:** After the Federal Reserve\'s rapid rate hike cycle, banks benefited from higher lending rates. As the Fed begins cutting, this tailwind fades — though deposit repricing provides some offset.\n\n**Credit normalisation:** Charge-offs are rising modestly from historically low post-COVID levels, particularly in commercial real estate loans and consumer credit card debt.\n\n**Fintech disruption:** Digital wallets, buy-now-pay-later, and neobanks continue to chip away at traditional banking relationships, particularly among younger consumers.\n\n**Insurance hard market:** Property & casualty insurers have raised premiums significantly following outsized losses from climate-related events (hurricanes, wildfires). Reinsurance capacity is tightening.\n\n**Private credit boom:** Direct lending by non-bank asset managers has grown dramatically, competing with traditional bank lending for corporate borrowers.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**Net Interest Margin (NIM):** The spread between what a bank earns on loans and what it pays on deposits, expressed as a percentage of earning assets. A key profitability metric for banks.\n\n**Return on Equity (ROE):** Net income divided by shareholders\' equity. For banks, 10–15% ROE is generally considered healthy.\n\n**Combined Ratio:** For property & casualty insurers, claims paid plus expenses divided by premiums earned. Below 100% means the underwriting is profitable.\n\n**AUM (Assets Under Management):** The total market value of investments managed on behalf of clients. Asset manager revenues scale with AUM.\n\n**Loan-to-Deposit Ratio (LDR):** How much of a bank\'s deposits are deployed as loans. Too high signals liquidity risk; too low signals inefficiency.\n\n**Float:** Premiums collected by an insurer before claims are paid — Warren Buffett\'s term for the free capital that Berkshire Hathaway invests.\n\n**Interchange fee:** The percentage of a transaction that payment networks and banks earn when a card is used.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'Financials are embedded in every corner of the economy:\n\n**Real estate:** Mortgage lending is one of the largest banking activities. Real estate cycles directly affect bank loan books and insurance claims.\n\n**Technology:** Fintech companies challenge traditional banking. Banks are heavy buyers of enterprise software and cybersecurity services. Payment networks are quasi-technology companies running on decades-old infrastructure.\n\n**Consumer:** Consumer spending drives credit card transaction volumes and personal loan demand. Household financial health determines default rates.\n\n**Industrials and energy:** Large infrastructure projects require project financing from investment banks and commercial lenders.\n\n**Government bonds:** Banks and insurers are among the largest holders of US Treasury securities — Fed policy directly affects the value of their balance sheets.\n\nFinancials are often described as a "pass-through" sector — their performance reflects the health of every other sector they lend to, insure, or manage assets for.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in a financial company, ask:\n\n1. **For banks: what is the interest rate sensitivity?** Some banks benefit from rising rates; others are hurt. Understand whether the balance sheet is asset-sensitive or liability-sensitive.\n\n2. **What is the loan book composition?** Commercial real estate loans, consumer credit cards, and leveraged loans carry very different risk profiles.\n\n3. **For insurers: what is the combined ratio trend?** Rising combined ratios signal underwriting deterioration — often a precursor to reserve charges.\n\n4. **What is the capital ratio?** Banks must maintain regulatory capital buffers. Low capital ratios limit dividend payments and share buybacks.\n\n5. **Is growth coming from AUM growth or fee rate expansion?** Asset managers growing AUM through market appreciation are more vulnerable than those growing through new client inflows.\n\n6. **What is the exposure to fintech disruption?** Which revenue streams are most at risk from digital challengers, and what is the company\'s digital strategy?',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // ENERGY  (Issue #4)
  // ─────────────────────────────────────────────
  {
    sectorId: 'energy',
    sectorName: 'Energy',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The energy sector extracts, refines, transports, and sells the fuel that powers civilisation. Traditional energy companies explore for and produce oil and natural gas (upstream), transport it via pipelines (midstream), and refine it into gasoline, diesel, and petrochemicals (downstream). Utilities generate and distribute electricity — from coal, natural gas, nuclear, wind, and solar plants to homes and businesses. Renewable energy companies build and operate solar farms, wind parks, and energy storage systems. The sector is undergoing a structural transition: fossil fuels still supply roughly 80% of global primary energy, but renewables are the fastest-growing source of new generation capacity. Energy underpins nearly every other sector of the economy — no food, no manufacturing, no transportation, and no data centre works without it.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: '**Oil & gas exploration and production (E&P):** Revenue equals volume produced × commodity price. Profitability hinges on the spread between the oil price and the "breakeven" cost to extract a barrel — often $30–$50/bbl for US shale producers.\n\n**Midstream pipelines:** Charge fees for transporting oil, gas, and refined products through pipelines, often under long-term take-or-pay contracts. Revenue is relatively insensitive to commodity prices.\n\n**Refining:** Earn the "crack spread" — the difference between the price of crude oil and the refined products (gasoline, diesel, jet fuel) made from it.\n\n**Integrated majors (ExxonMobil, Shell):** Participate across all three segments, smoothing earnings volatility.\n\n**Utilities:** Regulated utilities earn a government-approved rate of return on their asset base. Merchant generators sell power into wholesale electricity markets at spot prices.',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Energy sector performance is driven by:\n\n**Commodity prices:** Oil and natural gas prices are set by global supply and demand. OPEC+ production decisions, US shale output, geopolitical disruptions (Russia-Ukraine), and economic growth cycles all move the needle.\n\n**Interest rates:** Utilities are capital-intensive and carry significant debt. Rising rates increase financing costs and make utility dividends less attractive relative to bonds.\n\n**Energy transition policy:** The Inflation Reduction Act\'s clean energy tax credits, carbon pricing schemes, and renewable portfolio standards directly affect investment economics.\n\n**Weather:** Cold winters drive natural gas demand; hot summers drive power consumption. Hurricanes disrupt Gulf of Mexico production.\n\n**Data centre electricity demand:** AI infrastructure is a new structural driver of power consumption, benefiting utilities and natural gas generators.\n\n**Geopolitics:** Conflict in oil-producing regions causes supply shocks; sanctions affect global trade flows.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'Energy in 2025–26 is defined by a fundamental tension:\n\n**Oil market balance:** OPEC+ is managing production to defend prices around $70–$80/bbl. US shale production has plateaued relative to peak growth years, and capital discipline means producers are returning cash to shareholders rather than drilling aggressively.\n\n**Natural gas renaissance:** Data centres, industrial re-shoring, and LNG exports to Europe (post-Russia supply shock) are driving structural demand for natural gas, particularly from US Gulf Coast producers and LNG terminal operators.\n\n**Renewable build-out:** Solar and wind additions are at record levels globally, driven by falling costs and policy incentives. Grid-scale battery storage is scaling rapidly.\n\n**Power demand inflection:** AI data centres are the fastest-growing source of US electricity demand in decades, prompting utilities to revisit plans to retire fossil fuel plants and accelerating new nuclear discussions.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**Upstream/Midstream/Downstream:** The three stages of the oil and gas value chain — exploration and production, transportation, and refining/distribution.\n\n**Breakeven price:** The oil price at which an E&P company covers its all-in costs to produce a barrel of oil, including capital expenditures.\n\n**Crack spread:** The margin between crude oil input costs and refined product prices — the refiner\'s profit per barrel.\n\n**Take-or-pay contract:** A pipeline contract requiring the shipper to pay for capacity whether or not they use it — provides revenue certainty for midstream companies.\n\n**OPEC+:** The Organisation of Petroleum Exporting Countries plus associated producers (Russia, Kazakhstan, etc.) that collectively manage production quotas.\n\n**Levelised Cost of Energy (LCOE):** The all-in cost to generate one unit of electricity over a project\'s lifetime — the standard way to compare renewable vs. fossil fuel economics.\n\n**Net zero:** A commitment to balance greenhouse gas emissions released with emissions removed, typically by 2050.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'Energy connects to virtually every sector:\n\n**Industrials:** Factories, chemicals plants, and construction all depend on energy inputs. Higher energy prices raise manufacturing costs across the board.\n\n**Transportation:** Airlines, shipping companies, and truckers have fuel as their largest operating cost. Energy prices directly affect their margins.\n\n**Materials:** Producing metals and chemicals is highly energy-intensive. Aluminium smelters, for example, locate near cheap power sources.\n\n**Technology:** Data centres now consume roughly 2% of global electricity — a figure that is rising rapidly with AI infrastructure investment. Energy costs are a significant operating expense for cloud companies.\n\n**Agriculture:** Fertiliser production depends on natural gas as both feedstock and fuel. Energy prices transmit directly to food prices.\n\n**Real estate:** Energy efficiency ratings affect property values; utilities determine operating costs for both commercial and residential buildings.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in an energy company, ask:\n\n1. **What is the breakeven oil or gas price?** Can the company remain profitable at $50/bbl, or does it need $80/bbl to cover costs?\n\n2. **What is the capital allocation policy?** Companies that return free cash flow through dividends and buybacks rather than aggressive drilling provide more predictable returns.\n\n3. **For utilities: is it regulated or merchant?** Regulated utilities have predictable, government-approved returns; merchant generators are exposed to volatile electricity prices.\n\n4. **What is the renewable transition exposure?** Does the company have stranded asset risk as fossil fuels are displaced, and what is its clean energy investment pipeline?\n\n5. **What is the debt level?** Energy companies are capital-intensive and often carry significant debt — high leverage amplifies the impact of commodity price swings.\n\n6. **What is the reserve life?** For E&P companies, the proven reserve base divided by annual production indicates how many years of output are already booked.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // CONSUMER  (Issue #4)
  // ─────────────────────────────────────────────
  {
    sectorId: 'consumer',
    sectorName: 'Consumer',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The consumer sector sells goods and services directly to individuals for personal use. It splits into two broad categories. Consumer staples companies — like Procter & Gamble, Coca-Cola, and Walmart — sell necessities people buy regardless of economic conditions: food, beverages, household products, and personal care items. Consumer discretionary companies — like Nike, McDonald\'s, Amazon\'s retail business, and luxury brands — sell items that people buy when they feel financially comfortable: apparel, electronics, restaurant meals, travel, and entertainment. This distinction makes the sector a useful economic barometer. When discretionary spending holds up, consumers feel confident. When staples hold steady while discretionary weakens, it signals economic stress. Together, consumer spending represents roughly 70% of US GDP.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: '**Branded consumer goods:** Sell products at a premium to commodity alternatives because consumers trust and prefer the brand. The margin between production cost and shelf price funds marketing that reinforces the brand — a self-reinforcing cycle.\n\n**Retail:** Earn the margin between wholesale cost and the price paid by the customer. E-commerce has compressed margins; the most profitable retailers layer in advertising, financial services, and memberships (Amazon Prime).\n\n**Restaurants (QSR and casual dining):** Earn on the spread between food costs and the menu price. Franchise models shift capital investment to franchisees while the parent earns royalties on system-wide sales.\n\n**Luxury goods:** Operate on aspiration and scarcity — deliberately limiting supply maintains pricing power. Margins are very high; volumes are low.\n\n**Subscription and membership:** Amazon Prime, Costco memberships, and streaming bundles create recurring revenue and increase purchase frequency.',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Key drivers of consumer sector performance:\n\n**Employment and wages:** The consumer\'s ability to spend depends on having a job and rising purchasing power. Wage growth above inflation is the most important tailwind for discretionary companies.\n\n**Consumer confidence:** Sentiment surveys (University of Michigan, Conference Board) predict spending patterns — pessimistic consumers delay large purchases.\n\n**Inflation and input costs:** Commodity prices (wheat, cotton, oil) directly affect cost of goods sold. Companies with pricing power can pass increases on; those without face margin compression.\n\n**E-commerce penetration:** Online channels continue to take share from physical retail, compressing margins for brick-and-mortar incumbents.\n\n**Demographics:** Millennials and Gen Z have different preferences (experiences over things, sustainability focus) that are reshaping product categories.\n\n**Credit availability:** Consumer borrowing — credit cards, BNPL — amplifies spending in booms and creates deleveraging headwinds in downturns.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'Consumer spending in 2025–26 shows notable bifurcation:\n\n**High-income consumers** remain resilient — spending on travel, luxury goods, and experiences is robust. Luxury brands like LVMH and Hermès continue to grow despite global uncertainty.\n\n**Middle and lower-income consumers** are under pressure from cumulative inflation (prices are 20%+ higher than pre-COVID), student debt resumption, and credit card delinquency rates creeping up. This is driving a trade-down dynamic: consumers switching from branded to private-label products and from sit-down restaurants to fast food.\n\n**E-commerce maturation:** Amazon dominates, but Shein, Temu, and TikTok Shop are aggressively disrupting apparel and general merchandise.\n\n**GLP-1 wildcard:** Weight loss drugs are beginning to affect food consumption patterns — food companies are rethinking product portfolios as customers eat less.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**Same-store sales (SSS):** Revenue growth at stores open for more than one year — strips out the effect of new store openings to show underlying performance.\n\n**Gross margin:** The percentage of revenue left after the direct cost of producing the product. Branded goods companies typically have 40–60% gross margins; discounters operate at 20–30%.\n\n**COGS (Cost of Goods Sold):** The direct costs of producing what was sold — raw materials, manufacturing, and packaging.\n\n**Brand equity:** The intangible value of a brand\'s reputation that allows a company to charge more than the generic alternative.\n\n**QSR (Quick Service Restaurant):** Fast-food chains like McDonald\'s and Chipotle, characterised by standardised menus, speed, and lower price points than casual dining.\n\n**Trade-down:** Consumer behaviour of switching from premium to cheaper alternatives during financial stress.\n\n**Net Promoter Score (NPS):** A customer loyalty metric measuring how likely customers are to recommend a product — used as a leading indicator of retention.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'The consumer sector sits at the intersection of most of the economy:\n\n**Technology:** E-commerce platforms (Amazon, Shopify) are technology infrastructure for consumer companies. Digital advertising on Google and Meta is essential for reaching consumers.\n\n**Agriculture and food:** Consumer staples companies are the primary buyers of agricultural commodities — grain, sugar, cocoa, and livestock. Food inflation directly impacts margins.\n\n**Transportation and logistics:** Getting products from factory to shelf requires vast freight and last-mile delivery networks. Consumer companies\' supply chain costs are a major operating expense.\n\n**Financials:** Credit card spending data is one of the most real-time indicators of consumer health. BNPL providers have expanded consumer credit access.\n\n**Healthcare:** Consumer health (OTC medicines, vitamins) overlaps directly with healthcare. GLP-1 drugs are now disrupting food consumption patterns.\n\n**Real estate:** Retail real estate (malls, strip centres) depends entirely on consumer spending to pay rent.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in a consumer company, ask:\n\n1. **Is this a staple or a discretionary business?** Staples are defensive and hold up in downturns; discretionary companies are more cyclical.\n\n2. **What is the pricing power?** Can the company raise prices without losing customers? Look for gross margin trends over multiple economic cycles.\n\n3. **What is the brand health?** Is market share growing or shrinking? Are private-label alternatives gaining ground?\n\n4. **What is the e-commerce strategy?** How is the company adapting to the shift in how consumers shop?\n\n5. **What is the input cost exposure?** Which commodities are in the cost base, and does the company hedge against price spikes?\n\n6. **What are the demographic tailwinds or headwinds?** Is the core customer base growing or ageing out of the product category?',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // INDUSTRIALS  (Issue #4)
  // ─────────────────────────────────────────────
  {
    sectorId: 'industrials',
    sectorName: 'Industrials',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The industrials sector manufactures, maintains, and operates the physical infrastructure of the economy. It includes aerospace and defence companies that build aircraft and weapons systems, industrial conglomerates like Honeywell that make everything from building automation systems to jet engines, electrical equipment makers, construction and engineering firms, machinery manufacturers, and waste management companies. The sector also includes business services businesses — staffing firms, logistics companies, and professional services — that oil the gears of corporate activity. Industrials are the foundational layer beneath other sectors: they build the factories that make consumer goods, the power infrastructure that runs data centres, the aircraft that move passengers, and the machines that mine metals. They tend to be economically sensitive, rising and falling with business investment cycles.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: '**Aerospace and defence:** Defence contracts with governments provide long-term, relatively stable revenue (though subject to budget cycles). Commercial aerospace earns on aircraft manufacturing, aftermarket parts, and maintenance — aftermarket revenues are high-margin and recurring.\n\n**Industrial machinery:** Sell capital equipment to manufacturers, farmers, and miners. The real profit often comes from the aftermarket: replacement parts and service contracts that are captive to the installed base.\n\n**Engineering and construction (E&C):** Earn project management and construction fees on large infrastructure projects. Revenue is lumpy and tied to backlog — the value of contracted work yet to be completed.\n\n**Conglomerates:** Operate diverse industrial businesses, aiming for portfolio diversification and cross-selling efficiencies.\n\n**Waste management:** Collect recurring service fees for waste collection and disposal — a regulated, annuity-like model with very high barriers to entry.',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Key drivers of industrial sector performance:\n\n**Business capital expenditure (capex):** When corporations are growing and confident, they invest in new equipment, factories, and automation — the core revenue driver for industrial companies.\n\n**Government infrastructure spending:** The US Infrastructure Investment and Jobs Act and defence budgets are multi-year tailwinds for construction firms and defence contractors.\n\n**Manufacturing reshoring:** Geopolitical tensions and supply chain vulnerabilities are driving new US factory construction, benefiting engineering firms, equipment makers, and electrical infrastructure companies.\n\n**Interest rates:** Industrial companies carry significant debt; rate sensitivity affects both their own financing costs and their customers\' willingness to make large capital investments.\n\n**Commodity prices:** Raw material inputs (steel, aluminium, copper) are major cost components. Margin compression occurs when input prices rise faster than product prices.\n\n**PMI (Purchasing Managers\' Index):** The single best leading indicator of industrial activity — readings above 50 signal expansion.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'Industrials in 2025–26 are benefiting from a structural reshaping of US and global manufacturing:\n\n**Reshoring boom:** Driven by the CHIPS Act, Inflation Reduction Act clean energy provisions, and post-COVID supply chain lessons, the US is experiencing unprecedented new factory construction — particularly in semiconductors, EVs, and batteries.\n\n**Defence spending increase:** NATO allies are raising defence budgets toward and beyond the 2% of GDP target. US defence budgets remain elevated following Russia\'s invasion of Ukraine.\n\n**Aerospace recovery:** Commercial aviation has fully recovered to pre-COVID passenger levels. Boeing continues to face quality and production challenges, creating opportunities for rivals and suppliers.\n\n**Automation and robotics:** Labour shortages and wage inflation are accelerating investment in factory automation and industrial robotics, benefiting companies like Rockwell Automation and Fanuc.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**Backlog:** The total value of orders received but not yet recognised as revenue — a leading indicator of future revenue for project-based businesses.\n\n**Book-to-bill ratio:** New orders received divided by revenue billed in the period. Above 1.0 means the backlog is growing.\n\n**PMI (Purchasing Managers\' Index):** A monthly survey of manufacturing purchasing managers; above 50 indicates expansion, below 50 indicates contraction.\n\n**Capex (Capital Expenditure):** Spending on physical assets like factories, machinery, and equipment. Industrial companies\' revenues depend on their customers\' capex budgets.\n\n**Aftermarket:** Revenue from spare parts, repairs, and service contracts on equipment already sold — typically higher margin than the original equipment.\n\n**MRO (Maintenance, Repair, and Overhaul):** Services keeping equipment operational; a stable, recurring revenue stream.\n\n**EBITDA margin:** Earnings before interest, taxes, depreciation, and amortisation as a percentage of revenue — the standard profitability metric for capital-intensive industrial businesses.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'Industrials are deeply embedded in the broader supply chain:\n\n**Materials:** Steel, aluminium, copper, and composites are essential inputs. Rising commodity prices squeeze industrial margins unless companies can raise prices.\n\n**Energy:** Factories are large energy consumers. Energy costs are a material operating expense; energy efficiency improvements are a major investment driver.\n\n**Technology:** Smart manufacturing ("Industry 4.0") — sensors, robotics, AI-powered quality control — is increasingly blurring the line between technology and industrial companies.\n\n**Transportation:** Logistics companies are a sub-sector of industrials; they also serve as the distribution backbone for manufactured goods.\n\n**Government:** Defence contractors\' largest customer is the government. Infrastructure companies depend on government contracts and public funding.\n\n**Consumer:** Consumer demand ultimately drives factory production volumes and industrial orders — a slowdown in consumer spending eventually shows up in PMI and industrial backlog.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in an industrial company, ask:\n\n1. **What is the backlog and book-to-bill ratio?** A growing backlog provides revenue visibility; a declining one signals slowing demand.\n\n2. **What is the aftermarket revenue mix?** High aftermarket revenue creates sticky, recurring income streams and higher margins than OEM sales.\n\n3. **What is the defence vs. commercial exposure?** Defence contracts are stable but subject to budget cycles; commercial revenues are more cyclical.\n\n4. **What is the pricing power on input costs?** Can the company pass through steel and aluminium price increases, or does it absorb them in margins?\n\n5. **Is the company a beneficiary of reshoring?** Does it supply equipment or services for the new factories being built in the US?\n\n6. **What is the capital intensity?** High-capex businesses with large fixed cost structures have more operating leverage — bigger swings in profitability when revenue moves.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // COMMUNICATION SERVICES  (Issue #4)
  // ─────────────────────────────────────────────
  {
    sectorId: 'communication-services',
    sectorName: 'Communication Services',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The communication services sector connects people and distributes content at scale. It spans three distinct business types: traditional telecoms (AT&T, Verizon) that operate the physical networks — fibre, cable, wireless spectrum — that carry voice and data; digital media platforms (Meta, Alphabet/Google, Netflix) that create or aggregate content and monetise attention through advertising or subscriptions; and gaming companies that create interactive entertainment. The sector emerged as a distinct category in 2018 when the S&P 500 reclassified many technology and media companies into a single "communication services" bucket. The common thread is that all these businesses connect consumers to information, entertainment, or each other. The sector is notable for the enormous scale advantages that underpin the dominant platforms — once built, a network or content library serves additional users at near-zero marginal cost.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: '**Digital advertising (Google, Meta):** The dominant model — serve targeted ads to billions of users and charge advertisers per impression or click. Revenue scales with the volume of user attention and the quality of targeting data.\n\n**Subscription streaming (Netflix, Spotify):** Charge a monthly fee for access to a content library. The key economics are subscriber growth vs. content cost — a fixed content spend gets more efficient as more subscribers share it.\n\n**Telecoms:** Earn monthly recurring revenues from wireless, broadband, and TV subscriptions. Equipment financing and business services add to the mix.\n\n**Gaming:** Sell games at a premium one-time price, or increasingly via in-app purchases, season passes, and subscription bundles (Xbox Game Pass). Live-service games generate ongoing revenue from cosmetic items and expansions.\n\n**Two-sided marketplaces (YouTube, TikTok):** Attract creators who attract viewers; monetise viewer attention through ads and share revenue with creators to maintain the flywheel.',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Key drivers of communication services performance:\n\n**Digital advertising market:** The health of the ad market drives Google and Meta revenues. Ad spending is highly cyclical — it falls sharply in recessions as brands pull back budgets.\n\n**Streaming subscriber growth:** For Netflix and streaming peers, subscriber additions (and churn rates) determine whether content investment will generate sufficient lifetime value.\n\n**Wireless spectrum and 5G:** Telcos compete intensely for spectrum licences and invest heavily to deploy 5G networks, creating a capital intensity overhang.\n\n**Regulatory risk:** Antitrust scrutiny of Google and Meta is ongoing. Content moderation requirements, privacy laws (GDPR), and social media regulation all create headline risk.\n\n**AI integration:** AI-powered search (Google vs. Microsoft/OpenAI) is the most significant competitive threat to the digital advertising status quo in a decade.\n\n**Content costs:** Netflix, Amazon, and Apple are spending tens of billions on original content — the winners will have defensible libraries; overspenders will see returns compress.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'Communication services in 2025–26 is defined by three storylines:\n\n**AI disruption of search:** Microsoft\'s investment in OpenAI and the integration of AI chatbots into search is the biggest competitive challenge to Google\'s core business since the smartphone. Google is responding with Gemini integration across its products, but the structural question of how AI changes search monetisation remains open.\n\n**Streaming profitability:** After years of subscriber-growth-at-all-costs, streaming companies are now focused on profitability — raising prices, cracking down on password sharing, and launching ad-supported tiers. Netflix has successfully turned profitable; others are still working to close the gap.\n\n**Telecom balance sheet pressure:** AT&T and Verizon carry heavy debt loads from past acquisitions and spectrum purchases. Free cash flow is being directed to debt reduction and sustaining dividends rather than growth.\n\n**Social media maturation:** Meta\'s Reels and WhatsApp monetisation continue to ramp, but TikTok and YouTube Shorts compete intensely for creator attention.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**DAU/MAU (Daily/Monthly Active Users):** The number of users engaging with a platform daily or monthly — the primary scale metric for advertising platforms.\n\n**ARPU (Average Revenue Per User):** Total revenue divided by users — measures monetisation efficiency.\n\n**CPM (Cost Per Mille):** The price an advertiser pays per 1,000 ad impressions. Higher CPMs reflect better targeting and higher-intent audiences.\n\n**Churn rate:** The percentage of subscribers who cancel in a given period — the enemy of subscription businesses.\n\n**Spectrum:** The radio frequencies used to transmit wireless signals — a finite, government-regulated, auctioned resource that telecoms buy at auction.\n\n**Content amortisation:** The accounting treatment of content spend — production costs are spread over the estimated useful life of the content rather than expensed immediately.\n\n**Net Promoter Score (NPS):** Frequently used by streaming and gaming companies as a leading indicator of subscriber retention.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'Communication services is intertwined with technology and the broader economy:\n\n**Technology:** Google and Meta are technology companies embedded in the communication services sector. Cloud infrastructure from AWS and Azure powers streaming platforms. AI development at OpenAI directly threatens incumbent search business models.\n\n**Consumer:** Advertising revenue depends on consumer spending — when budgets tighten, ad budgets are cut first. Streaming is a consumer discretionary spend.\n\n**Financials:** Fintech advertising is a major vertical for Google and Meta. Financial services companies are heavy digital advertisers.\n\n**Healthcare:** Digital health companies and pharma brands are significant advertisers on Google and social platforms.\n\n**Energy:** Data centres supporting streaming, social platforms, and search consume enormous amounts of electricity.\n\n**Real estate:** The telecom sector requires physical infrastructure — tower sites, data centres, and last-mile cable networks are real assets with real estate characteristics.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in a communication services company, ask:\n\n1. **For ad-supported platforms: what is the cyclical exposure?** Digital advertising falls disproportionately in recessions — understand how dependent the business is on ad market health.\n\n2. **For streaming: is subscriber growth sustainable, and what is the content cost trajectory?** Marginal content costs should decline as subscriber bases grow for a business to be sustainably profitable.\n\n3. **For telecoms: what is the balance sheet?** High debt levels, combined with the need for continuous spectrum and network investment, constrains financial flexibility.\n\n4. **What is the AI threat or opportunity?** For search, understand how AI-generated summaries might affect click-through rates and ad revenue. For telecoms, understand if they can monetise the connectivity that AI demands.\n\n5. **What is the regulatory risk?** Antitrust actions, content regulation, and privacy laws can fundamentally alter business models.\n\n6. **What is the platform\'s creator/user ratio?** Platforms that attract creators attract audiences — understand whether creator monetisation is healthy enough to sustain supply.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // MATERIALS  (Issue #4)
  // ─────────────────────────────────────────────
  {
    sectorId: 'materials',
    sectorName: 'Materials',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The materials sector extracts, processes, and sells the physical building blocks of the global economy. It includes mining companies that dig up metals (copper, iron ore, gold, lithium), chemical companies that produce everything from fertilisers and coatings to speciality chemicals for semiconductors, forestry and paper companies, and packaging manufacturers. Materials are the raw inputs for virtually every manufactured product — the steel in a car, the copper in a power cable, the aluminium in an aircraft, the silicon in a microchip, and the plastic in a bottle all start as materials sector outputs. Because they sit at the top of the supply chain, materials companies have little pricing power of their own — they are price-takers in globally traded commodity markets. Their fortunes rise and fall with global industrial activity and, increasingly, with the pace of the energy transition.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: '**Mining:** Revenue equals volume produced × commodity spot price. Profitability depends on the cost to extract (cash cost per tonne) versus the market price. When prices are well above cash costs, mining companies print cash; when prices fall below cost, mines are shut.\n\n**Speciality chemicals:** Produce differentiated chemicals with unique performance characteristics — sold to industrial customers at a negotiated premium over commodity alternatives. Margins depend on R&D investment and switching costs.\n\n**Commodity chemicals (fertilisers, chlorine):** Operate closer to commodity pricing with thin margins. Volumes and utilisation rates are key drivers.\n\n**Packaging:** Convert raw materials (plastic, aluminium, paper) into packaging solutions. Margins depend on pass-through of raw material costs and service differentiation.\n\n**Gold and precious metals:** Revenue tracks the gold price. Gold miners\' profitability is highly leveraged to price changes — a 10% rise in gold price often produces 30–50% more operating income.',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Key drivers of materials sector performance:\n\n**Chinese industrial demand:** China consumes roughly 50–60% of most base metals. Its construction activity (steel, copper, cement), manufacturing output, and infrastructure investment are the single most important demand driver for global commodity markets.\n\n**US dollar strength:** Commodities are priced in USD globally. A stronger dollar makes commodities more expensive for non-US buyers, suppressing demand and prices.\n\n**Energy transition:** The shift to electric vehicles, wind turbines, and solar panels requires enormous quantities of copper, lithium, nickel, cobalt, and rare earth elements — creating structural demand tailwinds for critical minerals.\n\n**Supply disruptions:** Mine strikes, permitting delays, political instability in resource-rich countries, and weather events can tighten supply rapidly.\n\n**Interest rates:** Capital-intensive mining and chemical companies carry significant debt; higher rates increase financing costs.\n\n**Inflation:** Materials are often inflation hedges — real asset values tend to rise with general price levels.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'Materials in 2025–26 are navigating a complex commodity cycle:\n\n**Copper super-cycle thesis:** Copper is essential for EV charging infrastructure, power grid upgrades, and renewable energy — demand is expected to significantly outpace supply growth. Mines take 10–15 years to develop, so new supply is constrained.\n\n**Lithium correction:** After massive price spikes in 2022–23 driven by EV enthusiasm, lithium prices have corrected sharply as supply expanded faster than EV adoption. Lithium miners face margin pressure.\n\n**Steel and iron ore weakness:** Chinese property market weakness has reduced steel demand, keeping iron ore prices subdued.\n\n**Speciality chemicals recovery:** After a destocking cycle in 2023–24, chemical company volumes are recovering as industrial customers rebuild inventory.\n\n**Critical minerals geopolitics:** The US, EU, and allies are actively working to reduce dependence on Chinese processing of rare earths and battery materials, creating domestic investment opportunities.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**All-in sustaining cost (AISC):** The full cost to produce one ounce of gold (or one tonne of copper), including operating costs, sustaining capital, and royalties — the standard profitability measure for miners.\n\n**Spot price:** The current market price for immediate delivery of a commodity — determines revenue for producers.\n\n**Ore grade:** The concentration of metal in mined rock. Higher-grade ore is cheaper to process per unit of metal produced.\n\n**Backwardation / contango:** Commodity futures market structures. Backwardation (spot price above futures) signals near-term supply tightness; contango signals oversupply.\n\n**Critical minerals:** Materials essential to clean energy and defence technologies that have concentrated, geopolitically sensitive supply chains — lithium, cobalt, rare earths, gallium.\n\n**Speciality chemicals:** Chemicals with unique performance properties sold to industrial customers, commanding premium prices over commodity chemicals.\n\n**Spread:** For chemical companies, the difference between the price of chemical products and the cost of feedstock inputs.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'Materials are inputs for nearly every other sector:\n\n**Energy:** Mining is one of the most energy-intensive industries. Energy prices are a major cost driver. Conversely, the energy transition (solar, wind, EVs) is the largest new source of demand for critical minerals.\n\n**Industrials:** Metals and chemicals are the raw materials for every manufactured product. Industrial demand is the primary driver of base metal prices.\n\n**Technology:** Semiconductors require ultra-pure materials (silicon, gallium, germanium). Data centres depend on copper wiring and cooling systems.\n\n**Agriculture:** Fertilisers are made from potash, phosphate, and nitrogen (from natural gas). Materials companies are indirectly food security infrastructure.\n\n**Construction and real estate:** Steel, cement, and glass are fundamental construction inputs. Property cycles drive demand for these materials.\n\n**Government and geopolitics:** Resource nationalism, export bans (China restricting gallium exports), and strategic reserves are all materials sector issues with geopolitical dimensions.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in a materials company, ask:\n\n1. **What is the cost position?** Is the company a low-cost producer that can remain profitable when commodity prices fall, or a high-cost producer that needs favourable prices to survive?\n\n2. **What is the commodity price sensitivity?** Model what happens to earnings at prices 20% above and below current spot — materials companies are highly operationally leveraged.\n\n3. **What is the mine life and exploration pipeline?** For miners, the existing asset base depletes over time; new discoveries or acquisitions are needed to sustain production.\n\n4. **What is the geopolitical risk?** Operations in politically unstable countries face nationalisation, royalty increases, and operational disruptions.\n\n5. **Is this a cyclical or structural growth story?** Iron ore exposure is cyclical; copper and lithium have structural demand tailwinds from the energy transition.\n\n6. **What is the capital allocation track record?** Mining companies have a poor history of destroying value through acquisitions at commodity price peaks — look for disciplined capital returns.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // REAL ESTATE  (Issue #4)
  // ─────────────────────────────────────────────
  {
    sectorId: 'real-estate',
    sectorName: 'Real Estate',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The real estate sector owns, operates, develops, and finances properties — the physical locations where economic activity takes place. In the stock market, this sector is dominated by Real Estate Investment Trusts (REITs), which are specially structured companies that own income-producing properties and are required by law to distribute at least 90% of taxable income to shareholders as dividends. The sector spans a wide range of property types: office buildings, retail centres, apartment complexes, industrial warehouses, data centres, cell towers, medical facilities, and self-storage facilities. Real estate provides something that few other asset classes do — a direct claim on physical assets that generate recurring income (rent) and tend to appreciate with inflation over the long term. The sector\'s performance is closely tied to interest rates, local economic activity, and demographic trends.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: '**REITs (core model):** Collect rent from tenants under long-term leases, pay operating expenses and interest on mortgage debt, and distribute the remainder to shareholders. Net Operating Income (NOI) is the key profitability metric — it represents rental income minus property operating costs.\n\n**Development:** Property developers acquire land, construct buildings, and sell or lease them — earning the spread between development costs and the property\'s completed value.\n\n**Real estate services:** Brokerages (CBRE, JLL) earn transaction commissions and property management fees. Revenue is tied to transaction volume.\n\n**Real estate finance:** Mortgage REITs borrow at short-term rates and lend at long-term rates — earning the spread. They are highly sensitive to the shape of the yield curve.\n\n**Speciality REITs (data centres, cell towers):** Charge tenants for space, power, and connectivity infrastructure. Revenue is highly recurring and benefits from the digital economy.',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Key drivers of real estate sector performance:\n\n**Interest rates:** The most important driver. Rising rates increase REIT borrowing costs and reduce the present value of future rental income streams, directly compressing property valuations. REITs and bonds compete for yield-seeking investors.\n\n**Vacancy rates and rental demand:** Determined by local economic conditions, population growth, and business expansion. Low vacancy = pricing power; high vacancy = rent concessions and value decline.\n\n**Inflation:** Long-term leases with annual rent escalation clauses protect landlords. Commercial real estate is often considered an inflation hedge.\n\n**Remote work:** Has structurally impaired demand for office space in many markets — one of the biggest structural changes in real estate in decades.\n\n**E-commerce:** Drives demand for logistics and industrial warehousing (Amazon fulfilment centres) while undermining retail shopping centre demand.\n\n**Demographics:** Millennial household formation, an ageing population requiring senior housing, and migration to Sun Belt cities are reshaping demand by property type.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'Real estate in 2025–26 is bifurcated across property types:\n\n**Office:** The weakest major property category. Remote and hybrid work has led to historically high vacancy rates in many CBD markets. Older buildings face obsolescence; newer, amenity-rich properties command premiums. Distress is concentrated in Class B and C office buildings.\n\n**Industrial/logistics:** Strong demand from e-commerce and domestic manufacturing reshoring. Vacancy rates are rising modestly from near-zero levels as significant new supply has been delivered.\n\n**Data centres:** The hottest property type. AI infrastructure investment is creating enormous demand for purpose-built data centre facilities with power-dense configurations.\n\n**Multifamily (apartments):** Demand is supported by housing affordability constraints keeping households renting longer. Supply has been elevated in Sun Belt markets, creating near-term rent pressure.\n\n**Retail:** Two-tier market — well-located grocery-anchored centres and luxury retail perform well; struggling enclosed malls face ongoing decline.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**REIT (Real Estate Investment Trust):** A tax-advantaged structure that owns income-producing real estate; must distribute 90%+ of taxable income as dividends.\n\n**NOI (Net Operating Income):** Rental income minus operating expenses (maintenance, property management, insurance, taxes) — the core profitability metric for a property.\n\n**Cap rate (Capitalisation Rate):** NOI divided by property value — the yield an investor earns assuming no debt. Lower cap rates reflect premium properties or expensive markets.\n\n**FFO (Funds From Operations):** The REIT equivalent of earnings — net income adjusted for depreciation and gains on property sales. The standard REIT profitability metric.\n\n**Occupancy rate:** The percentage of leasable space that is currently occupied by paying tenants.\n\n**Loan-to-Value (LTV):** Property debt divided by appraised value — a leverage measure. High LTV means the property is heavily mortgaged.\n\n**Triple net lease (NNN):** A lease structure where the tenant pays property taxes, insurance, and maintenance — reducing landlord operating risk.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'Real estate intersects with most of the economy:\n\n**Financials:** Mortgage lending is a core banking product. Bank balance sheets hold commercial real estate loans — office distress creates bank credit concerns. REITs issue equity and debt in capital markets.\n\n**Technology:** Data centre REITs are infrastructure for cloud computing and AI. E-commerce has reshaped demand for warehouse vs. retail space.\n\n**Consumer:** Retail real estate depends on consumer spending to drive store traffic and tenant health. Restaurant and entertainment tenants are major mall anchors.\n\n**Industrials:** Manufacturing reshoring is driving new industrial and warehouse demand. Construction firms build properties; materials companies supply the inputs.\n\n**Healthcare:** Medical office buildings and senior housing facilities are growing REIT property categories as populations age.\n\n**Energy:** Buildings consume enormous amounts of energy. Green building standards and energy efficiency investments are increasingly important to property values and tenant lease decisions.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in a real estate company or REIT, ask:\n\n1. **What is the interest rate sensitivity?** REITs carry debt — understand the maturity profile and whether the company is exposed to floating-rate debt that rises with rates.\n\n2. **What is the property type, and what are the structural demand trends?** Industrial and data centres have tailwinds; office has structural headwinds. Know where the properties are on that spectrum.\n\n3. **What is the lease structure and duration?** Long-term leases with rent escalations provide income stability; short-term leases offer repricing upside but more vacancy risk.\n\n4. **What is the payout ratio (as a % of FFO)?** REITs must distribute 90% of taxable income, but payout ratios above 100% of FFO signal a dividend at risk.\n\n5. **What is the balance sheet quality?** Leverage (LTV) and debt maturity schedule are critical — REITs with near-term debt maturities face refinancing risk in a high-rate environment.\n\n6. **What is the geographic concentration?** Markets with population growth and business expansion support rent growth; stagnant or declining markets face chronic vacancy challenges.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // TRANSPORTATION  (Issue #4)
  // ─────────────────────────────────────────────
  {
    sectorId: 'transportation',
    sectorName: 'Transportation',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The transportation sector moves people and goods across cities, continents, and oceans. It encompasses airlines that carry passengers and cargo, freight railroads that move bulk commodities and manufactured goods across continents, shipping companies that operate cargo vessels across global trade lanes, trucking companies that provide last-mile and regional freight, and logistics orchestrators that manage supply chains end-to-end. Transportation is the circulatory system for physical commerce — without it, just-in-time manufacturing breaks down, retailers run out of inventory, and consumers pay higher prices. The sector is characterised by high capital intensity (planes, ships, and rail infrastructure are expensive), significant fixed costs (you must fly the route whether the plane is full or not), and thin margins. Profitability is acutely sensitive to fuel prices, economic activity, and capacity discipline.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: '**Airlines:** Sell passenger seats at revenue-maximising prices using yield management algorithms. Revenue per available seat mile (RASM) minus cost per available seat mile (CASM) determines profit. Cargo, ancillary fees (baggage, upgrades), and loyalty programmes now contribute significantly.\n\n**Freight railroads:** Charge for hauling freight by the car-load or intermodal container. Revenue is a function of volume and pricing power. US Class I railroads (BNSF, Union Pacific) operate near-monopoly networks on key routes.\n\n**Shipping/maritime:** Container lines charge freight rates that fluctuate dramatically with supply-demand balance. Bulk carriers (dry bulk, tankers) earn spot rates or contract rates for hauling commodities.\n\n**Trucking:** Charge per mile or per load. Revenue is driven by freight volumes, load-to-truck ratios (tighter = higher rates), and driver availability.\n\n**Logistics brokers (C.H. Robinson, XPO):** Match shippers with carriers and earn a spread — revenue is transactional and highly cyclical.',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Key drivers of transportation sector performance:\n\n**Fuel costs:** Jet fuel, marine bunker fuel, and diesel are major operating expenses for airlines, ships, and trucks. A 10% rise in oil prices can wipe out airline profits.\n\n**Economic activity and trade volumes:** Freight volumes track GDP — in recessions, fewer goods move and rates collapse. Shipping rates are a leading indicator of global trade health.\n\n**Capacity discipline:** The history of airlines and shipping companies is a cycle of overcapacity → rate collapse → consolidation → capacity discipline → recovery. Companies that manage supply carefully earn better returns.\n\n**E-commerce growth:** Has been a structural tailwind for parcel delivery (UPS, FedEx, DHL) and last-mile logistics, but also intensifies peak/off-peak seasonality.\n\n**Labour:** Pilot shortages, port worker strikes, and truck driver shortages constrain capacity and raise costs.\n\n**Infrastructure:** Port congestion, airport slot constraints, and rail bottlenecks are recurring operational challenges.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'Transportation in 2025–26 reflects a post-COVID normalisation:\n\n**Airlines:** Passenger demand has fully recovered and surpassed pre-COVID levels. International long-haul and premium cabin demand is robust. Capacity is constrained by aircraft delivery delays (Boeing quality issues) and pilot availability, supporting yields.\n\n**Freight recession ending:** After a 2022–24 freight downturn where excess capacity collapsed trucking rates, the market is gradually tightening as smaller carriers exit and volumes recover with industrial activity.\n\n**Container shipping reset:** After the extraordinary COVID-era freight rate spike (container rates up 10x), rates have normalised. Disruptions via Houthi attacks on Red Sea shipping lanes have added volatility and slightly elevated rates.\n\n**Rail volume recovery:** Intermodal rail volumes are recovering alongside industrial activity and as railroads invest in service reliability following the precision scheduled railroading backlash.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**RPM / ASM (Revenue Passenger Miles / Available Seat Miles):** For airlines, RPM is the miles flown by paying passengers; ASM is the total capacity. Load factor = RPM/ASM.\n\n**RASM / CASM:** Revenue and Cost per Available Seat Mile — the airline industry\'s standard unit economics.\n\n**Yield:** Average revenue per passenger mile — a measure of fare pricing power.\n\n**TEU (Twenty-foot Equivalent Unit):** The standard measurement for container shipping capacity and volumes.\n\n**Spot rate vs. contract rate:** Spot rates are negotiated for immediate one-time shipments; contract rates are agreed in advance for a period. The spread between them signals market tightness.\n\n**Load factor:** The percentage of capacity (seats, trailer space, container slots) that is occupied by paying freight or passengers.\n\n**Drayage:** Short-distance trucking that moves containers between ports, rail yards, and warehouses — the "last mile" of intermodal shipping.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'Transportation sits at the intersection of trade and the economy:\n\n**Energy:** Fuel is the single largest cost for airlines, shipping, and trucking. Energy price movements directly affect transportation economics; interest in electrification (electric trucks, sustainable aviation fuel) is growing.\n\n**Consumer:** E-commerce drives parcel delivery volumes. Consumer spending determines passenger travel demand and retail goods shipments.\n\n**Industrials:** Manufacturing output determines freight volumes. Reshoring of production creates new domestic logistics demand.\n\n**Agriculture:** Rail and ship the primary modes for moving bulk commodities — grain, coal, potash — from production regions to ports.\n\n**Real estate:** Logistics real estate (warehouses near ports and urban centres) is demand-driven by e-commerce and just-in-time inventory management.\n\n**Government:** Aviation and maritime are regulated industries. Infrastructure investment (airports, ports, highways) is publicly funded and shapes competitive dynamics.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in a transportation company, ask:\n\n1. **What is the fuel cost exposure and hedging policy?** Airlines and shipping companies with unhedged fuel exposure are binary bets on energy prices.\n\n2. **What is the capacity utilisation trend?** High load factors or tight truck-to-load ratios signal pricing power; low utilisation means rates will fall.\n\n3. **Is the market structure consolidating or fragmented?** Consolidated industries (US airlines, Class I railroads) have pricing power; fragmented trucking is highly cyclical.\n\n4. **What is the balance sheet and pension liability?** Airlines and railroads often carry significant debt and defined benefit pension obligations from their capital-intensive, unionised histories.\n\n5. **What is the ancillary revenue mix?** Airlines with strong loyalty programmes and cargo operations are more resilient than pure passenger carriers.\n\n6. **What is the exposure to global trade disruption?** Container shipping and air freight are acutely exposed to geopolitical trade tensions and supply chain disruptions.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // AGRICULTURE  (Issue #4)
  // ─────────────────────────────────────────────
  {
    sectorId: 'agriculture',
    sectorName: 'Agriculture & Food',
    cards: [
      {
        id: 1,
        title: 'What This Sector Does',
        body: 'The agriculture and food sector produces and processes the food that sustains global populations. It spans the entire value chain: upstream agribusinesses that sell seeds, fertilisers, and crop protection chemicals to farmers; farm equipment manufacturers like Deere & Company that mechanise production; commodity traders and processors (Archer-Daniels-Midland, Cargill) that buy raw crops and convert them into ingredients; food manufacturers (Nestlé, Kraft Heinz) that turn ingredients into packaged consumer products; and food service companies (Sysco) that supply restaurants and institutions. The sector is simultaneously a consumer staples business (food is the most non-discretionary purchase) and a commodity business (crop prices are set by global supply and demand). It is also increasingly a technology story: precision agriculture, gene-editing, and vertical farming are reshaping how food is produced.',
      },
      {
        id: 2,
        title: 'How It Makes Money',
        body: '**Seed and agrochemicals (Corteva, Bayer Crop Science):** Sell proprietary seeds — particularly genetically modified varieties with higher yields or pest resistance — and herbicides and fungicides at significant premiums. Trait licensing is a recurring revenue stream.\n\n**Farm equipment (Deere & Company):** Sell capital equipment (tractors, combines, planters) and earn a large aftermarket in parts and service. Precision agriculture software subscriptions are a growing revenue stream.\n\n**Commodity processors (ADM, Bunge):** Crush soybeans and corn to extract oil and meal, mill wheat into flour, and trade agricultural commodities globally. Margins are thin spreads between commodity inputs and processed outputs — volume and hedging discipline matter most.\n\n**Food manufacturers:** Blend ingredients into branded consumer products sold at a premium. Gross margins of 30–50% support marketing and R&D investment.\n\n**Food service distributors:** Earn logistics margins between food manufacturers and end customers (restaurants, hospitals, schools).',
      },
      {
        id: 3,
        title: 'What Moves It',
        body: 'Key drivers of agriculture and food sector performance:\n\n**Crop yields and weather:** Drought, flooding, and early frost reduce crop production and spike commodity prices. El Niño and La Niña cycles significantly affect global growing conditions.\n\n**Commodity price cycles:** Corn, soy, and wheat are globally traded commodities with prices determined by USDA crop reports, global inventory levels, and export demand.\n\n**Fertiliser prices:** Input costs for farmers — heavily influenced by natural gas prices (nitrogen fertilisers) and geopolitics (Russia is a major exporter of potash and nitrogen).\n\n**Global food demand:** Rising middle-class populations in Asia and Africa are shifting toward protein-rich diets, increasing demand for animal feed grains and edible oils.\n\n**Trade policy:** Export restrictions, tariffs, and trade agreements directly affect global commodity flows. China\'s soybean imports are a key demand driver for US farmers.\n\n**Precision agriculture adoption:** GPS-guided equipment, variable rate application, and soil sensors are improving yield efficiency — pressuring input volumes but expanding the technology addressable market.',
      },
      {
        id: 4,
        title: 'Current State',
        body: 'Agriculture and food in 2025–26 is navigating an agricultural cycle downturn after the commodity boom:\n\n**Farm income correction:** The 2021–22 commodity price spike (driven by Russia-Ukraine war disrupting grain and fertiliser exports) boosted US farm income to record levels. Prices have since normalised; farm incomes are declining, which is reducing equipment demand — Deere has seen order books weaken significantly.\n\n**Food manufacturer margin recovery:** Consumer packaged goods companies are seeing volume pressure as consumers trade down from branded to private label. The years of "greedflation" accusations have made further price increases politically and commercially difficult.\n\n**Precision agriculture acceleration:** Deere\'s autonomous tractors, crop sensing satellites, and AI-driven agronomy advisory services are growing rapidly, creating a more recurring technology revenue mix.\n\n**Protein demand and GLP-1 uncertainty:** Long-term protein demand growth from emerging markets remains intact, but GLP-1 weight loss drugs create a wildcard — if broad adoption reduces caloric intake, food company volumes could face structural headwinds.',
      },
      {
        id: 5,
        title: 'Key Terms',
        body: '**Commodity price (bushel price):** The market price for standardised units of agricultural commodities — corn, soybeans, and wheat are measured in bushels and traded on the Chicago Mercantile Exchange.\n\n**Crush spread:** For soybean processors, the margin between the value of soybean oil and meal extracted and the cost of the whole soybeans — the core profitability measure for crushers.\n\n**Grain elevator:** A facility that stores and loads bulk grain for transport — the physical infrastructure of commodity trading.\n\n**USDA crop report:** Regular government reports estimating planted acreage, growing conditions, and projected yields — market-moving events in commodity markets.\n\n**Trait licensing:** Royalty income earned by seed companies (Corteva, Bayer) when farmers use proprietary genetically modified seed traits, paid per bag planted.\n\n**Food cost inflation:** The year-over-year change in the price of food commodities — a key input for food manufacturers and a headline consumer issue.\n\n**Precision agriculture:** Technology-enabled farming that uses GPS, sensors, and data analytics to optimise seed, fertiliser, and water application by location within a field.',
      },
      {
        id: 6,
        title: 'Sector Connections',
        body: 'Agriculture connects to nearly every part of the global economy:\n\n**Energy:** Natural gas is the primary feedstock for nitrogen fertilisers — energy prices directly affect input costs for farmers worldwide. Farm equipment runs on diesel; electrification is emerging.\n\n**Materials:** Potash and phosphate mining provides critical fertiliser ingredients. Chemical companies supply crop protection inputs.\n\n**Transportation:** Moving grain from Midwestern US farms to export terminals and global markets requires rail, barge, and ocean shipping infrastructure.\n\n**Consumer:** Food manufacturers are the primary customers of agricultural commodity processors. Consumer preferences (plant-based, organic, sustainable) shape demand for specific crops.\n\n**Financials:** Agricultural lending by rural banks and the Farm Credit System provides the financing farmers need to purchase inputs before harvest revenues arrive. Commodity futures markets allow hedging.\n\n**Government:** Agricultural subsidies, crop insurance programmes, and trade negotiations directly affect farm income and planting decisions. The US Farm Bill is renegotiated every five years.',
      },
      {
        id: 7,
        title: 'Questions Before Investing',
        body: 'Before investing in an agriculture or food company, ask:\n\n1. **Where is the sector in the agricultural commodity cycle?** High commodity prices benefit E&P farmers and processors; low prices benefit food manufacturers. Understand the cycle position.\n\n2. **What is the input cost exposure?** For food manufacturers, understand raw material costs and hedging programmes. For farmers and equipment companies, fertiliser and fuel costs are critical.\n\n3. **For equipment companies: what is the replacement cycle timing?** Farm equipment demand is highly cyclical and tied to farm income — understand where in the multi-year cycle the market sits.\n\n4. **What is the exposure to trade policy risk?** China is the largest buyer of US soybeans and pork — trade tensions can devastate specific agricultural export markets overnight.\n\n5. **Is there technology optionality?** Companies building precision agriculture platforms (software, connectivity, autonomous operation) command premium valuations relative to pure-play commodity businesses.\n\n6. **What is the pricing power on branded products?** For consumer food companies, monitor private-label market share trends and gross margin trajectory — the gap narrows when brands cannot justify their premium.',
      },
    ],
  },
];

const sectorLearningMap = Object.fromEntries(
  sectorLearning.map(s => [s.sectorId, s])
);

module.exports = { sectorLearning, sectorLearningMap };
