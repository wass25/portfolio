import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { ref } from "@vue/reactivity";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


globalThis.supabase = supabase;


