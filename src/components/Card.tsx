import React, { useState } from 'react';

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  ctaText = 'Learn More',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        
        <button 
          onClick={onClick}
          className={`text-cyan-600 dark:text-cyan-400 font-medium inline-flex items-center transition-all duration-300 ${
            isHovered ? 'translate-x-2' : ''
          }`}
        >
          {ctaText}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;