import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://toulnlwitnjrvwdbbbne.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvdWxubHdpdG5qcnZ3ZGJiYm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5OTcyMTksImV4cCI6MjA3NjU3MzIxOX0.aAC5-koWGjUrmu2QfQMPXjnVR6lxXgE2mWKJg8LyPF0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
