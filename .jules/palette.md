## YYYY-MM-DD - [Title]
**Learning:** [UX/a11y insight]
**Action:** [How to apply next time]

## 2024-03-31 - Add explicit label associations to InquiryForm
**Learning:** The InquiryForm's fields lacked proper explicit linking via `htmlFor` and `id` which means assistive devices (e.g. screen readers) and mouse clicks on labels won't properly target their inputs for better UX and a11y.
**Action:** Consistently ensure that all new and refactored `<label>` components use `htmlFor="someId"` paired with `<input id="someId" />` to establish explicit associations.
