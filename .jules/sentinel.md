## 2024-05-26 - Prevent Hardcoded Admin Credentials Fallback
**Vulnerability:** Admin authentication fell back to hardcoded strings ('admin', 'kcc2024') if environment variables were missing, creating a known backdoor.
**Learning:** Using predictable hardcoded defaults for admin credentials creates a severe risk. We should fail securely if configuration is missing.
**Prevention:** Use unguessable values like `crypto.randomUUID()` as fallbacks for missing credential environment variables. This ensures the application remains secure by denying access rather than allowing default access.
