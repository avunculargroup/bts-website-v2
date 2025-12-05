import type { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Bitcoin CAGR Calculator',
  description: 'Calculate historic Bitcoin CAGR and project future values with Australian tax scenarios. Free Bitcoin investment calculator for professionals. Includes asset comparisons and tax implications for Australian investors and corporate treasuries.',
  openGraph: {
    title: 'Bitcoin CAGR Calculator | Bitcoin Treasury Solutions',
    description: 'Calculate historic Bitcoin CAGR and project future values with Australian tax scenarios. Free Bitcoin investment calculator for professionals.',
    type: 'website',
    url: 'https://bitcointreasurysolutions.com.au/calculator',
    images: [
      {
        url: '/images/og-calculator.png',
        width: 1200,
        height: 630,
        alt: 'Bitcoin CAGR Calculator - Bitcoin Treasury Solutions',
      },
    ],
  },
  alternates: {
    canonical: '/calculator',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Calculator', url: '/calculator' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}
