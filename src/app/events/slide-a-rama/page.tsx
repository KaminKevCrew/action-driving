"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SlideARamaPage() {
  const [selectedOption, setSelectedOption] = useState<string>('competitor');

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-background to-background-tertiary overflow-hidden">
      {/* Full page gradient background with accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.15)_0%,rgba(0,0,0,0)_70%)]"></div>

      {/* Hero Section */}
      <div className="relative py-20 mb-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-text">
              SLIDE-A-<span className="text-accent">RAMA</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-normal mb-8 max-w-2xl mx-auto">
              The Ultimate Stunt Driving Competition
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="inline-block bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-lg px-6 py-3">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-text-normal font-medium">April 14-15, 2025</span>
                  </div>
                  <div className="hidden md:block w-px h-6 bg-accent/30"></div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-text-normal font-medium">Action Driving Training Center, Monroe, Washington</span>
                  </div>
                </div>
              </div>
              <Link 
                href="/contact?prompt=slide-a-rama" 
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-button-text font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md shadow-accent/20"
              >
                REGISTER NOW
              </Link>
            </div>
            <div className="mb-4"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Event Description Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-background-secondary p-8 rounded-xl shadow-xl border border-ui-border/20">
            <h2 className="text-3xl font-bold text-text mb-6 flex items-center">
              <span className="inline-block w-2 h-8 bg-accent mr-3 rounded-full"></span>
              About The Event
            </h2>
            <p className="text-text-normal text-lg mb-6 leading-relaxed">
              Join us for our annual stunt driving competition where drivers showcase their skills
              in a variety of challenging courses and scenarios. Slide-a-rama is open to both spectators
              and competitors.
            </p>
            <p className="text-text-normal text-lg leading-relaxed">
              Whether you're looking to compete or just enjoy the show, Slide-a-rama offers an exciting
              experience for all automotive enthusiasts. Watch as drivers push their limits and demonstrate
              precision driving techniques in a controlled environment.
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Choose Your Experience</h2>
            <p className="text-text-normal text-lg max-w-2xl mx-auto">
              Select the pass that best fits your Slide-a-rama experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Spectator Pass */}
            <div 
              onClick={() => setSelectedOption('spectator')}
              className={`bg-background rounded-xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer
                ${selectedOption === 'spectator' 
                  ? 'border border-accent/30 shadow-accent/5 hover:shadow-2xl hover:shadow-accent/10 transform hover:-translate-y-1' 
                  : 'border border-ui-border/30 hover:shadow-2xl hover:border-accent/30 transform hover:-translate-y-1'
                } group`}
            >
              <div className="p-6 border-b border-ui-border/20">
                <h3 className="text-2xl font-bold text-text mb-2">Spectator Pass</h3>
                <p className="text-accent text-3xl font-bold mb-2 group-hover:scale-110 transform transition-transform duration-300 origin-center">$35</p>
                <p className="text-text-muted">Perfect for fans and enthusiasts</p>
              </div>
              <div className="p-6">
                <ul className="text-text-normal space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Access to all spectator areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Event program</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Food and beverage vendors available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Competitor Pass */}
            <div 
              onClick={() => setSelectedOption('competitor')}
              className={`bg-background rounded-xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer
                ${selectedOption === 'competitor' 
                  ? 'border border-accent/30 shadow-accent/5 hover:shadow-2xl hover:shadow-accent/10 transform hover:-translate-y-1' 
                  : 'border border-ui-border/30 hover:shadow-2xl hover:border-accent/30'
                } group`}
            >
              <div className="bg-accent/10 p-2 text-center">
                <span className="text-accent font-semibold text-sm">MOST POPULAR</span>
              </div>
              <div className="p-6 border-b border-ui-border/20">
                <h3 className="text-2xl font-bold text-text mb-2">Competitor Pass</h3>
                <p className="text-accent text-3xl font-bold mb-2 group-hover:scale-110 transform transition-transform duration-300 origin-center">$175</p>
                <p className="text-text-muted">For drivers ready to compete</p>
              </div>
              <div className="p-6">
                <ul className="text-text-normal space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Entry to one competition category</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Competitor t-shirt</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Access to competitor lounge</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* VIP Pass */}
            <div 
              onClick={() => setSelectedOption('vip')}
              className={`bg-background rounded-xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer
                ${selectedOption === 'vip' 
                  ? 'border border-accent/30 shadow-accent/5 hover:shadow-2xl hover:shadow-accent/10 transform hover:-translate-y-1' 
                  : 'border border-ui-border/30 hover:shadow-2xl hover:border-accent/30 transform hover:-translate-y-1'
                } group`}
            >
              <div className="p-6 border-b border-ui-border/20">
                <h3 className="text-2xl font-bold text-text mb-2">VIP Experience</h3>
                <p className="text-accent text-3xl font-bold mb-2 group-hover:scale-110 transform transition-transform duration-300 origin-center">$375</p>
                <p className="text-text-muted">Ultimate Slide-a-rama experience</p>
              </div>
              <div className="p-6">
                <ul className="text-text-normal space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Entry to all competition categories</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Exclusive track time on Tuesday</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>VIP access to all areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Premium competitor swag bag</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Registration CTA Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-background-secondary/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-xl relative overflow-hidden border border-ui-border/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Ready to Join Slide-a-rama?</h2>
              <p className="text-text-normal text-lg mb-8 max-w-2xl">
                Registration for the next Slide-a-rama event is now open. Spaces are limited, so secure your spot today and be part of this thrilling stunt driving competition!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact?prompt=slide-a-rama" 
                  className="inline-block bg-accent hover:bg-accent-hover text-button-text font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 text-center"
                >
                  REGISTER NOW
                </Link>
                <Link 
                  href="/events" 
                  className="inline-block bg-background text-text border border-ui-border hover:border-accent/50 font-semibold py-4 px-8 rounded-lg transition-colors duration-default text-center"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
