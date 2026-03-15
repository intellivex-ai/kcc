## 2024-05-14 - Inquiry Form Input Missing Sanitization
**Vulnerability:** The `src/components/InquiryForm.jsx` submits unsanitized user inputs to the Supabase database.
**Learning:** This introduces a Cross-Site Scripting (XSS) vulnerability. If these unsanitized inputs are rendered on the frontend without proper HTML escaping, malicious scripts could execute in users' browsers.
**Prevention:** Always validate and sanitize user input *before* persisting it to the database, particularly when it might be displayed to others. Use utilities like `sanitizeInput`, `sanitizeEmail`, and `sanitizePhone` to strip out dangerous characters and HTML tags.
