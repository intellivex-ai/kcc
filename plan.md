1. **Add `useMemo` to `src/components/ServiceMatrix.jsx`**
   - Update the import statement to include `useMemo`: `import React, { useState, useMemo } from 'react';`
   - Memoize the `filteredServices` array using `useMemo` to prevent unnecessary recalculations on re-renders when the `filter` state hasn't changed.
2. **Verify changes**
   - Use `sed` to verify that `useMemo` was imported and applied to `filteredServices`.
3. **Complete pre-commit steps**
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
4. **Submit changes**
   - Create a pull request using `request_code_review` with the title "⚡ Bolt: Memoize filtered services in ServiceMatrix" and a description of the impact.
