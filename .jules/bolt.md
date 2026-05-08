## 2024-10-24 - Optimizing filter loops in React
**Learning:** Repeatedly calling `.toLowerCase()` inside `.filter()` iterations during renders introduces unnecessary CPU overhead. Static data derivations like `[...new Set(...)]` from constants should be hoisted out of the component completely.
**Action:** Hoist `.toLowerCase()` on search terms before the `.filter()` loop, wrap the filtering in `useMemo`, and move static data derivations outside the component to reduce render time.
