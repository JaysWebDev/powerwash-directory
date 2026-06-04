import { getDb, parseArr } from "@/lib/db";
import { Droplets, Users, TrendingUp, Clock, CheckCircle, AlertCircle, Building2 } from "lucide-react";
import AddCompanyForm from "./AddCompanyForm";

interface Lead {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  zip_code: string;
  services: string;
  property_type: string;
  property_size: string;
  status: string;
  created_at: string;
}

interface Company {
  id: number;
  business_name: string;
  contact_name: string;
  email: string;
  city: string;
  state: string;
  zip_codes: string;
  services: string;
  plan: string;
  monthly_lead_cap: number;
  leads_this_month: number;
  rating: number;
  review_count: number;
  is_active: number;
  is_verified: number;
  created_at: string;
}

interface Assignment {
  id: number;
  lead_id: number;
  company_id: number;
  assigned_at: string;
  lead_name: string;
  company_name: string;
  lead_status: string;
}

function getData() {
  const db = getDb();
  const leads = db.prepare(`SELECT * FROM leads ORDER BY created_at DESC LIMIT 100`).all() as Lead[];
  const companies = db.prepare(`SELECT * FROM companies ORDER BY created_at DESC`).all() as Company[];
  const assignments = db.prepare(`
    SELECT la.*, l.full_name AS lead_name, l.status AS lead_status, c.business_name AS company_name
    FROM lead_assignments la
    JOIN leads l ON l.id = la.lead_id
    JOIN companies c ON c.id = la.company_id
    ORDER BY la.assigned_at DESC LIMIT 50
  `).all() as Assignment[];
  return { leads, companies, assignments };
}

const statusColor: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  assigned: "bg-purple-100 text-purple-700",
  contacted: "bg-yellow-100 text-yellow-700",
  quoted: "bg-orange-100 text-orange-700",
  won: "bg-green-100 text-green-700",
  lost: "bg-red-100 text-red-700",
};

const planColor: Record<string, string> = {
  free: "bg-gray-100 text-gray-600",
  basic: "bg-blue-100 text-blue-700",
  pro: "bg-purple-100 text-purple-700",
  premium: "bg-amber-100 text-amber-700",
};

export default function AdminDashboard() {
  const { leads, companies, assignments } = getData();

  const newLeads = leads.filter((l) => l.status === "new").length;
  const assignedLeads = leads.filter((l) => l.status === "assigned").length;
  const activeCompanies = companies.filter((c) => c.is_active === 1).length;

  return (
    <div className="min-h-screen bg-[#f0f4f8]" style={{ fontFamily: "var(--font-sans)" }}>

      <header className="bg-[#1e3a5f] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Droplets className="w-6 h-6 text-[#38bdf8]" />
          <span className="font-bold text-lg">WashPro Admin</span>
          <span className="text-white/40 text-sm">/ Dashboard</span>
        </div>
        <a href="/" className="text-sm text-white/60 hover:text-white transition-colors">← Back to site</a>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* KPI CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "New Leads", value: newLeads, icon: AlertCircle, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Assigned", value: assignedLeads, icon: CheckCircle, color: "text-purple-600", bg: "bg-purple-50" },
            { label: "Active Companies", value: activeCompanies, icon: Building2, color: "text-green-600", bg: "bg-green-50" },
            { label: "Total Assignments", value: assignments.length, icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-50" },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-2xl p-5 shadow-sm border border-[#e2e8f0]">
              <div className={`w-10 h-10 rounded-xl ${kpi.bg} flex items-center justify-center mb-3`}>
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
              <div className="text-2xl font-bold text-[#1e3a5f]">{kpi.value}</div>
              <div className="text-sm text-[#64748b]">{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* LEADS TABLE */}
        <section className="bg-white rounded-2xl shadow-sm border border-[#e2e8f0] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e2e8f0]">
            <h2 className="font-bold text-[#1e3a5f] text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#0ea5e9]" /> Leads
              <span className="text-sm font-normal text-[#64748b]">({leads.length} total)</span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#f8fafc] text-[#64748b] text-xs uppercase tracking-wide">
                <tr>
                  {["Date", "Name", "ZIP", "Services", "Property", "Status", "Assignments"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {leads.length === 0 ? (
                  <tr><td colSpan={7} className="px-4 py-8 text-center text-[#94a3b8]">No leads yet.</td></tr>
                ) : leads.map((lead) => {
                  const svcs = parseArr(lead.services);
                  const assignCount = assignments.filter((a) => a.lead_id === lead.id).length;
                  return (
                    <tr key={lead.id} className="hover:bg-[#f8fafc] transition-colors">
                      <td className="px-4 py-3 text-[#64748b] whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-[#1e3a5f]">{lead.full_name}</div>
                        <div className="text-[#94a3b8] text-xs">{lead.email}</div>
                      </td>
                      <td className="px-4 py-3 font-mono text-[#475569]">{lead.zip_code}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {svcs.slice(0, 2).map((s) => (
                            <span key={s} className="bg-[#f0f9ff] text-[#0284c7] text-xs px-2 py-0.5 rounded-full border border-[#bae6fd]">
                              {s.replace(/-/g, " ")}
                            </span>
                          ))}
                          {svcs.length > 2 && <span className="text-[#94a3b8] text-xs">+{svcs.length - 2}</span>}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-[#475569] capitalize">{lead.property_type?.replace(/-/g, " ")}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${statusColor[lead.status] ?? "bg-gray-100 text-gray-600"}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-sm font-bold ${assignCount > 0 ? "text-green-600" : "text-[#94a3b8]"}`}>
                          {assignCount}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* COMPANIES TABLE */}
        <section className="bg-white rounded-2xl shadow-sm border border-[#e2e8f0] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e2e8f0]">
            <h2 className="font-bold text-[#1e3a5f] text-lg flex items-center gap-2">
              <Users className="w-5 h-5 text-[#0ea5e9]" /> Companies
              <span className="text-sm font-normal text-[#64748b]">({companies.length} total)</span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#f8fafc] text-[#64748b] text-xs uppercase tracking-wide">
                <tr>
                  {["Company", "Location", "ZIPs", "Plan", "Leads This Month", "Status", "Rating"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {companies.length === 0 ? (
                  <tr><td colSpan={7} className="px-4 py-8 text-center text-[#94a3b8]">No companies yet.</td></tr>
                ) : companies.map((co) => {
                  const zips = parseArr(co.zip_codes);
                  return (
                    <tr key={co.id} className="hover:bg-[#f8fafc] transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium text-[#1e3a5f] flex items-center gap-1.5">
                          {co.is_verified === 1 && <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />}
                          {co.business_name}
                        </div>
                        <div className="text-[#94a3b8] text-xs">{co.email}</div>
                      </td>
                      <td className="px-4 py-3 text-[#475569]">{co.city}, {co.state}</td>
                      <td className="px-4 py-3 text-[#475569]">
                        <span className="font-mono text-xs">{zips.length} ZIP{zips.length !== 1 ? "s" : ""}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase ${planColor[co.plan] ?? "bg-gray-100"}`}>
                          {co.plan}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-[#e2e8f0] rounded-full h-1.5 w-20">
                            <div
                              className="bg-[#0ea5e9] h-1.5 rounded-full"
                              style={{ width: `${Math.min(100, (co.leads_this_month / co.monthly_lead_cap) * 100)}%` }}
                            />
                          </div>
                          <span className="text-xs text-[#64748b]">{co.leads_this_month}/{co.monthly_lead_cap}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${co.is_active === 1 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                          {co.is_active === 1 ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#475569]">
                        ★ {co.rating} <span className="text-[#94a3b8] text-xs">({co.review_count})</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* ADD COMPANY */}
        <AddCompanyForm />

        {/* RECENT ASSIGNMENTS */}
        <section className="bg-white rounded-2xl shadow-sm border border-[#e2e8f0] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e2e8f0]">
            <h2 className="font-bold text-[#1e3a5f] text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#0ea5e9]" /> Recent Lead Assignments
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#f8fafc] text-[#64748b] text-xs uppercase tracking-wide">
                <tr>
                  {["Assigned", "Lead", "Company", "Lead Status"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {assignments.length === 0 ? (
                  <tr><td colSpan={4} className="px-4 py-8 text-center text-[#94a3b8]">No assignments yet.</td></tr>
                ) : assignments.map((a) => (
                  <tr key={a.id} className="hover:bg-[#f8fafc]">
                    <td className="px-4 py-3 text-[#64748b] whitespace-nowrap text-xs">
                      {new Date(a.assigned_at).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="px-4 py-3 text-[#1e3a5f] font-medium">{a.lead_name}</td>
                    <td className="px-4 py-3 text-[#475569]">{a.company_name}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${statusColor[a.lead_status] ?? "bg-gray-100"}`}>
                        {a.lead_status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
