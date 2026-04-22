## 2024-05-15 - Hardcoded Credentials in Vite Environment Fallbacks
**Vulnerability:** Hardcoded admin credentials used as literal string fallbacks in Vite environment variable imports.
**Learning:** Literal string fallbacks for environment variables (e.g., import.meta.env.VAR || "secret") become permanently embedded in publicly readable client-side build outputs.
**Prevention:** Implement a secure failure state instead of fallback literals for sensitive environment-based credentials in client-side code.
