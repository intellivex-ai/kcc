## 2024-05-24 - Hoisting String Transformations in Filters
**Learning:** Calling string transformations like `.toLowerCase()` inside array filtering loops (`.filter()`) during React component re-renders causes significant unnecessary CPU overhead. When the input term remains static across the loop iterations, its transformation is redundantly computed O(n) times.
**Action:** Always hoist static transformations (e.g., `const lowerTerm = searchTerm.toLowerCase();`) outside of `.filter()` loops and wrap the entire filtering operation in `useMemo` to prevent recalculation on unrelated re-renders.
