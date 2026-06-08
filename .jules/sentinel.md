## 2024-06-08 - Fix Hardcoded Admin Fallback Credentials

**Vulnerability:** The application used hardcoded string values ('admin', 'kcc2024') as fallback credentials for admin authentication in `src/lib/admin-auth.js` when environment variables were not set. This exposes the application to unauthorized access, particularly in environments (like development, staging, or even poorly configured production instances) where the environment variables might be missing.

**Learning:** Hardcoded default credentials, even if intended as fallbacks for development, pose a critical security risk as they provide an easy entry point for attackers if the application is deployed without proper configuration. Relying on defaults is dangerous. The system should instead "fail securely."

**Prevention:** Never use predictable or hardcoded fallback credentials. If environment variables for authentication are required but missing, the application should either fail to start, or, as implemented here, fall back to secure, randomly generated values (e.g., using `crypto.randomUUID()`) to guarantee that no one can log in using default credentials while still allowing the application to run without crashing in non-production environments. Ensure fallback generation handles environments where `crypto` might be unavailable.
