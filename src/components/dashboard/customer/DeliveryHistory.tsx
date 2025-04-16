
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Calendar, MapPin, User, DollarSign } from 'lucide-react';

// Mock delivery history data
const deliveryHistory = [
  {
    id: 'DEL-1001',
    date: '2025-04-15',
    partnerName: 'John Smith',
    partnerRating: 4.8,
    pickupLocation: '123 Main St',
    dropLocation: '456 Oak Ave',
    itemType: 'Document',
    amount: '12.50',
    status: 'completed',
  },
  {
    id: 'DEL-1002',
    date: '2025-04-12',
    partnerName: 'Sarah Johnson',
    partnerRating: 4.9,
    pickupLocation: '789 Pine Rd',
    dropLocation: '101 Maple St',
    itemType: 'Food',
    amount: '18.75',
    status: 'completed',
  },
  {
    id: 'DEL-1003',
    date: '2025-04-08',
    partnerName: 'Mike Wilson',
    partnerRating: 4.7,
    pickupLocation: '222 Elm St',
    dropLocation: '333 Cedar Ln',
    itemType: 'Package',
    amount: '15.25',
    status: 'completed',
  }
];

const DeliveryHistory: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Delivery History</h2>
        <div className="flex gap-2">
          <select className="text-sm border rounded py-1 px-3">
            <option>All Deliveries</option>
            <option>Last Week</option>
            <option>Last Month</option>
          </select>
        </div>
      </div>

      {deliveryHistory.map((delivery) => (
        <Card key={delivery.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-brand-purple" />
                <CardTitle className="text-base font-medium">{delivery.id}</CardTitle>
                <Badge variant={delivery.status === 'completed' ? 'secondary' : 'outline'}>
                  {delivery.status}
                </Badge>
              </div>
              <div className="text-right">
                <span className="block text-sm font-medium">${delivery.amount}</span>
                <span className="block text-xs text-muted-foreground flex items-center justify-end">
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
                  <User className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{delivery.partnerName}</span>
                  <span className="ml-2 text-yellow-500 flex items-center">
                    ★ {delivery.partnerRating}
                  </span>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-green-600" />
                  <div>
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="text-sm">{delivery.pickupLocation}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-red-600" />
                  <div>
                    <p className="text-xs text-muted-foreground">To</p>
                    <p className="text-sm">{delivery.dropLocation}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-end">
                <button className="text-sm text-brand-purple hover:text-brand-purple/80 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DeliveryHistory;
