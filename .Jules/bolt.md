## 2024-06-28 - Widespread Array Filter Performance Anti-Pattern
**Learning:** Found a widespread performance anti-pattern in list filtering components across the codebase. `searchTerm.toLowerCase()` is called repeatedly inside array `.filter()` loops during every render. This redundant calculation can cause unnecessary performance overhead as the lists grow.
**Action:** Always hoist invariant string transformations (like `.toLowerCase()`) outside the filter loop and use `useMemo` to cache the filtered array calculation, avoiding redundant work on every render.
