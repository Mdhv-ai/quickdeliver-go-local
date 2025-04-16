
import React from 'react';
import { Navigate } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import PartnerSidebar from '@/components/partner/PartnerSidebar';
import PartnerContent from '@/components/partner/PartnerContent';
import { useToast } from '@/components/ui/use-toast';

// This is a mock function that would be replaced with actual authentication logic
const useAuth = () => {
  // Mock user data - in a real app, this would come from your auth context
  return {
    isAuthenticated: true,
    user: {
      role: 'partner',
      name: 'Alex Smith',
    }
  };
};

const DeliveryPartnerDashboard: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();

  // Effect to show welcome toast on successful login
  React.useEffect(() => {
    if (isAuthenticated && user.role === 'partner') {
      toast({
        title: "Partner Dashboard Access",
        description: `Welcome back ${user.name}. You have 12 new delivery requests.`,
        variant: "default",
      });
    }
  }, []);

  // If not authenticated or not a partner, redirect to login
  if (!isAuthenticated || user.role !== 'partner') {
    return <Navigate to="/auth" />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-900">
        <PartnerSidebar user={user} />
        <PartnerContent user={user} />
      </div>
    </SidebarProvider>
  );
};

export default DeliveryPartnerDashboard;
