## 2026-03-21 - [Hardcoded Admin Fallback Credentials]
**Vulnerability:** Hardcoded default fallback credentials (`admin` / `kcc2024`) were found in `src/lib/admin-auth.js` when environment variables `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD` were missing.
**Learning:** Providing fallback credentials in the client-side authentication library creates a critical vulnerability if environment variables fail to load or are misconfigured in production, allowing unauthorized users to bypass authentication.
**Prevention:** Never provide fallback defaults for sensitive credentials. The application should fail securely and deny access if environment-based credentials are not found.
