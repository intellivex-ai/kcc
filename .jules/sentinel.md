## 2024-05-24 - Missing Input Sanitization in DB Layer
**Vulnerability:** Unsanitized user inputs passed directly to Supabase inserts/updates in admin-data.js.
**Learning:** Relying on ORMs for SQL injection protection does not prevent XSS or data integrity issues.
**Prevention:** Always sanitize inputs at the database boundary before insertion.
