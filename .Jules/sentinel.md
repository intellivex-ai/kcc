## 2025-07-05 - Fix Hardcoded Credentials in Admin Auth
**Vulnerability:** A hardcoded fallback password (`'kcc2024'`) was discovered in `src/lib/admin-auth.js` for the admin login functionality, which exposes the system to unauthorized access if environment variables are not set.
**Learning:** Hardcoded credentials should never be used as fallbacks for authentication logic. It compromises system security by relying on a known, static secret when proper configuration is missing.
**Prevention:** Ensure that fallback logic fails securely (e.g., throwing an error or denying access) rather than falling back to a default, hardcoded secret.
