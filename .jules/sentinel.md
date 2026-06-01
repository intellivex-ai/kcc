## 2024-05-18 - Prevent Default Credentials Fallback
**Vulnerability:** Default administrative credentials ('admin'/'kcc2024') used as fallbacks if environment variables were missing, allowing unauthenticated administrative access if configuration was mismanaged.
**Learning:** Hardcoded fallbacks undermine security configuration. Missing configuration should fail securely or use unguessable defaults.
**Prevention:** Use `crypto.randomUUID()` as a fallback for missing credentials to ensure failed configurations result in unguessable, effectively random credentials instead of known backdoors.
