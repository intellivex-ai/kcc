# Supabase Setup Guide

## Quick Start

Your KCC website is now configured to work with Supabase for real-time data persistence. Follow these steps to complete the setup:

---

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up for a free account (if you haven't already)
3. Click "New Project"
4. Fill in:
   - **Project Name:** kusum-computer-centre
   - **Database Password:** (create a strong password and save it)
   - **Region:** Choose closest to India (e.g., Mumbai or Singapore)

---

## Step 2: Get Your Credentials

1. After project is created, go to **Project Settings** (gear icon in sidebar)
2. Click **API** from the left menu
3.Copy these two values:
   - **Project URL** (looks like `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (long string under "Project API keys")

---

## Step 3: Update Your .env File

Open `.env` file in your project root and replace the placeholders:

```env
# Admin Authentication
VITE_ADMIN_USERNAME=Naveen
VITE_ADMIN_PASSWORD=kcc@2026

# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_actual_anon_key_here
```

**Replace:**
- `https://your-project-id.supabase.co` with your actual Project URL
- `your_actual_anon_key_here` with your actual anon public key

---

## Step 4: Run Database Schema

1. In your Supabase project, click **SQL Editor** from the left sidebar
2. Click **New query**
3. Open the file: `supabase/schema.sql` from your project
4. Copy ALL the contents and paste into the Supabase SQL editor
5. Click **Run** (or press Ctrl+Enter)

You should see "Success. No rows returned" - this is correct!

---

## Step 5: Verify Tables Created

1. Click **Table Editor** from the left sidebar
2. You should see two tables:
   - `inquiries`
   - `students`
3. Click on each to confirm they exist

---

## Step 6: Test the System

### Restart Your Dev Server

1. Stop the current dev server (Ctrl+C in terminal)
2. Run: `npm run dev`
3. The dev server will pick up the new environment variables

### Test Admin Panel

1. Go to `http://localhost:5173/admin/login`
2. Login with:
   - Username: `Naveen`
   - Password: `kcc@2026`
3. You should see the admin dashboard
4. Try adding/editing inquiries and students

### Test Contact Form

1. Go to the contact page on your website
2. Fill out and submit an inquiry
3. Check the admin panel - the inquiry should appear instantly!

---

## Troubleshooting

### Console Errors About Supabase

If you see warnings about placeholder credentials:
- Make sure you updated the `.env` file correctly
- Restart the dev server after changing `.env`

### Data Not Appearing

- Check the Supabase Table Editor to see if data is being inserted
- Check browser console (F12) for error messages
- Verify RLS policies are created (they should be from the schema)

### RLS (Row Level Security) Errors

If you get "new row violates row-level security policy" errors:
- Go to **Authentication** > **Policies** in Supabase
- Make sure the SQL schema ran successfully
- You can temporarily disable RLS for testing (not recommended for production)

---

## What's Working Now

✅ **Admin Panel**
- Login with Naveen / kcc@2026
- View, create, update, delete inquiries
- View, create, update, delete students
- Real-time analytics dashboard
- Data persists in PostgreSQL

✅ **Public Website**
- Contact form submissions save to database
- Inquiries visible instantly in admin panel

✅ **Security**
- Row Level Security (RLS) enabled
- Public can only INSERT inquiries
- Only authenticated admin can view/edit data

---

## Next Steps (Optional)

1. **Deploy to Production:** When ready, deploy both:
   - Your website (Vercel/Netlify/etc)
   - Set environment variables in hosting platform
   
2. **Custom Domain:** Add custom domain in Supabase project settings

3. **Backup:** Supabase handles automatic backups

4. **Monitoring:** Check Supabase dashboard for usage stats

---

## Need Help?

1. Check Supabase documentation: https://supabase.com/docs
2. Check browser console for errors (F12)
3. Verify credentials in `.env` file
4. Make sure schema.sql ran without errors
