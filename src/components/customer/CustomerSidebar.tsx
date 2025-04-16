
import React from 'react';
import { 
  Sidebar, 
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel
} from '@/components/ui/sidebar';
import { Package, Clock, Calendar, CreditCard, Star, User, Settings, LogOut, History, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface CustomerSidebarProps {
  user: {
    name: string;
    role: string;
  };
}

// Define types for menu items
interface MenuItem {
  title: string;
  icon: React.ComponentType<any>; // Using any to simplify the lucide icon type
  id: string;
  badge?: string;
  action?: () => void; // Make action optional
}

const CustomerSidebar: React.FC<CustomerSidebarProps> = ({ user }) => {
  const navigate = useNavigate();
  const firstName = user.name.split(' ')[0];
  const initials = user.name.split(' ').map(name => name[0]).join('');

  // Menu sections and items with proper typing
  const mainMenuItems: MenuItem[] = [
    { title: 'Book Delivery', icon: Package, id: 'book' },
    { title: 'Active Deliveries', icon: Clock, id: 'active', badge: '2' },
    { title: 'Hire Full Day', icon: Calendar, id: 'fullday' },
    { title: 'Payments', icon: CreditCard, id: 'payments' },
    { title: 'Rate & Tip', icon: Star, id: 'rate' },
    { title: 'Delivery History', icon: History, id: 'history' },
  ];

  const accountMenuItems: MenuItem[] = [
    { title: 'My Profile', icon: User, id: 'profile' },
    { title: 'Notifications', icon: Bell, id: 'notifications', badge: '3' },
    { title: 'Settings', icon: Settings, id: 'settings' },
    { title: 'Logout', icon: LogOut, id: 'logout', action: () => navigate('/auth') },
  ];

  const handleMenuClick = (id: string, action?: () => void) => {
    if (action) {
      action();
    }
    // Future implementation: Handle tab switching
  };

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 p-4 bg-white">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 bg-gradient-to-br from-brand-purple to-purple-600 text-white">
            <AvatarImage src="" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">Hello, {firstName}</span>
            <span className="text-xs text-muted-foreground">Customer Account</span>
          </div>
        </div>
        <SidebarTrigger className="md:hidden absolute right-4 top-4" />
      </SidebarHeader>
      
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500">DELIVERY OPTIONS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    className="hover:bg-brand-light-purple/20 hover:text-brand-purple transition-colors"
                    onClick={() => handleMenuClick(item.id, item.action)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge className="ml-auto" variant="outline">
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500">ACCOUNT</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountMenuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    className="hover:bg-brand-light-purple/20 hover:text-brand-purple transition-colors"
                    onClick={() => handleMenuClick(item.id, item.action)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge className="ml-auto" variant="outline">
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            QuickDeliver © {new Date().getFullYear()}
          </div>
          <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            Online
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default CustomerSidebar;
