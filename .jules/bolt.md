## 2024-04-24 - Shared Date object in setInterval
**Learning:** Instantiating new Date() multiple times inside a setInterval loop creates redundant Date objects, causing unnecessary GC pressure and minor time synchronization issues between multiple countdowns updated in the same tick.
**Action:** Always instantiate a single shared new Date() object per interval tick and pass it as a parameter to time-calculation functions to ensure synchronization and reduce garbage collection overhead.
