## 2024-10-24 - Hoisting string transformations out of render loops
**Learning:** Found a widespread performance anti-pattern where `.toLowerCase()` is called repeatedly inside array `.filter()` loops during component renders (e.g., `JobBoard.jsx`). This unnecessarily recalculates the same string transformation on every render for the search term, leading to performance degradation with large lists.
**Action:** Always hoist invariant transformations (like `searchTerm.toLowerCase()`) outside the loop and cache the result using `useMemo` to prevent unnecessary recalculations on every render.
