## 2024-05-19 - Added ARIA labels and focus states to Chatbot icon-only buttons
**Learning:** Found that icon-only buttons in floating interactive components (like the Chatbot toggle) lack explicit `aria-label`s and visible keyboard focus states (e.g., `focus-visible`), hindering screen-reader and keyboard accessibility.
**Action:** Applied dynamic `aria-label`s and `focus-visible:ring` Tailwind utility classes to ensure robust accessibility for interactive icon buttons without custom CSS.
