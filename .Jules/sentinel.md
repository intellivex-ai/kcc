
## 2024-07-04 - Hardcoded Admin Password Fallback
**Vulnerability:** A hardcoded default password ('kcc2024') was used as a fallback for the admin login if the environment variable was missing.
**Learning:** Never provide default credentials for administrative accounts. If environment variables are missing, the system should fail securely (e.g., prevent login) rather than falling back to known, guessable credentials.
**Prevention:** Ensure environment variables are strictly required for authentication. Add checks during initialization or login to verify credentials are set, and return secure error messages if they are not.
