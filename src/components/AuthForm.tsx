
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Truck, Briefcase, ArrowRight } from 'lucide-react';

interface AuthFormProps {
  onLoginSuccess?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onLoginSuccess }) => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get('type') || 'login';
  const defaultRole = searchParams.get('role') || 'customer';
  
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [userRole, setUserRole] = useState(defaultRole);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: activeTab === 'login' ? 'Login Successful!' : 'Account Created!',
        description: activeTab === 'login' 
          ? 'Welcome back to QuickDeliver.' 
          : 'Please check your email for verification.',
        variant: 'default',
      });
      
      // Call the onLoginSuccess callback if it exists and we're on the login tab
      if (onLoginSuccess && activeTab === 'login') {
        onLoginSuccess();
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>Login to your QuickDeliver account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-purple hover:bg-brand-purple/90" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Login'} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <button 
                  type="button"
                  className="text-brand-purple hover:underline font-medium"
                  onClick={() => setActiveTab('signup')}
                >
                  Sign up
                </button>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Create an Account</CardTitle>
              <CardDescription>Join QuickDeliver today</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>I want to join as:</Label>
                  <RadioGroup 
                    defaultValue={userRole} 
                    onValueChange={setUserRole} 
                    className="grid grid-cols-2 gap-4"
                  >
                    <Label
                      htmlFor="customer"
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground ${
                        userRole === 'customer' ? 'border-brand-purple bg-brand-light-purple' : ''
                      }`}
                    >
                      <RadioGroupItem
                        value="customer"
                        id="customer"
                        className="sr-only"
                      />
                      <Briefcase className="mb-3 h-6 w-6" />
                      <span className="text-sm font-medium">Customer</span>
                    </Label>
                    <Label
                      htmlFor="partner"
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground ${
                        userRole === 'partner' ? 'border-brand-purple bg-brand-light-purple' : ''
                      }`}
                    >
                      <RadioGroupItem
                        value="partner"
                        id="partner"
                        className="sr-only"
                      />
                      <Truck className="mb-3 h-6 w-6" />
                      <span className="text-sm font-medium">Delivery Partner</span>
                    </Label>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Password</Label>
                  <Input id="new-password" type="password" required />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-purple hover:bg-brand-purple/90" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating Account...' : 'Create Account'} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <button 
                  type="button"
                  className="text-brand-purple hover:underline font-medium"
                  onClick={() => setActiveTab('login')}
                >
                  Login
                </button>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForm;
