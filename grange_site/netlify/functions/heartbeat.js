const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

exports.handler = async function () {
  const { error } = await supabase
    .from('heartbeat')
    .insert([{ note: 'weekly ping' }]);

  if (error) {
    console.error('Insert failed:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Ping inserted into Supabase!' }),
  };
};