'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function Resources() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featuredResources = [
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

  const faqData = [
    {
      question: "Is Bitcoin a Ponzi?",
      answer: "A Ponzi scheme is an investment fraud where returns to earlier participants come from funds contributed by newer investors, not from legitimate profits. Such schemes promise high, consistent returns and collapse when recruitment slows. Bitcoin doesn't fit this model: it has no central operator and no one promising guaranteed payouts. The network is decentralised and transparent, operating regardless of who joins or leaves. All transactions are visible on a public ledger and there's no hidden flow of funds or reliance on constant recruitment. Even when the price crashes or large holders sell, the system continues functioning—unlike a Ponzi, which fails when new money dries up."
    },
    {
      question: "What Is Bitcoin Backed By?",
      answer: "In traditional finance, a currency is \"backed\" when it can be redeemed for something else (such as gold or a government promise). Bitcoin offers no such IOU: it's not redeemable for a fixed commodity or guaranteed by a central authority. Instead, its value arises from its core design: Scarcity and supply cap (only 21 million bitcoins will ever exist; this algorithmic scarcity is auditable and cannot be inflated); Cryptography and proof-of-work (strong cryptography and an energy-based consensus mechanism secure the network; manipulating transactions would cost more than any potential reward); Decentralised consensus (tens of thousands of independent nodes enforce the same rulebook, preventing any single actor from changing the protocol); Global network effects (the more people who use and accept Bitcoin, the more useful and thus valuable it becomes); Trust and utility (people attribute value to Bitcoin because it enables censorship-resistant, cross-border transfers and acts as a digital store of value). Because of these factors, Bitcoin's purchasing power comes from its technological properties, scarcity and broad acceptance rather than from any physical backing."
    },
    {
      question: "What does \"hard money\" mean?",
      answer: "\"Hard\" doesn't describe something physical; it refers to how hard it is to create more. Gold is \"hard\" because it's difficult to mine, whereas most government currencies are \"soft\" because they can be printed easily. Bitcoin is considered hard because its supply is fixed by code."
    },
    {
      question: "If Bitcoin became widely used, wouldn't deflation cause problems? Don't economies need inflation?",
      answer: "Many fear a non-inflating currency would stop growth, but history shows that falling prices don't automatically halt economic expansion—U.S. prices fell for decades after the Civil War while growth continued. Under a sound-money system like gold (or Bitcoin), prices are free to fluctuate and send accurate signals about resource allocation, whereas artificially targeting inflation can distort those signals and inflate bubbles. Persistent currency expansion also helps prop up unproductive \"zombie\" firms."
    },
    {
      question: "Bitcoin has no \"intrinsic value\" — how can it be worth anything?",
      answer: "Fiat money has no intrinsic value either; its worth comes from trust and acceptance. Bitcoin derives value from scarcity and network adoption, similar to gold. Traditional cash-flow models don't apply to Bitcoin, because it isn't a business generating income—it's valued for its monetary properties (scarcity, portability, divisibility) rather than for dividends."
    },
    {
      question: "How is Bitcoin treated under Australian regulation?",
      answer: "In Australia, Bitcoin is treated more like a capital asset (akin to property) rather than a traditional financial product. Other cryptos may be handled differently. Financial products tied to Bitcoin (like ETFs) exist, each with trade-offs around custody, convenience and fees."
    },
    {
      question: "Doesn't Bitcoin's energy use harm the environment?",
      answer: "Bitcoin mining consumes energy, but an increasing share comes from renewable sources. Mining can capture wasted methane and provide flexible demand that helps stabilise grids. Its energy footprint should be viewed in context alongside the energy use of banking, gold mining, and other systems it might replace."
    },
    {
      question: "Isn't cryptocurrency mainly used for crime?",
      answer: "Illicit activity accounts for a small fraction of crypto transactions, far below the rates seen in traditional finance. Bitcoin's public ledger makes it less attractive for criminals than physical cash, since every transaction leaves a trace."
    },
    {
      question: "What about transaction speed and scalability?",
      answer: "Bitcoin's base layer prioritises security and decentralisation over instant payments, with final settlement in about ten minutes. Higher layers (already in use) allow near-instant, low-cost transactions. For its main role as a store of value, base-layer speed is adequate; layered protocols handle day-to-day payments."
    },
    {
      question: "Can governments simply ban Bitcoin?",
      answer: "Blanket bans are rare and tend to push use underground without disabling the network. Bitcoin is a decentralised protocol operating globally; even if one jurisdiction restricts on-ramps, the network persists worldwide."
    },
    {
      question: "Could quantum computers break Bitcoin?",
      answer: "Quantum computing poses a future risk to current cryptography, but large-scale quantum attacks are still years away. Some addresses and keys would be more exposed than others, but the community has stronger cryptographic tools ready to adopt. Coordination, not the technology itself, is the main challenge when migrating to quantum-resistant signatures."
    },
    {
      question: "Can Bitcoin be hacked or \"broken\"?",
      answer: "Bitcoin's design emphasises decentralisation and cryptographic security. Most successful attacks exploit users (phishing, poor key management, scams) or third-party custodians—not the protocol itself. Secure key practices and using reputable services mitigate most real-world risks."
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
                <div key={index} className='bg-white rounded-lg shadow-sm border border-primary-200 hover:shadow-md transition-shadow duration-300 overflow-hidden'>
                  {/* Image */}
                  <div className='w-full h-48 relative mb-0'>
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className='object-cover'
                    />
                  </div>

                  {/* Content */}
                  <div className='p-6'>
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
                    <p className='text-primary-700 font-body leading-relaxed mb-4'>
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
                    aria-label={faq.question}
                    aria-expanded={openFaq === index}
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
                        <p className='text-primary-700 font-body leading-relaxed mb-4'>
                          {faq.answer}
                        </p>
                        {index === 0 && (
                          <div className='mt-6'>
                            <div className='aspect-video max-w-2xl mx-auto'>
                              <iframe
                                src='https://www.youtube.com/embed/ebgkAdaf7d0?si=RzLnEMTrXnzRGG2n'
                                title='Bitcoin Ponzi Scheme Explained'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                referrerPolicy='strict-origin-when-cross-origin'
                                allowFullScreen
                                className='w-full h-full rounded-lg'
                              />
                            </div>
                          </div>
                        )}
                        {index === 1 && (
                          <div className='mt-6'>
                            <div className='aspect-video max-w-2xl mx-auto'>
                              <iframe
                                src='https://www.youtube.com/embed/LOEpthZlps0?si=HZuAMbMJU3YH1HYw'
                                title='What Is Bitcoin Backed By?'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                referrerPolicy='strict-origin-when-cross-origin'
                                allowFullScreen
                                className='w-full h-full rounded-lg'
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bitcoin People Section */}
          <div className='mt-20'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-primary-900 font-display mb-4'>
                Bitcoin People
              </h2>
              <p className='text-primary-700 font-body leading-relaxed max-w-3xl mx-auto'>
                Interviews with experts
              </p>
            </div>
            
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {/* Adam Back Video */}
              <div className='bg-white rounded-lg shadow-sm border border-primary-200 overflow-hidden'>
                <div className='aspect-video'>
                  <iframe
                    src='https://www.youtube.com/embed/7rHreBFqS7o?si=XKL7V1p3dWNdLUfX'
                    title='Adam Back - Bitcoin Expert Interview'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                    className='w-full h-full'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-primary-900 font-display mb-2'>
                    Adam Back
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
