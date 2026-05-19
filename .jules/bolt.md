## 2024-05-18 - Expensive Transformations Inside Component Renders
**Learning:** The codebase previously contained a pattern where derived data arrays were filtered during the React render phase with inline functions calling `.toLowerCase()` inside the `.filter` loop. This means string lowercasing operations were unnecessarily repeated on every render.
**Action:** Hoisted the `.toLowerCase()` call for the search term outside the `.filter` loop and memoized the list using `useMemo`.
