"use client";

import Image from "next/image";
import { default as Link } from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Action Driving
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-8">
          Professional stunt driving services for the film and entertainment industry
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <Link href="/about" className="block">
          <div className="bg-[#2f3136] p-8 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-[#3a3d42] transition-colors">
            <div className="w-full h-64 flex items-center justify-center rounded-md">
              <Image 
                src="/logos/ADC_OfficialLogo_white.PNG" 
                alt="Action Driving Logo" 
                width={300} 
                height={100} 
                className="h-auto"
                priority
              />
            </div>
            <h2 className="text-2xl font-semibold text-white">Our Brand</h2>
            <p className="text-gray-300 mt-2 text-center">
              Professional stunt driving expertise for your production needs
            </p>
          </div>
        </Link>

        <Link href="/gallery" className="block">
          <div className="bg-[#2f3136] p-8 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-[#3a3d42] transition-colors">
            <div className="w-full h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-md">
              <p className="text-gray-400">Photo Placeholder</p>
            </div>
            <h2 className="text-2xl font-semibold text-white">Our Work</h2>
            <p className="text-gray-300 mt-2 text-center">
              Delivering high-quality stunt driving for film and television
            </p>
          </div>
        </Link>
      </section>

      <section className="bg-[#2f3136] p-8 rounded-lg shadow-lg text-center mb-16">
        <h2 className="text-2xl font-semibold text-white mb-4">Ready to Work With Us?</h2>
        <p className="text-gray-300 mb-6">
          Contact our team to discuss your project requirements
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
