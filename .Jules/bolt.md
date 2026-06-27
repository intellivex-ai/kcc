## 2024-08-09 - Inefficient list filtering inside renders
**Learning:** Calling `.toLowerCase()` repeatedly inside array `.filter()` loops during renders is a widespread performance anti-pattern across the codebase.
**Action:** Always hoist string transformations outside the loop and use `useMemo` to cache the calculation.
