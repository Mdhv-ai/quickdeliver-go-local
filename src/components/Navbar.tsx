
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <nav className="container flex items-center justify-between">
        <Logo size="md" />
        
        <div className="hidden md:flex items-center gap-8">
          <div className="space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-purple font-medium">Home</Link>
            <Link to="/#how-it-works" className="text-gray-700 hover:text-brand-purple font-medium">How It Works</Link>
            <Link to="/#features" className="text-gray-700 hover:text-brand-purple font-medium">Features</Link>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/auth?type=login">Login</Link>
            </Button>
            <Button variant="default" asChild>
              <Link to="/auth?type=signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-5 shadow-lg absolute top-full left-0 right-0">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-gray-700 hover:text-brand-purple font-medium py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/#how-it-works" className="text-gray-700 hover:text-brand-purple font-medium py-2" onClick={() => setIsOpen(false)}>How It Works</Link>
            <Link to="/#features" className="text-gray-700 hover:text-brand-purple font-medium py-2" onClick={() => setIsOpen(false)}>Features</Link>
            
            <div className="flex flex-col gap-3 mt-2">
              <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                <Link to="/auth?type=login">Login</Link>
              </Button>
              <Button variant="default" asChild onClick={() => setIsOpen(false)}>
                <Link to="/auth?type=signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
