import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../lib/admin-auth';

const ProtectedRoute = ({ children }) => {
    const authenticated = isAuthenticated();

    if (!authenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
