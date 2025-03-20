
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'teal' | 'blue' | 'gray';
  withAnimation?: boolean;
  label?: string;
}

const Progress = ({ 
  value, 
  max = 100, 
  className, 
  size = 'md', 
  color = 'teal',
  withAnimation = true,
  label
}: ProgressProps) => {
  const percentage = Math.round((value / max) * 100);
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };
  
  const colorClasses = {
    teal: 'bg-mica-teal',
    blue: 'bg-mica-blue',
    gray: 'bg-gray-300'
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-500">{label}</span>
          <span className="text-sm font-medium">{percentage}%</span>
        </div>
      )}
      <div className={cn("w-full bg-gray-100 rounded-full", sizeClasses[size], className)}>
        <div 
          className={cn(
            "rounded-full transition-all", 
            colorClasses[color],
            withAnimation && "animate-[growWidth_0.5s_ease-out]",
            sizeClasses[size]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
