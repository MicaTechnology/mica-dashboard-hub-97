
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  withHover?: boolean;
}

const Card = ({ children, className, withHover = true, ...props }: CardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl border border-gray-100 shadow-sm p-6 animate-fade-in",
        withHover && "card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
