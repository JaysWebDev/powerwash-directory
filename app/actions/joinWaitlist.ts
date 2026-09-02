"use server";

import { Resend } from "resend";
import { createServerClient } from "@/lib/supabase";

export interface WaitlistPayload {
  email: string;
  business_name: string;
  contact_name: string;
  city: string;
  state: string;
  service_focus: string;
  source: string;
}

export interface WaitlistResult {
  success: boolean;
  alreadyJoined?: boolean;
  error?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(payload: WaitlistPayload): Promise<WaitlistResult> {
  const email = payload.email?.trim().toLowerCase() ?? "";
  if (!EMAIL_RE.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const supabase = createServerClient();

  const business = payload.business_name?.trim() || "";
  const market = [payload.city?.trim(), payload.state?.trim()].filter(Boolean).join(", ");

  // Stored in the existing `leads` table (no new table needed → no Supabase DDL
  // access required). Distinguished by the `pro-waitlist` source tag so pro
  // signups stay cleanly filterable from homeowner quote leads.
  const { error } = await supabase.from("leads").insert({
    full_name: payload.contact_name?.trim() || business || email,
    phone: "",
    email,
    zip_code: market,
    services: payload.service_focus?.trim() ? [payload.service_focus.trim()] : [],
    notes: `WashPro Signal waitlist${business ? ` · ${business}` : ""}${market ? ` · ${market}` : ""}`,
    source: `pro-waitlist ${payload.source || "/pros"}`.trim(),
    status: "new",
  });

  if (error) {
    console.error("joinWaitlist db error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  // Fire-and-forget notification — never let this kill the signup.
  sendWaitlistNotification(payload, email).catch((e) =>
    console.error("Waitlist notification failed:", e)
  );

  return { success: true };
}

async function sendWaitlistNotification(payload: WaitlistPayload, email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";
  const to = process.env.LEAD_NOTIFY_EMAIL ?? "jeffkirkjr@gmail.com";

  const market = [payload.city, payload.state].filter(Boolean).join(", ") || "—";

  await resend.emails.send({
    from,
    to,
    subject: `WashPro Signal waitlist: ${payload.business_name || email}`,
    html: `
      <h2 style="margin:0 0 16px">New WashPro Signal Waitlist Signup</h2>
      <table style="border-collapse:collapse;width:100%;max-width:480px;font-family:sans-serif;font-size:14px">
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;width:140px">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${email}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Business</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${payload.business_name || "—"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Contact</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${payload.contact_name || "—"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Market</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${market}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Focus</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${payload.service_focus || "—"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Source</td><td style="padding:8px 12px;color:#94a3b8;font-size:12px">${payload.source}</td></tr>
      </table>
    `,
  });
}
