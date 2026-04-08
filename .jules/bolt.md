## 2024-04-08 - UseMemo for Filtering Data
**Learning:** The application re-computes `services.filter` on every re-render of `ServiceMatrix`, which can be unnecessary if data/categories don't change frequently.
**Action:** Wrapped the filteredServices array in `useMemo` in `ServiceMatrix.jsx`.
