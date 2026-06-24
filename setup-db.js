/**
 * Local Database Setup Script
 * Mirrors legacy create-admin.php and the PHP database schema.
 * 
 * Run once: node setup-db.js
 * 
 * Prerequisites:
 *   - MySQL running locally (or update .env with your DB host/credentials)
 *   - A MySQL user with CREATE DATABASE privileges
 */

const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

const DB_HOST     = process.env.DB_HOST     || 'localhost';
const DB_PORT     = process.env.DB_PORT     || 3306;
const DB_USER     = process.env.DB_USER     || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME     = process.env.DB_NAME     || 'trace_db';
const DB_SSL      = process.env.DB_SSL === 'true';

// Admin accounts — same as legacy create-admin.php
const ADMINS = [
  { username: 'admin',  password: 'admin@123'   },
  { username: 'admin2', password: 'admin@Trace2' },
  { username: 'admin3', password: 'admin@Trace3' },
  { username: 'admin4', password: 'admin@Trace4' },
  { username: 'admin5', password: 'admin@Trace5' },
];

async function setup() {
  let conn;
  try {
    // Connect without specifying a database first
    conn = await mysql.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      ssl: DB_SSL ? { rejectUnauthorized: false } : undefined,
      multipleStatements: true,
    });

    console.log('✅ Connected to MySQL');

    // Create database if it doesn't exist
    await conn.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    console.log(`✅ Database '${DB_NAME}' ready`);

    await conn.query(`USE \`${DB_NAME}\``);

    // Create users table
    await conn.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Table: users');

    // Create blogs table — matches all columns used in routes/blogs.js
    await conn.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(500) DEFAULT NULL,
        content LONGTEXT NOT NULL,
        image1 VARCHAR(1000),
        image1_url VARCHAR(1000),
        hero_image_link VARCHAR(1000),
        gallery_images JSON,
        author VARCHAR(255),
        meta_title VARCHAR(255) DEFAULT NULL,
        meta_description TEXT DEFAULT NULL,
        meta_keywords TEXT DEFAULT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY idx_blogs_slug (slug)
      ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);
    console.log('✅ Table: blogs');

    // Create events table — matches all columns used in routes/events.js
    await conn.query(`
      CREATE TABLE IF NOT EXISTS events (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(500) DEFAULT NULL,
        description LONGTEXT,
        event_date DATE,
        location VARCHAR(500),
        location_url VARCHAR(500) DEFAULT NULL,
        image VARCHAR(1000),
        image_path VARCHAR(1000),
        gallery_images JSON,
        meta_title VARCHAR(255) DEFAULT NULL,
        meta_description TEXT DEFAULT NULL,
        meta_keywords TEXT DEFAULT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY idx_events_slug (slug)
      ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
    `);
    console.log('✅ Table: events');

    // Insert admin users (bcrypt — same as PHP password_hash)
    for (const admin of ADMINS) {
      const hashed = await bcrypt.hash(admin.password, 10);
      await conn.query(
        `INSERT INTO users (username, password) VALUES (?, ?)
         ON DUPLICATE KEY UPDATE password = VALUES(password)`,
        [admin.username, hashed]
      );
      console.log(`✅ Admin user: ${admin.username}`);
    }

    console.log('\n🎉 Setup complete! You can now log in with:');
    console.log('   Username: admin');
    console.log('   Password: admin@123\n');

  } catch (err) {
    console.error('❌ Setup failed:', err.message);
    console.error('\nMake sure MySQL is running and your .env credentials are correct.');
    console.error(`  DB_HOST=${DB_HOST}, DB_USER=${DB_USER}, DB_NAME=${DB_NAME}`);
    process.exit(1);
  } finally {
    if (conn) await conn.end();
  }
}

setup();
