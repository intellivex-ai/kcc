## 2024-05-24 - String Transformations in Render Loops
**Learning:** A widespread performance anti-pattern exists in list filtering components across the codebase (e.g., JobBoard, AlumniNetwork, Downloads) where `.toLowerCase()` is called repeatedly inside array `.filter()` loops during renders. This adds unnecessary CPU overhead on every keystroke.
**Action:** Always hoist expensive static data transformations (like `.toLowerCase()`) outside of array iteration loops within React components, and combine with `useMemo` to cache the calculation.
