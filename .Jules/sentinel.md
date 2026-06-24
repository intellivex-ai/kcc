## 2024-06-24 - Removed hardcoded default admin credentials
**Vulnerability:** Hardcoded admin credentials (`kcc2024`) were used as fallbacks if environment variables were missing, allowing unauthorized access in non-production or misconfigured environments.
**Learning:** Hardcoded credentials should never be used as fallbacks, as they can be easily discovered in source code and exploited if environment configuration is missed. The application should fail securely.
**Prevention:** If required environment variables are absent, use securely generated random strings (e.g., `crypto.randomUUID()`) to prevent predictable or static defaults from providing unintended access.
