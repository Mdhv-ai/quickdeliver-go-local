
import { MapPin, Calendar, Star, UserCheck, CreditCard, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MapPin className="w-12 h-12 text-qd-purple" />,
      title: "Real-time Location Tracking",
      description: "Track your delivery in real-time from pickup to destination with live map updates."
    },
    {
      icon: <Calendar className="w-12 h-12 text-qd-purple" />,
      title: "Full-Day Booking",
      description: "Hire delivery partners for an entire day for all your business delivery needs."
    },
    {
      icon: <Star className="w-12 h-12 text-qd-purple" />,
      title: "Ratings & Reviews",
      description: "Quality assurance through our community-driven rating and review system."
    },
    {
      icon: <UserCheck className="w-12 h-12 text-qd-purple" />,
      title: "Verified Delivery Partners",
      description: "All delivery partners are verified through KYC for your safety and trust."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-qd-purple" />,
      title: "Multiple Payment Options",
      description: "Pay with your preferred method - UPI, debit card, or cash on delivery."
    },
    {
      icon: <Zap className="w-12 h-12 text-qd-purple" />,
      title: "Quick Job Matching",
      description: "AI-powered matching connects you with the nearest available delivery partner."
    }
  ];

  return (
    <div id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-qd-dark">
            Powerful <span className="text-qd-purple">Features</span>
          </h2>
          <p className="mt-4 text-lg text-qd-gray max-w-2xl mx-auto">
            Everything you need for seamless local deliveries in one platform - designed for both customers and delivery partners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-qd-dark">{feature.title}</h3>
              <p className="text-qd-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
