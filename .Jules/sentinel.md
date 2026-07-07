## 2024-07-07 - Remove hardcoded default admin credentials
**Vulnerability:** The client-side admin authentication logic had a fallback to hardcoded default credentials ('admin' and 'kcc2024') if the environment variables (VITE_ADMIN_USERNAME, VITE_ADMIN_PASSWORD) were not set.
**Learning:** Even if environment variables are used, providing hardcoded default fallback values in client-side code creates a massive vulnerability where failure to properly configure the environment leads to an insecure "open door" instead of failing safely.
**Prevention:** Never provide fallback string literals for sensitive credentials. Code should fail securely (e.g., throwing an error or evaluating to undefined/null) if expected environment variables are missing.
