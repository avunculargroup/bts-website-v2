import Link from 'next/link';
import { Card } from '@/components/Card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

interface PostPreviewProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  tags?: string[];
}

export function PostPreview({ title, excerpt, slug, date, tags = [] }: PostPreviewProps) {
  const postDate = new Date(date);

  return (
    <Card className='p-6 transition-all duration-200 hover:shadow-lg'>
      <article className='space-y-4'>
        {/* Title */}
        <h2 className='text-xl font-semibold text-foreground hover:text-primary transition-colors'>
          <Link href={`/blog/${slug}`} className='block'>
            {title}
          </Link>
        </h2>
        
        {/* Date */}
        <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
          <Calendar className='h-4 w-4' />
          <time dateTime={postDate.toISOString()}>
            {postDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        
        {/* Excerpt */}
        <p className='text-muted-foreground leading-relaxed'>
          {excerpt}
        </p>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <Badge key={tag} variant='secondary' className='text-xs'>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </article>
    </Card>
  );
}
