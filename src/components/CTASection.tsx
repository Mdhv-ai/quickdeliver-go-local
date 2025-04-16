
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-qd-purple py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Join QuickDeliver today and experience fast, reliable local deliveries or start earning as a delivery partner.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link to="/signup/customer">
            <Button className="bg-white hover:bg-gray-100 text-qd-purple px-8 py-6 text-lg">
              Sign Up as Customer
            </Button>
          </Link>
          <Link to="/signup/partner">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Become a Delivery Partner
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
