type StateProfile = {
  climate: string;
  timing: string;
  tip: string;
};

const STATE_PROFILES: Record<string, StateProfile> = {
  AK: {
    climate: "Alaska's short outdoor season and damp conditions allow moss, lichen, and algae to take hold quickly on driveways, decks, and siding.",
    timing: "Late spring through early fall — May through September — is the only practical window for exterior washing given the short frost-free season.",
    tip: "Soft-wash treatments are especially valuable here, where moss and lichen can permanently damage wood surfaces if left untreated.",
  },
  AL: {
    climate: "Alabama's hot, humid summers create persistent conditions for mold, mildew, and algae to build up on driveways, siding, and roofs.",
    timing: "Spring and fall are the most popular times to schedule — avoiding peak summer heat while clearing pollen and post-winter grime.",
    tip: "Roof soft-washing is a common service in Alabama, where black algae streaking is nearly universal on asphalt shingles.",
  },
  AR: {
    climate: "Arkansas's hot, humid summers and mild winters create persistent mold and mildew conditions on home exteriors across the state.",
    timing: "Spring is the busiest season — typically March through May — when homeowners clear pollen, winter grime, and early mold growth.",
    tip: "Concrete and driveway cleaning is especially popular in Arkansas, where red clay soil tracks easily onto driveways and walkways.",
  },
  AZ: {
    climate: "Arizona's desert climate means dust, sand, and seasonal monsoon mudstains are the primary culprits — humidity-driven mold is far less common than in eastern states.",
    timing: "Fall and winter are the most comfortable times to schedule in Phoenix-area cities; spring and fall work well for Tucson and higher-elevation locations.",
    tip: "Stucco and painted masonry are common in Arizona, so most contractors use low-pressure soft-wash techniques to avoid surface damage.",
  },
  CA: {
    climate: "California's climate varies from the wet, moss-prone coast to the dry, dusty Central Valley — cleaning needs differ significantly by region.",
    timing: "Spring through early fall is peak season across most of California; in Southern California, washing can be scheduled year-round given the mild winters.",
    tip: "Prices in the Bay Area and Los Angeles typically run 25–40% higher than the national average due to higher contractor overhead costs.",
  },
  CO: {
    climate: "Colorado's dry climate limits mold and mildew, but pine sap, wildfire smoke residue, and dust accumulate on driveways and siding, particularly on the Front Range.",
    timing: "Spring and summer are peak season; scheduling in April through June allows for post-winter cleaning before the heat of July and August.",
    tip: "At altitude, UV exposure accelerates fading on wood surfaces — periodic pressure washing before re-staining extends the life of wood decks and fences significantly.",
  },
  CT: {
    climate: "Connecticut's four-season climate brings spring pollen, summer humidity, and salt air for coastal communities — all contributing to exterior buildup on homes.",
    timing: "Spring is the peak season; April and May are the most popular months to schedule after winter salt and debris have settled.",
    tip: "Older New England homes with painted wood siding require lower-pressure washing to avoid forcing water behind siding and causing rot.",
  },
  FL: {
    climate: "Florida's warm, humid climate is one of the most demanding environments for home exteriors in the country — mold, algae, and mildew grow year-round and can stain surfaces quickly.",
    timing: "Power washing is effective in any Florida season, though scheduling in fall avoids peak summer humidity and is generally easier to book.",
    tip: "Roof soft-washing is especially important in Florida, where algae and black streaking can shorten shingle lifespan by years and affect insurance eligibility.",
  },
  GA: {
    climate: "Georgia's hot summers and mild winters mean mold, pollen, and algae accumulate heavily on home exteriors, particularly on north-facing siding and shaded driveways.",
    timing: "Spring is peak season — April and May bring the heaviest pollen, making post-pollen-season washing one of the most requested services statewide.",
    tip: "Atlanta-area contractors book out two to three weeks during spring; securing quotes in March gives you better availability and often better pricing.",
  },
  IA: {
    climate: "Iowa's continental climate brings harsh winters with road salt and freeze-thaw cycles that leave significant buildup on driveways and walkways.",
    timing: "Spring and early summer are peak season — May and June are the busiest months as homeowners clear winter grime after the ground thaws.",
    tip: "Concrete driveway cleaning is a high-priority service in Iowa, where salt and freeze-thaw cycles leave heavy white residue that professional washing removes cleanly.",
  },
  ID: {
    climate: "Idaho's climate varies from the wet, mild conditions of the Panhandle to the dry high-desert of the Snake River Plain — moss is common in the north, dust in the south.",
    timing: "Late spring and summer are the primary season; Boise-area homeowners typically schedule in May and June after spring rains.",
    tip: "Northern Idaho homes near lakes and forests often need more frequent washing due to heavy moss and lichen growth on driveways and roofs.",
  },
  IL: {
    climate: "Illinois's harsh winters with road salt and freeze-thaw cycles leave driveways and walkways heavily stained, while humid summers promote mold growth on siding.",
    timing: "Spring is the peak season; homeowners typically schedule in April through June, after the last freeze and before summer heat.",
    tip: "Chicago-area prices run 15–25% above the state average due to contractor overhead; suburban communities generally offer more competitive pricing.",
  },
  IN: {
    climate: "Indiana's continental climate means heavy spring pollen, humid summer mold growth, and winter salt damage to driveways are all common concerns.",
    timing: "April through June is peak booking season — post-winter cleaning is in highest demand and weather is most cooperative.",
    tip: "Concrete and brick driveways in Indiana frequently benefit from annual washing to prevent permanent staining from road salt and organic buildup.",
  },
  KS: {
    climate: "Kansas's dry continental climate means dust and wind-blown debris are the primary sources of exterior buildup, with occasional severe weather leaving additional debris.",
    timing: "Spring and early fall are ideal; summer heat over 100°F makes mid-July and August the slowest scheduling months.",
    tip: "Limestone and native stone features common in older Kansas homes require careful low-pressure washing to avoid surface damage.",
  },
  KY: {
    climate: "Kentucky's humid, four-season climate promotes mold and pollen buildup on driveways, decks, and siding — particularly in areas with heavy tree cover.",
    timing: "Spring is the busiest season in Kentucky, with Louisville and Lexington contractors heavily booked from March through May.",
    tip: "Deck restoration is a popular add-on service in Kentucky, where humid winters soften wood decking and make pre-summer cleaning and resealing a high-value service.",
  },
  LA: {
    climate: "Louisiana's subtropical climate — among the highest humidity in the country — creates aggressive mold, algae, and mildew growth on virtually every exposed surface.",
    timing: "Fall and winter are often the most comfortable scheduling window; spring works well too, though summer heat makes it an off-peak period.",
    tip: "New Orleans and Gulf Coast homes often benefit from washing two to three times per year due to extreme humidity and proximity to salt air.",
  },
  MA: {
    climate: "Massachusetts's four-season climate brings spring pollen, salt air for coastal communities, and winter freeze-thaw cycles that take a toll on driveways and walkways.",
    timing: "Spring is the peak season — April through June is when most homeowners schedule their annual wash after winter.",
    tip: "Boston-area contractors are among the pricier in New England; comparing at least three quotes before committing is especially worthwhile here.",
  },
  MD: {
    climate: "Maryland's humid climate and proximity to the Chesapeake Bay create strong mold and algae growth conditions, particularly for homes near the water.",
    timing: "Spring and early fall are the optimal windows; mid-summer humidity makes June through August slower for scheduling.",
    tip: "Bay-facing homes in Maryland often require soft-wash roof treatments annually to combat algae growth accelerated by salt air and humidity.",
  },
  MI: {
    climate: "Michigan's harsh winters with heavy road salt and freeze-thaw cycles leave serious staining on driveways and walkways, while lake-effect humidity promotes mold on siding.",
    timing: "Late spring through early summer — May and June — is peak season after winter salt dries and temperatures stabilize.",
    tip: "Detroit metro contractors stay booked through spring; scheduling in April gets you better availability and often better pricing.",
  },
  MN: {
    climate: "Minnesota's long, cold winters leave driveways heavily stained with road salt and sand, making spring driveway cleaning one of the highest-demand services in the state.",
    timing: "May and June are the peak scheduling months; washing before late June typically yields the most responsive pricing and availability.",
    tip: "Moss and lichen growth on roofs are increasingly common in Minnesota's wetter microclimates — early treatment prevents permanent shingle damage.",
  },
  MO: {
    climate: "Missouri's continental climate with hot, humid summers and cold winters means mold, salt stains, and pollen are all common problems for home exteriors.",
    timing: "Spring is the busiest season — April and May — with fall (September through October) being a quieter but equally effective time to schedule.",
    tip: "Kansas City and St. Louis area pricing tends to run 10–15% higher than smaller Missouri cities, but the competitive market rewards getting multiple quotes.",
  },
  MS: {
    climate: "Mississippi's hot, humid climate is one of the most aggressive environments for exterior mold and algae growth, with year-round accumulation on virtually all surfaces.",
    timing: "Fall and spring are the most comfortable scheduling windows; summer heat and humidity are intense enough that many contractors scale back outdoor work in July and August.",
    tip: "Roof and siding soft-washing is especially important in Mississippi, where algae and mold can penetrate porous surfaces and cause lasting damage if left untreated.",
  },
  MT: {
    climate: "Montana's cold, dry climate limits mold growth, but pine sap, lichen on masonry, and post-fire smoke residue are common problems on home exteriors.",
    timing: "Late spring through early fall — June through September — is the practical window given Montana's short frost-free season.",
    tip: "Log homes and natural wood siding common in Montana require gentle soft-wash treatment; high pressure can force water into log joints and cause rot.",
  },
  NC: {
    climate: "North Carolina's humid, four-season climate creates heavy pollen seasons and persistent mold growth, particularly in the Piedmont and Coastal Plain regions.",
    timing: "Spring is the primary season — Charlotte, Raleigh, and Durham contractors are busiest from March through May, so booking in advance is recommended.",
    tip: "North Carolina's heavy pollen falls between late February and May; scheduling a wash in late May after peak pollen is the most common approach for homeowners.",
  },
  ND: {
    climate: "North Dakota's extreme continental climate — harsh winters and hot, dry summers — leaves driveways and walkways heavily stained with road salt and sand each spring.",
    timing: "May and June are the peak scheduling months after frost leaves the ground and before summer heat sets in.",
    tip: "Concrete driveways in North Dakota benefit from post-winter washing to remove road salt before it continues to damage the surface through spring and summer.",
  },
  NE: {
    climate: "Nebraska's continental climate with cold winters and hot, windy summers means road salt and wind-blown dust are the primary contributors to exterior buildup.",
    timing: "Spring is peak season, with May being the most popular month for post-winter cleaning in Omaha and Lincoln.",
    tip: "Concrete driveways and sidewalks in Nebraska often show significant salt staining by March; annual spring washing prevents long-term surface degradation.",
  },
  NJ: {
    climate: "New Jersey's coastal climate — heavy salt air in shore communities and high humidity inland — creates strong mold, algae, and mineral staining on home exteriors.",
    timing: "Spring and early fall are the most popular scheduling windows; shore-area communities see high demand after the winter off-season.",
    tip: "New Jersey contractors are among the pricier in the Northeast; shore-town homes often benefit from the most complete treatment packages given constant salt exposure.",
  },
  NM: {
    climate: "New Mexico's dry, high-altitude desert climate means dust, sand, and monsoon mudstains are the primary sources of exterior buildup rather than mold or mildew.",
    timing: "Spring and fall are ideal scheduling windows; the monsoon season (July through September) brings mud stains that benefit from professional cleaning afterward.",
    tip: "Adobe and stucco surfaces common in New Mexico require low-pressure soft-wash techniques; high-pressure water can permanently damage these traditional materials.",
  },
  NV: {
    climate: "Nevada's hot, arid desert climate means dust buildup and hard water mineral staining are the primary concerns; mold and algae are uncommon except in shaded, irrigated areas.",
    timing: "Fall and spring are the most comfortable scheduling windows in the Las Vegas valley; summer temperatures above 110°F make scheduling and outdoor work more difficult.",
    tip: "Hard water mineral deposits are a common problem on driveways and hardscaping in Nevada; professional washing removes calcium buildup that garden hoses cannot.",
  },
  NY: {
    climate: "New York's climate ranges from humid, salt-air coastal conditions in the city and Long Island to heavy snow and freeze-thaw damage upstate — each region has distinct washing needs.",
    timing: "Spring is the peak season across the state; NYC-area contractors are busiest in April and May, while upstate scheduling extends into June.",
    tip: "New York City area pricing is among the highest in the country; comparing quotes from multiple contractors is especially worthwhile for larger jobs.",
  },
  OH: {
    climate: "Ohio's continental climate brings heavy road salt in winter, spring pollen, and summer humidity — a combination that drives consistent demand for exterior washing.",
    timing: "April through June is peak season; Columbus, Cleveland, and Cincinnati all see high contractor demand in spring that can push booking times out two to three weeks.",
    tip: "Concrete driveways and walkways in Ohio accumulate significant salt damage over winter; annual spring washing before summer sealing is the most effective maintenance routine.",
  },
  OK: {
    climate: "Oklahoma's continental climate features hot, windy summers with red clay dust and occasional severe weather — combined with high humidity in the east, these create persistent exterior staining.",
    timing: "Spring and fall are the most practical scheduling windows; Oklahoma City and Tulsa contractors see peak demand from March through May and September through October.",
    tip: "Red clay soil is notorious in Oklahoma for tracking onto driveways and sidewalks; professional washing is far more effective than DIY hosing for clay removal.",
  },
  OR: {
    climate: "Oregon's wet climate — particularly in the Willamette Valley and coast — creates some of the most persistent moss and algae problems on roofs and driveways in the country.",
    timing: "Late summer and early fall — August through October — are the best times to schedule in western Oregon, when surfaces can be properly treated and dried.",
    tip: "Moss on Oregon roofs is not just cosmetic; it retains moisture and causes shingle deterioration. Annual or biannual soft-wash treatment is standard preventive maintenance for Portland-area homeowners.",
  },
  PA: {
    climate: "Pennsylvania's four-season climate brings heavy road salt, spring pollen, and humid summers — making both driveway cleaning and siding washing high-priority annual tasks.",
    timing: "Spring is the peak season; Philadelphia and Pittsburgh contractors are busiest from April through June.",
    tip: "Older brick rowhouses in Philadelphia and Pittsburgh require low-pressure washing to avoid damaging mortar joints — always confirm your contractor has experience with historic masonry.",
  },
  RI: {
    climate: "Rhode Island's compact coastal geography means salt air, humidity, and northeast weather all contribute to significant mold, algae, and mineral staining on home exteriors.",
    timing: "Spring and early fall are the most popular scheduling windows; Providence-area contractors are busiest in April and May.",
    tip: "Coastal Rhode Island homes face more aggressive salt-air exposure than inland properties; annual washing is a higher priority for homes within a mile of the water.",
  },
  SC: {
    climate: "South Carolina's subtropical climate — especially in the Lowcountry — is among the most demanding in the country for mold, algae, and mildew growth on all exterior surfaces.",
    timing: "Spring and fall are the most popular scheduling windows; Charleston and Myrtle Beach coastal communities see year-round demand given the aggressive humidity and salt air.",
    tip: "Myrtle Beach and Hilton Head area homes are exposed to intense salt air that accelerates mold growth; biannual washing is often recommended by local contractors.",
  },
  SD: {
    climate: "South Dakota's continental climate with cold winters and high winds means road salt and wind-driven dust are the primary contributors to exterior staining.",
    timing: "Spring is the peak window — May and early June — after winter salt has dried and temperatures stabilize for outdoor work.",
    tip: "Concrete driveways in South Dakota show significant salt staining after each winter; annual spring washing before July prevents accelerated surface cracking.",
  },
  TN: {
    climate: "Tennessee's humid, four-season climate creates heavy pollen seasons and consistent mold and algae growth, particularly in the Nashville Basin and Great Smoky Mountain foothills.",
    timing: "Spring is the busiest season — Nashville and Memphis contractors see peak demand from March through May — with fall a popular secondary window.",
    tip: "Deck restoration is a high-demand service in Tennessee, where humid summers and rainy springs take a significant toll on wood decks and make pre-summer cleaning and resealing a worthwhile investment.",
  },
  TX: {
    climate: "Texas's climate varies enormously — humid Gulf Coast conditions in Houston, dry desert in El Paso, and four seasons in the Panhandle — so cleaning needs and timing differ by region.",
    timing: "Spring and fall are the most practical scheduling windows across most of Texas; summer heat makes July and August slower, with demand easing and better pricing available.",
    tip: "Houston and coastal Texas homeowners deal with some of the most aggressive mold and algae conditions in the country; Dallas and Austin see more moderate buildup but still benefit from annual cleaning.",
  },
  UT: {
    climate: "Utah's arid climate means dust, pollen, and hard water mineral deposits are the primary sources of buildup; mold is uncommon except in shaded, irrigated areas.",
    timing: "Spring and summer are the most popular scheduling windows in Salt Lake City and Provo; the dry climate makes scheduling more flexible than in humid states.",
    tip: "Hard water is a significant issue throughout Utah, and professional washing with appropriate solutions removes white mineral deposits that regular hosing cannot.",
  },
  VA: {
    climate: "Virginia's four-season climate brings spring pollen, summer humidity, and salt air for coastal communities — all driving consistent demand for exterior cleaning.",
    timing: "Spring is peak season; Northern Virginia contractors serving the DC suburbs are especially busy from April through June.",
    tip: "Northern Virginia and DC-area contractors tend to be priced higher than the state average; comparing three quotes is particularly worthwhile given the competitive market.",
  },
  WA: {
    climate: "Western Washington's wet climate creates some of the heaviest moss and algae growth conditions in the country, particularly on roofs and driveways in the Seattle and Tacoma areas.",
    timing: "Late summer — July through September — is the ideal scheduling window in western Washington, when surfaces can be properly treated and allowed to dry.",
    tip: "Moss treatment in Washington is considered preventive maintenance, not just cosmetic. Untreated moss holds moisture and can shorten asphalt shingle life by ten or more years.",
  },
  WI: {
    climate: "Wisconsin's cold winters leave heavy road salt staining on driveways and walkways, while humid summers promote mold and algae growth on siding and decks.",
    timing: "May and June are the peak scheduling months after winter salt dries and spring weather stabilizes for outdoor work.",
    tip: "Milwaukee-area contractors are heavily booked through May; scheduling in April gets you better availability and sometimes better pricing for spring cleaning.",
  },
  WV: {
    climate: "West Virginia's humid climate, heavy tree cover, and frequent rainfall create persistent mold, algae, and leaf-stain conditions on driveways and home exteriors.",
    timing: "Spring and early summer are the most popular scheduling windows; late fall is a quieter period that can be cost-effective for pre-winter cleaning.",
    tip: "Extensive tree canopy in West Virginia means shaded driveways and roofs accumulate moss and algae faster than similar surfaces in more open environments.",
  },
  WY: {
    climate: "Wyoming's arid, high-altitude climate limits mold and algae but creates dust buildup, pine sap staining, and UV-accelerated fading on home exteriors.",
    timing: "Late spring through early fall — June through September — is the practical window given Wyoming's harsh winters and limited contractor availability.",
    tip: "Wind-blown dust and road debris stain concrete driveways in Wyoming quickly during dry months; spring washing after winter sand removal is the most effective timing.",
  },
};

const DEFAULT_PROFILE: StateProfile = {
  climate: "Local climate conditions can accelerate mold, algae, and general grime buildup on home exteriors — making periodic professional washing a worthwhile investment.",
  timing: "Spring and fall are typically the most popular scheduling windows, when temperatures are moderate and demand is steady.",
  tip: "Getting multiple quotes before committing ensures competitive pricing; most reputable contractors provide free estimates.",
};

export function getCityContext(stateAbbr: string): StateProfile {
  return STATE_PROFILES[stateAbbr] ?? DEFAULT_PROFILE;
}
