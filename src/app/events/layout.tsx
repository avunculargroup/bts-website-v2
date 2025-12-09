import type { Metadata } from 'next';
import { generateBreadcrumbSchema, generateVideoSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Join Bitcoin Treasury Solutions for educational workshops and community events in Melbourne. Small-group sessions designed for curious investors aged 35+. Interstate workshops available on request. Get notified when we announce new sessions.',
  openGraph: {
    title: 'Events | Bitcoin Treasury Solutions',
    description: 'Join Bitcoin Treasury Solutions for educational workshops and community events in Melbourne. Small-group sessions for curious investors. Interstate available.',
    images: [
      {
        url: '/images/og-events.png',
        width: 1200,
        height: 630,
        alt: 'Bitcoin Events - Bitcoin Treasury Solutions',
      },
    ],
  },
  alternates: {
    canonical: '/events',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Events', url: '/events' },
  ]);

  const videoSchema = generateVideoSchema({
    name: "What to Expect at Our Events",
    description: "Learn what to expect at Bitcoin Treasury Solutions educational workshops and community events in Melbourne.",
    videoId: "KLC-0dgBjEA",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema),
        }}
      />
      {children}
    </>
  );
}
