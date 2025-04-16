
import React from 'react';
import { MapPin, Package, CreditCard, Star, Shield, Clock, Zap, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-brand-purple" />,
      title: "Easy Location Sharing",
      description: "Simply enter your pickup and drop-off points for seamless delivery coordination."
    },
    {
      icon: <Package className="h-6 w-6 text-brand-purple" />,
      title: "Item Details",
      description: "Specify size, weight, and type to ensure proper handling of your deliveries."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-brand-purple" />,
      title: "Flexible Payments",
      description: "Pay through UPI, card, or cash on delivery - whatever works for you."
    },
    {
      icon: <Star className="h-6 w-6 text-brand-purple" />,
      title: "Rate & Reward",
      description: "Provide feedback and tip your delivery partners for excellent service."
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-purple" />,
      title: "Verified Partners",
      description: "All delivery partners undergo KYC verification for your safety and security."
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-purple" />,
      title: "Full-Day Booking",
      description: "Book a delivery partner for an entire day for multiple business deliveries."
    },
    {
      icon: <Zap className="h-6 w-6 text-brand-purple" />,
      title: "Real-time Updates",
      description: "Get instant notifications as your package moves from pickup to delivery."
    },
    {
      icon: <Users className="h-6 w-6 text-brand-purple" />,
      title: "Dual Platform",
      description: "Specialized interfaces for both customers and delivery partners."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Deliver</h2>
          <p className="text-gray-600">
            QuickDeliver combines powerful features to create the most reliable and efficient delivery experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="p-3 bg-brand-light-purple rounded-full w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
