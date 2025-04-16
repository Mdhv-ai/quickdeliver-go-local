
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Navigation: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Navigation & Live Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 rounded-md h-96 flex items-center justify-center">
            <p className="text-muted-foreground">Map navigation view would appear here</p>
            {/* This would be replaced with an actual map component from Google Maps or Mapbox */}
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="border-l-4 border-l-brand-purple p-4 bg-muted rounded-md">
              <h3 className="font-medium">Current Delivery</h3>
              <div className="mt-2 text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Pickup Location:</span>
                  <span className="font-medium">123 Main St</span>
                </div>
                <div className="flex justify-between">
                  <span>Dropoff Location:</span>
                  <span className="font-medium">456 Elm St</span>
                </div>
                <div className="flex justify-between">
                  <span>Distance Remaining:</span>
                  <span className="font-medium">1.2 km</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Estimate:</span>
                  <span className="font-medium">8 minutes</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <button className="bg-green-100 text-green-800 py-3 rounded-md font-medium hover:bg-green-200 transition-colors">
                I've Picked Up the Item
              </button>
              <button className="bg-blue-100 text-blue-800 py-3 rounded-md font-medium hover:bg-blue-200 transition-colors">
                I've Delivered the Item
              </button>
              <button className="bg-red-100 text-red-800 py-3 rounded-md font-medium hover:bg-red-200 transition-colors">
                Issue with Delivery
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Navigation;
