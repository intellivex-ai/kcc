## 2024-05-24 - [CRITICAL] Hardcoded Admin Credentials Fallback

**Vulnerability:**
The `src/lib/admin-auth.js` file used hardcoded fallback credentials (`'admin'` and `'kcc2024'`) if environment variables were not found (`import.meta.env.VITE_ADMIN_USERNAME || 'admin'`).

**Learning:**
Client-side compiled code in Vite bundles `import.meta.env` values at build time. When environmental variables aren't provided, these hardcoded fallbacks are directly baked into the final output JavaScript files. This exposes the admin portal to unauthorized bypass if the deployment pipeline incorrectly omits secrets. It's an inherent risk in handling authentication purely on the client side, requiring failsafe mechanisms.

**Prevention:**
Always fail securely. Do not provide default fallback secrets for missing environment variables. Instead, explicitly check for the presence of the credentials at runtime, and block login attempts gracefully (e.g., throwing a generic configuration error) if they are missing.
