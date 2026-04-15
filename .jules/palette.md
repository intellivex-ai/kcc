## 2024-04-15 - ARIA Labels for Icon-Only Chat Buttons
**Learning:** Icon-only buttons (like chatbot toggles and send buttons) frequently lack accessible names, making them difficult to use for screen reader users, especially when dynamic states (like open/closed) are involved.
**Action:** Always ensure `aria-label` is applied to icon-only buttons, and use dynamic labels (e.g., `aria-label={isOpen ? 'Close' : 'Open'}`) where the action changes based on state. Additionally, always add clear focus indicators (`focus-visible:ring-2`) for keyboard users.
