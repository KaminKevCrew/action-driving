"use client";

import Image from "next/image";
import { default as Link } from "next/link";
import { getImagePath } from "../utils/imageLoader";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl mb-6">
          Action Driving
        </h1>
        <p className="text-xl text-text-normal max-w-3xl mb-8">
          Professional stunt driving services for the film and entertainment industry
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <Link href="/about" className="block no-underline">
          <div className="bg-background-secondary p-8 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-ui-hover transition-colors duration-default">
            <div className="w-full h-[32rem] flex items-center justify-center rounded-md">
              <Image 
                src={getImagePath("/adc-photos/ADC Brand.jpg")} 
                alt="Action Driving Brand" 
                width={480} 
                height={320} 
                className="h-auto rounded-lg"
                priority
              />
            </div>
            <h2 className="mt-4">Our Brand</h2>
            <p className="text-text-normal mt-2 text-center">
              Professional stunt driving expertise for your production needs
            </p>
          </div>
        </Link>

        <Link href="/gallery" className="block no-underline">
          <div className="bg-background-secondary p-8 rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-ui-hover transition-colors duration-default">
            <div className="w-full h-[32rem] flex items-center justify-center rounded-md">
              <Image 
                src={getImagePath("/adc-photos/ADC Blue.jpg")} 
                alt="Action Driving Collective work" 
                width={600} 
                height={400} 
                className="h-auto rounded-lg"
                priority
              />
            </div>
            <h2 className="mt-4">Our Work</h2>
            <p className="text-text-normal mt-2 text-center">
              Delivering high-quality stunt driving for film and television
            </p>
          </div>
        </Link>
      </section>

      <section className="bg-background-secondary p-8 rounded-lg shadow-lg text-center mb-16">
        <h2 className="mb-4">Ready to Work With Us?</h2>
        <p className="text-text-normal mb-6">
          Contact our team to discuss your project requirements
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-accent hover:bg-accent-hover text-text font-medium py-2 px-6 rounded-md transition-colors duration-default no-underline"
        >
          Get in Touch
        </Link>
      </section>

    </div>
  );
}
