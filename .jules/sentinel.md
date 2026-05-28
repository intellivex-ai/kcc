## 2024-05-28 - Hardcoded Admin Credentials Fallback
**Vulnerability:** The application used hardcoded default credentials ('admin' and 'kcc2024') as a fallback when `VITE_ADMIN_USERNAME` and `VITE_ADMIN_PASSWORD` environment variables were missing.
**Learning:** This creates a critical backdoor. If a production environment is misconfigured and the environment variables are accidentally omitted or not loaded, any user could gain full administrative access using these predictable default credentials.
**Prevention:** Always "fail securely." When critical environment variables like credentials are missing, the application should generate unguessable random values (like `crypto.randomUUID()`) or throw a fatal error to prevent unauthorized access.
