import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Join Bitcoin Treasury Solutions for educational workshops and community events. Melbourne based, interstate available. Small-group sessions designed for curious investors.',
  openGraph: {
    title: 'Events | Bitcoin Treasury Solutions',
    description: 'Join us for educational workshops and community events. Melbourne based, interstate available. Get notified when we announce new sessions.',
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
