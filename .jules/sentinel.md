## 2024-05-07 - [Remove hardcoded fallback credentials]
**Vulnerability:** Fallback default credentials (admin / kcc2024) were hardcoded in `src/lib/admin-auth.js` for admin login.
**Learning:** Default credentials embedded in the code create a severe security risk if the environment variables are ever unconfigured, allowing anyone to gain administrative access using well-known defaults.
**Prevention:** Ensure that security-sensitive credentials strictly rely on secure environment configurations without insecure hardcoded fallbacks.
