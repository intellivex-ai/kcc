🎯 **What:** Reduced line complexity in `src/components/Hero.jsx` by breaking long, inline className strings for `<Link>` components across multiple lines.
💡 **Why:** This significantly improves the readability and maintainability of the JSX code. Overly long lines require horizontal scrolling and make it difficult to quickly scan the attributes applied to an element.
✅ **Verification:** Verified the refactor visually by serving the app and using Playwright to take a screenshot and record a short video. Also ran `npm run build` to verify there were no regressions introduced to the build process.
✨ **Result:** The `Hero.jsx` component is cleaner and the code is more structured, adhering to better formatting practices without changing any behavior or styling.
