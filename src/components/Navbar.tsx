"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-background-secondary shadow-md h-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 h-full">
        <div className="mb-4 md:mb-0">
          <Link 
            href="/" 
            className="block rounded p-2 bg-background-secondary hover:bg-ui-hover transition-colors duration-default"
          >
            <Image 
              src="/logos/ADC_OfficialLogo_white.PNG" 
              alt="Action Driving Logo" 
              width={150} 
              height={50} 
              className="h-auto"
              priority
            />
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 h-full">
          <li className="h-full">
            <Link 
              href="/about" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline h-full flex items-center ${
                pathname === '/about' ? 'bg-ui-hover' : ''
              }`}
            >
              About Us
            </Link>
          </li>
          <li className="h-full">
            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline h-full flex items-center ${
                pathname === '/contact' ? 'bg-ui-hover' : ''
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li className="h-full">
            <Link 
              href="/training" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline h-full flex items-center ${
                pathname === '/training' ? 'bg-ui-hover' : ''
              }`}
            >
              Training
            </Link>
          </li>
          <li className="h-full">
            <Link 
              href="/services" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline h-full flex items-center ${
                pathname === '/services' ? 'bg-ui-hover' : ''
              }`}
            >
              Film Production Services
            </Link>
          </li>
          <li className="h-full">
            <Link 
              href="/gallery" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline h-full flex items-center ${
                pathname === '/gallery' ? 'bg-ui-hover' : ''
              }`}
            >
              Media Gallery
            </Link>
          </li>
          <li className="h-full">
            <Link 
              href="/events" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline h-full flex items-center ${
                pathname === '/events' ? 'bg-ui-hover' : ''
              }`}
            >
              Calendar/Events
            </Link>
          </li>
          <li className="h-full">
            <Link 
              href="/sponsors" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default no-underline hover:no-underline h-full flex items-center ${
                pathname === '/sponsors' ? 'bg-ui-hover' : ''
              }`}
            >
              Sponsors & Partnerships
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
