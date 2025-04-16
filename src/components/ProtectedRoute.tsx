
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  allowedRole?: 'customer' | 'partner';
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRole,
  redirectPath = '/auth'
}) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-brand-purple border-t-transparent rounded-full"></div>
      </div>
    );
  }
  
  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  
  // Check if user has the correct role (if a role is specified)
  if (allowedRole && user?.role !== allowedRole) {
    return <Navigate to="/dashboard" replace />;
  }
  
  // If all checks pass, render the protected content
  return <Outlet />;
};

export default ProtectedRoute;
