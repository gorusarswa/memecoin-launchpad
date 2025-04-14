"use client";

import { useState, useEffect } from "react";

interface CounterProps {
  start?: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function Counter({ 
  start = 0, 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "" 
}: CounterProps) {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    
    animationFrame = window.requestAnimationFrame(step);
    
    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [start, end, duration]);
  
  return (
    <span className="font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
