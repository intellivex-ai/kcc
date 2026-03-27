## 2024-03-27 - Hardcoded Admin Credentials in Client
**Vulnerability:** Found hardcoded fallback credentials (`admin`/`kcc2024`) in `src/lib/admin-auth.js` for `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD`.
**Learning:** Fallback credentials in client-side code act as a backdoor if environment variables fail to load in production, allowing unauthorized bypass.
**Prevention:** Never use hardcoded fallback values for sensitive credentials. Implement fail-secure logic that explicitly denies access if configuration is missing.
