## 2023-10-27 - Hoist String Transformations Outside Filter Loops
**Learning:** A widespread anti-pattern exists in list filtering components across the codebase where `.toLowerCase()` is called repeatedly inside array `.filter()` loops during renders. This causes redundant string allocations and recalculations on every keystroke.
**Action:** Address this by hoisting the string transformation (`searchTerm.toLowerCase()`) outside the loop and using `useMemo` to cache the calculation.
