## 2026-05-11 - Removed Hardcoded Admin Fallback Credentials
**Vulnerability:** Hardcoded admin fallback credentials ('admin'/'kcc2024') in src/lib/admin-auth.js allowed access if environment variables were misconfigured.
**Learning:** Fallback defaults for authentication credentials bypass environment configuration, ensuring the app starts but introducing a critical risk where an attacker can access the system using known default credentials if env vars are missing.
**Prevention:** Fail securely if authentication environment variables are not configured instead of providing a fallback.
