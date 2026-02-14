/**
 * Admin Authentication Library
 * Handles admin login/logout and session management
 * Uses localStorage for demo purposes
 */

const ADMIN_KEY = 'kcc_admin_session';
const DEFAULT_CREDENTIALS = {
    username: 'admin',
    password: 'kcc2024'
};

/**
 * Login with username and password
 */
export const login = (username, password) => {
    if (username === DEFAULT_CREDENTIALS.username && password === DEFAULT_CREDENTIALS.password) {
        const session = {
            username,
            loginTime: new Date().toISOString(),
            isAuthenticated: true
        };

        localStorage.setItem(ADMIN_KEY, JSON.stringify(session));
        return { success: true, user: session };
    }

    return { success: false, error: 'Invalid credentials' };
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
