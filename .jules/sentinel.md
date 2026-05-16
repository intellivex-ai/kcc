## 2025-02-27 - Fail Securely with Environment Variable Fallbacks
**Vulnerability:** Hardcoded administrative credentials ('admin' / 'kcc2024') were used as fallbacks for missing environment variables in client-side authentication logic.
**Learning:** In Vite applications, `import.meta.env` variables can be undefined during development or build if misconfigured. Providing guessable hardcoded strings as fallbacks creates a significant security risk, allowing unauthorized access using default credentials.
**Prevention:** Always use `crypto.randomUUID()` as a fallback for credential environment variables in client-side code. This ensures the application "fails securely" by generating unguessable credentials rather than allowing a known backdoor.
