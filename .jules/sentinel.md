## 2026-04-24 - Hardcoded Admin Credentials in Client Bundle
**Vulnerability:** Hardcoded admin fallback credentials embedded in the public client-side Vite bundle.
**Learning:** Using literal string fallbacks for environment variables (e.g., `import.meta.env.VAR || 'fallback'`) in Vite permanently exposes them in the built output.
**Prevention:** Implement secure failure states instead of providing default fallback values for sensitive credentials in client-side code.
