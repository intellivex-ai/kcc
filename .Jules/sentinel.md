## 2025-03-05 - Hardcoded Admin Credentials Fallback
**Vulnerability:** Hardcoded fallback credentials ('admin' and 'kcc2024') in `src/lib/admin-auth.js`.
**Learning:** Fallback credentials create a backdoor if environment variables fail to load.
**Prevention:** Always use securely generated random strings for fallback credentials so misconfigurations lead to secure failures.
