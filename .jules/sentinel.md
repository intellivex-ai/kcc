## 2024-03-20 - [Hardcoded Admin Credentials]
**Vulnerability:** Found hardcoded fallback credentials (`'admin'`, `'kcc2024'`) in `src/lib/admin-auth.js` for admin login authentication.
**Learning:** Even though credentials are meant to be loaded from environment variables (`import.meta.env`), providing hardcoded fallback values in the source code can be fully exposed on the client side since this is a Vite (frontend) application.
**Prevention:** Never provide fallback credentials in source code. Throw an error or disable login if environment credentials are not present.
