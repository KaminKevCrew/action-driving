// Event types
export type EventType = 'training' | 'production' | 'workshop' | 'conference';

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  type: EventType;
  location: string;
}

// Helper function to create dates relative to current date
const createDate = (daysFromNow: number, hours = 0, minutes = 0): Date => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  date.setHours(hours, minutes, 0, 0);
  return date;
};

// Mock events data
export const events: Event[] = [
  {
    id: '1',
    title: 'Stunt Driving Workshop',
    description: 'Learn advanced stunt driving techniques from industry professionals.',
    startDate: createDate(3, 9, 0),
    endDate: createDate(3, 17, 0),
    type: 'workshop',
    location: 'Action Driving Training Center, Los Angeles'
  },
  {
    id: '2',
    title: 'Film Production: "Speed Chase"',
    description: 'On-location filming for the upcoming action movie "Speed Chase".',
    startDate: createDate(7, 8, 0),
    endDate: createDate(10, 18, 0),
    type: 'production',
    location: 'Downtown Atlanta'
  },
  {
    id: '3',
    title: 'Precision Driving Training',
    description: 'Intensive training session for new stunt drivers joining our team.',
    startDate: createDate(5, 10, 0),
    endDate: createDate(5, 16, 0),
    type: 'training',
    location: 'Action Driving Training Center, Los Angeles'
  },
  {
    id: '4',
    title: 'Stunt Industry Conference',
    description: 'Annual conference for stunt professionals to network and learn about industry trends.',
    startDate: createDate(14, 9, 0),
    endDate: createDate(16, 17, 0),
    type: 'conference',
    location: 'Hilton Hotel, Las Vegas'
  },
  {
    id: '5',
    title: 'Commercial Shoot: Luxury Car Brand',
    description: 'Filming a commercial for a major luxury car manufacturer.',
    startDate: createDate(2, 8, 0),
    endDate: createDate(2, 20, 0),
    type: 'production',
    location: 'Mojave Desert'
  },
  {
    id: '6',
    title: 'Advanced Drifting Workshop',
    description: 'Specialized workshop focusing on precision drifting techniques for film.',
    startDate: createDate(21, 10, 0),
    endDate: createDate(21, 16, 0),
    type: 'workshop',
    location: 'Action Driving Training Center, Los Angeles'
  },
  {
    id: '7',
    title: 'Safety Protocols Training',
    description: 'Mandatory safety training for all team members.',
    startDate: createDate(1, 9, 0),
    endDate: createDate(1, 13, 0),
    type: 'training',
    location: 'Action Driving Headquarters'
  },
  {
    id: '8',
    title: 'TV Series: "Highway Patrol" Filming',
    description: 'Stunt coordination and driving for episode 5 of "Highway Patrol".',
    startDate: createDate(12, 7, 0),
    endDate: createDate(15, 19, 0),
    type: 'production',
    location: 'Various locations in Los Angeles'
  }
];

// Function to get upcoming events sorted by date
export const getUpcomingEvents = (): Event[] => {
  return [...events].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
};

// Function to get events for a specific date
export const getEventsForDate = (date: Date): Event[] => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return events.filter(event => {
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);
    const checkDate = new Date(year, month, day);

    // Check if the date falls within the event's duration
    return checkDate >= new Date(eventStart.getFullYear(), eventStart.getMonth(), eventStart.getDate()) && 
           checkDate <= new Date(eventEnd.getFullYear(), eventEnd.getMonth(), eventEnd.getDate());
  });
};

// Get color for event type
export const getEventTypeColor = (type: EventType): string => {
  // Get the CSS variables from the document root
  const getCSSVariable = (varName: string, fallback: string): string => {
    if (typeof window !== 'undefined') {
      const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      return value || fallback;
    }
    return fallback;
  };

  switch (type) {
    case 'training':
      return getCSSVariable('--accent', '#5865F2'); // Use accent color for training
    case 'production':
      return getCSSVariable('--foreground', '#ffffff'); // Use foreground color for production
    case 'workshop':
      return getCSSVariable('--text-muted', '#b9bbbe'); // Use muted text color for workshop
    case 'conference':
      return getCSSVariable('--text-normal', '#dcddde'); // Use normal text color for conference
    default:
      return getCSSVariable('--accent', '#5865F2'); // Accent color as fallback
  }
};
