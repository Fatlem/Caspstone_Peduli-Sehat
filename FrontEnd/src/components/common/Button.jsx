import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  href, 
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
  ...props 
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg";
  
  // Variant classes
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary hover:bg-primary-light",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };
  
  // Size classes
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-6 py-3",
  };
  
  // Full width class
  const widthClass = fullWidth ? "w-full" : "";
  
  // Disabled class
  const disabledClass = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`;
  
  // Render icon
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}>
        {icon}
      </span>
    );
  };
  
  // Render content with icon
  const renderContent = () => (
    <>
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </>
  );
  
  // If it's a link (internal)
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }
  
  // If it's a link (external)
  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {renderContent()}
      </a>
    );
  }
  
  // Default button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  to: PropTypes.string,
  href: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Button;