import Image from 'next/image';
import Link from 'next/link';

export function AboutUs() {
  return (
    <section className='py-16 lg:py-24' style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className='max-w-5xl mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2
            className='text-3xl sm:text-4xl font-bold mb-4'
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            About Us
          </h2>
          <p
            className='text-base leading-relaxed'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            Bitcoin education with clarity and care
          </p>
        </div>

        {/* Two Column Layout */}
        <div className='grid gap-8 lg:grid-cols-2 lg:gap-12 items-center'>
          {/* Image */}
          <div className='order-2 lg:order-1'>
            <div
              className='relative w-full aspect-[4/3] rounded-xl overflow-hidden'
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <Image
                src='/images/carri_us_dollar.jpg'
                alt='Carri presenting about Bitcoin and US dollar'
                fill
                className='object-cover'
              />
            </div>
          </div>

          {/* Content */}
          <div className='order-1 lg:order-2 space-y-5'>
            <p
              className='text-base leading-relaxed'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
            >
              Bitcoin Treasury Solutions is Melbourne based. We were founded by <strong>Carri</strong> and <strong>Chris</strong>, two self‑confessed finance and technology nerds who wanted to cut through the noise surrounding Bitcoin.
            </p>
            <p
              className='text-base leading-relaxed'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              After decades of coaching Australia&apos;s top executives and careful personal Bitcoin investing, they realised that many people were curious about Bitcoin but didn&apos;t know where to turn for trustworthy guidance.
            </p>

            <Link
              href='/about'
              className='inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-text-primary)',
                borderRadius: 'var(--radius-lg)',
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
            >
              Learn more about us
              <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
