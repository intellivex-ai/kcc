## 2024-05-14 - Hardcoded Admin Fallback Credentials Expose Unauthenticated Access

**Vulnerability:** The admin authentication library (`src/lib/admin-auth.js`) used hardcoded fallback credentials (`'admin'` / `'kcc2024'`) when the corresponding environment variables (`VITE_ADMIN_USERNAME` / `VITE_ADMIN_PASSWORD`) were not set. Additionally, `changePassword` checked against an undefined `DEFAULT_CREDENTIALS` object instead of the parsed `ADMIN_CREDENTIALS`.
**Learning:** Hardcoded fallbacks undermine the security of environment-variable-based credential management, as deployment environments missing these variables would silently default to known, guessable values, allowing unauthorized bypass.
**Prevention:** Always fail securely by throwing an error or denying access when critical configuration values like credentials or API keys are missing from the environment. Never inject hardcoded sensitive defaults into application code.
