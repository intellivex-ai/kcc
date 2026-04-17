## 2024-04-17 - Hardcoded Admin Credentials Fallback
**Vulnerability:** Client-side literal string fallbacks for admin credentials.
**Learning:** Using `|| 'admin'` for environment variables in Vite embeds them into public builds, bypassing environment configuration and creating hardcoded secrets.
**Prevention:** Fail securely if environment variables are missing; never use literal string fallbacks for sensitive environment configurations in client-side code.