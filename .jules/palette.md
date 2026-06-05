## 2024-06-05 - Add ARIA Labels to Icon-Only Buttons
**Learning:** Icon-only buttons (like those with just a `<Play />` or `<X />` icon) lack descriptive text for screen readers, creating an accessibility issue. In this app's components, we often see these on floating or overlay elements like video tour modals.
**Action:** Always ensure any `<button>` containing only an icon (like Lucide React icons) includes an `aria-label` attribute describing its function (e.g., `aria-label="Play video tour"`).
