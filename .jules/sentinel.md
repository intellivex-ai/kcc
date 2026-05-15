## 2024-05-15 - Fix Hardcoded Admin Credentials Fallback

**Vulnerability:** Hardcoded admin credentials (`admin` / `kcc2024`) were used as fallbacks in `src/lib/admin-auth.js` when environment variables `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD` were missing.
**Learning:** This is a critical security vulnerability. If the application is deployed without properly configuring the environment variables, the system becomes accessible using widely known default credentials. This breaks the principle of failing securely.
**Prevention:** Use `crypto.randomUUID()` as the fallback for credentials when environment variables are not provided. This ensures that the application fails securely by generating unguessable credentials rather than falling back to a known backdoor.
