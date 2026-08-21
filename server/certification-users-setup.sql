-- =============================================================
-- Trace Network & Engineering — Certification Users Setup Script
-- =============================================================

----------------------------------------------------------------
-- OPTION 1: Supabase / PostgreSQL Script
-- Run in Supabase SQL Editor (https://app.supabase.com → SQL Editor)
----------------------------------------------------------------

CREATE TABLE IF NOT EXISTS cert_users (
  id             BIGSERIAL PRIMARY KEY,
  full_name      TEXT NOT NULL,
  email          TEXT NOT NULL UNIQUE,
  phone          TEXT NOT NULL,
  company        TEXT NOT NULL,
  password_hash  TEXT NOT NULL,               -- Hashed or masked password
  status         TEXT DEFAULT 'pending',      -- 'pending' | 'active' | 'deactivated'
  access_allowed BOOLEAN DEFAULT FALSE,       -- Controls certification details access (Requires Admin Approval)
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast user lookup by email
CREATE INDEX IF NOT EXISTS idx_cert_users_email ON cert_users (LOWER(email));

-- Enable Row Level Security (RLS)
ALTER TABLE cert_users ENABLE ROW LEVEL SECURITY;

-- Allow service role / backend full access
CREATE POLICY "Public write cert_users" ON cert_users FOR INSERT WITH CHECK (true);
CREATE POLICY "Public read cert_users"  ON cert_users FOR SELECT USING (true);


----------------------------------------------------------------
-- OPTION 2: GoDaddy / MySQL Script
-- Run in phpMyAdmin or GoDaddy MySQL Command Line
----------------------------------------------------------------

/*
CREATE TABLE IF NOT EXISTS cert_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(50) NOT NULL,
  company VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  access_allowed TINYINT(1) DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY idx_cert_users_email (email)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
*/
