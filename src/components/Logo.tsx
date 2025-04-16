
import React from 'react';
import { Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl'
  };

  const colorClasses = variant === 'white' 
    ? 'text-white' 
    : 'text-brand-purple';

  return (
    <Link to="/" className={`flex items-center gap-2 font-bold ${colorClasses} ${sizeClasses[size]}`}>
      <Truck className={`${size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-6 h-6' : 'w-7 h-7'} ${variant === 'white' ? 'text-white' : 'text-brand-orange'}`} />
      <span>QuickDeliver</span>
    </Link>
  );
};

export default Logo;
