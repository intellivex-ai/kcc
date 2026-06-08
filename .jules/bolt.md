## 2024-10-24 - Array Filtering Anti-Pattern
**Learning:** A widespread performance anti-pattern exists in list filtering components across this codebase (e.g., JobBoard, AlumniNetwork, Downloads) where string transformations like `.toLowerCase()` are called repeatedly inside array `.filter()` loops during renders, causing O(N) redundant operations per render.
**Action:** Always hoist invariant transformations (like `searchTerm.toLowerCase()`) outside the loop and wrap the filtering logic in `useMemo` to cache the calculation and prevent execution on unrelated renders.
