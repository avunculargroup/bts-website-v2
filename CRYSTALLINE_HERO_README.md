# Crystalline Hero Component

A stunning, full-width hero section featuring abstract crystalline designs with 3D effects, perfect for Bitcoin Treasury Solutions.

## 🎨 Features

### Visual Elements
- **8 Geometric Crystals**: Multiple overlapping faceted shapes of varying sizes
- **3D Appearance**: CSS transforms and gradients for depth
- **Floating Animation**: Subtle rotation and floating motion
- **Glass-like Effects**: Transparency and refraction with backdrop-filter
- **Sharp Geometric Forms**: Dodecahedrons, octahedrons, and irregular polyhedra

### Color Palette
- **Primary**: Deep navy/dark blue background (`#0a0f1c`, `#1a1f2e`)
- **Accent**: Bitcoin orange gradients (`#f7931a`, `#ffb347`)
- **Highlights**: Bright white/cyan for edges (`#ffffff`, `#64ffda`)
- **Glass Effects**: Semi-transparent whites and blues with opacity 0.1-0.3

### Animation & Interactions
- **Continuous Rotation**: Multi-axis rotation (rotateX, rotateY, rotateZ)
- **Floating Motion**: Keyframe animations with different speeds (3s, 5s, 7s)
- **Mouse Parallax**: Gentle movement response to mouse position
- **Hover Effects**: Interactive scaling and enhanced glow
- **Weightless Feel**: Ethereal, floating appearance

## 🚀 Usage

### Basic Implementation
```tsx
import { CrystallineHero } from '@/components/CrystallineHero';

export default function MyPage() {
  return (
    <div>
      <CrystallineHero />
      {/* Other content */}
    </div>
  );
}
```

### Component Structure
```tsx
<CrystallineHero />
  ├── Crystal Container (perspective: 1000px)
  │   ├── Large Crystals (200x200px, background)
  │   ├── Medium Crystals (120x120px, mid-ground)
  │   └── Small Crystals (80x80px, foreground)
  ├── Noise Texture Overlay
  └── Hero Content
      ├── Title: "Bitcoin Treasury Solutions"
      ├── Subtitle: "Structured Bitcoin Learning for Australia's Professionals"
      └── CTA Buttons: "Get Started" & "Learn More"
```

## 🎯 Technical Specifications

### Dimensions
- **Width**: 100vw (full viewport width)
- **Height**: 60vh (60% of viewport height)
- **Responsive**: Scales from mobile to desktop

### Performance Features
- **60fps Animations**: Optimized for smooth performance
- **CSS Transforms**: Hardware-accelerated animations
- **Will-change**: Optimized transform properties
- **Backface-visibility**: Hidden for performance

### Browser Support
- **Modern Browsers**: Full support for CSS transforms and filters
- **Fallbacks**: Graceful degradation for older browsers
- **Reduced Motion**: Respects user preferences

## 🎨 Customization

### Colors
The component uses CSS custom properties that can be modified in `CrystallineHero.css`:

```css
/* Primary background gradient */
background: linear-gradient(to bottom right, 
  #0a0f1c, 
  #1a1f2e, 
  #0a0f1c);

/* Bitcoin orange gradients */
rgba(247, 147, 26, 0.2) /* #f7931a */
rgba(255, 179, 71, 0.3) /* #ffb347 */

/* Cyan highlights */
rgba(100, 255, 218, 0.2) /* #64ffda */
```

### Animation Speeds
Modify animation durations in the CSS:

```css
.crystal-large { animation-duration: 8s; }
.crystal-medium { animation-duration: 6s; }
.crystal-small { animation-duration: 4s; }
```

### Crystal Positioning
Adjust crystal positions by modifying the positioning classes:

```css
.crystal-bg-1 { top: 10%; left: 5%; }
.crystal-fg-1 { top: 60%; left: 20%; }
```

## 📱 Responsive Design

### Mobile Optimizations
- **Reduced Sizes**: Crystals scale down on mobile devices
- **Simplified Animations**: Reduced complexity for better performance
- **Touch Friendly**: Hover effects work on touch devices

### Breakpoints
```css
@media (max-width: 768px) {
  .crystal-large { width: 120px; height: 120px; }
  .crystal-medium { width: 80px; height: 80px; }
  .crystal-small { width: 60px; height: 60px; }
}
```

## 🔧 Development

### File Structure
```
src/components/
├── CrystallineHero.tsx      # React component
└── CrystallineHero.css      # Styles and animations
```

### Dependencies
- **React**: Hooks (useEffect, useRef)
- **Next.js**: Container component
- **CSS**: Modern CSS features (transforms, filters, animations)

### Key Technologies
- **CSS 3D Transforms**: `transform-style: preserve-3d`
- **CSS Animations**: `@keyframes float`
- **CSS Filters**: `backdrop-filter: blur()`
- **CSS Gradients**: Complex multi-color gradients
- **JavaScript**: Mouse movement tracking for parallax

## 🎭 Animation Details

### Floating Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  25% { transform: translateY(-10px) rotateX(5deg) rotateY(5deg) rotateZ(2deg); }
  50% { transform: translateY(-5px) rotateX(-2deg) rotateY(-3deg) rotateZ(-1deg); }
  75% { transform: translateY(-15px) rotateX(3deg) rotateY(-2deg) rotateZ(3deg); }
}
```

### Mouse Parallax
The component tracks mouse movement and applies subtle rotation to crystals:

```tsx
const handleMouseMove = (e: MouseEvent) => {
  const rect = heroRef.current.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  
  // Apply rotation based on mouse position
  const rotateX = (y - 0.5) * speed * 10;
  const rotateY = (x - 0.5) * speed * 10;
};
```

## 🎨 Design Philosophy

### Bitcoin Theme Integration
- **Orange Accents**: Uses Bitcoin's signature orange color
- **Professional Appearance**: Sophisticated design for financial services
- **Modern Aesthetics**: Contemporary geometric patterns
- **Trust & Innovation**: Visual representation of cutting-edge technology

### User Experience
- **Engaging**: Captures attention without overwhelming
- **Accessible**: Maintains readability of hero content
- **Performance**: Smooth animations that don't impact usability
- **Responsive**: Works seamlessly across all devices

## 🚀 Future Enhancements

### Potential Improvements
- **Interactive Crystals**: Click to reveal additional information
- **Dynamic Content**: Animated text reveals
- **Sound Effects**: Subtle audio feedback on interactions
- **Particle Systems**: Additional floating elements
- **Theme Switching**: Dark/light mode variations

### Performance Optimizations
- **WebGL**: GPU-accelerated 3D rendering
- **Canvas**: Alternative rendering method for complex animations
- **Lazy Loading**: Progressive enhancement of animations

## 📝 License

This component is part of the Bitcoin Treasury Solutions website and follows the same licensing terms as the main project.

---

**Created for**: Bitcoin Treasury Solutions  
**Purpose**: Hero section with crystalline design elements  
**Technology**: React, TypeScript, CSS3, HTML5
