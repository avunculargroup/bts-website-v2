import type { Metadata } from 'next';
import { Neuton, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const neuton = Neuton({
  subsets: ['latin'],
  variable: '--font-neuton',
  weight: '400',
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bitcointreasurysolutions.com.au'),
  title: {
    default: 'Bitcoin Treasury Solutions - Structured Bitcoin Learning for Australia\'s Professionals',
    template: '%s | Bitcoin Treasury Solutions'
  },
  description: 'Structured Bitcoin Learning for Australia\'s Professionals. Training, consulting, and public events to help your organisation understand Bitcoin, accept and store it safely, and implement advanced self-custody strategies.',
  keywords: ['Bitcoin training Australia', 'Bitcoin education', 'Bitcoin consulting Melbourne', 'Bitcoin treasury solutions', 'SME Bitcoin adoption', 'Corporate Bitcoin training', 'Bitcoin investment Australia', 'self-custody Bitcoin', 'Bitcoin accounting', 'Bitcoin for professionals'],
  authors: [{ name: 'BTS', url: 'https://bitcointreasurysolutions.com.au' }],
  creator: 'Avuncular Group Pty Ltd',
  publisher: 'Bitcoin Treasury Solutions',
  applicationName: 'Bitcoin Treasury Solutions',
  category: 'Education',
  classification: 'Business',
  themeColor: '#b28a44',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://bitcointreasurysolutions.com.au',
    siteName: 'Bitcoin Treasury Solutions',
    title: 'Bitcoin Treasury Solutions - Structured Bitcoin Learning',
    description: 'Structured Bitcoin Learning for Australia\'s Professionals. Training, consulting, and public events to help your organisation understand Bitcoin and implement advanced self-custody strategies.',
    emails: ['enquiry@btreasury.com.au'],
    phoneNumbers: ['+61 422 020 000'],
    countryName: 'Australia',
    images: [
      {
        url: '/images/bts_opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Bitcoin Treasury Solutions - Structured Bitcoin Learning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Treasury Solutions - Structured Bitcoin Learning',
    description: 'Structured Bitcoin Learning for Australia\'s Professionals. Training, consulting, and public events.',
    site: '@btreasury',
    images: ['/images/bts_opengraph.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon1.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-icon.png',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${neuton.variable} ${sourceSans3.variable}`}>
      <body className='min-h-screen flex flex-col antialiased bg-background text-foreground'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
