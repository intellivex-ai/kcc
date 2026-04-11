## 2024-04-10 - Avoid Hardcoded Fallbacks for Credentials
**Vulnerability:** Hardcoded credentials fallback (`import.meta.env.VITE_ADMIN_PASSWORD || 'kcc2024'`) exist in the source code.
**Learning:** In client-side Vite projects, using literal string fallbacks for environment-based credentials embeds them permanently into the publicly readable build output, acting as hardcoded secrets.
**Prevention:** Avoid literal string fallbacks for credentials. Ensure secure failure states if credentials are not provided via environment variables.
