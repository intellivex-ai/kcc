## 2024-05-15 - Hardcoded Credentials in Vite Environment Fallbacks
**Vulnerability:** Admin credentials (`admin` / `kcc2024`) were hardcoded as string fallbacks for `import.meta.env` variables in `src/lib/admin-auth.js`.
**Learning:** In client-side Vite projects, literal string fallbacks for environment variables (e.g., `import.meta.env.VITE_ADMIN_USERNAME || 'admin'`) become permanently embedded in publicly readable build outputs, exposing sensitive credentials to anyone inspecting the frontend bundle.
**Prevention:** Do not use literal string fallbacks for environment-based credentials in Vite. Implement a secure failure state instead (e.g., denying access if the environment variables are not configured) and rely on the deployment environment to provide the correct values securely.
