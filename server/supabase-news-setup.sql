-- =============================================================
-- SQL Setup Query for News & Press Releases Section
-- Run this in the Supabase SQL Editor:
-- https://app.supabase.com → your project → SQL Editor
-- =============================================================

-- 1. Create the news table
CREATE TABLE IF NOT EXISTS news (
  id              BIGSERIAL PRIMARY KEY,
  title           TEXT NOT NULL,
  tag             TEXT,           -- publisher name (e.g. Sophos, CRN)
  link            TEXT,           -- URL link to external article
  image           TEXT,           -- public URL from Supabase Storage
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create the auto-update trigger for the updated_at timestamp
CREATE TRIGGER news_updated_at
  BEFORE UPDATE ON news
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 3. Enable Row Level Security (RLS)
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- 4. Allow public select (read-only access) for website visitors
CREATE POLICY "Public read news" ON news FOR SELECT USING (true);
