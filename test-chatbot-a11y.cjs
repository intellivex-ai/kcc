const assert = require('assert');
const fs = require('fs');

const content = fs.readFileSync('./src/components/Chatbot.jsx', 'utf8');

// Check toggle button
assert(content.includes('aria-label={isOpen ? "Close chat" : "Open chat support"}'), 'Toggle button missing aria-label');

// Check input
assert(content.includes('aria-label="Type your message"'), 'Input missing aria-label');

// Check submit button
assert(content.includes('aria-label="Send message"'), 'Submit button missing aria-label');

// Check focus-visible on submit button
assert(content.includes('focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2'), 'Submit button missing focus styles');

// Check focus-visible on input
assert(content.includes('focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-white'), 'Input missing focus styles');

console.log('All a11y checks passed for Chatbot.jsx!');
