## 2024-06-21 - Remove Hardcoded Admin Password Fallback
**Vulnerability:** A hardcoded plaintext password ('kcc2024') was used as a fallback for the admin authentication if the environment variable was not set.
**Learning:** Hardcoding passwords as fallbacks compromises security, as anyone with access to the source code can bypass authentication in environments where the variable is missing.
**Prevention:** Always use securely generated random strings as fallbacks for missing critical secrets to ensure secure defaults.
