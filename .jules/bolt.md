## 2024-06-13 - [Performance Optimization: React re-renders and repeated string allocation]
**Learning:** A widespread anti-pattern across multiple list-filtering components (JobBoard, AlumniNetwork, etc.) uses `.toLowerCase()` inside array `.filter()` during every component re-render. This causes unnecessary string allocations and CPU overhead on each keystroke.
**Action:** Hoist the `.toLowerCase()` call outside of the `.filter()` loop into a constant and wrap the entire derived data computation in `useMemo` to skip calculation unless dependencies change.
