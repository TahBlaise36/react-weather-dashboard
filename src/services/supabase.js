import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rbfjkkzvtzgganbxaqpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiZmpra3p2dHpnZ2FuYnhhcXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NTg3ODEsImV4cCI6MjAzOTEzNDc4MX0.kYkIdEXC33ocX1Zh2Igf6c3bbxqdYVKIoxbIlrxIIUY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
