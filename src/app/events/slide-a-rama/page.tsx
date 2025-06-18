"use client";

import React from 'react';
import Link from 'next/link';

export default function SlideARamaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text text-center">
        Slide-a-rama
      </h1>

      <div className="bg-background-secondary p-6 rounded-lg shadow-lg mb-8">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-semibold text-text mb-4">Stunt Driving Competition</h2>
            <p className="text-text-normal mb-4">
              Join us for our semi-regular stunt driving competition where drivers showcase their skills
              in a variety of challenging courses and scenarios. Slide-a-rama is open to both spectators
              and competitors.
            </p>
            <p className="text-text-normal mb-4">
              Whether you're looking to compete or just enjoy the show, Slide-a-rama offers an exciting
              experience for all automotive enthusiasts.
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-background p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-text mb-3">Event Details</h3>
            <div className="flex items-center mb-2 text-text-normal">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>April 14-15, 2025</span>
            </div>
            <div className="flex items-center text-text-normal">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Action Driving Training Center, Los Angeles</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background-secondary p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-6">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background p-6 rounded-lg shadow transition-transform duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-semibold text-text mb-2">Spectator Pass</h3>
            <p className="text-accent text-2xl font-bold mb-4">$35</p>
            <ul className="text-text-normal space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Access to all spectator areas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Event program</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Food and beverage vendors available</span>
              </li>
            </ul>
          </div>

          <div className="bg-background p-6 rounded-lg shadow transition-transform duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-semibold text-text mb-2">Competitor Pass</h3>
            <p className="text-accent text-2xl font-bold mb-4">$175</p>
            <ul className="text-text-normal space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Entry to one competition category</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Competitor t-shirt</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Access to competitor lounge</span>
              </li>
            </ul>
          </div>

          <div className="bg-background p-6 rounded-lg shadow transition-transform duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-semibold text-text mb-2">Compete Monday, Drive Tuesday Pass</h3>
            <p className="text-accent text-2xl font-bold mb-4">$375</p>
            <ul className="text-text-normal space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Entry to all competition categories</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Exclusive track time on Tuesday</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>VIP access to all areas</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Premium competitor swag bag</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-background-secondary p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-4">Registration</h2>
        <p className="text-text-normal mb-6">
          Registration for the next Slide-a-rama event is now open. Spaces are limited, so secure your spot today!
        </p>
        <div className="flex justify-center">
          <Link 
            href="/contact?prompt=slide-a-rama" 
            className="inline-block bg-accent hover:bg-accent-hover text-button-text font-semibold py-3 px-6 rounded-lg transition-colors duration-default text-center"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}
