
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Logo from "@/components/Logo";

const SignUpSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-qd-light p-4">
      <div className="w-full mb-8 text-center">
        <Logo size="lg" />
      </div>
      
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-2">
          <div className="mx-auto text-green-500 mb-2">
            <CheckCircle size={60} />
          </div>
          <CardTitle className="text-2xl font-bold">Registration Successful!</CardTitle>
          <CardDescription>
            Your account has been created successfully.
            <br/>We've sent a verification link to your email.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Please check your inbox and click on the verification link to activate your account.
          </p>
          <div className="p-4 bg-blue-50 rounded-md text-left">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> If you don't see the email in your inbox, please check your spam or junk folder.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link to="/login" className="w-full">
            <Button className="bg-qd-purple hover:bg-qd-purple-dark w-full">
              Proceed to Login
            </Button>
          </Link>
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

export default SignUpSuccess;
