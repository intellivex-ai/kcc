## 2026-03-02 - Explicit Label Association for Custom Forms
**Learning:** When building custom styled forms (especially with absolute positioned icons overlapping inputs), clicking the label text fails to focus the input unless explicitly linked via `htmlFor` and `id`. Screen readers also fail to associate the label with the input natively without these explicit associations.
**Action:** Always ensure `htmlFor` on the `<label>` matches the `id` on the corresponding `<input>`, `<select>`, or `<textarea>` for robust accessibility and improved click-target area.
