"use server";

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
      status: "new",
    })
    .select("id")
    .single();

  if (error) {
    console.error("submitLead error:", error);
    throw new Error("Failed to submit lead");
  }

  return { success: true, leadId: data.id };
}
