## 2024-05-31 - Add ARIA labels to icon-only buttons
**Learning:** Icon-only buttons (like Bell, Settings, and Download) lack descriptive text, rendering them inaccessible to screen readers without an explicit `aria-label`. This pattern is frequently missed in components relying heavily on Lucide React icons.
**Action:** Always verify that every interactive element, especially icon-only buttons, includes an `aria-label` or equivalent accessible name to ensure all users can understand the button's purpose.
