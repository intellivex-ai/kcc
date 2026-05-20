## 2024-05-20 - Secure Fallback Credentials
**Vulnerability:** Hardcoded admin credentials used as fallback if environment variables are missing.
**Learning:** Using predictable hardcoded fallbacks creates a known backdoor.
**Prevention:** Use unguessable values like `crypto.randomUUID()` as fallbacks to ensure applications fail securely if misconfigured.
