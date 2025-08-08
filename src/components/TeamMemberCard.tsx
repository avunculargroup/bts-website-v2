import Image from 'next/image';
import { Card } from '@/components/Card';

interface TeamMemberCardProps {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export function TeamMemberCard({ name, role, photo, bio }: TeamMemberCardProps) {
  return (
    <Card className='p-6 text-center'>
      {/* Photo */}
      <div className='mb-4 flex justify-center'>
        <div className='relative h-32 w-32 overflow-hidden rounded-full'>
          <Image
            src={photo}
            alt={`Photo of ${name}`}
            fill
            className='object-cover'
          />
        </div>
      </div>
      
      {/* Name and Role */}
      <div className='mb-3'>
        <h3 className='text-xl font-semibold text-foreground'>{name}</h3>
        <p className='text-sm text-muted-foreground'>{role}</p>
      </div>
      
      {/* Bio */}
      <p className='text-sm text-muted-foreground leading-relaxed'>
        {bio}
      </p>
    </Card>
  );
}
