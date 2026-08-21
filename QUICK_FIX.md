# ⚡ Quick Fix Summary

## The Problem
Your frontend is deployed but trying to call `http://localhost:5000` which doesn't exist in production.

## The Solution (3 Steps)

### 1️⃣ Deploy Backend (5 minutes)
```
1. Go to render.com → Sign up
2. New Web Service → Connect GitHub
3. Root Directory: server
4. Add environment variables (copy from server/.env)
5. Deploy → Get URL (e.g., https://trace-backend-xyz.onrender.com)
```

### 2️⃣ Update Netlify (2 minutes)
```
1. Netlify Dashboard → Your Site → Site Settings
2. Environment Variables → Add Variable
3. Key: VITE_API_URL
4. Value: https://YOUR-RENDER-URL.onrender.com/api
5. Save
```

### 3️⃣ Redeploy (2 minutes)
```
1. Netlify → Deploys → Trigger Deploy
2. Wait for completion
3. Test: https://tracenetwork.netlify.app/admin
```

## Environment Variables for Render

Copy these to Render's environment variables section:

```env
PORT=5000
DB_HOST=mysql-2486df3a-abhishekmishra-bd19.i.aivencloud.com
DB_PORT=14765
DB_USER=avnadmin
DB_PASSWORD=<YOUR_DB_PASSWORD>
DB_NAME=defaultdb
DB_SSL=true
JWT_SECRET=supersecretjwtkey_replace_me
EMAIL_USER=yamunaatoms@gmail.com
EMAIL_PASS=cotd dkvd fsnw ypdh
```

## Test Login
- URL: https://tracenetwork.netlify.app/admin
- Username: `admin`
- Password: `admin@123`

## Files Already Updated
✅ `server/server.js` - CORS configured for production
✅ `dist/` folder - Built and ready
✅ Database - Already deployed and working

## What You Need to Do
🔲 Deploy backend to Render
🔲 Add VITE_API_URL to Netlify
🔲 Redeploy Netlify site

That's it! 🎉
