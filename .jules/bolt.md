## 2026-06-13 - Costly `.toLowerCase()` Calls in List Filters

**Learning:** There is a codebase-specific performance anti-pattern where components calling `.toLowerCase()` on both filter queries and items repeatedly inside a `.filter()` method (often within a `useEffect` setting local state). This scales poorly with large lists.

**Action:** Replace `useEffect` filtering loops with `useMemo`. Hoist the single calculation (e.g. `const lowerQuery = searchTerm.toLowerCase();`) outside the inner filter iteration to prevent redundant string processing inside the loop.
