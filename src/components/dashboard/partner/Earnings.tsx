
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';

// Mock earnings data
const mockEarnings = {
  today: {
    total: 125.50,
    deliveries: 8,
    tips: 22.75,
    hours: 6.5,
  },
  week: {
    total: 842.25,
    deliveries: 52,
    tips: 143.50,
    hours: 38,
  },
  month: {
    total: 3258.75,
    deliveries: 187,
    tips: 489.25,
    hours: 160,
  }
};

// Mock transactions
const mockTransactions = [
  {
    id: 'TX001',
    date: '2025-04-16',
    time: '10:25 AM',
    type: 'Delivery',
    amount: 15.75,
    status: 'Completed',
  },
  {
    id: 'TX002',
    date: '2025-04-16',
    time: '11:40 AM',
    type: 'Tip',
    amount: 5.00,
    status: 'Received',
  },
  {
    id: 'TX003',
    date: '2025-04-16',
    time: '01:15 PM',
    type: 'Delivery',
    amount: 18.50,
    status: 'Completed',
  },
  {
    id: 'TX004',
    date: '2025-04-15',
    time: '03:30 PM',
    type: 'Full Day',
    amount: 120.00,
    status: 'Completed',
  },
  {
    id: 'TX005',
    date: '2025-04-15',
    time: '05:45 PM',
    type: 'Delivery',
    amount: 14.25,
    status: 'Completed',
  },
];

const Earnings: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-brand-purple" />
            Earnings Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="today">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
              <TabsTrigger value="month">This Month</TabsTrigger>
            </TabsList>
            
            {Object.entries(mockEarnings).map(([period, data]) => (
              <TabsContent key={period} value={period} className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="py-4">
                      <CardDescription>Total Earnings</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-2xl font-bold">${data.total.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground mt-1 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                        <span>+5% from last {period}</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="py-4">
                      <CardDescription>Deliveries</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-2xl font-bold">{data.deliveries}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="py-4">
                      <CardDescription>Tips</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-2xl font-bold">${data.tips.toFixed(2)}</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="py-4">
                      <CardDescription>Hours</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-2xl font-bold">{data.hours}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Avg. ${(data.total / data.hours).toFixed(2)}/hr
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-brand-purple" />
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTransactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium">{tx.id}</TableCell>
                  <TableCell>
                    {tx.date} <span className="text-xs text-muted-foreground ml-1">{tx.time}</span>
                  </TableCell>
                  <TableCell>{tx.type}</TableCell>
                  <TableCell>${tx.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                      tx.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      tx.status === 'Received' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {tx.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Earnings;
