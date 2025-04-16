
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, User, Phone, Mail, Lock } from "lucide-react";
import Logo from "@/components/Logo";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const { userType = "customer" } = useParams<{ userType: "customer" | "partner" }>();
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
  
  const isDeliveryPartner = userType === "partner";
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) return;
    
    setIsLoading(true);
    
    // Simulate signup API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would handle registration and redirection here
      console.log(`Signing up as ${userType} with:`, formData);
      // Redirect to a success page or dashboard
      navigate("/signup-success");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-qd-light p-4">
      <div className="w-full mb-8 text-center">
        <Logo size="lg" />
      </div>
      
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Sign up as {isDeliveryPartner ? "Delivery Partner" : "Customer"}
          </CardTitle>
          <CardDescription className="text-center">
            {step === 1 
              ? "Enter your personal details to create an account" 
              : "Create a secure password for your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <form onSubmit={handleNextStep}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>Full Name</span>
                    </div>
                  </Label>
                  <Input 
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>Email Address</span>
                    </div>
                  </Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>Phone Number</span>
                    </div>
                  </Label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full ${isDeliveryPartner ? "bg-qd-blue hover:bg-blue-600" : "bg-qd-purple hover:bg-qd-purple-dark"}`}
                >
                  Continue
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">
                    <div className="flex items-center gap-2">
                      <Lock size={16} />
                      <span>Password</span>
                    </div>
                  </Label>
                  <Input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a secure password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">
                    <div className="flex items-center gap-2">
                      <Lock size={16} />
                      <span>Confirm Password</span>
                    </div>
                  </Label>
                  <Input 
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    required
                  />
                  <label 
                    htmlFor="terms" 
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link to="#" className="text-qd-purple hover:underline">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link to="#" className="text-qd-purple hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    type="submit" 
                    className={`w-full ${isDeliveryPartner ? "bg-qd-blue hover:bg-blue-600" : "bg-qd-purple hover:bg-qd-purple-dark"}`}
                    disabled={isLoading || !agreedToTerms}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      `Sign Up as ${isDeliveryPartner ? "Delivery Partner" : "Customer"}`
                    )}
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full mt-2"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                </div>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-qd-purple hover:underline">
              Login
            </Link>
          </div>
          <div className="text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:underline">
              ← Back to home
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
