## 2024-03-15 - Add ARIA Labels to Icon-Only Chatbot Buttons
**Learning:** Found that the chatbot toggle button and send button in `Chatbot.jsx` are missing ARIA labels, which impacts screen reader accessibility for interactive elements that only contain icons.
**Action:** When creating icon-only interactive elements like toggles and submits, always ensure to provide an `aria-label` attribute describing the action (e.g., "Toggle Chatbot", "Send message").
