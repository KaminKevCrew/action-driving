"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background-secondary p-6 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">Action Driving</h3>
            <p className="text-text-normal">
              Professional stunt driving services for film and entertainment.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-text-normal hover:text-text transition-colors duration-default">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-normal hover:text-text transition-colors duration-default">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-normal hover:text-text transition-colors duration-default">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact Info</h3>
            <address className="not-italic text-text-normal">
              <p>Email: info@actiondriving.com</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-ui-border mt-8 pt-6 text-center text-text-muted">
          <p>&copy; {new Date().getFullYear()} Action Driving. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
