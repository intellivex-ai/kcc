## 2026-04-21 - Hardcoded Admin Credentials Fallback
**Vulnerability:** Client-side Vite project contained literal string fallbacks for admin credentials (`import.meta.env.VITE_ADMIN_USERNAME || 'admin'`).
**Learning:** In client-side Vite projects, literal string fallbacks for environment variables become permanently embedded in publicly readable build outputs.
**Prevention:** Do not use literal string fallbacks for credentials in client-side code. Implement secure failure states instead.
