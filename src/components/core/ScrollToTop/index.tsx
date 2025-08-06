// Tạo file src/components/ui/ScrollToTop/index.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/classname';
import Button from '../Button';
import { ArrowUpIcon } from '@/assets/icons';

interface ScrollToTopProps {
  /** Khoảng cách scroll để hiển thị button (px) */
  showAfter?: number;
  /** Smooth scroll behavior */
  smooth?: boolean;
  /** Custom className */
  className?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  showAfter = 300,
  smooth = true,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > showAfter);
    };

    // Throttle scroll event for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className={cn(
        'fixed bottom-8 right-8 z-50',
        'transition-all duration-300 ease-in-out',
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-2 pointer-events-none',
        className
      )}
    >
      <Button
        variant="primary"
        onClick={scrollToTop}
        className={cn(
          'rounded-full w-12 h-12 p-0',
          'shadow-lg hover:shadow-xl',
          'bg-foreground/90 hover:bg-foreground',
          'backdrop-blur-sm',
          'transition-all duration-200',
          'hover:scale-110 active:scale-95'
        )}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon />
      </Button>
    </div>
  );
};

export default ScrollToTop;