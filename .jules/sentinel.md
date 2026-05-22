## 2024-05-22 - Fail Securely for Missing Environment Variables
**Vulnerability:** Hardcoded fallback credentials ('admin', 'kcc2024') were present for admin authentication if client-side environment variables (`VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD`) were missing. This created a backdoor.
**Learning:** In Vite applications, relying on a default fallback string for critical environment variables exposes a known, easily exploitable backdoor if the deployment configuration fails or is omitted.
**Prevention:** Instead of fallback strings, use `crypto.randomUUID()` as the default value when handling sensitive fallback credentials. This ensures the application fails securely with unguessable credentials rather than reverting to a known state.
