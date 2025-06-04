"use client";

import { useState, useEffect } from 'react';
import { getUpcomingEvents, Event, getEventTypeColor } from './eventData';
import { fetchGoogleCalendarEvents } from './googleCalendarUtils';

const EventsList = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Currently using mock data
    setEvents(getUpcomingEvents());

    // To implement Google Calendar integration:
    // 1. Uncomment the code below
    // 2. Install the required dependencies: npm install @googleapis/calendar
    // 3. Configure the Google Calendar API credentials in googleCalendarUtils.ts

    /*
    const loadGoogleCalendarEvents = async () => {
      try {
        const googleEvents = await fetchGoogleCalendarEvents();
        if (googleEvents.length > 0) {
          setEvents(googleEvents);
        } else {
          // Fallback to mock data if no events are returned
          setEvents(getUpcomingEvents());
        }
      } catch (error) {
        console.error('Error loading Google Calendar events:', error);
        // Fallback to mock data on error
        setEvents(getUpcomingEvents());
      }
    };

    loadGoogleCalendarEvents();
    */
  }, []);

  // Format date for display
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  // Format time for display
  const formatTime = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  };

  // Get date range string
  const getDateRangeString = (startDate: Date, endDate: Date): string => {
    const sameDay = startDate.getDate() === endDate.getDate() &&
                    startDate.getMonth() === endDate.getMonth() &&
                    startDate.getFullYear() === endDate.getFullYear();

    if (sameDay) {
      return `${formatDate(startDate)} • ${formatTime(startDate)} - ${formatTime(endDate)}`;
    } else {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-6">Upcoming Events</h2>

      {events.length === 0 ? (
        <p className="text-gray-300">No upcoming events found.</p>
      ) : (
        <div className="space-y-6">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-[#40444b] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: getEventTypeColor(event.type) }}
                  ></div>
                  <span className="text-sm text-gray-300 capitalize">{event.type}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>

                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400 mb-2">
                  <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{getDateRangeString(event.startDate, event.endDate)}</span>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;
