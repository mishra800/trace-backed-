const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // service_role bypasses RLS — backend only

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});

// Quick connectivity check on startup
(async () => {
    const { error } = await supabase.from('blogs').select('id').limit(1);
    if (error) {
        console.error('❌ Supabase connection check failed:', error.message);
    } else {
        console.log('✅ Connected to Supabase successfully');
    }
})();

module.exports = supabase;
