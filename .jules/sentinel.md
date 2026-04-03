## 2025-02-14 - Removed Hardcoded Fallback Admin Credentials
**Vulnerability:** The `admin-auth.js` file used hardcoded fallback credentials (`admin` / `kcc2024`) if environment variables (`VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD`) were not set.
**Learning:** Hardcoded credentials are a critical security risk as they can easily be exploited in the wild if environment configuration fails or is omitted. Fallbacks must never default to functional credentials.
**Prevention:** Instead of providing hardcoded string defaults for secrets, the application must explicitly fail securely (e.g., throwing an error or logging a failure) when required environment configurations are missing, ensuring authorization bypass cannot occur.
