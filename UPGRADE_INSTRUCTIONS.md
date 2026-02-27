# Database Upgrade Instructions

To enable the new features (Online Admission, Results, Newsletter), you need to update your Supabase database schema.

## Steps

1.  **Log in to Supabase**: Go to your project dashboard.
2.  **Open SQL Editor**: Click on the SQL Editor icon in the left sidebar.
3.  **New Query**: Click "New query".
4.  **Copy & Paste**: Open the file `supabase/upgrade.sql` from this repository, copy all its content, and paste it into the SQL editor.
5.  **Run**: Click the "Run" button.

## Verification

After running the script, go to the **Table Editor** and verify that:

-   `subscribers` table exists.
-   `results` table exists.
-   `students` table has new columns (`gender`, `batch_time`, `qualification`, `percentage`, etc.).

## Troubleshooting

If you encounter errors about "relation already exists", it means some parts of the schema might already be applied. The script uses `IF NOT EXISTS` to be safe, but manual checking might be required if schema drift occurred.
