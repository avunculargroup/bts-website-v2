import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bitcoin Through Values - BTS',
  description: 'Create a personalised Bitcoin guide based on values that matter to you and your loved ones. Select values that resonate and generate a customised explanation of Bitcoin.',
  openGraph: {
    title: 'Bitcoin Through Values - BTS',
    description: 'Create a personalised Bitcoin guide based on values that matter to you and your loved ones.',
    type: 'website',
    url: 'https://bitcointreasurysolutions.com.au/values',
  },
};

export default function ValuesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

