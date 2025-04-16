
import { ArrowRight, TruckIcon, Package, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-qd-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-qd-dark leading-tight">
              Fast & Reliable <span className="text-qd-purple">Local Deliveries</span>
            </h1>
            <p className="text-lg md:text-xl text-qd-gray mt-6">
              Connect with trusted delivery partners for quick deliveries or full-day services. Perfect for businesses and individuals.
            </p>
            
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Link to="/signup/customer">
                <Button className="bg-qd-orange hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  I Need Delivery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signup/partner">
                <Button variant="outline" className="border-qd-purple text-qd-purple hover:bg-qd-purple hover:text-white px-8 py-6 text-lg">
                  Become a Delivery Partner
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-qd-purple/10 p-3 rounded-full">
                  <TruckIcon className="h-6 w-6 text-qd-purple" />
                </div>
                <h3 className="mt-3 font-medium">Fast Delivery</h3>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-qd-purple/10 p-3 rounded-full">
                  <Package className="h-6 w-6 text-qd-purple" />
                </div>
                <h3 className="mt-3 font-medium">Secure Handling</h3>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-qd-purple/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-qd-purple" />
                </div>
                <h3 className="mt-3 font-medium">Real-time Tracking</h3>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-qd-purple/10 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-qd-purple" />
                </div>
                <h3 className="mt-3 font-medium">Secure Payments</h3>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="bg-qd-purple/20 rounded-xl p-8 md:p-12">
                <img 
                  src="/placeholder.svg" 
                  alt="Delivery illustration" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <p className="font-medium">Live Tracking</p>
                  </div>
                  <p className="text-qd-gray text-sm mt-1">Your delivery is on the way</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
