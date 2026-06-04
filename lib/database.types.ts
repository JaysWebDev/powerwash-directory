export type LeadStatus = "new" | "assigned" | "contacted" | "quoted" | "won" | "lost";
export type AssignmentStatus = "sent" | "viewed" | "responded" | "passed";
export type CompanyPlan = "free" | "basic" | "pro" | "premium";

export interface Lead {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  email: string;
  zip_code: string;
  property_type: string | null;
  services: string[];
  property_size: string | null;
  notes: string | null;
  photo_urls: string[];
  status: LeadStatus;
  estimated_value: number | null;
  source: string | null;
  ip_address: string | null;
}

export interface Company {
  id: string;
  created_at: string;
  business_name: string;
  contact_name: string | null;
  email: string;
  phone: string | null;
  website: string | null;
  zip_codes: string[];
  services: string[];
  city: string | null;
  state: string | null;
  rating: number;
  review_count: number;
  is_active: boolean;
  is_verified: boolean;
  plan: CompanyPlan;
  monthly_lead_cap: number;
  leads_this_month: number;
  notes: string | null;
}

export interface LeadAssignment {
  id: string;
  lead_id: string;
  company_id: string;
  assigned_at: string;
  status: AssignmentStatus;
  response_notes: string | null;
  // joined
  lead?: Lead;
  company?: Company;
}

export interface Database {
  public: {
    Tables: {
      leads: { Row: Lead; Insert: Omit<Lead, "id" | "created_at">; Update: Partial<Lead> };
      companies: { Row: Company; Insert: Omit<Company, "id" | "created_at">; Update: Partial<Company> };
      lead_assignments: { Row: LeadAssignment; Insert: Omit<LeadAssignment, "id" | "assigned_at">; Update: Partial<LeadAssignment> };
    };
  };
}
