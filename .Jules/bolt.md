## 2024-06-11 - Optimize string conversion inside filter loop
**Learning:** Using `.toLowerCase()` repeatedly inside an array `.filter()` loop causes unnecessary calculations on every render, especially when the value doesn't change often.
**Action:** Hoist the string calculation outside the loop and use `useMemo` to cache the calculation for better performance.
