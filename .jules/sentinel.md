## 2024-05-15 - Removed Hardcoded Admin Credentials Fallback
**Vulnerability:** Hardcoded admin credentials (`admin` / `kcc2024`) were used as a fallback if environment variables (`VITE_ADMIN_USERNAME` / `VITE_ADMIN_PASSWORD`) were not set.
**Learning:** Fallback credentials in code can be easily forgotten and exposed in client bundles (especially Vite env vars), allowing unauthorized admin access if the environment is misconfigured.
**Prevention:** Use `crypto.randomUUID()` as a fallback for missing credentials to ensure the application fails securely instead of granting access with known default credentials.
