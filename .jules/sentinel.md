## 2025-04-03 - Hardcoded Fallback Credentials in Admin Auth
**Vulnerability:** Found hardcoded credentials ('admin', 'kcc2024') used as fallbacks if environment variables were missing in `src/lib/admin-auth.js`.
**Learning:** Hardcoded credentials as fallbacks completely bypass the security intent of environment-based auth, risking unauthorized access if the environment configuration is accidentally omitted or misconfigured.
**Prevention:** Never use hardcoded secrets or default credentials for production-ready authentication. Always implement "fail securely" patterns—if required security configuration (like env variables) is missing, the system must securely deny access rather than silently falling back to a default.
