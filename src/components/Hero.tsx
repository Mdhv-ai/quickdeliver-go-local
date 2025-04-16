
import React from 'react';
import { ArrowRight, Package, Map, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-brand-light-purple rounded-full blur-3xl opacity-30"></div>
        <div className="absolute right-1/4 bottom-10 w-1/2 h-1/3 bg-brand-orange rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-purple-600">
            Smart, Seamless & Swift Deliveries
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Connect with reliable delivery partners for on-demand and full-day delivery needs in your local area.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-brand-purple hover:bg-brand-purple/90">
              <Link to="/auth?type=signup&role=customer">
                Request Delivery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/auth?type=signup&role=partner">Become a Delivery Partner</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="p-3 bg-brand-light-purple rounded-full w-fit mb-4">
              <Package className="text-brand-purple h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Quick Pickups</h3>
            <p className="text-gray-600">Get your items picked up and delivered with speed and care.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="p-3 bg-brand-light-purple rounded-full w-fit mb-4">
              <Map className="text-brand-purple h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Live Tracking</h3>
            <p className="text-gray-600">Track your delivery in real-time from pickup to drop-off.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="p-3 bg-brand-light-purple rounded-full w-fit mb-4">
              <Clock className="text-brand-purple h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Full-Day Service</h3>
            <p className="text-gray-600">Hire delivery partners for an entire day for all your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
