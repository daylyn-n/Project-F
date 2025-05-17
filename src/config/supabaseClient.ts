import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mqmaeferxlqfdnxyaxck.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbWFlZmVyeGxxZmRueHlheGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0NTc5OTgsImV4cCI6MjA2MzAzMzk5OH0.CCsYAPLNTsaVBxrDt3eKjZAkyzbPzk-LZ9AiZ-lX_rg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);