"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getImagePath } from '../utils/imageLoader';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const pathname = usePathname();
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize theme state
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      setIsLightTheme(savedTheme === 'light');
    };

    // Check initial theme
    checkTheme();

    // Listen for theme changes
    const handleStorageChange = () => {
      checkTheme();
    };

    window.addEventListener('storage', handleStorageChange);

    // Custom event for theme changes within the same window
    const handleThemeChange = () => {
      checkTheme();
    };

    window.addEventListener('themeChange', handleThemeChange);

    // Check for theme changes periodically (as a fallback)
    const interval = setInterval(checkTheme, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeChange', handleThemeChange);
      clearInterval(interval);
    };
  }, []);

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-background-secondary shadow-md ${isMenuOpen ? 'h-auto' : 'h-24'} xl:h-24`}>
      <div className="container mx-auto flex flex-col xl:flex-row justify-between items-center p-4 xl:h-full">
        <div className="flex justify-between items-center w-full xl:w-auto mb-4 xl:mb-0">
          <Link 
            href="/" 
            className="block rounded px-2 py-2 bg-background-secondary hover:bg-ui-hover transition-colors duration-default flex-shrink-0 flex justify-center items-center"
            style={{ minWidth: '160px' }}
          >
            <Image 
              src={getImagePath(isLightTheme 
                ? "/logos/ADC_OfficialLogo_Black.PNG" 
                : "/logos/ADC_OfficialLogo_white.PNG")} 
              alt="Action Driving Logo" 
              width={150} 
              height={50} 
              style={{ height: '60px', width: 'auto', objectFit: 'contain', margin: '0 auto' }}
              priority
            />
          </Link>

          {/* Hamburger menu button - only visible on mobile/tablet */}
          <button 
            className="xl:hidden text-text p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation menu - hidden on mobile/tablet unless menu is open */}
        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} xl:flex flex-col xl:flex-row justify-center gap-4 xl:gap-6 w-full xl:w-auto mt-4 xl:mt-0 xl:h-full xl:ml-4`}>
          <li className="xl:h-full mb-2 xl:mb-0">
            <Link 
              href="/about" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline xl:h-full flex items-center ${
                pathname === '/about' ? 'bg-ui-hover' : ''
              }`}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li className="xl:h-full mb-2 xl:mb-0">
            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline xl:h-full flex items-center ${
                pathname === '/contact' ? 'bg-ui-hover' : ''
              }`}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="xl:h-full mb-2 xl:mb-0">
            <Link 
              href="/training" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline xl:h-full flex items-center ${
                pathname === '/training' ? 'bg-ui-hover' : ''
              }`}
              onClick={closeMenu}
            >
              Training
            </Link>
          </li>
          <li className="xl:h-full mb-2 xl:mb-0">
            <Link 
              href="/services" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline xl:h-full flex items-center ${
                pathname === '/services' ? 'bg-ui-hover' : ''
              }`}
              onClick={closeMenu}
            >
              Production Services
            </Link>
          </li>
          <li className="xl:h-full mb-2 xl:mb-0">
            <Link 
              href="/gallery" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline xl:h-full flex items-center ${
                pathname === '/gallery' ? 'bg-ui-hover' : ''
              }`}
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
          <li className="xl:h-full mb-2 xl:mb-0">
            <Link 
              href="/events" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline xl:h-full flex items-center ${
                pathname === '/events' ? 'bg-ui-hover' : ''
              }`}
              onClick={closeMenu}
            >
              Events
            </Link>
          </li>
          <li className="xl:h-full mb-2 xl:mb-0">
            <Link 
              href="/sponsors" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline xl:h-full flex items-center ${
                pathname === '/sponsors' ? 'bg-ui-hover' : ''
              }`}
              onClick={closeMenu}
            >
              Partners
            </Link>
          </li>
          <li className="xl:h-full mb-2 xl:mb-0">
            <Link 
              href="/merch" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline xl:h-full flex items-center ${
                pathname === '/merch' ? 'bg-ui-hover' : ''
              }`}
              onClick={closeMenu}
            >
              Merchandise
            </Link>
          </li>
          <li className="xl:h-full mb-2 xl:mb-0">
            <Link 
              href="/membership" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline xl:h-full flex items-center ${
                pathname === '/membership' ? 'bg-ui-hover' : ''
              }`}
              onClick={closeMenu}
            >
              Membership
            </Link>
          </li>
          <li className="xl:h-full flex items-center">
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
