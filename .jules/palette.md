## 2024-06-09 - Missing ARIA Labels on Icon-Only Buttons in Portals
**Learning:** Icon-only buttons (like Bell, Settings, Download, and Password Visibility Toggles) frequently appear in functional application portals without accessible names, causing screen readers to announce them ambiguously.
**Action:** When working on application-like UI components such as portals or dashboards, explicitly check and enforce `aria-label` attributes on any utility `<button>` elements that rely solely on icons for visual communication.
