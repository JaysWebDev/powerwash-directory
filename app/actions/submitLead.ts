"use server";

import { getDb, parseArr, toArr } from "@/lib/db";

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
  const db = getDb();

  // 1. Insert lead
  const insert = db.prepare(`
    INSERT INTO leads (services, property_type, property_size, zip_code, full_name, phone, email, notes, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new')
  `);

  const result = insert.run(
    toArr(payload.services),
    payload.property_type,
    payload.property_size,
    payload.zip_code,
    payload.full_name,
    payload.phone,
    payload.email,
    payload.notes ?? ""
  );

  const leadId = result.lastInsertRowid as number;

  // 2. Auto-route: find active companies serving this ZIP
  const companies = db.prepare(`
    SELECT id, plan, monthly_lead_cap, leads_this_month, services, zip_codes
    FROM companies WHERE is_active = 1
  `).all() as Array<{
    id: number;
    plan: string;
    monthly_lead_cap: number;
    leads_this_month: number;
    services: string;
    zip_codes: string;
  }>;

  const planOrder: Record<string, number> = { premium: 4, pro: 3, basic: 2, free: 1 };

  const eligible = companies.filter((co) => {
    const zips = parseArr(co.zip_codes);
    const svcs = parseArr(co.services);
    const inZip = zips.includes(payload.zip_code);
    const underCap = co.leads_this_month < co.monthly_lead_cap;
    const serviceMatch = payload.services.length === 0 || payload.services.some((s) => svcs.includes(s));
    return inZip && underCap && serviceMatch;
  });

  const sorted = eligible.sort((a, b) => {
    const planDiff = (planOrder[b.plan] ?? 0) - (planOrder[a.plan] ?? 0);
    if (planDiff !== 0) return planDiff;
    return (b.monthly_lead_cap - b.leads_this_month) - (a.monthly_lead_cap - a.leads_this_month);
  });

  const toAssign = sorted.slice(0, 3);

  if (toAssign.length > 0) {
    const assignStmt = db.prepare(`
      INSERT OR IGNORE INTO lead_assignments (lead_id, company_id) VALUES (?, ?)
    `);
    const bumpStmt = db.prepare(`
      UPDATE companies SET leads_this_month = leads_this_month + 1 WHERE id = ?
    `);

    const assignAll = db.transaction(() => {
      for (const co of toAssign) {
        assignStmt.run(leadId, co.id);
        bumpStmt.run(co.id);
      }
      db.prepare(`UPDATE leads SET status = 'assigned' WHERE id = ?`).run(leadId);
    });

    assignAll();
  }

  return { success: true, leadId };
}
