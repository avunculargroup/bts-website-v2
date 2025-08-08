import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import { Download, FileText } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
}

export function ResourceCard({ title, description, fileType, fileSize, downloadUrl }: ResourceCardProps) {
  return (
    <Card className='p-6'>
      <div className='flex flex-col h-full'>
        {/* Icon and File Info */}
        <div className='mb-4 flex items-center space-x-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
            <FileText className='h-5 w-5' />
          </div>
          <div className='flex-1'>
            <h3 className='font-semibold text-foreground'>{title}</h3>
            <p className='text-sm text-muted-foreground'>
              {fileType.toUpperCase()} • {fileSize}
            </p>
          </div>
        </div>
        
        {/* Description */}
        <p className='text-sm text-muted-foreground mb-4 flex-1'>
          {description}
        </p>
        
        {/* Download Button */}
        <Button asChild className='w-full'>
          <a
            href={downloadUrl}
            download
            className='inline-flex items-center justify-center'
          >
            <Download className='mr-2 h-4 w-4' />
            Download
            <span className='sr-only'>
              {title} ({fileType}, {fileSize})
            </span>
          </a>
        </Button>
      </div>
    </Card>
  );
}
