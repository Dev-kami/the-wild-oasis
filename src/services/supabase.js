import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bquecsikcyzjwwblfxmi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxdWVjc2lrY3l6and3YmxmeG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MjAyMzYsImV4cCI6MjAxODQ5NjIzNn0.g3Dg_fkLwlZw1Tmm0xjnAdPz4fPjTHt2YTXL1bMCkrE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
