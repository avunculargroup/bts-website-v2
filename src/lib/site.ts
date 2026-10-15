/**
 * Canonical facts about Bitcoin Treasury Solutions.
 *
 * Shared by the JSON-LD structured data, robots/llms.txt routes and anything
 * else that describes the business to search engines and AI assistants, so the
 * story stays consistent everywhere it is told.
 */

export const SITE_URL = 'https://bitcointreasurysolutions.com.au';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const site = {
  name: 'Bitcoin Treasury Solutions',
  alternateName: 'BTS',
  tagline: "Structured Bitcoin Learning for Australia's Professionals",
  description:
    "Structured Bitcoin Learning for Australia's Professionals. Training, consulting, and public events to help your organisation understand Bitcoin, accept and store it safely, and implement advanced self-custody strategies.",
  summary:
    'Bitcoin Treasury Solutions (BTS) is a Melbourne-based Bitcoin education company. It runs corporate Bitcoin training, one-on-one and small-team consulting, and small-group public workshops for Australian professionals, SMEs, public companies, accountants and treasury teams. BTS teaches rather than sells: no product pushing and no fast-fortune promises.',
  email: 'enquiry@btreasury.com.au',
  bookingUrl: 'https://calendly.com/carri27/30min',
  logo: `${SITE_URL}/images/logo.svg`,
  ogImage: '/images/open-graph-v2.png',
  locale: 'en-AU',
  address: {
    streetAddress: '585 Little Collins Street, Suite 513',
    addressLocality: 'Melbourne',
    addressRegion: 'Victoria',
    postalCode: '3000',
    addressCountry: 'AU',
  },
  geo: { latitude: -37.8136, longitude: 144.9631 },
  parentOrganization: {
    name: 'Avuncular Group Pty Ltd',
    abn: '82 683 088 173',
  },
  sameAs: [
    'https://x.com/btreasuryau',
    'https://www.youtube.com/channel/UCfl6Ad-fNMLXRAN7rAGuTlQ',
    'https://www.linkedin.com/company/btreasury/',
  ],
  knowsAbout: [
    'Bitcoin',
    'Bitcoin education',
    'Corporate Bitcoin treasury',
    'Bitcoin self-custody',
    'Bitcoin security and key management',
    'Accepting Bitcoin payments in business',
    'Bitcoin corporate governance',
    'Australian taxation of Bitcoin',
    'Bitcoin investment risk management',
  ],
} as const;

export const founders = [
  {
    id: `${SITE_URL}/about#carri`,
    name: 'Carri Crawford',
    jobTitle: 'Director, Coach & Finance Expert',
    linkedin: 'https://www.linkedin.com/in/carolyn-carri-crawford-38305a5/',
    bio: 'Over 20 years in financial services and 20 years coaching executives. Specialises in translating complex financial topics into clear, actionable steps.',
  },
  {
    id: `${SITE_URL}/about#chris`,
    name: 'Chris Pollard',
    jobTitle: 'Director, Technologist & Bitcoin Specialist',
    linkedin: 'https://www.linkedin.com/in/chris-pollard-au/',
    bio: 'Deep technology expertise and years of Bitcoin study, focused on Bitcoin as a store of value and medium of exchange for individuals and corporations.',
  },
] as const;

export const services = [
  {
    name: 'Bitcoin Training',
    serviceType: 'Bitcoin Education Training',
    url: `${SITE_URL}/contact`,
    description:
      "Tailored programs for SME businesses, public companies, and community groups. Whether your organisation wants to understand Bitcoin's potential or prepare for digital asset adoption.",
    features: [
      'Understanding fundamentals of Bitcoin, the network and the asset',
      'Accepting and storing bitcoin safely',
      'Advanced self-custody strategies',
    ],
  },
  {
    name: 'Bitcoin Consulting',
    serviceType: 'Bitcoin Consulting',
    url: `${SITE_URL}/contact`,
    description:
      'One-on-one and small team coaching for deeper guidance. We explore your specific goals, risk tolerance and investment horizon to build customised plans.',
    features: [
      'Personalised Bitcoin integration strategies',
      'Fitting bitcoin into corporate governance',
      'Ongoing support as the landscape evolves',
      'Tailored risk assessment and management',
    ],
  },
  {
    name: 'Public Events',
    serviceType: 'Bitcoin Education Workshops',
    url: `${SITE_URL}/events`,
    description:
      'Small-group workshops and educational sessions designed for curious investors aged 35 and over. Learn Bitcoin fundamentals in a supportive, jargon-free environment.',
    features: [
      'What Bitcoin is and why it matters',
      'How Bitcoin fits into diversified investment strategies',
      'Practical steps to buy, store and safeguard Bitcoin',
    ],
  },
] as const;

export const keyPages = [
  {
    path: '/',
    title: 'Home',
    description: 'Overview of BTS training, consulting and public events.',
  },
  {
    path: '/about',
    title: 'About',
    description: 'Our story, mission, values and directors.',
  },
  {
    path: '/resources',
    title: 'Resources & Bitcoin FAQ',
    description:
      'Curated research, videos and answers to common Bitcoin questions and criticisms.',
  },
  {
    path: '/calculator',
    title: 'Bitcoin CAGR Calculator',
    description:
      'Historic Bitcoin CAGR, future projections and Australian tax scenarios.',
  },
  {
    path: '/values',
    title: 'Bitcoin Through Values',
    description:
      'Build a personalised, values-based explanation of Bitcoin for a colleague or loved one.',
  },
  {
    path: '/events',
    title: 'Events',
    description:
      'Melbourne workshops and community events; interstate on request.',
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Book a workshop or schedule a call.',
  },
] as const;

/** Organization + WebSite + founder Person nodes, linked by @id. */
export function organizationGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': ORGANIZATION_ID,
        name: site.name,
        alternateName: site.alternateName,
        url: SITE_URL,
        logo: site.logo,
        image: site.logo,
        slogan: site.tagline,
        description: site.description,
        email: site.email,
        address: { '@type': 'PostalAddress', ...site.address },
        geo: { '@type': 'GeoCoordinates', ...site.geo },
        contactPoint: {
          '@type': 'ContactPoint',
          email: site.email,
          contactType: 'Customer Service',
          url: site.bookingUrl,
          areaServed: 'AU',
          availableLanguage: site.locale,
        },
        founder: founders.map(f => ({ '@id': f.id })),
        parentOrganization: {
          '@type': 'Organization',
          name: site.parentOrganization.name,
          legalName: site.parentOrganization.name,
          taxID: `ABN ${site.parentOrganization.abn}`,
        },
        areaServed: { '@type': 'Country', name: 'Australia' },
        knowsAbout: site.knowsAbout,
        priceRange: '$$',
        sameAs: site.sameAs,
      },
      ...founders.map(f => ({
        '@type': 'Person',
        '@id': f.id,
        name: f.name,
        jobTitle: f.jobTitle,
        description: f.bio,
        worksFor: { '@id': ORGANIZATION_ID },
        sameAs: [f.linkedin],
      })),
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: site.name,
        description: site.description,
        inLanguage: site.locale,
        publisher: { '@id': ORGANIZATION_ID },
      },
    ],
  };
}
