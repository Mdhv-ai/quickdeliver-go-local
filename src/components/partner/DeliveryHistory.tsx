
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Calendar, MapPin, User, DollarSign, ChevronRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock delivery history data
const deliveryHistory = [
  {
    id: 'DEL-1001',
    date: '2025-04-15',
    customerName: 'Laura Chen',
    pickupLocation: '123 Main St',
    dropLocation: '456 Oak Ave',
    itemType: 'Document',
    earnings: '10.25',
    tip: '2.25',
    totalEarned: '12.50',
    status: 'completed',
  },
  {
    id: 'DEL-1002',
    date: '2025-04-12',
    customerName: 'Robert Taylor',
    pickupLocation: '789 Pine Rd',
    dropLocation: '101 Maple St',
    itemType: 'Food',
    earnings: '15.00',
    tip: '3.75',
    totalEarned: '18.75',
    status: 'completed',
  },
  {
    id: 'DEL-1003',
    date: '2025-04-08',
    customerName: 'Jennifer Lee',
    pickupLocation: '222 Elm St',
    dropLocation: '333 Cedar Ln',
    itemType: 'Package',
    earnings: '13.25',
    tip: '2.00',
    totalEarned: '15.25',
    status: 'completed',
  }
];

const DeliveryHistory: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState('all');

  return (
    <div className="space-y-6 text-gray-200">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Delivery History</h2>
        <Tabs value={timeFilter} onValueChange={setTimeFilter} className="w-auto">
          <TabsList className="bg-gray-700">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-3 flex justify-between items-center">
        <div>
          <h3 className="font-medium">Total Earnings ({timeFilter === 'week' ? 'This Week' : timeFilter === 'month' ? 'This Month' : 'All Time'})</h3>
          <div className="text-2xl font-bold text-blue-400">${timeFilter === 'week' ? '245.50' : timeFilter === 'month' ? '975.25' : '2,450.75'}</div>
        </div>
        <div className="text-right">
          <div className="text-sm">Completed Deliveries</div>
          <div className="text-xl font-semibold">{timeFilter === 'week' ? '18' : timeFilter === 'month' ? '74' : '186'}</div>
        </div>
      </div>

      {deliveryHistory.map((delivery) => (
        <Card key={delivery.id} className="hover:shadow-md transition-shadow bg-gray-700 border-gray-600 text-gray-200">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-blue-400" />
                <CardTitle className="text-base font-medium">{delivery.id}</CardTitle>
                <Badge variant="secondary" className="bg-blue-900 text-blue-200">
                  {delivery.status}
                </Badge>
              </div>
              <div className="text-right">
                <span className="block text-sm font-medium text-green-400">${delivery.totalEarned}</span>
                <span className="block text-xs text-gray-400 flex items-center justify-end">
                  <Calendar className="h-3 w-3 mr-1" />
                  {delivery.date}
                </span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{delivery.customerName}</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-green-400" />
                  <div>
                    <p className="text-xs text-gray-400">From</p>
                    <p className="text-sm">{delivery.pickupLocation}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-red-400" />
                  <div>
                    <p className="text-xs text-gray-400">To</p>
                    <p className="text-sm">{delivery.dropLocation}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Base earnings:</span>
                  <span>${delivery.earnings}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tips:</span>
                  <span className="text-green-400">${delivery.tip}</span>
                </div>
                <div className="border-t border-gray-600 pt-1 mt-1 flex justify-between text-sm font-medium">
                  <span>Total:</span>
                  <span>${delivery.totalEarned}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                View Details
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DeliveryHistory;
