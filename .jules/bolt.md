## 2024-04-30 - Extract static data derived from constants outside components
**Learning:** This application sometimes derives static data arrays (e.g. `Object.keys()`, `Object.entries()`, `.filter()`) from top-level constants directly inside component render cycles, causing unnecessary CPU overhead and potential re-renders.
**Action:** Extract these derived arrays outside the component definition or memoize them to improve performance.
