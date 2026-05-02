## 2026-05-02 - Hardcoded Admin Credentials
**Vulnerability:** Hardcoded fallback admin credentials ('kcc2024') in auth library.
**Learning:** Relying on fallback passwords provides attackers an easy backdoor if environment variables are misconfigured or missing.
**Prevention:** Always ensure the application fails securely when credentials are not configured, rather than defaulting to hardcoded secrets.
