import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200';
  
  const variants = {
    primary: 'bg-cyan-600 text-white hover:bg-cyan-700 active:bg-cyan-800 shadow-sm',
    secondary: 'bg-cyan-100 text-cyan-900 hover:bg-cyan-200 active:bg-cyan-300',
    outline: 'bg-transparent border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900/30',
    ghost: 'bg-transparent text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100 dark:text-cyan-400 dark:hover:bg-cyan-900/30',
  };
  
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
  };
  
  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;