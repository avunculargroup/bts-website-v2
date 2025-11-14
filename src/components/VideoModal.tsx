'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Load video only when modal opens
  useEffect(() => {
    if (isOpen) {
      setShouldLoadVideo(true);
      // Focus management for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      // Reset video loading state when modal closes
      setShouldLoadVideo(false);
    }
  }, [isOpen]);

  // Handle Esc key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // YouTube embed URL with privacy-enhanced domain and parameters
  // Auto-play with audio enabled (no mute parameter)
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&controls=1${shouldLoadVideo ? '&autoplay=1' : ''}`;

  return (
    <div 
      className='fixed inset-0 z-50 flex items-center justify-center'
      role='dialog'
      aria-modal='true'
      aria-labelledby='video-modal-title'
    >
      {/* Backdrop */}
      <div 
        className='absolute inset-0 bg-black/70 backdrop-blur-sm'
        onClick={onClose}
        aria-hidden='true'
      />
      
      {/* Close Button - Positioned outside video frame */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className='absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70 cursor-pointer'
        aria-label='Close video'
      >
        <X className='w-6 h-6' />
      </button>
      
      {/* Modal Container */}
      <div 
        ref={modalRef}
        className='relative bg-black rounded-lg shadow-2xl w-full h-full md:h-auto md:max-w-[90vw] lg:max-w-[50vw] mx-4 md:mx-0'
        style={{
          aspectRatio: '16/9',
        }}
      >
        {/* Video Container */}
        <div className='relative w-full h-full'>
          {shouldLoadVideo ? (
            <iframe
              src={embedUrl}
              title='Company Video'
              className='w-full h-full rounded-lg'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            />
          ) : (
            <div className='w-full h-full flex items-center justify-center bg-black rounded-lg'>
              <div className='text-white'>Loading video...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

