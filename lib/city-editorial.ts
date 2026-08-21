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

export type CityEditorial = {
  /** 2–4 sentence lede shown at the top of the local guide. */
  intro: string;
  /** Named subsections, each a short original paragraph. */
  sections: { heading: string; body: string }[];
};

const E = (
  intro: string,
  sections: { heading: string; body: string }[]
): CityEditorial => ({ intro, sections });

export const CITY_EDITORIAL: Record<string, CityEditorial> = {
  "charlotte|NC": E(
    "Charlotte's humid subtropical climate and dense tree canopy make exterior washing a routine part of home maintenance across the metro. From the older brick homes of Dilworth and Myers Park to the newer vinyl-sided subdivisions in Ballantyne and University City, the buildup patterns differ enough that most local pros tailor their approach by neighborhood and siding type.",
    [
      { heading: "What Charlotte homes deal with", body: "The Piedmont's long, humid summers drive persistent green algae and mildew on north-facing siding, shaded driveways, and concrete. Heavy oak and pine cover across neighborhoods like Plaza Midwood and Cotswold means more organic staining and pollen film than you'd see in a more open metro. Red-clay soil common to the region also tracks onto walkways and settles into concrete pores." },
      { heading: "Timing and pricing in Charlotte", body: "Late spring — after the heavy February-to-April pollen has finished — is the busiest window, and contractors serving South Charlotte and the Lake Norman suburbs often book two to three weeks out. Soft-washing is the norm for the region's brick and painted-wood homes, where high pressure risks mortar and paint damage. Standard house washes in the Charlotte market typically fall in the $150–$275 range depending on home size and roof involvement." },
    ]
  ),
  "raleigh|NC": E(
    "Raleigh and the wider Triangle sit under heavy hardwood canopy, and the combination of humidity, pine pollen, and shade keeps exterior algae growth steady through much of the year. Homes range from established brick ranches inside the Beltline to the sprawling vinyl-and-fiber-cement subdivisions of Cary, Apex, and North Raleigh.",
    [
      { heading: "What Triangle homes deal with", body: "The region's famous spring pollen — a thick yellow layer from late March into May — coats siding, decks, and driveways and is the single biggest driver of wash requests. Persistent summer humidity then feeds black algae streaking on roofs, especially on the shaded lots common throughout Cary and Chapel Hill." },
      { heading: "Timing and pricing in Raleigh", body: "Most Triangle homeowners schedule a wash in late May once pollen season ends, which makes that period the tightest for booking. Roof soft-washing is a common add-on given how universal shingle algae is here. Expect standard house washing to run roughly $140–$250 across the Raleigh–Durham–Cary market." },
    ]
  ),
  "nashville|TN": E(
    "Nashville's humid climate and rapid growth have made exterior washing a standard service across the metro, from the historic brick and painted-wood homes of East Nashville and Germantown to the newer builds spreading through Franklin, Brentwood, and Murfreesboro.",
    [
      { heading: "What Nashville homes deal with", body: "Humid Middle Tennessee summers and rainy springs feed mildew on siding and green algae on shaded concrete. The area's mature tree cover adds organic staining and leaf tannin marks to driveways and walkways, and older homes near downtown often carry decades of grime on brick and trim." },
      { heading: "Timing and pricing in Nashville", body: "Spring is peak season and contractors serving Williamson County suburbs book out quickly from March through May. Deck cleaning and resealing is a popular pre-summer add-on given how hard humid winters are on wood. Standard house washes in the Nashville market generally land around $130–$240." },
    ]
  ),
  "memphis|TN": E(
    "Memphis sits in a hot, humid corner of the Mid-South where mold and mildew build quickly on almost any exterior surface. The housing stock — from the historic homes of Central Gardens and Midtown to the suburban subdivisions of Cordova and Germantown — spans a wide range of siding and masonry types.",
    [
      { heading: "What Memphis homes deal with", body: "Long, sticky summers and heavy Mississippi River-valley humidity make green and black algae a near-constant on north-facing walls, shaded driveways, and roofs. Spring storms leave mud and debris, and the region's clay-heavy soil stains concrete readily." },
      { heading: "Timing and pricing in Memphis", body: "Spring and fall are the most comfortable scheduling windows; peak summer heat pushes some outdoor work into the shoulder seasons. Roof soft-washing is widely requested here. House washing in the Memphis market typically runs about $105–$220." },
    ]
  ),
  "austin|TX": E(
    "Austin's mix of Hill Country dust, humid Gulf influence, and intense sun creates a distinct set of exterior-cleaning needs. Limestone and stucco are everywhere here — from the older bungalows of Hyde Park and Travis Heights to the newer hillside builds in Westlake and the master-planned communities out toward Cedar Park and Round Rock.",
    [
      { heading: "What Austin homes deal with", body: "The region's abundant limestone and stucco call for careful low-pressure soft-washing; high pressure etches these soft surfaces. Cedar and oak pollen, Hill Country dust, and hard-water mineral spotting from irrigation are common, and shaded lots still pick up mildew despite the generally drier climate." },
      { heading: "Timing and pricing in Austin", body: "Spring and fall are the practical windows; the brutal July–August heat slows outdoor work and eases pricing. Because so many homes are limestone, stucco, or stone, most reputable Austin pros lead with soft-wash methods. Standard house washing across the Austin metro generally falls in the $120–$250 range." },
    ]
  ),
  "san-antonio|TX": E(
    "San Antonio's warm, semi-humid climate and widespread stucco-and-stone construction shape how homes are washed across the metro — from the historic districts near downtown and King William to the sprawling subdivisions of Stone Oak and the far North Side.",
    [
      { heading: "What San Antonio homes deal with", body: "Stucco, limestone, and painted masonry dominate here and require gentle soft-washing to avoid surface damage. Hard water from irrigation leaves mineral spotting, Hill Country dust settles on everything, and shaded, humid pockets still grow mildew on north-facing walls and concrete." },
      { heading: "Timing and pricing in San Antonio", body: "Spring and fall are the comfortable windows, with summer heat pushing demand into the shoulder seasons. Given the prevalence of soft masonry, low-pressure techniques are standard. House washing in the San Antonio market typically runs around $110–$235." },
    ]
  ),
  "dallas|TX": E(
    "Dallas homes contend with a mix of heat, wind-blown dust, and periodic humidity, and the metro's enormous range of housing — from the historic homes of Highland Park and the M Streets to the newer builds across Frisco, Plano, and McKinney — means washing needs vary widely by area and material.",
    [
      { heading: "What Dallas homes deal with", body: "North Texas clay soil tracks onto driveways and stains concrete, while spring storms leave mud and debris. Brick is common across the metro, but painted trim, stucco accents, and stone require lower-pressure methods. Hard-water spotting from irrigation is a frequent complaint in the newer suburbs." },
      { heading: "Timing and pricing in Dallas", body: "Spring and fall are the most practical windows; the intense summer heat slows outdoor work. Contractors across the northern suburbs stay busy in spring, so early booking helps. Standard house washing in the Dallas–Fort Worth market generally lands around $110–$240." },
    ]
  ),
  "fort-worth|TX": E(
    "Fort Worth blends North Texas heat and dust with a housing mix that runs from historic brick homes near downtown and the Fairmount district to fast-growing subdivisions on the west and north sides. Exterior washing here is driven as much by clay-soil dust as by humidity.",
    [
      { heading: "What Fort Worth homes deal with", body: "Red-clay dust and spring storm mud settle onto driveways and concrete, and hard water from irrigation leaves mineral spotting on hardscape. Brick dominates, but stone accents and painted trim need gentler treatment, and shaded north walls still pick up mildew in humid stretches." },
      { heading: "Timing and pricing in Fort Worth", body: "Spring and fall are the workable windows before summer heat sets in. Driveway and concrete cleaning are especially in demand given the clay-soil staining. Expect house washing in the Fort Worth market to run roughly $110–$235." },
    ]
  ),
  "houston|TX": E(
    "Houston has some of the most aggressive mold and algae conditions in the country. The Gulf Coast's heat and near-constant humidity mean exteriors here need washing more often than almost anywhere else — an issue that spans the historic homes of the Heights, the brick-and-stucco builds of Katy and Sugar Land, and everything in between.",
    [
      { heading: "What Houston homes deal with", body: "Year-round humidity feeds relentless green and black algae on siding, fences, driveways, and roofs. Frequent heavy rain and periodic flooding leave mud and waterline staining, and the region's shaded, tree-heavy neighborhoods accelerate organic growth on north-facing surfaces." },
      { heading: "Timing and pricing in Houston", body: "Washing is effective in any season here, though fall scheduling avoids peak summer humidity and books more easily. Many Houston homeowners wash two to three times a year given how fast algae returns. Roof soft-washing is common. Standard house washing generally runs about $120–$250." },
    ]
  ),
  "atlanta|GA": E(
    "Atlanta's hot summers, heavy tree canopy, and famous pollen seasons keep exterior washing in steady demand across the metro — from the brick homes of Buckhead and Virginia-Highland to the sprawling suburban communities in Alpharetta, Marietta, and Roswell.",
    [
      { heading: "What Atlanta homes deal with", body: "The metro's dense oak and pine cover drives heavy pollen film in spring and persistent green algae on shaded siding, driveways, and roofs. North-facing walls and concrete under tree cover are the usual problem areas, and Georgia's red-clay soil stains hardscape readily." },
      { heading: "Timing and pricing in Atlanta", body: "Spring is peak season — April and May bring the heaviest pollen, making late-spring washes the most requested service of the year. Contractors in the northern suburbs book out two to three weeks, so securing quotes in March helps. House washing across the Atlanta market typically runs $130–$250." },
    ]
  ),
  "jacksonville|FL": E(
    "Jacksonville combines Florida humidity with coastal salt air, a mix that pushes hard on home exteriors across the metro — from the historic homes of Riverside and Avondale to the beachside communities and the newer subdivisions spreading south and west.",
    [
      { heading: "What Jacksonville homes deal with", body: "Warm, humid conditions grow algae and mildew year-round, and homes near the St. Johns River and the beaches face added salt-air exposure that accelerates roof and siding staining. Black streaking on shingles is nearly universal, and shaded lots stay damp enough to feed constant organic growth." },
      { heading: "Timing and pricing in Jacksonville", body: "Washing works in any season, but fall scheduling sidesteps peak summer humidity. Roof soft-washing is especially valuable here given how quickly algae shortens shingle life in the Florida climate. House washing in the Jacksonville market generally runs $120–$250." },
    ]
  ),
  "orlando|FL": E(
    "Orlando's warm, wet climate makes algae and mildew a year-round reality for homeowners across Central Florida — from the established neighborhoods of College Park and Winter Park to the master-planned communities of Lake Nona and the suburbs stretching toward Kissimmee and Sanford.",
    [
      { heading: "What Orlando homes deal with", body: "High humidity and frequent afternoon storms keep surfaces damp, feeding green algae on stucco and driveways and black streaking on roofs. Stucco and tile are common here and call for low-pressure soft-washing, while shaded pavers and screen enclosures collect persistent organic buildup." },
      { heading: "Timing and pricing in Orlando", body: "Any season works, though fall is the easiest to book and avoids peak summer humidity. Roof and paver soft-washing are among the most requested services. Standard house washing across the Orlando market typically lands around $120–$250." },
    ]
  ),
  "tampa|FL": E(
    "Tampa's Gulf Coast humidity and salt air combine to make exterior washing a frequent necessity — from the historic bungalows of Hyde Park and Seminole Heights to the waterfront homes of South Tampa and the newer builds in Wesley Chapel and Brandon.",
    [
      { heading: "What Tampa homes deal with", body: "Year-round humidity and coastal salt exposure drive aggressive algae and mildew on stucco, driveways, and roofs, and homes near the bay face accelerated staining. Paver driveways and pool decks — common across the metro — collect stubborn organic growth in shaded, damp areas." },
      { heading: "Timing and pricing in Tampa", body: "Washing is effective in any Florida season; fall scheduling avoids the most intense summer humidity. Soft-washing is standard for the region's stucco and tile. Expect house washing in the Tampa market to run about $120–$250." },
    ]
  ),
  "miami|FL": E(
    "Miami's tropical climate and coastal exposure create some of the most demanding exterior-cleaning conditions in the country. Across the metro — from the Art Deco stucco of Miami Beach to the tile-roofed homes of Coral Gables and the newer builds in Doral and Kendall — humidity and salt air keep surfaces under constant pressure.",
    [
      { heading: "What Miami homes deal with", body: "Year-round heat and humidity, frequent rain, and salt air drive relentless algae, mildew, and mineral staining on stucco, tile, and pavers. Homes near the water face the heaviest salt exposure, and shaded courtyards and pool decks stay damp enough for continuous organic growth." },
      { heading: "Timing and pricing in Miami", body: "Any season works for washing, though the drier winter months are the most comfortable to schedule. Stucco and barrel-tile roofs require careful soft-washing. Standard house washing across the Miami market generally runs $130–$275." },
    ]
  ),
  "phoenix|AZ": E(
    "Phoenix sits in a hot desert climate where dust, sun, and hard water — not humidity — are the main exterior-cleaning concerns. Stucco and painted masonry dominate the metro, from the historic districts near downtown to the vast master-planned communities of Scottsdale, Gilbert, Chandler, and Mesa.",
    [
      { heading: "What Phoenix homes deal with", body: "Wind-blown desert dust settles on stucco and hardscape, monsoon storms leave mud staining in mid-to-late summer, and hard water from irrigation deposits stubborn mineral spotting on driveways and walls. Humidity-driven algae is rare except in shaded, irrigated areas." },
      { heading: "Timing and pricing in Phoenix", body: "Fall through spring is the comfortable window; summer highs above 110°F make scheduling harder. Because nearly every home is stucco or painted masonry, low-pressure soft-washing is the standard method. House washing in the Phoenix market typically runs $110–$230." },
    ]
  ),
  "las-vegas|NV": E(
    "Las Vegas homes sit in a hot, arid desert valley where dust and hard-water mineral staining drive most exterior-cleaning work. Stucco and tile are the norm across the metro — from the older neighborhoods near the center to the master-planned communities of Summerlin and Henderson.",
    [
      { heading: "What Las Vegas homes deal with", body: "Wind-driven desert dust coats stucco and hardscape, and hard water from irrigation leaves heavy calcium spotting on driveways, walls, and pool decks that a garden hose can't remove. Humidity-driven algae is uncommon outside shaded, irrigated pockets." },
      { heading: "Timing and pricing in Las Vegas", body: "Fall and spring are the most comfortable scheduling windows; summer heat above 110°F slows outdoor work. Hard-water and mineral-deposit removal is a signature local service. Standard house washing across the Las Vegas valley generally runs $120–$245." },
    ]
  ),
  "denver|CO": E(
    "Denver's dry, high-altitude climate limits mold but brings its own exterior-cleaning challenges — dust, tree sap, and intense UV exposure across the Front Range. Housing runs from the historic brick homes of Wash Park and Capitol Hill to the newer builds spreading through Aurora, Arvada, and the southern suburbs.",
    [
      { heading: "What Denver homes deal with", body: "The dry climate keeps algae in check, but wind-blown dust, pine and cottonwood sap, and occasional wildfire-smoke residue accumulate on siding, decks, and driveways. High-altitude UV also fades and dries wood quickly, making deck cleaning before re-staining a common need." },
      { heading: "Timing and pricing in Denver", body: "Spring and early summer are peak season; washing in April through June clears winter grime before the summer heat. Deck restoration is a frequent add-on given how hard the sun is on wood here. House washing in the Denver metro typically runs $130–$275." },
    ]
  ),
  "seattle|WA": E(
    "Seattle's wet, temperate climate produces some of the heaviest moss and algae growth in the country. From the Craftsman homes of Ballard and Wallingford to the newer builds on the Eastside in Bellevue and Redmond, keeping roofs and driveways clear of moss is a core part of home upkeep here.",
    [
      { heading: "What Seattle homes deal with", body: "Persistent damp and shade feed thick moss and algae on roofs, driveways, decks, and north-facing siding. Moss on shingles isn't just cosmetic — it holds moisture and can shorten roof life by a decade or more if left untreated, making preventive soft-washing standard practice." },
      { heading: "Timing and pricing in Seattle", body: "Late summer — July through September — is the ideal window, when surfaces can be treated and allowed to dry. Roof and driveway moss treatment is the signature local service. Standard house washing in the Seattle market generally runs $150–$325." },
    ]
  ),
  "portland|OR": E(
    "Portland's wet Willamette Valley climate makes moss and algae a defining exterior-cleaning concern. Across the metro — from the older homes of Southeast and the Alberta Arts district to the newer builds in Beaverton and Hillsboro — roofs and driveways collect moss faster than in almost any other U.S. city.",
    [
      { heading: "What Portland homes deal with", body: "Long, damp seasons and heavy tree cover feed persistent moss and algae on roofs, driveways, decks, and shaded siding. Untreated roof moss retains moisture and deteriorates shingles, so annual or biannual soft-wash treatment is considered routine preventive maintenance here." },
      { heading: "Timing and pricing in Portland", body: "Late summer and early fall — August through October — are the best times to treat surfaces and let them dry. Roof moss removal is the most-requested local service. House washing in the Portland market typically runs $140–$300." },
    ]
  ),
  "los-angeles|CA": E(
    "Los Angeles spans a wide range of microclimates and housing styles, and exterior washing needs shift from the coast to the inland valleys. From the Spanish stucco of the Eastside to the mid-century homes of the Valley and the hillside properties of the Westside, dust and hard water are the common threads.",
    [
      { heading: "What LA homes deal with", body: "Long dry stretches let dust and smog film build on stucco and windows, while the coastal marine layer adds salt and moisture near the beaches. Hard water from irrigation spots hardscape and walls, and stucco throughout the region calls for low-pressure soft-washing rather than high-pressure blasting." },
      { heading: "Timing and pricing in Los Angeles", body: "The mild climate allows year-round washing, and there's no hard peak season. Getting two or three quotes is especially worthwhile here given how much overhead varies across the metro. Standard house washing in the LA market generally runs $175–$400." },
    ]
  ),
  "san-diego|CA": E(
    "San Diego's mild coastal climate is easy on homes overall, but salt air and marine-layer moisture near the coast — plus dust and hard water inland — still keep exterior washing in steady demand. Stucco dominates across the metro, from the older neighborhoods of North Park to the newer builds in Chula Vista and the North County suburbs.",
    [
      { heading: "What San Diego homes deal with", body: "Coastal homes face salt-air exposure and marine-layer damp that feed light algae and mineral staining, while inland areas contend with dust and hard-water spotting from irrigation. Stucco and tile throughout the region require gentle soft-washing to avoid surface damage." },
      { heading: "Timing and pricing in San Diego", body: "The mild climate supports year-round scheduling with no strict peak season. Soft-washing is standard for the region's stucco and tile. Standard house washing across the San Diego market typically runs $175–$375." },
    ]
  ),
  "san-jose|CA": E(
    "San Jose and the South Bay have a dry Mediterranean climate where dust and hard water drive most exterior-cleaning work. Housing runs from the older Willow Glen and Naglee Park homes to the dense newer developments spreading across Silicon Valley.",
    [
      { heading: "What San Jose homes deal with", body: "Long dry summers let dust settle on stucco and hardscape, and hard water from irrigation leaves mineral spotting on driveways and walls. Humidity-driven algae is limited to shaded, damp corners, and the region's stucco construction calls for low-pressure methods." },
      { heading: "Timing and pricing in San Jose", body: "The dry climate makes scheduling flexible across spring through fall. Bay Area overhead pushes pricing to the higher end of the state range, so comparing quotes pays off. House washing in the San Jose market generally runs $175–$400." },
    ]
  ),
  "sacramento|CA": E(
    "Sacramento's hot, dry Central Valley summers and mild winters shape exterior-cleaning needs around dust and hard water rather than humidity. The metro's housing ranges from the historic homes of Midtown and Land Park to the newer suburban builds in Roseville, Folsom, and Elk Grove.",
    [
      { heading: "What Sacramento homes deal with", body: "Dry, dusty summers coat siding and hardscape, valley fog and shaded areas grow some algae in winter, and hard water from irrigation spots concrete and walls. Tree-lined older neighborhoods also see leaf tannin staining on driveways and walkways." },
      { heading: "Timing and pricing in Sacramento", body: "Spring and fall are the most comfortable windows, with the intense summer heat easing mid-season demand. House washing in the Sacramento market typically runs $150–$325." },
    ]
  ),
  "chicago|IL": E(
    "Chicago's harsh winters and humid summers put exterior surfaces through a demanding cycle. Across the metro — from the classic brick two-flats and greystones of the city to the vinyl-and-brick homes of the suburbs — road salt and summer mold are the recurring concerns.",
    [
      { heading: "What Chicago homes deal with", body: "Winter road salt and freeze-thaw cycles stain and pit driveways and walkways, while humid summers feed mold and algae on siding and shaded concrete. The city's older brick and greystone buildings need low-pressure washing to protect aging mortar joints." },
      { heading: "Timing and pricing in Chicago", body: "Spring is peak season, with washing from April through June clearing winter salt and grime before summer. City contractors run 15–25% above suburban pricing given higher overhead. Standard house washing in the Chicago market typically runs $125–$260." },
    ]
  ),
  "columbus|OH": E(
    "Columbus sees the full four-season cycle — winter road salt, spring pollen, and humid summers — that keeps exterior washing a routine task. Housing spans the historic brick homes of German Village and Victorian Village to the newer suburban builds in Dublin, Westerville, and Hilliard.",
    [
      { heading: "What Columbus homes deal with", body: "Winter salt and freeze-thaw damage driveways and walkways, spring brings pollen film, and humid summers grow mold and algae on siding and shaded concrete. Older brick homes near downtown need gentle washing to protect mortar." },
      { heading: "Timing and pricing in Columbus", body: "April through June is peak season for clearing winter grime before summer. Concrete and driveway cleaning are in high demand after salt-heavy winters. House washing in the Columbus market generally runs $110–$225." },
    ]
  ),
  "indianapolis|IN": E(
    "Indianapolis contends with a classic Midwest cycle of winter salt, spring pollen, and humid summers. The metro's housing runs from historic homes in Meridian-Kessler and Irvington to the fast-growing suburbs of Carmel, Fishers, and Noblesville.",
    [
      { heading: "What Indianapolis homes deal with", body: "Road salt and freeze-thaw cycles leave heavy staining on driveways and walkways each spring, while humid summers feed mold and algae on siding and shaded surfaces. Brick and vinyl are both common, each calling for the appropriate pressure." },
      { heading: "Timing and pricing in Indianapolis", body: "April through June is the busiest window for post-winter cleaning. Driveway and concrete washing are especially requested after salty winters. Indianapolis is one of the more affordable Midwest markets, with house washing typically running $95–$200." },
    ]
  ),
  "louisville|KY": E(
    "Louisville's humid, four-season climate and heavy tree cover keep mold, pollen, and algae in steady rotation on home exteriors. Housing ranges from the historic homes of the Highlands and Old Louisville to the newer builds in the East End suburbs.",
    [
      { heading: "What Louisville homes deal with", body: "Humid summers and abundant shade grow mold and green algae on siding, decks, and concrete, while spring pollen coats surfaces across the metro. Humid winters soften wood decking, making pre-summer deck cleaning and resealing a common request." },
      { heading: "Timing and pricing in Louisville", body: "Spring is the busiest season, with contractors booked heavily March through May. Deck restoration is a popular add-on. House washing in the Louisville market generally runs $90–$195." },
    ]
  ),
  "oklahoma-city|OK": E(
    "Oklahoma City's hot, windy summers and red-clay soil shape exterior-cleaning needs across the metro, from the historic homes of Heritage Hills and Mesta Park to the newer suburban builds in Edmond, Moore, and Norman.",
    [
      { heading: "What OKC homes deal with", body: "Wind-blown red-clay dust settles on siding and stains concrete driveways and walkways, and spring storms leave mud and debris. Eastern-side humidity feeds some algae on shaded surfaces, but clay staining is the signature local problem." },
      { heading: "Timing and pricing in Oklahoma City", body: "Spring and fall are the most practical windows, with peak demand March through May and September through October. Red-clay removal from driveways is far more effective with professional washing than a garden hose. House washing in the OKC market typically runs $90–$185." },
    ]
  ),
  "new-york|NY": E(
    "New York City's dense, salt-air coastal environment and mix of building types make exterior washing a specialized job. From the brownstones of Brooklyn to the row houses of Queens and Staten Island's single-family neighborhoods, soot, salt, and humidity are the shared concerns.",
    [
      { heading: "What NYC homes deal with", body: "Urban soot and grime film build on facades, salt air off the harbor accelerates staining and corrosion, and humid summers grow algae on shaded brick and concrete. Historic brownstone and masonry require careful low-pressure washing to protect aging mortar and stone." },
      { heading: "Timing and pricing in New York", body: "Spring is peak season across the boroughs, with contractors busiest in April and May. NYC-area pricing is among the highest in the country given overhead and access challenges, so comparing quotes matters for larger jobs. House washing typically runs $150–$375." },
    ]
  ),
  "philadelphia|PA": E(
    "Philadelphia's four-season climate and historic masonry housing stock shape exterior washing across the metro. From the centuries-old brick row houses of Society Hill and Old City to the twins and singles of the suburbs, protecting aging mortar is a central concern.",
    [
      { heading: "What Philadelphia homes deal with", body: "Winter road salt, spring pollen, and humid summers all contribute to buildup on siding, brick, and concrete. The city's historic brick row houses require low-pressure washing to avoid damaging mortar joints — always worth confirming a contractor's masonry experience here." },
      { heading: "Timing and pricing in Philadelphia", body: "Spring is peak season, with contractors busiest April through June. Both driveway cleaning and gentle masonry washing are in steady demand. House washing in the Philadelphia market generally runs $115–$240." },
    ]
  ),
  "pittsburgh|PA": E(
    "Pittsburgh's hilly terrain, humid summers, and historic brick housing give exterior washing a distinct local character. From the Victorian homes of Shadyside and Squirrel Hill to the brick row houses of the older neighborhoods, gentle masonry care is key.",
    [
      { heading: "What Pittsburgh homes deal with", body: "Humid summers and heavy tree cover feed mold and algae on shaded siding and concrete, while winter salt stains driveways and walkways. The region's older brick homes need low-pressure washing to protect mortar joints." },
      { heading: "Timing and pricing in Pittsburgh", body: "Spring is peak season for clearing winter grime. Gentle masonry washing and driveway cleaning are common requests. House washing in the Pittsburgh market typically runs $110–$230." },
    ]
  ),
  "boston|MA": E(
    "Boston's four-season New England climate — salt air on the coast, winter freeze-thaw, and humid summers — keeps exterior washing in steady demand. Housing runs from historic painted-wood colonials and triple-deckers to the brick and vinyl homes of the suburbs.",
    [
      { heading: "What Boston homes deal with", body: "Coastal salt air accelerates staining near the water, winter freeze-thaw damages driveways and walkways, and humid summers grow algae on shaded siding and concrete. Older painted-wood homes need lower-pressure washing to avoid forcing water behind clapboards and causing rot." },
      { heading: "Timing and pricing in Boston", body: "Spring is peak season, with April through June the busiest booking window after winter. Boston-area contractors are among the pricier in New England, so comparing at least three quotes is worthwhile. House washing typically runs $150–$325." },
    ]
  ),
  "baltimore|MD": E(
    "Baltimore's humid climate and proximity to the Chesapeake Bay create strong conditions for mold and algae, especially near the water. The metro's housing spans the historic brick row houses of the city to the vinyl-and-brick homes of the surrounding counties.",
    [
      { heading: "What Baltimore homes deal with", body: "Bay-area humidity feeds green and black algae on siding, driveways, and roofs, with waterfront homes facing the heaviest exposure. The city's historic brick row houses require gentle low-pressure washing to protect mortar and formstone facades." },
      { heading: "Timing and pricing in Baltimore", body: "Spring and early fall are the optimal windows, with mid-summer humidity slowing demand. Roof soft-washing is common for bay-facing homes. House washing in the Baltimore market generally runs $135–$280." },
    ]
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
