export type ServiceSection = {
  heading: string;
  content: string[];
  bullets?: string[];
};

export type ServiceContent = {
  id: string;
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  intro: string;
  quickStats: { costRange: string; duration: string; frequency: string };
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
  relatedGuides: string[];
  relatedServices: string[];
};

export const servicesContent: ServiceContent[] = [
  {
    id: "house-soft-washing",
    slug: "house-soft-washing",
    name: "House Soft Washing",
    title: "House Soft Washing Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find licensed house soft washing pros near you. Learn what soft washing costs, when you need it, and how it differs from pressure washing. Get free, no-obligation quotes.",
    headline: "House Soft Washing",
    subheadline: "The right way to clean vinyl, wood, stucco, and painted siding — without damaging it",
    intro:
      "House soft washing uses low water pressure (40–300 PSI) combined with biodegradable cleaning solutions to remove mold, algae, mildew, and oxidation from home exteriors. Because the chemistry does the cleaning rather than brute force, soft washing is safe for all siding types and results last 3–5x longer than a standard pressure wash.",
    quickStats: { costRange: "$200–$500", duration: "2–4 hours", frequency: "Every 1–3 years" },
    sections: [
      {
        heading: "Why Soft Washing, Not Pressure Washing, for Siding",
        content: [
          "High-pressure water (2,000+ PSI) can crack vinyl siding, force water behind walls, strip paint, and break down caulk seals. Soft washing keeps pressure at garden-hose levels — the chemistry handles the actual cleaning. A diluted sodium hypochlorite solution kills algae, mold, and mildew at the root, rather than displacing them so they regrow in weeks.",
          "Because soft washing kills rather than blasts organic growth, surfaces typically stay clean 2–4 years before they need washing again. The same surface pressure-washed alone often shows regrowth within 6–12 months.",
        ],
      },
      {
        heading: "Signs Your Home Needs Soft Washing",
        content: [
          "Most of these are visible from the driveway. If you see any of the following on the north or shaded sides of your home, it's time to schedule a wash:",
        ],
        bullets: [
          "Green or dark streaks running vertically down siding (algae following water flow)",
          "Dark brown or black patches (mildew or mold — common near gutters and ground level)",
          "Overall gray, dingy look to siding that once appeared bright white or light-colored",
          "Visible dirt lines on horizontal trim, window sills, and ledges",
          "Musty smell near exterior walls on humid days",
        ],
      },
      {
        heading: "What a Professional Soft Wash Includes",
        content: [
          "A reputable company wets down plants and adjacent surfaces first, applies a cleaning solution (typically diluted bleach plus surfactant), allows a 5–15 minute dwell time, then rinses thoroughly. An average home takes 2–4 hours from setup to completion.",
          "Ask specifically whether the company adjusts their chemical ratio for different surfaces — wood siding tolerates different concentrations than vinyl, and a company that uses one formula for everything may be taking shortcuts.",
        ],
      },
      {
        heading: "How to Prepare Your Home",
        content: ["These steps take 10 minutes and help the job go smoothly:"],
        bullets: [
          "Close all windows, doors, and vents",
          "Move outdoor furniture, grills, and potted plants away from the house",
          "Cover HVAC units and electrical service panels if the company directs you to",
          "Let the company know about sensitive garden beds close to the foundation",
          "Remove bird feeders, wind chimes, and anything hanging on exterior walls",
        ],
      },
    ],
    faqs: [
      {
        q: "Will soft washing damage my vinyl siding?",
        a: "No. Low-pressure soft washing poses zero risk to vinyl, fiber cement (Hardie board), or painted wood siding. The cleaning agents are diluted well below any level that affects the material. This is why professional companies switched from pressure washing siding years ago.",
      },
      {
        q: "Can soft washing remove deep oil or rust stains on siding?",
        a: "Soft washing excels at organic growth — algae, mold, mildew, lichen. For petroleum or rust stains on siding, a targeted degreaser or rust remover may be needed first. Most full-service companies carry these and apply them to problem areas before the main wash.",
      },
      {
        q: "How long until my house looks dirty again?",
        a: "In humid climates (Southeast, Pacific Northwest, Gulf Coast): 1–2 years. In drier areas: 2–4 years. North-facing walls and areas shaded by heavy tree canopy may show new algae growth sooner, as they stay moist longer.",
      },
      {
        q: "Do I need to be home for the soft wash?",
        a: "Not necessarily. Someone should be available to grant access to an outdoor hose bib (spigot) if the company uses your water. Many companies bring their own water tanks, in which case you don't need to be home at all — just leave gates unlocked if needed.",
      },
    ],
    relatedGuides: ["pressure-vs-soft-washing", "best-time-power-wash", "power-washing-home-value"],
    relatedServices: ["driveway", "stucco-cleaning", "roof-cleaning"],
  },

  {
    id: "driveway",
    slug: "driveway",
    name: "Driveway & Concrete Cleaning",
    title: "Driveway Pressure Washing Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Get free quotes from driveway and concrete cleaning pros in your area. Learn what driveway washing costs, how long it takes, and when sealing makes sense. No obligation.",
    headline: "Driveway & Concrete Cleaning",
    subheadline: "Remove oil stains, tire marks, moss, and years of buildup from driveways, sidewalks, and patios",
    intro:
      "Professional driveway and concrete cleaning uses high-pressure equipment (2,000–3,500 PSI) with rotating surface cleaning attachments to remove oil stains, tire marks, moss, mildew, and embedded dirt. The result is often dramatic — concrete that looks permanently stained frequently comes back close to its original color.",
    quickStats: { costRange: "$100–$300", duration: "1–2 hours", frequency: "Every 1–2 years" },
    sections: [
      {
        heading: "How Professional Driveway Cleaning Works",
        content: [
          "Most pros use a rotating surface cleaner attachment rather than a hand wand. Surface cleaners create an even, circular cleaning pattern that eliminates the streaky lines you get from wanding by hand. Pre-treatment degreaser is applied to oil stains and allowed to dwell for 10–15 minutes before the main pass.",
          "After the surface cleaner makes its passes, a hand wand is used along edges, corners, and along the house foundation where the machine can't reach. The whole process for a standard two-car driveway typically takes 45 minutes to an hour.",
        ],
      },
      {
        heading: "What Can (and Can't) Be Removed",
        content: [
          "Power washing removes most organic staining (moss, mildew, algae, tire rubber, general dirt) completely. Old, deep-set oil stains can be significantly reduced — especially with hot-water machines — but may not disappear 100%. Set that expectation with your contractor before booking.",
        ],
        bullets: [
          "Moss, algae, and mildew: removes completely",
          "Tire marks and rubber deposits: removes completely",
          "Surface dirt and general weathering: removes completely",
          "Fresh-to-medium oil stains: significant improvement, often near-complete removal",
          "Years-old oil soaked deep into concrete: reduced but may not disappear entirely",
          "Rust stains from metal furniture or irrigation: requires rust remover pre-treatment",
        ],
      },
      {
        heading: "Surfaces That Can Be Pressure Washed Safely",
        content: ["Different concrete finishes and paving materials have different tolerances:"],
        bullets: [
          "Standard concrete driveways and sidewalks: any pressure, minimal risk",
          "Brick pavers: medium pressure — avoid disturbing joint sand",
          "Exposed aggregate: medium pressure — avoid stripping the surface matrix",
          "Stamped or decorative concrete: low-medium pressure to protect sealers",
          "Asphalt: low pressure only (under 1,500 PSI) — high pressure damages the binder",
        ],
      },
      {
        heading: "Should You Seal After Washing?",
        content: [
          "Sealing is optional but significantly extends the time between cleanings and protects against oil and staining going forward. A freshly washed driveway is the ideal prep surface — sealer bonds far better to clean concrete than dirty.",
          "Budget separately: concrete sealer typically adds $100–$300 for an average driveway depending on the sealer type. Ask your washing contractor whether they offer sealing, or book it as a follow-up service.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does my driveway have black streaks?",
        a: "Black streaks on concrete are almost always mold, mildew, or algae — especially common on shaded sections and in humid climates. These come off cleanly with pressure washing and a bleach-based cleaner, with no staining remaining in most cases.",
      },
      {
        q: "How often should I have my driveway cleaned?",
        a: "Every 1–2 years for maintenance. High-traffic areas, driveways with overhanging trees, or properties in humid climates may benefit from annual cleaning. Leaving moss and algae to grow for several years also makes the eventual cleaning job harder.",
      },
      {
        q: "Will pressure washing damage my concrete?",
        a: "No, if done correctly with a surface cleaner. Consumer-grade machines can etch concrete because they concentrate pressure in a narrow stream. Professional rotary surface cleaners distribute pressure evenly, producing a uniform result without surface damage. Warn your contractor about any existing cracks — water forced into cracks can expand them.",
      },
      {
        q: "What's the best way to get old oil stains out?",
        a: "Hot-water pressure washing machines work significantly better on petroleum stains than cold-water units — the heat breaks down the oil. Combined with a dedicated concrete degreaser pre-treatment, old stains are often reduced 70–90%. Ask when booking whether the company runs hot water.",
      },
    ],
    relatedGuides: ["power-washing-cost", "remove-rust-stains"],
    relatedServices: ["house-soft-washing", "patio-paver-cleaning", "commercial"],
  },

  {
    id: "deck-restoration",
    slug: "deck-restoration",
    name: "Deck Restoration",
    title: "Deck Washing & Restoration Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Get free quotes from deck restoration pros near you. Deck washing removes weathering, algae, and mildew — and is required prep before staining or sealing. No obligation.",
    headline: "Deck Washing & Restoration",
    subheadline: "Remove weathering, algae, and mildew — required prep before staining or sealing",
    intro:
      "Deck restoration combines careful pressure washing with wood-safe cleaning agents to remove surface weathering, mildew, and embedded dirt without damaging wood grain. A properly cleaned deck looks dramatically better immediately — and is the required first step before restaining, resealing, or refinishing.",
    quickStats: { costRange: "$150–$400", duration: "1–3 hours", frequency: "Every 1–2 years" },
    sections: [
      {
        heading: "Why Decks Need Special Treatment",
        content: [
          "Wood grain is porous — too much water pressure opens the grain and raises fibers, leaving a fuzzy surface that stains unevenly and accelerates weathering. Professional deck washers use lower pressure than they would on concrete and apply wood-safe cleaning agents that lift gray oxidation and mildew without damaging the wood.",
          "For composite decking (Trex, TimberTech, Fiberon), the cleaning chemistry changes again — composites can be softer than natural wood in some respects and require very low pressure with a composite-safe cleaner. Always confirm with your pro that they have experience with your specific deck material.",
        ],
      },
      {
        heading: "What Gets Removed",
        content: ["Professional deck cleaning removes the buildup that makes wood look old and neglected:"],
        bullets: [
          "Gray, weathered surface layer — UV-damaged wood that has oxidized over time",
          "Green algae patches, especially on shaded or north-facing boards",
          "Black mildew streaks along board edges and in gaps",
          "Ground-in dirt from years of foot traffic",
          "Tannin bleed-through (dark staining from where water drains and sits)",
          "Old, peeling stain or sealer that's lifting from the surface",
        ],
      },
      {
        heading: "After the Wash: Staining and Sealing",
        content: [
          "If you're planning to restain or reseal, pressure washing is not optional — stain applied to dirty, mildewed wood bonds poorly and peels in one season. Wait 24–48 hours after washing to allow the wood to fully dry before applying any stain or sealer.",
          "Many deck restoration companies offer wash-and-stain packages, which simplifies scheduling and is typically cheaper than booking separately. If your deck hasn't been refinished in 3+ years, plan both at the same time.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if my deck needs cleaning or replacement?",
        a: "Boards that are structurally sound but look gray, green, or weathered can almost always be restored with cleaning. Boards that are soft when probed with a screwdriver, show active rot at joists or posts, or are cracked through — those need replacement. Cleaning doesn't fix structural damage, but it often reveals whether it exists.",
      },
      {
        q: "Can you clean composite decking?",
        a: "Yes, but the process is different. Composite decking requires very low pressure and a composite-safe cleaning solution. High pressure can scuff or damage the surface cap on some composite brands. Confirm your contractor has hands-on experience with your specific product (Trex, TimberTech, etc.) before booking.",
      },
      {
        q: "What's the best time of year to clean a deck?",
        a: "Spring (after the last freeze) or early fall (before sustained cold). If you're planning to stain after cleaning, you need temperatures above 50°F for the stain to cure. Cleaning in late fall is fine if you're not refinishing — it clears the debris before winter so you start fresh in spring.",
      },
      {
        q: "How long will the results last?",
        a: "A cleaned and freshly stained deck typically looks good for 2–3 years before stain begins to fade and cleaning is needed again. Unfinished or unsealed wood after cleaning will show weathering faster — within a season in humid climates. Staining after cleaning is strongly recommended.",
      },
    ],
    relatedGuides: ["best-time-power-wash", "power-washing-cost", "power-washing-home-value"],
    relatedServices: ["house-soft-washing", "fence-washing", "driveway"],
  },

  {
    id: "roof-cleaning",
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    title: "Roof Cleaning Near Me | Free Soft Wash Quotes | WashPro Directory",
    metaDescription:
      "Find licensed roof cleaning pros near you. Learn what causes black streaks, why soft washing is the only safe method for shingles, and what roof cleaning costs. Free quotes.",
    headline: "Roof Cleaning",
    subheadline: "Remove algae, moss, and black streaks safely — soft wash only, no pressure on shingles",
    intro:
      "Roof cleaning removes the algae, moss, and lichen that discolor shingles and — left untreated — shorten roof life. Professional roof cleaning always uses soft-wash techniques at 100–300 PSI. High-pressure washing should never be applied to asphalt shingles.",
    quickStats: { costRange: "$250–$600", duration: "2–4 hours", frequency: "Every 2–5 years" },
    sections: [
      {
        heading: "What Those Black Streaks Actually Are",
        content: [
          "The dark streaks on asphalt roofs are almost universally caused by Gloeocapsa Magma — an airborne cyanobacteria (algae) that feeds on the limestone filler in asphalt shingles. It starts as small spots and spreads in streaks that run down the roof slope with water flow. In early stages it's cosmetic, but long-term, algae retains moisture against shingles and accelerates the loss of protective granules.",
          "Green growth (moss, lichen) is structurally more serious. Moss root systems can physically pry up shingles, and lichen bonds so tightly to the shingle surface that removal requires longer dwell times and higher-concentration treatment. Lichen left untreated for years causes visible pitting and surface damage.",
        ],
      },
      {
        heading: "Why Pressure Washing Shingles Is Never the Answer",
        content: [
          "High-pressure water blasts the mineral granules off asphalt shingles. Granules protect the asphalt layer from UV radiation and are the primary defense against accelerated weathering. A roof pressure-washed at 2,000+ PSI loses years of life in an afternoon. Any company that proposes pressure washing your shingles should be declined immediately.",
          "The Asphalt Roofing Manufacturers Association (ARMA) recommends a diluted sodium hypochlorite solution applied at low pressure — this is the industry standard. The solution kills algae and moss on contact and washes off in the next rain without damaging granules.",
        ],
      },
      {
        heading: "Does Roof Cleaning Actually Extend Roof Life?",
        content: [
          "For moss and lichen — yes, definitively. Heavy moss coverage causes mechanical damage to shingles and voids many manufacturer warranties. For algae alone, the primary benefit is cosmetic and preventative: the dark streaks age a home's appearance significantly and removing them before a home sale is one of the highest-ROI cleaning investments.",
          "After cleaning, many pros recommend installing zinc or copper ridge strips. As rainwater runs over the metal, it releases ions that inhibit algae and moss regrowth for 3–5 years per set of strips.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is roof cleaning safe for my landscaping?",
        a: "When done correctly, yes. Professional companies wet plants before and after cleaning, use appropriately diluted solutions, and rinse thoroughly. If you have sensitive plantings directly below the roof edge, mention this when booking and ask about their runoff protocol.",
      },
      {
        q: "How quickly does the algae treatment work?",
        a: "The cleaning solution begins killing algae on contact — you'll see discoloration lift within minutes on fresh growth. Dead moss can take a few weeks to fully release from the shingle surface and wash off with rain, which is normal.",
      },
      {
        q: "My roof is 15 years old. Is it worth cleaning?",
        a: "Yes, if the shingles are structurally intact. Cleaning and treating a 15-year-old roof costs a fraction of replacement and can extend life by 5–10 years. Ask the contractor to note any areas of significant granule loss or shingle damage during the inspection that precedes cleaning.",
      },
      {
        q: "Can I do this myself?",
        a: "Roof work carries serious fall risk, and improper chemical dilution can damage shingles and landscaping. The cost savings (typically $150–$300 vs professional) don't justify the risk for most homeowners. If you do it yourself, wear proper fall protection, never use a pressure washer, and mix sodium hypochlorite solutions at manufacturer-recommended dilutions.",
      },
    ],
    relatedGuides: ["remove-roof-algae", "pressure-vs-soft-washing", "power-washing-cost"],
    relatedServices: ["house-soft-washing", "gutter-cleaning"],
  },

  {
    id: "fence-washing",
    slug: "fence-washing",
    name: "Fence Washing",
    title: "Fence Washing Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find fence washing pros near you. Get free quotes to clean wood, vinyl, or chain-link fencing. Learn about the cleaning process, costs, and prep before staining.",
    headline: "Fence Washing",
    subheadline: "Restore wood, vinyl, and chain-link fencing — required prep before staining or painting",
    intro:
      "Fence washing removes algae, mildew, weathering stains, and general grime from wood, vinyl, aluminum, and chain-link fencing. The result is immediate and dramatic — especially on cedar and pine, where gray oxidation strips away to reveal fresh wood color. For wood fences, cleaning is the required first step before any staining or painting.",
    quickStats: { costRange: "$100–$300", duration: "1–2 hours", frequency: "Every 1–2 years" },
    sections: [
      {
        heading: "Cleaning Approach by Fence Material",
        content: [
          "Different fence materials tolerate different pressure levels and cleaning agents:",
        ],
        bullets: [
          "Cedar, pine, and pressure-treated wood: medium pressure (600–1,200 PSI) with a wood-safe cleaner or deck wash. Avoid raising the grain with excessive pressure.",
          "Vinyl fencing: soft wash or very low pressure is usually sufficient — vinyl's non-porous surface releases dirt and algae easily with light chemistry.",
          "Aluminum and powder-coated metal: low pressure with mild soap. These surfaces scratch relatively easily — no abrasives.",
          "Chain-link: medium to high pressure is fine. Pre-treat rust spots with rust remover before washing.",
        ],
      },
      {
        heading: "Before Staining or Painting a Wood Fence",
        content: [
          "Stain applied to dirty or mildewed wood fails quickly — it bonds to the contamination rather than the wood. Professional cleaning is the only way to prepare the surface properly. Wait 24–48 hours after washing for the wood to dry fully before applying any finish.",
          "Many fence companies offer wash-and-stain packages. Bundling is almost always cheaper than booking separately, and the timing is ideal — staining immediately after drying gives you the best adhesion. If your fence hasn't been refinished in 3+ years, plan both at the same time.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I remove green algae from vinyl fencing?",
        a: "Soft washing with a mild bleach-based cleaning solution removes algae from vinyl completely. Pressure alone removes loose surface dirt, but algae requires chemistry to kill at the root level. A 5–10 minute dwell time with a soft-wash solution, then a rinse, handles even heavy algae growth.",
      },
      {
        q: "Can cleaning restore a gray, weathered wood fence?",
        a: "Yes — this is one of the most dramatic results in exterior cleaning. Gray weathering is surface oxidation that strips away with a wood cleaner and light pressure, revealing the original wood color beneath. Severely weathered cedar or pine often looks nearly new after cleaning.",
      },
      {
        q: "Should I clean my fence before winter?",
        a: "Fall cleaning removes the summer's mold and algae growth and leaves the fence in better condition for winter. For wood fences, fall cleaning followed by a fresh coat of sealant before temps drop is ideal — it protects the wood through the freeze-thaw cycles that cause the most damage.",
      },
    ],
    relatedGuides: ["power-washing-cost", "winter-prep-power-washing"],
    relatedServices: ["deck-restoration", "house-soft-washing"],
  },

  {
    id: "gutter-cleaning",
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    title: "Gutter Cleaning Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find gutter cleaning pros near you. Clogged gutters cause foundation damage, fascia rot, and ice dams. Get free quotes and learn when gutters need cleaning.",
    headline: "Gutter Cleaning",
    subheadline: "Prevent foundation damage, fascia rot, and ice dams — most homes need cleaning twice per year",
    intro:
      "Gutter cleaning removes the leaves, seeds, shingle debris, and organic buildup that clog gutters and block downspouts. Clogged gutters overflow against your foundation, rot fascia and soffit boards, and create ice dams in freezing climates. This is one of the lowest-cost, highest-consequence maintenance services on a home.",
    quickStats: { costRange: "$75–$250", duration: "1–2 hours", frequency: "2× per year" },
    sections: [
      {
        heading: "Gutter Cleaning vs. Gutter Brightening — Know the Difference",
        content: [
          "Gutter cleaning means removing debris from inside the gutters and flushing downspouts clear — this is the essential maintenance service.",
          "Gutter brightening is a separate cosmetic service for the exterior of the gutter channel. Those black vertical streaks (called tiger stripes) are caused by oxidized roof runoff and won't come off with a garden hose or standard washing. Brightening uses a specialized cleaning agent applied by hand or low-pressure spray.",
          "Many companies offer both as a combined service. If your gutters are clean inside but streaky on the outside, ask specifically about brightening when you call.",
        ],
      },
      {
        heading: "Why Clogged Gutters Are a Serious Problem",
        content: [
          "Gutters exist for one reason: to move water away from your foundation. When they overflow, water pools directly against the foundation and can penetrate into basements and crawl spaces. Foundation water intrusion is one of the most expensive residential repairs — remediation costs commonly run $5,000–$30,000+.",
          "Overflowing gutters also saturate and rot the wood fascia and soffit boards behind them. Once rot sets in, the repair involves replacing both the wood and the gutter hardware. The weight of wet debris also pulls gutters away from the fascia over time, requiring full gutter replacement.",
        ],
      },
      {
        heading: "Signs You Need Cleaning Now",
        content: ["Don't wait for the annual schedule if you're seeing any of these:"],
        bullets: [
          "Water visibly spilling over the front edge of gutters during rain (not just at seams or downspouts)",
          "Plants or seedlings growing from gutters — this means substantial soil has accumulated",
          "Sagging sections of gutter — debris weight is pulling them down",
          "Water staining or mold on siding directly below the gutter line",
          "Downspouts that don't flow well or are silent during heavy rain",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should gutters be cleaned?",
        a: "Most homes: twice per year — late spring (after pollen and seed season) and late fall (after leaves drop). Homes under pine trees may need 3–4 cleanings per year because pines drop needles year-round and the needles compact into a dense mat that blocks drainage quickly.",
      },
      {
        q: "What's included in a standard gutter cleaning service?",
        a: "Removal of all debris from gutters by hand or vacuum, flushing of downspouts to confirm clear flow, and a basic visual inspection for loose hangers or damaged sections. Full gutter cleaning doesn't include gutter repair — ask the contractor to note any issues found during the cleaning so you can address them separately.",
      },
      {
        q: "Can I inspect my gutters from the ground?",
        a: "You can see obvious overflows and plant growth from the ground. But you can't see inside gutter runs that drain away from you, and you can't check downspout flow without someone at roof level. A professional inspection during cleaning covers the full run including downspout outlets.",
      },
    ],
    relatedGuides: ["power-washing-cost", "vet-power-washing-contractor"],
    relatedServices: ["roof-cleaning", "house-soft-washing"],
  },

  {
    id: "solar-panels",
    slug: "solar-panels",
    name: "Solar Panel Cleaning",
    title: "Solar Panel Cleaning Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find solar panel cleaning pros near you. Dirty panels lose 15–25% of output. Learn about cleaning costs, frequency, and why deionized water matters. Free quotes.",
    headline: "Solar Panel Cleaning",
    subheadline: "Recover 15–25% of lost output — dirty panels are your most expensive maintenance skip",
    intro:
      "Dirt, bird droppings, pollen, and dust coating solar panels reduce energy output by 15–25% or more. Professional solar panel cleaning uses deionized (mineral-free) water and soft brushes to remove buildup without scratching the anti-reflective coating that makes panels efficient.",
    quickStats: { costRange: "$100–$350", duration: "1–2 hours", frequency: "1–2× per year" },
    sections: [
      {
        heading: "How Much Output Are You Losing?",
        content: [
          "A panel coated in a visible layer of dust and pollen loses 15–25% of its rated capacity. In areas with heavy pollen seasons, significant bird activity, or nearby construction dust, output degradation can approach 30%. Even a thin, barely visible film reduces efficiency measurably.",
          "The ROI calculation is straightforward: a 10 kW system losing 20% output in a $0.15/kWh market loses roughly $2.50–$3.00 per day at peak production. A $150–$200 cleaning that restores full output pays for itself within 2–3 months. This assumes average sun hours — actual recovery varies by system size and location.",
        ],
      },
      {
        heading: "Why Deionized Water Matters",
        content: [
          "Tap water contains dissolved minerals — calcium, magnesium, silica. As tap water evaporates from panel surfaces, it leaves mineral deposits that create a hazy film. You've seen this on car windows after a sprinkler hits them. Each cleaning with tap water adds another layer.",
          "Professional solar cleaners use deionized (DI) water that has had all minerals removed. DI water evaporates without leaving any residue, leaving the panel surface optically clear. This is the same water used in laboratory and electronics manufacturing environments.",
        ],
      },
      {
        heading: "Timing and Frequency",
        content: [
          "Most installers recommend cleaning 1–2 times per year. In desert climates or areas with significant dust or pollen, quarterly cleaning may make economic sense. Schedule around high-pollen season — cleaning immediately before and after keeps output high when sun hours are longest.",
          "Morning or late afternoon is ideal. Panels heat up significantly in direct midday sun, and cold water on hot glass can cause thermal stress. Most professionals avoid midday cleaning in summer for this reason.",
        ],
      },
    ],
    faqs: [
      {
        q: "Won't rain clean my panels?",
        a: "Rain removes loose surface dust but doesn't remove bird droppings, caked pollen, or the thin mineral film from tap-water irrigation spray. Post-rain panels often look clean from the ground but still have a measurable performance-reducing film close up.",
      },
      {
        q: "Can I clean my own panels?",
        a: "For ground-mounted or first-story roof panels with safe access: yes, with the right equipment (deionized water source, soft brush, no abrasives). For second-story or steep-pitch rooftop panels, fall protection requirements make professional cleaning the safer choice. Never use harsh chemicals, abrasive pads, or high pressure on panels.",
      },
      {
        q: "Does cleaning void my warranty?",
        a: "No — cleaning is explicitly required maintenance in most solar warranties. Neglecting to clean can actually create warranty exposure if panel degradation is attributed to maintenance failure. The key is using proper technique: no abrasives, no harsh chemicals, no high pressure.",
      },
    ],
    relatedGuides: ["power-washing-cost"],
    relatedServices: ["roof-cleaning", "house-soft-washing"],
  },

  {
    id: "commercial",
    slug: "commercial",
    name: "Commercial Property Washing",
    title: "Commercial Pressure Washing Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find commercial pressure washing contractors near you. Storefront, parking lot, sidewalk, and building exterior cleaning. Get free quotes from insured commercial pros.",
    headline: "Commercial Property Washing",
    subheadline: "Storefronts, sidewalks, parking lots, and building exteriors — keep your property professional",
    intro:
      "Commercial exterior washing covers everything from retail storefront facades and sidewalks to parking lots, loading docks, and multi-story building exteriors. Regular washing maintains customer-facing appearance, protects surfaces from accelerated weathering, and in many cases is required under lease or HOA agreements.",
    quickStats: { costRange: "$200–$2,000+", duration: "Varies", frequency: "Quarterly–annually" },
    sections: [
      {
        heading: "What Commercial Washing Covers",
        content: [
          "Commercial washing encompasses a wider range of surfaces and services than residential work:",
        ],
        bullets: [
          "Storefront facades, glass, and entryway surfaces",
          "Sidewalks, parking lot surface areas, and exterior walkways",
          "Dumpster enclosures and grease trap areas (requires specialty equipment and waste containment)",
          "Parking structures and garage floors",
          "Loading docks, service areas, and industrial surfaces",
          "Awnings and signage (low pressure only — confirm with contractor)",
          "Building exteriors for office parks, retail centers, and industrial facilities",
        ],
      },
      {
        heading: "Scheduling and Logistics",
        content: [
          "Most commercial washing is scheduled for early morning, evenings, or weekends to avoid disruption to customers and staff. Wet walkways require temporary signage and coordination with property management.",
          "For multi-tenant properties and HOA-managed commercial complexes, require documentation of insurance coverage before work begins. Industry standard for commercial work is $1M+ general liability plus workers' compensation, with a named-additional-insured certificate available on request.",
        ],
      },
      {
        heading: "Cleaning Frequency by Property Type",
        content: [
          "How often your property needs washing depends on traffic volume, location, and use:",
        ],
        bullets: [
          "High-traffic retail and restaurant exteriors: quarterly",
          "Office parks and suburban commercial: twice per year",
          "Grease-prone areas (restaurants, food service): monthly to quarterly",
          "Industrial and warehouse facilities: annually or after major projects",
          "Parking lots and hard surfaces: 1–2 times per year",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you work around our business hours?",
        a: "Yes. Reputable commercial contractors routinely schedule early morning, evening, or weekend slots to minimize business disruption. Discuss timing requirements upfront when requesting quotes — most experienced commercial washers are accustomed to working around operating schedules.",
      },
      {
        q: "What insurance does a commercial washing contractor need?",
        a: "At minimum: $1M general liability and workers' compensation. For large commercial jobs, $2M is common. Ask for a Certificate of Insurance (COI) naming your property address before work begins. Any legitimate commercial contractor provides this as a matter of routine.",
      },
      {
        q: "Do I need to contain wastewater?",
        a: "In most jurisdictions, wastewater from commercial washing — especially from parking lots with oil and grease — cannot enter storm drains. Professional commercial contractors use containment berms and wet vacuums for areas with significant runoff. Ask specifically about containment and disposal practices when comparing quotes.",
      },
    ],
    relatedGuides: ["vet-power-washing-contractor", "power-washing-cost"],
    relatedServices: ["driveway", "graffiti-removal"],
  },

  {
    id: "patio-paver-cleaning",
    slug: "patio-paver-cleaning",
    name: "Patio & Paver Cleaning",
    title: "Patio & Paver Cleaning Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find local pros for patio and paver cleaning. What paver washing and re-sanding costs, why joint sand matters, and how to restore stained pavers without damaging them.",
    headline: "Patio & Paver Cleaning",
    subheadline: "Restore pavers, flagstone, and stamped patios — without blowing out the joint sand",
    intro:
      "Paver patios and walkways are among the most satisfying surfaces to have professionally cleaned — years of gray grime rinse away to reveal the original color underneath. But pavers are also one of the easiest surfaces to damage with a rented pressure washer: too much pressure blasts out joint sand, dislodges pavers, and etches the surface. Professional paver cleaning combines controlled pressure, the right chemistry, and re-sanding to leave the patio both clean and structurally sound.",
    quickStats: { costRange: "$150–$450", duration: "2–5 hours", frequency: "Every 1–2 years" },
    sections: [
      {
        heading: "Why Pavers Need a Different Approach Than Concrete",
        content: [
          "A concrete slab is one continuous surface. A paver patio is hundreds of individual units held in alignment by compacted joint sand — and that sand is the weak point. High pressure aimed into the joints excavates the sand in seconds, which lets pavers shift, rock, and grow weeds through the newly opened gaps.",
          "Professionals clean pavers with a surface cleaner (a spinning-bar attachment that keeps pressure angled down rather than into joints) at moderate PSI, after a chemical pre-treatment has already loosened organic growth. The pressure rinses; it doesn't excavate. Efflorescence — the white chalky haze common on newer pavers — needs a dedicated acidic cleaner, not more pressure.",
        ],
      },
      {
        heading: "Re-Sanding and Sealing: The Other Half of the Job",
        content: [
          "Even careful washing removes some joint sand, so a complete paver job includes re-sanding. Ask specifically whether the quote includes it:",
        ],
        bullets: [
          "Standard joint sand: swept into joints after the surface fully dries — the minimum acceptable finish",
          "Polymeric sand: sand with a binding polymer that hardens after wetting — resists washout, blocks weeds and ants, lasts years longer; adds $1–$2 per sq ft",
          "Sealing (optional): enhances color, slows staining and organic regrowth; applied 24–48 hours after cleaning once pavers are bone dry",
          "A wash-only quote that skips re-sanding isn't complete — joints left low invite weeds, ants, and paver movement",
        ],
      },
      {
        heading: "Common Paver Stains and What Removes Them",
        content: [
          "Pavers collect a wider variety of stains than most surfaces because of how they're used. Each has a specific fix:",
        ],
        bullets: [
          "Black/gray organic film and green algae: sodium hypochlorite pre-treatment, then surface cleaning — the standard job",
          "Grill grease and food oils: degreaser with dwell time before the main wash",
          "Rust from furniture and fire pits: oxalic-acid-based rust remover applied to specific spots",
          "Efflorescence (white haze): dedicated efflorescence cleaner — bleach does nothing to it",
          "Leaf tannin and mulch dye stains: usually lighten dramatically with pre-treatment and often fade fully with sun exposure after cleaning",
          "Polymeric sand haze from a bad install: requires a specialty haze remover — point it out when getting quotes",
        ],
      },
      {
        heading: "What a Professional Paver Cleaning Costs",
        content: [
          "Expect $0.50–$1.50 per square foot for cleaning alone, depending on condition and region. A typical 300 sq ft patio runs $150–$300 to clean. Add re-sanding with polymeric sand and sealing, and the full restoration package for the same patio typically lands between $450 and $900 — still a fraction of the $15–$30 per sq ft cost of replacing a failed patio.",
          "Flagstone, travertine, and natural stone command the higher end of cleaning rates because they're softer and more chemical-sensitive than concrete pavers. Confirm the company has cleaned your specific stone type before booking — travertine in particular is damaged by acidic cleaners that are routine on concrete pavers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will pressure washing ruin the sand between my pavers?",
        a: "Careless pressure washing will — a zero-degree tip aimed into joints excavates them in seconds. Professional cleaning uses a surface cleaner at controlled pressure that removes far less sand, and a complete job includes re-sanding the joints afterward. Always confirm re-sanding is in the quote.",
      },
      {
        q: "What is the white chalky film on my pavers?",
        a: "That's efflorescence — mineral salts migrating out of the concrete as moisture moves through it. It's harmless and common on pavers under 2 years old, but bleach and pressure won't remove it. It needs a dedicated efflorescence cleaner, which most paver-experienced companies carry.",
      },
      {
        q: "Should I seal my pavers after cleaning?",
        a: "It's optional but worthwhile if you like the look — sealers deepen color, slow organic regrowth, and make future cleaning easier. If you seal, it must happen 24–48 hours after washing on completely dry pavers, so it naturally bundles with a cleaning job. Expect resealing every 3–5 years.",
      },
      {
        q: "How long after cleaning until I can use the patio?",
        a: "Walk on it as soon as it's rinsed. If joints were re-sanded with polymeric sand, keep furniture off for 24 hours and avoid watering for 48 hours while the polymer sets. If sealed, follow the sealer's cure time — typically 24–72 hours before heavy use.",
      },
    ],
    relatedGuides: ["pressure-washing-concrete", "remove-rust-stains", "power-washing-cost"],
    relatedServices: ["driveway", "deck-restoration", "brick-cleaning"],
  },

  {
    id: "brick-cleaning",
    slug: "brick-cleaning",
    name: "Brick & Masonry Cleaning",
    title: "Brick & Masonry Cleaning Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find pros who clean brick homes, walls, and chimneys the right way. Why old brick and high pressure don't mix, what brick washing costs, and how mortar condition changes the job.",
    headline: "Brick & Masonry Cleaning",
    subheadline: "Deep-clean brick homes, walkways, and chimneys without eroding mortar or spalling faces",
    intro:
      "Brick looks indestructible, which is exactly why so much of it gets damaged by aggressive cleaning. Brick and mortar are porous, and older masonry in particular can be surprisingly soft. The right cleaning approach depends on the age of the brick, the condition of the mortar joints, and what's actually growing on it. Done correctly, a professional brick wash removes decades of grime and biological growth while leaving the masonry structurally untouched.",
    quickStats: { costRange: "$250–$600", duration: "3–6 hours", frequency: "Every 2–4 years" },
    sections: [
      {
        heading: "Why Brick Age Changes Everything",
        content: [
          "Modern brick (roughly post-1950) is kiln-fired hard and tolerates moderate pressure — 1,000–1,500 PSI with a wide tip is generally safe on the brick faces themselves. The mortar between them is always the weaker material and erodes first if pressure is misused.",
          "Pre-war and historic brick is a different material entirely. Older bricks have a hard fired outer skin over a softer core; blast through that skin with high pressure and the brick begins spalling — flaking apart — with every freeze-thaw cycle afterward. Historic masonry should only ever be cleaned with low pressure and appropriate chemistry, and any company that quotes a historic home without asking its age is a red flag.",
          "This is why professional brick cleaning leads with chemistry: a sodium hypochlorite solution for organic growth, or a masonry detergent for general grime, applied at soft-wash pressure, dwelled, and rinsed at the lowest pressure that gets the job done.",
        ],
      },
      {
        heading: "What Brick Cleaning Removes (and What It Won't)",
        content: [
          "Set expectations before booking — some brick discoloration is dirt, and some is the brick itself:",
        ],
        bullets: [
          "Removes: green algae, black gloeocapsa streaking, mildew, dirt film, cobwebs, wasp nests, and most atmospheric grime",
          "Removes with targeted treatment: rust stains (oxalic acid), efflorescence (acidic efflorescence cleaner), smoke staining around chimneys (degreaser)",
          "Usually improves but may not eliminate: decades-old carbon staining on historic brick, deep mortar staining",
          "Won't fix: vanadium staining (green/yellow salts on new brick), paint ghosting from removed paint, spalled or damaged brick faces — those are repair jobs, not cleaning jobs",
        ],
      },
      {
        heading: "Mortar Condition: Check Before You Wash",
        content: [
          "Water is brick's long-term enemy, and failing mortar joints are how it gets in. Before any wash, inspect the joints: crumbling, cracked, or recessed mortar means water from even gentle washing enters the wall cavity. If a screwdriver scrapes mortar out easily, the wall needs repointing before it needs washing.",
          "A good masonry cleaning company checks this on their walkthrough and will tell you if washing should wait. Washing first and repointing after is backwards — fresh mortar needs 28 days of cure time before it can be washed, so the correct order is repoint, cure, then clean.",
        ],
      },
      {
        heading: "Pricing and What Affects It",
        content: [
          "Whole-house brick washing typically runs $250–$600 for an average single-story home, with two-story homes adding 30–50%. Brick patios and walkways price similarly to pavers at $0.50–$1.50 per square foot. Chimney exterior cleaning as a standalone runs $150–$350 depending on height and access.",
        ],
        bullets: [
          "Heavy organic growth (north walls, shaded sides) adds dwell time and product",
          "Historic or soft brick requires gentler methods and more time — expect a premium, and be glad to pay it",
          "Efflorescence or rust treatment is typically a per-area add-on of $50–$150",
          "Post-clean water repellent (siloxane-based breathable sealer) is an optional add-on that slows re-soiling; never accept a non-breathable film-forming sealer on brick",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you pressure wash a brick house?",
        a: "Modern brick tolerates moderate, properly angled pressure, but the professional standard is soft washing — chemistry at low pressure — because mortar joints and older brick faces are easily damaged. If a company's plan is simply \"high pressure, no chemicals,\" keep looking.",
      },
      {
        q: "What are the white deposits on my brick?",
        a: "Efflorescence — soluble salts carried to the surface as moisture moves through the masonry. It brushes off dry sometimes, but pressure washing alone won't remove it and can worsen it by adding water. It needs a dedicated acidic efflorescence cleaner, applied carefully and neutralized.",
      },
      {
        q: "Will cleaning damage my mortar joints?",
        a: "Sound mortar handles professional soft washing without issue. Deteriorated mortar is the risk — washing forces water into failing joints and accelerates damage. Have joints inspected first; if they're crumbling, repoint first, let it cure 28 days, then wash.",
      },
      {
        q: "Can smoke stains be removed from a brick fireplace or chimney?",
        a: "Exterior chimney smoke staining usually responds well to degreaser and hot-water washing. Interior firebox soot is a different job requiring specialty masonry cleaners and hand work. Expect improvement rather than perfection on carbon staining that has had years to soak into porous brick.",
      },
    ],
    relatedGuides: ["pressure-vs-soft-washing", "remove-rust-stains", "vet-power-washing-contractor"],
    relatedServices: ["house-soft-washing", "patio-paver-cleaning", "stucco-cleaning"],
  },

  {
    id: "stucco-cleaning",
    slug: "stucco-cleaning",
    name: "Stucco & EIFS Cleaning",
    title: "Stucco & EIFS Cleaning Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find pros who safely clean stucco and EIFS (Dryvit) exteriors. Why stucco can never be pressure washed, what soft washing costs, and how to spot the difference between dirt and damage.",
    headline: "Stucco & EIFS Cleaning",
    subheadline: "Soft-wash-only cleaning for traditional stucco and synthetic EIFS — pressure is never the answer here",
    intro:
      "Stucco is the single most pressure-sensitive siding in common use. High-pressure water gouges traditional stucco, punches holes in EIFS (synthetic stucco), and drives water into the wall assembly where it causes rot and mold you won't see for years. Yet stucco's textured, porous surface collects algae and grime faster than almost any other siding. The answer is soft washing — and on stucco, it's not a preference, it's the only correct method.",
    quickStats: { costRange: "$300–$650", duration: "3–5 hours", frequency: "Every 2–3 years" },
    sections: [
      {
        heading: "Stucco vs. EIFS: Know Which One You Have",
        content: [
          "Traditional (hardcoat) stucco is cement-based, applied in multiple coats over lath, and is hard to the touch — knock on it and it feels like concrete. It's durable but porous and brittle: pressure washing erodes the finish coat, opens hairline cracks, and forces water through them into the wall.",
          "EIFS (Exterior Insulation and Finish System, often called Dryvit) is a synthetic system: a thin acrylic finish over foam insulation board. Knock on it and it sounds hollow. EIFS is far more fragile — a pressure washer can physically puncture it, and any water that gets behind the finish is trapped against the sheathing. Many EIFS moisture-damage claims trace back to a pressure washing.",
          "The good news: both clean beautifully with soft washing. A diluted sodium hypochlorite solution with surfactant, applied at garden-hose pressure, kills the algae and mildew feeding on the textured surface, and a low-pressure rinse carries it away without stressing the finish.",
        ],
      },
      {
        heading: "Why Stucco Gets So Dirty, So Fast",
        content: [
          "Stucco's texture is the problem — all those peaks and valleys trap airborne dust, hold moisture after rain and dew, and give algae spores a perfect foothold. Common stucco staining patterns and what they mean:",
        ],
        bullets: [
          "Green or black blotching, worst on north and shaded walls: algae and mildew — the standard soft-wash job",
          "Dark vertical streaks under windows, sills, and light fixtures: dirt-laden runoff — cleans well, but recurring streaks suggest missing drip edges or failed sealant",
          "Orange or rust-colored tint in irrigation zones: iron staining from sprinkler water — needs targeted rust treatment, not bleach",
          "White chalky wash-down (heaviest under rough texture): natural weathering of the finish releasing lime — cleaning helps, but heavy chalking means the finish is aging and may need recoating",
          "Dark banding that maps to the stud or board pattern behind the wall: thermal tracking or, on EIFS, possible moisture in the assembly — have it inspected before cleaning",
        ],
      },
      {
        heading: "What a Professional Stucco Wash Involves",
        content: [
          "A proper stucco job starts with a walkaround to find cracks, failed sealant joints, and unsealed penetrations — anywhere solution or rinse water could enter the wall. Meaningful cracks get flagged (and ideally sealed) before washing, not discovered after.",
          "The wash itself is chemistry-forward: pre-wet landscaping, apply the soft-wash solution from the bottom up to prevent streaking, let it dwell 10–15 minutes without drying, then rinse top-down at low pressure. Heavily textured finishes may need a second application. The finish should never be scrubbed aggressively — stiff brushes and rotary tools burnish the texture and leave visible shiny patches.",
          "Expect stucco washing to price 20–40% above vinyl siding for the same house size: more chemical (the porous surface drinks solution), more dwell management, and more care around openings.",
        ],
      },
      {
        heading: "After the Wash: Keeping Stucco Clean Longer",
        content: [
          "Because stucco re-soils faster than smooth siding, a little prevention meaningfully stretches the interval between washes:",
        ],
        bullets: [
          "Trim vegetation back 2–3 feet from walls — shade and trapped humidity are what algae wants",
          "Adjust sprinklers so no head hits the stucco; irrigation water is the source of most rust tinting and localized algae blooms",
          "Fix gutter overflows promptly — a single overflowing corner will paint a permanent-looking streak down a stucco wall in one season",
          "Re-seal cracks and joints as they appear; sealed stucco sheds water instead of drinking it",
          "In humid climates, ask about a post-wash algaecide treatment — it can add a year or more before regrowth appears",
        ],
      },
    ],
    faqs: [
      {
        q: "Can stucco ever be pressure washed?",
        a: "No. Traditional stucco erodes and cracks under high pressure, and EIFS can be physically punctured by it. Both are cleaned exclusively by soft washing — low pressure with a cleaning solution. Any contractor proposing high pressure on stucco is telling you they don't know the material.",
      },
      {
        q: "How do I know if I have real stucco or EIFS?",
        a: "Knock on it. Traditional hardcoat stucco feels and sounds like concrete — solid and cold. EIFS sounds hollow and may flex slightly, because there's foam board underneath. Press gently on an inconspicuous spot: EIFS gives a little. The distinction matters because EIFS requires even gentler handling.",
      },
      {
        q: "Will the bleach solution discolor my stucco?",
        a: "Properly diluted sodium hypochlorite doesn't harm cured, integrally-colored, or painted stucco — it's the industry-standard cleaner. Freshly painted or recently recoated stucco should wait 30 days before washing. A reputable company tests an inconspicuous area first on strongly colored finishes.",
      },
      {
        q: "The dark streaks came back a few months after cleaning. Why?",
        a: "Fast-returning streaks in the same spots are a drainage signature, not a cleaning failure — usually an overflowing gutter, a missing kick-out flashing, or a window without a drip edge concentrating runoff on that spot. Fix the water path and the next wash will last years instead of months.",
      },
    ],
    relatedGuides: ["pressure-vs-soft-washing", "mold-mildew-siding", "how-often-pressure-wash"],
    relatedServices: ["house-soft-washing", "brick-cleaning", "gutter-cleaning"],
  },

  {
    id: "graffiti-removal",
    slug: "graffiti-removal",
    name: "Graffiti Removal",
    title: "Graffiti Removal Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find local graffiti removal pros. Why speed matters, what removal costs on brick, concrete, and metal, and when anti-graffiti coatings pay for themselves.",
    headline: "Graffiti Removal",
    subheadline: "Fast, surface-safe paint removal for storefronts, walls, fences, and signage",
    intro:
      "Graffiti removal is a race against absorption. Spray paint on a porous surface like brick or concrete penetrates deeper every day it sits — what wipes off with solvent in the first 48 hours can require hot-water chemical extraction after a month. Professional graffiti removal matches the removal method to both the paint and the surface underneath, because the goal isn't just removing the tag — it's removing it without leaving a ghost, an etched patch, or a clean square that advertises where it was.",
    quickStats: { costRange: "$150–$700", duration: "1–4 hours", frequency: "As needed" },
    sections: [
      {
        heading: "Why the First 48 Hours Matter",
        content: [
          "On sealed or non-porous surfaces (metal doors, glass, signage, painted flat walls), fresh spray paint sits on top and comes off nearly completely with the right solvent. On porous masonry, paint begins wicking into the pore structure immediately — after weeks of sun and rain, it's not on the wall, it's in it.",
          "Speed matters for a second reason: rapid removal is the most proven graffiti deterrent. Taggers want visibility time. Properties that consistently remove graffiti within a day or two get hit dramatically less often than walls where tags stay up for weeks. Many commercial property managers keep a removal company on call for exactly this reason.",
        ],
      },
      {
        heading: "Removal Methods by Surface",
        content: [
          "There is no universal graffiti remover — the method that saves one surface destroys another:",
        ],
        bullets: [
          "Brick and block: alkaline or solvent-gel graffiti remover with dwell time, then hot-water pressure rinse; multiple applications for older tags — never aggressive pressure alone, which drives pigment deeper and etches mortar",
          "Smooth concrete: chemical stripper plus hot-water washing; stubborn shadows may need a light soda blast",
          "Painted surfaces (walls, doors, dumpsters): solvent testing first — if the tag comes off without lifting the underlying paint, chemical removal; otherwise repainting is faster and cleaner",
          "Metal (roll-up doors, poles, utility boxes): solvent wipe-down — usually the easiest full removal",
          "Glass and windows: razor and solvent for paint; note that scratched-in tags (etch graffiti) are permanent and need glass replacement or polishing",
          "Murals and decorative finishes: specialist work only — standard strippers take the artwork off with the tag",
        ],
      },
      {
        heading: "The Ghost Problem (and the Clean-Spot Problem)",
        content: [
          "Two outcomes separate professional graffiti removal from a rental-pressure-washer attempt. The first is ghosting: a faint shadow of the tag left in porous masonry after the surface paint is gone. Pros minimize it with proper chemistry and dwell, but on old, unsealed brick a faint ghost sometimes remains — honest companies tell you this upfront rather than blasting the wall until the brick itself is damaged.",
          "The second is the clean-spot problem: removing a tag from one patch of a grimy wall leaves a bright clean rectangle that's nearly as visible as the graffiti was. On weathered walls, the professional fix is either cleaning the entire wall face (often worth it) or feathering the cleaned area so it blends. Get this addressed in the quote — a per-tag price on a dirty wall usually means a checkerboard result.",
        ],
      },
      {
        heading: "Anti-Graffiti Coatings: When Prevention Pays",
        content: [
          "For walls that get hit repeatedly, an anti-graffiti coating changes the economics. Sacrificial coatings (wax-based) sit on the surface; when tagged, hot water removes the coating and the paint together, and the wall is re-coated — removal drops to a fast, chemical-free rinse. Permanent (polyurethane or siloxane) coatings resist paint penetration for many removal cycles.",
        ],
        bullets: [
          "Coatings make sense after the second hit on the same wall — most commercial repeat-target walls pay back the coating in 1–2 avoided removals",
          "Sacrificial coatings cost roughly $1–$2 per sq ft applied; permanent coatings $2–$4 per sq ft but survive multiple removals",
          "On historic or unsealed masonry, breathable coatings only — trapping moisture in old brick causes spalling",
          "Many cities offer free or subsidized graffiti abatement for street-facing walls — check your city's program before paying retail; response time is the tradeoff",
        ],
      },
    ],
    faqs: [
      {
        q: "Can graffiti be completely removed from brick?",
        a: "Fresh tags on sealed or dense brick: usually yes, completely. Older tags on porous, unsealed brick: expect 90–95% removal with a faint ghost possible in strong light. A reputable company assesses the brick and tells you the realistic outcome before starting rather than over-promising.",
      },
      {
        q: "Why not just paint over it?",
        a: "Paint-over is legitimate on already-painted walls when the color can be matched — it's often the cheapest fix. On bare brick, block, or concrete, paint-over creates a permanent maintenance obligation (that patch must be repainted forever) and usually looks worse than proper removal. Mismatched touch-up rectangles also signal an easy target.",
      },
      {
        q: "How fast should graffiti be removed?",
        a: "Within 24–48 hours if possible. Fresh paint comes off easier and cheaper, and quick removal is the strongest deterrent against repeat tagging. Many removal companies offer priority response for commercial clients precisely because speed changes both the cost and the recurrence rate.",
      },
      {
        q: "Does insurance or the city cover graffiti removal?",
        a: "Commercial property policies often cover vandalism including graffiti, subject to your deductible — document with photos and a police report number. Separately, many municipalities run free abatement programs for visible-from-street graffiti. For small tags, a local pro is often faster than either process.",
      },
    ],
    relatedGuides: ["vet-power-washing-contractor", "power-washing-cost", "pressure-washing-concrete"],
    relatedServices: ["commercial", "brick-cleaning", "driveway"],
  },

  {
    id: "pool-deck-cleaning",
    slug: "pool-deck-cleaning",
    name: "Pool Deck Cleaning",
    title: "Pool Deck Cleaning Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find pool deck cleaning pros near you. Slippery algae, black mold spots, and calcium buildup on concrete, pavers, and travertine — what it costs and how pros do it safely.",
    headline: "Pool Deck Cleaning",
    subheadline: "Remove the algae and grime that make pool surrounds slippery — without harsh runoff into the water",
    intro:
      "A pool deck lives in the wettest, most chemically complex environment on your property: constant splash-out, sunscreen and body oils, mineral-heavy water, and shade lines that grow algae fast. That combination makes decks slippery and dingy well before the rest of the hardscape. Professional pool deck cleaning removes organic growth and buildup with methods matched to the deck material — and keeps cleaning chemicals out of your pool water.",
    quickStats: { costRange: "$150–$450", duration: "2–4 hours", frequency: "1–2x per year" },
    sections: [
      {
        heading: "Why Pool Decks Get Slippery",
        content: [
          "The dark film that forms around pools is mostly algae and mildew feeding on a steady supply of moisture and organic material — sunscreen, body oils, leaf debris. It thrives in splash zones and shaded strips along walls and furniture, and it's genuinely dangerous: wet algae on smooth concrete is as slick as ice.",
          "Pressure washing alone knocks the visible film off but leaves spores in the surface pores, which is why blasted decks turn green again in a matter of weeks. Professional cleaning pairs low-to-moderate pressure with an algaecidal wash that kills growth at the root, so the deck stays clean and grippy for a full season or more.",
        ],
      },
      {
        heading: "Different Deck Materials, Different Methods",
        content: ["The right approach depends on what your deck is made of — this is where experience matters most:"],
        bullets: [
          "Broom-finished or stamped concrete: the most forgiving — moderate pressure with a surface cleaner plus a soft-wash pre-treatment",
          "Kool deck / textured acrylic coatings: low pressure only — high PSI strips the coating and leaves bald patches that must be resurfaced",
          "Pavers: gentle pressure to preserve joint sand, with re-sanding afterward if joints wash out",
          "Travertine and natural stone: soft wash with stone-safe cleaners — acidic products and high pressure both etch and pit the surface",
          "Wood pool decks: low pressure with the grain, same as any deck, plus faster re-sealing cycles due to constant moisture",
        ],
      },
      {
        heading: "Protecting the Pool During Cleaning",
        content: [
          "The main thing separating a pool-experienced company from a general pressure washer is runoff management. Cleaning solutions — even standard sodium hypochlorite mixes — change pool chemistry if significant amounts wash in, and degreasers or rust removers are worse.",
          "A good crew works away from the pool edge, controls rinse direction, and keeps solution application light near coping. Expect them to ask about your pool's edge type and to plan the rinse path before starting. After the job, test and rebalance your water; minor adjustment is normal, a green or cloudy pool the next day is not.",
        ],
      },
      {
        heading: "Timing and Maintenance",
        content: [
          "The natural windows are pool opening (clean off the winter's accumulation before the season starts) and closing (remove the summer's oils and algae so they don't cure in place all winter). In year-round swim climates, an annual or twice-annual wash keeps the deck safe.",
          "Between professional cleanings, rinsing the splash zone weekly and keeping deck furniture shifted occasionally (so shade lines move) meaningfully slows regrowth.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will deck cleaning chemicals hurt my pool water?",
        a: "Handled properly, no. Experienced companies control application and rinse direction so cleaning solution doesn't reach the water in meaningful amounts. Expect to test and slightly rebalance chemistry afterward — that's routine. If a company plans to spray degreaser right up to the waterline, keep looking.",
      },
      {
        q: "Can you pressure wash a Kool deck?",
        a: "Only at low pressure. Kool deck and similar acrylic textured coatings are thin — high PSI strips them to the concrete underneath, and patch repairs rarely match. This surface is the most common pool-deck damage claim, so confirm the company has cleaned coated decks before.",
      },
      {
        q: "How much does pool deck cleaning cost?",
        a: "Typically $150–$450 depending on square footage and material. Simple concrete surrounds land at the low end; large travertine or paver decks needing stone-safe soft washing and re-sanding run higher. Bundling with a driveway or patio cleaning usually earns a 10–20% discount since the crew is already on site.",
      },
      {
        q: "How do I keep the deck from getting slippery again?",
        a: "Ask about a penetrating sealer with a grip additive after cleaning. Sealed decks shed water and oils instead of absorbing them, which slows algae regrowth substantially. Beyond that, a weekly rinse of the splash zone during swim season goes a long way.",
      },
    ],
    relatedGuides: ["pressure-washing-concrete", "pressure-washer-psi-guide", "power-washing-cost"],
    relatedServices: ["patio-paver-cleaning", "driveway", "house-soft-washing"],
  },

  {
    id: "sidewalk-walkway-cleaning",
    slug: "sidewalk-walkway-cleaning",
    name: "Sidewalk & Walkway Cleaning",
    title: "Sidewalk & Walkway Cleaning Near Me | Free Quotes | WashPro Directory",
    metaDescription:
      "Find sidewalk and walkway pressure washing pros near you. Remove algae, gum, and years of gray buildup from concrete walks — costs, methods, and liability reasons to keep walks clean.",
    headline: "Sidewalk & Walkway Cleaning",
    subheadline: "Bright, even, slip-free walks — the fastest curb appeal win on the property",
    intro:
      "Walkways gray out so gradually that most owners don't notice until one section gets cleaned and the contrast is startling. Beyond looks, dirty walks are a genuine liability: algae film on shaded concrete causes slip-and-falls, and for businesses and rental properties that's an insurance exposure with your name on it. Sidewalk cleaning is quick, inexpensive, and delivers the most visible before-and-after of any pressure washing service.",
    quickStats: { costRange: "$75–$250", duration: "1–2 hours", frequency: "1x per year" },
    sections: [
      {
        heading: "What Professional Walkway Cleaning Includes",
        content: [
          "Pros clean walks with a surface cleaner — a spinning-bar attachment that looks like a floor buffer — rather than a bare wand. It cleans a wide path at consistent height and pressure, which is why professional results have no zebra striping or etched wand marks. A degreaser or house-wash mix pre-treatment breaks down algae and organic film before the surface cleaner passes, and edges and corners get detailed with a wand afterward.",
          "For gum, rust streaks, fertilizer stains, or leaf tannin marks, spot treatments come first: hot water or steam for gum, oxalic acid for rust, and targeted cleaners for organic staining. Mention specific stains when getting quotes so they're included in the price.",
        ],
      },
      {
        heading: "The Liability Angle",
        content: [
          "For commercial storefronts, HOAs, and rental properties, walkway cleaning is less about appearance than risk management. Algae on shaded concrete is a documented slip hazard, and 'failure to maintain' appears in premises liability claims constantly. An annual cleaning with a dated invoice is cheap evidence of reasonable maintenance.",
        ],
        bullets: [
          "Many municipalities make adjacent property owners responsible for sidewalk condition — including slip hazards, not just snow",
          "HOAs commonly cite dirty or algae-streaked walks in violation letters; a yearly wash keeps you off that list",
          "For storefronts, gum removal and entrance-area cleaning is often available as a monthly or quarterly service at a lower recurring rate",
        ],
      },
      {
        heading: "Concrete, Pavers, Flagstone: What Changes",
        content: ["Most walks are broom-finished concrete, which takes standard surface cleaning well. Other materials need adjustments:"],
        bullets: [
          "Concrete: 2,500–3,500 PSI with a surface cleaner — the standard, durable case",
          "Pavers: moderate pressure to preserve joint sand; expect re-sanding of any joints that wash out",
          "Flagstone and natural stone: lower pressure and stone-safe cleaners — soft or layered stone can flake under high PSI",
          "Exposed aggregate: moderate pressure — aggressive cleaning pops stones loose from the matrix",
          "Painted or coated walks: low pressure only, and expect the cleaning to reveal any coating that was already failing",
        ],
      },
      {
        heading: "Bundling: The Economics of Walk Cleaning",
        content: [
          "As a standalone job, walkway cleaning carries a trip-fee premium — the crew's mobilization costs the same whether they clean 200 or 2,000 square feet. Most homeowners get walks cleaned as an add-on to a driveway or house wash, where the incremental cost is often $50–$100 instead of a standalone $75–$250.",
          "If your walks need it, your driveway almost certainly does too — they age at the same rate. Asking any driveway quote to include walks, steps, and the porch pad is the standard move.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does sidewalk cleaning cost?",
        a: "Standalone, most residential walkway jobs run $75–$250 depending on length and condition. As an add-on to a driveway or house wash, walks typically add $50–$100. Commercial storefront cleaning with gum removal is usually priced per square foot or as a recurring monthly rate.",
      },
      {
        q: "Can pressure washing damage my sidewalk?",
        a: "Sound concrete handles professional cleaning easily. Damage risk comes from bare-wand work at close range on already-spalling or freeze-damaged concrete, which can flake the surface further. A pro will flag weak spots before cleaning; surface cleaners distribute pressure and are much gentler than a wand held too close.",
      },
      {
        q: "Will cleaning remove the gray color entirely?",
        a: "Cleaning removes the biological film and dirt, which restores most of the original lightness — the before-and-after is usually dramatic. What it can't undo is decades of surface wear or embedded mineral staining. A pro can tell you which is which during the quote: if a test patch brightens, the rest will too.",
      },
      {
        q: "How long does it stay clean?",
        a: "A year or more in most climates. Shaded, tree-covered, or north-facing sections regrow algae fastest — often in 6–12 months — while sunny stretches can stay bright for several years. A post-cleaning sealer slows regrowth and makes future cleanings easier.",
      },
    ],
    relatedGuides: ["pressure-washing-concrete", "remove-oil-stains-driveway", "power-washing-cost"],
    relatedServices: ["driveway", "patio-paver-cleaning", "commercial"],
  },
];

export function getServiceContent(slug: string): ServiceContent | undefined {
  return servicesContent.find((s) => s.slug === slug);
}
