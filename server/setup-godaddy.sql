-- =============================================================
-- Trace Network & Engineering — GoDaddy MySQL Setup Script
-- Run once on your GoDaddy MySQL database.
-- All tables match the columns used in routes/blogs.js and routes/events.js
-- =============================================================

-- Users table (required for admin login)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Blogs table — full schema matching routes/blogs.js
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
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Events table — full schema matching routes/events.js
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
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- =============================================================
-- Migration: safely add any missing columns to existing tables
-- Safe to run even if tables already exist with older schema
-- =============================================================

-- blogs: add missing columns if upgrading from old schema
ALTER TABLE blogs
  MODIFY COLUMN title VARCHAR(500) NOT NULL,
  MODIFY COLUMN content LONGTEXT NOT NULL;

ALTER TABLE blogs
  ADD COLUMN IF NOT EXISTS slug VARCHAR(500) DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS image1_url VARCHAR(1000),
  ADD COLUMN IF NOT EXISTS hero_image_link VARCHAR(1000),
  ADD COLUMN IF NOT EXISTS gallery_images JSON,
  ADD COLUMN IF NOT EXISTS author VARCHAR(255),
  ADD COLUMN IF NOT EXISTS meta_title VARCHAR(255) DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS meta_description TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS meta_keywords TEXT DEFAULT NULL;

-- events: add missing columns if upgrading from old schema
ALTER TABLE events
  MODIFY COLUMN title VARCHAR(500) NOT NULL,
  MODIFY COLUMN description LONGTEXT;

ALTER TABLE events
  ADD COLUMN IF NOT EXISTS slug VARCHAR(500) DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS location_url VARCHAR(500) DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS image_path VARCHAR(1000),
  ADD COLUMN IF NOT EXISTS gallery_images JSON,
  ADD COLUMN IF NOT EXISTS meta_title VARCHAR(255) DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS meta_description TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS meta_keywords TEXT DEFAULT NULL;

-- Add unique indexes if not already present (ignore errors if they exist)
CREATE UNIQUE INDEX IF NOT EXISTS idx_blogs_slug ON blogs (slug);
CREATE UNIQUE INDEX IF NOT EXISTS idx_events_slug ON events (slug);
