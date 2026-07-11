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
    relatedServices: ["house-soft-washing", "roof-cleaning", "stucco-cleaning"],
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
    relatedGuides: ["power-washing-cost", "best-time-power-wash"],
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
  {
    slug: "how-often-pressure-wash",
    title: "How Often Should You Pressure Wash Your House? (By Surface) | WashPro",
    headline: "How Often Should You Pressure Wash Your House? (By Surface)",
    metaDescription:
      "Wondering how often to pressure wash? This guide covers recommended frequency for your house exterior, driveway, deck, roof, and gutters — plus signs you're overdue.",
    publishDate: "2026-07-01",
    updatedDate: "2026-07-01",
    readTime: "5 min read",
    intro:
      "There's no single answer to how often you should pressure wash — it depends on what surface you're cleaning, your climate, the amount of tree cover over your property, and how much dirt and biological growth your home accumulates year to year. This guide gives surface-specific recommendations and the warning signs that tell you you're overdue.",
    sections: [
      {
        heading: "House Exterior: Once a Year in Most Climates",
        content: [
          "For most homeowners, washing the house exterior once per year is the right baseline. The exception is humid climates — the Southeast, Gulf Coast, Pacific Northwest, and anywhere with heavy tree cover — where algae and mildew grow quickly. In those regions, twice a year (spring and fall) keeps the exterior cleaner and prevents the kind of deep biological staining that requires stronger treatments to remove.",
          "If you're in a dry climate with little tree cover (Arizona, Nevada, parts of Colorado), you can often go 18–24 months between washes without visible buildup. The risk there is dust and oxidation on paint rather than biological growth.",
        ],
      },
      {
        heading: "Driveway and Walkways: Once a Year, or After Winter",
        content: [
          "Concrete driveways typically need cleaning once a year. In cold climates, the right time is spring — after the last freeze — to remove winter road salt, sand, and the dark tire marks that accumulate over the season. In warm climates without a winter road treatment season, once a year in spring works well for most properties.",
          "If you park oil-leaking vehicles, have heavy vehicle traffic, or live near a road with significant runoff, every 6–9 months may be more appropriate. Oil stains are far easier to remove when fresh.",
        ],
      },
      {
        heading: "Decks and Patios: Once a Year Before Staining Season",
        content: [
          "Wood and composite decks benefit from annual cleaning, ideally in spring before peak use season. The reason is practical: spring cleaning removes the previous year's algae and mold growth and prepares the surface for any staining, sealing, or refinishing you plan to do. If you seal or stain your deck, the cleaning should always come first.",
          "If your deck goes untreated (no stain or sealer), plan on cleaning at least once a year. Mold and mildew growth accelerates on bare wood and becomes harder to remove the longer it sits.",
        ],
      },
      {
        heading: "Roof: Every 1–3 Years Depending on Climate and Shade",
        content: [
          "Roof cleaning frequency depends heavily on how much shade your roof gets. Shaded roofs — especially those under large trees — accumulate algae, moss, and lichen much faster than sunny ones. In the Pacific Northwest and Southeast, roofs under heavy canopy may need soft washing annually. Fully exposed roofs in dry climates can go 3–5 years without visible growth.",
          "A useful rule of thumb: if you can see black streaks or green patches from the ground, you're overdue. Black streaks (Gloeocapsa magma algae) don't just look bad — they accelerate shingle deterioration. Moss and lichen are worse; their root systems physically lift shingle granules over time.",
        ],
      },
      {
        heading: "Gutters: Twice a Year, Every Year",
        content: [
          "Gutters are the one surface where twice-a-year cleaning is the near-universal recommendation: late spring (after pollen and seed fall) and late fall (after leaves finish dropping). This prevents the clogs and overflow that cause fascia rot, foundation issues, and water intrusion.",
          "If you have heavy deciduous tree cover directly over your roofline, you may need three cleanings — adding a mid-fall pass as leaves start coming down. Guards help but don't eliminate the need for cleaning entirely.",
        ],
      },
      {
        heading: "Warning Signs You're Overdue on Any Surface",
        content: ["You don't always need a calendar to know it's time. These are the signs that tell you cleaning is overdue:"],
        bullets: [
          "Black or green streaks on siding, roof, or concrete — biological growth actively spreading",
          "Slippery driveway, deck, or walkway surface — algae film that's a fall hazard",
          "Paint that looks chalky or dull rather than the original color — oxidation and dirt buildup",
          "Dark ring at the base of your siding just above the foundation — splash-back dirt and algae",
          "Gutters visibly sagging or overflowing during rain — debris load causing blockage",
          "Moss clumps visible on the roof from street level — root systems already digging in",
        ],
      },
      {
        heading: "Quick Reference: Recommended Frequency by Surface",
        content: [],
        bullets: [
          "House exterior (soft wash) — 1x/year (humid climates: 2x/year)",
          "Driveway / concrete — 1x/year, spring preferred in cold climates",
          "Deck / patio — 1x/year, spring before use season",
          "Roof (soft wash) — 1–3 years depending on shade and climate",
          "Gutters — 2x/year (late spring + late fall); 3x if heavy tree cover",
          "Fences — 1x/year or before staining/painting",
          "Solar panels — 2x/year (before and after pollen season)",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "roof-cleaning", "gutter-cleaning", "driveway"],
    relatedGuides: ["best-time-power-wash", "power-washing-cost", "pressure-vs-soft-washing"],
  },
  {
    slug: "diy-vs-hire",
    title: "DIY Pressure Washing vs. Hiring a Pro: The Real Comparison | WashPro",
    headline: "DIY Pressure Washing vs. Hiring a Pro: The Real Comparison",
    metaDescription:
      "Is it worth renting a pressure washer and doing it yourself, or hiring a pro? This guide breaks down the real costs, risks, and when each option actually makes sense.",
    publishDate: "2026-07-01",
    updatedDate: "2026-07-01",
    readTime: "6 min read",
    intro:
      "Pressure washing looks deceptively simple — point and spray, right? The reality is more nuanced. The right choice between DIY and hiring a professional depends on what you're cleaning, what equipment you actually need, and whether you can afford the downside risk if something goes wrong. This guide gives you an honest comparison so you can decide without the sales pitch.",
    sections: [
      {
        heading: "The Real Cost of DIY",
        content: [
          "Renting a consumer-grade gas pressure washer runs $60–$100 per day. That sounds cheap compared to a $300 professional house wash — until you account for the time, the learning curve, and the fact that consumer rental units typically top out at 2,000–2,500 PSI with modest GPM (gallons per minute). Professional equipment runs 3,000–4,000 PSI with 4+ GPM, cleaning 2–3x faster and more thoroughly.",
          "If you factor in your time (4–6 hours for a full house wash for a first-timer vs. 1.5–2.5 hours for a professional crew), plus the cost of cleaning chemicals you'll need to buy separately, the cost gap narrows significantly. For a one-time driveway cleaning, DIY often makes sense. For a full house wash with a two-story home, it rarely does.",
        ],
        bullets: [
          "Rental cost: $60–$100/day for a consumer gas unit",
          "Chemical cost: $20–$50 for house washing detergent (not included in rental)",
          "Your time: 4–6 hours for a full house exterior on a first attempt",
          "Professional cost: $200–$500 for the same job, done in 1.5–2.5 hours",
        ],
      },
      {
        heading: "What Pros Have That Rentals Don't",
        content: [
          "The equipment gap is real. Professional soft washing systems use low-pressure pumps with high chemical concentration — completely different from a consumer pressure washer. For roofs, vinyl siding, and painted surfaces, soft washing is the correct method. Hitting these surfaces with high-pressure rental equipment can strip paint, crack siding panels, force water behind trim, and void your roofing warranty.",
          "Beyond equipment, professional crews have surfactants and biocides that are not available at retail, experience reading surfaces to know what pressure is safe, and insurance if something goes wrong. Consumer equipment has no biocide capability — you can blast algae off a surface, but without a proper treatment it typically returns within months.",
        ],
      },
      {
        heading: "Where DIY Actually Makes Sense",
        content: [
          "There are real DIY use cases. Concrete driveways and sidewalks tolerate high pressure well and are forgiving surfaces for beginners. A driveway, patio slab, or brick walkway is one of the best DIY pressure washing projects.",
        ],
        bullets: [
          "Concrete driveway or patio — high-pressure tolerant, low damage risk, good DIY project",
          "Garden furniture or outdoor equipment — low stakes, no height, easy to manage",
          "Small fences with treated wood — manageable if you keep pressure moderate and distance consistent",
          "Vehicles — use a low-pressure attachment and car wash soap, not a standard nozzle",
        ],
      },
      {
        heading: "Where DIY Is a Bad Idea",
        content: ["These jobs are best left to professionals — the risk of damage or injury significantly outweighs any cost savings:"],
        bullets: [
          "Roof cleaning — high falls risk; incorrect pressure or chemicals void shingle warranties",
          "Second-story or higher siding — working at height with a high-pressure wand is dangerous",
          "Vinyl or fiber cement siding — consumer pressure easily cracks panels or forces water behind them",
          "Painted surfaces — wrong pressure or nozzle strips paint, leaving a worse mess than before",
          "Wood decks without experience — improper technique raises grain and ruins the surface for staining",
          "Any surface where water intrusion is a concern — windows, door frames, vented soffits",
        ],
      },
      {
        heading: "The Hidden Risk: Property Damage",
        content: [
          "The single biggest argument for hiring a pro isn't the price — it's the liability. A licensed, insured pressure washing company carries general liability insurance. If they damage your siding, break a window, or cause a water intrusion issue, their insurance covers it. If you damage your own home with a rental unit, you cover it out of pocket.",
          "Replacing a section of vinyl siding because of pressure damage runs $500–$2,000 depending on the area. A cracked window from a mis-aimed wand is $150–$500 per pane. These are real scenarios that happen to first-time users regularly.",
        ],
      },
      {
        heading: "The Bottom Line",
        content: [
          "Use DIY for: flat concrete surfaces you can reach from the ground, outdoor furniture, or small fenced areas where the pressure is low and the stakes are lower.",
          "Hire a pro for: your house exterior (especially siding or second-story), roof, deck, anything painted, anything requiring soft wash chemistry, and any job that puts you at height.",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "driveway", "deck-restoration", "roof-cleaning"],
    relatedGuides: ["power-washing-cost", "vet-power-washing-contractor", "pressure-vs-soft-washing"],
  },
  {
    slug: "power-washing-before-painting",
    title: "Power Washing Before Painting: What You Need to Know | WashPro",
    headline: "Power Washing Before Painting: What You Need to Know",
    metaDescription:
      "Planning to paint your home exterior? Learn why power washing first is essential, how long to wait before painting after washing, and what pros do differently.",
    publishDate: "2026-07-01",
    updatedDate: "2026-07-01",
    readTime: "5 min read",
    intro:
      "If you're planning to paint your home's exterior, power washing first isn't optional — it's the most important prep step. Paint applied over dirty, chalky, or contaminated surfaces fails faster, bubbles, and peels. This guide covers what washing before painting actually involves, how to do it right, and the one timing mistake that ruins a lot of paint jobs.",
    sections: [
      {
        heading: "Why Washing Before Painting Is Non-Negotiable",
        content: [
          "Paint needs a clean, dry, sound surface to bond properly. Dirt, algae, mildew, chalk from old paint, and any grease or oil contamination all act as bond-breakers. Even a visually clean surface can have enough surface contamination to cause adhesion failure within a season.",
          "Chalk — the powdery residue left by aged exterior paint — is particularly common and particularly damaging if not removed. Running your hand across old exterior paint and seeing a white residue on your palm means you have chalk. Paint over that chalk and you're essentially painting on talcum powder. It peels, often within 6–12 months.",
        ],
      },
      {
        heading: "What 'Washing Before Painting' Actually Means",
        content: [
          "The washing step before painting is different from a standard annual exterior wash. It's more thorough and often involves a specific sequence:",
        ],
        numbered: [
          "Chemical pre-treatment: A cleaning solution (typically a diluted bleach-based surfactant mix) is applied first to kill any mold, mildew, or algae. This prevents the biological growth from returning through the new paint layer.",
          "Dwell time: The chemical sits for 10–20 minutes to kill the growth and loosen contamination — not just move it around.",
          "Low-to-moderate pressure rinse: The surface is rinsed thoroughly. For siding being prepped for painting, pressure is kept moderate to avoid damaging the substrate.",
          "Chalk removal: If chalking is present, a slightly higher-pressure pass or a chalk-fighting cleaner is used to strip it off before the surface dries.",
          "Full dry: The surface must be completely dry before any primer or paint is applied.",
        ],
      },
      {
        heading: "How Long to Wait After Washing Before Painting",
        content: [
          "This is where most DIY paint jobs go wrong. The rule is simple but often ignored: the surface must be fully dry before painting — not just surface-dry to the touch, but dry through.",
          "In warm, sunny weather with low humidity, wood siding typically needs 24–48 hours. Masonry (stucco, brick, concrete block) holds moisture longer and may need 48–72 hours. In cooler, humid weather or after heavy washing, 72 hours is the safer minimum for any substrate.",
          "Painting too soon traps moisture under the film. This causes blistering almost immediately — small bubbles form as the trapped water tries to escape. Once blistering starts, you need to scrape, sand, and repaint. Waiting the extra day is almost always worth it.",
        ],
      },
      {
        heading: "Soft Wash vs. Pressure Wash for Pre-Paint Prep",
        content: [
          "For most siding types being prepped for paint, soft washing (low pressure + chemical treatment) is the preferred approach. Here's why: high-pressure washing can force water into gaps around trim, windows, and joints — exactly the places where moisture intrusion causes paint failure. It can also raise wood grain on hardboard or older wood siding, creating an uneven surface the paint can't bridge.",
          "Soft washing gets the surface just as clean chemically while minimizing the risk of substrate damage and water intrusion. For concrete foundations, masonry, or block walls being prepped for masonry paint or elastomeric coatings, higher pressure is appropriate and helpful for opening the pores of the surface.",
        ],
      },
      {
        heading: "Hiring a Pro for Pre-Paint Washing",
        content: [
          "If you're hiring a painting contractor, ask whether washing is included in the quote and what their process is. Some painting contractors subcontract the washing step; others do it themselves. Either way, confirm the following:",
        ],
        bullets: [
          "Will they chemically treat for mold and mildew, or just pressure wash?",
          "How long will they wait after washing before applying primer?",
          "Do they treat chalk if present, or just wash over it?",
          "Is the washing scoped to the full surface being painted, including trim, soffits, and foundation?",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "deck-restoration", "fence-washing"],
    relatedGuides: ["pressure-vs-soft-washing", "how-often-pressure-wash", "power-washing-cost"],
  },
  {
    slug: "mold-mildew-siding",
    title: "How to Remove Mold and Mildew from Siding | WashPro",
    headline: "How to Remove Mold and Mildew from House Siding",
    metaDescription:
      "Black or green growth on your siding? Learn what it actually is, whether it's dangerous, and how pros remove mold and mildew from vinyl, wood, and fiber cement siding.",
    publishDate: "2026-07-01",
    updatedDate: "2026-07-01",
    readTime: "5 min read",
    intro:
      "That dark streaking or green fuzz on your home's siding is one of the most common exterior maintenance issues homeowners deal with — and one of the most misunderstood. This guide explains what it actually is, whether it poses a health risk, and how it's properly removed from different siding types.",
    sections: [
      {
        heading: "What You're Actually Looking At",
        content: [
          "What homeowners call 'mold' on siding is usually one of three things, each requiring slightly different treatment:",
        ],
        bullets: [
          "Mildew (most common): A surface fungal growth that appears as gray, white, or light green patches. It grows on the outside of siding and rarely penetrates the substrate. Most 'mold' complaints are actually mildew.",
          "Algae: Green, slimy growth that appears on north-facing or shaded surfaces. More common in humid climates and areas with frequent rainfall. Not toxic but creates a slippery surface.",
          "Gloeocapsa magma (black algae): The black streaks running down siding and roofs. A type of algae that produces a dark pigment as a UV shield. Spreads via spores and is extremely common in most of the US.",
          "True mold: Less common on exterior surfaces exposed to sun and rain, but possible on constantly shaded or perpetually damp areas. Requires full chemical treatment to kill, not just remove.",
        ],
      },
      {
        heading: "Is It a Health Hazard?",
        content: [
          "Exterior surface mildew and algae on siding is generally not a health hazard — it's an outdoor surface exposed to UV, rain, and air circulation, not an enclosed environment where mold concentrations build up. The health concerns associated with mold (Stachybotrys, etc.) are almost exclusively indoor issues where mold colonizes drywall, insulation, and other porous materials in enclosed, humid spaces.",
          "That said, exterior mold or mildew near windows, doors, or any penetration that could allow water intrusion into the wall cavity is worth addressing promptly — not because of the surface growth itself, but because it may indicate a moisture pathway into the wall structure.",
        ],
      },
      {
        heading: "Why Pressure Washing Alone Isn't Enough",
        content: [
          "You can blast mildew and algae off siding with a pressure washer — but without a biocidal treatment, it comes back. The spores that cause the regrowth are embedded in microscopic pores on the siding surface. Physical removal with water moves the visible growth but doesn't kill the underlying organism. In humid climates, untreated surfaces can show regrowth within 4–8 weeks.",
          "The correct approach is soft washing: a low-pressure application of a diluted bleach-based surfactant mix (sodium hypochlorite + surfactant) that kills the organism at the root, followed by a thorough rinse. This is the same process used by professional exterior cleaning companies and is the industry standard for biological growth on siding.",
        ],
      },
      {
        heading: "Treatment by Siding Type",
        content: ["Different siding materials have different tolerances for pressure and chemical concentration:"],
        bullets: [
          "Vinyl siding: Handles bleach-based treatments well. Low-to-moderate pressure safe. Most forgiving substrate for DIY — but avoid high pressure near seams and overlaps.",
          "Fiber cement (HardiePlank): Bleach-safe; use lower pressure than vinyl. Check manufacturer guidelines if under warranty — some specify maximum PSI for warranty coverage.",
          "Wood siding (painted): Bleach-based treatment at lower concentration. Avoid high pressure — it can raise grain, force water behind joints, and damage older paint. Soft washing strongly preferred.",
          "Stucco: Bleach-safe at normal concentrations. Medium pressure acceptable. Check for cracks before washing — high pressure forces water into cracks and worsens moisture issues.",
          "Brick: Bleach-safe. Medium pressure on solid brick. Avoid high pressure on mortar joints older than 20–30 years — it can erode old mortar.",
        ],
      },
      {
        heading: "After Treatment: Preventing Regrowth",
        content: [
          "The single best thing you can do to slow regrowth is address the conditions that favor it: shade and moisture. Trim back trees and shrubs that keep siding in constant shade. Ensure gutters route water away from the foundation and siding base. Improve drainage around foundation plantings that stay wet after rain.",
          "Some soft washing companies apply a post-wash biocide rinse agent that continues killing spores for weeks after the cleaning. Ask if this is included — it's worth it in humid climates and can extend time between cleanings by 30–50%.",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "roof-cleaning", "stucco-cleaning"],
    relatedGuides: ["pressure-vs-soft-washing", "how-often-pressure-wash", "remove-roof-algae"],
  },
  {
    slug: "pressure-washing-safety",
    title: "Pressure Washing Safety: What Every Homeowner Needs to Know | WashPro",
    headline: "Pressure Washing Safety: What Every Homeowner Needs to Know",
    metaDescription:
      "Pressure washers cause thousands of injuries every year. Learn the real risks, what protective gear you actually need, and which jobs are too dangerous for DIY.",
    publishDate: "2026-07-01",
    updatedDate: "2026-07-01",
    readTime: "4 min read",
    intro:
      "Pressure washers look like hoses — but a 2,500 PSI stream can cut through skin in a fraction of a second. According to the Consumer Product Safety Commission, pressure washers send roughly 6,000 people to emergency rooms annually in the United States. Most injuries are preventable with the right gear and a clear understanding of what these machines can and can't do safely.",
    sections: [
      {
        heading: "The Core Risk: Injection Injuries",
        content: [
          "The most serious pressure washer injury isn't a slip or a spray in the face — it's an injection injury. At 2,000+ PSI, a pressure stream can penetrate skin, introduce water, bacteria, and debris into tissue, and cause serious infections requiring surgical treatment. These injuries often look minor at first (like a small cut or puncture) but can become life-threatening if not treated immediately as an emergency.",
          "Never put your hand in front of the nozzle. Never point the wand at another person. Keep the wand pointed away from yourself when squeezing the trigger. These aren't suggestions — they're the line between a normal project and an ER visit.",
        ],
      },
      {
        heading: "Protective Gear You Actually Need",
        content: ["Minimum personal protective equipment for any pressure washing project:"],
        bullets: [
          "Safety glasses or goggles: Debris can ricochet at high speed. Standard eyeglasses aren't sufficient — get wraparound safety glasses.",
          "Closed-toe shoes with grip: Never use sandals or open-toe shoes. Wet surfaces are slippery; the wand can sweep toward your feet.",
          "Long pants: Protects legs from ricocheting debris and reduces injection injury risk if the wand sweeps near your legs.",
          "Hearing protection: Gas pressure washers run 85–100 dB. Prolonged exposure without hearing protection causes cumulative hearing damage.",
          "Chemical-resistant gloves: Required if mixing or applying cleaning solutions (especially bleach-based). Nitrile or rubber.",
        ],
      },
      {
        heading: "Height and Ladder Safety",
        content: [
          "Ladder use with a pressure washer is one of the most dangerous combinations in home maintenance. The recoil force from a high-pressure wand at full trigger can shift your balance — especially dangerous when you're 8–12 feet off the ground on a ladder.",
          "Professional crews use extension wands and telescoping lances to reach second-story surfaces from the ground. If you're renting equipment for a DIY project, rent an extension wand rather than climbing a ladder with the wand. If ladder use is unavoidable, have a second person stabilizing the base, and never lean out from the ladder while spraying.",
        ],
      },
      {
        heading: "Chemical Safety for Cleaning Solutions",
        content: [
          "Most pressure washing cleaning solutions are bleach-based (sodium hypochlorite at various concentrations). These work extremely well but require careful handling:",
        ],
        bullets: [
          "Never mix bleach with ammonia-based cleaners — produces toxic chloramine gas",
          "Rinse or cover plants and shrubs before applying any bleach-based solution — bleach will damage or kill vegetation",
          "Avoid spraying near open windows or HVAC intakes — chemical mist can enter the home",
          "Wear eye protection and gloves when mixing or applying concentrated solutions",
          "Rinse treated surfaces thoroughly — bleach residue left on metal fixtures or trim causes corrosion",
        ],
      },
      {
        heading: "Electrical Hazards",
        content: [
          "Pressure washing near electrical components — outdoor outlets, meter bases, light fixtures, HVAC units — carries electrocution risk. Water and electricity are obviously incompatible, but high-pressure spray can force water into places a garden hose can't reach: behind outlet covers, into fixture gaps, around conduit fittings.",
          "Turn off power to any exterior outlets or fixtures in the wash area before starting. Cover electrical components you can't avoid spraying near. Never direct a spray stream at a utility meter, electrical panel, or HVAC unit.",
        ],
      },
      {
        heading: "When to Hire a Pro Instead",
        content: ["Some jobs carry enough inherent risk that hiring a professional is the right call regardless of skill level:"],
        bullets: [
          "Anything requiring ladder work at second-story height or higher",
          "Roof cleaning — fall risk is severe; incorrect technique voids warranties",
          "Surfaces near electrical panels, meters, or service entrance equipment",
          "Commercial or multi-story buildings",
          "Any surface where you're uncertain about the safe maximum PSI",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "roof-cleaning", "driveway"],
    relatedGuides: ["diy-vs-hire", "pressure-washing-windows", "vet-power-washing-contractor"],
  },
  {
    slug: "pressure-washing-concrete",
    title: "How to Clean Concrete: Driveways, Patios & Sidewalks | WashPro",
    headline: "How to Clean Concrete: Driveways, Patios & Sidewalks",
    metaDescription:
      "Concrete is the most forgiving surface to pressure wash — but there are still wrong ways to do it. Learn the right PSI, nozzles, and techniques for driveways, patios, and sidewalks.",
    publishDate: "2026-07-01",
    updatedDate: "2026-07-01",
    readTime: "5 min read",
    intro:
      "Concrete driveways, patios, and sidewalks are the most forgiving surfaces to pressure wash — they tolerate high pressure, they're at ground level, and there's little risk of damaging the substrate if you use reasonable technique. That said, there are still ways to do it wrong. This guide covers the right approach for common concrete cleaning jobs.",
    sections: [
      {
        heading: "What Equipment You Actually Need",
        content: [
          "Concrete cleaning is one of the few jobs where consumer rental equipment can perform reasonably well. A gas pressure washer in the 2,500–3,500 PSI range with 2.5+ GPM will handle most driveways and patios.",
          "The single biggest equipment upgrade you can make for concrete: a surface cleaner attachment. This is a spinning disc attachment that replaces the wand for flat surfaces. It cleans 2–3x faster than a wand, produces even, stripe-free results, and keeps the spray contained so you're not getting soaked by spray-back. For a driveway or large patio, it's worth renting separately or requesting that your contractor uses one.",
        ],
      },
      {
        heading: "The Right Nozzle for Concrete",
        content: [
          "Pressure washer nozzles are color-coded by spray angle. For concrete:",
        ],
        bullets: [
          "25-degree (green): The standard choice for concrete. Wide enough to cover area quickly, narrow enough for real cleaning power.",
          "15-degree (yellow): More aggressive — useful for heavy staining, tire marks, or neglected concrete. Keep moving and don't dwell in one spot.",
          "0-degree (red): Never use on concrete. Too concentrated — can etch and pit the surface.",
          "Surface cleaner attachment: The best tool for large flat areas. Worth the upgrade.",
        ],
      },
      {
        heading: "Dealing with Common Concrete Stains",
        content: [
          "Plain pressure washing removes general dirt, algae, and most surface grime well. But certain stains need pre-treatment:",
        ],
        bullets: [
          "Oil and grease: Apply a degreaser or dish soap directly to the stain, let sit 5–10 minutes, then agitate with a stiff brush before pressure washing. Old, set oil stains may need a dedicated concrete degreaser and multiple treatments.",
          "Algae and moss: Apply a diluted bleach solution (1 part bleach to 3–4 parts water) before washing. Let dwell 5–10 minutes, then rinse thoroughly. This kills the organism rather than just moving it.",
          "Rust stains: Require an oxalic acid-based concrete cleaner — bleach and pressure alone don't affect rust. Apply per product directions, then rinse.",
          "Paint spills: Fresh paint is much easier — immediate washing with high pressure. Dried paint typically requires a chemical paint stripper first, then pressure washing.",
        ],
      },
      {
        heading: "Technique: Preventing Stripes and Uneven Cleaning",
        content: [
          "The most common beginner mistake is inconsistent distance and overlap, which leaves visible stripe marks in the cleaned concrete. Technique tips:",
        ],
        bullets: [
          "Keep the nozzle or surface cleaner at a consistent height — 6–12 inches for a wand, per instructions for a surface cleaner",
          "Overlap each pass by 30–40% to avoid leaving uncleaned strips",
          "Work in the same direction (don't change angles mid-section)",
          "Keep moving at a consistent pace — dwelling too long in one spot lightens that area more than the rest",
          "Rinse the full surface after cleaning to remove loosened debris and residue",
        ],
      },
      {
        heading: "After Cleaning: Sealing Concrete",
        content: [
          "Freshly cleaned concrete is the ideal time to apply a concrete sealer if you've been considering it. Sealers protect against oil staining, moisture penetration, and the freeze-thaw cycle that causes surface spalling in cold climates. They also make future cleaning significantly easier — dirt and algae don't bond as well to sealed surfaces.",
          "Wait at least 24 hours (48 hours in cooler weather) after washing before applying any sealer to ensure the concrete is fully dry. Sealing damp concrete traps moisture and causes the sealer to fail prematurely — typically showing up as white hazing or peeling within weeks.",
        ],
      },
      {
        heading: "When to Hire a Pro for Concrete Cleaning",
        content: [
          "Most concrete jobs are reasonable DIY candidates. Hire a professional when:",
        ],
        bullets: [
          "The concrete area is very large (over 2,000 sq ft) — a pro with commercial equipment will finish in a fraction of the time",
          "Significant oil or chemical staining is present — pros have access to stronger commercial degreasers",
          "The concrete is stamped, colored, or decorative — wrong pressure or chemicals can damage finish coatings",
          "You need consistent results for a real estate sale or commercial property",
        ],
      },
    ],
    relatedServices: ["driveway", "patio-paver-cleaning", "commercial"],
    relatedGuides: ["diy-vs-hire", "remove-rust-stains", "how-often-pressure-wash"],
  },

  {
    slug: "pressure-washing-windows",
    title: "Can You Pressure Wash Windows? What's Safe and What Isn't | WashPro",
    headline: "Can You Pressure Wash Windows? What's Safe and What Isn't",
    metaDescription:
      "Pressure washing near windows can crack glass, blow out seals, and flood window tracks. Learn what's safe, what professional washers actually do, and how to get streak-free exterior glass.",
    publishDate: "2026-07-09",
    updatedDate: "2026-07-09",
    readTime: "5 min read",
    intro:
      "It's one of the most common questions homeowners ask when booking a house wash: \"Will you do the windows too?\" The honest answer is nuanced. High-pressure water and residential windows are a bad combination, but that doesn't mean your glass has to stay dirty. Here's what can go wrong, what professionals actually do around windows, and the right way to get exterior glass clean.",
    sections: [
      {
        heading: "Why High Pressure and Windows Don't Mix",
        content: [
          "Residential window glass is tempered for impact resistance, not for a concentrated 2,000+ PSI water stream at close range. Direct pressure washing of windows risks several failure modes, most of which don't show up until days or weeks later:",
        ],
        bullets: [
          "Cracked or shattered glass — especially older single-pane windows and any glass with existing chips or stress fractures",
          "Blown seals on double-pane (insulated) units — pressure forces water past the perimeter seal, causing permanent fogging between panes that can't be cleaned",
          "Flooded window tracks and weep holes — water driven into the frame drains into wall cavities instead of back outside",
          "Stripped glazing and caulk — the flexible seals around window frames deteriorate quickly under direct pressure",
          "Damaged screens — even moderate pressure stretches and tears fiberglass screen material",
        ],
      },
      {
        heading: "What Professional Washers Actually Do Around Windows",
        content: [
          "A competent house-washing crew doesn't avoid windows — they change technique. During a soft wash, the cleaning solution is applied to siding and windows alike at garden-hose pressure, allowed to dwell, then rinsed top-down. The detergent that cleans your siding also breaks down the film on your glass.",
          "The result: windows come out noticeably cleaner than they started, because the same organic film, pollen, and oxidation on your siding is also on your glass. What a soft wash won't deliver is squeegee-finished, streak-free glass — rinse water dries with mineral spotting, especially in hard-water areas.",
          "If you want truly spotless glass, ask whether the company offers a window cleaning add-on. Many washing companies carry water-fed pole systems with deionized (DI) water — purified water dries without spots, no squeegee needed. Expect to pay $4–$12 per pane as an add-on, which is typically 20–40% cheaper than hiring a separate window cleaner for a standalone visit.",
        ],
      },
      {
        heading: "DIY: Getting Exterior Glass Clean Safely",
        content: [
          "If you're washing your own house exterior, treat windows as a rinse-only zone. Keep the wand at least 4–5 feet back, use a wide fan tip (40°), and never linger on the glass. Then finish windows separately with the right tools:",
        ],
        bullets: [
          "Wash with a soft-bristle brush or strip applicator and a squirt of dish soap in a bucket of water",
          "Squeegee top to bottom, wiping the blade between passes — this is what eliminates streaks, not the soap",
          "For second-story windows, a water-fed pole with a DI filter beats ladder work on both safety and results",
          "Avoid cleaning glass in direct midday sun — solution dries before you can squeegee it, guaranteeing streaks",
          "Never use razor blades on tempered glass or any glass with a tint film or low-E coating",
        ],
      },
      {
        heading: "When Windows Signal a Bigger Problem",
        content: [
          "Sometimes dirty-looking windows aren't dirty at all. Permanent haze or fog between double panes means the insulated seal has already failed — no amount of washing fixes it, and the unit needs replacement. Etched or rainbow-hued staining near sprinkler zones is hard-water mineral etching, which requires polishing compounds or professional restoration rather than washing.",
          "If your windows fog between panes shortly after any washing (pressure or soft), the seals were already marginal — washing exposed the failure rather than caused it. It's worth photographing window condition before any exterior cleaning job so there's a clear before/after record.",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "solar-panels", "gutter-cleaning"],
    relatedGuides: ["pressure-vs-soft-washing", "pressure-washing-safety", "power-washing-cost"],
  },

  {
    slug: "remove-rust-stains",
    title: "How to Remove Rust Stains from Concrete, Siding & Driveways | WashPro",
    headline: "How to Remove Rust Stains from Concrete, Siding & Driveways",
    metaDescription:
      "Rust stains laugh at bleach and pressure washers. Learn what actually removes rust from concrete, vinyl siding, and pavers — oxalic acid, specialty removers, and when to call a pro.",
    publishDate: "2026-07-09",
    updatedDate: "2026-07-09",
    readTime: "6 min read",
    intro:
      "Rust stains are the stain most likely to survive a standard pressure washing. Bleach-based house wash solutions do nothing to them — in fact, chlorine bleach can set rust stains and make them darker. Pressure alone just polishes the stained surface. Removing rust is a chemistry problem, and the right chemical depends on the surface. Here's what actually works.",
    sections: [
      {
        heading: "Where Rust Stains Come From",
        content: [
          "Identifying the source matters, because rust returns within months if you remove the stain but not the cause:",
        ],
        bullets: [
          "Irrigation water — well water high in dissolved iron leaves orange arcs on concrete, siding, and fences wherever sprinklers hit",
          "Fertilizer — many lawn fertilizers contain iron sulfate; granules that land on concrete and get wet leave hundreds of small dot stains",
          "Metal furniture and equipment — chair legs, grills, fire pits, and planters rust where they meet the surface",
          "Battery acid and vehicle drips — cars leak more than oil; rusty subframe runoff stains driveways below",
          "Rebar and aggregate bleed — some concrete contains iron-bearing aggregate that oxidizes from within, showing up as scattered orange specks",
          "Downspouts and railings — rusting metal above a wall or walkway streaks everything below it",
        ],
      },
      {
        heading: "What Works on Concrete and Pavers",
        content: [
          "Concrete is the most forgiving surface for rust removal because it tolerates acids that would damage other materials. Work from mildest to strongest:",
          "For light, fresh stains: undiluted white vinegar or lemon juice, 10–15 minutes of dwell, scrub with a stiff nylon brush, rinse. Cheap and surprisingly effective on surface-level staining.",
          "For established stains: oxalic acid is the workhorse — sold as \"wood bleach\" or in commercial rust removers like Singerman F9 BARC. Mix per label, apply to a dry surface, keep it wet for 5–15 minutes, agitate, then rinse thoroughly. Most orange irrigation staining dissolves visibly within minutes.",
          "For severe or deep stains: repeat applications beat one aggressive one. Avoid muriatic (hydrochloric) acid unless you're experienced — it removes rust but also etches the concrete surface, leaving a lighter, rougher patch that's as visible as the stain was.",
        ],
        bullets: [
          "Always wet surrounding grass and plants before and after — rust removers are toxic to landscaping",
          "Wear chemical-resistant gloves and eye protection; oxalic acid is a genuine irritant",
          "Test in an inconspicuous spot first on colored, stamped, or sealed concrete",
          "Neutralize acid-cleaned areas with a baking soda rinse if you plan to seal afterward",
        ],
      },
      {
        heading: "What Works on Vinyl Siding and Painted Surfaces",
        content: [
          "Siding can't take acid concentrations that concrete shrugs off. Use a rust remover explicitly labeled for siding — typically oxalic or citric acid based at gentler concentrations. Apply from the bottom of the wall upward to avoid clean streaks running through dirty areas, keep dwell times short (3–5 minutes), and rinse generously.",
          "Never use chlorine bleach on rust — it oxidizes the iron further and can permanently set the stain. This is why rust stains often look worse after a standard house wash: the bleach-based solution brightened everything around the stain and darkened the stain itself.",
          "On painted surfaces, test any remover on a hidden area first. Some aggressive removers dull gloss finishes. If the rust is bleeding from a metal fixture (railing, light, vent), the permanent fix is priming and painting the fixture with a rust-inhibiting coating — otherwise you'll be removing the same stain every season.",
        ],
      },
      {
        heading: "DIY or Call a Pro?",
        content: [
          "A single small stain is a $15 bottle of remover and 20 minutes. Consider a professional when the staining is widespread or the surface is unforgiving:",
        ],
        bullets: [
          "Whole-driveway irrigation staining — pros apply commercial-strength removers evenly with proper dwell control, avoiding the patchy \"clean spots\" look",
          "Stamped, colored, or sealed concrete — wrong chemistry strips sealer and color; restoration costs far more than professional cleaning",
          "Rust on stucco, EIFS, or natural stone — porous and chemical-sensitive; these need surface-specific products",
          "Stains that return within weeks — a pro can usually identify the source (irrigation iron, fixture bleed) and recommend the permanent fix",
          "Expect $75–$250 for targeted rust treatment as an add-on to a wash job, more for full-driveway treatment",
        ],
      },
    ],
    relatedServices: ["driveway", "house-soft-washing", "patio-paver-cleaning"],
    relatedGuides: ["pressure-washing-concrete", "mold-mildew-siding", "power-washing-cost"],
  },

  {
    slug: "winter-prep-power-washing",
    title: "Fall Power Washing: Prep Your Home's Exterior for Winter | WashPro",
    headline: "Fall Power Washing: Prep Your Home's Exterior for Winter",
    metaDescription:
      "Why late fall is a smart time to power wash — algae, gutter debris, and grime do their worst damage over winter. What to clean before the freeze, and what to skip until spring.",
    publishDate: "2026-07-09",
    updatedDate: "2026-07-09",
    readTime: "5 min read",
    intro:
      "Most homeowners think of power washing as a spring chore, and spring is indeed the industry's busy season. But the case for a late-fall wash is stronger than most people realize: the contaminants sitting on your home in November don't hibernate — they work on your surfaces all winter. Here's what's worth cleaning before the freeze, what to leave until spring, and how winter prep washing saves money on both ends.",
    sections: [
      {
        heading: "Why Grime Does Its Worst Damage in Winter",
        content: [
          "Organic growth and trapped debris are more destructive in winter than in any other season, because they hold moisture against surfaces through repeated freeze-thaw cycles:",
        ],
        bullets: [
          "Algae and mildew on siding retain moisture that freezes, expands, and stresses paint, caulk joints, and siding seams",
          "Leaves and debris packed in gutters freeze into ice dams that force meltwater under shingles and behind fascia",
          "Moss on roofs holds water like a sponge; freeze cycles lift shingle edges and shorten roof life",
          "Oil and organic film on concrete traps water in surface pores — the freeze-thaw cycle that causes spalling and pitting starts with a dirty, unsealed surface",
          "Mud and leaf tannin stains left on decks and patios all winter bond deeper and are harder to remove in spring",
        ],
      },
      {
        heading: "The Fall Cleaning Checklist (In Priority Order)",
        content: [
          "If you do only some of this list, do it from the top down — the top items prevent actual damage, the bottom items are mostly cosmetic:",
        ],
        numbered: [
          "Gutters and downspouts — the single highest-value fall task; clean after the last leaf drop, before the first hard freeze",
          "Roof moss treatment — moss removal or a soft-wash treatment before winter prevents freeze-lift damage to shingles",
          "House siding soft wash — kill algae and mildew before they spend four months holding ice against your paint and caulk",
          "Concrete driveways and walkways — clean and seal before the freeze; sealed concrete sheds water instead of absorbing it",
          "Deck cleaning — remove leaf stains and mildew; a clean, dry deck weathers winter far better than one under wet leaf litter",
          "Fences — lowest priority, but fall cleaning prevents the deep green algae bloom that shows up by March",
        ],
      },
      {
        heading: "When It's Too Late (or Too Cold) to Wash",
        content: [
          "The practical cutoff for washing is sustained daytime temperatures above 40°F with no freeze within 24 hours. Water driven into cracks, joints, and porous surfaces needs time to dry before freezing, or the wash itself becomes the freeze-thaw problem.",
          "Professional companies in cold climates typically run their washing season through late November and pause exterior work until March. Some continue gutter cleaning year-round since it doesn't saturate surfaces. If you've missed the window, don't wash siding or concrete during a January thaw — book the first available spring slot instead and prioritize gutter clearing, which is safe in any above-freezing window.",
          "In the Sun Belt and coastal South, there is no real cutoff — winter is actually the ideal season to wash, with mild temperatures, lower humidity, and contractors offering their best pricing of the year.",
        ],
      },
      {
        heading: "The Off-Season Price Advantage",
        content: [
          "Fall and early-winter washing isn't just about protection — it's the cheapest time of year to buy the service. Demand drops sharply after summer, and companies discount to keep crews busy:",
        ],
        bullets: [
          "Late-season discounts of 10–20% are common in cold-climate markets — ask directly, since not all companies advertise them",
          "Scheduling is faster: same-week appointments instead of the 2–4 week spring backlog",
          "Bundling gutter cleaning with a house or roof wash in one fall visit saves a second trip charge",
          "Annual contracts booked in fall (fall gutter + spring wash) typically run 10–15% below one-off pricing",
          "A fall wash also means you skip the spring rush entirely — your home starts the season already clean",
        ],
      },
    ],
    relatedServices: ["gutter-cleaning", "roof-cleaning", "house-soft-washing"],
    relatedGuides: ["best-time-power-wash", "how-often-pressure-wash", "power-washing-cost"],
  },

  {
    slug: "remove-oil-stains-driveway",
    title: "How to Remove Oil Stains from a Driveway (What Actually Works) | WashPro",
    headline: "How to Remove Oil Stains from a Driveway",
    metaDescription:
      "Fresh vs. set-in oil stains need different treatments. What actually removes oil from concrete — degreasers, poultices, hot water — and when pressure washing alone won't cut it.",
    publishDate: "2026-07-11",
    updatedDate: "2026-07-11",
    readTime: "5 min read",
    intro:
      "Oil stains are the most stubborn thing you'll ever try to get off a driveway. Concrete is porous — motor oil soaks in and keeps wicking back to the surface long after it looks dry. Pressure washing alone rarely removes a set-in oil stain; it takes the right chemistry, applied in the right order. Here's what actually works, from fresh drips to stains that have been there for years.",
    sections: [
      {
        heading: "Fresh Spills: The First Hour Matters Most",
        content: [
          "Oil that hasn't penetrated yet is dramatically easier to remove. If the spill just happened, don't rinse it — water spreads oil across more surface area. Absorb it first:",
        ],
        numbered: [
          "Cover the spill generously with an absorbent: cat litter (the cheap clay kind), sawdust, or a commercial oil-dry product",
          "Grind it in lightly with your shoe or a brick so it contacts the oil, then leave it for 1–4 hours (overnight for larger spills)",
          "Sweep up and dispose of the absorbent — check local rules; oil-soaked litter often can't go in regular trash",
          "Scrub the remaining shadow with a stiff brush and a strong degreasing dish soap or laundry detergent paste, then rinse hot if possible",
        ],
      },
      {
        heading: "Set-In Stains: Degreasers and Dwell Time",
        content: [
          "Once oil has cured into the concrete, surface scrubbing won't reach it. You need a purpose-made concrete degreaser (alkaline cleaners that break the oil's bond) applied with real dwell time — 10 to 15 minutes minimum, without letting it dry out.",
          "Apply the degreaser to a dry surface, not a wet one. Water fills the pores you need the cleaner to penetrate. Scrub with a stiff nylon brush (never wire — it leaves rust flecks), keep the area damp with more product as it dwells, then rinse with the hottest water available. Expect to repeat 2–3 times for older stains, with each pass pulling more oil out.",
        ],
      },
      {
        heading: "The Poultice Method for Deep, Old Stains",
        content: [
          "For stains that have been in the slab for months or years, professionals use a poultice: a paste that dissolves the oil and then absorbs it as it dries. You can make one by mixing an absorbent (diatomaceous earth, baby powder, or powdered clay) with a strong solvent like acetone or xylene into a peanut-butter consistency.",
          "Spread it half an inch thick over the stain, cover with plastic sheeting taped at the edges, and leave it 24–48 hours. As the solvent evaporates, it pulls dissolved oil up into the absorbent. Scrape up the dried paste and rinse. One poultice cycle removes what a dozen scrub-and-rinse rounds can't — it's slower but it works from inside the pores.",
        ],
      },
      {
        heading: "When to Call a Pro Instead",
        content: [
          "A professional pressure washing company brings two things you can't rent easily: commercial hot-water units (surface temperatures of 180–250°F liquefy oil that cold water can't touch) and stronger degreasers with surface machines that apply even pressure without wand striping.",
        ],
        bullets: [
          "Large or numerous stains: a driveway with widespread oil shadowing across multiple parking spots is a half-day DIY job — pros do it in an hour or two",
          "Stains under 6 months old on sealed concrete: high success rate, often near-complete removal",
          "Years-old stains on unsealed concrete: even pros may only achieve 70–90% improvement — deep oil leaves a permanent shadow. Ask for honest expectations up front",
          "After removal, consider having the driveway sealed: sealed concrete keeps the next leak on the surface where it wipes up easily",
        ],
      },
      {
        heading: "What Not to Do",
        content: ["A few common mistakes make oil stains worse or damage the slab:"],
        bullets: [
          "Don't use gasoline or brake cleaner as a solvent — fire hazard, and both can carry oil deeper into the pores",
          "Don't blast a fresh spill with a pressure washer — you'll spread a small stain into a large one",
          "Don't use muriatic acid for oil — acid etches concrete and does nothing to petroleum; it's for mineral stains, not organic ones",
          "Don't expect sealer to hide an existing stain — sealing over oil locks the shadow in permanently. Clean first, then seal",
        ],
      },
    ],
    relatedServices: ["driveway", "patio-paver-cleaning", "commercial"],
    relatedGuides: ["pressure-washing-concrete", "remove-rust-stains", "power-washing-cost"],
  },

  {
    slug: "clean-vinyl-siding",
    title: "How to Clean Vinyl Siding Without Damaging It (2026 Guide) | WashPro",
    headline: "How to Clean Vinyl Siding Without Damaging It",
    metaDescription:
      "Vinyl siding cleans up beautifully — if you avoid high pressure. The safe DIY method, the right cleaning mix, when green stains mean algae, and when to hire a soft-wash pro.",
    publishDate: "2026-07-11",
    updatedDate: "2026-07-11",
    readTime: "5 min read",
    intro:
      "Vinyl is the most common siding in America, and the most commonly damaged by well-meaning cleaning. High-pressure water cracks panels, forces water behind the wall, and voids manufacturer warranties. The good news: vinyl responds better to chemistry than to pressure, which means the safe method is also the effective one. Here's how to clean it yourself, and when the job calls for a professional soft wash.",
    sections: [
      {
        heading: "Why High Pressure and Vinyl Don't Mix",
        content: [
          "Vinyl siding is designed to shed rain falling downward — not water driven upward at 2,000+ PSI. Pressure washing at an upward angle forces water behind the panels, where it soaks sheathing and insulation and can start mold inside the wall. Direct high pressure also cracks brittle older vinyl, blows out J-channel trim, and etches permanent wand marks into the finish.",
          "Most vinyl siding manufacturers specifically limit or prohibit pressure washing in their warranty terms. If your siding is under warranty, check before pointing any machine at it.",
        ],
      },
      {
        heading: "The Safe DIY Method",
        content: [
          "For a single-story home or the reachable portions of a two-story, you can get professional-adjacent results with a garden hose and the right mix:",
        ],
        numbered: [
          "Mix your cleaner: 1 part oxygen bleach or household bleach to 4 parts water, plus a squirt of dish soap as a surfactant. For light dirt only, a dedicated vinyl siding cleaner or even car-wash soap works",
          "Water down plants and grass below the work area before you start, and again after — bleach mix that dries on leaves burns them",
          "Apply the mix bottom-to-top with a pump sprayer or a soft-bristle brush on a pole. Working upward prevents streaking on dry siding",
          "Let it dwell 5–10 minutes without drying out — re-mist if the sun is baking it",
          "Rinse top-to-bottom with a garden hose, spraying level or slightly downward — never up under the panel laps",
        ],
      },
      {
        heading: "Green, Black, and Chalky: Reading the Stains",
        content: ["What's on your siding determines what removes it:"],
        bullets: [
          "Green film or streaks: algae. Grows on shaded, north-facing walls. Bleach-based mix kills it; plain soap just smears it and it returns within weeks",
          "Black spots or patches: mildew or mold, common near gutters and ground level. Same bleach treatment, but it signals a moisture source worth finding — often a leaking gutter above",
          "Chalky white powder that rubs off on your hand: oxidation of the vinyl itself, common on older or sun-baked siding. This needs a dedicated oxidation remover — bleach won't touch it, and aggressive scrubbing makes the finish blotchy",
          "Rust-colored streaks below fixtures: metal corrosion running from screws, railings, or window ACs. Needs an oxalic-acid rust remover applied to that spot only",
        ],
      },
      {
        heading: "When to Hire a Soft-Wash Pro",
        content: [
          "A professional soft wash uses the same chemistry principle — low pressure, bleach-based solution, dwell time — but with commercial equipment that reaches second and third stories from the ground, metered chemical ratios, and full-house coverage in 2–4 hours. Typical cost is $200–$500 for an average home.",
        ],
        bullets: [
          "Two-story or taller homes: ladder work with a sprayer is where most DIY siding-cleaning injuries happen — this alone justifies hiring out",
          "Heavy, established algae or mold across large areas: pros carry stronger mixes and know how to protect landscaping while using them",
          "Oxidized siding: removing oxidation evenly across a whole wall is genuinely difficult — patchy DIY attempts are visible from the street",
          "If you're prepping to sell: a professional wash of siding, walks, and driveway is one of the highest-ROI items on a pre-listing checklist",
        ],
      },
    ],
    relatedServices: ["house-soft-washing", "gutter-cleaning", "stucco-cleaning"],
    relatedGuides: ["pressure-vs-soft-washing", "mold-mildew-siding", "diy-vs-hire"],
  },

  {
    slug: "pressure-washer-psi-guide",
    title: "What PSI to Pressure Wash Every Surface (Settings Chart) | WashPro",
    headline: "What PSI to Pressure Wash Every Surface",
    metaDescription:
      "The right pressure washer PSI for concrete, wood, vinyl, brick, vehicles, and more. What the numbers mean, which nozzle to use, and the surfaces that should never see high pressure.",
    publishDate: "2026-07-11",
    updatedDate: "2026-07-11",
    readTime: "6 min read",
    intro:
      "Most pressure washing damage comes from one mistake: using the machine's maximum pressure on a surface that can't take it. PSI ratings on the box are marketing numbers — what matters is matching pressure and nozzle to each surface. This guide gives working ranges for every common surface around a home, plus the ones that should never be pressure washed at all.",
    sections: [
      {
        heading: "PSI, GPM, and Nozzles — What Actually Matters",
        content: [
          "PSI (pounds per square inch) is striking force; GPM (gallons per minute) is rinsing power. Cleaning speed comes from both together, but damage comes from PSI concentrated by a narrow nozzle. The same 3,000 PSI machine is safe or destructive depending entirely on the tip you install and your distance from the surface.",
          "Nozzle color code: red (0°) cuts like a blade and has almost no legitimate residential use; yellow (15°) strips and etches; green (25°) is the general-purpose sweet spot; white (40°) is for rinsing and delicate work; black is a low-pressure soap applicator. When in doubt, start two nozzles wider than you think you need and 18 inches back, then work closer.",
        ],
      },
      {
        heading: "Working PSI by Surface",
        content: [
          "Ranges assume the right nozzle (green or white) held 8–18 inches off the surface:",
        ],
        bullets: [
          "Concrete driveways and sidewalks: 2,500–3,500 PSI — concrete is the one residential surface that rewards real pressure",
          "Brick and mortar (in good condition): 800–1,500 PSI — higher pressure blows out aging mortar joints; pre-1930 brick should be soft washed only",
          "Pavers: 1,000–1,500 PSI — high pressure strips the sand from joints; plan to re-sand after any real cleaning",
          "Wood decks and fences (softwoods like pine and cedar): 500–800 PSI with a 40° tip, moving with the grain — anything more furs the fibers",
          "Composite decking (Trex and similar): under 1,500 PSI and check the manufacturer's spec — some warranties cap allowed pressure explicitly",
          "Vinyl siding: don't pressure wash it — soft wash at garden-hose pressure with cleaning solution does the actual work",
          "Stucco and Dryvit/EIFS: soft wash only — pressure gouges stucco and can puncture EIFS foam systems",
          "Cars, boats, RVs: 1,200–1,900 PSI with a 40° tip — more strips wax and can chip paint edges",
          "Outdoor furniture and grills: 500–1,200 PSI depending on material — plastic and cushion fabric want the low end",
        ],
      },
      {
        heading: "Surfaces That Should Never See High Pressure",
        content: ["Some surfaces are damaged by any concentrated pressure, regardless of technique:"],
        bullets: [
          "Asphalt shingle roofs: pressure strips the granules that give shingles their lifespan — roof cleaning is a soft-wash-only job, full stop",
          "Windows and glass door panels: pressure can crack glass and destroy seals; window washing is its own low-pressure process",
          "Electrical fixtures, panels, and outdoor outlets: water intrusion hazard — hand-clean around them",
          "Air conditioner condenser fins: bend at a fraction of pressure-washer force; use a garden hose and fin comb",
          "Old mortar, sandstone, and soft historic masonry: pressure permanently erodes the surface — these need specialty restoration cleaning",
        ],
      },
      {
        heading: "Renting vs. Hiring for One Job",
        content: [
          "A weekend rental (typically $40–$100/day for a 3,000 PSI gas unit) makes sense for a driveway, patio, or fence you're comfortable working on. But by the time you rent the machine, buy the right nozzles and detergent, and spend the day on it, a $150–$250 professional driveway cleaning is often the better trade — pros bring surface cleaners that finish the slab evenly with no wand stripes, and hot water for oil and grease that rental units can't touch.",
          "The stronger argument for hiring is anything involving ladders, roofs, or full-house washing: falls are the dominant pressure-washing injury, and second-story soft washing requires equipment rentals don't include.",
        ],
      },
    ],
    relatedServices: ["driveway", "deck-restoration", "house-soft-washing"],
    relatedGuides: ["pressure-washing-safety", "pressure-washing-concrete", "diy-vs-hire"],
  },
];

export function getGuideContent(slug: string): GuideContent | undefined {
  return guidesContent.find((g) => g.slug === slug);
}
