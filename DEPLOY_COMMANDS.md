# 🚀 Deployment Commands

## Option 1: Deploy Backend to Render (Recommended)

### Step 1: Prepare Backend for Deployment

```bash
# Navigate to server directory
cd server

# Make sure package.json exists
# Check if all dependencies are listed
npm install

# Test locally first
node server.js
```

### Step 2: Create Render Service

**Via Render Dashboard:**
1. Go to https://render.com
2. Sign up / Log in
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `trace-backend`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: Free

### Step 3: Add Environment Variables in Render

Click "Advanced" → Add these variables:

```
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

### Step 4: Deploy

Click "Create Web Service" and wait for deployment.

You'll get a URL like: `https://trace-backend-xyz.onrender.com`

---

## Option 2: Deploy Backend to Railway

### Step 1: Install Railway CLI (Optional)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
cd server
railway init

# Add environment variables
railway variables set PORT=5000
railway variables set DB_HOST=mysql-2486df3a-abhishekmishra-bd19.i.aivencloud.com
railway variables set DB_PORT=14765
railway variables set DB_USER=avnadmin
railway variables set DB_PASSWORD=<YOUR_DB_PASSWORD>
railway variables set DB_NAME=defaultdb
railway variables set DB_SSL=true
railway variables set JWT_SECRET=supersecretjwtkey_replace_me
railway variables set EMAIL_USER=yamunaatoms@gmail.com
railway variables set EMAIL_PASS="cotd dkvd fsnw ypdh"

# Deploy
railway up
```

### Step 2: Get Railway URL

```bash
railway domain
```

---

## Update Netlify Environment Variables

### Via Netlify Dashboard:

1. Go to https://app.netlify.com
2. Select your site
3. Site settings → Environment variables
4. Add variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://YOUR-BACKEND-URL.onrender.com/api`

### Via Netlify CLI (Alternative):

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Link to your site
netlify link

# Set environment variable
netlify env:set VITE_API_URL "https://YOUR-BACKEND-URL.onrender.com/api"

# Trigger rebuild
netlify deploy --prod
```

---

## Rebuild and Deploy Frontend

### Option A: Via Netlify Dashboard

1. Go to Netlify Dashboard
2. Deploys → Trigger deploy → Deploy site

### Option B: Via Git Push

```bash
# Make sure all changes are committed
git add .
git commit -m "Update backend URL and CORS configuration"
git push origin main

# Netlify will auto-deploy
```

### Option C: Manual Deploy

```bash
# Build locally
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

---

## Verify Deployment

### Test Backend

```bash
# Test if backend is running
curl https://YOUR-BACKEND-URL.onrender.com/api/auth/me

# Should return: {"message":"No token provided."}
```

### Test Frontend

1. Open browser: https://tracenetwork.netlify.app/admin
2. Open DevTools (F12) → Console
3. Try logging in with:
   - Username: `admin`
   - Password: `admin@123`
4. Check Network tab for API calls

---

## Troubleshooting Commands

### Check Backend Logs (Render)

```bash
# Via Render Dashboard
# Go to: Dashboard → Your Service → Logs
```

### Check Netlify Logs

```bash
# Via Netlify CLI
netlify logs

# Or via dashboard
# Go to: Dashboard → Deploys → Click latest deploy → View logs
```

### Test Database Connection

```bash
# From your local machine
cd server
node -e "const db = require('./db'); db.query('SELECT 1').then(() => console.log('DB Connected!')).catch(err => console.error('DB Error:', err));"
```

### Clear Netlify Cache

```bash
# Via Netlify CLI
netlify build --clear-cache

# Then redeploy
netlify deploy --prod
```

---

## Quick Reference

### Backend URLs
- **Local**: http://localhost:5000
- **Render**: https://trace-backend-xyz.onrender.com
- **Railway**: https://trace-backend.up.railway.app

### Frontend URLs
- **Local**: http://localhost:5173
- **Netlify**: https://tracenetwork.netlify.app

### Database URL
- **Aiven**: mysql-2486df3a-abhishekmishra-bd19.i.aivencloud.com:14765

---

## Environment Variables Summary

### Frontend (Netlify)
```env
VITE_API_URL=https://YOUR-BACKEND-URL.onrender.com/api
VITE_API_TIMEOUT=10000
VITE_APP_NAME=Trace Network & Engineering
VITE_APP_URL=https://tracenetwork.in
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHATBOT=true
VITE_GA_TRACKING_ID=G-5QYGDDYL0Q
```

### Backend (Render/Railway)
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

---

## Post-Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Backend URL saved
- [ ] Environment variables set in Netlify
- [ ] Frontend redeployed
- [ ] Login page loads without errors
- [ ] Can log in successfully
- [ ] Admin dashboard accessible
- [ ] Events page works
- [ ] Blogs page works
- [ ] Contact form works
- [ ] No CORS errors in console
- [ ] No network errors in console

---

## Need Help?

### Check Logs
```bash
# Render logs
# Dashboard → Your Service → Logs

# Netlify logs
netlify logs

# Browser console
# F12 → Console tab
```

### Common Issues

**Issue**: "Cannot find module"
```bash
cd server
npm install
```

**Issue**: "Port already in use"
```bash
# Kill process on port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac:
lsof -ti:5000 | xargs kill -9
```

**Issue**: "Database connection failed"
```bash
# Check environment variables
# Make sure DB_SSL=true for Aiven
```

---

## Success! 🎉

Once everything is working:
- Frontend: https://tracenetwork.netlify.app
- Backend: https://YOUR-BACKEND-URL.onrender.com
- Admin: https://tracenetwork.netlify.app/admin

Login with:
- Username: `admin`
- Password: `admin@123`
