## 2026-05-10 - Hardcoded Admin Credentials
**Vulnerability:** Admin authentication fell back to hardcoded default credentials ('admin'/'kcc2024') if env vars were missing. Additionally, change password used undefined 'DEFAULT_CREDENTIALS'.
**Learning:** Relying on default hardcoded fallbacks for admin auth creates a significant risk of deployment errors leading to exposed systems. It's better to fail securely if env vars are misconfigured.
**Prevention:** Never include hardcoded credential fallbacks for admin/privileged access; ensure environment variables are the sole source of truth.
