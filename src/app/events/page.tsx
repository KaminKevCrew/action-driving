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
