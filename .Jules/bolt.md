## 2024-06-03 - List Filtering Performance Optimization

**Learning:** Calling `.toLowerCase()` repeatedly inside array `.filter()` loops during renders creates redundant string allocations and slows down filtering operations, particularly when it evaluates variables external to the item itself, such as `searchTerm.toLowerCase()`. Additionally, recalculating `filteredItems` on every render due to missing memoization is an O(N) penalty even when unrelated state updates trigger a re-render.

**Action:** Always hoist invariant transformations like `searchTerm.toLowerCase()` outside of filtering loops so they run O(1) instead of O(N) times. Wrap the resulting filtered list computation in a `useMemo` hook, ensuring that the recalculation occurs only when the list data or relevant filter/search conditions change.
