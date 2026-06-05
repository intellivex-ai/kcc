const fs = require('fs');
const assert = require('assert');

const content = fs.readFileSync('src/pages/JobBoard.jsx', 'utf-8');

assert.ok(content.includes('import React, { useState, useMemo } from \'react\';'), 'Missing useMemo import');
assert.ok(content.includes('// ⚡ Bolt: Cache filtered results and hoist toLowerCase() outside the loop to prevent O(n) redundant string operations'), 'Missing inline comment');
assert.ok(content.includes('const filteredJobs = useMemo(() => {'), 'filteredJobs not wrapped in useMemo');
assert.ok(content.includes('const lowerSearchTerm = searchTerm.toLowerCase();'), 'searchTerm.toLowerCase() not hoisted');
assert.ok(content.includes('job.title.toLowerCase().includes(lowerSearchTerm)'), 'lowerSearchTerm not used in filter');
assert.ok(content.includes('}, [searchTerm, filterCategory, filterType]);'), 'Missing dependency array for useMemo');

console.log('Verification passed!');
