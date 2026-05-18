## 2025-01-20 - Derived State and Loop Invariants Performance Anti-Pattern

**Learning:** There was a widespread performance anti-pattern in list filtering components across the codebase (e.g., `src/pages/admin/Students.jsx`) where `.toLowerCase()` is called repeatedly inside array `.filter()` loops during renders, coupled with the unnecessary `useEffect` + `useState` pattern for derived data. This combination causes redundant re-renders and unnecessary CPU overhead during search filtering.

**Action:** Replaced the `useEffect` + `useState` pattern with `useMemo` for derived data, and hoisted loop-invariant transformations like `searchTerm.toLowerCase()` outside of the `.filter()` loop to reduce processing time during every render cycle.
