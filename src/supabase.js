import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { ref } from "@vue/reactivity";

const supabaseUrl = "https://bkqcxizocgzjxbjkjiuz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrcWN4aXpvY2d6anhiamtqaXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczNjMzMTYsImV4cCI6MTk5MjkzOTMxNn0.QyIzP49bMvKbTQ-mlZ_lqpy1nr_MxHQuo-iwV8-EVUc" ;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


globalThis.supabase = supabase;


