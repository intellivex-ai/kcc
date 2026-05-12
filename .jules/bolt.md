## 2026-05-12 - Redundant string operations in filter loops

**Learning:** Across the codebase, list filtering components commonly evaluate string transformations like `.toLowerCase()` continuously within array iteration `.filter()` methods, calculating it N times per render cycle when searching text.
**Action:** Always identify static constants and string transformations tied to UI state (like `searchTerm`) and hoist them out of the iterative filter loop into a top-level `lowerSearchTerm` variable to drastically cut redundant CPU overhead during list searches, combined with standard `useMemo` caching.
