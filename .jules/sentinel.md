## 2024-05-17 - Fix hardcoded fallback credentials in Vite app

**Vulnerability:** The application used hardcoded fallback credentials (`'admin'` / `'kcc2024'`) for the admin account if environment variables `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD` were missing.
**Learning:** In client-side Vite applications, it is crucial to handle missing environment variables securely. Using hardcoded credentials as fallbacks creates a known backdoor.
**Prevention:** Use `crypto.randomUUID()` as a fallback for missing credentials to ensure the application "fails securely" by generating unguessable credentials rather than allowing access with hardcoded values.
