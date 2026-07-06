## 2024-07-06 - Optimize JobBoard search and filtering
**Learning:** Found an unmemoized filtering function in a React component that was repeatedly converting search strings within an $O(N)$ filter loop during every render, regardless of what triggered the re-render.
**Action:** Always extract static transformations (like converting a search term to lowercase) outside of iteration loops, and use `useMemo` to cache the result of expensive list-filtering logic so it only runs when its direct dependencies change.
