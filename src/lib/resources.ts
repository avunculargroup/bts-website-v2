export interface Resource {
  id: string;
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
  category: string;
  tags: string[];
  featured?: boolean;
  dateAdded: string;
  author?: string;
  thumbnailUrl?: string;
}

// Mock data - in a real app, this would come from a CMS or API
const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Web Development Best Practices Guide',
    description: 'A comprehensive guide covering modern web development best practices, including performance optimization, accessibility, and security.',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    downloadUrl: '/resources/web-development-best-practices.pdf',
    category: 'Guides',
    tags: ['web-development', 'best-practices', 'performance'],
    featured: true,
    dateAdded: '2024-01-15T00:00:00Z',
    author: 'Avuncular Group',
  },
  {
    id: '2',
    title: 'Design System Template',
    description: 'A complete design system template with components, tokens, and documentation for building consistent user interfaces.',
    fileType: 'Figma',
    fileSize: '15.2 MB',
    downloadUrl: '/resources/design-system-template.fig',
    category: 'Templates',
    tags: ['design-system', 'figma', 'ui-components'],
    featured: true,
    dateAdded: '2024-01-10T00:00:00Z',
    author: 'Design Team',
  },
  {
    id: '3',
    title: 'API Integration Checklist',
    description: 'A detailed checklist for integrating third-party APIs, including security considerations, error handling, and testing strategies.',
    fileType: 'DOCX',
    fileSize: '856 KB',
    downloadUrl: '/resources/api-integration-checklist.docx',
    category: 'Checklists',
    tags: ['api', 'integration', 'checklist'],
    dateAdded: '2024-01-05T00:00:00Z',
    author: 'Development Team',
  },
  {
    id: '4',
    title: 'SEO Optimization Guide',
    description: 'Complete guide to SEO optimization for modern websites, including technical SEO, content strategy, and analytics.',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    downloadUrl: '/resources/seo-optimization-guide.pdf',
    category: 'Guides',
    tags: ['seo', 'optimization', 'marketing'],
    dateAdded: '2024-01-01T00:00:00Z',
    author: 'Marketing Team',
  },
];

export function getAllResources(): Resource[] {
  return mockResources.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
}

export function getFeaturedResources(): Resource[] {
  return getAllResources().filter((resource) => resource.featured);
}

export function getResourcesByCategory(category: string): Resource[] {
  return getAllResources().filter((resource) => 
    resource.category.toLowerCase() === category.toLowerCase()
  );
}

export function getResourcesByTag(tag: string): Resource[] {
  return getAllResources().filter((resource) => 
    resource.tags.some((resourceTag) => 
      resourceTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
}

export function getResourceById(id: string): Resource | null {
  return mockResources.find((resource) => resource.id === id) || null;
}

export function getResourceCategories(): string[] {
  const categories = mockResources.map((resource) => resource.category);
  return [...new Set(categories)].sort();
}

export function searchResources(query: string): Resource[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllResources().filter((resource) =>
    resource.title.toLowerCase().includes(lowercaseQuery) ||
    resource.description.toLowerCase().includes(lowercaseQuery) ||
    resource.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
