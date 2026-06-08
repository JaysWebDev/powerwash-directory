"use server";

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

  const { error } = await supabase.from("claim_requests").insert({
    company_id: data.company_id,
    company_slug: data.company_slug,
    company_name: data.company_name,
    claimant_name: data.claimant_name,
    claimant_email: data.claimant_email,
    claimant_phone: data.claimant_phone || null,
    claimant_role: data.claimant_role,
    status: "pending",
  });

  if (error) {
    console.error("claimListing error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
