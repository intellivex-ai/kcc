
## 2024-05-18 - Hoisting operations in React filtering loops
**Learning:** A common performance anti-pattern in list filtering components is repeatedly calling `.toLowerCase()` or creating regexes inside the `.filter()` callback during component renders.
**Action:** Always wrap filtered lists in `useMemo` and hoist any static operations (like transforming the search term to lowercase) outside of the iteration loop to reduce CPU overhead during re-renders.
