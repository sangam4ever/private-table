import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: any = null;

// Only initialize Supabase if credentials are available
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase credentials not configured');
  // Create a dummy client for build time
  supabase = {
    from: () => ({
      insert: async () => ({ error: new Error('Supabase not configured') }),
      select: async () => ({ data: [], error: null }),
    }),
  };
}

export { supabase };
