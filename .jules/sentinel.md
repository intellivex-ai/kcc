## 2024-04-03 - Removed Hardcoded Admin Credentials
**Vulnerability:** The application had hardcoded fallback administrative credentials (`admin` / `kcc2024`) in `src/lib/admin-auth.js`.
**Learning:** Having fallback credentials is a major security risk because if environment variables fail to load or are misconfigured, attackers can easily guess or find the default credentials to gain administrative access.
**Prevention:** Fail securely if environment variables for credentials are not provided instead of falling back to default hardcoded credentials.