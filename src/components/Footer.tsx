
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-qd-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Logo size="md" showText={true} />
            <p className="text-gray-400 mt-4">
              Connecting customers with reliable delivery partners for on-demand and full-day delivery needs within your local area.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="#features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link to="#how-it-works" className="text-gray-400 hover:text-white">How It Works</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
              <li><Link to="/signup" className="text-gray-400 hover:text-white">Sign Up</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">For Users</h3>
            <ul className="space-y-2">
              <li><Link to="/signup/customer" className="text-gray-400 hover:text-white">Customer Registration</Link></li>
              <li><Link to="/signup/partner" className="text-gray-400 hover:text-white">Become a Delivery Partner</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Business Solutions</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-qd-purple" />
                <span className="text-gray-400">support@quickdeliver.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-qd-purple" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} QuickDeliver. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
