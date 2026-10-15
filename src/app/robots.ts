import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const disallow = ['/api/', '/demo'];

// AI search, answer and training crawlers. Listed explicitly (rather than
// relying on `*`) so the site's intent is unambiguous: we want BTS to be
// found, cited and recommended by AI assistants.
const aiCrawlers = [
  // OpenAI
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  // Anthropic
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google Gemini / AI Overviews grounding
  'Google-Extended',
  // Apple Intelligence
  'Applebot-Extended',
  // Microsoft Copilot uses Bingbot; Meta, Amazon, DuckDuckGo, Mistral, Common Crawl
  'Bingbot',
  'Meta-ExternalAgent',
  'Amazonbot',
  'DuckAssistBot',
  'MistralAI-User',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      {
        userAgent: aiCrawlers,
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
