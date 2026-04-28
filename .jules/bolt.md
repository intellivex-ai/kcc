## 2024-05-28 - Component Render Optimization
**Learning:** Extracting static derived data (like Object.keys filtering from constants) outside of React component render cycles prevents unnecessary CPU overhead on every re-render.
**Action:** Always scan components for inline static data derivations that can be safely hoisted to module-level constants.
