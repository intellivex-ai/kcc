## 2024-05-15 - Hardcoded Fallback Credentials
**Vulnerability:** The admin authentication library (`src/lib/admin-auth.js`) used hardcoded fallback credentials (`'admin'` and `'kcc2024'`) when environment variables were missing.
**Learning:** This is a critical security vulnerability because if the environment variables fail to load or are misconfigured, any user could potentially bypass authentication using the hardcoded credentials. A system should always fail securely.
**Prevention:** Do not use fallback credentials for authentication in client or server code. If environment variables are missing, the authentication system should throw an error or fail authentication, ensuring unauthorized access is not granted.
