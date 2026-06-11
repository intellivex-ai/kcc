## 2024-06-11 - Icon-Only Button Accessibility in Floating Panels
**Learning:** Interactive floating panels (like notification systems) often rely heavily on icon-only buttons for toggling visibility, closing the panel, and performing inline actions (like deleting items). Screen readers cannot interpret these actions without explicit text.
**Action:** Always verify that every generic icon-only button within custom interactive panels and modals includes descriptive, context-aware `aria-label` attributes to ensure equivalent functionality for visually impaired users.
