## 2026-04-27 - Extract static derivations from render cycle
**Learning:** Object key extraction and filtering on constants (like DOCUMENTS) recalculates on every render, wasting CPU.
**Action:** Always move static data transformations derived from constants outside of React component render cycles into top-level constants.
