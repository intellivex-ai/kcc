## 2024-06-15 - Hardcoded Admin Credentials Fallback

**Vulnerability:** The admin authentication configuration in `src/lib/admin-auth.js` relied on insecure static fallback values (`'admin'` and `'kcc2024'`) when the corresponding environment variables were omitted. If these environment variables were ever misconfigured or accidentally lost, unauthorized individuals could trivially access administrative functions using these well-known default credentials.

**Learning:** Developers sometimes implement static fallbacks for environment variables to ensure their application does not crash in offline or unconfigured environments, without recognizing the profound security risk this poses for authentication logic. Secure defaults should be prioritized over functional defaults.

**Prevention:** To prevent this pattern, prioritize secure functional fallbacks over hardcoded defaults. In this scenario, we replaced the hardcoded string with random values dynamically generated at runtime (`crypto.randomUUID()` with a safe random fallback) to ensure that if the app is misconfigured, it defaults to a secure state where no one can predictably log in, failing securely.
