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
    relatedGuides: ["pressure-vs-soft-washing", "best-time-to-power-wash", "power-washing-home-value"],
    relatedServices: ["driveway", "deck-restoration", "roof-cleaning"],
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
    relatedGuides: ["power-washing-cost", "best-time-to-power-wash"],
    relatedServices: ["house-soft-washing", "deck-restoration", "commercial"],
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
    relatedGuides: ["best-time-to-power-wash", "power-washing-cost", "power-washing-home-value"],
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
    relatedGuides: ["power-washing-cost", "best-time-to-power-wash"],
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
    relatedServices: ["driveway", "house-soft-washing"],
  },
];

export function getServiceContent(slug: string): ServiceContent | undefined {
  return servicesContent.find((s) => s.slug === slug);
}
