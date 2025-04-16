
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { User, Star, Truck, FileText, CreditCard } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock profile data
const mockProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  phone: '+1 (555) 123-4567',
  bio: 'Experienced delivery partner with 3 years in the logistics industry. Reliable, punctual, and customer-focused.',
  averageRating: 4.8,
  totalDeliveries: 842,
  vehicle: {
    type: 'Motorbike',
    model: 'Honda CB150R',
    year: '2022',
    licensePlate: 'XYZ 1234',
  }
};

// Mock reviews
const mockReviews = [
  {
    id: 'R001',
    customerName: 'John Doe',
    rating: 5,
    date: '2025-04-15',
    comment: 'Excellent service! Very professional and delivered on time.',
  },
  {
    id: 'R002',
    customerName: 'Jane Smith',
    rating: 4,
    date: '2025-04-10',
    comment: 'Good delivery, but arrived a bit late. Otherwise great service!',
  },
  {
    id: 'R003',
    customerName: 'Mike Wilson',
    rating: 5,
    date: '2025-04-08',
    comment: 'Very careful with my package and super friendly. Would use again!',
  },
];

const Profile: React.FC = () => {
  const [formData, setFormData] = useState(mockProfile);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleVehicleChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      vehicle: { ...prev.vehicle, [name]: value }
    }));
  };
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="profile">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="verification">
            <FileText className="mr-2 h-4 w-4" />
            KYC Verification
          </TabsTrigger>
          <TabsTrigger value="bank">
            <CreditCard className="mr-2 h-4 w-4" />
            Bank Details
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your profile details</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      value={formData.email} 
                      onChange={handleInputChange} 
                      type="email"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={formData.phone} 
                    onChange={handleInputChange} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    name="bio"
                    value={formData.bio} 
                    onChange={handleInputChange} 
                    rows={3}
                  />
                </div>
                
                <div className="pt-2">
                  <Button type="submit">Save Profile</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Information</CardTitle>
              <CardDescription>Update your vehicle details</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vehicleType">Vehicle Type</Label>
                    <Select
                      value={formData.vehicle.type}
                      onValueChange={(value) => handleVehicleChange('type', value)}
                    >
                      <SelectTrigger id="vehicleType">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Bicycle">Bicycle</SelectItem>
                        <SelectItem value="Motorbike">Motorbike</SelectItem>
                        <SelectItem value="Car">Car</SelectItem>
                        <SelectItem value="Van">Van</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="model">Model</Label>
                    <Input 
                      id="model" 
                      value={formData.vehicle.model} 
                      onChange={(e) => handleVehicleChange('model', e.target.value)} 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="year">Year</Label>
                    <Input 
                      id="year" 
                      value={formData.vehicle.year} 
                      onChange={(e) => handleVehicleChange('year', e.target.value)} 
                    />
                  </div>
                  <div>
                    <Label htmlFor="licensePlate">License Plate</Label>
                    <Input 
                      id="licensePlate" 
                      value={formData.vehicle.licensePlate} 
                      onChange={(e) => handleVehicleChange('licensePlate', e.target.value)} 
                    />
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button type="submit">Update Vehicle Info</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                Reviews & Ratings
              </CardTitle>
              <CardDescription>
                Average Rating: <span className="font-medium text-yellow-500">{mockProfile.averageRating}/5</span> • 
                Total Deliveries: <span className="font-medium">{mockProfile.totalDeliveries}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockReviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between">
                      <span className="font-medium">{review.customerName}</span>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="verification" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>KYC Verification</CardTitle>
              <CardDescription>Upload your identification documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>ID Proof (Government ID)</Label>
                <div className="border-2 border-dashed border-muted rounded-md p-6 text-center">
                  <div className="space-y-2">
                    <Truck className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p>Drag & drop your ID, or click to browse</p>
                    <p className="text-xs text-muted-foreground">
                      Supported formats: JPG, PNG, PDF (max 5MB)
                    </p>
                  </div>
                  <input type="file" className="hidden" />
                  <Button variant="outline" className="mt-4">Upload ID</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Driver's License (If applicable)</Label>
                <div className="border-2 border-dashed border-muted rounded-md p-6 text-center">
                  <div className="space-y-2">
                    <Truck className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p>Drag & drop your license, or click to browse</p>
                    <p className="text-xs text-muted-foreground">
                      Supported formats: JPG, PNG, PDF (max 5MB)
                    </p>
                  </div>
                  <input type="file" className="hidden" />
                  <Button variant="outline" className="mt-4">Upload License</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Vehicle Registration (If applicable)</Label>
                <div className="border-2 border-dashed border-muted rounded-md p-6 text-center">
                  <div className="space-y-2">
                    <Truck className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p>Drag & drop vehicle registration, or click to browse</p>
                    <p className="text-xs text-muted-foreground">
                      Supported formats: JPG, PNG, PDF (max 5MB)
                    </p>
                  </div>
                  <input type="file" className="hidden" />
                  <Button variant="outline" className="mt-4">Upload Registration</Button>
                </div>
              </div>
              
              <Button className="w-full">Submit for Verification</Button>
              
              <div className="bg-yellow-50 text-yellow-800 p-4 rounded-md text-sm">
                <p className="font-medium">Verification Status: Pending</p>
                <p className="mt-1">Your documents are under review. This usually takes 1-2 business days.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="bank" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Bank Account Details</CardTitle>
              <CardDescription>Add your bank account for payments</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="accountName">Account Holder Name</Label>
                  <Input id="accountName" placeholder="Enter your full name as per bank account" />
                </div>
                
                <div>
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input id="accountNumber" placeholder="Enter your bank account number" />
                </div>
                
                <div>
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Select>
                    <SelectTrigger id="bankName">
                      <SelectValue placeholder="Select your bank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank1">Bank of America</SelectItem>
                      <SelectItem value="bank2">Chase</SelectItem>
                      <SelectItem value="bank3">Wells Fargo</SelectItem>
                      <SelectItem value="bank4">Citibank</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ifscCode">IFSC/Routing Number</Label>
                    <Input id="ifscCode" placeholder="Enter IFSC or routing number" />
                  </div>
                  <div>
                    <Label htmlFor="accountType">Account Type</Label>
                    <Select>
                      <SelectTrigger id="accountType">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="savings">Savings</SelectItem>
                        <SelectItem value="checking">Checking</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button type="submit">Save Bank Details</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
