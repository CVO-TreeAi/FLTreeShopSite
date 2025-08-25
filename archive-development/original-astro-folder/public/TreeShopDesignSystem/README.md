# TreeShopBlueWhite Design System

A comprehensive design system for The Tree Shop brand, featuring professional forestry service aesthetics.

## 🎯 Brand Identity

**The Tree Shop** represents professionalism, reliability, and expertise in forestry mulching and land clearing services. Our design system reflects these values through clean aesthetics, trustworthy blues, and nature-inspired elements.

## 🎨 Color Palette

### Primary Colors
```css
--treeshop-blue: #2563eb         /* Primary brand blue */
--treeshop-blue-dark: #1d4ed8    /* Darker blue for hover states */
--treeshop-blue-light: #3b82f6   /* Light blue for accents */
--treeshop-blue-50: #eff6ff      /* Very light blue backgrounds */
```

### Secondary Colors  
```css
--treeshop-white: #ffffff        /* Pure white */
--treeshop-gray-50: #f9fafb      /* Light gray backgrounds */
--treeshop-gray-100: #f3f4f6     /* Section dividers */
--treeshop-gray-200: #e5e7eb     /* Borders */
--treeshop-gray-600: #4b5563     /* Secondary text */
--treeshop-gray-800: #1f2937     /* Primary text */
--treeshop-gray-900: #111827     /* Headers */
```

### Accent Colors
```css
--treeshop-green: #10b981        /* Success states */
--treeshop-orange: #f59e0b       /* Warning/attention */
--treeshop-red: #ef4444          /* Error states */
```

## ✍️ Typography

### Font Stack
- **Primary**: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Display**: 'Playfair Display', Georgia, serif (for elegant headers)
- **Code**: 'JetBrains Mono', 'Fira Code', monospace

### Type Scale
```css
/* Display Typography */
--text-display-2xl: 4.5rem    /* 72px - Hero headlines */
--text-display-xl: 3.75rem    /* 60px - Page headers */
--text-display-lg: 3rem       /* 48px - Section headers */

/* Heading Typography */
--text-4xl: 2.25rem           /* 36px - h1 */
--text-3xl: 1.875rem          /* 30px - h2 */
--text-2xl: 1.5rem            /* 24px - h3 */
--text-xl: 1.25rem            /* 20px - h4 */
--text-lg: 1.125rem           /* 18px - h5 */

/* Body Typography */
--text-base: 1rem             /* 16px - Body text */
--text-sm: 0.875rem           /* 14px - Small text */
--text-xs: 0.75rem            /* 12px - Captions */
```

## 🧩 Component Library

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--treeshop-blue);
  color: var(--treeshop-white);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--treeshop-blue-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--treeshop-blue);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid var(--treeshop-blue);
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--treeshop-blue);
  color: var(--treeshop-white);
  transform: translateY(-1px);
}
```

### Cards
```css
.treeshop-card {
  background: var(--treeshop-white);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 24px;
  border: 1px solid var(--treeshop-gray-200);
  transition: all 0.3s ease;
}

.treeshop-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--treeshop-blue-light);
}
```

## 📐 Spacing System

```css
/* Consistent spacing scale */
--space-1: 0.25rem    /* 4px */
--space-2: 0.5rem     /* 8px */
--space-3: 0.75rem    /* 12px */
--space-4: 1rem       /* 16px */
--space-5: 1.25rem    /* 20px */
--space-6: 1.5rem     /* 24px */
--space-8: 2rem       /* 32px */
--space-10: 2.5rem    /* 40px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-20: 5rem      /* 80px */
--space-24: 6rem      /* 96px */
```

## 🌊 Animations & Effects

### Smooth Transitions
```css
.treeshop-transition {
  transition: all 0.2s ease;
}

.treeshop-transition-slow {
  transition: all 0.3s ease;
}

.treeshop-hover-lift:hover {
  transform: translateY(-2px);
}

.treeshop-hover-scale:hover {
  transform: scale(1.02);
}
```

### Gradient Backgrounds
```css
.treeshop-gradient-primary {
  background: linear-gradient(135deg, var(--treeshop-blue), var(--treeshop-blue-dark));
}

.treeshop-gradient-light {
  background: linear-gradient(135deg, var(--treeshop-blue-50), var(--treeshop-white));
}
```

## 📱 Responsive Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 640px    /* Small devices */
--breakpoint-md: 768px    /* Medium devices */
--breakpoint-lg: 1024px   /* Large devices */
--breakpoint-xl: 1280px   /* Extra large devices */
--breakpoint-2xl: 1536px  /* 2X large devices */
```

## 🎭 Component Patterns

### Navigation
- Sticky header with gradient background
- Mobile hamburger menu
- Smooth scroll animations
- Blue accent on active states

### Hero Sections  
- Full-screen video backgrounds
- Overlay with 40% black opacity
- Centered white text
- Large call-to-action buttons

### Service Cards
- Image with overlay on hover
- Blue accent colors
- Subtle shadows and hover effects
- Clear typography hierarchy

### Testimonials
- Card-based design
- Carousel with smooth transitions
- Quote marks as visual elements
- Blue accent for client names

## 🌿 Brand Voice & Tone

- **Professional** but approachable
- **Confident** in expertise
- **Honest** and transparent
- **Focused** on quality results
- **Florida-friendly** and local

---

This design system ensures consistency across all TreeShop digital properties while maintaining the professional, trustworthy aesthetic that reflects the quality of your forestry services.