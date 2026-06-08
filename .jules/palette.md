## 2024-05-24 - Interactive Component Accessibility in Framer Motion Galleries

**Learning:** Custom non-button elements (like `motion.div`) used as interactive thumbnails in galleries require explicit keyboard accessibility attributes (`role="button"`, `tabIndex={0}`, keyboard event handlers, and `focus-visible` classes). Furthermore, icon-only overlay buttons (like those in lightboxes) frequently lack `aria-label` attributes and keyboard focus states, making them inaccessible to screen readers and keyboard users.

**Action:** Always ensure that any custom interactive elements have `role="button"`, `tabIndex={0}`, `onKeyDown` handlers for Enter/Space, and visible focus states (`focus-visible`). Consistently audit icon-only buttons for missing `aria-label` attributes and focus states.
