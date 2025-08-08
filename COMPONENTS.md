### 3\. Reusable UI components

1.  **Base card**

    > **Prompt**:\
    > "Create a reusable `components/Card.tsx`. The Card component accepts children and renders a `<div>` with Tailwind classes for rounded corners, shadow, and padding. It should forward additional props (`...props`) to the outer div."

2.  **Hero component**

    > **Prompt**:\
    > "Develop `components/Hero.tsx` that accepts `title`, `subtitle`, `imageSrc`, `imageAlt`, `ctaLabel` and `ctaHref` props. It should display a large background image (using Next.js `<Image>` with `fill` and `object-cover`), overlay text, and a CTA button (using shadcn/ui's `Button`). Ensure the text overlay contrasts properly with the background."

3.  **ServiceCard**

    > **Prompt**:\
    > "Implement `components/ServiceCard.tsx` using `Card` as a wrapper. Accept props: `title`, `description`, `icon` (React component or SVG) and `href`. Inside the card, render the icon, title, description and a 'Learn more' link. Add hover and focus states."

4.  **TeamMemberCard**

    > **Prompt**:\
    > "Create `components/TeamMemberCard.tsx` that takes `name`, `role`, `photo`, and `bio` props. Use Next.js `<Image>` for the photo (with specified width/height and alt text). Display the member's name and role prominently, and include a short bio. Use `Card` for consistent styling."

5.  **ResourceCard**

    > **Prompt**:\
    > "Generate `components/ResourceCard.tsx`. It should accept `title`, `description`, `fileType`, `fileSize`, and `downloadUrl`. The card displays the title, description and a button to download. Use accessible labels (e.g., visually hidden text describing file type and size for screen readers)."

6.  **EventCard**

    > **Prompt**:\
    > "Write `components/EventCard.tsx` that accepts `title`, `date`, `location`, `description`, and `registerUrl`. It should display the date wrapped in a `<time>` element (with ISO datetime), the event details and a registration CTA. Highlight past events with a different style (via a `past` prop)."

7.  **PostPreview**

    > **Prompt**:\
    > "Create `components/PostPreview.tsx`. Props: `title`, `excerpt`, `slug`, `date`, and `tags`. Render the title as a link to `/blog/[slug]`, display the excerpt and publication date, and show tags as badges. Use semantic HTML and Tailwind for spacing."

8.  **NavigationBreadcrumbs**

    > **Prompt**:\
    > "Build `components/NavigationBreadcrumbs.tsx` that accepts an array of items (`{ label: string; href: string }`). Render an ordered list inside a `<nav aria-label=\"breadcrumb\">`. Separate items with an SVG slash or `>` and use Tailwind classes. The final breadcrumb should be marked with `aria-current=\"page\"`."

9.  **CallToAction**

    > **Prompt**:\
    > "Implement `components/CallToAction.tsx` with props `title`, `description`, `buttonLabel` and `buttonUrl`. Render a section with centered text, optional icon and a CTA button. Make sure this component is reusable on different pages (home, resources, etc.)."

10. **Pagination component**

    > **Prompt**:\
    > "Create `components/Pagination.tsx` that accepts `currentPage`, `totalPages`, and a callback or `generateUrl` function. Render previous/next buttons and numbered page links. Disable navigation appropriately when on the first or last page. Apply accessible labels for screen readers."

11. **Contact form**

    > **Prompt**:\
    > "Develop `components/ContactForm.tsx` using shadcn/ui's form primitives. Include fields for name, email, subject and message. Associate each `<input>` with a `<label>` using `htmlFor`. Implement client‑side validation (e.g., required fields, email pattern) and display accessible error messages. On submit, call `/api/contact` via `fetch`. Implement a loading state and success/error feedback to the user."

12. **MarkdownRenderer**

    > **Prompt**:\
    > "Write `components/MarkdownRenderer.tsx` that uses `next-mdx-remote` to render markdown/MDX content. Define custom components for headings, paragraphs, links, lists, code blocks, etc., mapping them to shadcn/ui equivalents (e.g., `Heading`, `Text`, `CodeBlock`). Accept a `content` prop containing the serialized MDX."

13. **Utilities for content**

    > **Prompt**:\
    > "Create `lib/posts.ts`, `lib/events.ts` and `lib/resources.ts` utilities.\
    > -- `posts.ts` should provide `getPostSlugs`, `getPostBySlug`, and `getAllPosts` using a local `content/blog` directory or an external CMS.\
    > -- `events.ts` should include functions to get upcoming and past events from a JSON or API.\
    > -- `resources.ts` should fetch resource metadata (title, description, file info) from a JSON or CMS.\
    > Each function should return properly typed objects for use in page components."