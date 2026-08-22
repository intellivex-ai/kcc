## 2025-08-22 - Missing Memoization in React Components
**Learning:** Found multiple instances where `filter()` is called directly in the render function on potentially large datasets (e.g., `jobListings`, `alumniData`, `inquiries`). This creates unnecessary object arrays on every render and recomputes the filter even when inputs haven't changed.
**Action:** Use `useMemo` to memoize expensive computations like filtering large lists when the source data or filter dependencies haven't changed.
