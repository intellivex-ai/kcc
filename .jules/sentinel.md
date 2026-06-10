## 2024-06-10 - Hardcoded Admin Credentials Fallback

**Vulnerability:** The admin authentication script (`src/lib/admin-auth.js`) had hardcoded default fallback credentials (`admin` and `kcc2024`) that could be used if environment variables were missing, posing a critical security risk. It also referenced an undefined `DEFAULT_CREDENTIALS` constant in the `changePassword` function.

**Learning:** Hardcoding default credentials as a fallback mechanism for missing configuration variables inadvertently allows standard unauthorized access when a misconfiguration occurs. This compromises the system when environment variables are not correctly set up. Also encountered an undefined variable issue demonstrating the need for consistency in authentication checks.

**Prevention:** Fallback values for authentication and security-critical environment variables must utilize randomized generation to guarantee a secure failure state if the environment misconfiguration goes unnoticed. Additionally, always review referenced constants across the whole module to prevent logic errors.
