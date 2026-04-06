## 2024-03-24 - Efficient Search Filtering
**Learning:** In React components with search filtering over large arrays, recreating strings by repeatedly calling `.toLowerCase()` on the search term inside the `.filter()` loop is an unnecessary performance cost.
**Action:** Always pre-calculate invariant derived state (like a lowercase search term) outside of iteration loops to avoid redundant operations, especially in performance-sensitive frontend filtering logic.
