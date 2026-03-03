## 2024-10-24 - Student Portal LCP Degradation Risk
**Learning:** The profile image in `StudentPortal.jsx` is rendered above the fold and serves as the Largest Contentful Paint (LCP) element for that view. Applying `loading="lazy"` to it negatively impacts the LCP metric by delaying the critical image request.
**Action:** Do not apply `loading="lazy"` to hero images or primary avatars (like the Student Portal profile picture) that appear above the fold. Always evaluate if an image is in the initial viewport before adding lazy loading.
