## 2026-04-20 - Adding ARIA labels to chatbot buttons
**Learning:** Found multiple icon-only buttons in the global `Chatbot` component lacking both `aria-label` attributes and proper keyboard focus states, making the primary support channel inaccessible to screen readers and keyboard users.
**Action:** Add `aria-label` (with dynamic values for toggle states) and `focus-visible` utility classes to ensure all icon-only interactive elements in reusable components are fully accessible.
