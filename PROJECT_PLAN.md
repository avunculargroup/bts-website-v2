# Corporate Website Project

This repository outlines the plan for building a modern corporate website using **Next.js** with the **App Router**, **Tailwind CSS v4**, and the **shadcn/ui** component library. The site will prioritise user experience, accessibility (WCAG 2.1), performance and scalability.

## 1 Design and UX best practices

- **Simplicity and clarity** – Limit the colour palette (≈5 colours), choose legible typefaces and use white/negative space to avoid visual clutter. Only include graphics when they serve a clear purpose.
- **Responsive design (mobile‑first)** – Design the mobile layout first and ensure the site adapts gracefully to all screen sizes. Over half of visitors will access the site via mobile.
- **Intuitive navigation** – Use clear menus and search bars; avoid deep nesting. Breadcrumbs, descriptive labels and an easy‑to‑scan sitemap help users find content quickly.
- **Consistent branding** – Use the same colours, typography and tone across the site. Strategic calls‑to‑action and trust signals (e.g., security badges, testimonials) build credibility.
- **Engaging content** – Structure content using semantic HTML. High‑quality images, videos and infographics make information appealing; clear headings improve SEO and comprehension.
- **Accessibility (WCAG 2.1)** – Provide alt text for images, ensure colour contrast meets AA requirements, support keyboard navigation and use semantic HTML and ARIA roles. Test with tools like Axe and Lighthouse.

## 2 Site map

/  
├── Home (/)  
│ ├── Hero Section  
│ ├── Services Highlights  
│ ├── Latest Blog Posts  
│ ├── Upcoming Events Preview  
│ ├── Resources Teaser  
│ └── Contact Call‑to‑Action  
│  
├── Services (/services)  
│ ├── Service Category (/services/\[category\])  
│ │ └── Individual Service (/services/\[category\]/service)  
│ └── …  
│  
├── About (/about)  
│ ├── Overview & Mission  
│ ├── Mission & Vision  
│ └── Team (/about/team)  
│ └── Member Profile (/about/team/\[member\])  
│  
├── Blog (/blog)  
│ ├── Blog Home (/blog)  
│ │ ├── Categories (/blog/category/\[name\])  
│ │ └── Tags (/blog/tag/\[name\])  
│ └── Post (/blog/\[slug\])  
│  
├── Resources (/resources)  
│ ├── Reports (/resources/reports)  
│ │ └── Individual Report (/resources/reports/\[slug\])  
│ ├── Whitepapers (/resources/whitepapers)  
│ ├── Case Studies (/resources/case-studies)  
│ └── Archive (/resources/archive)  
│  
├── Events (/events)  
│ ├── Upcoming (/events/upcoming)  
│ │ └── Event Detail (/events/upcoming/\[slug\])  
│ ├── Past (/events/past)  
│ │ └── Event Recap (/events/past/\[slug\])  
│ └── Calendar Export (/events/calendar.ics)  
│  
└── Contact (/contact)  
├── Contact Form  
├── Phone & Email  
├── Map & Address  
└── FAQs (/contact/faqs)

## 3 Components and utilities

Below is a high‑level overview of the components required to build and manage the site’s content. The code for these components should be generated using Cursor or hand‑written according to your project structure.

### Layout and structure

| Component                         | Description                                                                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **GlobalLayout (app/layout.tsx)** | Wraps every page. Defines &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, and &lt;footer&gt; and provides global context (theme, metadata).   |
| **Header**                        | Contains the company logo and top navigation using shadcn/ui’s NavigationMenu. Supports responsive behaviour and keyboard accessibility. |
| **Footer**                        | Displays copyright, secondary navigation links and contact information.                                                                  |
| **Container**                     | A utility wrapper for max‑width and consistent padding across pages.                                                                     |

### Reusable UI components

| Component                 | Description                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Hero**                  | Displays a headline, subheadline, background image and CTA button on the home page.                          |
| **Card**                  | Base card component used by services, events, and resources. Provides consistent shadow, padding and border. |
| **ServiceCard**           | Extends Card; shows a service’s title, description, icon and link.                                           |
| **TeamMemberCard**        | Shows a team member’s photo, name, role and short bio.                                                       |
| **ResourceCard**          | Lists downloadable items with title, description, file type/size and a download button.                      |
| **EventCard**             | Displays event details (title, date, location, description, registration link).                              |
| **PostPreview**           | Shows a blog post preview (title, excerpt, date, tags and link).                                             |
| **NavigationBreadcrumbs** | Renders breadcrumb trails for nested pages like blog posts or events.                                        |
| **CallToAction**          | A reusable section prompting users to perform an action (e.g., contact us or download a report).             |
| **Pagination**            | Handles pagination logic and UI for lists (e.g., blog posts, resources).                                     |

### Content management utilities

| Utility              | Purpose                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------- |
| **MarkdownRenderer** | Renders MDX or markdown content using next-mdx-remote and maps standard HTML tags to shadcn/ui components. |
| **lib/posts.ts**     | Contains functions to fetch and process blog posts (e.g., getPostSlugs, getPostBySlug).                    |
| **lib/events.ts**    | Provides functions to retrieve upcoming and past events.                                                   |
| **lib/resources.ts** | Retrieves metadata and download information for resources (reports, whitepapers, etc.).                    |

### Pages and routing

- **Home** (app/page.tsx) – Assembles the hero, services preview, blog preview, events preview and CTA.
- **Services** (app/services/page.tsx) – Lists services using ServiceCard. Optional detailed pages at app/services/\[slug\].
- **About** (app/about/page.tsx) – Contains company overview, mission/vision and team profiles using TeamMemberCard.
- **Blog** (app/blog/page.tsx) – Shows post previews and supports category/tag filtering and pagination.
- **Blog Post** (app/blog/\[slug\]/page.tsx) – Renders a single post using MarkdownRenderer and breadcrumbs.
- **Resources** (app/resources/page.tsx) – Lists resources with ResourceCard and optional filters (reports, whitepapers, case studies).
- **Resource Detail** (app/resources/\[slug\]/page.tsx) – Optional page for detailed descriptions before downloads.
- **Events** (app/events/page.tsx) – Displays upcoming and past events using EventCard. Could include a calendar subscription link.
- **Event Detail** (app/events/\[slug\]/page.tsx) – Shows full event details and registration link.
- **Contact** (app/contact/page.tsx) – Contains an accessible contact form and additional contact info. Submits to an API route (app/api/contact/route.ts).

### API routes

- **Contact API** (app/api/contact/route.ts) – Handles form submissions (e.g., sending an email or storing the enquiry). Includes validation and spam protection.

## 4 Development workflow summary

1. **Initialize the project** using the Next.js App Router (npx create-next-app@latest). Install Tailwind CSS v4 and configure tokens using the @theme directive. Initialise shadcn/ui via npx shadcn-ui@latest init.
2. **Create global layout and navigation**. Use semantic HTML and Tailwind for styling; integrate shadcn/ui components for navigation and buttons.
3. **Implement pages** based on the site map. Use dynamic routing for blog posts, services, resources and events. Leverage MDX or a headless CMS for content management.
4. **Focus on accessibility** by adding alt text, contrast-aware colours, keyboard navigation, ARIA roles and skip links. Test with Axe and Lighthouse.
5. **Optimise for performance and SEO**. Use Next.js &lt;Image&gt; for responsive images, define metadata with the &lt;Head&gt; component, and add structured data (schema.org) for organisation, articles and events.
6. **Test and deploy**. Conduct unit tests and accessibility audits, set up a CI pipeline (e.g., GitHub Actions), and deploy on Vercel or similar.

For detailed prompts to guide Cursor in generating specific code sections (e.g., layout setup, component scaffolding, API routes, and testing scripts), refer to the accompanying project documentation.
