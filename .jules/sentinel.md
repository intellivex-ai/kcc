## 2024-05-31 - Fix hardcoded admin credentials fallback
**Vulnerability:** Hardcoded fallback credentials ('admin', 'kcc2024') were used in `src/lib/admin-auth.js` for environment variables `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD`.
**Learning:** This exposes a backdoor for attackers to gain admin access if the environment variables are missing. Using `crypto.randomUUID()` as a fallback ensures the application fails securely.
**Prevention:** Always use random, unguessable fallbacks (like `crypto.randomUUID()`) for missing credential environment variables to ensure the application fails securely instead of providing hardcoded access.
