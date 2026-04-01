## 2026-04-01 - Removed hardcoded admin credentials
**Vulnerability:** Found hardcoded fallback credentials (`'admin'`, `'kcc2024'`) for the admin authentication in `src/lib/admin-auth.js`.
**Learning:** Hardcoded credentials can easily bypass the intended environment variable-based authentication mechanism.
**Prevention:** Always fail securely if environment variables are missing instead of falling back to default, easily guessable credentials.