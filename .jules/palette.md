## 2024-06-11 - Add aria-labels and keyboard navigation styles to video tour buttons
**Learning:** Found an accessibility issue pattern where icon-only buttons (like play/close in the video tour) lack screen-reader accessible labels and visible focus indicators for keyboard users.
**Action:** Always add `aria-label` to buttons without text content and ensure they have `focus-visible` classes (e.g. `focus-visible:ring-4`) so keyboard navigation is obvious.
