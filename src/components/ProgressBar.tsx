"use client";

import { useEffect, useState } from "react";

interface ProgressBarProps {
  percent: number;
  color?: string;
  height?: number;
  animated?: boolean;
  label?: string;
  showPercent?: boolean;
}

export default function ProgressBar({
  percent,
  color = "purple",
  height = 8,
  animated = true,
  label,
  showPercent = false,
}: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate the progress bar on mount
    const timer = setTimeout(() => {
      setWidth(percent);
    }, 100);

    return () => clearTimeout(timer);
  }, [percent]);

  const colorClasses = {
    purple: "bg-purple-600",
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-500",
    gray: "bg-gray-600",
  };

  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.purple;

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showPercent && <span className="text-sm font-medium text-gray-700">{percent}%</span>}
        </div>
      )}
      <div
        className="w-full bg-gray-200 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div
          className={`${colorClass} ${
            animated ? "transition-all duration-1000 ease-out" : ""
          } rounded-full`}
          style={{ width: `${width}%`, height: "100%" }}
        ></div>
      </div>
    </div>
  );
}
