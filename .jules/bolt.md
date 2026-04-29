## 2026-04-29 - Prevent render-cycle object transformations
**Learning:** Computing static object keys and filtering them on every render wastes CPU cycles.
**Action:** Move static data transformations derived from constants outside of component render cycles into top-level constants.
