# Styling Documentation

This document outlines the comprehensive styling system implemented for the Avuncular Group corporate website. The design system uses Tailwind CSS v4 with custom CSS variables, ensuring consistency, maintainability, and accessibility across all components.

## Table of Contents

- [Color System](#color-system)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Components](#components)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)

## Color System

### Primary Colors - Navy

Our primary color palette uses a sophisticated navy blue scheme that conveys trust, professionalism, and stability.

| Shade | Hex Code | Usage |
|-------|----------|-------|
| 50    | `#f0f4f8` | Light backgrounds, subtle highlights |
| 100   | `#d9e2ec` | Hover states, secondary backgrounds |
| 200   | `#bcccdc` | Borders, dividers |
| 300   | `#9fb3c8` | Disabled states, tertiary elements |
| 400   | `#829ab1` | Secondary text, icons |
| 500   | `#627d98` | Primary text, main elements |
| 600   | `#486581` | Links, interactive elements |
| 700   | `#334e68` | Hover states, emphasis |
| 800   | `#243b53` | Headings, important text |
| 900   | `#102a43` | Primary headings, branding |
| 950   | `#0a1f2e` | Darkest accents, special elements |

### Secondary Colors - Gold

The secondary palette uses warm gold tones that complement the navy primary colors and add warmth to the design.

| Shade | Hex Code | Usage |
|-------|----------|-------|
| 50    | `#fffbf0` | Light backgrounds, warnings |
| 100   | `#fef3c7` | Subtle highlights, alerts |
| 200   | `#fde68a` | Borders, dividers |
| 300   | `#fcd34d` | Icons, secondary elements |
| 400   | `#fbbf24` | Secondary actions |
| 500   | `#f59e0b` | Secondary buttons, highlights |
| 600   | `#d97706` | Hover states, emphasis |
| 700   | `#b45309` | Important secondary elements |
| 800   | `#92400e` | Secondary headings |
| 900   | `#78350f` | Dark secondary elements |
| 950   | `#451a03` | Darkest secondary accents |

### Accent Colors - Orange

The accent palette uses vibrant orange tones for calls-to-action and emphasis.

| Shade | Hex Code | Usage |
|-------|----------|-------|
| 50    | `#fff7ed` | Light backgrounds, alerts |
| 100   | `#ffedd5` | Subtle highlights |
| 200   | `#fed7aa` | Borders, dividers |
| 300   | `#fdba74` | Icons, tertiary elements |
| 400   | `#fb923c` | Secondary actions |
| 500   | `#f97316` | Primary CTAs, emphasis |
| 600   | `#ea580c` | Hover states, important actions |
| 700   | `#c2410c` | Critical actions, warnings |
| 800   | `#9a3412` | Error states, destructive actions |
| 900   | `#7c2d12` | Dark accent elements |
| 950   | `#431407` | Darkest accent elements |

### Semantic Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Background | `#fefefe` | Main page background |
| Foreground | `#102a43` | Primary text color |
| Card | `#ffffff` | Card backgrounds |
| Card Foreground | `#102a43` | Card text |
| Popover | `#ffffff` | Popover backgrounds |
| Popover Foreground | `#102a43` | Popover text |
| Muted | `#f8fafc` | Muted backgrounds |
| Muted Foreground | `#64748b` | Muted text |
| Destructive | `#ef4444` | Error states, delete actions |
| Destructive Foreground | `#ffffff` | Text on destructive elements |
| Border | `#e2e8f0` | Borders, dividers |
| Input | `#e2e8f0` | Input field borders |
| Ring | `#334e68` | Focus rings |

## Typography

### Font Stack

Our typography system uses Source Sans 3 for headings and Neuton for body text, providing a modern and elegant reading experience.

#### Font Variables

```css
--font-sans: Source Sans 3, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
--font-display: Source Sans 3, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-body: Neuton, serif;
```

#### Font Usage

| Font | Usage | Tailwind Class |
|------|-------|----------------|
| `font-sans` | General purpose text, UI elements | `font-sans` |
| `font-mono` | Code, technical content | `font-mono` |
| `font-display` | Headings, titles, display text | `font-display` |
| `font-body` | Body text, paragraphs, content | `font-body` |

### Typography Scale

| Element | Font Size | Font Weight | Line Height | Usage | Font Family |
|---------|-----------|-------------|-------------|-------|-------------|
| h1 | `2.25rem` (36px) | 700 | 1.2 | Main page headings | Source Sans 3 |
| h2 | `1.875rem` (30px) | 600 | 1.2 | Section headings | Source Sans 3 |
| h3 | `1.5rem` (24px) | 600 | 1.2 | Subsection headings | Source Sans 3 |
| h4 | `1.25rem` (20px) | 600 | 1.2 | Card headings | Source Sans 3 |
| h5 | `1.125rem` (18px) | 600 | 1.2 | Small headings | Source Sans 3 |
| h6 | `1rem` (16px) | 600 | 1.2 | Minor headings | Source Sans 3 |
| Body | `1rem` (16px) | 400 | 1.6 | Body text, paragraphs | Neuton |

## Spacing & Layout

### Container System

We use a flexible container system for consistent layouts across the site.

#### Container Component

```typescript
interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'screen';
  center?: boolean;
  padding?: string;
  withPadding?: boolean;
}
```

#### Default Container Settings

- **Max Width**: `max-w-7xl` (80rem / 1280px)
- **Centering**: Enabled by default
- **Padding**: `px-4 sm:px-6 lg:px-8` (responsive)
- **Breakpoints**: Mobile-first responsive design

### Spacing Scale

Our spacing system follows Tailwind's default scale:

| Scale | Value | Usage |
|-------|-------|-------|
| 0 | `0px` | No spacing |
| 1 | `0.25rem` (4px) | Minimal spacing |
| 2 | `0.5rem` (8px) | Small spacing |
| 4 | `1rem` (16px) | Base spacing |
| 6 | `1.5rem` (24px) | Medium spacing |
| 8 | `2rem` (32px) | Large spacing |
| 12 | `3rem` (48px) | Extra large spacing |
| 16 | `4rem` (64px) | Section spacing |

## Components

### Header Component

The header uses a sticky navigation with backdrop blur and responsive design.

```typescript
// Features
- Sticky positioning with backdrop blur
- Responsive navigation menu
- Mobile hamburger menu
- CTA button integration
- Accessibility compliant
```

### Footer Component

The footer provides comprehensive site information and navigation.

```typescript
// Features
- Company information and branding
- Quick links navigation
- Resources section
- Contact information
- Copyright and legal links
- Responsive grid layout
```

### Container Component

A utility component for consistent max-width and responsive padding.

```typescript
// Usage Examples
<Container>Default container</Container>
<Container maxWidth="4xl">Narrower content</Container>
<Container withPadding={false}>Full-width content</Container>
<Container padding="px-8 py-4">Custom padding</Container>
```

## Usage Examples

### Color Usage

```jsx
// Primary colors
<div className="bg-primary-600 text-white">Primary button</div>
<div className="text-primary-700">Primary text</div>
<div className="border-primary-200">Primary border</div>

// Secondary colors
<div className="bg-secondary-500 text-white">Secondary button</div>
<div className="text-secondary-700">Secondary text</div>

// Accent colors
<div className="bg-accent-500 text-white">CTA button</div>
<div className="text-accent-600">Accent text</div>

// Semantic colors
<div className="bg-background text-foreground">Main content</div>
<div className="bg-card text-card-foreground">Card content</div>
<div className="bg-muted text-muted-foreground">Muted content</div>
```

### Typography Usage

```jsx
// Headings
<h1 className="font-display text-4xl font-bold">Main Heading</h1>
<h2 className="font-display text-3xl font-semibold">Section Heading</h2>
<h3 className="font-display text-2xl font-semibold">Subsection Heading</h3>

// Body text
<p className="font-body text-base leading-relaxed">Body paragraph</p>
<p className="font-mono text-sm">Code or technical content</p>

// Links
<a className="text-primary-600 hover:text-primary-700 transition-colors">Link text</a>
```

### Layout Usage

```jsx
// Container usage
<Container>
  <h1>Page content</h1>
  <p>This content is centered and has responsive padding.</p>
</Container>

// Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-card p-6 rounded-lg">Card 1</div>
  <div className="bg-card p-6 rounded-lg">Card 2</div>
  <div className="bg-card p-6 rounded-lg">Card 3</div>
</div>
```

## Best Practices

### Color Usage Guidelines

1. **Primary Colors**: Use for main actions, branding, and important elements
2. **Secondary Colors**: Use for supporting elements, highlights, and secondary actions
3. **Accent Colors**: Use sparingly for calls-to-action and emphasis
4. **Semantic Colors**: Use for their intended purpose (background, foreground, etc.)

### Typography Guidelines

1. **Headings**: Use `font-display` (Source Sans 3) for all headings (h1-h6)
2. **Body Text**: Use `font-body` (Neuton) for paragraphs and general content
3. **Code**: Use `font-mono` for code snippets and technical content
4. **Hierarchy**: Maintain clear visual hierarchy with consistent sizing
5. **Font Pairing**: Source Sans 3 (sans-serif) for headings pairs elegantly with Neuton (serif) for body text

### Accessibility

1. **Color Contrast**: All color combinations meet WCAG 2.1 AA standards
2. **Focus States**: All interactive elements have visible focus indicators
3. **Typography**: Font sizes and line heights support readability
4. **Semantic HTML**: Use proper heading hierarchy and semantic elements

### Performance

1. **Font Loading**: Source Sans 3 and Neuton fonts are loaded via Next.js for optimal performance
2. **CSS Variables**: Colors and fonts are defined as CSS variables for efficient updates
3. **Tailwind Integration**: Design tokens are integrated with Tailwind for consistent usage
4. **No Dark Mode**: Single theme reduces complexity and improves performance

## File Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   └── layout.tsx           # Root layout with font loading
├── components/
│   ├── Container.tsx        # Layout utility component
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Site footer
└── lib/
    └── utils.ts             # Utility functions (cn)
```

## Maintenance

### Adding New Colors

1. Add CSS variables to `:root` in `globals.css`
2. Add corresponding entries in `@theme inline`
3. Update `tailwind.config.js` if needed
4. Document in this file

### Adding New Fonts

1. Load font in `layout.tsx` using Next.js font loading
2. Add CSS variables to `:root` in `globals.css`
3. Update `@theme inline` section
4. Update `tailwind.config.js`
5. Document in this file

### Updating Design Tokens

1. Modify CSS variables in `globals.css`
2. Update any hardcoded values in components
3. Test across all breakpoints
4. Update documentation

This styling system provides a solid foundation for building a professional, accessible, and maintainable corporate website.
