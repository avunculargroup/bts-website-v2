import Image from 'next/image';
import Link from 'next/link';

export function AboutUs() {
  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-6xl mx-auto px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 font-display mb-6'>
            About Us
          </h2>
          <p className='text-xl text-primary-700 font-body leading-relaxed max-w-3xl mx-auto'>
            Bitcoin education with clarity and care
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className='grid gap-8 lg:grid-cols-2 lg:gap-12 items-center'>
          {/* Feature Image - Left Column on Desktop, Top on Mobile */}
          <div className='order-2 lg:order-1'>
            <div className='relative w-full aspect-[4/3] rounded-lg shadow-lg overflow-hidden'>
              <Image
                src='/images/carri_us_dollar.jpg'
                alt='Carri presenting about Bitcoin and US dollar'
                fill
                className='object-cover'
              />
            </div>
          </div>

          {/* Story Content - Right Column on Desktop, Bottom on Mobile */}
          <div className='order-1 lg:order-2 space-y-6'>
            <div className='text-primary-900 font-body leading-relaxed'>
              <p className='text-xl mb-4'>
                Bitcoin Treasury Solutions is Melbourne based. We were founded by <strong>Carri</strong> and <strong>Chris</strong>, two self‑confessed finance and technology nerds who wanted to cut through the noise surrounding Bitcoin.
              </p>
              <p className='text-xl mb-6'>
                After decades of coaching Australia&apos;s top executives and careful personal Bitcoin investing, they realised that many people were curious about Bitcoin but didn&apos;t know where to turn for trustworthy guidance.
              </p>
            </div>

            {/* Call-to-Action */}
            <Link
              href='/about'
              className='inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 font-display text-base'
            >
              Learn More About Us
              <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
