## 2024-05-03 - Missing ARIA labels on Icon Buttons
**Learning:** Found several icon-only buttons (like Notification Bell, Close buttons in Modals/Banners, and Delete buttons) across the app missing `aria-label`s. This makes them inaccessible to screen readers.
**Action:** Consistently add `aria-label` to all icon-only buttons (especially those using Lucide React icons) to improve accessibility.
