## 2025-04-09 - Client-Side Hardcoded Secret Fallbacks
**Vulnerability:** Client-side environment variable fallbacks for admin credentials (e.g., `import.meta.env.VITE_ADMIN_PASSWORD || 'kcc2024'`) were statically embedding sensitive secrets into the public client build output.
**Learning:** In client-side Vite projects, literal string fallbacks for environment-based credentials become permanently embedded in publicly readable build outputs, making them highly insecure.
**Prevention:** Never use literal string fallbacks for credentials in client-side code. If environment variables are missing, implement a secure failure state (e.g., set to undefined or a non-matching dummy value) so the system fails closed securely.
