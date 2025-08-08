import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Avuncular Group - Modern Web Solutions',
  description: 'Building modern, accessible, and scalable web solutions for forward-thinking businesses.',
  keywords: ['web development', 'consulting', 'digital solutions', 'technology'],
  authors: [{ name: 'Avuncular Group' }],
  creator: 'Avuncular Group',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://avunculargroup.com',
    title: 'Avuncular Group - Modern Web Solutions',
    description: 'Building modern, accessible, and scalable web solutions for forward-thinking businesses.',
    siteName: 'Avuncular Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avuncular Group - Modern Web Solutions',
    description: 'Building modern, accessible, and scalable web solutions for forward-thinking businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='min-h-screen flex flex-col antialiased bg-background text-foreground'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
