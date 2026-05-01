
## 2024-05-23 - Extracted expensive operations out of React render loops
**Learning:** Found string transformations like `.toLowerCase()` inside `Array.prototype.filter` loops within un-memoized component bodies cause redundant CPU overhead during every re-render.
**Action:** Extract loop-invariant computations out of the iteration body and use `useMemo` for derived dataset generation to significantly reduce render-cycle costs.
