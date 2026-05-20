## 2024-05-24 - Hoisting .toLowerCase() in Render Loops
**Learning:** Calling `.toLowerCase()` repeatedly on the search term inside an array `.filter()` during React renders creates unnecessary CPU overhead, as string transformations are relatively expensive and the search term doesn't change per item.
**Action:** Always hoist static string transformations (like search term normalization) outside the iteration loop and wrap the filtering logic in `useMemo` to prevent recalculation on unrelated re-renders.
