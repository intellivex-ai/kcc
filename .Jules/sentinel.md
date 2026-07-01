## 2024-07-01 - Hardcoded Admin Credentials in Frontend
**Vulnerability:** Found hardcoded fallback credentials ('admin' and 'kcc2024') for admin authentication directly in the source code.
**Learning:** Fallback values for environment variables in client-side code can expose sensitive credentials if the environment variables are not set during the build.
**Prevention:** Never use default fallback values for sensitive credentials in source code. Fail securely if environment variables are missing.
