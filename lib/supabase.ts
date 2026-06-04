import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase = createClient<any>(supabaseUrl, supabaseAnonKey);

export function createServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createClient<any>(url, key, { auth: { persistSession: false } });
}
