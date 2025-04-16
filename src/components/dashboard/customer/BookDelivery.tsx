
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Package } from 'lucide-react';

const BookDelivery: React.FC = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropLocation: '',
    itemType: '',
    weight: '',
    size: '',
    deliveryType: 'immediate'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Delivery request submitted:', formData);
    // Here you would send the data to your backend
    alert('Delivery request submitted! A partner will be assigned shortly.');
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Book a Delivery</CardTitle>
        <CardDescription>Fill in the details for your delivery request</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="pickupLocation">Pickup Location</Label>
              <div className="flex mt-1">
                <div className="bg-muted p-2 flex items-center rounded-l-md border border-r-0 border-input">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input 
                  id="pickupLocation"
                  name="pickupLocation"
                  placeholder="Enter pickup address"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  required
                  className="rounded-l-none"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="dropLocation">Drop-off Location</Label>
              <div className="flex mt-1">
                <div className="bg-muted p-2 flex items-center rounded-l-md border border-r-0 border-input">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input 
                  id="dropLocation"
                  name="dropLocation"
                  placeholder="Enter drop-off address"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  required
                  className="rounded-l-none"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="itemType">Item Type</Label>
                <Select
                  value={formData.itemType}
                  onValueChange={(value) => handleSelectChange('itemType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="document">Document</SelectItem>
                    <SelectItem value="parcel">Parcel</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="fragile">Fragile Item</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input 
                  id="weight"
                  name="weight"
                  type="number"
                  step="0.1"
                  placeholder="Enter weight in kg"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="size">Size</Label>
                <Select
                  value={formData.size}
                  onValueChange={(value) => handleSelectChange('size', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (fits in a bag)</SelectItem>
                    <SelectItem value="medium">Medium (shoebox size)</SelectItem>
                    <SelectItem value="large">Large (requires two hands)</SelectItem>
                    <SelectItem value="xlarge">X-Large (requires vehicle)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="deliveryType">Delivery Type</Label>
                <Select
                  value={formData.deliveryType}
                  onValueChange={(value) => handleSelectChange('deliveryType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {formData.deliveryType === 'scheduled' && (
              <div>
                <Label htmlFor="scheduledTime">Scheduled Time</Label>
                <Input 
                  id="scheduledTime"
                  name="scheduledTime"
                  type="datetime-local"
                  min={new Date().toISOString().slice(0, 16)}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </div>
          
          <div className="pt-4">
            <Button type="submit" className="w-full">
              <Package className="mr-2 h-5 w-5" />
              Request Delivery
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground flex justify-between">
        <p>Estimated Price: $15-20</p>
        <p>Delivery ETA: 30-45 mins</p>
      </CardFooter>
    </Card>
  );
};

export default BookDelivery;
