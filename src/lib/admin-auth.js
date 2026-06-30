/**
 * Admin Authentication Library
 * Handles admin login/logout and session management
 * Production-ready with environment-based credentials
 */

const ADMIN_KEY = 'kcc_admin_session';

/**
 * Login with username and password
 */
export const login = (username, password) => {
    // 🛡️ Sentinel: Removed hardcoded fallback credentials and added strict configuration checks to prevent unauthorized access.
    const envUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const envPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (!envUsername || !envPassword) {
        return { success: false, error: 'Admin credentials not configured in environment' };
    }

    // Validate credentials
    if (username === envUsername && password === envPassword) {
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
    const envPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    if (oldPassword === envPassword) {
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
