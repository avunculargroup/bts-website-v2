# SEO Validation Checklist

This document provides a comprehensive checklist for validating all SEO implementations on the Bitcoin Treasury Solutions website.

## Structured Data Validation

### Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

### Schemas to Validate

#### 1. Organization Schema (Root Layout)
- **Location**: `src/app/layout.tsx`
- **Type**: EducationalOrganization + LocalBusiness
- **Test URL**: `https://bitcointreasurysolutions.com.au`
- **Fields to verify**:
  - Name, URL, Logo
  - Address (Melbourne, Victoria, 3000)
  - Geo coordinates (-37.8136, 144.9631)
  - Contact point (email, Calendly URL)
  - SameAs social media links

#### 2. FAQPage Schema (Resources Page)
- **Location**: `src/app/resources/page.tsx`
- **Test URL**: `https://bitcointreasurysolutions.com.au/resources`
- **Fields to verify**:
  - All 12 FAQ questions and answers
  - Proper Question/Answer structure

#### 3. BreadcrumbList Schema
- **Location**: All main pages (about, contact, resources, events, calculator, values)
- **Test URLs**: 
  - `/about`
  - `/contact`
  - `/resources`
  - `/events`
  - `/calculator`
  - `/values`
- **Fields to verify**:
  - Home → Page Name structure
  - Correct URLs

#### 4. VideoObject Schema
- **Location**: Multiple pages
- **Videos to validate**:
  - Homepage: KLC-0dgBjEA
  - Resources: Bphcovq_VUk, ebgkAdaf7d0, LOEpthZlps0, 7rHreBFqS7o
  - Events: KLC-0dgBjEA
- **Fields to verify**:
  - Name, description, thumbnail URL
  - Content URL and embed URL
  - Publisher information

#### 5. Service Schema (Homepage)
- **Location**: `src/app/page.tsx`
- **Test URL**: `https://bitcointreasurysolutions.com.au`
- **Services to validate**:
  - Bitcoin Training
  - Bitcoin Consulting
  - Public Events
- **Fields to verify**:
  - Service type, name, description
  - Provider (Bitcoin Treasury Solutions)
  - Area served (Australia)
  - Service channel URLs

## Technical SEO Validation

### 1. Canonical URLs
- [ ] Verify canonical URLs on all pages:
  - `/` → `https://bitcointreasurysolutions.com.au/`
  - `/about` → `https://bitcointreasurysolutions.com.au/about`
  - `/contact` → `https://bitcointreasurysolutions.com.au/contact`
  - `/resources` → `https://bitcointreasurysolutions.com.au/resources`
  - `/events` → `https://bitcointreasurysolutions.com.au/events`
  - `/calculator` → `https://bitcointreasurysolutions.com.au/calculator`
  - `/values` → `https://bitcointreasurysolutions.com.au/values`
  - `/privacy` → `https://bitcointreasurysolutions.com.au/privacy`
  - `/terms` → `https://bitcointreasurysolutions.com.au/terms`

**Tool**: View page source and check `<link rel="canonical">` tags

### 2. Sitemap
- [ ] Verify sitemap is accessible: `https://bitcointreasurysolutions.com.au/sitemap.xml`
- [ ] Check all routes are included:
  - Homepage (priority: 1.0, changeFrequency: weekly)
  - Main pages (priority: 0.8, changeFrequency: monthly)
  - Utility pages (priority: 0.5, changeFrequency: yearly)
- [ ] Verify lastModified dates are present
- [ ] Submit to Google Search Console

**Tool**: Direct URL access, Google Search Console

### 3. Robots.txt
- [ ] Verify robots.txt: `https://bitcointreasurysolutions.com.au/robots.txt`
- [ ] Check sitemap reference is present
- [ ] Verify API routes are disallowed

**Tool**: Direct URL access

### 4. Meta Tags
- [ ] Verify all pages have unique title tags
- [ ] Verify all pages have unique meta descriptions (150-160 characters)
- [ ] Check Open Graph tags on all pages
- [ ] Verify Twitter Card tags

**Tool**: View page source, [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/), [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 5. Hreflang Tags
- [ ] Verify en-AU hreflang tag on homepage
- **Tool**: View page source

## Performance Validation

### 1. Image Optimization
- [ ] Verify Next.js Image component is used throughout
- [ ] Check images use AVIF/WebP formats (configured in next.config.ts)
- [ ] Verify lazy loading on below-fold images
- [ ] Check alt text is descriptive and keyword-rich

**Tool**: Lighthouse, View page source

### 2. Video Optimization
- [ ] Verify all YouTube embeds have `loading="lazy"` attribute
- [ ] Check video schemas are properly implemented

**Tool**: View page source, Network tab in DevTools

### 3. Preconnect/DNS Prefetch
- [ ] Verify preconnect links for:
  - youtube.com
  - img.youtube.com
  - calendly.com
  - x.com
- [ ] Check dns-prefetch links for same domains

**Tool**: View page source

### 4. Compression
- [ ] Verify gzip/brotli compression is enabled
- **Tool**: [PageSpeed Insights](https://pagespeed.web.dev/), Network tab in DevTools

## Content SEO Validation

### 1. Heading Hierarchy
- [ ] Each page has exactly one H1
- [ ] H2 follows H1, H3 follows H2 (no skipping levels)
- **Pages to check**:
  - Homepage
  - About
  - Contact
  - Resources
  - Events
  - Calculator
  - Values

**Tool**: View page source, [W3C HTML Validator](https://validator.w3.org/)

### 2. Internal Linking
- [ ] Verify contextual internal links between related pages
- [ ] Check anchor text is descriptive and keyword-rich
- **Links to verify**:
  - Services → Contact, About
  - Resources → Calculator
  - AboutUs → About, Contact

**Tool**: Manual review, [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)

### 3. Alt Text
- [ ] All images have descriptive alt text
- [ ] Alt text includes relevant keywords naturally
- [ ] Alt text is 125 characters or less

**Tool**: View page source, Accessibility audit tools

## Local SEO Validation

### 1. LocalBusiness Schema
- [ ] Verify geo coordinates are correct (-37.8136, 144.9631)
- [ ] Check address is complete and accurate
- [ ] Verify areaServed is set to Australia

**Tool**: Google Rich Results Test, Schema.org Validator

### 2. Location Keywords
- [ ] Verify "Melbourne", "Victoria", "Australia" appear naturally in content
- [ ] Check location mentioned in meta descriptions

**Tool**: Manual review, [Google Search Console](https://search.google.com/search-console)

## Mobile SEO Validation

### 1. Mobile-Friendly Test
- [ ] Run Google Mobile-Friendly Test
- **Tool**: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 2. Viewport Meta Tag
- [ ] Verify viewport meta tag is present
- **Tool**: View page source

## Social Media Validation

### 1. Open Graph Tags
- [ ] Verify OG tags on all pages
- [ ] Check OG images are 1200x630px (when created)
- [ ] Test with Facebook Sharing Debugger

**Tool**: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

### 2. Twitter Cards
- [ ] Verify Twitter Card tags
- [ ] Test with Twitter Card Validator

**Tool**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Analytics & Monitoring

### 1. Google Search Console
- [ ] Verify site is added to Google Search Console
- [ ] Submit sitemap
- [ ] Monitor for structured data errors
- [ ] Check coverage and indexing status

### 2. Performance Monitoring
- [ ] Run Lighthouse audit (target: 90+ for SEO)
- [ ] Monitor Core Web Vitals
- [ ] Check page load times

**Tool**: [PageSpeed Insights](https://pagespeed.web.dev/), Lighthouse in Chrome DevTools

## Ongoing Maintenance

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Monitor structured data validation

### Monthly
- [ ] Review and update sitemap lastModified dates
- [ ] Check for broken internal links
- [ ] Review meta descriptions for freshness

### Quarterly
- [ ] Full SEO audit using Lighthouse
- [ ] Review and update structured data
- [ ] Check for new SEO best practices

## Notes

- OG images (1200x630px) need to be created separately for each page:
  - `/images/og-about.png`
  - `/images/og-contact.png`
  - `/images/og-resources.png`
  - `/images/og-events.png`
  - `/images/og-calculator.png`
  - `/images/og-values.png`

- Favicon files need to be created:
  - `/icon-16x16.png`
  - `/icon-32x32.png`
  - `/icon-96x96.png`

- Video metadata (durations, upload dates) may need to be updated with actual values from YouTube API
