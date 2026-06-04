## 2024-06-04 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Icon-only buttons (often utilizing lucide-react components) across the application frequently lack descriptive `aria-label` attributes and keyboard focus states, making them inaccessible to screen readers and difficult to navigate via keyboard.
**Action:** Consistently review icon-only interactive elements and ensure they have an explicit, descriptive `aria-label` and `focus-visible` classes to enhance accessibility.
