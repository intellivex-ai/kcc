## 2023-10-27 - Hoisting searchTerm.toLowerCase() and using useMemo

**Learning:** There is a widespread performance anti-pattern in list filtering components across the codebase (e.g., JobBoard, AlumniNetwork, Downloads, Blog, Inquiries) where `.toLowerCase()` is called repeatedly inside array `.filter()` loops during renders. This triggers an O(N) operation to lower-case the search term redundantly for every item.

**Action:** Hoist the `.toLowerCase()` calculation outside the `.filter()` loop, cache its result, and wrap the entire filtering logic with `useMemo` so that recalculation only happens when search or filter dependencies actually change.
