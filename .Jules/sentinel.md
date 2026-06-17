## 2024-06-17 - Fix Hardcoded Admin Fallback Credentials

**Vulnerability:** The application used hardcoded fallback credentials ('admin'/'kcc2024') for `ADMIN_CREDENTIALS` in `src/lib/admin-auth.js` if environment variables were not set. This allows unauthorized access in misconfigured environments.

**Learning:** When environment variables are missing, fallback credentials should not be easily guessable or hardcoded. They should either fail to start or use dynamically generated values that effectively block access until properly configured.

**Prevention:** Ensure that sensitive credentials either throw an error if environment variables are not found during build/startup, or use a secure random fallback generator (e.g., `crypto.randomUUID()`) to prevent predictable default access. Additionally, fixed a bug where `DEFAULT_CREDENTIALS` was referenced instead of `ADMIN_CREDENTIALS`.
