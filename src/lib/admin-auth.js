/**
 * Admin Authentication Library
 * Handles admin login/logout and session management
 * Production-ready with environment-based credentials
 */

const ADMIN_KEY = 'kcc_admin_session';

// Get credentials from environment variables
const ADMIN_CREDENTIALS = {
    username: import.meta.env.VITE_ADMIN_USERNAME || 'admin',
    passwordHash: import.meta.env.VITE_ADMIN_PASSWORD_HASH || '8930feaba42a36fd7822b623fb652976a7d85c3cfe38f99936499d23cc174898'
};

/**
 * Login with username and password
 */
export const login = async (username, password) => {
    // Validate credentials
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (username === ADMIN_CREDENTIALS.username && hashHex === ADMIN_CREDENTIALS.passwordHash) {
        const session = {
            username,
            loginTime: new Date().toISOString(),
            isAuthenticated: true
        };

        localStorage.setItem(ADMIN_KEY, JSON.stringify(session));
        return { success: true, user: session };
    }

    return { success: false, error: 'Invalid username or password' };
};

/**
 * Logout
 */
export const logout = () => {
    localStorage.removeItem(ADMIN_KEY);
    window.location.href = '/admin/login';
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
    const session = localStorage.getItem(ADMIN_KEY);
    if (!session) return false;

    try {
        const parsed = JSON.parse(session);
        return parsed.isAuthenticated === true;
    } catch {
        return false;
    }
};

/**
 * Get current session
 */
export const getSession = () => {
    const session = localStorage.getItem(ADMIN_KEY);
    if (!session) return null;

    try {
        return JSON.parse(session);
    } catch {
        return null;
    }
};

/**
 * Change password (demo only)
 */
export const changePassword = (oldPassword, newPassword) => {
    // In production, this would call an API
    if (oldPassword === DEFAULT_CREDENTIALS.password) {
        // Update credentials (in real app, this would be on server)
        return { success: true };
    }

    return { success: false, error: 'Current password is incorrect' };
};

export default {
    login,
    logout,
    isAuthenticated,
    getSession,
    changePassword
};
