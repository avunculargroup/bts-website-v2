export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  registerUrl: string;
  featured?: boolean;
  imageUrl?: string;
  tags?: string[];
  maxAttendees?: number;
  currentAttendees?: number;
}

// Mock data - in a real app, this would come from a CMS or API
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Web Development Workshop',
    date: '2024-02-15T09:00:00Z',
    location: 'Virtual',
    description: 'Learn modern web development techniques with hands-on exercises.',
    registerUrl: '/events/web-development-workshop',
    featured: true,
    tags: ['workshop', 'web-development', 'virtual'],
    maxAttendees: 50,
    currentAttendees: 25,
  },
  {
    id: '2',
    title: 'Design Systems Conference',
    date: '2024-03-20T10:00:00Z',
    location: 'Sydney Convention Centre',
    description: 'Join us for a day of insights into building scalable design systems.',
    registerUrl: '/events/design-systems-conference',
    featured: true,
    tags: ['conference', 'design', 'sydney'],
    maxAttendees: 200,
    currentAttendees: 150,
  },
  {
    id: '3',
    title: 'AI in Business Seminar',
    date: '2024-01-10T14:00:00Z',
    location: 'Melbourne Business Hub',
    description: 'Explore how AI is transforming business operations and strategies.',
    registerUrl: '/events/ai-business-seminar',
    tags: ['seminar', 'ai', 'business'],
    maxAttendees: 100,
    currentAttendees: 100,
  },
];

export function getAllEvents(): Event[] {
  return mockEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getUpcomingEvents(): Event[] {
  const now = new Date();
  return getAllEvents().filter((event) => new Date(event.date) > now);
}

export function getPastEvents(): Event[] {
  const now = new Date();
  return getAllEvents().filter((event) => new Date(event.date) <= now);
}

export function getFeaturedEvents(): Event[] {
  return getAllEvents().filter((event) => event.featured);
}

export function getEventById(id: string): Event | null {
  return mockEvents.find((event) => event.id === id) || null;
}

export function getEventsByTag(tag: string): Event[] {
  return getAllEvents().filter((event) => event.tags?.includes(tag));
}

export function getEventsByLocation(location: string): Event[] {
  return getAllEvents().filter((event) => 
    event.location.toLowerCase().includes(location.toLowerCase())
  );
}
