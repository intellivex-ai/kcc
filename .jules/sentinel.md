## 2026-05-08 - Remove Hardcoded Fallback Credentials
**Vulnerability:** Hardcoded admin credentials ('admin' and 'kcc2024') were used as fallbacks for missing environment variables in src/lib/admin-auth.js, and there was an undefined DEFAULT_CREDENTIALS reference.
**Learning:** Providing hardcoded fallbacks for authentication logic introduces default credentials that can be exploited if the environment is misconfigured. Removing them ensures the application fails securely.
**Prevention:** Never use hardcoded fallback strings for authentication environment variables; the application should fail securely if configuration is missing.
