## 2024-05-29 - Missing ARIA Labels on Icon-Only Floating UI
**Learning:** Icon-only interactive elements in floating UI components (like chatbots) often lack `aria-label`s, significantly degrading the screen reader experience as users cannot identify the purpose of the buttons (e.g., toggle chat or send message).
**Action:** When implementing floating action buttons or icon-only buttons, always ensure they have descriptive `aria-label`s and proper keyboard focus states (`focus-visible`).
