## 2024-05-24 - [CRITICAL] Fixed Hardcoded Default Admin Credentials
**Vulnerability:** The `ADMIN_CREDENTIALS` logic in `src/lib/admin-auth.js` relied on `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD` from the environment, but used hardcoded strings (`'admin'` and `'kcc2024'`) as fallbacks.
**Learning:** These fallbacks acted as a backdoor if the environment variables were missing, which is a common misconfiguration in client-side applications.
**Prevention:** Always use secure, unguessable fallback values, such as `crypto.randomUUID()`, when environment variables for credentials might be missing. This ensures the application "fails securely" by requiring explicit configuration rather than defaulting to known credentials.
