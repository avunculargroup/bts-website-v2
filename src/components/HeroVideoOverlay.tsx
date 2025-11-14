'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

interface HeroVideoOverlayProps {
  onPlayClick: () => void;
}

export function HeroVideoOverlay({ onPlayClick }: HeroVideoOverlayProps) {
  return (
    <div className='relative w-[20rem] h-[12rem] sm:w-[20rem] sm:h-[12rem] md:w-[24rem] md:h-[12rem] lg:w-[35rem] lg:h-[35rem] group'>
      {/* Poster Image */}
      <div className='relative w-full h-full rounded-lg overflow-hidden drop-shadow-lg group-hover:drop-shadow-2xl transition-shadow duration-300'>
        {/* Mobile Poster - visible on mobile, hidden on desktop */}
        <Image
          src='/bts hero poster_mobile.png'
          alt='Bitcoin Treasury Solutions - Company Video'
          fill
          className='object-cover lg:hidden'
          priority
          unoptimized
        />
        {/* Desktop Poster - hidden on mobile, visible on desktop */}
        <Image
          src='/bts hero poster.png'
          alt='Bitcoin Treasury Solutions - Company Video'
          fill
          className='object-cover hidden lg:block'
          priority
          unoptimized
        />
        
        {/* Play Button Overlay */}
        <button
          onClick={onPlayClick}
          className='absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 cursor-pointer'
          aria-label='Play company video'
        >
          <div className='relative'>
            {/* Play Icon Circle */}
            <div className='w-[72px] h-[72px] sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-32 lg:h-32 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
              <Play 
                className='w-[42px] h-[42px] sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 text-primary-900 ml-1' 
                fill='currentColor'
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

