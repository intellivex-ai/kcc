## 2024-05-24 - Client-side Exposure of Admin Credentials
**Vulnerability:** Admin credentials (including a hardcoded fallback password) were exposed in the client-side bundle because Vite injects `VITE_` prefixed environment variables directly into the browser code.
**Learning:** Never use `VITE_` prefixed environment variables for sensitive secrets like passwords or API keys, as they are not kept secure on the server but are shipped to the client. Additionally, never include hardcoded fallback secrets in client-side authentication logic.
**Prevention:** Authentication and credential validation must be handled on the server. Do not prefix sensitive environment variables with `VITE_`.
