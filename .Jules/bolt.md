## 2024-05-14 - Performance bottleneck: filter + toLowerCase in renders
**Learning:** Found an anti-pattern: using `.toLowerCase()` repeatedly inside array `.filter()` loops during renders, especially for items that are frequently rendered (e.g., job lists, events). This creates O(N) operations inside rendering loops and negatively impacts performance on each re-render.
**Action:** Lift the `.toLowerCase()` call outside the loop to be evaluated only when necessary, and use `useMemo` to memoize the filtered array, avoiding recomputation on every render.
