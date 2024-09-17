"use client";
import React from 'react';

const ParallaxImage = ({ src, alt }) => {
  return (
    <div 
      className="relative w-full h-96 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${src})`
      }}
      aria-label={alt}
    ></div>
  );
};

export default ParallaxImage;