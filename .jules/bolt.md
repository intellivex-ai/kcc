## 2024-05-18 - Single-Pass Loop Optimization for Filtered Arrays

**Learning:** Sequential `.filter()` passes on dashboard components like `Students.jsx` and `Inquiries.jsx` cause performance regressions at scale (O(kN) complexity). Re-calculating `.toLowerCase()` on string properties inside loops leads to repetitive, redundant string operations, noticeably dragging on render performance and UI snappiness during typing events.

**Action:** Consolidate multi-step array filters into a single combined-condition pass (O(N) complexity). Always hoist string formatting (e.g. `(searchTerm || '').toLowerCase()`) to outside the loop to execute it exactly once rather than once per iteration per item. Use fallback logic when performing string operations to handle `null` or `undefined` gracefully.