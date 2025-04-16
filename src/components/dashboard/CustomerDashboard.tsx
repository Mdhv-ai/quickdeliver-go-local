
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Calendar, Clock, CreditCard, Star } from 'lucide-react';
import BookDelivery from './customer/BookDelivery';
import ActiveDeliveries from './customer/ActiveDeliveries';
import HireFullDay from './customer/HireFullDay';
import CustomerPayments from './customer/CustomerPayments';
import RateAndTip from './customer/RateAndTip';

interface CustomerDashboardProps {
  user: {
    name: string;
    role: string;
  };
}

const CustomerDashboard: React.FC<CustomerDashboardProps> = ({ user }) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Customer Dashboard</h1>
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
        <Tabs defaultValue="book">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="book" className="flex flex-col items-center py-3 gap-1">
              <Package className="h-5 w-5" />
              <span>Book Delivery</span>
            </TabsTrigger>
            <TabsTrigger value="active" className="flex flex-col items-center py-3 gap-1">
              <Clock className="h-5 w-5" />
              <span>Active Deliveries</span>
            </TabsTrigger>
            <TabsTrigger value="fullday" className="flex flex-col items-center py-3 gap-1">
              <Calendar className="h-5 w-5" />
              <span>Hire Full Day</span>
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex flex-col items-center py-3 gap-1">
              <CreditCard className="h-5 w-5" />
              <span>Payments</span>
            </TabsTrigger>
            <TabsTrigger value="rate" className="flex flex-col items-center py-3 gap-1">
              <Star className="h-5 w-5" />
              <span>Rate & Tip</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="book">
            <BookDelivery />
          </TabsContent>
          <TabsContent value="active">
            <ActiveDeliveries />
          </TabsContent>
          <TabsContent value="fullday">
            <HireFullDay />
          </TabsContent>
          <TabsContent value="payments">
            <CustomerPayments />
          </TabsContent>
          <TabsContent value="rate">
            <RateAndTip />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CustomerDashboard;
