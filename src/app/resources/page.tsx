'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';
import { BookOpen, FileText, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

export default function Resources() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featuredResources = [
    {
      title: "What's Driving Bitcoin Adoption in 2025",
      description: "River Financial's comprehensive report on Bitcoin adoption trends, institutional investment, and the factors shaping Bitcoin's emergence as a global reserve asset.",
      icon: BookOpen,
      type: "Report",
      link: "https://river.com/learn/files/river-bitcoin-adoption-report-2025.pdf"
    },
    {
      title: "The Case for Bitcoin",
      description: "Fidelity's research-based framework for understanding Bitcoin's unique features, risk/return characteristics, and potential role as an alternative investment within multi-asset portfolios.",
      icon: TrendingUp,
      type: "Research",
      link: "https://institutional.fidelity.com/advisors/insights/topics/investing-ideas/the-case-for-bitcoin"
    },
    {
      title: "Conversation with AMP's Shane Oliver",
      description: "An insightful discussion with AMP's Chief Economist Shane Oliver on Bitcoin's role in investment portfolios and institutional adoption trends.",
      icon: FileText,
      type: "Video",
      link: "https://www.youtube.com/watch?v=yaU9yN-wJr8"
    }
  ];

  const faqData = [
    {
      question: "What is hard money vs soft money?",
      answer: "Hard does not refer to its physical property. Hard refers to how difficult it is to create that form of money. That's why typically you'd think of gold as hard money and government money as less hard."
    },
    {
      question: "If Bitcoin was more adopted, wouldn't deflation cause problems? Don't we need some inflation?",
      answer: "There is the fear that having a currency that does not inflate would not allow the economy to grow. This is unfounded. Example: United States after Civil War, prices fell for more than 30 years without stopping growth. Prices fell because growth was robust. Sound money vs inflation targeting: Under gold system, prices are free to fluctuate and better signal resource allocation. Artificially targeting a fixed inflation rate can suppress these signals and often create bubbles. This can also cause a distortion in the market and misallocation of resources, leading to more bubbles. Constantly inflating the currency can inject liquidity into the economy and keep unproductive 'zombie' companies alive. We saw this during the COVID frenzy."
    },
    {
      question: "Does Bitcoin have no intrinsic value?",
      answer: "What is the intrinsic value of government money? Similar to gold, scarcity and network adoption give Bitcoin value. Common to try to fit bitcoin into a cash flow analysis. Bitcoin doesn't do anything, it doesn't earn anything, so we can't value it. Compare more to gold. Bitcoin is valued more for monetary properties than for cash flow."
    },
    {
      question: "How is Bitcoin regulated in Australia?",
      answer: "Bitcoin is not a financial product, it is more akin to a capital asset like property. Different to most other cryptos. Yes there are financial products, like ETFs. They have different trade offs."
    },
    {
      question: "What about Bitcoin's energy consumption and environmental impact?",
      answer: "Current research shows that bitcoin mining uses 52% sustainable energy sources. This trend is continuing. About 0.5% of global electricity, however that's far less than the global banking or gold mining industries. Capturing methane and grid stability for new technologies."
    },
    {
      question: "Is Bitcoin used for crime and illicit activities?",
      answer: "Illicit crypto transactions 0.34% of all crypto activity in 2023. Contrast traditional finance, is about 2-5% of global GDP annually. Bitcoin is a transparent ledger, it's not ideal for criminals as it leaves traces, unlike physical cash."
    },
    {
      question: "What about Bitcoin's transaction speed and scalability?",
      answer: "The base layer priorities security over speed. Visa and Mastercard final settlement 1 month. Bitcoin 10 minutes. Final. Open source, internet protocol, like the TCP IP protocol for the internet, you can build on top of that. And there are layers that are already built to allow for instant transactions. As a store of value, which is probably the predominant use case now, this speed is ok."
    },
    {
      question: "What about Bitcoin's legality and regulation?",
      answer: "Blanket bans are uncommon and often push activity underground. This has no effect on the bitcoin network. Toothpaste is out of the tube. 15 years in."
    },
    {
      question: "What about quantum computing threats to Bitcoin?",
      answer: "It's not a problem today, but it could be one day. Quantum computers might eventually crack the locks that protect Bitcoin, but that's still years away, not tomorrow. Some coins are more at risk than others. The biggest danger is for old or poorly protected coins; people who use fresh addresses each time are much safer. There are fixes ready if needed. The Bitcoin community already has stronger 'locks' we can switch to, but it will take planning and agreement—so the main risk is panic, not the technology itself."
    },
    {
      question: "Can Bitcoin be broken or hacked?",
      answer: "Bitcoin's security comes from its decentralised network and cryptographic proof-of-work system. The network has been running continuously for over 15 years without being compromised. While individual wallets can be vulnerable if not properly secured, the Bitcoin network itself has proven to be extremely resilient against attacks."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className='min-h-screen bg-background'>
      <Container className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto'>
          {/* Page Header */}
          <div className='text-center mb-16'>
            <BookOpen className='mx-auto h-16 w-16 text-accent-500 mb-4' />
            <h1 className='text-4xl sm:text-5xl font-bold text-primary-900 font-display mb-4'>
              Resources
            </h1>
            <p className=' text-primary-800 font-body max-w-2xl mx-auto'>
              Access our curated list of resources to deepen your understanding of Bitcoin and investment strategies.
            </p>
          </div>

          {/* Featured Resources */}
          <div className='mb-20'>
            <h2 className='text-3xl font-bold text-primary-900 font-display mb-8 text-center'>
              Featured Resources
            </h2>
            <div className='grid gap-8 md:grid-cols-3'>
              {featuredResources.map((resource, index) => (
                <div key={index} className='bg-white p-8 rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow duration-300'>
                  {/* Icon */}
                  <div className='mb-6'>
                    <div className='w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center'>
                      <resource.icon className='w-8 h-8 text-accent-600' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='mb-4'>
                    <span className='inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full mb-3'>
                      {resource.type}
                    </span>
                    <h3 className='text-xl font-bold text-primary-900 font-display mb-3'>
                      <a 
                        href={resource.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-accent-600 transition-colors duration-300'
                      >
                        {resource.title}
                      </a>
                    </h3>
                    <p className='text-primary-700 font-body leading-relaxed'>
                      {resource.description}
                    </p>
                    <div className='mt-4'>
                      <a 
                        href={resource.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold text-sm transition-colors duration-300'
                      >
                        {resource.type === 'Video' ? 'Watch Video' : 'Read Report'}
                        <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Video Section */}
          <div className='mb-20'>
            <div className='bg-white p-8 rounded-lg shadow-sm border border-primary-200'>
              <div className='text-center mb-6'>
                <h3 className='text-2xl font-bold text-primary-900 font-display mb-4'>
                  Featured Discussion
                </h3>
                <p className='text-primary-700 font-body leading-relaxed max-w-3xl mx-auto'>
                  Watch Carri from BTS discuss Bitcoin with Sevan Tuna from Alexander Spencer, an accounting firm in Camberwell.
                </p>
              </div>
              
              {/* YouTube Video Embed */}
              <div className='aspect-video max-w-4xl mx-auto'>
                <iframe
                  src='https://www.youtube.com/embed/Bphcovq_VUk'
                  title='Carri from BTS discusses Bitcoin with Sevan Tuna from Alexander Spencer'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                  className='w-full h-full rounded-lg'
                ></iframe>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div id='faqs'>
            <h2 className='text-3xl font-bold text-primary-900 font-display mb-8 text-center'>
              Frequently Asked Questions
            </h2>
            <div className='space-y-4'>
              {faqData.map((faq, index) => (
                <div key={index} className='bg-white rounded-lg shadow-sm border border-primary-200'>
                  <button
                    onClick={() => toggleFaq(index)}
                    className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary-50 transition-colors duration-200'
                  >
                    <h3 className=' font-semibold text-primary-900 font-display pr-4'>
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className='h-5 w-5 text-accent-600 flex-shrink-0' />
                    ) : (
                      <ChevronDown className='h-5 w-5 text-accent-600 flex-shrink-0' />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className='px-6 pb-4'>
                      <div className='border-t border-primary-100 pt-4'>
                        <p className='text-primary-700 font-body leading-relaxed'>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
