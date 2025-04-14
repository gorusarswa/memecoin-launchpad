"use client";

import { useState } from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ 
  title, 
  children, 
  className = "", 
  hoverEffect = true 
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className} ${
        hoverEffect ? 'transition-all duration-300' : ''
      } ${isHovered && hoverEffect ? 'shadow-lg transform -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}
