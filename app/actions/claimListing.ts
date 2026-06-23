"use server";

import { Resend } from "resend";
import { createServerClient } from "@/lib/supabase";

export interface ClaimFormData {
  company_id: string;
  company_slug: string;
  company_name: string;
  claimant_name: string;
  claimant_email: string;
  claimant_phone: string;
  claimant_role: string;
}

export async function claimListing(data: ClaimFormData): Promise<{ success: boolean; error?: string }> {
  const supabase = createServerClient();

  // Check if already has a pending or approved claim
  const { data: existing } = await supabase
    .from("claim_requests")
    .select("id, status")
    .eq("company_id", data.company_id)
    .in("status", ["pending", "approved"])
    .maybeSingle();

  if (existing?.status === "approved") {
    return { success: false, error: "This listing has already been claimed." };
  }
  if (existing?.status === "pending") {
    return { success: false, error: "A claim request for this listing is already under review." };
  }

  const { data: inserted, error } = await supabase.from("claim_requests").insert({
    company_id: data.company_id,
    company_slug: data.company_slug,
    company_name: data.company_name,
    claimant_name: data.claimant_name,
    claimant_email: data.claimant_email,
    claimant_phone: data.claimant_phone || null,
    claimant_role: data.claimant_role,
    status: "pending",
  }).select("id").single();

  if (error) {
    console.error("claimListing error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  sendClaimNotification(data, inserted.id).catch((e) =>
    console.error("Claim notification failed:", e)
  );

  return { success: true };
}

async function sendClaimNotification(data: ClaimFormData, claimId: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";
  const to = process.env.LEAD_NOTIFY_EMAIL ?? "jeffkirkjr@gmail.com";

  await resend.emails.send({
    from,
    to,
    subject: `Claim request: ${data.company_name} — ${data.claimant_name}`,
    html: `
      <h2 style="margin:0 0 16px">New Listing Claim Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:480px;font-family:sans-serif;font-size:14px">
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;width:140px">Business</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${data.company_name}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${data.claimant_name}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${data.claimant_email}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${data.claimant_phone || "—"}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Role</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${data.claimant_role}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Listing</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0"><a href="https://find.outdoorwashing.com/companies/${data.company_slug}">View listing</a></td></tr>
        <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600">Claim ID</td><td style="padding:8px 12px;color:#94a3b8;font-size:12px">${claimId}</td></tr>
      </table>
      <p style="margin-top:16px;font-size:13px;color:#64748b">To approve: run <code>select approve_claim('${claimId}')</code> in the Supabase SQL editor.</p>
    `,
  });
}
