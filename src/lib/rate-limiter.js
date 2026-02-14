/**
 * Client-Side Rate Limiter
 * Prevents spam and abuse of forms and actions
 */

const RATE_LIMIT_PREFIX = 'rate_limit_';

/**
 * Rate limiter class
 */
class RateLimiter {
    /**
     * Check if an action is allowed
     * @param {string} key - Unique key for the action
     * @param {number} maxAttempts - Maximum attempts allowed
     * @param {number} windowMs - Time window in milliseconds
     * @returns {object} - { allowed: boolean, remaining: number, resetTime: Date }
     */
    static check(key, maxAttempts = 5, windowMs = 60000) {
        const storageKey = RATE_LIMIT_PREFIX + key;
        const now = Date.now();

        try {
            const data = localStorage.getItem(storageKey);
            let attempts = data ? JSON.parse(data) : { count: 0, resetTime: now + windowMs };

            // Reset if window has passed
            if (now >= attempts.resetTime) {
                attempts = { count: 0, resetTime: now + windowMs };
            }

            const allowed = attempts.count < maxAttempts;
            const remaining = Math.max(0, maxAttempts - attempts.count - 1);

            return {
                allowed,
                remaining,
                resetTime: new Date(attempts.resetTime)
            };
        } catch (error) {
            console.error('Rate limiter error:', error);
            // Fail open - allow the action
            return { allowed: true, remaining: maxAttempts - 1, resetTime: new Date(now + windowMs) };
        }
    }

    /**
     * Record an attempt
     * @param {string} key - Unique key for the action
     * @param {number} windowMs - Time window in milliseconds
     */
    static record(key, windowMs = 60000) {
        const storageKey = RATE_LIMIT_PREFIX + key;
        const now = Date.now();

        try {
            const data = localStorage.getItem(storageKey);
            let attempts = data ? JSON.parse(data) : { count: 0, resetTime: now + windowMs };

            // Reset if window has passed
            if (now >= attempts.resetTime) {
                attempts = { count: 1, resetTime: now + windowMs };
            } else {
                attempts.count += 1;
            }

            localStorage.setItem(storageKey, JSON.stringify(attempts));
        } catch (error) {
            console.error('Rate limiter record error:', error);
        }
    }

    /**
     * Reset rate limit for a key
     * @param {string} key - Unique key to reset
     */
    static reset(key) {
        const storageKey = RATE_LIMIT_PREFIX + key;
        try {
            localStorage.removeItem(storageKey);
        } catch (error) {
            console.error('Rate limiter reset error:', error);
        }
    }

    /**
     * Clear all rate limits
     */
    static clearAll() {
        try {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith(RATE_LIMIT_PREFIX)) {
                    localStorage.removeItem(key);
                }
            });
        } catch (error) {
            console.error('Rate limiter clear error:', error);
        }
    }
}

/**
 * Rate limit decorator for form submissions
 * @param {Function} fn - Function to rate limit
 * @param {string} key - Unique key for rate limiting
 * @param {number} maxAttempts - Maximum attempts
 * @param {number} windowMs - Time window
 * @returns {Function} - Rate limited function
 */
export const rateLimitForm = (fn, key, maxAttempts = 5, windowMs = 60000) => {
    return async (...args) => {
        const check = RateLimiter.check(key, maxAttempts, windowMs);

        if (!check.allowed) {
            const minutes = Math.ceil((check.resetTime - new Date()) / 60000);
            throw new Error(`Too many attempts. Please try again in ${minutes} minute${minutes > 1 ? 's' : ''}.`);
        }

        RateLimiter.record(key, windowMs);

        try {
            return await fn(...args);
        } catch (error) {
            throw error;
        }
    };
};

/**
 * Hook for form rate limiting in React components
 * @param {string} formId - Unique form identifier
 * @param {number} maxAttempts - Maximum attempts (default: 5)
 * @param {number} windowMs - Time window in ms (default: 1 minute)
 * @returns {object} - { canSubmit: boolean, remaining: number, resetTime: Date, recordAttempt: Function }
 */
export const useRateLimit = (formId, maxAttempts = 5, windowMs = 60000) => {
    const check = RateLimiter.check(formId, maxAttempts, windowMs);

    return {
        canSubmit: check.allowed,
        remaining: check.remaining,
        resetTime: check.resetTime,
        recordAttempt: () => RateLimiter.record(formId, windowMs),
        reset: () => RateLimiter.reset(formId)
    };
};

export default RateLimiter;
