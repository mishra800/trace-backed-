-- =============================================================
-- SQL Query to Create the new Admin User ('trace')
-- Run this in the Supabase SQL Editor:
-- https://app.supabase.com → your project → SQL Editor
-- =============================================================

INSERT INTO admin_users (username, password)
VALUES (
  'trace', 
  -- Hashed value for password 'pinkman'
  '$2b$10$Ga3p.S/nnS7d8bIHwrm/G.6LzFVPERa57ecEyzGw90l14WUm.PZGi'
)
ON CONFLICT (username) 
DO UPDATE SET password = EXCLUDED.password;
