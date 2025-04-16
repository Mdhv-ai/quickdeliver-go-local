
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '@/components/AuthForm';
import Logo from '@/components/Logo';
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from '@/contexts/AuthContext';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { login, isAuthenticated, user } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      navigate(user.role === 'customer' ? '/customer' : '/partner');
    }
  }, [isAuthenticated, user, navigate]);

  // This function will be called by AuthForm when login is successful
  const handleLoginSuccess = async (email: string, password: string, role: 'customer' | 'partner') => {
    setIsLoggingIn(true);
    
    try {
      await login(email, password, role);
      
      toast({
        title: "Login Successful!",
        description: "Welcome back to QuickDeliver.",
      });
      
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="py-6 px-8">
        <Logo />
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <AuthForm onLoginSuccess={handleLoginSuccess} isLoading={isLoggingIn} />
        
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
