## 2024-04-03 - Remove Hardcoded Admin Credentials Fallback
**Vulnerability:** Hardcoded admin credentials ('admin' / 'kcc2024') were used as fallbacks if environment variables were missing.
**Learning:** Fallbacks for authentication bypass environment-level controls, creating a persistent backdoor. The `changePassword` function also incorrectly referenced an undefined `DEFAULT_CREDENTIALS`.
**Prevention:** Authentication systems must fail securely when credentials are not configured, rather than defaulting to known public secrets.
