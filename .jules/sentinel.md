## 2024-05-15 - Hardcoded Fallback Credentials in Admin Auth
**Vulnerability:** Hardcoded fallback credentials ('admin'/'kcc2024') in `src/lib/admin-auth.js` would grant access if environment variables were missing.
**Learning:** In Vite apps, client-side code expects environment variables for admin auth but can fall back to hardcoded defaults, inadvertently creating a known backdoor.
**Prevention:** Use `crypto.randomUUID()` as a fallback for missing credentials to ensure the app fails securely.
