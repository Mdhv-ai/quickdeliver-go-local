
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, MapPin, Clock, Package } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Mock data for active deliveries
const mockDeliveries = [
  {
    id: '1',
    status: 'In Progress',
    pickupLocation: '123 Main St',
    dropLocation: '456 Elm St',
    partnerName: 'Alex Johnson',
    partnerRating: 4.8,
    estimatedArrival: '12:45 PM',
    itemType: 'Document',
  },
  {
    id: '2',
    status: 'Pending',
    pickupLocation: '789 Oak Ave',
    dropLocation: '321 Pine Rd',
    partnerName: 'Pending Assignment',
    partnerRating: null,
    estimatedArrival: 'TBD',
    itemType: 'Parcel',
  },
  {
    id: '3',
    status: 'Delivered',
    pickupLocation: '555 Maple Dr',
    dropLocation: '777 Cedar Ln',
    partnerName: 'Sarah Wilson',
    partnerRating: 4.9,
    estimatedArrival: 'Delivered at 11:30 AM',
    itemType: 'Electronics',
  },
];

// Badge color based on delivery status
const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
    case 'In Progress':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
    case 'Delivered':
      return 'bg-green-100 text-green-800 hover:bg-green-100';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const ActiveDeliveries: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Active Deliveries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Pickup</TableHead>
                <TableHead>Dropoff</TableHead>
                <TableHead>Partner</TableHead>
                <TableHead>ETA</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDeliveries.map((delivery) => (
                <TableRow key={delivery.id} className="cursor-pointer hover:bg-gray-50">
                  <TableCell className="font-medium">{delivery.id}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadgeColor(delivery.status)}>
                      {delivery.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      {delivery.itemType}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {delivery.pickupLocation}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {delivery.dropLocation}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      {delivery.partnerName}
                      {delivery.partnerRating && (
                        <span className="text-sm text-yellow-500">★ {delivery.partnerRating}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {delivery.estimatedArrival}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Delivery Tracking Map - This would integrate with a mapping service */}
      <Card>
        <CardHeader>
          <CardTitle>Live Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 rounded-md h-96 flex items-center justify-center">
            <p className="text-muted-foreground">Map tracking view would appear here</p>
            {/* This would be replaced with an actual map component from Google Maps or Mapbox */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActiveDeliveries;
