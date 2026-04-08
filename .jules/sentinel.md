## 2025-04-08 - Client-Side Literal Credentials in Vite

**Vulnerability:** The codebase had fallback strings for `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD` right inside the frontend source code (e.g., `import.meta.env.VITE_ADMIN_PASSWORD || 'kcc2024'`).

**Learning:** In a client-side Vite application, using literal string fallbacks for environment-based credentials causes those credentials to be permanently embedded in the publicly readable build output (`dist/assets/index-xxx.js`), exposing admin passwords to anyone reading the minified JavaScript.

**Prevention:** Never use literal fallback values for sensitive environment variables in client-side code. Instead, write code that securely fails (e.g., denying access or throwing errors) if the necessary environment variables are not provided at build time.