## 2024-12-07 - Optimize list filtering anti-pattern
**Learning:** A widespread performance anti-pattern exists in list filtering components across the codebase (e.g., `JobBoard.jsx`, `AlumniNetwork.jsx`, `Downloads.jsx`, `Blog.jsx`, and `admin/Inquiries.jsx`) where `.toLowerCase()` is called repeatedly inside array `.filter()` loops during renders.
**Action:** Address this by hoisting the string transformation outside the loop and using `useMemo` to cache the calculation.
