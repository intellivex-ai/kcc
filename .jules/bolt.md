## 2026-04-19 - Component static key extraction
**Learning:** Extracting static object key extraction and filtering logic into a top-level constant outside the component scope is a highly effective optimization for reducing render-time CPU overhead.
**Action:** Extract static Object.keys() outside the component scope.
