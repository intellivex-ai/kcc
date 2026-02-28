/**
 * Admin Authentication Library
 * Handles admin login/logout and session management
 * Production-ready with environment-based credentials
 */

const ADMIN_KEY = 'kcc_admin_session';

// Get credentials from environment variables (fail secure: no fallback)
const ADMIN_CREDENTIALS = {
    username: import.meta.env.VITE_ADMIN_USERNAME,
    password: import.meta.env.VITE_ADMIN_PASSWORD
};

/**
 * Login with username and password
 */
export const login = (username, password) => {
    // Fail securely if environment credentials are not set
    if (!ADMIN_CREDENTIALS.username || !ADMIN_CREDENTIALS.password) {
        console.error('Admin credentials are not configured in environment.');
        return { success: false, error: 'Authentication service unavailable' };
    }

    // Validate credentials safely
    if (username && password && username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
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
    // Client-side password changes are inherently insecure.
    // In a production environment, this should always be handled server-side.
    return { success: false, error: 'Password changes must be performed via server configuration.' };
};

export default {
    login,
    logout,
    isAuthenticated,
    getSession,
    changePassword
};
