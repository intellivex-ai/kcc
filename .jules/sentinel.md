## 2026-04-20 - Hardcoded Fallback Credentials in Vite Bundle
**Vulnerability:** Hardcoded fallback credentials (admin / kcc2024) were used for VITE_ADMIN_USERNAME and VITE_ADMIN_PASSWORD.
**Learning:** In client-side Vite projects, literal string fallbacks for environment variables are embedded directly into the public build output, making them permanently exposed.
**Prevention:** Never use string literal fallbacks for sensitive environment variables in frontend code. Always fail securely if credentials are missing.
