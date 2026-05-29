## 2024-05-15 - [CRITICAL] Prevent Hardcoded Fallbacks for Admin Credentials

**Vulnerability:** A known backdoor/hardcoded admin credential fallback was introduced in `src/lib/admin-auth.js` (`admin` / `kcc2024`).
**Learning:** Fallbacks for `import.meta.env` are common but dangerous for credentials if the environment variables aren't set in production. Using simple strings opens a known backdoor for anyone to guess.
**Prevention:** In client-side logic using environment variables (like Vite applications), always fall back to an unguessable value like `crypto.randomUUID()` to fail securely when credentials are not properly configured.
