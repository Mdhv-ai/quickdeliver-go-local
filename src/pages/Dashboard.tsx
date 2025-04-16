
import React from 'react';
import { Navigate } from 'react-router-dom';

// This is a mock function that would be replaced with actual authentication logic
const useAuth = () => {
  // Mock user data - in a real app, this would come from your auth context
  return {
    isAuthenticated: true, // For demo purposes
    user: {
      role: 'customer', // 'customer' or 'partner' based on login
      name: 'John Doe',
    }
  };
};

const Dashboard: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  // Redirect based on user role
  return user.role === 'customer' 
    ? <Navigate to="/customer" /> 
    : <Navigate to="/partner" />;
};

export default Dashboard;
