## 2024-07-07 - Avoid Repeated String Manipulations in Array Loops
**Learning:** Calling `.toLowerCase()` repeatedly inside array iterations (like `.filter()` or `.map()`) during React component re-renders is a common performance bottleneck that wastes CPU cycles.
**Action:** Always hoist invariant string transformations (like search term normalization) outside of iterative loops. Additionally, wrap the filtered result in a `useMemo` hook to cache the result across re-renders when inputs have not changed.
