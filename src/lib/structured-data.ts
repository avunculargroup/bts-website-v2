/**
 * Utility functions for generating structured data (JSON-LD) schemas
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface VideoObjectData {
  name: string;
  description: string;
  videoId: string;
  thumbnailUrl?: string;
  uploadDate?: string;
  duration?: string;
}

/**
 * Generates a BreadcrumbList schema for a page
 * @param items Array of breadcrumb items (Home should be first)
 * @returns BreadcrumbList schema object
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const BASE_URL = 'https://bitcointreasurysolutions.com.au';

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`
    }))
  };
}

/**
 * Generates a VideoObject schema for YouTube videos
 * @param data Video metadata
 * @returns VideoObject schema object
 */
export function generateVideoSchema(data: VideoObjectData) {
  const thumbnailUrl = data.thumbnailUrl || `https://img.youtube.com/vi/${data.videoId}/maxresdefault.jpg`;
  const contentUrl = `https://www.youtube.com/watch?v=${data.videoId}`;
  const embedUrl = `https://www.youtube.com/embed/${data.videoId}`;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": data.name,
    "description": data.description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": data.uploadDate || new Date().toISOString().split('T')[0],
    "duration": data.duration || "PT5M", // Default 5 minutes if not provided
    "contentUrl": contentUrl,
    "embedUrl": embedUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Bitcoin Treasury Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bitcointreasurysolutions.com.au/images/logo.svg"
      }
    }
  };
}
