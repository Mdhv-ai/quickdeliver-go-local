
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const HireFullDay: React.FC = () => {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Hire for Full Day</CardTitle>
        <CardDescription>Book a delivery partner for your business needs</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" required />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startTime">Start Time</Label>
              <Input id="startTime" type="time" required />
            </div>
            <div>
              <Label htmlFor="hoursNeeded">Number of Hours</Label>
              <Input id="hoursNeeded" type="number" min="1" max="12" defaultValue="8" required />
            </div>
          </div>
          
          <div>
            <Label htmlFor="workType">Type of Work</Label>
            <Select defaultValue="deliveries">
              <SelectTrigger>
                <SelectValue placeholder="Select work type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deliveries">Multiple Deliveries</SelectItem>
                <SelectItem value="moving">Moving Assistance</SelectItem>
                <SelectItem value="events">Event Support</SelectItem>
                <SelectItem value="retail">Retail Deliveries</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="vehicleType">Vehicle Type Required</Label>
            <Select defaultValue="motorbike">
              <SelectTrigger>
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bicycle">Bicycle</SelectItem>
                <SelectItem value="motorbike">Motorbike</SelectItem>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="van">Van</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Input id="notes" placeholder="Any special requirements or information" />
          </div>
          
          <div className="pt-4">
            <Button className="w-full">
              <Calendar className="mr-2 h-5 w-5" />
              Find Available Partners
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default HireFullDay;
