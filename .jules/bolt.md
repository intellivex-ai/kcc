## 2025-01-20 - Memoizing Data Transformations
**Learning:** Calling .toLowerCase() repeatedly inside array .filter() loops during component renders creates significant CPU overhead in list filtering components.
**Action:** Always move string transformations outside the filter loop or use useMemo to cache derived data.
