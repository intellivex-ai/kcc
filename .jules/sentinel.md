## 2024-05-24 - Hardcoded Fallback Credentials in Admin Auth
**Vulnerability:** Admin authentication fallback credentials (`admin` / `kcc2024`) were hardcoded in `src/lib/admin-auth.js`.
**Learning:** Hardcoding fallback credentials as default values for undefined environment variables (`VITE_ADMIN_USERNAME`, `VITE_ADMIN_PASSWORD`) exposes the application to unauthorized bypass, as these values are compiled directly into the client-side JavaScript bundle and provide a known backdoor if environment variables are ever unconfigured.
**Prevention:** Never use hardcoded fallback credentials in code. Ensure that authentication logic explicitly checks for valid configuration and fails securely if required credentials or environment variables are missing.
