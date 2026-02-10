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
  
  const words = text.split(' ');
  let globalCharIndex = baseIndex;

  return (
    <Tag className={`animated-text-wrapper ${className}`} data-aos={aosType}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const currentWordStartIndex = globalCharIndex;
        // Increment global index for this word's length + 1 for the space (unless it's the last word)
        globalCharIndex += word.length + 1;

        return (
          <React.Fragment key={wordIndex}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {wordChars.map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="animated-char"
                  style={{
                    '--char-index': currentWordStartIndex + charIndex,
                    '--char-delay': `${animationDelay}s`,
                    display: 'inline-block'
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
            {wordIndex < words.length - 1 && (
              <span
                className="animated-char"
                style={{
                  '--char-index': currentWordStartIndex + word.length,
                  '--char-delay': `${animationDelay}s`,
                  display: 'inline'
                }}
              >
                &nbsp;
              </span>
            )}
          </React.Fragment>
        );
      })}
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
