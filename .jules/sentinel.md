## 2024-05-24 - Do not use literal string fallbacks for environment credentials in Vite
**Vulnerability:** Found `import.meta.env.VITE_ADMIN_PASSWORD || 'kcc2024'` in `src/lib/admin-auth.js`.
**Learning:** In client-side Vite projects, using string literal fallbacks for secrets is critical because Vite statically replaces `import.meta.env.*` variables during the build process. If the environment variable isn't present, the fallback gets hardcoded into the public JavaScript bundle, exposing the secret to anyone who downloads the JS file.
**Prevention:** Never use OR (`||`) fallbacks with string literals for sensitive values in client-side code. Instead, write logic that fails securely (e.g., throwing an error or returning false) when required environment variables are absent.
