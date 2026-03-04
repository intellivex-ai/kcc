## 2025-03-03 - Hardcoded Admin Credentials Fallback
**Vulnerability:** The client-side application had hardcoded fallback admin credentials (`admin` / `kcc2024`) in `src/lib/admin-auth.js` for when environment variables were not explicitly set.
**Learning:** In client-side Vite applications, if the environment variables are missing during build, the codebase falls back to easily guessable hardcoded strings, bypassing intended security boundaries. Relying on default fallbacks in source code allows anyone inspecting the JS bundle to bypass the admin dashboard authentication.
**Prevention:** Never provide fallback defaults for security credentials in source code. Use environment variables strictly.
