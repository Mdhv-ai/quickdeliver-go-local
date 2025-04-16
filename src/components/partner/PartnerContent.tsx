
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, MapPin, DollarSign, Clock, User, Truck, FileText } from 'lucide-react';
import JobRequests from '@/components/dashboard/partner/JobRequests';
import Navigation from '@/components/dashboard/partner/Navigation';
import Earnings from '@/components/dashboard/partner/Earnings';
import FullDayJobs from '@/components/dashboard/partner/FullDayJobs';
import Profile from '@/components/dashboard/partner/Profile';
import VehicleManagement from '@/components/partner/VehicleManagement';
import DeliveryHistory from '@/components/partner/DeliveryHistory';

interface PartnerContentProps {
  user: {
    name: string;
    role: string;
  };
}

const PartnerContent: React.FC<PartnerContentProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <div className="flex-1 overflow-auto bg-gray-900 text-white">
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10 shadow-md">
        <div className="container px-4 py-3 md:py-4 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold">Partner Dashboard</h1>
            <div className="flex items-center gap-2">
              <span className="hidden md:inline-flex text-sm bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">
                Welcome, {user.name}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Mobile Tabs */}
        <div className="md:hidden mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 h-auto bg-gray-800">
              <TabsTrigger value="jobs" className="flex flex-col items-center py-2 data-[state=active]:bg-blue-700 data-[state=active]:text-white">
                <Bell className="h-5 w-5" />
                <span className="text-xs mt-1">Jobs</span>
              </TabsTrigger>
              <TabsTrigger value="navigation" className="flex flex-col items-center py-2 data-[state=active]:bg-blue-700 data-[state=active]:text-white">
                <MapPin className="h-5 w-5" />
                <span className="text-xs mt-1">Map</span>
              </TabsTrigger>
              <TabsTrigger value="earnings" className="flex flex-col items-center py-2 data-[state=active]:bg-blue-700 data-[state=active]:text-white">
                <DollarSign className="h-5 w-5" />
                <span className="text-xs mt-1">Earnings</span>
              </TabsTrigger>
              <TabsTrigger value="fullday" className="flex flex-col items-center py-2 data-[state=active]:bg-blue-700 data-[state=active]:text-white">
                <Clock className="h-5 w-5" />
                <span className="text-xs mt-1">Full Day</span>
              </TabsTrigger>
              <TabsTrigger value="vehicle" className="flex flex-col items-center py-2 data-[state=active]:bg-blue-700 data-[state=active]:text-white">
                <Truck className="h-5 w-5" />
                <span className="text-xs mt-1">Vehicle</span>
              </TabsTrigger>
              <TabsTrigger value="history" className="flex flex-col items-center py-2 data-[state=active]:bg-blue-700 data-[state=active]:text-white">
                <FileText className="h-5 w-5" />
                <span className="text-xs mt-1">History</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Desktop View - Cards */}
        <div className="hidden md:block">
          <h2 className="text-lg font-medium text-gray-300 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div onClick={() => setActiveTab('jobs')} className={`bg-gray-800 p-6 rounded-xl shadow-md border-l-4 ${activeTab === 'jobs' ? 'border-blue-500' : 'border-transparent'} cursor-pointer hover:bg-gray-700 transition-all`}>
              <div className="flex items-center gap-3">
                <div className="bg-blue-900/50 p-2 rounded-lg">
                  <Bell className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold">New Job Requests</h3>
                  <p className="text-sm text-gray-400">12 new delivery requests</p>
                </div>
              </div>
            </div>
            
            <div onClick={() => setActiveTab('navigation')} className={`bg-gray-800 p-6 rounded-xl shadow-md border-l-4 ${activeTab === 'navigation' ? 'border-blue-500' : 'border-transparent'} cursor-pointer hover:bg-gray-700 transition-all`}>
              <div className="flex items-center gap-3">
                <div className="bg-green-900/50 p-2 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Navigation</h3>
                  <p className="text-sm text-gray-400">View active delivery routes</p>
                </div>
              </div>
            </div>
            
            <div onClick={() => setActiveTab('earnings')} className={`bg-gray-800 p-6 rounded-xl shadow-md border-l-4 ${activeTab === 'earnings' ? 'border-blue-500' : 'border-transparent'} cursor-pointer hover:bg-gray-700 transition-all`}>
              <div className="flex items-center gap-3">
                <div className="bg-amber-900/50 p-2 rounded-lg">
                  <DollarSign className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Earnings</h3>
                  <p className="text-sm text-gray-400">$345 earned this week</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <button 
              onClick={() => setActiveTab('fullday')}
              className={`px-4 py-2 text-sm rounded-full ${activeTab === 'fullday' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              <Clock className="h-4 w-4 inline mr-2" />
              Full-Day Jobs
            </button>
            <button 
              onClick={() => setActiveTab('vehicle')}
              className={`px-4 py-2 text-sm rounded-full ${activeTab === 'vehicle' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              <Truck className="h-4 w-4 inline mr-2" />
              My Vehicle
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 text-sm rounded-full ${activeTab === 'history' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              Delivery History
            </button>
          </div>
        </div>

        {/* Content for both mobile and desktop */}
        <div className="bg-gray-800 rounded-xl shadow-md p-4 md:p-6">
          {activeTab === 'jobs' && <JobRequests />}
          {activeTab === 'navigation' && <Navigation />}
          {activeTab === 'earnings' && <Earnings />}
          {activeTab === 'fullday' && <FullDayJobs />}
          {activeTab === 'profile' && <Profile />}
          {activeTab === 'vehicle' && <VehicleManagement />}
          {activeTab === 'history' && <DeliveryHistory />}
        </div>
      </main>
    </div>
  );
};

export default PartnerContent;
