## 2024-05-24 - Accessibility Labels for VideoTour
**Learning:** Found an accessibility issue pattern in the `VideoTour.jsx` component where `motion.button` and `button` elements enclosing pure SVG icons (Play and X) were missing descriptive `aria-label` attributes. This rendered the interface unreadable to screen readers.
**Action:** Always add descriptive `aria-label` attributes to any icon-only interactive elements, ensuring the interface is inclusive.
