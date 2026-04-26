## 2026-04-26 - Optimize static data in FeeCalculator
**Learning:** In React functional components, creating static objects or defining static arrays directly inside the component body can cause unnecessary object recreation and expensive array transformations (like `Object.entries`) on every re-render.
**Action:** Always move static data and purely deterministic derived data constructions (such as extracting keys from constant objects) outside of the component render cycle into top-level constants. This guarantees stable references and avoids the computational overhead during render.
