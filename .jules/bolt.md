## 2026-05-06 - Widespread List Filtering Anti-Pattern
**Learning:** Discovered a codebase-specific anti-pattern in list filtering components (like Blog.jsx, Downloads.jsx, etc.) where `.toLowerCase()` is repeatedly called on search terms inside array `.filter()` loops during renders. This creates unnecessary CPU overhead as the string is transformed O(N) times.
**Action:** Hoist static transformations derived from state (like `searchTerm.toLowerCase()`) outside the iteration loop and wrap the filtering logic in `useMemo` to prevent recalculations on unrelated renders.
