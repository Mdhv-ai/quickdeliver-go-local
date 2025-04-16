
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CreditCard, Smartphone, Banknote } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CustomerPayments: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Payment Options</CardTitle>
          <CardDescription>Choose your preferred payment method</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="card">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="card">
                <CreditCard className="mr-2 h-4 w-4" />
                Card
              </TabsTrigger>
              <TabsTrigger value="upi">
                <Smartphone className="mr-2 h-4 w-4" />
                UPI
              </TabsTrigger>
              <TabsTrigger value="cod">
                <Banknote className="mr-2 h-4 w-4" />
                Cash
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="card" className="space-y-4 mt-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input id="expiryDate" placeholder="MM/YY" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" type="password" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="nameOnCard">Name on Card</Label>
                <Input id="nameOnCard" placeholder="John Doe" />
              </div>
              
              <Button className="w-full">Pay Now</Button>
            </TabsContent>
            
            <TabsContent value="upi" className="space-y-4 mt-4">
              <div>
                <Label htmlFor="upiId">UPI ID</Label>
                <Input id="upiId" placeholder="yourname@bank" />
              </div>
              <Button className="w-full">Pay with UPI</Button>
            </TabsContent>
            
            <TabsContent value="cod" className="space-y-4 mt-4">
              <div className="p-4 bg-muted rounded-md">
                <p>Pay with cash upon delivery completion.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Please ensure you have the exact amount ready.
                </p>
              </div>
              <Button className="w-full">Confirm Cash on Delivery</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerPayments;
