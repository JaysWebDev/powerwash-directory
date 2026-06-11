import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const brand = `${siteConfig.brand} ${siteConfig.brandSuffix}`;
const domain = siteConfig.domain;
const updated = "June 8, 2025";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${domain}`;

export const metadata: Metadata = {
  title: `Privacy Policy | ${brand}`,
  description: `Privacy policy for ${brand} — how we collect, use, and protect your personal information when you use our free directory service.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title: `Privacy Policy | ${brand}`,
    description: `Privacy policy for ${brand} — how we collect, use, and protect your personal information.`,
    url: `${SITE_URL}/privacy`,
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "var(--cp)" }}>
        ← Back to home
      </Link>

      <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--cd)" }}>
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: {updated}</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>1. Who We Are</h2>
          <p>
            {brand} (<strong>{domain}</strong>) is a directory connecting homeowners with
            local {siteConfig.verticalProNoun}. We do not perform services ourselves — we
            help you find and contact local professionals.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>2. Information We Collect</h2>
          <p>We collect information you provide directly:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Name, email address, and phone number when you request a quote</li>
            <li>ZIP code or city when you search for local pros</li>
            <li>Property type and service details you include in quote requests</li>
          </ul>
          <p className="mt-3">We also collect limited technical data automatically:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Browser type, device type, and referring URL</li>
            <li>Pages visited and time spent on the site</li>
            <li>IP address (used for fraud prevention only, not stored long-term)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To match you with local {siteConfig.verticalProNoun} and forward your quote request</li>
            <li>To respond to inquiries you send us</li>
            <li>To improve the directory and user experience</li>
            <li>To detect and prevent fraudulent or abusive activity</li>
          </ul>
          <p className="mt-3">We do not sell your personal information to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>4. Google AdSense &amp; Advertising</h2>
          <p>
            This site uses Google AdSense to display advertisements. Google and its partners
            may use cookies to serve ads based on your prior visits to this site or other
            websites. Google&apos;s use of advertising cookies enables it and its partners to
            serve ads based on your visit to this and other sites.
          </p>
          <p className="mt-3">You may opt out of personalized advertising by visiting:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--cp)" }}
              >
                Google Ads Settings
              </a>
            </li>
            <li>
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--cp)" }}
              >
                Digital Advertising Alliance opt-out
              </a>
            </li>
          </ul>
          <p className="mt-3">
            For more information on how Google uses data when you use our site, visit{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--cp)" }}
            >
              Google&apos;s Privacy &amp; Terms
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>5. Cookies</h2>
          <p>
            We and our advertising partners (including Google) use cookies — small text files
            stored in your browser — to remember preferences and deliver relevant ads. You can
            control cookies through your browser settings. Disabling cookies may affect some
            site functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>6. Data Sharing</h2>
          <p>When you submit a quote request, your contact information is shared with:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>The local service professionals you are matched with</li>
          </ul>
          <p className="mt-3">
            We do not share your data with any other third party except as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>7. Data Retention</h2>
          <p>
            Quote request submissions are retained for up to 12 months for service matching
            purposes, then deleted. Technical log data is retained for up to 90 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>8. Children&apos;s Privacy</h2>
          <p>
            This site is not directed at children under 13. We do not knowingly collect
            personal information from children. If you believe a child has submitted
            information to us, please contact us and we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>9. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of any personal information
            we hold about you by contacting us below. We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>10. Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href={`mailto:privacy@${domain}`} style={{ color: "var(--cp)" }}>
              privacy@{domain}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--cd)" }}>11. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes are effective when posted.
            Continued use of the site after changes constitutes acceptance.
          </p>
        </section>

      </div>
    </main>
  );
}
