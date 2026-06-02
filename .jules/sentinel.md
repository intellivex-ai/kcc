## 2024-06-02 - Hardcoded Fallback Credentials in Admin Auth
**Vulnerability:** The application used hardcoded fallback credentials (`'admin'` and `'kcc2024'`) for the admin login if the environment variables (`VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD`) were missing.
**Learning:** Hardcoding default credentials creates a backdoor that attackers can exploit if they find the source code or if the application is misconfigured in production without proper environment variables.
**Prevention:** Always fail securely. If required environment variables are missing, either throw an error to prevent application startup or generate unguessable random values (like `crypto.randomUUID()`) as a fallback to effectively disable the feature until properly configured.
