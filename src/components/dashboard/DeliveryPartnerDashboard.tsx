
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, MapPin, DollarSign, Clock, User } from 'lucide-react';
import JobRequests from './partner/JobRequests';
import Navigation from './partner/Navigation';
import Earnings from './partner/Earnings';
import FullDayJobs from './partner/FullDayJobs';
import Profile from './partner/Profile';

interface DeliveryPartnerDashboardProps {
  user: {
    name: string;
    role: string;
  };
}

const DeliveryPartnerDashboard: React.FC<DeliveryPartnerDashboardProps> = ({ user }) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Partner Dashboard</h1>
            <span className="text-sm bg-brand-light-purple text-brand-purple px-3 py-1 rounded-full">
              Welcome, {user.name}
            </span>
          </div>
          <div>
            {/* Profile menu would go here */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs defaultValue="jobs">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="jobs" className="flex flex-col items-center py-3 gap-1">
              <Bell className="h-5 w-5" />
              <span>Job Requests</span>
            </TabsTrigger>
            <TabsTrigger value="navigation" className="flex flex-col items-center py-3 gap-1">
              <MapPin className="h-5 w-5" />
              <span>Navigation</span>
            </TabsTrigger>
            <TabsTrigger value="earnings" className="flex flex-col items-center py-3 gap-1">
              <DollarSign className="h-5 w-5" />
              <span>Earnings</span>
            </TabsTrigger>
            <TabsTrigger value="fullday" className="flex flex-col items-center py-3 gap-1">
              <Clock className="h-5 w-5" />
              <span>Full-Day Jobs</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col items-center py-3 gap-1">
              <User className="h-5 w-5" />
              <span>Profile & KYC</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="jobs">
            <JobRequests />
          </TabsContent>
          <TabsContent value="navigation">
            <Navigation />
          </TabsContent>
          <TabsContent value="earnings">
            <Earnings />
          </TabsContent>
          <TabsContent value="fullday">
            <FullDayJobs />
          </TabsContent>
          <TabsContent value="profile">
            <Profile />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DeliveryPartnerDashboard;
