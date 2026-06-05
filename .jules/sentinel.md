## 2024-06-05 - Hardcoded Default Credentials
**Vulnerability:** Default admin credentials ('admin' and 'kcc2024') were hardcoded as fallbacks in `src/lib/admin-auth.js` if environment variables were missing.
**Learning:** Hardcoded default credentials create a critical vulnerability, as an attacker could exploit these known fallbacks if the deployment environment is misconfigured. Using `crypto.randomUUID()` as a fallback ensures the application fails securely (login becomes impossible) rather than insecurely defaulting to known credentials.
**Prevention:** Always use secure, random fallbacks for missing credentials and never hardcode fallback passwords or secrets in client-facing code.
