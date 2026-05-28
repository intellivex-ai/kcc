const fs = require('fs');
const assert = require('assert');

const content = fs.readFileSync('src/components/Chatbot.jsx', 'utf-8');

assert(content.includes('aria-label={isOpen ? "Close chat" : "Open chat"}'), 'Main chatbot toggle should have an aria-label attribute');
assert(content.includes('aria-expanded={isOpen}'), 'Main chatbot toggle should have an aria-expanded attribute');
assert(content.includes('focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2'), 'Should have focus-visible classes');

assert(content.includes('aria-label="Send message"'), 'Send message button should have an aria-label attribute');

console.log('Verification passed!');
