## 2024-06-23 - Hardcoded Admin Credentials
**Vulnerability:** Hardcoded admin username ('admin') and password ('kcc2024') were present in `src/lib/admin-auth.js` as fallback values for environment variables.
**Learning:** Hardcoded credentials can easily be checked into version control, exposing sensitive information. The `changePassword` function also threw a `ReferenceError` due to a typo accessing `DEFAULT_CREDENTIALS` instead of `ADMIN_CREDENTIALS`.
**Prevention:** Always use secure environment variables without default hardcoded fallbacks for credentials. Use secure random fallback generators (like `crypto.randomUUID()`) to fail securely if variables are missing.
