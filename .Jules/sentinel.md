## 2024-06-20 - Hardcoded fallback for Admin Password

**Vulnerability:** A hardcoded admin password fallback ('kcc2024') was discovered in `src/lib/admin-auth.js` when environment variables were not available. This poses a CRITICAL security risk as it allows potential unauthorized admin access if the environment variable `VITE_ADMIN_PASSWORD` is omitted or misconfigured.
**Learning:** Even though environment variables are used for primary authentication, using a hardcoded string as a fallback for sensitive credentials is a major vulnerability, particularly in client-side code where the source is visible.
**Prevention:** Always use safe, random values (e.g., `crypto.randomUUID()` with a robust fallback like `Math.random()`) for default credentials, ensuring that failure to configure secure credentials results in a random, unknown string rather than a predictable, hardcoded one.
