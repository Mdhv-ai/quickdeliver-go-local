
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const Dashboard: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    // Show welcome toast when redirecting
    if (isAuthenticated && user) {
      toast({
        title: `Welcome to QuickDeliver, ${user.name}!`,
        description: "You're being redirected to your dashboard.",
        duration: 3000,
      });
    }
  }, [isAuthenticated, user, toast]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-brand-purple border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  // Redirect based on user role
  return user?.role === 'customer' 
    ? <Navigate to="/customer" /> 
    : <Navigate to="/partner" />;
};

export default Dashboard;
