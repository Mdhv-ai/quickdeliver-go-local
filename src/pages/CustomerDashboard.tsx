
import React from 'react';
import { Navigate } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import CustomerSidebar from '@/components/customer/CustomerSidebar';
import CustomerContent from '@/components/customer/CustomerContent';
import { useToast } from '@/components/ui/use-toast';

// This is a mock function that would be replaced with actual authentication logic
const useAuth = () => {
  // Mock user data - in a real app, this would come from your auth context
  return {
    isAuthenticated: true,
    user: {
      role: 'customer',
      name: 'John Doe',
    }
  };
};

const CustomerDashboard: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();

  // Effect to show welcome toast on successful login
  React.useEffect(() => {
    if (isAuthenticated && user.role === 'customer') {
      toast({
        title: "Welcome to QuickDeliver",
        description: `Hello ${user.name}, need something delivered today?`,
        variant: "default",
      });
    }
  }, []);

  // If not authenticated or not a customer, redirect to login
  if (!isAuthenticated || user.role !== 'customer') {
    return <Navigate to="/auth" />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <CustomerSidebar user={user} />
        <CustomerContent user={user} />
      </div>
    </SidebarProvider>
  );
};

export default CustomerDashboard;
