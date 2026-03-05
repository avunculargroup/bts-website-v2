'use client';

import { useState } from 'react';
import { Compass, TrendingUp, ShieldCheck, Target, Lightbulb, Users, TrendingDown, Map, DollarSign, Wallet, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BookSessionModal } from '@/components/BookSessionModal';

const primaryBtn = {
  fontFamily: 'var(--font-body)',
  backgroundColor: 'var(--color-gold)',
  color: 'var(--color-text-primary)',
  borderRadius: 'var(--radius-lg)',
} as React.CSSProperties;

const secondaryBtn = {
  fontFamily: 'var(--font-body)',
  backgroundColor: 'var(--color-surface)',
  color: 'var(--color-text-primary)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-lg)',
} as React.CSSProperties;

function FeatureCard({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div
      className='p-6 rounded-xl text-center'
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className='flex justify-center mb-4'>
        <div
          className='w-12 h-12 rounded-lg flex items-center justify-center'
          style={{ backgroundColor: 'var(--color-gold-light)' }}
        >
          <Icon className='w-6 h-6' strokeWidth={1.5} style={{ color: 'var(--color-gold-dark)' }} />
        </div>
      </div>
      <p
        className='text-sm leading-relaxed'
        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
      >
        {children}
      </p>
    </div>
  );
}

function CTABox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='p-8 rounded-xl text-center'
      style={{
        backgroundColor: 'var(--color-gold-light)',
        border: '1px solid var(--color-border)',
        borderLeft: '4px solid var(--color-gold)',
      }}
    >
      {children}
    </div>
  );
}

function TestimonialCard({
  imageSrc,
  imageAlt,
  quote,
  name,
  linkedIn,
  role,
  showMore,
}: {
  imageSrc: string;
  imageAlt: string;
  quote: React.ReactNode;
  name: string;
  linkedIn: string;
  role: string;
  showMore?: { full: string };
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className='mt-12 p-8 rounded-xl relative'
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <span
        className='absolute top-3 left-3 inline-block px-3 py-1 text-xs font-medium rounded'
        style={{
          fontFamily: 'var(--font-body)',
          backgroundColor: 'var(--color-gold-light)',
          color: 'var(--color-gold-dark)',
          borderRadius: 'var(--radius-sm)',
        }}
      >
        Testimonial
      </span>
      <div className='flex flex-col items-center space-y-6 pt-4'>
        <div
          className='rounded-full p-0.5'
          style={{ border: '2px solid var(--color-gold-light)' }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={100}
            height={100}
            className='rounded-full object-cover object-top'
            style={{ objectPosition: 'center 15%' }}
          />
        </div>
        <div className='text-center max-w-2xl'>
          {showMore ? (
            <p
              className='text-xl italic mb-4 leading-relaxed'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
            >
              {expanded ? (
                <>
                  &quot;{showMore.full}&quot;
                  <button
                    onClick={() => setExpanded(false)}
                    className='block mt-2 text-sm underline ml-auto mr-auto'
                    style={{ color: 'var(--color-gold-dark)' }}
                  >
                    show less
                  </button>
                </>
              ) : (
                <>
                  &quot;{quote}&quot;
                  {showMore && (
                    <button
                      onClick={() => setExpanded(true)}
                      className='ml-1 text-sm underline'
                      style={{ color: 'var(--color-gold-dark)' }}
                    >
                      ...read more
                    </button>
                  )}
                </>
              )}
            </p>
          ) : (
            <p
              className='text-xl italic mb-4 leading-relaxed'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
            >
              &quot;{quote}&quot;
            </p>
          )}
          <div className='flex items-center justify-center gap-2'>
            <p
              className='text-base font-semibold mb-0'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              — {name}
            </p>
            <Link
              href={linkedIn}
              target='_blank'
              rel='noopener noreferrer'
              className='transition-colors'
              style={{ color: 'var(--color-text-tertiary)' }}
              onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-tertiary)'; }}
              aria-label={`Connect with ${name} on LinkedIn`}
            >
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
              </svg>
            </Link>
          </div>
          <p
            className='text-sm'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroCTA() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [currentSessionType, setCurrentSessionType] = useState<'Corporate & SME' | 'Accountants & Financial Advisors' | 'Individuals' | 'Workshop'>('Workshop');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Intro */}
      <div id='hero-cta' className='py-16 lg:py-24' style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
        <div className='w-full max-w-4xl px-6 lg:px-8 mx-auto'>
          <div className='text-center mb-10'>
            <div className='flex justify-center mb-5'>
              <Compass className='w-12 h-12' strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
            </div>
            <h2
              className='text-3xl sm:text-4xl font-bold mb-6'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Navigate bitcoin with clarity and care
            </h2>
            <div className='space-y-4 max-w-3xl mx-auto'>
              <p
                className='text-base leading-relaxed'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
              >
                BTS empowers companies and individuals to explore bitcoin as part of a diversified investment strategy. We offer small, in‑person sessions. Melbourne based, interstate available. Our experienced coaches demystify Bitcoin and show how it can fit into your financial plan.
              </p>
              <p
                className='text-base leading-relaxed'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
              >
                There is no hype and no promises of fast fortunes — just practical education that builds confidence for slow, certain growth. Join us to reclaim control over your money and prepare for the future.
              </p>
            </div>
          </div>

          {/* Audience Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
            {[
              { label: 'Corporate & SME', id: 'corporate-sme' },
              { label: 'Accountants & Financial Advisors', id: 'accountants-advisors' },
              { label: 'Individuals', id: 'individuals' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => scrollToSection(btn.id)}
                aria-label={`Navigate to ${btn.label} section`}
                className='w-full sm:w-auto py-2.5 px-6 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
                style={secondaryBtn}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-surface-subtle)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-surface)'; }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate & SME */}
      <div id='corporate-sme' className='py-16 lg:py-24' style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className='w-full max-w-4xl px-6 lg:px-8 mx-auto'>
          <div className='text-center mb-10'>
            <h3
              className='text-2xl sm:text-3xl font-bold mb-3'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Corporate & SME
            </h3>
            <p
              className='text-base'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              You know your business, your treasury portfolio and your investment criteria
            </p>
          </div>

          <p
            className='text-sm text-center mb-5'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            We can help you with:
          </p>
          <div className='grid gap-4 md:grid-cols-3 mb-8'>
            <FeatureCard icon={TrendingUp}>Assessing Bitcoin&apos;s role in your treasury strategy</FeatureCard>
            <FeatureCard icon={ShieldCheck}>Crafting governance policies for secure adoption</FeatureCard>
            <FeatureCard icon={Target}>Optimising practices for risk, purchase, sale, storage, and succession planning</FeatureCard>
          </div>

          <CTABox>
            <p
              className='text-sm leading-relaxed mb-3'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              Book a 1-hour tailored, in-house introductory session for your CFO and financial department
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
              <button
                className='py-2.5 px-6 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
                style={primaryBtn}
                onClick={() => { setCurrentSessionType('Corporate & SME'); setIsBookModalOpen(true); }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
              >
                Book Session
              </button>
              <a
                href='https://calendly.com/carri27/30min'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center py-2.5 px-6 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
                style={secondaryBtn}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-surface-subtle)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-surface)'; }}
              >
                Schedule a call
                <ExternalLink className='ml-2 w-3.5 h-3.5' strokeWidth={1.5} />
              </a>
            </div>
          </CTABox>
        </div>
      </div>

      {/* Accountants & Financial Advisors */}
      <div id='accountants-advisors' className='py-16 lg:py-24' style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
        <div className='w-full max-w-4xl px-6 lg:px-8 mx-auto'>
          <div className='text-center mb-10'>
            <h3
              className='text-2xl sm:text-3xl font-bold mb-3'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Accountants & Financial Advisors
            </h3>
            <p
              className='text-base'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              You know your clients: their needs, risk profiles and aspirations
            </p>
          </div>

          <p
            className='text-sm text-center mb-5'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            We can help you with:
          </p>
          <div className='grid gap-4 md:grid-cols-3 mb-8'>
            <FeatureCard icon={Lightbulb}>Demystifying Bitcoin and its benefits</FeatureCard>
            <FeatureCard icon={Users}>Guiding clients with credible, trustworthy advice</FeatureCard>
            <FeatureCard icon={TrendingDown}>Evaluating risks and opportunities confidently</FeatureCard>
          </div>

          <CTABox>
            <p
              className='text-sm leading-relaxed mb-3'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              Schedule a 1-hour customised, in-house introductory workshop for your firm&apos;s staff
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
              <button
                className='py-2.5 px-6 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
                style={primaryBtn}
                onClick={() => { setCurrentSessionType('Accountants & Financial Advisors'); setIsBookModalOpen(true); }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
              >
                Book Workshop
              </button>
              <a
                href='https://calendly.com/carri27/30min'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center py-2.5 px-6 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
                style={secondaryBtn}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-surface-subtle)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-surface)'; }}
              >
                Schedule a call
                <ExternalLink className='ml-2 w-3.5 h-3.5' strokeWidth={1.5} />
              </a>
            </div>
          </CTABox>

          <TestimonialCard
            imageSrc='/images/sevan_tuna.png'
            imageAlt='Sevan Tuna'
            quote='A lot of our clients have asked us about Bitcoin, what our opinion is, what we know about it, whether they should be buying it. It came at a really good time, meeting the Bitcoin Treasury Solutions team.'
            name='Sevan Tuna'
            linkedIn='https://www.linkedin.com/in/sevantuna/'
            role='Managing Director, Alexander Spencer'
          />
        </div>
      </div>

      {/* Individuals */}
      <div id='individuals' className='py-16 lg:py-24' style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className='w-full max-w-4xl px-6 lg:px-8 mx-auto'>
          <div className='text-center mb-10'>
            <h3
              className='text-2xl sm:text-3xl font-bold mb-3'
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
            >
              Individuals
            </h3>
            <p
              className='text-base'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              You know your financial situation, your investment portfolio and your retirement dreams
            </p>
          </div>

          <p
            className='text-sm text-center mb-5'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            We can help you with:
          </p>
          <div className='grid gap-4 md:grid-cols-3 mb-8'>
            <FeatureCard icon={Map}>Navigating Bitcoin&apos;s place in the investment landscape</FeatureCard>
            <FeatureCard icon={DollarSign}>Assessing its value proposition</FeatureCard>
            <FeatureCard icon={Wallet}>Integrating it into your portfolio with best practices for purchasing and storage</FeatureCard>
          </div>

          <CTABox>
            <p
              className='text-sm leading-relaxed mb-3'
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
            >
              Join our 1-day public workshop for you and your loved ones
            </p>
            <Link
              href='/events'
              className='inline-block py-2.5 px-6 text-sm font-medium rounded-lg transition-colors duration-100 active:scale-[0.98]'
              style={primaryBtn}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; }}
            >
              Check available workshops
            </Link>
          </CTABox>

          <TestimonialCard
            imageSrc='/images/tamara.png'
            imageAlt='Tam Jones'
            quote="I loved this workshop – it's 'Bitcoin for beginners' and gave me enough of an overview to dispel the myths around bitcoin, truly define what it is, and what it isn't, and how to take bitcoin into consideration in my financial decision making – it's not financial advice, but truly helped me understand bitcoin's: history, current status, and comparisons to other financial instruments."
            name='Tam Jones'
            linkedIn='https://www.linkedin.com/in/tamera-jones-17451b4/'
            role='Leadership Coach'
            showMore={{
              full: "I loved this workshop – it's 'Bitcoin for beginners' and gave me enough of an overview to dispel the myths around bitcoin, truly define what it is, and what it isn't, and how to take bitcoin into consideration in my financial decision making – it's not financial advice, but truly helped me understand bitcoin's: history, current status, and comparisons to other financial instruments. They cover the benefits and risks in a very interactive and interesting format. The team's knowledge and passion are incredible! If you don't know much about bitcoin, but want to, this a brilliant and valuable way to easily learn it.",
            }}
          />
        </div>
      </div>

      <BookSessionModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} sessionType={currentSessionType} />
    </>
  );
}
