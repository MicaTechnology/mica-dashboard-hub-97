
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition = ({ children, className }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a small delay to ensure the animation plays
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={cn(
        'transition-all duration-500 ease-apple',
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageTransition;
