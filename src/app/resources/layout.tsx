import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access curated Bitcoin resources, research reports, and educational materials. Deepen your understanding of Bitcoin and investment strategies with our featured content.',
  openGraph: {
    title: 'Resources | Bitcoin Treasury Solutions',
    description: 'Access curated Bitcoin resources, research reports, and educational materials to deepen your understanding of Bitcoin.',
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
