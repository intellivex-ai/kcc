## 2024-10-24 - Hoist loop invariants in list filters
**Learning:** Found a widespread performance anti-pattern where string transformation (`.toLowerCase()`) on the search term was happening inside the `Array.prototype.filter()` callback on every re-render, resulting in O(N) redundant conversions instead of O(1).
**Action:** Always hoist loop invariant computations (like converting a single search string to lowercase) outside the filtering loop. Use `useMemo` to memoize the resulting filtered lists so they only recompute when the inputs (searchTerm or filters) actually change.
