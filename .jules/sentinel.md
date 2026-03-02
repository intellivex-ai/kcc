## 2025-03-02 - Removed Hardcoded Admin Credentials
**Vulnerability:** Default admin credentials ('admin' / 'kcc2024') were hardcoded as fallback values in `src/lib/admin-auth.js` if environment variables were missing.
**Learning:** Hardcoded fallbacks for credentials completely negate the security of environment variables, as any attacker can simply omit them and use the hardcoded ones. In this case, Vite environment variables are shipped to the client, so hardcoding them means anyone inspecting the bundle can log in as admin.
**Prevention:** Never use OR (`||`) operators to provide default values for sensitive credentials. If credentials are not provided via environment configuration, the application should fail securely (deny access).
