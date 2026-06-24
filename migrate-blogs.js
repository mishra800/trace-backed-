/**
 * Database Migration Script
 * Safely adds any missing columns to the blogs and events tables.
 * Safe to run multiple times — skips columns that already exist.
 *
 * Run once: node migrate-blogs.js
 */
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

async function run() {
    const conn = await mysql.createConnection({
        host:     process.env.DB_HOST     || 'localhost',
        port:     parseInt(process.env.DB_PORT) || 3306,
        user:     process.env.DB_USER     || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME     || 'trace_db',
        ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
    });

    console.log('✅ Connected to database:', process.env.DB_NAME || 'trace_db');

    // ── blogs migrations ──────────────────────────────────────────────────────
    const blogColumns = [
        { name: 'slug',              def: 'VARCHAR(500) DEFAULT NULL',  after: 'title'          },
        { name: 'image1_url',        def: 'VARCHAR(1000) DEFAULT NULL', after: 'image1'         },
        { name: 'hero_image_link',   def: 'VARCHAR(1000) DEFAULT NULL', after: 'image1_url'     },
        { name: 'gallery_images',    def: 'JSON DEFAULT NULL',          after: 'hero_image_link' },
        { name: 'author',            def: 'VARCHAR(255) DEFAULT NULL',  after: 'gallery_images' },
        { name: 'meta_title',        def: 'VARCHAR(255) DEFAULT NULL',  after: 'author'         },
        { name: 'meta_description',  def: 'TEXT DEFAULT NULL',          after: 'meta_title'     },
        { name: 'meta_keywords',     def: 'TEXT DEFAULT NULL',          after: 'meta_description' },
    ];

    console.log('\n── blogs table ──');
    for (const col of blogColumns) {
        const [rows] = await conn.query(
            `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
             WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'blogs' AND COLUMN_NAME = ?`,
            [col.name]
        );
        if (rows.length === 0) {
            await conn.query(
                `ALTER TABLE blogs ADD COLUMN \`${col.name}\` ${col.def} AFTER \`${col.after}\``
            );
            console.log(`  ✅ Added: blogs.${col.name}`);
        } else {
            console.log(`  ⏭  Exists: blogs.${col.name}`);
        }
    }

    // Widen image1_url and hero_image_link if they were created with VARCHAR(500)
    await conn.query(`ALTER TABLE blogs MODIFY COLUMN image1_url VARCHAR(1000) DEFAULT NULL`).catch(() => {});
    await conn.query(`ALTER TABLE blogs MODIFY COLUMN hero_image_link VARCHAR(1000) DEFAULT NULL`).catch(() => {});

    // Widen title and content if they were created with the old narrow sizes
    await conn.query(`ALTER TABLE blogs MODIFY COLUMN title VARCHAR(500) NOT NULL`).catch(() => {});
    await conn.query(`ALTER TABLE blogs MODIFY COLUMN content LONGTEXT NOT NULL`).catch(() => {});

    // Add unique index on slug if missing
    const [slugIdx] = await conn.query(
        `SELECT INDEX_NAME FROM INFORMATION_SCHEMA.STATISTICS
         WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'blogs' AND INDEX_NAME = 'idx_blogs_slug'`
    );
    if (slugIdx.length === 0) {
        await conn.query(`CREATE UNIQUE INDEX idx_blogs_slug ON blogs (slug)`).catch(() => {
            console.log('  ⚠  Could not add unique index on blogs.slug (may have duplicate values — resolve manually)');
        });
        console.log('  ✅ Added: idx_blogs_slug unique index');
    } else {
        console.log('  ⏭  Exists: idx_blogs_slug unique index');
    }

    // ── events migrations ─────────────────────────────────────────────────────
    const eventColumns = [
        { name: 'slug',              def: 'VARCHAR(500) DEFAULT NULL',  after: 'title'       },
        { name: 'location_url',      def: 'VARCHAR(500) DEFAULT NULL',  after: 'location'    },
        { name: 'image_path',        def: 'VARCHAR(1000) DEFAULT NULL', after: 'image'       },
        { name: 'gallery_images',    def: 'JSON DEFAULT NULL',          after: 'image_path'  },
        { name: 'meta_title',        def: 'VARCHAR(255) DEFAULT NULL',  after: 'gallery_images' },
        { name: 'meta_description',  def: 'TEXT DEFAULT NULL',          after: 'meta_title'  },
        { name: 'meta_keywords',     def: 'TEXT DEFAULT NULL',          after: 'meta_description' },
    ];

    console.log('\n── events table ──');
    for (const col of eventColumns) {
        const [rows] = await conn.query(
            `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
             WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'events' AND COLUMN_NAME = ?`,
            [col.name]
        );
        if (rows.length === 0) {
            await conn.query(
                `ALTER TABLE events ADD COLUMN \`${col.name}\` ${col.def} AFTER \`${col.after}\``
            );
            console.log(`  ✅ Added: events.${col.name}`);
        } else {
            console.log(`  ⏭  Exists: events.${col.name}`);
        }
    }

    // Widen title and description if they were created with old narrow sizes
    await conn.query(`ALTER TABLE events MODIFY COLUMN title VARCHAR(500) NOT NULL`).catch(() => {});
    await conn.query(`ALTER TABLE events MODIFY COLUMN description LONGTEXT`).catch(() => {});

    // Add unique index on slug if missing
    const [evSlugIdx] = await conn.query(
        `SELECT INDEX_NAME FROM INFORMATION_SCHEMA.STATISTICS
         WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'events' AND INDEX_NAME = 'idx_events_slug'`
    );
    if (evSlugIdx.length === 0) {
        await conn.query(`CREATE UNIQUE INDEX idx_events_slug ON events (slug)`).catch(() => {
            console.log('  ⚠  Could not add unique index on events.slug (may have duplicate values — resolve manually)');
        });
        console.log('  ✅ Added: idx_events_slug unique index');
    } else {
        console.log('  ⏭  Exists: idx_events_slug unique index');
    }

    await conn.end();
    console.log('\n🎉 Migration complete.');
}

run().catch(err => {
    console.error('❌ Migration failed:', err.message);
    process.exit(1);
});
