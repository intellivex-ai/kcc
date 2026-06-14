## 2024-05-14 - Widespread Array Filter Performance Anti-Pattern
**Learning:** Found an anti-pattern in multiple components where `.toLowerCase()` is called repeatedly inside array `.filter()` loops during render.
**Action:** Always hoist invariant string transformations outside the filter loop, and wrap the filtered result in `useMemo` so the expensive calculation is only performed when the dependencies change, not on every re-render.
