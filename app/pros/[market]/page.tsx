import Link from "next/link";
import { notFound } from "next/navigation";
import { Radar, Clock, Mail, TrendingUp, Trophy, MapPin, ArrowRight } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import { siteConfig } from "@/config/site";
import { cityToSlug } from "@/lib/directory";
import { MARKETS, resolveMarket } from "@/lib/market";
import { createServerClient } from "@/lib/supabase";

const PRODUCT = "WashPro Signal";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

// Prerender the original high-density metros; the rest render on demand.
export async function generateStaticParams() {
  return MARKETS.slice(0, 20).map((m) => ({ market: m.slug }));
}
export const dynamicParams = true;
export const revalidate = 86400;

async function getMarketStats(city: string, state: string) {
  const sb = createServerClient();
  const [{ count }, { data: rated }] = await Promise.all([
    sb.from("companies").select("id", { count: "exact", head: true }).eq("city", city).eq("state", state).eq("is_approved", true),
    sb.from("companies").select("business_name, rating, review_count").eq("city", city).eq("state", state).eq("is_approved", true).gt("review_count", 0).not("rating", "is", null).order("rating", { ascending: false }).limit(100),
  ]);
  const total = count ?? 0;
  const r = rated ?? [];
  const avg = r.length ? (r.reduce((s, x) => s + Number(x.rating), 0) / r.length).toFixed(2) : null;
  return { total, ratedCount: r.length, avg, leader: r[0] ?? null };
}

export async function generateMetadata({ params }: { params: Promise<{ market: string }> }) {
  const { market } = await params;
  const m = resolveMarket(market);
  if (!m) return {};
  const title = `${PRODUCT} — ${m.city}, ${m.stateAbbr} market brief for ${siteConfig.verticalName} pros`;
  return {
    title,
    description: `See what's moving in the ${m.city} ${siteConfig.verticalName.toLowerCase()} market — competitor count, review gaps, and who's setting the bar. Free weekly brief for local pros.`,
    alternates: { canonical: `${SITE_URL}/pros/${market}` },
    openGraph: { title, url: `${SITE_URL}/pros/${market}`, type: "website" as const },
  };
}

export default async function MarketFunnel({ params }: { params: Promise<{ market: string }> }) {
  const { market } = await params;
  const m = resolveMarket(market);
  if (!m) notFound();

  const { total, ratedCount, avg, leader } = await getMarketStats(m.city, m.stateAbbr);
  if (total === 0) notFound();

  const ratedPct = total ? Math.round((ratedCount / total) * 100) : 0;
  const directoryHref = `/${cityToSlug(m.city, m.stateAbbr)}`;

  const insights = [
    {
      icon: MapPin,
      title: `${total} pros are competing in ${m.city}`,
      body: `That's who you're up against for every ${siteConfig.verticalName.toLowerCase()} search in the metro. The Signal tracks who joins, who drops off, and who's gaining ground — every week.`,
    },
    {
      icon: TrendingUp,
      title: ratedPct <= 25
        ? `Only ${ratedCount} of ${total} have visible reviews — reputation is wide open`
        : `${ratedPct}% of pros here have public reviews`,
      body: ratedPct <= 25
        ? `Most crews in ${m.city} have no public rating at all. In a market this quiet on reviews, the first to build 15–20 becomes the obvious choice in search. The Signal shows you who's pulling ahead so you move first.`
        : `Reviews are how customers pick here. The Signal flags every week a competitor's rating moves — up or down — so you know where the openings are.`,
    },
    leader
      ? {
          icon: Trophy,
          title: `The one to beat: ${leader.business_name}`,
          body: `${leader.rating}★ across ${leader.review_count} reviews${avg ? ` (market average ${avg}★)` : ""}. The Signal watches the leaders so you can learn exactly what's winning them jobs.`,
        }
      : {
          icon: Trophy,
          title: `"Best in ${m.city}" is unclaimed`,
          body: `No pro here has built a standout public reputation yet. That slot is winnable right now — the Signal helps you take it before someone else does.`,
        },
  ];

  return (
    <main className="flex flex-col flex-1">
      <header className="w-full page-px py-4 flex items-center justify-between" style={{ background: "var(--cd-d)" }}>
        <Link href="/pros" className="font-display font-extrabold text-white text-xl tracking-tight">{PRODUCT}</Link>
        <Link href={directoryHref} className="text-xs font-semibold transition-colors hover:text-white" style={{ color: "var(--cp-xl)" }}>
          {m.city} directory →
        </Link>
      </header>

      <section className="hero-clip page-px section-py text-white" style={{ background: "linear-gradient(160deg, var(--cd) 0%, var(--cd-d) 100%)" }}>
        <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5" style={{ background: "rgba(255,255,255,0.1)", color: "var(--cp-xl)" }}>
              <Radar className="w-3.5 h-3.5" /> {m.city}, {m.stateAbbr} · {siteConfig.verticalName} pros
            </span>
            <h1 className="font-display font-extrabold leading-[1.05] mb-5" style={{ fontSize: "var(--fs-hero)" }}>
              What&apos;s moving in the<br />{m.city} market this week.
            </h1>
            <p className="text-lg mb-6 max-w-xl" style={{ color: "#cbd5e1" }}>
              {total} {siteConfig.verticalName.toLowerCase()} pros compete in {m.city}. {PRODUCT} sends you the handful of things that changed each week — new competitors, reputation shifts, demand spikes — so you can act before they do.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "var(--cp-xl)" }}>
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> 2-minute read</span>
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> {m.city}-specific</span>
              <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> Every Monday</span>
            </div>
          </div>
          <div id="waitlist">
            <p className="font-semibold mb-3 text-center lg:text-left">Get the {m.city} brief — free early access</p>
            <WaitlistForm source={`/pros/${market}`} defaultCity={m.city} defaultState={m.stateAbbr} />
          </div>
        </div>
      </section>

      <section className="page-px section-py">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-center heading-mb" style={{ fontSize: "var(--fs-display)", color: "var(--cd)" }}>
            A live look at your market
          </h2>
          <div className="grid gap-4">
            {insights.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-[#e2e8f0] card-pad">
                <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "var(--cl)", color: "var(--cp)" }}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: "var(--cd)" }}>{title}</h3>
                  <p className="text-[#64748b] text-[0.95rem]">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#94a3b8] mt-6">
            Figures pulled live from {total} {m.city} listings. The weekly brief adds week-over-week change, new-business permits, and weather-driven demand for your ZIPs.
          </p>
        </div>
      </section>

      <section className="page-px section-py text-white" style={{ background: "linear-gradient(160deg, var(--cd) 0%, var(--cd-d) 100%)" }}>
        <div className="max-w-xl mx-auto text-center mb-8">
          <h2 className="font-display font-extrabold mb-3" style={{ fontSize: "var(--fs-display)" }}>Own {m.city} before your competitors do</h2>
          <p className="text-lg" style={{ color: "#cbd5e1" }}>Free while in early access. Founding pricing locks in after. No credit card.</p>
        </div>
        <div className="max-w-xl mx-auto">
          <WaitlistForm source={`/pros/${market}#footer`} defaultCity={m.city} defaultState={m.stateAbbr} />
        </div>
        <p className="text-center mt-8">
          <Link href={directoryHref} className="inline-flex items-center gap-1 text-sm hover:text-white" style={{ color: "var(--cp-xl)" }}>
            See the {m.city} pro directory <ArrowRight className="w-4 h-4" />
          </Link>
        </p>
      </section>
    </main>
  );
}
