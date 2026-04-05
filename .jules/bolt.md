## 2025-04-05 - Move Static Data Outside Render Loop
**Learning:** Instantiating large constant objects (like course dictionaries) inside a component body causes them to be re-allocated in memory on every re-render (e.g., when a user clicks a button to toggle state). This creates unnecessary garbage collection overhead and slows down renders.
**Action:** Always move static, non-reactive configurations and constants outside of the component function so they are allocated only once when the module loads.
