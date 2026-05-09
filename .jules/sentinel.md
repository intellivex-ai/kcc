## 2026-05-09 - Remove Hardcoded Admin Credentials
**Vulnerability:** Hardcoded fallback credentials ('admin' and 'kcc2024') were present in the admin authentication logic.
**Learning:** Relying on default fallbacks for sensitive credentials bypasses secure configuration enforcement and provides an easy attack vector if environment variables are missing.
**Prevention:** Never provide default hardcoded passwords for authentication credentials; the application should fail securely if configuration is missing.
