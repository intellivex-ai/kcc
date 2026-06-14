## 2024-06-14 - Fix Hardcoded Admin Password Fallback
**Vulnerability:** A hardcoded admin password fallback (`'kcc2024'`) was discovered in `src/lib/admin-auth.js` when environment variables were missing.
**Learning:** Hardcoded credentials even as fallbacks present a severe security risk if the `.env` file is misconfigured or missing in production. Using a dynamically generated random string prevents simple guessing and standard dictionary attacks on default deployments.
**Prevention:** Always use secure dynamic fallbacks (e.g., `crypto.randomUUID()`) when actual credentials or secrets are missing from the environment, and fail securely without providing access to generic/default passwords.
