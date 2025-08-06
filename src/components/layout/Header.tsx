'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollThreshold = 60;
        
        // Only update if scroll direction is consistent
        const scrollDirection = currentScrollY > lastScrollYRef.current ? 'down' : 'up';
        const buffer = 30; // 30px buffer zone
        
        if (scrollDirection === 'down' && currentScrollY > scrollThreshold + buffer && !isScrolled) {
          setIsScrolled(true);
        } else if (scrollDirection === 'up' && currentScrollY < scrollThreshold - buffer && isScrolled) {
          setIsScrolled(false);
        }
        
        lastScrollYRef.current = currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isScrolled]);

  return (
    <header 
      className={`
        sticky top-0 z-50 flex items-center justify-between px-8 lg:px-[120px] transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'py-6 bg-white/95 backdrop-blur-sm' 
          : 'py-8 bg-transparent'
        }
      `}
    >
      {/* Rest of your JSX remains the same */}
      <div 
        className={`
          font-['Comfortaa:Bold',_sans-serif] text-[#25282b] transition-all duration-300
          ${isScrolled ? 'text-[16px]' : 'text-[18px]'}
        `}
      >
        <Link href="/" className="hover:opacity-80 transition-opacity font-bold">
          Madelyn Torff
        </Link>
      </div>
      <nav 
        className={`
          flex items-center transition-all duration-300
          ${isScrolled ? 'gap-6 lg:gap-8' : 'gap-8 lg:gap-12'}
        `}
      >
        <Link 
          href="/about" 
          className={`
            font-semibold text-[#25282b] transition-all duration-300 relative group
            ${isScrolled ? 'text-[16px]' : 'text-[18px]'}
          `}
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
        <Link 
          href="/about" 
          className={`
            font-semibold text-[#25282b] transition-all duration-300 relative group
            ${isScrolled ? 'text-[16px]' : 'text-[18px]'}
          `}
        >
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
        <Link 
          href="/about" 
          className={`
            font-semibold text-[#25282b] transition-all duration-300 relative group
            ${isScrolled ? 'text-[16px]' : 'text-[18px]'}
          `}
        >
          Contacts
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
        </Link>
      </nav>
    </header>
  );
}