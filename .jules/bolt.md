## 2025-02-18 - Extract Static Object Keys from Component Render Loop
**Learning:** In React components like `DocumentHelper.jsx`, computing static values inside the component body, such as `Object.keys(DOCUMENTS).filter(...)`, forces the CPU to recalculate identical arrays on every render (e.g., when toggling state like `isOpen`).
**Action:** Always extract constant derivations of static objects to module-level constants (outside the component function) so they are evaluated exactly once at module load time rather than per-render.
