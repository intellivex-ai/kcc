## 2024-05-24 - Repeated toLowerCase() in Array Filters Anti-pattern

**Learning:** Found a widespread performance anti-pattern across multiple list filtering components (e.g., JobBoard, EventsSection) where `.toLowerCase()` is called repeatedly inside array `.filter()` loops during renders. This redundant string transformation scales poorly with list size.
**Action:** Hoist the string transformation (e.g., `searchTerm.toLowerCase()`) outside the loop and use `useMemo` to cache the filtered results, preventing redundant calculations on every render.
