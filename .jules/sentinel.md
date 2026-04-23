## 2026-04-23 - Hardcoded Fallback Credentials
**Vulnerability:** Client-side fallback credentials for admin authentication were hardcoded in `src/lib/admin-auth.js`.
**Learning:** In client-side Vite projects, literal string fallbacks for environment variables (like `VITE_ADMIN_PASSWORD || 'kcc2024'`) are embedded in the build output, exposing sensitive credentials if the environment variable is missing.
**Prevention:** Implement a secure failure state (e.g., return an error if credentials are missing) instead of providing hardcoded defaults.
