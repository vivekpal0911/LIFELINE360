import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem('userEmail');
  if (!isLoggedIn) {
    // Save the page user wanted to visit
    localStorage.setItem('redirectAfterLogin', location.pathname);
    return <Navigate to="/auth" replace />;
  }
  return children;
} 