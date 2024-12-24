import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // Check if user is logged in by looking for the token in localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    
    // If there's no user data, redirect to login
    if (!user || !user.access_token) {
        return <Navigate to="/login" replace />;
    }
    
    // If user is authenticated, render the protected component
    return children;
};

export default PrivateRoute;