import React from 'react';
import PropTypes from 'prop-types';

const AnimatedText = ({ 
  text, 
  className = '', 
  tag: Tag = 'span', 
  aosType = 'fade-up', 
  baseIndex = 0,
  animationDelay = 0.03 // Default delay per char in seconds
}) => {
  if (!text) return null;
  
  const chars = text.split('');

  return (
    <Tag className={`animated-text-wrapper ${className}`} data-aos={aosType}>
      {chars.map((char, index) => (
        <span
          key={index}
          className="animated-char"
          style={{ 
            '--char-index': baseIndex + index,
            '--char-delay': `${animationDelay}s`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  tag: PropTypes.elementType,
  aosType: PropTypes.string,
  baseIndex: PropTypes.number,
  animationDelay: PropTypes.number
};

export default AnimatedText;
