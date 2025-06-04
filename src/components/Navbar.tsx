import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#2f3136] text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="hover:opacity-80 transition-opacity">
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
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/training" className="hover:text-gray-300 transition-colors">
              Training
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-300 transition-colors">
              Film Production Services
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gray-300 transition-colors">
              Media Gallery
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-gray-300 transition-colors">
              Calendar/Events
            </Link>
          </li>
          <li>
            <Link href="/sponsors" className="hover:text-gray-300 transition-colors">
              Sponsors & Partnerships
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
