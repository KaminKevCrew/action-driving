"use client";

import { useState } from 'react';
import EventsList from '../../components/events/EventsList';
import CalendarView from '../../components/events/CalendarView';

export default function EventsPage() {
  const [activeView, setActiveView] = useState<'list' | 'calendar'>('list');

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
        Upcoming Events
      </h1>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              activeView === 'list'
                ? 'bg-[#5865F2] text-white'
                : 'bg-[#2f3136] text-gray-300 hover:bg-[#40444b] hover:text-white'
            }`}
            onClick={() => setActiveView('list')}
          >
            List View
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              activeView === 'calendar'
                ? 'bg-[#5865F2] text-white'
                : 'bg-[#2f3136] text-gray-300 hover:bg-[#40444b] hover:text-white'
            }`}
            onClick={() => setActiveView('calendar')}
          >
            Calendar View
          </button>
        </div>
      </div>

      <div className="bg-[#2f3136] p-6 rounded-lg shadow-lg">
        {activeView === 'list' ? <EventsList /> : <CalendarView />}
      </div>
    </div>
  );
}
