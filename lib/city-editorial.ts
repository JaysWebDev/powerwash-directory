// City-specific editorial content.
//
// Purpose: give high-value metro pages genuinely unique, locally-grounded prose
// so they are differentiated from the shared state-level boilerplate in
// city-content.ts. This is the "original editorial layer" that lifts city pages
// above aggregated-listing / doorway-page territory.
//
// Keyed by "<city-slug>|<stateAbbr>". Only cities present here render the
// editorial section AND stay indexable; city pages without editorial fall back to
// the state profile and are set to noindex (see app/[location]/page.tsx) so Google
// judges the site on its strongest, differentiated pages. Content is grounded in
// well-established local facts (climate, recognized districts, common
// architecture/surfaces) — no invented statistics or regulations.
//
// Each entry carries four unique authored sections plus a set of contextually
// chosen guide links, so indexable city pages read as substantial local editorial
// rather than a thin caption over a listing grid.

export type CityEditorial = {
  /** 2–4 sentence lede shown at the top of the local guide. */
  intro: string;
  /** Named subsections, each a short original paragraph. */
  sections: { heading: string; body: string }[];
  /** Contextually relevant in-depth guides surfaced on the city page. */
  guides: { slug: string; label: string }[];
};

// Human-readable labels for the guide slugs referenced below. Keeps the per-city
// entries to slug lists while rendering friendly link text.
const GUIDE_LABELS: Record<string, string> = {
  "power-washing-cost": "What power washing costs in 2026",
  "pressure-vs-soft-washing": "Pressure washing vs. soft washing",
  "remove-roof-algae": "Removing roof algae & black streaks",
  "mold-mildew-siding": "Removing mold & mildew from siding",
  "best-time-power-wash": "Best time of year to power wash",
  "how-often-pressure-wash": "How often should you pressure wash?",
  "pressure-washing-concrete": "Cleaning concrete, driveways & patios",
  "remove-oil-stains-driveway": "Removing oil stains from a driveway",
  "remove-rust-stains": "Removing rust & mineral stains",
  "vet-power-washing-contractor": "How to vet a power washing contractor",
  "power-washing-before-painting": "Power washing before you paint",
  "clean-vinyl-siding": "Cleaning vinyl siding without damage",
};

const E = (
  intro: string,
  sections: { heading: string; body: string }[],
  guideSlugs: string[]
): CityEditorial => ({
  intro,
  sections,
  guides: guideSlugs.map((slug) => ({ slug, label: GUIDE_LABELS[slug] ?? slug })),
});

export const CITY_EDITORIAL: Record<string, CityEditorial> = {
  "charlotte|NC": E(
    "Charlotte's humid subtropical climate and dense tree canopy make exterior washing a routine part of home maintenance across the metro. From the older brick homes of Dilworth and Myers Park to the newer vinyl-sided subdivisions in Ballantyne and University City, the buildup patterns differ enough that most local pros tailor their approach by neighborhood and siding type.",
    [
      { heading: "What Charlotte homes deal with", body: "The Piedmont's long, humid summers drive persistent green algae and mildew on north-facing siding, shaded driveways, and concrete. Heavy oak and pine cover across neighborhoods like Plaza Midwood and Cotswold means more organic staining and pollen film than you'd see in a more open metro. Red-clay soil common to the region also tracks onto walkways and settles into concrete pores." },
      { heading: "Timing and pricing in Charlotte", body: "Late spring — after the heavy February-to-April pollen has finished — is the busiest window, and contractors serving South Charlotte and the Lake Norman suburbs often book two to three weeks out. Soft-washing is the norm for the region's brick and painted-wood homes, where high pressure risks mortar and paint damage. Standard house washes in the Charlotte market typically fall in the $150–$275 range depending on home size and roof involvement." },
      { heading: "Surfaces and methods across the metro", body: "The brick-and-mortar homes of Dilworth and Myers Park are washed at low pressure to protect aging joints, while the vinyl and fiber-cement siding common in Ballantyne and Waverly responds to soft-wash detergents rather than mechanical force. Clay-stained concrete driveways usually need a surface-cleaner pass with a degreaser pre-treatment, and painted wood trim throughout the metro should never meet a high-pressure tip." },
      { heading: "Hiring a pro in Charlotte", body: "Because so much local housing is brick or painted wood, confirm a contractor leads with soft-washing and carries current liability insurance before booking. Ask whether roof algae treatment is bundled with a house wash or priced separately, and schedule a couple of weeks ahead in spring when South Charlotte and Lake Norman crews fill fastest. Two or three written quotes is standard for larger homes." },
    ],
    ["remove-roof-algae", "mold-mildew-siding", "power-washing-cost"]
  ),
  "raleigh|NC": E(
    "Raleigh and the wider Triangle sit under heavy hardwood canopy, and the combination of humidity, pine pollen, and shade keeps exterior algae growth steady through much of the year. Homes range from established brick ranches inside the Beltline to the sprawling vinyl-and-fiber-cement subdivisions of Cary, Apex, and North Raleigh.",
    [
      { heading: "What Triangle homes deal with", body: "The region's famous spring pollen — a thick yellow layer from late March into May — coats siding, decks, and driveways and is the single biggest driver of wash requests. Persistent summer humidity then feeds black algae streaking on roofs, especially on the shaded lots common throughout Cary and Chapel Hill." },
      { heading: "Timing and pricing in Raleigh", body: "Most Triangle homeowners schedule a wash in late May once pollen season ends, which makes that period the tightest for booking. Roof soft-washing is a common add-on given how universal shingle algae is here. Expect standard house washing to run roughly $140–$250 across the Raleigh–Durham–Cary market." },
      { heading: "Surfaces across the Triangle", body: "Inside-the-Beltline brick ranches take low-pressure washing, while the vinyl and fiber-cement siding of Cary, Apex, and North Raleigh subdivisions cleans up best with soft-wash detergents. Wood decks — abundant on the region's wooded lots — need gentle cleaning and periodic resealing rather than aggressive pressure, which raises the grain and shortens a finish's life." },
      { heading: "Hiring a Triangle pro", body: "Late-May demand is intense once pollen finishes, so line up quotes in March or April to secure a slot. Ask whether shingle algae treatment is bundled with a house wash, since black roof streaking is nearly universal here. Confirm insurance and, for the heavily wooded lots common across the Triangle, that the crew protects plantings from detergent runoff." },
    ],
    ["remove-roof-algae", "best-time-power-wash", "power-washing-cost"]
  ),
  "nashville|TN": E(
    "Nashville's humid climate and rapid growth have made exterior washing a standard service across the metro, from the historic brick and painted-wood homes of East Nashville and Germantown to the newer builds spreading through Franklin, Brentwood, and Murfreesboro.",
    [
      { heading: "What Nashville homes deal with", body: "Humid Middle Tennessee summers and rainy springs feed mildew on siding and green algae on shaded concrete. The area's mature tree cover adds organic staining and leaf tannin marks to driveways and walkways, and older homes near downtown often carry decades of grime on brick and trim." },
      { heading: "Timing and pricing in Nashville", body: "Spring is peak season and contractors serving Williamson County suburbs book out quickly from March through May. Deck cleaning and resealing is a popular pre-summer add-on given how hard humid winters are on wood. Standard house washes in the Nashville market generally land around $130–$240." },
      { heading: "Surfaces and methods in Nashville", body: "The painted-wood and brick homes of East Nashville and Germantown call for low-pressure soft-washing to spare mortar and paint, while the vinyl and Hardie-board siding across Franklin and Brentwood cleans well with detergent-led methods. Wood decks and fences, softened by humid winters, are cleaned gently and resealed rather than blasted, and tannin-stained walkways under tree cover respond to targeted treatment." },
      { heading: "Hiring a Nashville pro", body: "With crews booked heavily March through May, secure quotes early if you want a pre-summer slot. Ask whether a deck clean-and-seal can be scheduled alongside a house wash, since the two are commonly paired here. Confirm liability insurance and, for older downtown homes, that the contractor has experience washing aged brick and painted trim at safe pressure." },
    ],
    ["mold-mildew-siding", "best-time-power-wash", "power-washing-cost"]
  ),
  "memphis|TN": E(
    "Memphis sits in a hot, humid corner of the Mid-South where mold and mildew build quickly on almost any exterior surface. The housing stock — from the historic homes of Central Gardens and Midtown to the suburban subdivisions of Cordova and Germantown — spans a wide range of siding and masonry types.",
    [
      { heading: "What Memphis homes deal with", body: "Long, sticky summers and heavy Mississippi River-valley humidity make green and black algae a near-constant on north-facing walls, shaded driveways, and roofs. Spring storms leave mud and debris, and the region's clay-heavy soil stains concrete readily." },
      { heading: "Timing and pricing in Memphis", body: "Spring and fall are the most comfortable scheduling windows; peak summer heat pushes some outdoor work into the shoulder seasons. Roof soft-washing is widely requested here. House washing in the Memphis market typically runs about $105–$220." },
      { heading: "Surfaces and methods in Memphis", body: "The older brick and painted-wood homes of Central Gardens and Midtown need low-pressure washing to protect mortar and finish, while the vinyl and brick-veneer siding of Cordova and Germantown cleans up with soft-wash detergents. Clay-stained concrete driveways and walkways benefit from surface-cleaner passes, and shaded, north-facing walls usually need an algaecide treatment rather than pressure alone." },
      { heading: "Hiring a Memphis pro", body: "Because algae returns fast in this climate, ask how long a contractor's soft-wash treatment is expected to keep surfaces clear, and whether roof treatment is included. Spring and fall book up quickly, so plan a couple of weeks ahead. Confirm insurance and get written quotes; on larger or two-story homes, comparing two or three keeps pricing honest." },
    ],
    ["remove-roof-algae", "mold-mildew-siding", "power-washing-cost"]
  ),
  "austin|TX": E(
    "Austin's mix of Hill Country dust, humid Gulf influence, and intense sun creates a distinct set of exterior-cleaning needs. Limestone and stucco are everywhere here — from the older bungalows of Hyde Park and Travis Heights to the newer hillside builds in Westlake and the master-planned communities out toward Cedar Park and Round Rock.",
    [
      { heading: "What Austin homes deal with", body: "The region's abundant limestone and stucco call for careful low-pressure soft-washing; high pressure etches these soft surfaces. Cedar and oak pollen, Hill Country dust, and hard-water mineral spotting from irrigation are common, and shaded lots still pick up mildew despite the generally drier climate." },
      { heading: "Timing and pricing in Austin", body: "Spring and fall are the practical windows; the brutal July–August heat slows outdoor work and eases pricing. Because so many homes are limestone, stucco, or stone, most reputable Austin pros lead with soft-wash methods. Standard house washing across the Austin metro generally falls in the $120–$250 range." },
      { heading: "Surfaces and methods in Austin", body: "Limestone, stucco, and stone dominate from Hyde Park to Westlake, and all three are soft, porous, and easily etched — so low-pressure detergent washing is the rule, not the exception. Hard-water spotting from irrigation on masonry and windows often needs a mineral-specific treatment rather than more pressure, and Hill Country dust rinses away with a gentle wash long before any aggressive method is warranted." },
      { heading: "Hiring an Austin pro", body: "Given how much local construction is soft masonry, the single most important question is whether a contractor soft-washes limestone and stucco — anyone reaching for a high-pressure tip on those surfaces should be passed over. Book in spring or fall to avoid peak-heat delays, confirm insurance, and ask how they handle the hard-water mineral spotting that's so common on irrigated Austin lots." },
    ],
    ["pressure-vs-soft-washing", "how-often-pressure-wash", "power-washing-cost"]
  ),
  "san-antonio|TX": E(
    "San Antonio's warm, semi-humid climate and widespread stucco-and-stone construction shape how homes are washed across the metro — from the historic districts near downtown and King William to the sprawling subdivisions of Stone Oak and the far North Side.",
    [
      { heading: "What San Antonio homes deal with", body: "Stucco, limestone, and painted masonry dominate here and require gentle soft-washing to avoid surface damage. Hard water from irrigation leaves mineral spotting, Hill Country dust settles on everything, and shaded, humid pockets still grow mildew on north-facing walls and concrete." },
      { heading: "Timing and pricing in San Antonio", body: "Spring and fall are the comfortable windows, with summer heat pushing demand into the shoulder seasons. Given the prevalence of soft masonry, low-pressure techniques are standard. House washing in the San Antonio market typically runs around $110–$235." },
      { heading: "Surfaces and methods in San Antonio", body: "The stucco, limestone, and painted-masonry homes that run from King William to Stone Oak are all soft enough that high pressure risks pitting and streaking, so soft-washing with detergents is the norm. Irrigation hard water leaves calcium spotting on walls and walkways that needs a mineral treatment, and clay-and-dust film on concrete responds to a surface-cleaner pass rather than a wand alone." },
      { heading: "Hiring a San Antonio pro", body: "Confirm any contractor works stucco and limestone at low pressure — these surfaces don't forgive a heavy hand. Ask how they tackle hard-water mineral deposits, which a garden hose won't touch, and whether roof or concrete work can be bundled. Spring and fall fill up first, so book ahead, and get written quotes on larger North Side homes." },
    ],
    ["pressure-vs-soft-washing", "pressure-washing-concrete", "power-washing-cost"]
  ),
  "dallas|TX": E(
    "Dallas homes contend with a mix of heat, wind-blown dust, and periodic humidity, and the metro's enormous range of housing — from the historic homes of Highland Park and the M Streets to the newer builds across Frisco, Plano, and McKinney — means washing needs vary widely by area and material.",
    [
      { heading: "What Dallas homes deal with", body: "North Texas clay soil tracks onto driveways and stains concrete, while spring storms leave mud and debris. Brick is common across the metro, but painted trim, stucco accents, and stone require lower-pressure methods. Hard-water spotting from irrigation is a frequent complaint in the newer suburbs." },
      { heading: "Timing and pricing in Dallas", body: "Spring and fall are the most practical windows; the intense summer heat slows outdoor work. Contractors across the northern suburbs stay busy in spring, so early booking helps. Standard house washing in the Dallas–Fort Worth market generally lands around $110–$240." },
      { heading: "Surfaces and methods in Dallas", body: "Brick is the metro's workhorse material and handles washing well, but the painted trim, stucco accents, and cast-stone details common from Highland Park to Frisco all need lower pressure. The signature local job is concrete: red-clay film and spring-storm mud settle into driveways and walkways, and a surface cleaner with a degreaser pre-treatment lifts far more than a spray wand can." },
      { heading: "Hiring a Dallas pro", body: "Ask specifically about concrete and driveway cleaning — it's the service most Dallas homeowners actually need, and clay staining separates a thorough contractor from a quick rinse. Confirm they drop to low pressure for painted and stone accents, verify insurance, and book in spring before the northern suburbs' crews fill up. Compare quotes on multi-surface jobs." },
    ],
    ["pressure-washing-concrete", "remove-oil-stains-driveway", "power-washing-cost"]
  ),
  "fort-worth|TX": E(
    "Fort Worth blends North Texas heat and dust with a housing mix that runs from historic brick homes near downtown and the Fairmount district to fast-growing subdivisions on the west and north sides. Exterior washing here is driven as much by clay-soil dust as by humidity.",
    [
      { heading: "What Fort Worth homes deal with", body: "Red-clay dust and spring storm mud settle onto driveways and concrete, and hard water from irrigation leaves mineral spotting on hardscape. Brick dominates, but stone accents and painted trim need gentler treatment, and shaded north walls still pick up mildew in humid stretches." },
      { heading: "Timing and pricing in Fort Worth", body: "Spring and fall are the workable windows before summer heat sets in. Driveway and concrete cleaning are especially in demand given the clay-soil staining. Expect house washing in the Fort Worth market to run roughly $110–$235." },
      { heading: "Surfaces and methods in Fort Worth", body: "The brick homes of Fairmount and the west-side subdivisions take washing well, but their stone accents and painted trim call for lower pressure. Concrete is the real problem surface here: red-clay dust and storm mud grind into driveway pores, so surface-cleaner passes with a degreaser pre-treatment do the heavy lifting, and irrigation hard-water spotting on walls needs a mineral treatment rather than more force." },
      { heading: "Hiring a Fort Worth pro", body: "Prioritize a contractor who does thorough concrete and driveway work, since clay staining is the local constant. Ask how they handle hard-water deposits, confirm they soften pressure for stone and painted surfaces, and check insurance. Spring and fall book quickly, so plan ahead, and get written quotes on larger or multi-surface jobs." },
    ],
    ["pressure-washing-concrete", "remove-oil-stains-driveway", "power-washing-cost"]
  ),
  "houston|TX": E(
    "Houston has some of the most aggressive mold and algae conditions in the country. The Gulf Coast's heat and near-constant humidity mean exteriors here need washing more often than almost anywhere else — an issue that spans the historic homes of the Heights, the brick-and-stucco builds of Katy and Sugar Land, and everything in between.",
    [
      { heading: "What Houston homes deal with", body: "Year-round humidity feeds relentless green and black algae on siding, fences, driveways, and roofs. Frequent heavy rain and periodic flooding leave mud and waterline staining, and the region's shaded, tree-heavy neighborhoods accelerate organic growth on north-facing surfaces." },
      { heading: "Timing and pricing in Houston", body: "Washing is effective in any season here, though fall scheduling avoids peak summer humidity and books more easily. Many Houston homeowners wash two to three times a year given how fast algae returns. Roof soft-washing is common. Standard house washing generally runs about $120–$250." },
      { heading: "Surfaces and methods in Houston", body: "Because algae is the enemy on every surface, soft-washing with an algaecide-detergent mix — not raw pressure — is what actually clears siding, fences, and roofs and slows regrowth. The brick and stucco of Katy and Sugar Land clean well this way, while the painted-wood homes of the Heights need gentle handling. Shaded north walls and wood fences are the fastest to regrow and often drive a second wash each year." },
      { heading: "Hiring a Houston pro", body: "Since you'll likely wash more than once a year, ask about the longevity of a contractor's soft-wash treatment and whether they offer a maintenance schedule. Confirm roof algae work is included or clearly priced, verify insurance, and — given how many homes need frequent service — weigh a pro who prices repeat visits fairly over the cheapest one-off quote." },
    ],
    ["remove-roof-algae", "mold-mildew-siding", "how-often-pressure-wash"]
  ),
  "atlanta|GA": E(
    "Atlanta's hot summers, heavy tree canopy, and famous pollen seasons keep exterior washing in steady demand across the metro — from the brick homes of Buckhead and Virginia-Highland to the sprawling suburban communities in Alpharetta, Marietta, and Roswell.",
    [
      { heading: "What Atlanta homes deal with", body: "The metro's dense oak and pine cover drives heavy pollen film in spring and persistent green algae on shaded siding, driveways, and roofs. North-facing walls and concrete under tree cover are the usual problem areas, and Georgia's red-clay soil stains hardscape readily." },
      { heading: "Timing and pricing in Atlanta", body: "Spring is peak season — April and May bring the heaviest pollen, making late-spring washes the most requested service of the year. Contractors in the northern suburbs book out two to three weeks, so securing quotes in March helps. House washing across the Atlanta market typically runs $130–$250." },
      { heading: "Surfaces and methods in Atlanta", body: "The brick homes of Buckhead and Virginia-Highland wash at low pressure to protect mortar, while the vinyl and Hardie-board siding of Alpharetta and Roswell responds to soft-wash detergents. The combination of heavy pollen film and shaded-lot algae means most jobs pair a detergent house wash with a roof or concrete treatment, and red-clay staining on driveways calls for surface-cleaner passes." },
      { heading: "Hiring an Atlanta pro", body: "With the late-spring rush being the busiest stretch of the year, book quotes in March to lock a slot before pollen peaks. Ask whether roof algae treatment is bundled, confirm the crew soft-washes brick and painted surfaces, and check insurance. For the wooded northern suburbs, ask how they keep detergent runoff off landscaping." },
    ],
    ["remove-roof-algae", "best-time-power-wash", "power-washing-cost"]
  ),
  "jacksonville|FL": E(
    "Jacksonville combines Florida humidity with coastal salt air, a mix that pushes hard on home exteriors across the metro — from the historic homes of Riverside and Avondale to the beachside communities and the newer subdivisions spreading south and west.",
    [
      { heading: "What Jacksonville homes deal with", body: "Warm, humid conditions grow algae and mildew year-round, and homes near the St. Johns River and the beaches face added salt-air exposure that accelerates roof and siding staining. Black streaking on shingles is nearly universal, and shaded lots stay damp enough to feed constant organic growth." },
      { heading: "Timing and pricing in Jacksonville", body: "Washing works in any season, but fall scheduling sidesteps peak summer humidity. Roof soft-washing is especially valuable here given how quickly algae shortens shingle life in the Florida climate. House washing in the Jacksonville market generally runs $120–$250." },
      { heading: "Surfaces and methods in Jacksonville", body: "Stucco and vinyl dominate the suburbs and clean up with soft-wash detergents, while the older painted-wood homes of Riverside and Avondale need especially gentle handling. Near the beaches and the St. Johns, salt film compounds algae staining, so a thorough detergent rinse matters; shingle roofs, almost universally streaked here, are treated with a low-pressure algaecide wash rather than any mechanical pressure." },
      { heading: "Hiring a Jacksonville pro", body: "Roof treatment is the service that pays off most in this climate, so ask whether it's included and how long the result should hold. Confirm the contractor soft-washes rather than pressure-blasts shingles and stucco, verify insurance, and for waterfront or beachside homes, ask how they address the extra salt exposure. Fall booking is easiest." },
    ],
    ["remove-roof-algae", "pressure-vs-soft-washing", "power-washing-cost"]
  ),
  "orlando|FL": E(
    "Orlando's warm, wet climate makes algae and mildew a year-round reality for homeowners across Central Florida — from the established neighborhoods of College Park and Winter Park to the master-planned communities of Lake Nona and the suburbs stretching toward Kissimmee and Sanford.",
    [
      { heading: "What Orlando homes deal with", body: "High humidity and frequent afternoon storms keep surfaces damp, feeding green algae on stucco and driveways and black streaking on roofs. Stucco and tile are common here and call for low-pressure soft-washing, while shaded pavers and screen enclosures collect persistent organic buildup." },
      { heading: "Timing and pricing in Orlando", body: "Any season works, though fall is the easiest to book and avoids peak summer humidity. Roof and paver soft-washing are among the most requested services. Standard house washing across the Orlando market typically lands around $120–$250." },
      { heading: "Surfaces and methods in Orlando", body: "Stucco walls and barrel-tile or shingle roofs — the Central Florida standard — are all soft-washed with detergents, since pressure damages stucco and dislodges tile. Paver driveways and pool decks, ubiquitous across Lake Nona and the newer suburbs, trap algae in their joints and often need a dedicated treatment, and screen enclosures collect a green film that a gentle wash clears." },
      { heading: "Hiring an Orlando pro", body: "Ask whether paver and pool-deck cleaning are offered alongside a house wash, since those hardscape surfaces are where Orlando algae is most stubborn. Confirm the contractor soft-washes tile and stucco, check that roof treatment is priced clearly, and verify insurance. Fall is the least crowded booking window if timing is flexible." },
    ],
    ["remove-roof-algae", "pressure-vs-soft-washing", "pressure-washing-concrete"]
  ),
  "tampa|FL": E(
    "Tampa's Gulf Coast humidity and salt air combine to make exterior washing a frequent necessity — from the historic bungalows of Hyde Park and Seminole Heights to the waterfront homes of South Tampa and the newer builds in Wesley Chapel and Brandon.",
    [
      { heading: "What Tampa homes deal with", body: "Year-round humidity and coastal salt exposure drive aggressive algae and mildew on stucco, driveways, and roofs, and homes near the bay face accelerated staining. Paver driveways and pool decks — common across the metro — collect stubborn organic growth in shaded, damp areas." },
      { heading: "Timing and pricing in Tampa", body: "Washing is effective in any Florida season; fall scheduling avoids the most intense summer humidity. Soft-washing is standard for the region's stucco and tile. Expect house washing in the Tampa market to run about $120–$250." },
      { heading: "Surfaces and methods in Tampa", body: "The stucco walls and tile roofs typical from Hyde Park to Wesley Chapel are soft-washed, never pressure-blasted, to avoid etching and cracked tiles. Paver driveways and pool decks are the metro's signature challenge — algae settles deep into the joints, so a detergent treatment and careful rinse outperform raw pressure — and bay-front homes carry extra salt film that a thorough wash removes." },
      { heading: "Hiring a Tampa pro", body: "Because pavers and pool decks are where Tampa homeowners struggle most, ask whether the contractor treats hardscape joints and re-sands pavers afterward if needed. Confirm soft-wash methods for stucco and tile, verify insurance, and for waterfront South Tampa homes, ask how they handle salt exposure. Fall booking avoids the summer crush." },
    ],
    ["remove-roof-algae", "pressure-washing-concrete", "power-washing-cost"]
  ),
  "miami|FL": E(
    "Miami's tropical climate and coastal exposure create some of the most demanding exterior-cleaning conditions in the country. Across the metro — from the Art Deco stucco of Miami Beach to the tile-roofed homes of Coral Gables and the newer builds in Doral and Kendall — humidity and salt air keep surfaces under constant pressure.",
    [
      { heading: "What Miami homes deal with", body: "Year-round heat and humidity, frequent rain, and salt air drive relentless algae, mildew, and mineral staining on stucco, tile, and pavers. Homes near the water face the heaviest salt exposure, and shaded courtyards and pool decks stay damp enough for continuous organic growth." },
      { heading: "Timing and pricing in Miami", body: "Any season works for washing, though the drier winter months are the most comfortable to schedule. Stucco and barrel-tile roofs require careful soft-washing. Standard house washing across the Miami market generally runs $130–$275." },
      { heading: "Surfaces and methods in Miami", body: "Stucco and barrel-tile — the defining materials from Miami Beach to Coral Gables — demand low-pressure soft-washing; high pressure chips stucco and shifts tile. Salt film off the water compounds algae and mineral staining, so detergent washing followed by a thorough rinse is essential, and the shaded courtyards and pool decks common across the metro hold moisture that keeps organic growth returning." },
      { heading: "Hiring a Miami pro", body: "Confirm any contractor soft-washes stucco and barrel-tile — these are expensive surfaces to repair. Ask how they handle the salt and mineral staining that waterfront homes accumulate, whether courtyard and pool-deck cleaning are included, and check insurance. Winter's drier weather is the most comfortable time to schedule if you have flexibility." },
    ],
    ["pressure-vs-soft-washing", "remove-roof-algae", "power-washing-cost"]
  ),
  "phoenix|AZ": E(
    "Phoenix sits in a hot desert climate where dust, sun, and hard water — not humidity — are the main exterior-cleaning concerns. Stucco and painted masonry dominate the metro, from the historic districts near downtown to the vast master-planned communities of Scottsdale, Gilbert, Chandler, and Mesa.",
    [
      { heading: "What Phoenix homes deal with", body: "Wind-blown desert dust settles on stucco and hardscape, monsoon storms leave mud staining in mid-to-late summer, and hard water from irrigation deposits stubborn mineral spotting on driveways and walls. Humidity-driven algae is rare except in shaded, irrigated areas." },
      { heading: "Timing and pricing in Phoenix", body: "Fall through spring is the comfortable window; summer highs above 110°F make scheduling harder. Because nearly every home is stucco or painted masonry, low-pressure soft-washing is the standard method. House washing in the Phoenix market typically runs $110–$230." },
      { heading: "Surfaces and methods in Phoenix", body: "Stucco and painted masonry cover nearly every home from Scottsdale to Mesa, and both are soft-washed to avoid cracking the finish. The real desert-specific problem is mineral scale: hard irrigation water leaves white calcium spotting on walls, driveways, and around pools that pressure alone won't remove — it takes a mineral-dissolving treatment. Monsoon mud and wind-blown dust otherwise rinse away with a gentle detergent wash." },
      { heading: "Hiring a Phoenix pro", body: "Ask how a contractor removes hard-water and mineral deposits, since that's the stain most Phoenix homeowners actually fight — a crew that only pressure-washes will leave it behind. Confirm soft-wash methods for stucco, verify insurance, and schedule fall through spring to avoid summer-heat delays. Get written quotes on larger Scottsdale and Chandler homes." },
    ],
    ["pressure-vs-soft-washing", "remove-rust-stains", "power-washing-cost"]
  ),
  "las-vegas|NV": E(
    "Las Vegas homes sit in a hot, arid desert valley where dust and hard-water mineral staining drive most exterior-cleaning work. Stucco and tile are the norm across the metro — from the older neighborhoods near the center to the master-planned communities of Summerlin and Henderson.",
    [
      { heading: "What Las Vegas homes deal with", body: "Wind-driven desert dust coats stucco and hardscape, and hard water from irrigation leaves heavy calcium spotting on driveways, walls, and pool decks that a garden hose can't remove. Humidity-driven algae is uncommon outside shaded, irrigated pockets." },
      { heading: "Timing and pricing in Las Vegas", body: "Fall and spring are the most comfortable scheduling windows; summer heat above 110°F slows outdoor work. Hard-water and mineral-deposit removal is a signature local service. Standard house washing across the Las Vegas valley generally runs $120–$245." },
      { heading: "Surfaces and methods in Las Vegas", body: "Stucco and tile define the housing from Summerlin to Henderson, and both are soft-washed to protect the surface. The valley's defining problem is calcium: Colorado River hard water is among the most mineral-heavy in the country, so the white scale it leaves on walls, driveways, and pool decks needs a dedicated mineral treatment. Wind-blown dust, by contrast, lifts off easily with a light detergent wash." },
      { heading: "Hiring a Las Vegas pro", body: "The question that matters most here is how a contractor removes hard-water calcium — it's the local specialty, and pressure alone won't touch it. Confirm they soft-wash stucco and tile, ask whether pool-deck and driveway mineral work is included, and verify insurance. Fall and spring are the practical booking windows before summer heat." },
    ],
    ["pressure-vs-soft-washing", "remove-rust-stains", "power-washing-cost"]
  ),
  "denver|CO": E(
    "Denver's dry, high-altitude climate limits mold but brings its own exterior-cleaning challenges — dust, tree sap, and intense UV exposure across the Front Range. Housing runs from the historic brick homes of Wash Park and Capitol Hill to the newer builds spreading through Aurora, Arvada, and the southern suburbs.",
    [
      { heading: "What Denver homes deal with", body: "The dry climate keeps algae in check, but wind-blown dust, pine and cottonwood sap, and occasional wildfire-smoke residue accumulate on siding, decks, and driveways. High-altitude UV also fades and dries wood quickly, making deck cleaning before re-staining a common need." },
      { heading: "Timing and pricing in Denver", body: "Spring and early summer are peak season; washing in April through June clears winter grime before the summer heat. Deck restoration is a frequent add-on given how hard the sun is on wood here. House washing in the Denver metro typically runs $130–$275." },
      { heading: "Surfaces and methods in Denver", body: "The brick homes of Wash Park and Capitol Hill wash at low pressure to protect mortar, while the vinyl and fiber-cement of Aurora and the southern suburbs cleans with detergents. Wood decks are the local specialty: intense high-altitude UV dries and grays the wood, so the standard job is a gentle clean-and-brighten ahead of re-staining or sealing — high pressure here just furs the grain and shortens the finish's life." },
      { heading: "Hiring a Denver pro", body: "If a deck or fence is on your list, ask whether the contractor cleans and brightens wood ahead of staining, since that's a frequent Front Range pairing. Confirm low pressure on brick and wood, verify insurance, and book April through June, when demand peaks. For sap-heavy lots near cottonwoods and pines, ask how they lift tree sap." },
    ],
    ["power-washing-before-painting", "best-time-power-wash", "power-washing-cost"]
  ),
  "seattle|WA": E(
    "Seattle's wet, temperate climate produces some of the heaviest moss and algae growth in the country. From the Craftsman homes of Ballard and Wallingford to the newer builds on the Eastside in Bellevue and Redmond, keeping roofs and driveways clear of moss is a core part of home upkeep here.",
    [
      { heading: "What Seattle homes deal with", body: "Persistent damp and shade feed thick moss and algae on roofs, driveways, decks, and north-facing siding. Moss on shingles isn't just cosmetic — it holds moisture and can shorten roof life by a decade or more if left untreated, making preventive soft-washing standard practice." },
      { heading: "Timing and pricing in Seattle", body: "Late summer — July through September — is the ideal window, when surfaces can be treated and allowed to dry. Roof and driveway moss treatment is the signature local service. Standard house washing in the Seattle market generally runs $150–$325." },
      { heading: "Surfaces and methods in Seattle", body: "The Craftsman wood siding of Ballard and Wallingford needs gentle soft-washing, while roofs — the region's biggest concern — are treated with a low-pressure moss killer rather than pressure, which strips shingle granules and voids warranties. Concrete driveways and paths under tree cover grow a slick moss-and-algae layer that a surface cleaner and treatment clear, and north-facing walls stay damp enough to regrow between washes." },
      { heading: "Hiring a Seattle pro", body: "Never let a contractor pressure-wash a shingle roof; ask specifically for a soft-wash moss treatment and how long it should keep the roof clear. Confirm gentle methods on Craftsman wood siding, verify insurance, and book late summer, the only reliably dry window. On mossy driveways, ask whether an ongoing treatment plan makes sense given how fast growth returns." },
    ],
    ["remove-roof-algae", "how-often-pressure-wash", "power-washing-cost"]
  ),
  "portland|OR": E(
    "Portland's wet Willamette Valley climate makes moss and algae a defining exterior-cleaning concern. Across the metro — from the older homes of Southeast and the Alberta Arts district to the newer builds in Beaverton and Hillsboro — roofs and driveways collect moss faster than in almost any other U.S. city.",
    [
      { heading: "What Portland homes deal with", body: "Long, damp seasons and heavy tree cover feed persistent moss and algae on roofs, driveways, decks, and shaded siding. Untreated roof moss retains moisture and deteriorates shingles, so annual or biannual soft-wash treatment is considered routine preventive maintenance here." },
      { heading: "Timing and pricing in Portland", body: "Late summer and early fall — August through October — are the best times to treat surfaces and let them dry. Roof moss removal is the most-requested local service. House washing in the Portland market typically runs $140–$300." },
      { heading: "Surfaces and methods in Portland", body: "The older wood-sided homes of Southeast and the Alberta Arts district are soft-washed to avoid forcing water behind siding, while roofs get a low-pressure moss treatment — never pressure, which tears off shingle granules. Concrete driveways and walkways under the metro's heavy tree cover grow slick with moss and algae, and the shaded, damp lots typical here mean growth returns steadily between treatments." },
      { heading: "Hiring a Portland pro", body: "Ask for a soft-wash roof moss treatment rather than any pressure method, and how frequently they'd recommend repeating it given Portland's damp climate. Confirm gentle handling of older wood siding, verify insurance, and schedule August through October when surfaces can dry. For slick concrete paths, ask about a treatment that slows regrowth." },
    ],
    ["remove-roof-algae", "how-often-pressure-wash", "power-washing-cost"]
  ),
  "los-angeles|CA": E(
    "Los Angeles spans a wide range of microclimates and housing styles, and exterior washing needs shift from the coast to the inland valleys. From the Spanish stucco of the Eastside to the mid-century homes of the Valley and the hillside properties of the Westside, dust and hard water are the common threads.",
    [
      { heading: "What LA homes deal with", body: "Long dry stretches let dust and smog film build on stucco and windows, while the coastal marine layer adds salt and moisture near the beaches. Hard water from irrigation spots hardscape and walls, and stucco throughout the region calls for low-pressure soft-washing rather than high-pressure blasting." },
      { heading: "Timing and pricing in Los Angeles", body: "The mild climate allows year-round washing, and there's no hard peak season. Getting two or three quotes is especially worthwhile here given how much overhead varies across the metro. Standard house washing in the LA market generally runs $175–$400." },
      { heading: "Surfaces and methods in Los Angeles", body: "Spanish and smooth stucco dominate from the Eastside to the Valley, and both are soft-washed to spare the finish. Coastal homes near Santa Monica and Venice pick up marine-layer salt and damp that feed light algae, while inland Valley homes accumulate dust and smog film; hard-water spotting from irrigation on walls and windows is common everywhere and needs a mineral treatment rather than more pressure." },
      { heading: "Hiring an LA pro", body: "With pricing varying widely across the metro, two or three quotes genuinely pay off here. Confirm the contractor soft-washes stucco, ask how they handle hard-water spotting and — for beach-adjacent homes — salt film, and verify insurance. There's no peak season, so schedule whenever convenient, but book established crews early for larger Westside or hillside jobs." },
    ],
    ["pressure-vs-soft-washing", "how-often-pressure-wash", "power-washing-cost"]
  ),
  "san-diego|CA": E(
    "San Diego's mild coastal climate is easy on homes overall, but salt air and marine-layer moisture near the coast — plus dust and hard water inland — still keep exterior washing in steady demand. Stucco dominates across the metro, from the older neighborhoods of North Park to the newer builds in Chula Vista and the North County suburbs.",
    [
      { heading: "What San Diego homes deal with", body: "Coastal homes face salt-air exposure and marine-layer damp that feed light algae and mineral staining, while inland areas contend with dust and hard-water spotting from irrigation. Stucco and tile throughout the region require gentle soft-washing to avoid surface damage." },
      { heading: "Timing and pricing in San Diego", body: "The mild climate supports year-round scheduling with no strict peak season. Soft-washing is standard for the region's stucco and tile. Standard house washing across the San Diego market typically runs $175–$375." },
      { heading: "Surfaces and methods in San Diego", body: "Stucco and tile — the norm from North Park to Chula Vista — are soft-washed to protect the surface. Coastal homes in La Jolla and the beach communities collect salt film and marine-layer algae that a detergent wash clears, while inland North County homes see more dust and irrigation hard-water spotting. The mild, dry-summer climate keeps heavy algae to shaded pockets rather than whole walls." },
      { heading: "Hiring a San Diego pro", body: "Confirm soft-wash methods for stucco and tile, and for coastal homes ask how the contractor handles salt exposure and marine-layer staining. Inland, ask about hard-water spotting. Verify insurance and, given the wide pricing range, compare a couple of quotes on larger jobs. Year-round scheduling means you can book whenever it suits." },
    ],
    ["pressure-vs-soft-washing", "how-often-pressure-wash", "power-washing-cost"]
  ),
  "san-jose|CA": E(
    "San Jose and the South Bay have a dry Mediterranean climate where dust and hard water drive most exterior-cleaning work. Housing runs from the older Willow Glen and Naglee Park homes to the dense newer developments spreading across Silicon Valley.",
    [
      { heading: "What San Jose homes deal with", body: "Long dry summers let dust settle on stucco and hardscape, and hard water from irrigation leaves mineral spotting on driveways and walls. Humidity-driven algae is limited to shaded, damp corners, and the region's stucco construction calls for low-pressure methods." },
      { heading: "Timing and pricing in San Jose", body: "The dry climate makes scheduling flexible across spring through fall. Bay Area overhead pushes pricing to the higher end of the state range, so comparing quotes pays off. House washing in the San Jose market generally runs $175–$400." },
      { heading: "Surfaces and methods in San Jose", body: "Stucco is the dominant material from Willow Glen to the newer Silicon Valley developments, and it's soft-washed rather than pressure-blasted. The dry Mediterranean climate keeps algae confined to shaded, irrigated corners, so the routine work is clearing summer dust film and treating the hard-water mineral spotting that irrigation leaves on walls, driveways, and windows — a stain that needs a mineral-specific product, not more pressure." },
      { heading: "Hiring a San Jose pro", body: "Bay Area overhead makes pricing run high, so two or three quotes are worth gathering on any sizable job. Confirm the contractor soft-washes stucco and ask how they address hard-water spotting, the region's most common complaint. Verify insurance. The dry climate means spring through fall are all workable, so book around the crew's availability." },
    ],
    ["pressure-vs-soft-washing", "pressure-washing-concrete", "power-washing-cost"]
  ),
  "sacramento|CA": E(
    "Sacramento's hot, dry Central Valley summers and mild winters shape exterior-cleaning needs around dust and hard water rather than humidity. The metro's housing ranges from the historic homes of Midtown and Land Park to the newer suburban builds in Roseville, Folsom, and Elk Grove.",
    [
      { heading: "What Sacramento homes deal with", body: "Dry, dusty summers coat siding and hardscape, valley fog and shaded areas grow some algae in winter, and hard water from irrigation spots concrete and walls. Tree-lined older neighborhoods also see leaf tannin staining on driveways and walkways." },
      { heading: "Timing and pricing in Sacramento", body: "Spring and fall are the most comfortable windows, with the intense summer heat easing mid-season demand. House washing in the Sacramento market typically runs $150–$325." },
      { heading: "Surfaces and methods in Sacramento", body: "The older wood and stucco homes of Midtown and Land Park take low-pressure washing, while the stucco and fiber-cement of Roseville and Elk Grove cleans with detergents. Summer dust rinses off easily, but two Valley-specific stains need more work: leaf tannin from the tree-lined older streets, which discolors concrete, and hard-water spotting from irrigation — both respond better to a targeted treatment than to extra pressure." },
      { heading: "Hiring a Sacramento pro", body: "Ask how a contractor handles tannin staining on driveways and walkways, common in the older tree-canopied neighborhoods, and hard-water spotting from irrigation. Confirm soft-wash methods on stucco, verify insurance, and book spring or fall to avoid the peak-heat slowdown. Compare quotes on larger suburban homes in Folsom or Roseville." },
    ],
    ["pressure-washing-concrete", "best-time-power-wash", "power-washing-cost"]
  ),
  "chicago|IL": E(
    "Chicago's harsh winters and humid summers put exterior surfaces through a demanding cycle. Across the metro — from the classic brick two-flats and greystones of the city to the vinyl-and-brick homes of the suburbs — road salt and summer mold are the recurring concerns.",
    [
      { heading: "What Chicago homes deal with", body: "Winter road salt and freeze-thaw cycles stain and pit driveways and walkways, while humid summers feed mold and algae on siding and shaded concrete. The city's older brick and greystone buildings need low-pressure washing to protect aging mortar joints." },
      { heading: "Timing and pricing in Chicago", body: "Spring is peak season, with washing from April through June clearing winter salt and grime before summer. City contractors run 15–25% above suburban pricing given higher overhead. Standard house washing in the Chicago market typically runs $125–$260." },
      { heading: "Surfaces and methods in Chicago", body: "The brick two-flats and greystones that define the city are washed at low pressure to protect century-old mortar and stone, while suburban vinyl and aluminum siding cleans with soft-wash detergents. Concrete is the seasonal battleground: winter road salt and freeze-thaw leave white staining and surface pitting, so a surface-cleaner pass with the right treatment each spring is what restores driveways and walkways." },
      { heading: "Hiring a Chicago pro", body: "For city greystones and brick, confirm the contractor has masonry experience and washes at low pressure — aggressive cleaning damages old mortar. Ask about spring salt-and-grime removal from concrete, verify insurance, and book April through June, the busiest stretch. Note that city crews price above suburban ones, so factor location when comparing quotes." },
    ],
    ["pressure-vs-soft-washing", "pressure-washing-concrete", "power-washing-cost"]
  ),
  "columbus|OH": E(
    "Columbus sees the full four-season cycle — winter road salt, spring pollen, and humid summers — that keeps exterior washing a routine task. Housing spans the historic brick homes of German Village and Victorian Village to the newer suburban builds in Dublin, Westerville, and Hilliard.",
    [
      { heading: "What Columbus homes deal with", body: "Winter salt and freeze-thaw damage driveways and walkways, spring brings pollen film, and humid summers grow mold and algae on siding and shaded concrete. Older brick homes near downtown need gentle washing to protect mortar." },
      { heading: "Timing and pricing in Columbus", body: "April through June is peak season for clearing winter grime before summer. Concrete and driveway cleaning are in high demand after salt-heavy winters. House washing in the Columbus market generally runs $110–$225." },
      { heading: "Surfaces and methods in Columbus", body: "The historic brick of German Village and Victorian Village is washed at low pressure to protect mortar, while the vinyl and Hardie-board siding across Dublin and Westerville cleans with detergents. The recurring seasonal job is concrete: road salt and freeze-thaw leave staining and pitting on driveways and walks each winter, and a spring surface-cleaner pass with the appropriate treatment lifts what a spring rain won't." },
      { heading: "Hiring a Columbus pro", body: "Ask about spring concrete cleaning to clear winter salt, the service most in demand here, and confirm the contractor soft-washes older brick to protect mortar. Verify insurance and book April through June, when crews are busiest. On multi-surface jobs across the newer suburbs, comparing a couple of written quotes keeps pricing in check." },
    ],
    ["pressure-washing-concrete", "best-time-power-wash", "power-washing-cost"]
  ),
  "indianapolis|IN": E(
    "Indianapolis contends with a classic Midwest cycle of winter salt, spring pollen, and humid summers. The metro's housing runs from historic homes in Meridian-Kessler and Irvington to the fast-growing suburbs of Carmel, Fishers, and Noblesville.",
    [
      { heading: "What Indianapolis homes deal with", body: "Road salt and freeze-thaw cycles leave heavy staining on driveways and walkways each spring, while humid summers feed mold and algae on siding and shaded surfaces. Brick and vinyl are both common, each calling for the appropriate pressure." },
      { heading: "Timing and pricing in Indianapolis", body: "April through June is the busiest window for post-winter cleaning. Driveway and concrete washing are especially requested after salty winters. Indianapolis is one of the more affordable Midwest markets, with house washing typically running $95–$200." },
      { heading: "Surfaces and methods in Indianapolis", body: "The brick and painted-wood homes of Meridian-Kessler and Irvington take low-pressure washing, while the vinyl siding across Carmel and Fishers cleans with soft-wash detergents. Concrete is the season's main job: winter salt and freeze-thaw stain and pit driveways and walks, so a spring surface-cleaner pass with a degreaser or salt-neutralizing treatment is what actually restores them." },
      { heading: "Hiring an Indianapolis pro", body: "Prioritize a contractor who does thorough spring concrete cleaning, since salt damage is the local constant. Confirm low pressure on older brick, ask whether driveway and house washing can be bundled, and verify insurance. Book April through June when demand peaks. As an affordable market, comparing quotes still helps on larger suburban homes." },
    ],
    ["pressure-washing-concrete", "remove-oil-stains-driveway", "power-washing-cost"]
  ),
  "louisville|KY": E(
    "Louisville's humid, four-season climate and heavy tree cover keep mold, pollen, and algae in steady rotation on home exteriors. Housing ranges from the historic homes of the Highlands and Old Louisville to the newer builds in the East End suburbs.",
    [
      { heading: "What Louisville homes deal with", body: "Humid summers and abundant shade grow mold and green algae on siding, decks, and concrete, while spring pollen coats surfaces across the metro. Humid winters soften wood decking, making pre-summer deck cleaning and resealing a common request." },
      { heading: "Timing and pricing in Louisville", body: "Spring is the busiest season, with contractors booked heavily March through May. Deck restoration is a popular add-on. House washing in the Louisville market generally runs $90–$195." },
      { heading: "Surfaces and methods in Louisville", body: "The historic brick and painted-wood homes of the Highlands and Old Louisville are washed at low pressure to protect mortar and finish, while East End vinyl and fiber-cement siding cleans with detergents. Wood decks, softened and grayed by humid winters, are the frequent add-on: a gentle clean-and-brighten ahead of resealing restores them, whereas high pressure raises the grain and shortens the finish." },
      { heading: "Hiring a Louisville pro", body: "If a deck is on your list, ask whether the contractor cleans and brightens wood for resealing, a common local pairing. Confirm soft-wash methods for older brick and painted trim, verify insurance, and book March through May before the spring rush fills crews. On shaded lots, ask how they treat recurring algae." },
    ],
    ["mold-mildew-siding", "best-time-power-wash", "power-washing-cost"]
  ),
  "oklahoma-city|OK": E(
    "Oklahoma City's hot, windy summers and red-clay soil shape exterior-cleaning needs across the metro, from the historic homes of Heritage Hills and Mesta Park to the newer suburban builds in Edmond, Moore, and Norman.",
    [
      { heading: "What OKC homes deal with", body: "Wind-blown red-clay dust settles on siding and stains concrete driveways and walkways, and spring storms leave mud and debris. Eastern-side humidity feeds some algae on shaded surfaces, but clay staining is the signature local problem." },
      { heading: "Timing and pricing in Oklahoma City", body: "Spring and fall are the most practical windows, with peak demand March through May and September through October. Red-clay removal from driveways is far more effective with professional washing than a garden hose. House washing in the OKC market typically runs $90–$185." },
      { heading: "Surfaces and methods in Oklahoma City", body: "The brick and painted-wood homes of Heritage Hills and Mesta Park wash at low pressure, while the vinyl and brick-veneer siding of Edmond and Norman cleans with detergents. The defining local job is concrete: wind-driven red clay grinds into driveway and walkway pores and storm mud compounds it, so surface-cleaner passes with a degreaser pre-treatment lift far more clay staining than a spray wand ever will." },
      { heading: "Hiring an OKC pro", body: "Ask specifically about red-clay removal from concrete — it's the service that separates a thorough contractor from a quick rinse. Confirm low pressure on brick and painted trim, verify insurance, and book in spring or fall when weather cooperates. On larger Edmond or Norman homes, comparing written quotes keeps multi-surface pricing fair." },
    ],
    ["pressure-washing-concrete", "remove-oil-stains-driveway", "power-washing-cost"]
  ),
  "new-york|NY": E(
    "New York City's dense, salt-air coastal environment and mix of building types make exterior washing a specialized job. From the brownstones of Brooklyn to the row houses of Queens and Staten Island's single-family neighborhoods, soot, salt, and humidity are the shared concerns.",
    [
      { heading: "What NYC homes deal with", body: "Urban soot and grime film build on facades, salt air off the harbor accelerates staining and corrosion, and humid summers grow algae on shaded brick and concrete. Historic brownstone and masonry require careful low-pressure washing to protect aging mortar and stone." },
      { heading: "Timing and pricing in New York", body: "Spring is peak season across the boroughs, with contractors busiest in April and May. NYC-area pricing is among the highest in the country given overhead and access challenges, so comparing quotes matters for larger jobs. House washing typically runs $150–$375." },
      { heading: "Surfaces and methods in New York", body: "Brownstone, brick, and cast-stone facades — the fabric of Brooklyn and Queens row houses — are soft-washed at low pressure, since high pressure erodes soft brownstone and blows out aging mortar. Urban soot film lifts with detergents rather than force, and Staten Island and coastal Queens homes carry extra harbor salt. Access is its own challenge on attached houses, where reach and staging shape both method and price." },
      { heading: "Hiring an NYC pro", body: "For brownstone and historic masonry, confirm the contractor specializes in soft-washing aged facades — the wrong pressure causes costly stone and mortar damage. Ask how they handle access on attached row houses and, for coastal homes, salt exposure. Verify insurance. Given how high and variable pricing runs here, compare quotes on any substantial facade job." },
    ],
    ["pressure-vs-soft-washing", "vet-power-washing-contractor", "power-washing-cost"]
  ),
  "philadelphia|PA": E(
    "Philadelphia's four-season climate and historic masonry housing stock shape exterior washing across the metro. From the centuries-old brick row houses of Society Hill and Old City to the twins and singles of the suburbs, protecting aging mortar is a central concern.",
    [
      { heading: "What Philadelphia homes deal with", body: "Winter road salt, spring pollen, and humid summers all contribute to buildup on siding, brick, and concrete. The city's historic brick row houses require low-pressure washing to avoid damaging mortar joints — always worth confirming a contractor's masonry experience here." },
      { heading: "Timing and pricing in Philadelphia", body: "Spring is peak season, with contractors busiest April through June. Both driveway cleaning and gentle masonry washing are in steady demand. House washing in the Philadelphia market generally runs $115–$240." },
      { heading: "Surfaces and methods in Philadelphia", body: "The centuries-old brick of Society Hill and Old City is among the most pressure-sensitive housing anywhere — soft lime mortar and hand-made brick demand low-pressure detergent washing, never a concentrated tip. Suburban twins and singles in vinyl and stucco clean more easily with soft-wash methods, while winter road salt on concrete drives a separate spring surface-cleaning job across the metro." },
      { heading: "Hiring a Philadelphia pro", body: "For any historic brick row house, a contractor's masonry experience is non-negotiable — ask directly how they wash old brick and mortar and insist on low pressure. Confirm insurance, and for suburban homes ask about spring salt removal from concrete. Book April through June when demand peaks, and compare quotes on delicate masonry work." },
    ],
    ["pressure-vs-soft-washing", "vet-power-washing-contractor", "power-washing-cost"]
  ),
  "pittsburgh|PA": E(
    "Pittsburgh's hilly terrain, humid summers, and historic brick housing give exterior washing a distinct local character. From the Victorian homes of Shadyside and Squirrel Hill to the brick row houses of the older neighborhoods, gentle masonry care is key.",
    [
      { heading: "What Pittsburgh homes deal with", body: "Humid summers and heavy tree cover feed mold and algae on shaded siding and concrete, while winter salt stains driveways and walkways. The region's older brick homes need low-pressure washing to protect mortar joints." },
      { heading: "Timing and pricing in Pittsburgh", body: "Spring is peak season for clearing winter grime. Gentle masonry washing and driveway cleaning are common requests. House washing in the Pittsburgh market typically runs $110–$230." },
      { heading: "Surfaces and methods in Pittsburgh", body: "The Victorian and brick homes of Shadyside and Squirrel Hill are soft-washed to protect mortar and painted wood, while suburban vinyl siding cleans with detergents. The region's heavy tree cover and humid summers grow algae on shaded north walls and hillside-shaded concrete, so an algaecide treatment usually accompanies the wash, and winter road salt drives a separate spring concrete cleaning." },
      { heading: "Hiring a Pittsburgh pro", body: "For older brick and Victorian homes, confirm low-pressure masonry methods and ask about the algae treatment shaded lots need. On the region's hilly properties, ask how the crew handles access and runoff on sloped ground. Verify insurance, book in spring, and compare quotes on larger or multi-surface jobs across the older neighborhoods." },
    ],
    ["pressure-vs-soft-washing", "mold-mildew-siding", "power-washing-cost"]
  ),
  "boston|MA": E(
    "Boston's four-season New England climate — salt air on the coast, winter freeze-thaw, and humid summers — keeps exterior washing in steady demand. Housing runs from historic painted-wood colonials and triple-deckers to the brick and vinyl homes of the suburbs.",
    [
      { heading: "What Boston homes deal with", body: "Coastal salt air accelerates staining near the water, winter freeze-thaw damages driveways and walkways, and humid summers grow algae on shaded siding and concrete. Older painted-wood homes need lower-pressure washing to avoid forcing water behind clapboards and causing rot." },
      { heading: "Timing and pricing in Boston", body: "Spring is peak season, with April through June the busiest booking window after winter. Boston-area contractors are among the pricier in New England, so comparing at least three quotes is worthwhile. House washing typically runs $150–$325." },
      { heading: "Surfaces and methods in Boston", body: "The painted-wood colonials and triple-deckers that define the region are especially unforgiving — high pressure drives water behind clapboards and invites rot, so soft-washing at low pressure is essential. Historic brick in the city takes the same gentle approach to protect mortar, coastal homes carry extra salt film, and winter freeze-thaw leaves separate concrete staining to clear each spring." },
      { heading: "Hiring a Boston pro", body: "For clapboard and shingle-sided homes, confirm the contractor soft-washes and understands not to force water behind the siding — a common cause of hidden rot. Ask about salt handling for coastal homes and spring concrete cleaning. Verify insurance, book April through June, and given the region's higher pricing, gather three quotes on sizable jobs." },
    ],
    ["pressure-vs-soft-washing", "pressure-washing-concrete", "power-washing-cost"]
  ),
  "baltimore|MD": E(
    "Baltimore's humid climate and proximity to the Chesapeake Bay create strong conditions for mold and algae, especially near the water. The metro's housing spans the historic brick row houses of the city to the vinyl-and-brick homes of the surrounding counties.",
    [
      { heading: "What Baltimore homes deal with", body: "Bay-area humidity feeds green and black algae on siding, driveways, and roofs, with waterfront homes facing the heaviest exposure. The city's historic brick row houses require gentle low-pressure washing to protect mortar and formstone facades." },
      { heading: "Timing and pricing in Baltimore", body: "Spring and early fall are the optimal windows, with mid-summer humidity slowing demand. Roof soft-washing is common for bay-facing homes. House washing in the Baltimore market generally runs $135–$280." },
      { heading: "Surfaces and methods in Baltimore", body: "The city's brick and distinctive formstone row houses are washed at low pressure to protect mortar and the applied stone veneer, while suburban vinyl and brick-veneer siding cleans with detergents. Chesapeake humidity drives heavy algae on siding and roofs — a low-pressure algaecide treatment is what clears shingle streaking — and waterfront homes carry the added salt-and-damp exposure that speeds regrowth." },
      { heading: "Hiring a Baltimore pro", body: "For row houses, confirm the contractor knows how to wash formstone and old mortar gently — pressure damages both. Ask whether roof algae treatment is included, especially for bay-facing homes where streaking is heaviest, and verify insurance. Book spring or early fall to avoid the mid-summer humidity slowdown, and compare quotes on larger jobs." },
    ],
    ["remove-roof-algae", "pressure-vs-soft-washing", "power-washing-cost"]
  ),
};

/** Normalize a city + state into the editorial map key. */
export function editorialKey(city: string, stateAbbr: string): string {
  const slug = city
    .toLowerCase()
    .replace(/[.']/g, "")
    .replace(/\s+/g, "-");
  return `${slug}|${stateAbbr}`;
}

/** Returns unique editorial content for a city, or null if none is authored yet. */
export function getCityEditorial(city: string, stateAbbr: string): CityEditorial | null {
  return CITY_EDITORIAL[editorialKey(city, stateAbbr)] ?? null;
}

/** True if a city has authored editorial content (and should stay indexable). */
export function hasCityEditorial(city: string, stateAbbr: string): boolean {
  return editorialKey(city, stateAbbr) in CITY_EDITORIAL;
}
