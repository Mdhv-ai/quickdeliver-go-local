
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-qd-gray hover:text-qd-purple font-medium transition-colors">Home</Link>
          <Link to="#features" className="text-qd-gray hover:text-qd-purple font-medium transition-colors">Features</Link>
          <Link to="#how-it-works" className="text-qd-gray hover:text-qd-purple font-medium transition-colors">How it Works</Link>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" className="border-qd-purple text-qd-purple hover:bg-qd-purple hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-qd-purple hover:bg-qd-purple-dark text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-qd-dark focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-lg absolute w-full z-50">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-qd-gray hover:text-qd-purple py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="#features" 
              className="text-qd-gray hover:text-qd-purple py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="#how-it-works" 
              className="text-qd-gray hover:text-qd-purple py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="border-qd-purple text-qd-purple hover:bg-qd-purple hover:text-white w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-qd-purple hover:bg-qd-purple-dark text-white w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
