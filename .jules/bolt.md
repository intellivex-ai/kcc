## 2024-06-25 - Redundant String Operations in Loops
**Learning:** A widespread performance anti-pattern exists in list filtering components across the codebase (e.g., JobBoard, AlumniNetwork) where `.toLowerCase()` is called repeatedly inside array `.filter()` loops during renders, causing O(n) redundant string operations.
**Action:** Always hoist string transformations like `.toLowerCase()` derived from external state (like `searchTerm`) outside the loop and use `useMemo` to cache the calculation.
