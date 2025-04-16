
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Truck, Bike, Car, Fuel, Wrench } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VehicleManagement: React.FC = () => {
  const [vehicleType, setVehicleType] = useState('motorbike');
  const { toast } = useToast();
  
  const handleUpdateVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Vehicle details updated",
      description: "Your vehicle information has been updated successfully.",
    });
  };
  
  const handleServiceRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Service requested",
      description: "Your maintenance request has been submitted. Our team will contact you shortly.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-brand-purple" />
            Vehicle Management
          </CardTitle>
          <CardDescription>
            Update your vehicle details and schedule maintenance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="details" className="space-y-4">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="details">Vehicle Details</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div 
                  className={`flex flex-col items-center p-4 border rounded-md cursor-pointer ${
                    vehicleType === 'bicycle' ? 'border-brand-purple bg-brand-light-purple' : 'border-gray-200'
                  }`}
                  onClick={() => setVehicleType('bicycle')}
                >
                  <Bike className="h-8 w-8 mb-2" />
                  <span>Bicycle</span>
                </div>
                <div 
                  className={`flex flex-col items-center p-4 border rounded-md cursor-pointer ${
                    vehicleType === 'motorbike' ? 'border-brand-purple bg-brand-light-purple' : 'border-gray-200'
                  }`}
                  onClick={() => setVehicleType('motorbike')}
                >
                  <Bike className="h-8 w-8 mb-2" />
                  <span>Motorbike</span>
                </div>
                <div 
                  className={`flex flex-col items-center p-4 border rounded-md cursor-pointer ${
                    vehicleType === 'car' ? 'border-brand-purple bg-brand-light-purple' : 'border-gray-200'
                  }`}
                  onClick={() => setVehicleType('car')}
                >
                  <Car className="h-8 w-8 mb-2" />
                  <span>Car</span>
                </div>
              </div>

              <form onSubmit={handleUpdateVehicle} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="model">Vehicle Model</Label>
                    <Input id="model" placeholder="e.g. Honda Activa" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationNo">Registration Number</Label>
                    <Input id="registrationNo" placeholder="e.g. KA01AB1234" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="year">Manufacturing Year</Label>
                    <Input id="year" type="number" placeholder="e.g. 2020" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="color">Color</Label>
                    <Input id="color" placeholder="e.g. Black" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Fuel Type</Label>
                  <Select defaultValue="petrol">
                    <SelectTrigger>
                      <SelectValue placeholder="Select fuel type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="petrol">Petrol</SelectItem>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="na">Not Applicable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button type="submit" className="w-full">Update Vehicle Details</Button>
              </form>
            </TabsContent>
            
            <TabsContent value="maintenance" className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <div className="flex items-start gap-3">
                  <Fuel className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Regular Maintenance</h4>
                    <p className="text-sm text-yellow-700">
                      Regular vehicle maintenance can help prevent breakdowns during deliveries and ensure your safety on the road.
                    </p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleServiceRequest} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select defaultValue="regular">
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="regular">Regular Servicing</SelectItem>
                      <SelectItem value="repair">Repairs</SelectItem>
                      <SelectItem value="tire">Tire Replacement</SelectItem>
                      <SelectItem value="battery">Battery Replacement</SelectItem>
                      <SelectItem value="other">Other Issues</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Describe the Issue</Label>
                  <Input id="description" placeholder="Please describe any specific issues with your vehicle" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input id="preferredDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select defaultValue="morning">
                      <SelectTrigger id="preferredTime">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM-4PM)</SelectItem>
                        <SelectItem value="evening">Evening (4PM-8PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">
                  <Wrench className="mr-2 h-4 w-4" /> 
                  Request Service
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default VehicleManagement;
