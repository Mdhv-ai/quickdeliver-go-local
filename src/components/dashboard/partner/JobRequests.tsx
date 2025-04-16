
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Package, DollarSign, User } from 'lucide-react';

// Mock job request data
const mockJobRequests = [
  {
    id: 'JR001',
    customerName: 'Michael Brown',
    customerRating: 4.7,
    pickupLocation: '123 Main St',
    dropLocation: '456 Elm St',
    distance: '2.5',
    estimatedTime: '15-20',
    itemType: 'Document',
    paymentAmount: '12.50',
    timeRemaining: '2:30', // minutes:seconds to respond
  },
  {
    id: 'JR002',
    customerName: 'Emily Johnson',
    customerRating: 4.9,
    pickupLocation: '789 Oak Ave',
    dropLocation: '321 Pine Rd',
    distance: '4.2',
    estimatedTime: '25-30',
    itemType: 'Food',
    paymentAmount: '18.75',
    timeRemaining: '1:45', // minutes:seconds to respond
  }
];

const JobRequests: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">New Job Requests</h2>
      
      {mockJobRequests.map((job) => (
        <Card key={job.id} className="border-l-4 border-l-brand-purple">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Job #{job.id}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  <Clock className="h-3 w-3 mr-1" /> {job.timeRemaining}
                </Badge>
                <Badge variant="secondary">
                  <DollarSign className="h-3 w-3 mr-1" /> ${job.paymentAmount}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-muted-foreground" />
              <span>{job.customerName}</span>
              <span className="text-yellow-500">★ {job.customerRating}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-green-600" />
                  <div>
                    <p className="font-medium">Pickup</p>
                    <p className="text-sm text-muted-foreground">{job.pickupLocation}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-red-600" />
                  <div>
                    <p className="font-medium">Dropoff</p>
                    <p className="text-sm text-muted-foreground">{job.dropLocation}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-purple" />
                  <span>Est. Time: {job.estimatedTime} mins</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-purple" />
                  <span>Distance: {job.distance} km</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-brand-purple" />
                  <span>Item: {job.itemType}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Decline</Button>
            <Button>Accept Job</Button>
          </CardFooter>
        </Card>
      ))}
      
      {mockJobRequests.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No new job requests at the moment</p>
          <p className="text-sm">We'll notify you when new requests come in</p>
        </div>
      )}
    </div>
  );
};

export default JobRequests;
