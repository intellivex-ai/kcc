## 2024-06-25 - Hardcoded Fallback Credentials
**Vulnerability:** The application used hardcoded default credentials ('admin'/'kcc2024') for the admin login if environment variables were missing.
**Learning:** Using known hardcoded fallbacks introduces a critical backdoor, especially when environment configuration fails or is accidentally omitted.
**Prevention:** Always use secure, random, unguessable values as fallbacks (e.g., `crypto.randomUUID()`) so the application fails securely in misconfigured states rather than allowing unauthorized access.
