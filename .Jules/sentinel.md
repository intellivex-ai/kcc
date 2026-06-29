## 2024-10-24 - Removed hardcoded admin credentials
**Vulnerability:** The application had hardcoded fallback credentials ('admin'/'kcc2024') for the admin login if environment variables were missing.
**Learning:** Hardcoded credentials create a significant backdoor if environment variables fail to load or are misconfigured. The `DEFAULT_CREDENTIALS` reference in `changePassword` was also broken.
**Prevention:** Always require environment variables for credentials and fail securely if they are not provided, rather than falling back to default guessable values.
