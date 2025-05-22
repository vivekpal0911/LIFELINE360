import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children, role }) {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem('userEmail');
  const userRole = localStorage.getItem('userRole');
  if (!isLoggedIn) {
    // Save the page user wanted to visit
    localStorage.setItem('redirectAfterLogin', location.pathname);
    return <Navigate to="/auth" replace />;
  }
  if (role && userRole !== role) {
    // If user is logged in but not the right role, redirect to home
    return <Navigate to="/" replace />;
  }
  return children;
} 