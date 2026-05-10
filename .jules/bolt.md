## 2026-05-10 - Optimize filter loops
**Learning:** Calling `.toLowerCase()` inside array `.filter()` loops during React renders is a performance anti-pattern. Hoisting these static transformations outside the loop and combining them with `useMemo` measurably reduces CPU overhead during re-renders.
**Action:** Always hoist expensive operations like `.toLowerCase()` out of loops and utilize `useMemo` for list filtering.
