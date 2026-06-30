-- =============================================================
-- Trace Network & Engineering — Supabase Setup SQL
-- Run this entire script once in the Supabase SQL Editor:
-- https://app.supabase.com → your project → SQL Editor
-- =============================================================

-- ─── Enable UUID extension ────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── BLOGS TABLE ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blogs (
  id              BIGSERIAL PRIMARY KEY,
  title           TEXT NOT NULL,
  slug            TEXT UNIQUE,
  content         TEXT NOT NULL,
  image1          TEXT,           -- URL from Supabase Storage
  image1_url      TEXT,           -- external URL fallback
  hero_image_link TEXT,
  gallery_images  JSONB DEFAULT '[]',
  author          TEXT,
  meta_title      TEXT,
  meta_description TEXT,
  meta_keywords   TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ─── EVENTS TABLE ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS events (
  id              BIGSERIAL PRIMARY KEY,
  title           TEXT NOT NULL,
  slug            TEXT UNIQUE,
  description     TEXT,
  event_date      DATE,
  location        TEXT,
  location_url    TEXT,
  image           TEXT,           -- URL from Supabase Storage
  image_path      TEXT,           -- external URL fallback
  gallery_images  JSONB DEFAULT '[]',
  meta_title      TEXT,
  meta_description TEXT,
  meta_keywords   TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ─── CONTACT SUBMISSIONS TABLE ───────────────────────────────
CREATE TABLE IF NOT EXISTS contact_submissions (
  id         BIGSERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT,
  subject    TEXT,
  message    TEXT,
  type       TEXT DEFAULT 'contact',   -- 'contact' | 'service_request'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── CAREER APPLICATIONS TABLE ───────────────────────────────
CREATE TABLE IF NOT EXISTS career_applications (
  id           BIGSERIAL PRIMARY KEY,
  name         TEXT NOT NULL,
  email        TEXT NOT NULL,
  why_trace    TEXT,
  resume_url   TEXT,           -- URL from Supabase Storage
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ─── ADMIN USERS TABLE ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_users (
  id         BIGSERIAL PRIMARY KEY,
  username   TEXT NOT NULL UNIQUE,
  password   TEXT NOT NULL,         -- bcrypt hash
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed default admin accounts (passwords are bcrypt hashed)
-- These match the plain-text passwords used in the old hardcoded list.
-- You can regenerate hashes via: node -e "const b=require('bcryptjs');console.log(b.hashSync('admin@123',10))"
INSERT INTO admin_users (username, password) VALUES
  ('admin',  '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
  ('admin2', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
  ('admin3', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
  ('admin4', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
  ('admin5', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
ON CONFLICT (username) DO NOTHING;

-- ─── AUTO-UPDATE updated_at TRIGGER ──────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── ROW LEVEL SECURITY (RLS) ────────────────────────────────
-- Public read access for blogs and events (website visitors)
ALTER TABLE blogs    ENABLE ROW LEVEL SECURITY;
ALTER TABLE events   ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications  ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users          ENABLE ROW LEVEL SECURITY;

-- Allow public SELECT on blogs and events
CREATE POLICY "Public read blogs"  ON blogs  FOR SELECT USING (true);
CREATE POLICY "Public read events" ON events FOR SELECT USING (true);

-- All write operations go through the service_role key (backend only)
-- No additional policies needed — service_role bypasses RLS.

-- ─── STORAGE BUCKETS ─────────────────────────────────────────
-- Create these buckets in Supabase Dashboard → Storage:
--   1. "blog-images"    (public)
--   2. "event-images"   (public)
--   3. "resumes"        (private)
--
-- Or run via Supabase client in your backend seed script.
