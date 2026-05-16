## 2024-10-24 - Hoist toLowerCase() in filter loops
**Learning:** A widespread performance anti-pattern exists in this codebase where `.toLowerCase()` is called repeatedly on the search term inside array `.filter()` loops during renders.
**Action:** Hoist the static `.toLowerCase()` transformation outside of the iteration loops and wrap the derived data in `useMemo` to prevent unnecessary recalculation and reduce render-time CPU overhead.
