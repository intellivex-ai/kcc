## 2026-05-04 - [Hoisting .toLowerCase() from filter loops]
**Learning:** [Repeatedly calling .toLowerCase() on the search term inside .filter() loop causes unnecessary calculations on each iteration during re-renders, impacting CPU overhead]
**Action:** [Hoist .toLowerCase() outside of the array iteration loops within React components, and combine with useMemo to reduce CPU overhead during re-renders]
