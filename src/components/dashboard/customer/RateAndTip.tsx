
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RateAndTip: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [tipAmount, setTipAmount] = useState('');
  const [feedback, setFeedback] = useState('');
  
  const handleRatingClick = (value: number) => {
    setRating(value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ rating, tipAmount, feedback });
    // Here you would send the data to your backend
    alert('Thank you for your feedback and tip!');
  };
  
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Rate Your Delivery Experience</CardTitle>
        <CardDescription>Your feedback helps us improve our service</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Star Rating */}
          <div>
            <Label>How was your delivery experience?</Label>
            <div className="flex items-center justify-center gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  className={`p-1 rounded-full transition-all ${
                    rating >= star ? 'text-yellow-400 scale-110' : 'text-gray-300'
                  }`}
                >
                  <Star className="h-8 w-8 fill-current" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Feedback */}
          <div>
            <Label htmlFor="feedback">Additional Feedback (Optional)</Label>
            <Textarea
              id="feedback"
              placeholder="Tell us more about your experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>
          
          {/* Tip */}
          <div>
            <Label htmlFor="tipAmount">Add a Tip (Optional)</Label>
            <div className="mt-1 space-y-2">
              <div className="flex gap-2">
                {['$2', '$5', '$10', 'Other'].map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant={tipAmount === amount ? 'default' : 'outline'}
                    onClick={() => setTipAmount(amount)}
                    className="flex-1"
                  >
                    {amount}
                  </Button>
                ))}
              </div>
              
              {tipAmount === 'Other' && (
                <div className="flex items-center">
                  <span className="text-lg mr-2">$</span>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    min="1"
                    step="0.01"
                    onChange={(e) => setTipAmount(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
          
          <Button type="submit" className="w-full" disabled={!rating}>
            Submit Rating {tipAmount && `& $${tipAmount === 'Other' ? 'Custom' : tipAmount} Tip`}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground text-center">
        Your delivery partner will receive 100% of your tip
      </CardFooter>
    </Card>
  );
};

export default RateAndTip;
