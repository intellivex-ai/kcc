## 2024-05-14 - Fix Hardcoded Admin Credentials Fallback

**Vulnerability:** The admin authentication file (`src/lib/admin-auth.js`) had hardcoded fallback credentials (`'admin'` and `'kcc2024'`) that would be used if the environment variables `VITE_ADMIN_USERNAME` or `VITE_ADMIN_PASSWORD` were not set. Since admin authentication is handled client-side in Vite, this meant the hardcoded credentials would always be compiled into the frontend bundle as a fallback.

**Learning:** When using environment variables for sensitive settings, never include hardcoded fallback values in the codebase. Doing so creates an easy entry point for unauthorized access if the deployment fails to inject the environment variables, effectively bypassing the intended security mechanism. Furthermore, when authentication configuration is missing, the system should fail securely (e.g., returning an error indicating the configuration is broken) rather than silently falling back to a default, insecure state.

**Prevention:** Ensure that all environment variable lookups for secrets and credentials do not have OR (`||`) fallback values containing raw secrets. Implement checks to fail early and securely if required security configurations are missing.
