## 2024-05-18 - Hardcoded Default Credentials
**Vulnerability:** The `ADMIN_CREDENTIALS` in `src/lib/admin-auth.js` used hardcoded fallback values ('admin' and 'kcc2024') if environment variables were missing. This exposes a known default password in the client bundle.
**Learning:** Never use hardcoded default passwords for admin authentication, as they can be easily discovered and exploited if the environment is misconfigured.
**Prevention:** Fail securely if environment variables are missing instead of falling back to insecure defaults.
