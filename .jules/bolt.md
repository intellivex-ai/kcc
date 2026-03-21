## 2024-05-16 - O(kN) Filtering Anti-Pattern in Dashboards
**Learning:** Found sequential `.filter()` operations with loop-invariant calculations (like `.toLowerCase()`) in dashboard components (`Students.jsx`, `Inquiries.jsx`). This leads to O(kN) complexity on each render/filter update.
**Action:** Consolidate multiple filters into a single combined pass and cache loop-invariant values outside the loop to reduce runtime complexity to O(N).
