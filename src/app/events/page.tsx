"use client";

import { useState } from 'react';
import EventsList from '../../components/events/EventsList';
import CalendarView from '../../components/events/CalendarView';

export default function EventsPage() {
  const [activeView, setActiveView] = useState<'list' | 'calendar'>('list');

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text text-center">
        Upcoming Events
      </h1>

      {/* Slide-a-rama Featured Event Banner */}
      <div className="bg-background-secondary p-6 rounded-lg shadow-lg mb-8 border-2 border-accent">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-text">Slide-a-rama</h2>
            <p className="text-text-normal">Our semi-regular stunt driving competition - April 14-15, 2025</p>
          </div>
          <Link 
            href="/events/slide-a-rama" 
            className="inline-block bg-accent hover:bg-accent-hover text-button-text font-semibold py-2 px-6 rounded-lg transition-colors duration-default"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-colors duration-default ${
              activeView === 'list'
                ? 'bg-accent text-text'
                : 'bg-background-secondary text-text-normal hover:bg-ui-hover hover:text-text'
            }`}
            onClick={() => setActiveView('list')}
          >
            List View
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-colors duration-default ${
              activeView === 'calendar'
                ? 'bg-accent text-text'
                : 'bg-background-secondary text-text-normal hover:bg-ui-hover hover:text-text'
            }`}
            onClick={() => setActiveView('calendar')}
          >
            Calendar View
          </button>
        </div>
      </div>

      <div className="bg-background-secondary p-6 rounded-lg shadow-lg">
        {activeView === 'list' ? <EventsList /> : <CalendarView />}
      </div>
    </div>
  );
}
