## 2024-05-24 - Optimizing Dashboard List Filtering

**Learning:** In dashboard components like `Students.jsx` and `Inquiries.jsx`, applying sequential `.filter()` arrays results in iterating over the data multiple times, turning an O(N) operation into O(kN). Additionally, calculating loop-invariant values like `.toLowerCase()` on search strings inside the filter block forces recomputation on every row unnecessarily.

**Action:** Consolidate multiple filter passes into a single combined filter loop, applying all criteria at once. Always extract and cache loop-invariant values outside the loop to optimize string comparisons. Add explicit fallbacks `(searchTerm || '').toLowerCase()` to prevent crash risks if `searchTerm` happens to be `null` or `undefined`.