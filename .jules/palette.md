## 2024-05-18 - Chatbot Icon Buttons Accessibility
**Learning:** Icon-only buttons (like the toggle and send buttons in Chatbot.jsx) need explicit `aria-label` attributes for screen readers, and `title` attributes provide helpful tooltips for sighted users. In addition, keyboard users benefit from `focus-visible` styles so they know which element has focus without compromising the visual design for mouse users.
**Action:** Always add `aria-label` and `focus-visible` classes to icon-only buttons during implementation.
