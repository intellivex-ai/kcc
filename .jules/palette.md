## 2026-04-22 - Chatbot Icon ARIA Labels
**Learning:** Icon-only buttons for toggling features (like chatbots) and sending messages require explicit `aria-label` attributes for screen reader accessibility, and dynamically updating the label based on state (e.g., 'Open' vs 'Close') significantly improves the experience.
**Action:** Always add descriptive `aria-label` attributes to icon-only buttons, and ensure toggle buttons update their labels to reflect their current state.
