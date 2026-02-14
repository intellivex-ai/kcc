/**
 * Supabase Client
 * Singleton instance for database operations
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Supabase credentials missing. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file');
}

// Check if using placeholder values
if (supabaseUrl?.includes('your_supabase') || supabaseAnonKey?.includes('your_supabase')) {
    console.warn('⚠️  Using placeholder Supabase credentials. Please update your .env file with actual values from your Supabase project.');
}

// Create Supabase client
export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-anon-key',
    {
        auth: {
            persistSession: false // We handle admin auth separately
        }
    }
);

export default supabase;
