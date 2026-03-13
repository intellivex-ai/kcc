## 2025-02-13 - [CRITICAL] Hardcoded Admin Credentials
**Vulnerability:** Default admin credentials ('admin', 'kcc2024') were hardcoded in `src/lib/admin-auth.js` as fallback values when `.env` variables were missing.
**Learning:** Fallback credentials in frontend code are extremely dangerous as they are visible in bundled JS files. Without `.env` variables present, anyone could authenticate to the admin panel using these well-known defaults.
**Prevention:** Never use hardcoded fallbacks for authentication credentials. Instead, fail securely by explicitly blocking the authentication attempt if the required environment configuration is missing.
