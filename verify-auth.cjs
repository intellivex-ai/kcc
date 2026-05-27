const fs = require('fs');
const assert = require('assert');
const content = fs.readFileSync('src/lib/admin-auth.js', 'utf8');

assert(content.includes('crypto.randomUUID()'), 'Should use crypto.randomUUID()');
assert(content.includes('Security: Use random UUID fallback'), 'Should contain security comment');
assert(!content.includes("'admin'"), 'Should not contain hardcoded admin user');
assert(!content.includes("'kcc2024'"), 'Should not contain hardcoded admin password');
assert(content.includes('ADMIN_CREDENTIALS.password'), 'Should use ADMIN_CREDENTIALS instead of DEFAULT_CREDENTIALS');
console.log('Admin auth modifications verified successfully.');
