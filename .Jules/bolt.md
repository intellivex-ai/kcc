## 2024-10-25 - Caching string transforms in React filter loops
**Learning:** Repeated .toLowerCase() inside array.filter() causes unnecessary processing during re-renders.
**Action:** Hoist the string transformation outside the loop and use useMemo to cache the result.
