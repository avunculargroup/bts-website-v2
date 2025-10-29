import Link from 'next/link';
import Image from 'next/image';

export function Resources() {
  const publications = [
    {
      title: "What's Driving Bitcoin Adoption in 2025",
      description: "River Financial's comprehensive report on Bitcoin adoption trends, institutional investment, and the factors shaping Bitcoin's emergence as a global reserve asset.",
      image: "/images/river_financial.png",
      type: "Report",
      link: "https://river.com/learn/files/river-bitcoin-adoption-report-2025.pdf"
    },
    {
      title: "The Case for Bitcoin",
      description: "Fidelity's research-based framework for understanding Bitcoin's unique features, risk/return characteristics, and potential role as an alternative investment within multi-asset portfolios.",
      image: "/images/fidelity-investments.jpg",
      type: "Research",
      link: "https://institutional.fidelity.com/advisors/insights/topics/investing-ideas/the-case-for-bitcoin"
    },
    {
      title: "Conversation with AMP's Shane Oliver",
      description: "An insightful discussion with AMP's Chief Economist Shane Oliver on Bitcoin's role in investment portfolios and institutional adoption trends.",
      image: "/images/oliver-shane-650-2020.jpg",
      type: "Video",
      link: "https://www.youtube.com/watch?v=yaU9yN-wJr8"
    }
  ];

  return (
    <section className='py-16 lg:py-24 bg-primary-50'>
      <div className='max-w-6xl mx-auto px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 font-display mb-6'>
            Resources
          </h2>
          <p className='text-xl text-primary-700 font-body leading-relaxed max-w-3xl mx-auto'>
            Access our curated list of resources to deepen your understanding of Bitcoin and investment strategies.
          </p>
        </div>

        {/* Publications Grid */}
        <div className='grid gap-8 md:grid-cols-3 mb-12'>
          {publications.map((publication, index) => (
            <div key={index} className='bg-white rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow duration-300 overflow-hidden'>
              {/* Image */}
              <div className='w-full h-48 relative mb-0'>
                <Image
                  src={publication.image}
                  alt={publication.title}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <span className='inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3'>
                  {publication.type}
                </span>
                <h3 className='text-xl font-bold text-primary-900 font-display mb-3'>
                  {publication.link ? (
                    <a 
                      href={publication.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-accent-600 transition-colors duration-300'
                    >
                      {publication.title}
                    </a>
                  ) : (
                    publication.title
                  )}
                </h3>
                <p className='text-primary-700 font-body leading-relaxed mb-4'>
                  {publication.description}
                </p>
                {publication.link && (
                  <div className='mt-4'>
                    <a 
                      href={publication.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold text-sm transition-colors duration-300'
                    >
                      {publication.type === 'Video' ? 'Watch Video' : 'Read Report'}
                      <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Video Section */}
        <div className='mb-12'>
          <div className='bg-white p-8 rounded-lg shadow-sm border border-primary-200'>
            <div className='text-center mb-6'>
              <h3 className='text-2xl font-bold text-primary-900 font-display mb-4'>
                Featured Discussion
              </h3>
              <p className='text-primary-700 font-body leading-relaxed max-w-3xl mx-auto'>
                Watch Carri from BTreasury discuss Bitcoin with Sevan Tuna from Alexander Spencer, an accounting firm in Camberwell.
              </p>
            </div>
            
            {/* YouTube Video Embed */}
            <div className='aspect-video max-w-4xl mx-auto'>
              <iframe
                src='https://www.youtube.com/embed/Bphcovq_VUk'
                title='Carri from BTreasury discusses Bitcoin with Sevan Tuna from Alexander Spencer'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                className='w-full h-full rounded-lg'
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          <div className='bg-white p-8 rounded-lg shadow-sm border border-primary-200 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-primary-900 font-display mb-4'>
              Explore More Resources
            </h3>
            <p className='text-primary-700 font-body leading-relaxed mb-6'>
              Access our complete library of guides, articles, and educational materials to support your Bitcoin journey.
            </p>
            <Link 
              href='/resources'
              className='inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 font-display'
            >
              View All Resources
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
