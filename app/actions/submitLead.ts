"use server";

import { Resend } from "resend";
import { createServerClient } from "@/lib/supabase";

interface LeadPayload {
  full_name: string;
  phone: string;
  email: string;
  zip_code: string;
  property_type: string;
  services: string[];
  property_size: string;
  notes: string;
  source: string;
}

export async function submitLead(payload: LeadPayload) {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("leads")
    .insert({
      services: payload.services,
      property_type: payload.property_type,
      property_size: payload.property_size,
      zip_code: payload.zip_code,
      full_name: payload.full_name,
      phone: payload.phone,
      email: payload.email,
      notes: payload.notes ?? "",
      source: payload.source ?? "/",
      status: "new",
    })
    .select("id")
    .single();

  if (error) {
    console.error("submitLead db error:", error);
    throw new Error("Failed to submit lead");
  }

  // Fire-and-forget notification — never let this kill the submission
  sendLeadNotification(payload, data.id).catch((e) =>
    console.error("Lead notification failed:", e)
  );

  return { success: true, leadId: data.id };
}

async function sendLeadNotification(payload: LeadPayload, leadId: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";
  const to = process.env.LEAD_NOTIFY_EMAIL ?? "jeffkirkjr@gmail.com";

  const serviceList = payload.services.join(", ") || "—";

  await resend.emails.send({
    from,
    to,
    subject: `New lead: ${payload.full_name} — ${payload.zip_code}`,
    html: `
      <h2 style="margin:0 0 16px">New WashPro Lead</h2>
      <table style="border-collapse:collapse;width:100%;max-width:480px;font-family:sans-serif;font-size:14px">
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;width:140px">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${payload.full_name}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${payload.phone}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${payload.email}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">ZIP</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${payload.zip_code}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Services</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${serviceList}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Property</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${payload.property_type} — ${payload.property_size}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Notes</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${payload.notes || "—"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Lead ID</td><td style="padding:8px 12px;color:#94a3b8;font-size:12px">${leadId}</td></tr>
      </table>
    `,
  });
}
