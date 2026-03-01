## 2024-06-25 - [Removed Hardcoded Admin Fallback Credentials]
**Vulnerability:** A critical vulnerability was found where the frontend `src/lib/admin-auth.js` file used hardcoded fallback admin credentials (`|| 'admin'` and `|| 'kcc2024'`). This exposes the admin credentials in the client-side JavaScript bundle, making it accessible to any user inspecting the site's source code.
**Learning:** Default fallback values should never be used for credentials or secrets in frontend code. Any default values will end up in the production bundle and be visible to end users.
**Prevention:** Environment variables for authentication and sensitive operations should be required and strictly validated. Do not provide fallback defaults for secrets in the codebase.
