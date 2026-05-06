## 2026-05-06 - Hardcoded Fallback Credentials for Admin Auth
**Vulnerability:** Fallback admin credentials ('admin'/'kcc2024') were hardcoded in the authentication logic.
**Learning:** The application was designed to use environment variables for credentials but fell back to unsafe defaults if misconfigured, leading to an immediate compromise of admin access if variables fail to load.
**Prevention:** Never include default credentials in production code; application should fail securely if configuration is missing.
