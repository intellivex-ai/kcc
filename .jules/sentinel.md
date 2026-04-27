## 2024-04-27 - Input Sanitization for Admin Data
**Vulnerability:** Unsanitized user inputs (inquiries, students) were directly inserted into the database, risking stored XSS when viewed in the admin dashboard.
**Learning:** Relying purely on Supabase's SQL injection protection is insufficient; application-level data sanitization is necessary to prevent malicious payloads from being stored and rendered in the admin UI.
**Prevention:** Always use established sanitization utilities (like `sanitizeInput`, `sanitizeEmail`) to sanitize data at the integration boundary (API or data library) before saving it to the database.
