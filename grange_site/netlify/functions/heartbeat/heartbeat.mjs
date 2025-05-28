import { createClient } from '@supabase/supabase-js'

// Read Supabase credentials from environment variables
const REACT_APP_SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL
const REACT_APP_SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default async (req) => {
  try {
    // Insert a test row with timestamp or any dummy data
    const { data, error } = await supabase
      .from('heartbeat')  
      .insert([{ 
        created_at: new Date().toISOString(),
        note: 'weekly ping'
      }])

    if (error) {
      console.error('Insert error:', error)
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      }
    }

    console.log('Inserted heartbeat ping:', data)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Ping inserted successfully', data }),
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    }
  }
}

export const config = {
  schedule: '*/5 * * * *', // Thursdays 8:55pm PST (4:55am UTC Fri)
}