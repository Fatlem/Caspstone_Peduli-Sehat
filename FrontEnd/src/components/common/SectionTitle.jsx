import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ 
  children, 
  subtitle, 
  align = 'center',
  withLine = true,
  linePosition = 'bottom',
  className = '',
  subtitleClassName = '',
  maxWidth = 'max-w-3xl'
}) => {
  // Alignment classes
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };
  
  // Combine classes for container
  const containerClasses = `${maxWidth} mb-12 ${alignClasses[align]} ${className}`;
  
  // Classes for the title
  const titleClasses = `text-3xl md:text-4xl font-bold text-text-primary mb-3 relative inline-block`;
  
  // Classes for the subtitle
  const defaultSubtitleClasses = "text-lg text-text-secondary";
  const combinedSubtitleClasses = `${defaultSubtitleClasses} ${subtitleClassName}`;
  
  // Line render
  const renderLine = () => {
    if (!withLine) return null;
    
    if (align === 'center') {
      return (
        <div className="absolute w-16 h-1 bg-primary left-1/2 transform -translate-x-1/2 -mb-1.5">
          {linePosition === 'bottom' ? <div className="-bottom-3"></div> : <div className="-top-3"></div>}
        </div>
      );
    }
    
    if (align === 'left') {
      return (
        <div className="absolute w-16 h-1 bg-primary left-0 -mb-1.5">
          {linePosition === 'bottom' ? <div className="-bottom-3"></div> : <div className="-top-3"></div>}
        </div>
      );
    }
    
    if (align === 'right') {
      return (
        <div className="absolute w-16 h-1 bg-primary right-0 -mb-1.5">
          {linePosition === 'bottom' ? <div className="-bottom-3"></div> : <div className="-top-3"></div>}
        </div>
      );
    }
  };
  
  return (
    <div className={containerClasses}>
      <h2 className={titleClasses}>
        {children}
        {withLine && linePosition === 'bottom' && (
          <span className="absolute w-16 h-1 bg-primary left-1/2 transform -translate-x-1/2 -bottom-3"></span>
        )}
        {withLine && linePosition === 'top' && (
          <span className="absolute w-16 h-1 bg-primary left-1/2 transform -translate-x-1/2 -top-3"></span>
        )}
      </h2>
      
      {subtitle && (
        <p className={combinedSubtitleClasses}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  withLine: PropTypes.bool,
  linePosition: PropTypes.oneOf(['top', 'bottom']),
  className: PropTypes.string,
  subtitleClassName: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default SectionTitle;