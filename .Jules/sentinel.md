## 2025-07-02 - Removed Hardcoded Admin Fallback Password
**Vulnerability:** The admin authentication configuration in src/lib/admin-auth.js contained a hardcoded fallback password (kcc2024) for the admin user. This means if VITE_ADMIN_PASSWORD is not set, anyone can log in as admin with this known password.
**Learning:** Default fallback values for secrets introduce a critical vulnerability if the environment variable fails to load.
**Prevention:** Never provide a fallback value for secrets or passwords in source code. Instead, fail securely (deny access or throw an error) if the required configuration is missing.
