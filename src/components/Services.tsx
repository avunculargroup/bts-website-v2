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
        "Accepting and Storing bitcoin safely",
        "Advanced self-custody strategies"
      ]
    },
    {
      title: "Consulting",
      description: "One-on-one and small team coaching for deeper guidance. We explore your specific goals, risk tolerance and investment horizon to build customised plans.",
      icon: Users,
      features: [
        "Personalised Bitcoin integration strategies",
        "Fitting bitcoin into corporate goverance",
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
    <section id='services' className='py-16 lg:py-24 bg-background'>
      <div className='max-w-6xl mx-auto px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 font-display mb-6'>
            Our Services
          </h2>
          <p className='text-xl text-primary-700 font-body leading-relaxed max-w-3xl mx-auto'>
            We offer a range of educational services to help you navigate Bitcoin with confidence and clarity.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <div key={index} className='bg-white p-8 rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow duration-300'>
              {/* Icon */}
              <div className='mb-6'>
                <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                  <service.icon className='w-8 h-8 text-accent-600' />
                </div>
              </div>

              {/* Content */}
              <h3 className='text-2xl font-bold text-primary-900 font-display mb-4'>
                {service.title}
              </h3>
              
              <p className='text-primary-800 font-body leading-relaxed mb-6'>
                {service.description}
              </p>

              {/* Features List */}
              <ul className='space-y-2'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-start'>
                    <div className='w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <span className='text-primary-700 font-body text-sm leading-relaxed'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-16 text-center'>
          <p className='text-primary-700 font-body mb-6'>
            Ready to get started? <Link href='/contact' className='text-accent-600 hover:text-accent-700 font-semibold underline'>Contact us</Link> to learn more about our Bitcoin education services, or <Link href='/about' className='text-accent-600 hover:text-accent-700 font-semibold underline'>learn more about our team</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
