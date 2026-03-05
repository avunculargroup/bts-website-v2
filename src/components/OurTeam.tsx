import Image from 'next/image';
import Link from 'next/link';

export function OurTeam() {
  const teamMembers = [
    {
      name: "Carri",
      title: "Coach & Finance Expert",
      image: "/images/about/carri.jpg",
      linkedin: "https://www.linkedin.com/in/carolyn-carri-crawford-38305a5/",
      description: "With over 20 years in financial services and 20 years coaching executives, Carri has run companies with tight control and knows how personal finances work. She specialises in translating complex topics into clear, actionable steps and has helped countless people feel confident about their finances."
    },
    {
      name: "Chris",
      title: "Technologist & Bitcoin Specialist",
      image: "/images/about/chris.jpg",
      linkedin: "https://www.linkedin.com/in/chris-pollard-au/",
      description: "Chris brings deep technology expertise and years of Bitcoin study. He follows societal trends and the future of money, applying what he learns to support individuals and corporations. Chris's passion is showing how Bitcoin can play a role in storing value and a medium of exchange."
    }
  ];

  return (
    <section className='space-y-8'>
      <div className='text-center'>
        <h2
          className='text-2xl sm:text-3xl font-bold'
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
        >
          Directors
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='p-8 rounded-xl'
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className='text-center mb-5'>
              <div className='mb-4'>
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.title}`}
                  width={200}
                  height={200}
                  className={`rounded-full mx-auto object-cover w-44 h-44 ${
                    member.name === 'Carri' ? 'object-top' : 'object-center'
                  }`}
                />
              </div>

              <h3
                className='text-xl font-bold mb-1'
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
              >
                {member.name}
              </h3>
              <p
                className='text-sm font-medium'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-gold-dark)' }}
              >
                {member.title}
              </p>
            </div>

            <p
              className='text-sm leading-relaxed mb-5'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              {member.description}
            </p>

            <div className='text-center'>
              <Link
                href={member.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-100'
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-text-primary)',
                }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
                aria-label={`Connect with ${member.name} on LinkedIn`}
              >
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center mt-10'>
        <div
          className='p-8 rounded-xl'
          style={{
            backgroundColor: 'var(--color-gold-light)',
            border: '1px solid var(--color-border)',
          }}
        >
          <p
            className='text-sm leading-relaxed'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            Together, Carri and Chris blend business, life, technology, finance and coaching experience to create educational experiences and programs that transform the way people think about money.
          </p>
        </div>
      </div>
    </section>
  );
}
