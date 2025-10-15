import { Container } from '@/components/Container';
import { ContactForm } from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className='min-h-screen bg-background'>
      <Container className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto'>
          {/* Page Header */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 font-display mb-6'>
              Contact Us
            </h1>
            <p className='text-xl text-primary-700 font-body leading-relaxed'>
              Ready to start your Bitcoin education journey? Get in touch with us.
            </p>
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-lg shadow-sm border border-primary-200 p-8 lg:p-12'>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className='mt-16 grid gap-8 md:grid-cols-2'>
            {/* Contact Details */}
            <div className='space-y-6'>
              <h2 className='text-2xl font-bold text-primary-900 font-display'>
                Get in Touch
              </h2>
              
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <div className='w-6 h-6 text-accent-500 mt-1'>
                    <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-semibold text-primary-900'>Email</p>
                    <a href='mailto:enquiry@btreasury.com.au' className='text-primary-700 hover:text-accent-600 transition-colors'>
                      enquiry@btreasury.com.au
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-3'>
                  <div className='w-6 h-6 text-accent-500 mt-1'>
                    <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-semibold text-primary-900'>Phone</p>
                    <a href='tel:+61422020000' className='text-primary-700 hover:text-accent-600 transition-colors'>
                      +61 422 020 000
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-3'>
                  <div className='w-6 h-6 text-accent-500 mt-1'>
                    <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-semibold text-primary-900'>Location</p>
                    <p className='text-primary-700'>
                      585 Little Collins Street, Suite 513<br />
                      Melbourne, Victoria 3000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workshop Information */}
            <div className='space-y-6'>
              <h2 className='text-2xl font-bold text-primary-900 font-display'>
                Book a Workshop
              </h2>
              
              <div className='space-y-4'>
                <p className='text-primary-700 font-body leading-relaxed'>
                  Join our small-group workshops in Melbourne designed for curious investors aged 35 and over. Sessions are kept small so you can ask questions and get personalised guidance.
                </p>
                
                <div className='bg-accent-50 p-6 rounded-lg border-l-4 border-accent-500'>
                  <h3 className='font-semibold text-primary-900 mb-2'>What You'll Learn:</h3>
                  <ul className='space-y-1 text-primary-700 text-sm'>
                    <li>• What Bitcoin is and why it matters</li>
                    <li>• How Bitcoin fits into a diversified investment strategy</li>
                    <li>• Practical steps to buy, store and safeguard Bitcoin</li>
                    <li>• How to manage risk and plan for slow, steady growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
