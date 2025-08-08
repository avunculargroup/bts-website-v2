import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  registerUrl: string;
  past?: boolean;
}

export function EventCard({ title, date, location, description, registerUrl, past = false }: EventCardProps) {
  const eventDate = new Date(date);
  const isPast = past || eventDate < new Date();

  return (
    <Card className={`p-6 transition-all duration-200 hover:shadow-lg ${
      isPast ? 'opacity-75 bg-muted/50' : ''
    }`}>
      <div className='flex flex-col h-full'>
        {/* Date */}
        <div className='mb-4 flex items-center space-x-2 text-sm text-muted-foreground'>
          <Calendar className='h-4 w-4' />
          <time dateTime={eventDate.toISOString()}>
            {eventDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        
        {/* Title */}
        <h3 className={`mb-2 text-xl font-semibold ${
          isPast ? 'text-muted-foreground' : 'text-foreground'
        }`}>
          {title}
        </h3>
        
        {/* Location */}
        <div className='mb-3 flex items-center space-x-2 text-sm text-muted-foreground'>
          <MapPin className='h-4 w-4' />
          <span>{location}</span>
        </div>
        
        {/* Description */}
        <p className='text-sm text-muted-foreground mb-4 flex-1'>
          {description}
        </p>
        
        {/* Registration Button */}
        {!isPast ? (
          <Button asChild className='w-full'>
            <Link href={registerUrl}>
              Register Now
            </Link>
          </Button>
        ) : (
          <div className='text-center text-sm text-muted-foreground'>
            Event has passed
          </div>
        )}
      </div>
    </Card>
  );
}
