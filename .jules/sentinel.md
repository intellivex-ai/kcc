## 2024-05-03 - Hardcoded Admin Credentials
**Vulnerability:** Hardcoded fallback credentials ('admin'/'kcc2024') in admin authentication logic.
**Learning:** Default fallbacks for environment variables in client bundles insecurely fail-open if the env is misconfigured.
**Prevention:** Never use hardcoded fallback strings for sensitive credentials; rely on environment variable presence checks to fail securely.
