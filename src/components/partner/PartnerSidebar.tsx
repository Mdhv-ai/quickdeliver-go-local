
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
import { MapPin, Clock, Calendar, DollarSign, User, Settings, LogOut, Truck, FileText, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface PartnerSidebarProps {
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

const PartnerSidebar: React.FC<PartnerSidebarProps> = ({ user }) => {
  const navigate = useNavigate();
  const firstName = user.name.split(' ')[0];
  const initials = user.name.split(' ').map(name => name[0]).join('');

  // Menu sections and items with proper typing
  const mainMenuItems: MenuItem[] = [
    { title: 'Available Jobs', icon: Bell, id: 'jobs', badge: '12' },
    { title: 'Active Deliveries', icon: MapPin, id: 'navigation', badge: '3' },
    { title: 'Full Day Bookings', icon: Calendar, id: 'fullday' },
    { title: 'My Earnings', icon: DollarSign, id: 'earnings' },
    { title: 'Delivery History', icon: FileText, id: 'history' },
    { title: 'My Vehicle', icon: Truck, id: 'vehicle' },
  ];

  const accountMenuItems: MenuItem[] = [
    { title: 'My Profile', icon: User, id: 'profile' },
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
    <Sidebar className="border-r border-gray-700">
      <SidebarHeader className="border-b border-gray-700 p-4 bg-gray-800">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <AvatarImage src="" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-white">Hello, {firstName}</span>
            <span className="text-xs text-gray-400">Delivery Partner</span>
          </div>
        </div>
        <SidebarTrigger className="md:hidden absolute right-4 top-4 text-white" />
      </SidebarHeader>
      
      <SidebarContent className="bg-gray-900">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500">DELIVERIES</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    className="text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                    onClick={() => handleMenuClick(item.id, item.action)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge className="ml-auto bg-blue-900 text-blue-300 border-blue-800">
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
                    className="text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                    onClick={() => handleMenuClick(item.id, item.action)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-gray-700 p-4 bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            QuickDeliver © {new Date().getFullYear()}
          </div>
          <div className="text-xs bg-green-900/50 text-green-400 px-2 py-1 rounded-full">
            Online
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default PartnerSidebar;
