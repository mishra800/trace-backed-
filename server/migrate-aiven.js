const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

async function getColumns(c, table) {
    const [rows] = await c.query(`DESCRIBE ${table}`);
    return rows.map(r => r.Field);
}

async function addIfMissing(c, table, col, definition, existing) {
    if (existing.includes(col)) {
        console.log(`⏭️  SKIP : ${table}.${col} already exists`);
    } else {
        await c.query(`ALTER TABLE ${table} ADD COLUMN ${col} ${definition}`);
        console.log(`✅ ADDED: ${table}.${col}`);
    }
}

async function migrate() {
    const c = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: { rejectUnauthorized: false }
    });

    console.log('✅ Connected. Running schema migrations...\n');

    // --- blogs ---
    const blogCols = await getColumns(c, 'blogs');
    console.log('blogs existing columns:', blogCols.join(', '));

    await c.query('ALTER TABLE blogs MODIFY COLUMN title VARCHAR(500) NOT NULL');
    await c.query('ALTER TABLE blogs MODIFY COLUMN content LONGTEXT NOT NULL');
    await c.query('ALTER TABLE blogs MODIFY COLUMN image1 VARCHAR(1000)');

    await addIfMissing(c, 'blogs', 'slug',             'VARCHAR(500) DEFAULT NULL', blogCols);
    await addIfMissing(c, 'blogs', 'image1_url',       'VARCHAR(1000)',             blogCols);
    await addIfMissing(c, 'blogs', 'hero_image_link',  'VARCHAR(1000)',             blogCols);
    await addIfMissing(c, 'blogs', 'gallery_images',   'JSON',                     blogCols);
    await addIfMissing(c, 'blogs', 'author',           'VARCHAR(255)',             blogCols);
    await addIfMissing(c, 'blogs', 'meta_title',       'VARCHAR(255) DEFAULT NULL', blogCols);
    await addIfMissing(c, 'blogs', 'meta_description', 'TEXT DEFAULT NULL',        blogCols);
    await addIfMissing(c, 'blogs', 'meta_keywords',    'TEXT DEFAULT NULL',        blogCols);

    // --- events ---
    const eventCols = await getColumns(c, 'events');
    console.log('\nevents existing columns:', eventCols.join(', '));

    await c.query('ALTER TABLE events MODIFY COLUMN title VARCHAR(500) NOT NULL');
    await c.query('ALTER TABLE events MODIFY COLUMN description LONGTEXT');
    await c.query('ALTER TABLE events MODIFY COLUMN image VARCHAR(1000)');

    await addIfMissing(c, 'events', 'slug',             'VARCHAR(500) DEFAULT NULL', eventCols);
    await addIfMissing(c, 'events', 'location',         'VARCHAR(500)',              eventCols);
    await addIfMissing(c, 'events', 'location_url',     'VARCHAR(500) DEFAULT NULL', eventCols);
    await addIfMissing(c, 'events', 'image_path',       'VARCHAR(1000)',             eventCols);
    await addIfMissing(c, 'events', 'gallery_images',   'JSON',                     eventCols);
    await addIfMissing(c, 'events', 'meta_title',       'VARCHAR(255) DEFAULT NULL', eventCols);
    await addIfMissing(c, 'events', 'meta_description', 'TEXT DEFAULT NULL',        eventCols);
    await addIfMissing(c, 'events', 'meta_keywords',    'TEXT DEFAULT NULL',        eventCols);

    await c.end();
    console.log('\n🎉 Migration complete!');
}

migrate().catch(err => {
    console.error('❌ Migration failed:', err.message);
    process.exit(1);
});
