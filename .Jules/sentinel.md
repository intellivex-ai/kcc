## 2025-02-14 - Hardcoded Admin Password Fallback
**Vulnerability:** Found a hardcoded password fallback (`'kcc2024'`) in `src/lib/admin-auth.js` for the admin login if the environment variable is not set.
**Learning:** Hardcoded credentials can easily be leaked in source code repositories or build artifacts, giving unauthorized access to sensitive admin functionality.
**Prevention:** Never use hardcoded fallbacks for passwords or secrets. Always fail securely (e.g. by throwing an error or preventing login) if required environment variables containing secrets are missing.
