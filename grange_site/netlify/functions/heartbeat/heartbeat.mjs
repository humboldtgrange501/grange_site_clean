import { createClient } from '@supabase/supabase-js'

// Read Supabase credentials from environment variables
const REACT_APP_SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL
const REACT_APP_SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY

const supabase = createClient(REACT_APP_SUPABASE_URL, SUPABASE_ANON_KEY)

export default async () => {
  try {
    const { data, error } = await supabase
      .from('heartbeat')
      .insert([{
        created_at: new Date().toISOString(),
        note: 'weekly ping'
      }]);

    if (error) {
      console.error('Insert error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('Inserted heartbeat ping:', data);
    return new Response(JSON.stringify({
      message: 'Ping inserted successfully',
      data
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Unexpected error:', err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const config = {
  schedule: '*/5 * * * *', // every 5 minutes for testing; adjust as needed
};