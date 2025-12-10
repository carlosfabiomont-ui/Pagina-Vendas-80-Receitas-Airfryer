import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 rounded-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black uppercase tracking-wider";
  
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] border border-amber-400",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const pulseClass = pulse ? "animate-pulse" : "";

  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${pulseClass} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};