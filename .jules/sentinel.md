## 2024-05-14 - Fix Hardcoded Admin Credentials Fallback
**Vulnerability:** Hardcoded admin fallback credentials ('admin'/'kcc2024') in `src/lib/admin-auth.js` would expose the application if environment variables failed to load.
**Learning:** Fallbacks must 'fail securely'. Exposing known credentials as fallbacks allows unauthenticated access if an app misconfigures its environment.
**Prevention:** Use `crypto.randomUUID()` as fallbacks for credentials. This ensures the app generates unguessable credentials rather than allowing a known backdoor.
