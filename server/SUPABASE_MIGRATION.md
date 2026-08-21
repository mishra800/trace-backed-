# Supabase Migration Guide

The backend has been fully migrated from **Aiven MySQL** to **Supabase (PostgreSQL)**.

---

## Step 1 — Create a Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com) and sign in
2. Click **New Project** → give it a name (e.g. `trace-network`) → set a database password → choose a region → **Create Project**
3. Wait ~2 minutes for provisioning

---

## Step 2 — Run the Database Schema

1. In your Supabase dashboard → **SQL Editor** → **New query**
2. Paste the entire contents of `supabase-setup.sql`
3. Click **Run**

This creates all tables: `blogs`, `events`, `contact_submissions`, `career_applications`, `admin_users`

---

## Step 3 — Create Storage Buckets

In Supabase dashboard → **Storage** → **New bucket**, create these 3 buckets:

| Bucket name    | Public? |
|----------------|---------|
| `blog-images`  | ✅ Yes  |
| `event-images` | ✅ Yes  |
| `resumes`      | ❌ No   |

---

## Step 4 — Get Your API Keys

In Supabase dashboard → **Settings** → **API**:

- Copy **Project URL** → this is your `SUPABASE_URL`
- Copy **service_role** key → this is your `SUPABASE_SERVICE_ROLE_KEY` (**never expose this in the frontend**)
- Copy **anon / public** key → this is your `VITE_SUPABASE_ANON_KEY` (safe for frontend)

---

## Step 5 — Update Environment Variables

Edit `server/.env`:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
JWT_SECRET=your-long-random-string-here
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
CONTACT_TO_EMAIL=Support@tracenetwork.in
PORT=5000
```

---

## Step 6 — Install Dependencies

```bash
cd server
npm install
```

---

## Step 7 — Seed Admin Users

```bash
cd server
node seed-admins.js
```

This inserts the default admin accounts with bcrypt-hashed passwords into Supabase.

---

## Step 8 — Start the Server

```bash
# Development
npm run dev

# Production
npm start
```

---

## What Changed

| Before (MySQL)            | After (Supabase)                          |
|---------------------------|-------------------------------------------|
| `mysql2` connection pool  | `@supabase/supabase-js` client            |
| Raw SQL queries           | Supabase JS query builder                 |
| Base64 images in DB       | Images uploaded to Supabase Storage (URLs)|
| No contact form DB saves  | All submissions saved to Supabase tables  |
| Hardcoded admin passwords | Admin users stored in `admin_users` table |
| `setup-db.js` (MySQL)     | `supabase-setup.sql` + `seed-admins.js`   |

---

## API Endpoints (unchanged)

All existing API endpoints remain the same — no frontend changes needed:

- `GET/POST/PUT/DELETE /api/blogs`
- `GET/POST/PUT/DELETE /api/events`
- `POST /api/contact/send`
- `POST /api/contact/submit`
- `POST /api/contact/service-request`
- `POST /api/auth/login`
- `GET  /api/auth/me`
- `POST /api/auth/change-password` *(new)*
