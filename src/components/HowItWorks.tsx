
import { MapPin, UserCheck, Truck, Check } from "lucide-react";

const HowItWorks = () => {
  const customerSteps = [
    {
      icon: <MapPin className="h-8 w-8 text-qd-purple" />,
      title: "Enter Locations",
      description: "Set pickup and drop-off points on the map."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-qd-purple" />,
      title: "Get Matched",
      description: "We'll match you with an available delivery partner."
    },
    {
      icon: <Truck className="h-8 w-8 text-qd-purple" />,
      title: "Track Delivery",
      description: "Follow your delivery in real-time until completed."
    },
    {
      icon: <Check className="h-8 w-8 text-qd-purple" />,
      title: "Confirm & Rate",
      description: "Confirm receipt and rate your delivery experience."
    }
  ];
  
  const partnerSteps = [
    {
      icon: <UserCheck className="h-8 w-8 text-qd-blue" />,
      title: "Complete Profile",
      description: "Sign up and complete verification process."
    },
    {
      icon: <MapPin className="h-8 w-8 text-qd-blue" />,
      title: "Receive Requests",
      description: "Get nearby delivery job requests."
    },
    {
      icon: <Truck className="h-8 w-8 text-qd-blue" />,
      title: "Make Deliveries",
      description: "Accept jobs and complete deliveries efficiently."
    },
    {
      icon: <Check className="h-8 w-8 text-qd-blue" />,
      title: "Get Paid",
      description: "Earn money and build your reputation with good ratings."
    }
  ];

  return (
    <div id="how-it-works" className="py-16 md:py-24 bg-qd-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-qd-dark">
            How <span className="text-qd-purple">It Works</span>
          </h2>
          <p className="mt-4 text-lg text-qd-gray max-w-2xl mx-auto">
            QuickDeliver makes local delivery simple for everyone. Here's how to get started.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Customer */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-qd-dark mb-8 text-center">For Customers</h3>
            <div className="space-y-8">
              {customerSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-qd-purple/10 p-3 rounded-full h-14 w-14 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-qd-dark">{step.title}</h4>
                    <p className="text-qd-gray">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Delivery Partners */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-qd-dark mb-8 text-center">For Delivery Partners</h3>
            <div className="space-y-8">
              {partnerSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-qd-blue/10 p-3 rounded-full h-14 w-14 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-qd-dark">{step.title}</h4>
                    <p className="text-qd-gray">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
