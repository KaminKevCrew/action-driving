"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-background-secondary shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <div className="mb-4 md:mb-0">
          <Link 
            href="/" 
            className={`block rounded p-2 hover:bg-ui-hover transition-colors duration-default ${
              pathname === '/' ? 'bg-ui-hover' : ''
            }`}
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
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
          <li>
            <Link 
              href="/about" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default ${
                pathname === '/about' ? 'bg-ui-hover' : ''
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default ${
                pathname === '/contact' ? 'bg-ui-hover' : ''
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link 
              href="/training" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default ${
                pathname === '/training' ? 'bg-ui-hover' : ''
              }`}
            >
              Training
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default ${
                pathname === '/services' ? 'bg-ui-hover' : ''
              }`}
            >
              Film Production Services
            </Link>
          </li>
          <li>
            <Link 
              href="/gallery" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default ${
                pathname === '/gallery' ? 'bg-ui-hover' : ''
              }`}
            >
              Media Gallery
            </Link>
          </li>
          <li>
            <Link 
              href="/events" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default ${
                pathname === '/events' ? 'bg-ui-hover' : ''
              }`}
            >
              Calendar/Events
            </Link>
          </li>
          <li>
            <Link 
              href="/sponsors" 
              className={`px-3 py-2 rounded text-text hover:bg-ui-hover transition-colors duration-default ${
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
