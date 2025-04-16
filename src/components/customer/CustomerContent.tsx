
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Clock, Calendar, CreditCard, Star, History } from 'lucide-react';
import BookDelivery from '@/components/dashboard/customer/BookDelivery';
import ActiveDeliveries from '@/components/dashboard/customer/ActiveDeliveries';
import HireFullDay from '@/components/dashboard/customer/HireFullDay';
import CustomerPayments from '@/components/dashboard/customer/CustomerPayments';
import RateAndTip from '@/components/dashboard/customer/RateAndTip';
import DeliveryHistory from '@/components/dashboard/customer/DeliveryHistory';

interface CustomerContentProps {
  user: {
    name: string;
    role: string;
  };
}

const CustomerContent: React.FC<CustomerContentProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('book');

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container px-4 py-3 md:py-4 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Customer Dashboard</h1>
            <div className="flex items-center gap-2">
              <span className="hidden md:inline-flex text-sm bg-brand-light-purple text-brand-purple px-3 py-1 rounded-full">
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
            <TabsList className="grid w-full grid-cols-6 h-auto">
              <TabsTrigger value="book" className="flex flex-col items-center py-2">
                <Package className="h-5 w-5" />
                <span className="text-xs mt-1">Book</span>
              </TabsTrigger>
              <TabsTrigger value="active" className="flex flex-col items-center py-2">
                <Clock className="h-5 w-5" />
                <span className="text-xs mt-1">Active</span>
              </TabsTrigger>
              <TabsTrigger value="fullday" className="flex flex-col items-center py-2">
                <Calendar className="h-5 w-5" />
                <span className="text-xs mt-1">Full Day</span>
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex flex-col items-center py-2">
                <CreditCard className="h-5 w-5" />
                <span className="text-xs mt-1">Pay</span>
              </TabsTrigger>
              <TabsTrigger value="rate" className="flex flex-col items-center py-2">
                <Star className="h-5 w-5" />
                <span className="text-xs mt-1">Rate</span>
              </TabsTrigger>
              <TabsTrigger value="history" className="flex flex-col items-center py-2">
                <History className="h-5 w-5" />
                <span className="text-xs mt-1">History</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Desktop View - Cards */}
        <div className="hidden md:block">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div onClick={() => setActiveTab('book')} className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${activeTab === 'book' ? 'border-brand-purple' : 'border-transparent'} cursor-pointer hover:shadow-md transition-all`}>
              <div className="flex items-center gap-3">
                <div className="bg-brand-light-purple p-2 rounded-lg">
                  <Package className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-semibold">Book a Delivery</h3>
                  <p className="text-sm text-gray-500">Send packages anywhere in the city</p>
                </div>
              </div>
            </div>
            
            <div onClick={() => setActiveTab('active')} className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${activeTab === 'active' ? 'border-brand-purple' : 'border-transparent'} cursor-pointer hover:shadow-md transition-all`}>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Track Deliveries</h3>
                  <p className="text-sm text-gray-500">Live updates on your packages</p>
                </div>
              </div>
            </div>
            
            <div onClick={() => setActiveTab('fullday')} className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${activeTab === 'fullday' ? 'border-brand-purple' : 'border-transparent'} cursor-pointer hover:shadow-md transition-all`}>
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Calendar className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Hire Full Day</h3>
                  <p className="text-sm text-gray-500">Book a partner for the entire day</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <button 
              onClick={() => setActiveTab('payments')}
              className={`px-4 py-2 text-sm rounded-full ${activeTab === 'payments' ? 'bg-brand-purple text-white' : 'bg-white text-gray-700'}`}
            >
              <CreditCard className="h-4 w-4 inline mr-2" />
              Payments
            </button>
            <button 
              onClick={() => setActiveTab('rate')}
              className={`px-4 py-2 text-sm rounded-full ${activeTab === 'rate' ? 'bg-brand-purple text-white' : 'bg-white text-gray-700'}`}
            >
              <Star className="h-4 w-4 inline mr-2" />
              Rate & Tip
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 text-sm rounded-full ${activeTab === 'history' ? 'bg-brand-purple text-white' : 'bg-white text-gray-700'}`}
            >
              <History className="h-4 w-4 inline mr-2" />
              Delivery History
            </button>
          </div>
        </div>

        {/* Content for both mobile and desktop */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
          {activeTab === 'book' && <BookDelivery />}
          {activeTab === 'active' && <ActiveDeliveries />}
          {activeTab === 'fullday' && <HireFullDay />}
          {activeTab === 'payments' && <CustomerPayments />}
          {activeTab === 'rate' && <RateAndTip />}
          {activeTab === 'history' && <DeliveryHistory />}
        </div>
      </main>
    </div>
  );
};

export default CustomerContent;
