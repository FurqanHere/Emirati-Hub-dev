import React from 'react';

export const UAEFlag = ({ className, style }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1200 600" 
    className={className} 
    style={style}
  >
    <rect width="1200" height="600" fill="#00732f"/>
    <rect y="200" width="1200" height="200" fill="#fff"/>
    <rect y="400" width="1200" height="200" fill="#000"/>
    <rect width="300" height="600" fill="#FF0000"/>
  </svg>
);

export const UKFlag = ({ className, style }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 60 30" 
    className={className} 
    style={style}
  >
    <clipPath id="uk_flag_clip">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
    </clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk_flag_clip)" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);
