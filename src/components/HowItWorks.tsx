
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How QuickDeliver Works</h2>
          <p className="text-gray-600">
            Getting your items delivered is just a few simple steps away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Customer Flow */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="inline-block mb-6 py-2 px-4 bg-brand-light-purple text-brand-purple font-medium rounded-full">
              For Customers
            </div>
            
            <ol className="relative border-l border-gray-200 ml-3">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-purple text-white rounded-full -left-4">1</span>
                <h3 className="font-semibold text-lg mb-1">Sign Up as a Customer</h3>
                <p className="text-gray-600">Create your account and verify your phone number and email.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-purple text-white rounded-full -left-4">2</span>
                <h3 className="font-semibold text-lg mb-1">Enter Delivery Details</h3>
                <p className="text-gray-600">Specify pickup and drop-off locations, and add item details.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-purple text-white rounded-full -left-4">3</span>
                <h3 className="font-semibold text-lg mb-1">Get Matched with a Partner</h3>
                <p className="text-gray-600">Our system assigns a nearby delivery partner to fulfill your request.</p>
              </li>
              
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-purple text-white rounded-full -left-4">4</span>
                <h3 className="font-semibold text-lg mb-1">Track & Pay</h3>
                <p className="text-gray-600">Follow your delivery in real-time and complete payment on delivery.</p>
              </li>
            </ol>
          </div>
          
          {/* Delivery Partner Flow */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="inline-block mb-6 py-2 px-4 bg-brand-light-purple text-brand-purple font-medium rounded-full">
              For Delivery Partners
            </div>
            
            <ol className="relative border-l border-gray-200 ml-3">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-orange text-white rounded-full -left-4">1</span>
                <h3 className="font-semibold text-lg mb-1">Register as a Partner</h3>
                <p className="text-gray-600">Sign up, complete your profile, and go through KYC verification.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-orange text-white rounded-full -left-4">2</span>
                <h3 className="font-semibold text-lg mb-1">Receive Job Requests</h3>
                <p className="text-gray-600">Get notified about nearby delivery jobs as they become available.</p>
              </li>
              
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-orange text-white rounded-full -left-4">3</span>
                <h3 className="font-semibold text-lg mb-1">Accept & Navigate</h3>
                <p className="text-gray-600">Accept jobs that work for you and follow navigation to pickup.</p>
              </li>
              
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-orange text-white rounded-full -left-4">4</span>
                <h3 className="font-semibold text-lg mb-1">Deliver & Earn</h3>
                <p className="text-gray-600">Complete deliveries, collect payment, and grow your earnings.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
