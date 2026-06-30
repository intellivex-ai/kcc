## 2025-01-01 - Removed Hardcoded Admin Credentials
**Vulnerability:** The admin authentication library (`src/lib/admin-auth.js`) fell back to hardcoded default credentials (`'admin'` and `'kcc2024'`) if environment variables were not set.
**Learning:** Hardcoded credentials provide a direct entry point for attackers if the application is deployed without explicit environment configurations.
**Prevention:** Always require explicit environment variables for sensitive credentials and reject authentication or fail to start if they are missing.
