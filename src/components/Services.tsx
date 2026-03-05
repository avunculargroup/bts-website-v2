import { GraduationCap, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

export function Services() {
  const services = [
    {
      title: "Training",
      description: "Tailored programs for SME businesses, public companies, and community groups. Whether your organisation wants to understand Bitcoin's potential or prepare for digital asset adoption.",
      icon: GraduationCap,
      features: [
        "Understanding fundamentals of Bitcoin, the network and the asset",
        "Accepting and storing bitcoin safely",
        "Advanced self-custody strategies"
      ]
    },
    {
      title: "Consulting",
      description: "One-on-one and small team coaching for deeper guidance. We explore your specific goals, risk tolerance and investment horizon to build customised plans.",
      icon: Users,
      features: [
        "Personalised Bitcoin integration strategies",
        "Fitting bitcoin into corporate governance",
        "Ongoing support as the landscape evolves",
        "Tailored risk assessment and management"
      ]
    },
    {
      title: "Public Events",
      description: "Small-group workshops and educational sessions designed for curious investors aged 35 and over. Learn Bitcoin fundamentals in a supportive, jargon-free environment.",
      icon: Calendar,
      features: [
        "What Bitcoin is and why it matters",
        "How Bitcoin fits into diversified investment strategies",
        "Practical steps to buy, store and safeguard Bitcoin",
      ]
    }
  ];

  return (
    <section id='services' className='py-16 lg:py-24' style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className='max-w-5xl mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-14'>
          <h2
            className='text-3xl sm:text-4xl font-bold mb-4'
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
          >
            Our Services
          </h2>
          <p
            className='text-base leading-relaxed max-w-2xl mx-auto'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            We offer a range of educational services to help you navigate Bitcoin with confidence and clarity.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={index}
              className='p-6 rounded-xl transition-all duration-200 group'
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = 'var(--shadow-md)';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = 'var(--shadow-sm)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon */}
              <div className='mb-5'>
                <div
                  className='w-12 h-12 rounded-lg flex items-center justify-center'
                  style={{ backgroundColor: 'var(--color-gold-light)' }}
                >
                  <service.icon className='w-6 h-6' strokeWidth={1.5} style={{ color: 'var(--color-gold-dark)' }} />
                </div>
              </div>

              {/* Content */}
              <h3
                className='text-lg font-semibold mb-3'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
              >
                {service.title}
              </h3>

              <p
                className='text-sm leading-relaxed mb-5'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
              >
                {service.description}
              </p>

              {/* Features List */}
              <ul className='space-y-2'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-start gap-2.5'>
                    <div
                      className='w-1.5 h-1.5 rounded-full mt-1.5 shrink-0'
                      style={{ backgroundColor: 'var(--color-gold)' }}
                    />
                    <span
                      className='text-sm leading-relaxed'
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-12 text-center'>
          <p
            className='text-sm'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            Ready to get started?{' '}
            <Link
              href='/contact'
              className='font-medium underline underline-offset-2'
              style={{ color: 'var(--color-gold-dark)' }}
            >
              Contact us
            </Link>{' '}
            to learn more about our Bitcoin education services, or{' '}
            <Link
              href='/about'
              className='font-medium underline underline-offset-2'
              style={{ color: 'var(--color-gold-dark)' }}
            >
              learn more about our team
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
