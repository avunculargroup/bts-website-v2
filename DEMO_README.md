# Component Demo Page

This project includes a comprehensive demo page that showcases all available components for the BTS corporate website.

## Accessing the Demo Page

The demo page is available at `/demo` and can be accessed by:

1. **Direct URL**: Navigate to `http://localhost:3000/demo` when running the development server
2. **Navigation Menu**: Click on the "Demo" link in the main navigation header
3. **Manual Navigation**: Type `/demo` in your browser's address bar

## What's Included

The demo page displays all available components with sample data:

### Layout Components
- **Header** - Main navigation with logo and menu
- **Footer** - Site footer with links and information
- **Container** - Utility wrapper for consistent spacing

### Content Components
- **Hero** - Hero section with title, subtitle, and CTA button
- **ServiceCard** - Service showcase cards with icons
- **TeamMemberCard** - Team member profile cards
- **ResourceCard** - Downloadable resource cards
- **EventCard** - Event information cards
- **PostPreview** - Blog post preview cards
- **Card** - Base card component for custom content

### Interactive Components
- **ContactForm** - Functional contact form with validation
- **NavigationBreadcrumbs** - Breadcrumb navigation
- **Pagination** - Page navigation component
- **CallToAction** - Call-to-action sections

### Utility Components
- **MarkdownRenderer** - Markdown content renderer

## Sample Data

Each component is populated with realistic sample data including:
- Sample services (Strategic Consulting, Digital Innovation, Process Optimisation)
- Sample team members (CEO, CTO, Head of Operations)
- Sample resources (Industry Reports, Guides, Case Studies)
- Sample events (Business Summit, Workshops, Forums)
- Sample blog posts with tags and excerpts
- Sample markdown content with various formatting

## Styling

The demo page uses:
- **Tailwind CSS** for responsive design
- **shadcn/ui** components for consistent UI elements
- **Alternating backgrounds** (white/gray) for visual separation
- **Responsive grid layouts** that adapt to different screen sizes
- **Proper spacing** and typography hierarchy

## Development

To modify the demo page:
1. Edit `src/app/demo/page.tsx`
2. Update sample data in the component
3. Add new component sections as needed
4. Customize styling and layout

## Notes

- All placeholder images use `https://via.placeholder.com/` for demonstration
- Links point to `#` for demo purposes
- The contact form submits to `/api/contact` (ensure this endpoint exists)
- Components use Australian English spelling conventions
- All components are fully responsive and accessible
