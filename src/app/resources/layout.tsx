import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access curated Bitcoin resources, research reports, and educational materials for Australian investors. Featured content from River Financial, Fidelity Investments, and Bitcoin experts. Includes FAQ section and video interviews.',
  openGraph: {
    title: 'Resources | Bitcoin Treasury Solutions',
    description: 'Curated Bitcoin resources, research reports, and educational materials for Australian investors. Featured content from leading institutions and Bitcoin experts.',
    images: [
      {
        url: '/images/og-resources.png',
        width: 1200,
        height: 630,
        alt: 'Bitcoin Resources - Bitcoin Treasury Solutions',
      },
    ],
  },
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
