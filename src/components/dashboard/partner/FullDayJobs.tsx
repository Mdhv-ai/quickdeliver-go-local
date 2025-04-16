
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, DollarSign, User } from 'lucide-react';

// Mock full day job request data
const mockFullDayJobs = [
  {
    id: 'FD001',
    customerName: 'ABC Corporation',
    customerRating: 4.8,
    location: '123 Business Park',
    date: '2025-04-18',
    hours: 8,
    workType: 'Retail Deliveries',
    hourlyRate: '22.50',
    totalAmount: '180.00',
    timeRemaining: '4:30', // hours:minutes to respond
  },
  {
    id: 'FD002',
    customerName: 'XYZ Enterprises',
    customerRating: 4.6,
    location: '456 Corporate Plaza',
    date: '2025-04-20',
    hours: 6,
    workType: 'Event Support',
    hourlyRate: '25.00',
    totalAmount: '150.00',
    timeRemaining: '3:15', // hours:minutes to respond
  }
];

const FullDayJobs: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Full-Day Job Requests</h2>
      
      {mockFullDayJobs.map((job) => (
        <Card key={job.id} className="border-l-4 border-l-brand-orange">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Full-Day Job #{job.id}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  <Clock className="h-3 w-3 mr-1" /> {job.timeRemaining} hrs to respond
                </Badge>
                <Badge variant="secondary">
                  <DollarSign className="h-3 w-3 mr-1" /> ${job.totalAmount}
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
                  <MapPin className="h-4 w-4 mt-0.5 text-brand-purple" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 mt-0.5 text-brand-purple" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-sm text-muted-foreground">{job.date}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-purple" />
                  <span>Duration: {job.hours} hours</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-brand-purple" />
                  <span>Hourly Rate: ${job.hourlyRate}/hr</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-brand-purple rounded-full"></div>
                  <span>Work Type: {job.workType}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Decline</Button>
            <Button>Accept Full-Day Job</Button>
          </CardFooter>
        </Card>
      ))}
      
      {mockFullDayJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No full-day job requests at the moment</p>
          <p className="text-sm">Check back later for new opportunities</p>
        </div>
      )}
    </div>
  );
};

export default FullDayJobs;
