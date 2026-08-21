# 🏗️ Application Architecture

## Current Setup (BROKEN ❌)

```
┌─────────────────────────────────────┐
│  Netlify (Frontend)                 │
│  https://tracenetwork.netlify.app   │
│                                     │
│  Trying to call:                    │
│  http://localhost:5000/api ❌       │
└─────────────────────────────────────┘
           │
           │ CORS Error!
           │ Network Error!
           ▼
    ❌ localhost:5000
    (Doesn't exist in production)
```

## Fixed Setup (WORKING ✅)

```
┌─────────────────────────────────────┐
│  Netlify (Frontend)                 │
│  https://tracenetwork.netlify.app   │
│                                     │
│  Environment Variable:              │
│  VITE_API_URL=                      │
│  https://trace-backend.onrender.com │
└─────────────────────────────────────┘
           │
           │ ✅ HTTPS Request
           │
           ▼
┌─────────────────────────────────────┐
│  Render (Backend)                   │
│  https://trace-backend.onrender.com │
│                                     │
│  Node.js + Express Server           │
│  CORS: Allow Netlify domain         │
└─────────────────────────────────────┘
           │
           │ ✅ MySQL Connection
           │
           ▼
┌─────────────────────────────────────┐
│  Aiven (Database)                   │
│  mysql-2486df3a...aivencloud.com    │
│                                     │
│  MySQL Database (Already Working)   │
└─────────────────────────────────────┘
```

## Component Breakdown

### 1. Frontend (React + Vite)
- **Location**: `dist/` folder
- **Hosted on**: Netlify
- **URL**: https://tracenetwork.netlify.app
- **Status**: ✅ Deployed
- **Issue**: Calling wrong backend URL

### 2. Backend (Node.js + Express)
- **Location**: `server/` folder
- **Needs hosting**: Render.com or Railway.app
- **URL**: Not deployed yet ❌
- **Status**: ❌ Not deployed
- **Issue**: This is the main problem!

### 3. Database (MySQL)
- **Hosted on**: Aiven Cloud
- **URL**: mysql-2486df3a-abhishekmishra-bd19.i.aivencloud.com
- **Status**: ✅ Already working
- **Issue**: None

## Data Flow

### Login Request Flow:
```
1. User enters credentials on /admin page
   ↓
2. Frontend sends POST to VITE_API_URL/auth/login
   ↓
3. Backend receives request, validates credentials
   ↓
4. Backend queries MySQL database (if needed)
   ↓
5. Backend returns JWT token
   ↓
6. Frontend stores token in localStorage
   ↓
7. User redirected to /admin/dashboard
```

### Current Problem:
```
1. User enters credentials ✅
   ↓
2. Frontend sends POST to http://localhost:5000/api/auth/login ❌
   ↓
3. CORS Error! Network Error! ❌
   ↓
4. Login fails ❌
```

### After Fix:
```
1. User enters credentials ✅
   ↓
2. Frontend sends POST to https://trace-backend.onrender.com/api/auth/login ✅
   ↓
3. Backend processes request ✅
   ↓
4. Returns JWT token ✅
   ↓
5. Login successful! ✅
```

## Environment Variables

### Frontend (.env)
```env
VITE_API_URL=https://trace-backend.onrender.com/api
```
**Note**: This must be set in Netlify dashboard, not just in local .env file!

### Backend (server/.env)
```env
PORT=5000
DB_HOST=mysql-2486df3a-abhishekmishra-bd19.i.aivencloud.com
DB_PORT=14765
DB_USER=avnadmin
DB_PASSWORD=<YOUR_DB_PASSWORD>
DB_NAME=defaultdb
DB_SSL=true
JWT_SECRET=supersecretjwtkey_replace_me
```
**Note**: These must be set in Render dashboard!

## CORS Configuration

### Why CORS?
Browsers block requests from one domain to another for security. Since your frontend is on `netlify.app` and backend is on `onrender.com`, you need to explicitly allow it.

### Current CORS Setup (Fixed):
```javascript
const corsOptions = {
    origin: [
        'http://localhost:5173',           // Local development
        'https://tracenetwork.netlify.app', // Production frontend
        'https://tracenetwork.in',          // Custom domain
    ],
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
```

## Deployment Checklist

- [ ] Backend code pushed to GitHub
- [ ] Render service created and configured
- [ ] Environment variables added to Render
- [ ] Backend deployed and URL obtained
- [ ] VITE_API_URL added to Netlify
- [ ] Frontend redeployed on Netlify
- [ ] Login tested and working
- [ ] All API endpoints tested

## URLs Reference

| Component | Local Development | Production |
|-----------|------------------|------------|
| Frontend | http://localhost:5173 | https://tracenetwork.netlify.app |
| Backend | http://localhost:5000 | https://trace-backend.onrender.com |
| Database | mysql://localhost:3306 | mysql-2486df3a...aivencloud.com:14765 |

## Common Errors & Solutions

### Error: "CORS policy blocked"
**Cause**: Backend not allowing frontend domain
**Fix**: Update CORS origins in server.js (already done ✅)

### Error: "Network Error"
**Cause**: Backend URL is localhost or wrong
**Fix**: Set VITE_API_URL in Netlify environment variables

### Error: "Cannot read properties of null"
**Cause**: API response is null/undefined
**Fix**: Check backend logs on Render dashboard

### Error: "Login failed"
**Cause**: Backend not running or database connection failed
**Fix**: Check Render logs and database credentials

## Next Steps

1. **Deploy Backend**: Follow QUICK_FIX.md
2. **Configure Netlify**: Add environment variable
3. **Test**: Try logging in
4. **Monitor**: Check Render logs for any issues

## Support

If you need help:
1. Check Render logs: Dashboard → Your Service → Logs
2. Check Netlify logs: Dashboard → Deploys → View logs
3. Check browser console: F12 → Console tab
4. Check network requests: F12 → Network tab
