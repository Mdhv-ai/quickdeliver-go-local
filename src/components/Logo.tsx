
import { Truck } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizeMap = {
    sm: { icon: 20, text: "text-lg" },
    md: { icon: 28, text: "text-2xl" },
    lg: { icon: 40, text: "text-4xl" }
  };
  
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="bg-qd-purple rounded-md p-2 text-white">
        <Truck size={sizeMap[size].icon} />
      </div>
      {showText && (
        <span className={`font-bold ${sizeMap[size].text} text-qd-dark`}>
          Quick<span className="text-qd-purple">Deliver</span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
