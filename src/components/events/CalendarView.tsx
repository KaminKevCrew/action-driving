"use client";

import { useState, useEffect, useRef } from 'react';
import { getEventsForDate, Event, getEventTypeColor, EventType } from './eventData';
import { fetchGoogleCalendarEvents } from './googleCalendarUtils';

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Ref for the popup modal
  const popupRef = useRef<HTMLDivElement>(null);

  // State to store all events from Google Calendar
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  // Fetch all events on component mount
  useEffect(() => {
    // Currently using mock data
    // In a real implementation with Google Calendar, uncomment the code below

    /*
    const loadGoogleCalendarEvents = async () => {
      try {
        const googleEvents = await fetchGoogleCalendarEvents();
        if (googleEvents.length > 0) {
          setAllEvents(googleEvents);
        }
      } catch (error) {
        console.error('Error loading Google Calendar events:', error);
      }
    };

    loadGoogleCalendarEvents();
    */
  }, []);

  // Update events when selected date changes
  useEffect(() => {
    if (selectedDate) {
      // Currently using mock data
      setEvents(getEventsForDate(selectedDate));
      setIsPopupOpen(true);

      // When using Google Calendar, you would filter the events from allEvents state
      // Example:
      /*
      const filteredEvents = allEvents.filter(event => {
        const eventDate = new Date(event.startDate);
        return (
          eventDate.getDate() === selectedDate.getDate() &&
          eventDate.getMonth() === selectedDate.getMonth() &&
          eventDate.getFullYear() === selectedDate.getFullYear()
        );
      });
      setEvents(filteredEvents);
      */
    } else {
      setEvents([]);
      setIsPopupOpen(false);
    }
  }, [selectedDate, allEvents]);

  // Handle clicks outside the popup to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setSelectedDate(null);
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  // Get days in month
  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get day of week for first day of month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: 0, date: null, events: [] });
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      // Currently using mock data
      const dayEvents = getEventsForDate(date);

      // When using Google Calendar, you would filter events from allEvents state
      // Example:
      /*
      const dayEvents = allEvents.filter(event => {
        const eventStart = new Date(event.startDate);
        const eventEnd = new Date(event.endDate);
        const dayStart = new Date(year, month, day, 0, 0, 0);
        const dayEnd = new Date(year, month, day, 23, 59, 59);

        // Check if the event overlaps with this day
        return (
          (eventStart <= dayEnd && eventEnd >= dayStart)
        );
      });
      */

      days.push({ day, date, events: dayEvents });
    }

    return days;
  };

  // Format month and year
  const formatMonthYear = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  // Go to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  // Go to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  // Go to current month
  const goToCurrentMonth = () => {
    setCurrentDate(new Date());
    setSelectedDate(null);
  };

  // Close the popup
  const closePopup = () => {
    setSelectedDate(null);
  };

  // Format date for display
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
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

  // Get unique event types for the legend
  const getUniqueEventTypes = (): EventType[] => {
    const types = new Set<EventType>();
    const calendarDays = generateCalendarDays();

    calendarDays.forEach(day => {
      if (day.events) {
        day.events.forEach(event => {
          types.add(event.type);
        });
      }
    });

    return Array.from(types);
  };

  const calendarDays = generateCalendarDays();
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const uniqueEventTypes = getUniqueEventTypes();

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <h2 className="text-2xl font-semibold text-text mb-4 md:mb-0">Calendar View</h2>

        <div className="flex items-center space-x-2">
          <button 
            onClick={goToPreviousMonth}
            className="p-2 rounded-full hover:bg-ui-hover text-text-normal transition-colors duration-default"
            aria-label="Previous month"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button 
            onClick={goToCurrentMonth}
            className="px-3 py-1 rounded bg-background-secondary text-text-normal hover:bg-accent hover:text-text text-sm transition-colors duration-default"
          >
            Today
          </button>

          <span className="text-text font-medium">{formatMonthYear(currentDate)}</span>

          <button 
            onClick={goToNextMonth}
            className="p-2 rounded-full hover:bg-ui-hover text-text-normal transition-colors duration-default"
            aria-label="Next month"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Legend */}
      {uniqueEventTypes.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-4">
          {uniqueEventTypes.map(type => (
            <div key={type} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: getEventTypeColor(type) }}
              ></div>
              <span className="text-sm text-text-normal capitalize">{type}</span>
            </div>
          ))}
        </div>
      )}

      {/* Calendar Grid */}
      <div className="bg-background rounded-lg overflow-hidden shadow-lg">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 bg-background-secondary text-center">
          {weekdays.map(day => (
            <div key={day} className="py-2 text-sm font-medium text-text-normal">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 border-t border-ui-border">
          {calendarDays.map((day, index) => (
            <div 
              key={index}
              className={`aspect-[4/3] p-1 border-b border-r border-ui-border ${
                day.day === 0 ? 'bg-background-secondary text-text-muted' : 'hover:bg-ui-hover cursor-pointer transition-colors duration-default'
              } ${
                selectedDate && day.date && 
                selectedDate.getDate() === day.date.getDate() && 
                selectedDate.getMonth() === day.date.getMonth() && 
                selectedDate.getFullYear() === day.date.getFullYear() 
                  ? 'bg-background-secondary' 
                  : ''
              }`}
              onClick={() => day.date && setSelectedDate(day.date)}
            >
              {day.day > 0 && (
                <>
                  <div className="text-right mb-1">
                    <span className="text-sm text-text-normal">{day.day}</span>
                  </div>

                  {/* Event indicators */}
                  <div className="flex flex-wrap gap-1">
                    {day.events.slice(0, 3).map((event, eventIndex) => (
                      <div 
                        key={eventIndex}
                        className="w-full h-1 rounded-sm"
                        style={{ backgroundColor: getEventTypeColor(event.type) }}
                        title={event.title}
                      ></div>
                    ))}
                    {day.events.length > 3 && (
                      <div className="text-xs text-text-muted mt-1">
                        +{day.events.length - 3} more
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Event Popup Modal */}
      {isPopupOpen && selectedDate && events.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            ref={popupRef}
            className="bg-background-secondary rounded-lg p-6 shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
          >
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-text-muted hover:text-text transition-colors duration-default"
              aria-label="Close popup"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <h3 className="text-xl font-semibold text-text mb-4">
              Events for {formatDate(selectedDate)}
            </h3>

            <div className="space-y-4">
              {events.map((event) => (
                <div 
                  key={event.id} 
                  className="bg-background-secondary rounded-lg p-4 shadow-md"
                >
                  <div className="flex items-center mb-2">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: getEventTypeColor(event.type) }}
                    ></div>
                    <span className="text-sm text-text-normal capitalize">{event.type}</span>
                  </div>

                  <h4 className="text-lg font-medium text-text mb-2">{event.title}</h4>
                  <p className="text-text-normal mb-3">{event.description}</p>

                  <div className="flex flex-col sm:flex-row text-sm text-text-muted">
                    <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{formatTime(event.startDate)} - {formatTime(event.endDate)}</span>
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
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
