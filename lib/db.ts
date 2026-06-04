import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_PATH = process.env.DB_PATH ?? path.join(process.cwd(), "data", "powerwash.db");

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (_db) return _db;
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  _db = new Database(DB_PATH);
  _db.pragma("journal_mode = WAL");
  _db.pragma("foreign_keys = ON");
  initSchema(_db);
  return _db;
}

function initSchema(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS companies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      business_name TEXT NOT NULL,
      contact_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      website TEXT DEFAULT '',
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      zip_codes TEXT NOT NULL DEFAULT '[]',
      services TEXT NOT NULL DEFAULT '[]',
      plan TEXT NOT NULL DEFAULT 'free',
      monthly_lead_cap INTEGER NOT NULL DEFAULT 10,
      leads_this_month INTEGER NOT NULL DEFAULT 0,
      rating REAL NOT NULL DEFAULT 5.0,
      review_count INTEGER NOT NULL DEFAULT 0,
      is_active INTEGER NOT NULL DEFAULT 1,
      is_verified INTEGER NOT NULL DEFAULT 0,
      notes TEXT DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      services TEXT NOT NULL DEFAULT '[]',
      property_type TEXT NOT NULL DEFAULT '',
      property_size TEXT NOT NULL DEFAULT '',
      zip_code TEXT NOT NULL,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      notes TEXT DEFAULT '',
      photo_urls TEXT NOT NULL DEFAULT '[]',
      status TEXT NOT NULL DEFAULT 'new',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS lead_assignments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lead_id INTEGER NOT NULL REFERENCES leads(id),
      company_id INTEGER NOT NULL REFERENCES companies(id),
      assigned_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(lead_id, company_id)
    );
  `);
}

// helpers for JSON array columns
export function parseArr(val: string | null): string[] {
  try { return JSON.parse(val ?? "[]"); } catch { return []; }
}
export function toArr(arr: string[]): string {
  return JSON.stringify(arr);
}
