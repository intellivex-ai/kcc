## 2024-07-03 - Hardcoded Admin Credentials Fallback
**Vulnerability:** A hardcoded password fallback ('kcc2024') was used for the admin authentication in src/lib/admin-auth.js if the environment variable was missing.
**Learning:** Hardcoded fallbacks for credentials in client-side code bypass intended environment-based security controls and can easily be extracted from the compiled bundle.
**Prevention:** Always rely strictly on environment variables for sensitive credentials and handle their absence securely (e.g., by denying access), rather than providing insecure default values.
