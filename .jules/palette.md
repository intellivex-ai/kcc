## 2026-05-10 - Added ARIA labels to NotificationSystem
**Learning:** The Lucide React icons are frequently used in `<button>` tags without visible text in this codebase, which creates unlabeled elements for screen reader users.
**Action:** Ensure that all newly added icon-only buttons receive descriptive `aria-label` properties by default.
