## 2026-05-05 - Hardcoded Admin Credentials
**Vulnerability:** Admin authentication fallback credentials ('admin'/'kcc2024') were hardcoded in the client bundle logic.
**Learning:** Relying on fallback default credentials creates a backdoor if environment variables are ever unconfigured, allowing trivial admin access.
**Prevention:** Never use hardcoded fallback strings for authentication checks; always fail securely if expected environment configurations are missing.
