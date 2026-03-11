## 2024-03-11 - UseMemo for Filtering Lists
**Learning:** In React, filtering static lists based on state variables within the render body causes unnecessary recalculations on every re-render. While V8 is fast, for components that might re-render frequently (like those with animations or complex state), this can become a bottleneck.
**Action:** Always wrap derived data calculations, especially array filtering or sorting based on state, with `useMemo` to ensure they only recalculate when their dependencies change.
