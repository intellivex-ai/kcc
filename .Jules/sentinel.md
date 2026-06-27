## 2024-06-27 - Fix hardcoded admin credentials

**Vulnerability:** Found hardcoded fallback credentials ('admin' / 'kcc2024') in `src/lib/admin-auth.js` that could be used to bypass authentication in environments missing explicit VITE_ADMIN_USERNAME and VITE_ADMIN_PASSWORD variables.
**Learning:** Default fallback values for security-sensitive environment variables create a severe risk because they are universally known and allow unauthorized access when proper configuration is omitted. Replacing missing config with random values rather than crashing prevents the app from breaking in non-secure or misconfigured environments, while remaining secure.
**Prevention:** Always use secure fallback generation (e.g., random secure strings) when security-critical environment variables are missing, instead of using predictable default values.
