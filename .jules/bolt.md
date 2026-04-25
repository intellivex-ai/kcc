## 2024-04-25 - ExamCountdown setInterval Re-renders
**Learning:** `calculateTimeLeft` creates `new Date()` multiple times per exam per second in a `setInterval` loop. Providing a shared `now` timestamp to the function prevents creating redundant `Date` objects inside the loop and improves general performance.
**Action:** Share a single `new Date()` object in intervals when recalculating state for multiple items to reduce object creation overhead.
