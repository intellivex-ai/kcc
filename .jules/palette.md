## 2024-05-24 - Missing ARIA Labels on Icon-only Buttons
**Learning:** Found multiple instances of icon-only buttons (like gallery controls, notification toggles, close buttons) lacking `aria-label` attributes. Screen reader users would just hear "button" without context.
**Action:** Always add descriptive `aria-label` attributes to buttons that only contain icons to ensure accessibility for screen reader users.
