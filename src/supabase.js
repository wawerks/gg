import { createClient } from '@supabase/supabase-js'; 
const supabaseUrl = 'https://aozyfolzvsozrvsrvvcj.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvenlmb2x6dnNvenJ2c3J2dmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNTI5NjAsImV4cCI6MjA0NDYyODk2MH0.BYcl7lkIK98_R-PeMarElwoK4HKUFoI2DS-lrpWb5wY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 

// Sign up function 
export async function signUp(email, password) { 
    const { data, error } = await supabase.auth.signUp({ email, password }); 
    return { data, error }; 
    } 
    // Login function 
    export async function login(email, password) { 
    const { data, error } = await supabase.auth.signInWithPassword({ email, password }); 
    return { data, error }; 
    } 
    // Logout function 
    export async function logout() { 
    const { error } = await supabase.auth.signOut(); 
    return { error }; 
    }