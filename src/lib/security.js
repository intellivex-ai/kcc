/**
 * Security Utilities for KCC Website
 * Provides input sanitization and XSS protection
 */

/**
 * Sanitize HTML to prevent XSS attacks
 * @param {string} dirty - Unsanitized input
 * @returns {string} - Sanitized output
 */
export const sanitizeHTML = (dirty) => {
    if (!dirty) return '';

    // Create a temporary div
    const temp = document.createElement('div');
    temp.textContent = dirty;
    return temp.innerHTML;
};

/**
 * Sanitize user input for forms
 * @param {string} input - User input
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input) => {
    if (!input) return '';

    return String(input)
        .trim()
        .replace(/[<>]/g, '') // Remove < and >
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+\s*=/gi, '') // Remove event handlers
        .slice(0, 1000); // Limit length
};

/**
 * Sanitize email
 * @param {string} email - Email input
 * @returns {string} - Sanitized email
 */
export const sanitizeEmail = (email) => {
    if (!email) return '';

    const sanitized = String(email)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9@._-]/g, '');

    return sanitized.slice(0, 100);
};

/**
 * Sanitize phone number
 * @param {string} phone - Phone input
 * @returns {string} - Sanitized phone
 */
export const sanitizePhone = (phone) => {
    if (!phone) return '';

    // Remove all non-digits
    const digits = String(phone).replace(/\D/g, '');

    return digits.slice(0, 15);
};

/**
 * Validate and sanitize URL
 * @param {string} url - URL input
 * @returns {string|null} - Sanitized URL or null if invalid
 */
export const sanitizeURL = (url) => {
    if (!url) return null;

    try {
        const parsed = new URL(url);

        // Only allow http and https protocols
        if (!['http:', 'https:'].includes(parsed.protocol)) {
            return null;
        }

        return parsed.href;
    } catch {
        return null;
    }
};

/**
 * Escape HTML entities
 * @param {string} str - String to escape
 * @returns {string} - Escaped string
 */
export const escapeHTML = (str) => {
    if (!str) return '';

    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;'
    };

    return String(str).replace(/[&<>"'/]/g, (char) => htmlEntities[char]);
};

/**
 * Validate input against common XSS patterns
 * @param {string} input - Input to validate
 * @returns {boolean} - True if safe, false if potentially malicious
 */
export const isInputSafe = (input) => {
    if (!input) return true;

    const xssPatterns = [
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi,
        /<iframe/gi,
        /<object/gi,
        /<embed/gi,
        /eval\(/gi,
        /expression\(/gi
    ];

    return !xssPatterns.some(pattern => pattern.test(input));
};

/**
 * Sanitize object (recursively sanitize all string values)
 * @param {object} obj - Object to sanitize
 * @returns {object} - Sanitized object
 */
export const sanitizeObject = (obj) => {
    if (!obj || typeof obj !== 'object') return obj;

    const sanitized = {};

    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'string') {
            sanitized[key] = sanitizeInput(value);
        } else if (typeof value === 'object' && value !== null) {
            sanitized[key] = sanitizeObject(value);
        } else {
            sanitized[key] = value;
        }
    }

    return sanitized;
};

export default {
    sanitizeHTML,
    sanitizeInput,
    sanitizeEmail,
    sanitizePhone,
    sanitizeURL,
    escapeHTML,
    isInputSafe,
    sanitizeObject
};
