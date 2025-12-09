import type { MetadataRoute } from 'next';

const BASE_URL = 'https://bitcointreasurysolutions.com.au';

// Function to get last modified date based on route
function getLastModified(route: string): Date {
  const now = new Date();
  // For static pages, use a recent date
  // In production, you might want to use file system stats or a CMS
  if (route === '/') {
    return now; // Homepage changes most frequently
  }
  // Main content pages - assume updated within last month
  if (['/about', '/resources', '/events', '/calculator', '/contact', '/values'].includes(route)) {
    const date = new Date(now);
    date.setDate(date.getDate() - 7); // Updated within last week
    return date;
  }
  // Static/legal pages - assume updated less frequently
  return new Date('2024-01-01'); // Last updated at site launch
}

// Function to get change frequency based on route
function getChangeFrequency(route: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  if (route === '/') {
    return 'weekly'; // Homepage updates weekly
  }
  if (['/resources', '/events'].includes(route)) {
    return 'monthly'; // Content pages update monthly
  }
  if (['/about', '/contact', '/calculator', '/values'].includes(route)) {
    return 'monthly'; // Main pages update monthly
  }
  return 'yearly'; // Legal/static pages update yearly
}

// Function to get priority based on route
function getPriority(route: string): number {
  if (route === '/') {
    return 1.0; // Homepage highest priority
  }
  if (['/about', '/resources', '/events', '/calculator', '/contact', '/values'].includes(route)) {
    return 0.8; // Main pages high priority
  }
  return 0.5; // Utility pages lower priority
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/about',
    '/resources',
    '/events',
    '/calculator',
    '/contact',
    '/values',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: getLastModified(route),
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }));
}


