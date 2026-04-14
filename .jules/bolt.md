## 2025-02-23 - Extract Static Object Logic Outside React Component scope

**Learning:** Extracting static object key extraction and filtering logic (e.g., `Object.keys(DOCUMENTS).filter(...)`) into a top-level constant outside the component scope is a highly effective optimization for reducing render-time CPU overhead in React, especially for components that re-render frequently due to state changes (like opening/closing dropdowns).

**Action:** Whenever a component performs static data transformations that don't depend on props or state, extract those transformations into constants outside the component definition to prevent unnecessary re-computations on every render.
