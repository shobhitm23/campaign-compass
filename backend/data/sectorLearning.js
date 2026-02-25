// backend/data/sectorLearning.js
// Phase 1B — Sector Learning Modules
// Issue #3 pilot: Technology, Healthcare, Financials (21 cards)
// Issue #4 will add the remaining 8 sectors

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
];

const sectorLearningMap = Object.fromEntries(
  sectorLearning.map(s => [s.sectorId, s])
);

module.exports = { sectorLearning, sectorLearningMap };
