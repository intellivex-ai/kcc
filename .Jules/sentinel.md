## 2024-06-26 - Hardcoded Admin Credentials Fallback
**Vulnerability:** The admin authentication library (`src/lib/admin-auth.js`) had hardcoded default credentials ('admin' and 'kcc2024') as fallbacks if environment variables were missing.
**Learning:** Providing hardcoded credentials as a fallback mechanism for environment variables is a critical security risk as it allows unauthorized access if the application is misconfigured or deployed without proper environment variables.
**Prevention:** Always use secure random generation for fallback credentials (e.g., `crypto.randomUUID()`) to fail securely and ensure the application cannot be accessed with predictable default credentials if environment variables are missing.
