## 2024-05-18 - Hardcoded Credentials in Client Bundle
**Vulnerability:** Found hardcoded fallback admin credentials (`kcc2024`) in `src/lib/admin-auth.js`.
**Learning:** Fallback credentials in client-side code (like Vite env vars) are bundled into the JavaScript sent to the browser, exposing them to anyone who inspects the source code.
**Prevention:** Never use hardcoded fallback values for sensitive credentials in client-side code. Ensure backend authentication is robust and doesn't rely solely on frontend checks.
