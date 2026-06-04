"use server";

import { getDb, toArr } from "@/lib/db";

interface CompanyPayload {
  business_name: string;
  contact_name: string;
  email: string;
  phone: string;
  website: string;
  city: string;
  state: string;
  zip_codes: string[];
  services: string[];
  plan: string;
  monthly_lead_cap: number;
  notes: string;
}

export async function addCompany(payload: CompanyPayload) {
  const db = getDb();
  try {
    db.prepare(`
      INSERT INTO companies (business_name, contact_name, email, phone, website, city, state,
        zip_codes, services, plan, monthly_lead_cap, notes, is_active, is_verified, rating, review_count, leads_this_month)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0, 5.0, 0, 0)
    `).run(
      payload.business_name, payload.contact_name, payload.email, payload.phone,
      payload.website, payload.city, payload.state,
      toArr(payload.zip_codes), toArr(payload.services),
      payload.plan, payload.monthly_lead_cap, payload.notes ?? ""
    );
    return { success: true };
  } catch (err) {
    console.error("Company insert error:", err);
    return { success: false, error: String(err) };
  }
}

export async function updateLeadStatus(leadId: string, status: string) {
  const db = getDb();
  try {
    db.prepare(`UPDATE leads SET status = ? WHERE id = ?`).run(status, leadId);
    return { success: true };
  } catch (err) {
    return { success: false, error: String(err) };
  }
}
