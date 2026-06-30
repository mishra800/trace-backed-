/**
 * seed-admins.js
 * Run once after setting up Supabase to insert/update admin passwords.
 *
 * Usage: node seed-admins.js
 */

const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

const ADMINS = [
    { username: 'admin',  password: 'admin@123'    },
    { username: 'admin2', password: 'admin@Trace2'  },
    { username: 'admin3', password: 'admin@Trace3'  },
    { username: 'admin4', password: 'admin@Trace4'  },
    { username: 'admin5', password: 'admin@Trace5'  },
];

async function seed() {
    for (const admin of ADMINS) {
        const hashed = await bcrypt.hash(admin.password, 10);
        const { error } = await supabase
            .from('admin_users')
            .upsert({ username: admin.username, password: hashed }, { onConflict: 'username' });

        if (error) {
            console.error(`❌ Failed to seed ${admin.username}:`, error.message);
        } else {
            console.log(`✅ Seeded: ${admin.username}`);
        }
    }
    console.log('\n🎉 Admin seeding complete!');
}

seed();
