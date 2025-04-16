
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '@/components/AuthForm';
import Logo from '@/components/Logo';
import { useToast } from "@/components/ui/use-toast";

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Mock authentication - in a real app, you would get the user role from the authentication response
  const getUserRole = () => {
    // This is just a placeholder - in a real app, this would come from your auth context or API response
    return Math.random() > 0.5 ? 'customer' : 'partner';
  };

  // This function will be called by AuthForm when login is successful
  const handleLoginSuccess = () => {
    setIsLoggingIn(true);
    toast({
      title: "Login Successful!",
      description: "Welcome back to QuickDeliver.",
    });
    
    // Get user role and redirect to appropriate dashboard
    const userRole = getUserRole();
    
    // Add a small delay to show the toast before redirecting
    setTimeout(() => {
      navigate(userRole === 'customer' ? '/customer' : '/partner');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="py-6 px-8">
        <Logo />
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <AuthForm onLoginSuccess={handleLoginSuccess} />
        
        <div className="mt-8 text-center">
          <Link to="/" className="text-gray-500 text-sm hover:text-brand-purple">
            &larr; Back to homepage
          </Link>
        </div>
      </div>
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} QuickDeliver. All rights reserved.
      </footer>
    </div>
  );
};

export default Auth;
