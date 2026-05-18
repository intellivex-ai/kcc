## 2024-05-15 - Hardcoded Fallback Credentials
**Vulnerability:** Hardcoded admin fallback credentials in client-side auth logic.
**Learning:** Using predictable fallbacks creates a known backdoor if environment variables are missing.
**Prevention:** Use crypto.randomUUID() for fallbacks to ensure secure failure.
