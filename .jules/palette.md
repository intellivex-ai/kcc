## 2024-06-12 - Missing ARIA Labels on Mobile Navbar Buttons
**Learning:** Icon-only toggle buttons in mobile navigation (like theme toggle and hamburger menu) frequently lack context for screen readers if `aria-label` or `aria-expanded` attributes are omitted. In this app, multiple icon-only buttons were missing descriptive names.
**Action:** Always ensure icon-only interactive elements contain an `aria-label` attribute (e.g., `aria-label="Toggle navigation menu"`) or screen-reader only text so their function is clear when accessed by assistive technologies.
