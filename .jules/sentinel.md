## 2025-02-14 - Hardcoded Fallback Credentials
**Vulnerability:** The admin authentication library (`src/lib/admin-auth.js`) contained hardcoded fallback credentials (`admin` / `kcc2024`) in the event environment variables were missing.
**Learning:** Providing hardcoded fallback credentials in client-side authentication logic is a critical risk, as these values can be extracted or exploited if the environment is improperly configured.
**Prevention:** Ensure that sensitive credentials are never hardcoded as fallbacks; instead, enforce proper environment configuration and fail securely if they are missing.
