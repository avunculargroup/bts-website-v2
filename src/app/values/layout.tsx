import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bitcoin Through Values - BTS',
  description: 'Create a personalised Bitcoin guide based on values that matter to your colleague, board member, friend or loved one. Select values that resonate and generate a customised, values-based explanation of Bitcoin tailored to their perspective.',
  openGraph: {
    title: 'Bitcoin Through Values - BTS',
    description: 'Create a personalised Bitcoin guide based on values that matter to you and your loved ones. Generate a customised, values-based explanation of Bitcoin.',
    type: 'website',
    url: 'https://bitcointreasurysolutions.com.au/values',
    images: [
      {
        url: '/images/og-values.png',
        width: 1200,
        height: 630,
        alt: 'Bitcoin Through Values - Bitcoin Treasury Solutions',
      },
    ],
  },
  alternates: {
    canonical: '/values',
  },
};

export default function ValuesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

