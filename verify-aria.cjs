const fs = require('fs');
const assert = require('assert');

const content = fs.readFileSync('src/pages/StudentPortal.jsx', 'utf8');

assert.ok(content.includes('aria-label="Notifications"'), 'Should have Notifications aria-label');
assert.ok(content.includes('aria-label="Settings"'), 'Should have Settings aria-label');
assert.ok(content.includes('aria-label="Toggle password visibility"'), 'Should have Toggle password visibility aria-label');

console.log('Successfully verified aria labels in StudentPortal.jsx');
