## 2026-04-10 - Hardcoded Credential Fallbacks in Client-Side Builds
**Vulnerability:** Client-side environment variable fallbacks for admin credentials (`import.meta.env.VITE_ADMIN_USERNAME || 'admin'`) were present in `src/lib/admin-auth.js`.
**Learning:** In client-side build tools like Vite, literal string fallbacks for environment-based credentials become permanently embedded in publicly readable build outputs (e.g., JavaScript bundles), compromising authentication if environment variables are not strictly loaded during build.
**Prevention:** Remove literal fallback credentials in code. Ensure missing environment variables lead to a secure failure state (e.g., denying authentication) rather than a hardcoded default that could be exploited in production.
