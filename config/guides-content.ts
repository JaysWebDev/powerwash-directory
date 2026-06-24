export type GuideSection = {
  heading: string;
  content: string[];
  bullets?: string[];
  numbered?: string[];
};

export type GuideContent = {
  slug: string;
  title: string;
  headline: string;
  metaDescription: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  intro: string;
  sections: GuideSection[];
  relatedServices: string[];
  relatedGuides: string[];
};

export const guidesContent: GuideContent[] = [
  {
    slug: "power-washing-cost",
    title: "How Much Does Power Washing Cost? (2026 Pricing Guide) | WashPro",
    headline: "How Much Does Power Washing Cost? (2026 Pricing Guide)",
    metaDescription:
      "Real 2026 power washing prices by service type — driveway, house exterior, roof, deck, gutters. What drives costs up and down, and how to compare quotes fairly.",
    publishDate: "2026-01-15",
    updatedDate: "2026-06-01",
    readTime: "6 min read",
    intro:
      "Power washing prices vary significantly based on the service type, surface area, location, and the condition of what you're cleaning. This guide covers what homeowners typically pay in 2026, what drives prices up or down, and how to make sure you're getting a fair quote rather than a lowball that ends in a problem.",
    sections: [
      {
        heading: "Prices by Service Type",
        content: [
          "These ranges reflect typical contractor pricing in mid-cost U.S. markets. Coastal cities, New York, California, and major metro areas typically run 20–40% higher. Rural markets often run 10–20% lower.",
        ],
        bullets: [
          "House exterior (soft wash, average home): $200–$500 (avg $320)",
          "Driveway (2-car, up to 1,000 sq ft): $100–$250 (avg $165)",
          "Deck or patio (200–500 sq ft): $150–$400 (avg $225)",
          "Roof cleaning (average home): $250–$600 (avg $400)",
          "Fence (100 linear ft): $100–$300 (avg $185)",
          "Gutter cleaning (average single-story): $75–$200 (avg $140)",
          "Solar panels (10–20 panels): $100–$250 (avg $175)",
          "Bundle (house + driveway + deck): $400–$900",
        ],
      },
      {
        heading: "What Makes Prices Go Up",
        content: [
          "Several factors commonly add to the base price. Understanding them helps you compare quotes accurately and not be surprised by adjustments:",
        ],
        bullets: [
          "Two-story or taller homes: add 20–40% for house washing due to equipment setup and safety requirements",
          "Heavy moss, lichen, or long-neglected buildup: add 15–30% — more time, more product",
          "Very large driveways (over 2,000 sq ft): most contractors price per square foot above a base threshold",
          "Steep roof pitch (over 6/12): fall protection and longer job time add cost",
          "Remote or rural location: travel surcharges of $30–$75 are common beyond 20–30 miles",
          "Commercial vs. residential: commercial pricing reflects higher insurance requirements and often larger equipment",
        ],
      },
      {
        heading: "How to Save Money Without Cutting Corners",
        content: [
          "The biggest savings opportunity is bundling. When a crew is already at your property, adding a second service costs only the incremental labor and chemical — not another trip, setup, or mobilization fee. Most companies discount 10–20% when you add services to an existing job.",
          "Off-season booking (late fall and winter in cold climates) can get you 10–15% off in markets where washing slows down. Some companies also offer annual maintenance contracts at 10–15% below their standard rates for customers who commit to twice-yearly visits.",
        ],
      },
      {
        heading: "How to Compare Quotes Fairly",
        content: [
          "Get at least 3 quotes for any job over $250. When comparing, make sure you're comparing the same scope — some quotes include chemical pre-treatment and some don't, some quote per linear foot and some flat rate.",
        ],
        bullets: [
          "Confirm the quote is all-inclusive: labor, chemicals, equipment — no surprise add-ons",
          "Ask whether the company is insured — request a Certificate of Insurance for any job over $200",
          "For house or roof washing: ask what cleaning solution they use and whether it's bleach-based (the industry standard) or something else",
          "Beware unusually low quotes: under-market pricing typically means uninsured labor, diluted solutions, or a fly-by-night operation with no recourse if something is damaged",
          "Check that the company has verifiable reviews (Google, Angi, BBB) — not just a website with stock photos",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "driveway", "deck-restoration", "roof-cleaning"],
    relatedGuides: ["vet-power-washing-contractor", "pressure-vs-soft-washing"],
  },

  {
    slug: "pressure-vs-soft-washing",
    title: "Pressure Washing vs Soft Washing: Which Does Your Home Need? | WashPro",
    headline: "Pressure Washing vs Soft Washing: Which Does Your Home Need?",
    metaDescription:
      "Pressure washing and soft washing serve different surfaces. Using the wrong method can damage your home. Learn which technique is right for siding, roofs, concrete, and more.",
    publishDate: "2026-02-01",
    updatedDate: "2026-06-01",
    readTime: "5 min read",
    intro:
      "\"Pressure washing\" and \"soft washing\" are often used interchangeably — by homeowners and even by some contractors. But they're meaningfully different techniques suited to different surfaces. Using the wrong method can crack siding, strip shingle granules, or damage painted surfaces. Here's how to tell which approach your project actually needs.",
    sections: [
      {
        heading: "What's the Actual Difference?",
        content: [
          "Pressure washing uses high-pressure water — typically 1,500–4,000+ PSI — to physically blast away dirt, staining, and organic growth. The force does the work. Chemical use is minimal or zero.",
          "Soft washing uses low water pressure — typically 40–500 PSI, comparable to a garden hose on a medium setting — combined with cleaning solutions (typically diluted sodium hypochlorite with surfactants). The chemistry does the cleaning, not the force.",
          "The key performance difference: soft washing kills organic growth (algae, mold, mildew) at the root level. Pressure alone displaces it — the spores remain on the surface and regrow within weeks or months. This is why properly soft-washed surfaces stay clean 3–5x longer than pressure-washed ones for organic contamination.",
        ],
      },
      {
        heading: "When Pressure Washing Is the Right Tool",
        content: [
          "Pressure washing is ideal for hard, durable surfaces where you need to remove physical buildup rather than organic growth:",
        ],
        bullets: [
          "Concrete driveways, sidewalks, and patios",
          "Brick and masonry (at 1,000–2,000 PSI with appropriate tip)",
          "Parking lots and commercial hard surfaces",
          "Unpainted concrete block",
          "Metal surfaces (equipment, trailers, fencing)",
          "Stripping loose paint before repainting (specialized application)",
        ],
      },
      {
        heading: "When Soft Washing Is the Only Safe Choice",
        content: [
          "These surfaces should never be exposed to high-pressure water. Any company that proposes otherwise should raise a red flag:",
        ],
        bullets: [
          "Vinyl, wood, and fiber cement (Hardie board) siding — pressure strips paint and forces water behind panels",
          "Asphalt shingle roofs — pressure blasts granules off, voiding warranties and shortening roof life",
          "Painted surfaces of any kind",
          "Stucco and EIFS (Dryvit) — highly pressure-sensitive",
          "Wood decks — medium-low pressure at most; soft wash preferred for algae and mildew",
          "Fencing of most materials",
          "Solar panels — pressure scratches anti-reflective coatings",
        ],
      },
      {
        heading: "Surfaces That Need a Hybrid Approach",
        content: [
          "Some surfaces benefit from a combination: chemical pre-treatment to kill organic growth, then moderate pressure to rinse and remove it physically:",
        ],
        bullets: [
          "Brick and masonry with algae or mildew: chemical dwell, then 1,000–1,500 PSI rinse",
          "Stamped and decorative concrete: low-to-medium pressure to protect sealers; chemical pre-treatment for staining",
          "Older or weathered concrete that shows pitting: reduce PSI, increase chemical dwell time",
          "Brick pavers: chemical pre-treatment, then low-medium pressure with a surface cleaner to avoid disturbing joint sand",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "roof-cleaning", "driveway"],
    relatedGuides: ["power-washing-cost", "remove-roof-algae"],
  },

  {
    slug: "remove-roof-algae",
    title: "How to Remove Algae and Black Streaks from Your Roof | WashPro",
    headline: "How to Remove Algae and Black Streaks from Your Roof",
    metaDescription:
      "Those dark streaks on your roof are algae — here's what causes them, how to remove them safely, and how to prevent them from coming back for years.",
    publishDate: "2026-02-15",
    updatedDate: "2026-06-01",
    readTime: "5 min read",
    intro:
      "Dark streaks on asphalt roofs are one of the most common cosmetic complaints from homeowners — and one of the most misunderstood. Understanding what they are, why they spread, and how to remove them properly can save you from a premature and expensive roof replacement.",
    sections: [
      {
        heading: "What Those Streaks Actually Are",
        content: [
          "The dark streaks on asphalt shingle roofs are almost universally caused by Gloeocapsa Magma — an airborne cyanobacteria (a type of algae) that feeds on the limestone granule filler in asphalt shingles. It starts as small spots and spreads as streaks that run down the roof slope, following water flow.",
          "Green patches are moss or lichen — different organisms, different treatment approach, and a more urgent problem. Moss root systems physically lift and separate shingles. Lichen bonds to the shingle surface with a chemical bond that makes it harder to remove and leaves surface pitting if left for years.",
          "Understanding which you have matters because the treatment and urgency differ. Streaks alone (algae) are primarily cosmetic in the early stages. Visible moss or lichen growth needs prompt attention.",
        ],
      },
      {
        heading: "Is It Damaging Your Roof?",
        content: [
          "Algae is cosmetic initially — but long-term, it retains moisture against shingles and accelerates granule loss. Many shingle manufacturers explicitly note algae as a contributing factor in premature shingle failure, and some warranties require treatment when algae coverage reaches certain thresholds.",
          "Moss and lichen are structural concerns. Heavy moss coverage causes physical lifting of shingles and dramatically increases the amount of water trapped against the roof deck. Lichen literally etches into the shingle surface over time. If you see significant green growth, schedule cleaning within the current season — not next year.",
        ],
      },
      {
        heading: "The Only Safe Removal Method: Soft Washing",
        content: [
          "The Asphalt Roofing Manufacturers Association (ARMA) recommends a diluted sodium hypochlorite (bleach) solution applied at low pressure as the industry-standard removal method. This kills algae and moss at the root and washes clear in the next rain.",
          "What not to do: pressure washing shingles at high PSI blasts granules off the shingle surface — those granules are the primary UV protection layer and cannot be replaced. A single high-pressure wash can strip years of life from a roof. Any contractor who proposes pressure washing your asphalt shingles should be declined.",
          "For stubborn lichen, professional cleaners use higher-concentration bleach solutions with longer dwell times. Some lichen takes 1–2 rainfalls after treatment to fully release and wash away — this is normal.",
        ],
      },
      {
        heading: "Preventing Regrowth",
        content: [
          "Zinc and copper ridge strips are the most effective long-term prevention. As rainwater runs over the metal, it picks up metal ions that inhibit algae and moss growth over the entire roof below the strip. Each set typically provides 3–5 years of effective protection.",
        ],
        bullets: [
          "Install zinc or copper ridge strips after cleaning",
          "Trim overhanging branches — shade and moisture retention accelerate growth",
          "Clean gutters regularly — backed-up water sitting on the roof edge promotes moss at the eaves",
          "Consider algae-resistant shingles (with copper granules) at your next replacement",
        ],
      },
    ],
    relatedServices: ["roof-cleaning", "house-soft-washing", "gutter-cleaning"],
    relatedGuides: ["pressure-vs-soft-washing", "vet-power-washing-contractor"],
  },

  {
    slug: "best-time-to-power-wash",
    title: "Best Time of Year to Power Wash Your House | WashPro Directory",
    headline: "Best Time of Year to Power Wash Your House",
    metaDescription:
      "Timing a house wash correctly means better results and longer-lasting clean. Learn the best window by region and what conditions to avoid for soft washing.",
    publishDate: "2026-03-01",
    updatedDate: "2026-06-01",
    readTime: "4 min read",
    intro:
      "The best time to power wash your home isn't just about convenience — it directly affects how long the results last. For soft washing especially, there are weather conditions that let the chemistry work properly and conditions that waste your money. Here's what to look for in your region.",
    sections: [
      {
        heading: "What You're Actually Waiting For",
        content: [
          "Three conditions make for an ideal wash window. All three together give the best results:",
        ],
        bullets: [
          "Temperatures above 50°F: cleaning solutions become less effective below 50°F and surfaces can freeze at 32°F — this is the hardest constraint in cold climates",
          "A dry stretch of 24–48 hours after the wash: soft-wash chemistry needs time to cure before rain dilutes it. A wash followed immediately by a downpour undoes a significant portion of the benefit",
          "Not during intense direct sunlight on hot surfaces: cleaning solutions can dry and streak before they have time to work if applied to sun-heated siding in peak summer heat",
        ],
      },
      {
        heading: "Best Windows by Region",
        content: ["Regional climate dictates when these conditions align most reliably:"],
        bullets: [
          "Southeast (FL, GA, SC, NC, AL, MS): spring (March–May) after peak pollen; fall (October–November) is equally good. Avoid July–August peak heat and humidity for soft washing",
          "Mid-Atlantic and Northeast (VA, MD, PA, NJ, NY, New England): late spring (May–June) or early fall (September–October). Avoid late fall when falling leaves immediately re-contaminate clean surfaces",
          "Midwest (OH, IN, IL, MI, WI, MN): late spring through early fall (May–September). Avoid late fall in hard-freeze zones",
          "Pacific Northwest (WA, OR): target a dry summer window (July–August); nearly any mild, dry day is suitable year-round for pressure work on concrete",
          "Southwest and California: nearly any time of year. Post-rainy season is ideal for removing whatever accumulated during wetter months",
        ],
      },
      {
        heading: "When to Avoid Washing",
        content: [
          "These conditions produce poor results or can actively cause damage:",
        ],
        bullets: [
          "Immediately before forecast rain: wait at least 24 hours after soft washing before rain hits the surface",
          "During frost season: water in crevices and masonry joints freezes, expands, and can crack grout, caulk, and painted surfaces",
          "Drought or burn-ban periods: some jurisdictions restrict outdoor water use during extreme conditions",
          "Late fall in cold climates: surfaces have minimal drying time and you may be cleaning under trees that are still dropping leaves",
        ],
      },
      {
        heading: "A Note on Concrete and Hard Surfaces",
        content: [
          "The timing rules above apply primarily to soft washing (house, roof, siding). Pressure washing concrete and driveways is less weather-sensitive — as long as it's above freezing and not raining at the moment of washing, concrete cleaning can be done year-round in most climates.",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "driveway", "deck-restoration"],
    relatedGuides: ["pressure-vs-soft-washing", "power-washing-cost"],
  },

  {
    slug: "power-washing-home-value",
    title: "Does Power Washing Increase Home Value Before Selling? | WashPro",
    headline: "Does Power Washing Increase Home Value Before Selling?",
    metaDescription:
      "Curb appeal is one of the highest-ROI pre-sale investments you can make. Learn which surfaces to prioritize, how much washing costs vs what it recovers, and when to schedule it.",
    publishDate: "2026-03-15",
    updatedDate: "2026-06-01",
    readTime: "5 min read",
    intro:
      "Curb appeal is one of the few pre-sale improvements where a small, fast investment reliably pays back at a high multiple. A $300–$500 exterior cleaning can eliminate the first-impression problem that causes buyers to low-ball before they've even walked in the front door.",
    sections: [
      {
        heading: "The Curb Appeal Effect on Offers",
        content: [
          "Real estate research consistently shows that buyers form price impressions before leaving their car. A home with clean siding, a bright driveway, and a freshly washed deck communicates maintenance — the opposite communicates neglect, even if the interior is immaculate and recently updated.",
          "Listing agents routinely advise sellers to prioritize exterior cleaning before photography. Listing photos taken before a wash dramatically underperform the same home photographed after cleaning. In a competitive market, this affects the number of showing requests within the first 72 hours — the period that most often determines final sale price.",
        ],
      },
      {
        heading: "Highest-ROI Surfaces for Home Sellers",
        content: [
          "Not every surface has the same return. Focus the budget on what buyers see first:",
        ],
        bullets: [
          "Driveway — the first surface buyers see from the street. Dark stains and tire marks immediately signal deferred maintenance. Cost: $100–$250. ROI potential: very high.",
          "House siding — dirty gray or streaked siding with visible algae makes a home look 5–10 years older. Soft washing makes one of the most dramatic visual improvements of any pre-sale investment. Cost: $200–$450. ROI potential: very high.",
          "Front walkway and entry steps — the path buyers walk before ringing the doorbell. Cost: $75–$150. ROI potential: high.",
          "Deck or back patio — buyers mentally add replacement cost when they see gray, weathered deck boards. Washing alone dramatically improves appearance; washing and staining before sale often recovers 3–5x its cost in perceived value. Cost: $150–$500. ROI potential: high.",
        ],
      },
      {
        heading: "What Washing Can (and Can't) Do",
        content: [
          "Washing removes surface contamination: algae, mold, dirt, tire marks, oxidation staining. It doesn't fix peeling paint, cracked concrete, damaged siding panels, or structural issues. If those problems exist, washing first is still the right call — a clean surface reveals the full extent of the damage so you can address it, and a clean surface is required before any painting or repair work.",
          "A freshly washed home that has underlying cosmetic issues still shows those issues — just without the compounding effect of dirt and algae making everything look worse simultaneously.",
        ],
      },
      {
        heading: "Timing Before Listing",
        content: [
          "Schedule exterior washing 1–2 weeks before professional listing photos. This allows time for any second passes needed if results aren't perfect, and surfaces are fully dry and looking their best for photography.",
          "For homes where you're also painting exterior trim or having other exterior work done, wash first — painters and crews need clean surfaces to work on, and washing after painting can damage fresh paint.",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "driveway", "deck-restoration"],
    relatedGuides: ["power-washing-cost", "best-time-to-power-wash"],
  },

  {
    slug: "vet-power-washing-contractor",
    title: "How to Vet a Power Washing Contractor Before Hiring | WashPro",
    headline: "How to Vet a Power Washing Contractor Before Hiring",
    metaDescription:
      "Power washing involves high-pressure equipment and chemicals on your property. Here's exactly what to check — insurance, licensing, red flags, and questions to ask before booking.",
    publishDate: "2026-04-01",
    updatedDate: "2026-06-01",
    readTime: "6 min read",
    intro:
      "Power washing involves high-pressure equipment and chemicals applied to your home's most valuable asset. Hiring the wrong contractor can mean siding damage, stripped roof granules, or landscaping harm — and no recourse if they're uninsured. Here's exactly what to verify before you book.",
    sections: [
      {
        heading: "Insurance: The One Non-Negotiable",
        content: [
          "General liability insurance is the single most important thing to verify. If an uninsured contractor cracks your siding, breaks a window, strips your shingles, or causes a slip-and-fall on your wet driveway, you have no coverage from them — and your homeowners insurance will only cover it under your own policy (with a deductible, and a potential rate impact).",
          "Ask for a Certificate of Insurance (COI) listing your address as the job location. Any legitimate contractor can produce this within minutes. Verify that the certificate is current, shows sufficient coverage (minimum $500K general liability, ideally $1M), and is from a real insurer you can verify.",
          "For commercial projects, also verify workers' compensation insurance separately. An uninsured worker injured on your commercial property can create direct liability exposure for you as the property owner.",
        ],
      },
      {
        heading: "Licensing and Business Registration",
        content: [
          "Most states don't require a specific power washing license, but legitimate businesses maintain current state business registration. You can verify this with a quick search on your state's Secretary of State website — takes two minutes and confirms the business is real.",
          "Beware of companies that accept only cash and have no verifiable business address. These often have no insurance and no accountability if something goes wrong. The presence of a professional website, Google Business profile with verified reviews, and multiple ways to contact the company are basic indicators of legitimacy.",
        ],
      },
      {
        heading: "Questions to Ask Before Booking",
        content: [
          "These specific questions separate experienced, professional contractors from low-quality or high-risk operators:",
        ],
        bullets: [
          "What PSI does your equipment run for this surface? (Driveways: 2,000–3,500 PSI. House siding/roofs: under 500 PSI for soft washing.)",
          "Do you have experience with my specific siding or roofing material?",
          "What's in your cleaning solution and what's the dilution ratio? (For roof cleaning especially, this matters.)",
          "Is your quote all-inclusive — labor, chemicals, equipment — or are there add-ons?",
          "Can you share references from comparable jobs nearby?",
          "How do you protect landscaping and plants near the work area?",
        ],
      },
      {
        heading: "Red Flags to Walk Away From",
        content: [
          "These are signs a contractor may cause damage, disappear after problems arise, or take your deposit and not return:",
        ],
        bullets: [
          "Offers to pressure wash your roof (correct method is always soft wash for asphalt shingles — no exceptions)",
          "Quotes that are 30–50% below market rate with no explanation",
          "Reluctance to provide an insurance certificate",
          "No verifiable business address, website, or Google reviews",
          "Insists on full payment upfront before work starts",
          "Quotes your job over the phone without asking about home size, material type, or current condition",
          "Can't explain what cleaning solution they use or why",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "roof-cleaning", "commercial"],
    relatedGuides: ["power-washing-cost", "pressure-vs-soft-washing"],
  },

  {
    slug: "best-time-power-wash",
    title: "Best Time of Year to Power Wash Your Home (By Service & Region) | WashPro",
    headline: "Best Time of Year to Power Wash Your Home",
    metaDescription:
      "Not all exterior cleaning follows the same schedule. This guide breaks down the ideal timing by service type — siding, roof, driveway, deck — and by U.S. region.",
    publishDate: "2026-04-15",
    updatedDate: "2026-06-15",
    readTime: "5 min read",
    intro:
      "Timing your exterior cleaning correctly isn't just a matter of convenience — it directly affects the quality and longevity of the results. The ideal window differs by service type, by climate region, and by what you're trying to accomplish. This guide breaks down the best scheduling approach for every major exterior cleaning service.",
    sections: [
      {
        heading: "House Soft Washing: Spring After Pollen, or Early Fall",
        content: [
          "The best window for soft washing house siding is late spring (May–June) after pollen season peaks, or early fall (September–October) before leaves drop. Soft-wash chemistry needs 24–48 hours of dry weather to cure after application — back-to-back rainy stretches reduce effectiveness.",
          "Avoid washing during extreme heat (above 90°F in direct sun) — cleaning solution dries on hot surfaces before it can work. Also avoid late fall in cold climates: surfaces that are frequently wet and below 40°F make the chemistry work inefficiently.",
        ],
        bullets: [
          "Northeast & Midwest: May–June or September–October",
          "Southeast: March–May or October–November",
          "Southwest & California: nearly year-round; avoid monsoon season in AZ/NM (July–August)",
          "Pacific Northwest: June–August (dry window)",
        ],
      },
      {
        heading: "Roof Cleaning: Spring or Fall, Before Rain Season",
        content: [
          "Roof cleaning follows similar rules to house washing — soft-wash chemistry applied to shingles needs a dry period to fully kill algae and moss. Schedule at least 48 hours before rain is forecast.",
          "Spring cleaning removes the winter's accumulation before algae enters its active growth season. Fall cleaning addresses summer growth and prepares the roof for freeze-thaw cycles in cold climates. Either timing works well; what matters most is avoiding washing immediately before rain.",
        ],
      },
      {
        heading: "Driveway & Concrete: Nearly Any Season (Above Freezing)",
        content: [
          "Concrete pressure washing is the least weather-sensitive exterior cleaning service. As long as it's above 32°F and not actively raining, concrete can be cleaned effectively year-round.",
          "Spring is the most popular time — homeowners clear winter salt, sand, and tire marks before the outdoor season. Summer works equally well. Avoid scheduling in the few days after heavy snow in cold climates when melt water is still running off surfaces.",
        ],
      },
      {
        heading: "Deck Washing: Spring for Maintenance, Fall Before Winter",
        content: [
          "Spring deck cleaning removes the previous year's mold and algae growth and prepares the surface for staining or sealing before summer use. This is the most common and most practical timing — decks are at peak use in summer, so cleaning in April or May sets them up well.",
          "Fall cleaning is ideal for prep-before-winter: removing the summer's accumulation and applying a fresh seal coat before frost. If you only clean once a year, spring typically has the better ROI.",
        ],
      },
      {
        heading: "Quick Reference: Timing by Service",
        content: ["Use this summary to plan your annual exterior maintenance schedule:"],
        bullets: [
          "House soft washing — Spring (May–June) or early fall (Sep–Oct); 48h dry weather after wash",
          "Roof soft washing — Spring or fall; schedule 48h before forecast rain",
          "Driveway / concrete — Year-round above 32°F; spring is most popular",
          "Deck washing — Spring before use season; fall if resealing before winter",
          "Gutter cleaning — Late spring (after pollen) and late fall (after leaves)",
          "Fence washing — Spring or fall; before staining or painting in either season",
          "Solar panels — Before and after peak pollen season; avoid midday heat",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "driveway", "deck-restoration", "roof-cleaning"],
    relatedGuides: ["power-washing-cost", "pressure-vs-soft-washing"],
  },
];

export function getGuideContent(slug: string): GuideContent | undefined {
  return guidesContent.find((g) => g.slug === slug);
}
