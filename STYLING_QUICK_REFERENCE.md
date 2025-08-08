# Styling Quick Reference

A quick reference guide for the Avuncular Group styling system.

## Colors

### Primary (Navy)
```css
bg-primary-600    /* Main primary color */
text-primary-700  /* Primary text */
border-primary-200 /* Primary borders */
```

### Secondary (Gold)
```css
bg-secondary-500  /* Secondary buttons */
text-secondary-700 /* Secondary text */
border-secondary-200 /* Secondary borders */
```

### Accent (Orange)
```css
bg-accent-500     /* CTAs, emphasis */
text-accent-600   /* Accent text */
border-accent-200 /* Accent borders */
```

### Semantic
```css
bg-background     /* Page background */
text-foreground   /* Main text */
bg-card           /* Card backgrounds */
text-muted-foreground /* Muted text */
```

## Typography

### Font Classes
```css
font-sans         /* General text */
font-display      /* Headings */
font-body         /* Body text */
font-mono         /* Code */
```

### Heading Sizes
```css
text-4xl font-bold    /* h1 */
text-3xl font-semibold /* h2 */
text-2xl font-semibold /* h3 */
text-xl font-semibold  /* h4 */
text-lg font-semibold  /* h5 */
text-base font-semibold /* h6 */
```

## Layout

### Container
```jsx
<Container>Default container</Container>
<Container maxWidth="4xl">Narrower content</Container>
<Container withPadding={false}>Full-width</Container>
```

### Spacing
```css
p-4               /* 1rem padding */
px-6              /* Horizontal padding */
py-8              /* Vertical padding */
gap-6             /* Grid/flex gap */
space-y-4         /* Vertical spacing */
```

## Components

### Header
```jsx
<Header />
// Features: Sticky, responsive, mobile menu
```

### Footer
```jsx
<Footer />
// Features: Grid layout, links, contact info
```

### Button
```jsx
<Button>Default button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

## Common Patterns

### Card Layout
```jsx
<div className="bg-card p-6 rounded-lg shadow-sm">
  <h3 className="font-display text-xl font-semibold mb-4">Card Title</h3>
  <p className="text-muted-foreground">Card content</p>
</div>
```

### Section Layout
```jsx
<section className="py-12">
  <Container>
    <h2 className="font-display text-3xl font-semibold mb-8">Section Title</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Content */}
    </div>
  </Container>
</section>
```

### Navigation Link
```jsx
<Link className="text-primary-600 hover:text-primary-700 transition-colors">
  Navigation Link
</Link>
```

## Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

## Accessibility

### Focus States
```css
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
```

### Screen Reader
```jsx
<span className="sr-only">Screen reader text</span>
```

## Performance Tips

1. Use CSS variables for colors (already implemented)
2. Use Tailwind classes for consistent spacing
3. Use Container component for layout consistency
4. Use semantic HTML elements
5. Test across all breakpoints

## File Locations

- **Global Styles**: `src/app/globals.css`
- **Tailwind Config**: `tailwind.config.js`
- **Container Component**: `src/components/Container.tsx`
- **Header Component**: `src/components/Header.tsx`
- **Footer Component**: `src/components/Footer.tsx`
- **Full Documentation**: `STYLING.md`
