import Image from 'next/image';

export function HeroImages() {
  return (
    <div className='relative w-[20rem] h-[12rem] sm:w-[20rem] sm:h-[12rem] md:w-[24rem] md:h-[12rem] lg:w-[50rem] lg:h-[42rem]'>
      <Image
        src='/bts hero image.png'
        alt='Bitcoin Treasury Solutions - Teaching and Education'
        fill
        className='object-contain drop-shadow-lg'
        priority
      />
    </div>
  );
}
