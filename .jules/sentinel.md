## 2026-05-04 - Hardcoded Admin Fallback Credentials
**Vulnerability:** Hardcoded admin credentials ('admin'/'kcc2024') were used as fallbacks in Vite client bundle.
**Learning:** Relying on fallbacks in client-side authentication logic leaks secrets and allows auth bypass if environment variables are missing.
**Prevention:** Fail securely by removing hardcoded fallback credentials and enforcing strict environment variable configuration.
