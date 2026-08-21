# Partners Page CSS - Complete Sections Guide

## Visual Structure Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    SCROLL PROGRESS BAR                       │
│                  (Fixed at top, 4px height)                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                            │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Badge | Title | Description | Stats Grid               │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  AWARD HIGHLIGHT SECTION                     │
│  ┌──────────────────────┬──────────────────────────────────┐ │
│  │ Award Content        │ Award Image with Glow           │ │
│  │ - Badge              │ - Float Animation               │ │
│  │ - Title              │ - Hover Effects                 │ │
│  │ - Description        │ - Shadow Effects                │ │
│  │ - Key Points         │                                 │ │
│  │ - Stats              │                                 │ │
│  └──────────────────────┴──────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  TROPHY DISPLAY SECTION                      │
│  ┌──────────────────────┬──────────────────────────────────┐ │
│  │ Trophy Content       │ Trophy Image with Glow          │ │
│  │ - Details            │ - Float Animation               │ │
│  │ - Information        │ - Hover Effects                 │ │
│  └──────────────────────┴──────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   WHY SOPHOS SECTION                         │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Feature Cards Grid (4 columns on desktop)              │ │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │ │
│  │ │ Card 1   │ │ Card 2   │ │ Card 3   │ │ Card 4   │   │ │
│  │ │ Icon     │ │ Icon     │ │ Icon     │ │ Icon     │   │ │
│  │ │ Title    │ │ Title    │ │ Title    │ │ Title    │   │ │
│  │ │ Desc     │ │ Desc     │ │ Desc     │ │ Desc     │   │ │
│  │ └──────────┘ └──────────┘ └──────────┘ └──────────┘   │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                PLATINUM PARTNER SECTION                      │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Stats Row with Dividers                                │ │
│  │ Award Banner with Icon and Text                        │ │
│  │ Highlights Grid (3 columns)                            │ │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐               │ │
│  │ │ Highlight│ │ Highlight│ │ Highlight│               │ │
│  │ └──────────┘ └──────────┘ └──────────┘               │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│               CERTIFICATIONS SECTION                         │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Certification Cards Grid (3 columns)                   │ │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐               │ │
│  │ │ Cert 1   │ │ Cert 2   │ │ Cert 3   │               │ │
│  │ │ Title    │ │ Title    │ │ Title    │               │ │
│  │ │ List     │ │ List     │ │ List     │               │ │
│  │ └──────────┘ └──────────┘ └──────────┘               │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   USE CASES SECTION                          │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Use Case 1 (Text Left, Image Right)                   │ │
│  │ ┌──────────────────────┬──────────────────────────────┐ │
│  │ │ Problem/Solution/    │ Image                        │ │
│  │ │ Impact/Strength      │                              │ │
│  │ └──────────────────────┴──────────────────────────────┘ │
│  │                                                         │ │
│  │ Use Case 2 (Image Left, Text Right - Reversed)        │ │
│  │ ┌──────────────────────┬──────────────────────────────┐ │
│  │ │ Image                │ Problem/Solution/            │ │
│  │ │                      │ Impact/Strength              │ │
│  │ └──────────────────────┴──────────────────────────────┘ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│            ENHANCED CLOSING STATEMENT SECTION                │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Badge | Title | Subtitle                              │ │
│  │ Solutions Grid (4 columns)                            │ │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │ │
│  │ │ Solution │ │ Solution │ │ Solution │ │ Solution │  │ │
│  │ │ Items    │ │ Items    │ │ Items    │ │ Items    │  │ │
│  │ └──────────┘ └──────────┘ └──────────┘ └──────────┘  │ │
│  │ Performance Metrics Grid                              │ │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │ │
│  │ │ Metric 1 │ │ Metric 2 │ │ Metric 3 │ │ Metric 4 │  │ │
│  │ └──────────┘ └──────────┘ └──────────┘ └──────────┘  │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  SPECIAL OFFERS SECTION                      │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Offer Highlight Box                                   │ │
│  │ - Title                                                │ │
│  │ - Offer Items Grid (3 columns)                        │ │
│  │ - CTA Button                                           │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## CSS Classes Hierarchy

### Global Classes
```
.sophos-page (Main container)
├── .scroll-progress-container
│   └── .scroll-progress-bar
├── .container (Max-width wrapper)
└── [All sections below]
```

### Hero Section
```
.sophos-hero
├── .sophos-hero-bg (Background)
├── .sophos-hero-content
│   ├── .sophos-badge
│   ├── .sophos-hero-title
│   │   └── .gradient-text
│   ├── .sophos-hero-desc
│   └── .sophos-hero-stats
│       └── .stat-item (Multiple)
│           ├── .stat-number
│           └── .stat-label
```

### Award Highlight Section
```
.sophos-award-highlight
├── .award-celebration
│   ├── .award-content
│   │   ├── .award-badge-large
│   │   ├── .award-title
│   │   ├── .award-description
│   │   ├── .award-key-points
│   │   │   └── .key-point (Multiple)
│   │   │       ├── .key-point-icon
│   │   │       └── span
│   │   └── .award-stats
│   │       └── .award-stat (Multiple)
│   │           ├── .stat-number
│   │           └── .stat-label
│   └── .award-image
│       ├── img
│       └── .award-glow
```

### Trophy Display Section
```
.award-trophy-display
├── .trophy-showcase
│   ├── .trophy-content
│   │   └── .trophy-details
│   │       └── .trophy-info
│   └── .trophy-image-container
│       ├── .trophy-image-large
│       │   ├── img
│       │   └── .trophy-glow
```

### Why Sophos Section
```
.why-sophos
├── .section-header
│   ├── h2
│   └── p
├── .sophos-features
│   └── .feature-card (Multiple)
│       ├── .partner-icon-circle
│       ├── h3
│       ├── p
│       └── .feature-highlight
│           └── .yellow-badge
└── .award-winner-badge
    ├── h3
    └── p
```

### Platinum Partner Section
```
.platinum-partner
├── .pp-section-title
│   ├── h2
│   └── p
├── .pp-stats-row
│   ├── .pp-stat (Multiple)
│   │   ├── .pp-stat-number
│   │   └── .pp-stat-label
│   └── .pp-stat-divider (Multiple)
├── .pp-award-banner
│   ├── .pp-award-icon
│   └── .pp-award-text
│       ├── strong
│       └── span
└── .pp-highlights-grid
    └── .pp-highlight-card (Multiple)
        ├── .pp-highlight-icon-wrap
        │   └── span
        └── .pp-highlight-body
            ├── h4
            └── p
```

### Certifications Section
```
.certifications
├── h2
└── .cert-grid
    └── .cert-category (Multiple)
        ├── h3
        └── ul
            └── li (Multiple)
```

### Use Cases Section
```
.use-cases
├── h2
└── .use-case (Multiple)
    └── .use-case-content
        ├── .use-case-text
        │   ├── h3
        │   └── .problem-solution
        │       ├── .problem
        │       ├── .solution
        │       ├── .impact
        │       └── .strength
        └── .use-case-image
            └── img
```

### Enhanced Closing Statement
```
.enhanced-closing-statement
├── .closing-content-enhanced
│   ├── .closing-header
│   │   ├── .closing-badge
│   │   ├── h2
│   │   └── .closing-subtitle
│   ├── .enhanced-solutions-grid
│   │   └── .solution-category (Multiple)
│   │       ├── h3
│   │       └── .solution-items
│   │           └── .solution-item-enhanced (Multiple)
│   │               ├── .solution-icon-wrapper
│   │               └── .solution-details
│   └── .performance-metrics
│       └── .metric-card (Multiple)
│           ├── .metric-icon
│           └── .metric-content
│               ├── .metric-number
│               └── .metric-label
```

### Special Offers Section
```
.special-offers
└── .offers-content
    └── .offer-highlight
        ├── h2
        ├── .award-celebration-note
        ├── .offer-items
        │   └── .offer-item (Multiple)
        │       ├── .offer-icon
        │       ├── h3
        │       └── p
        └── .cta-section
            └── .cta-button
```

---

## Color Schemes

### Sophos Partner (Orange & Cyan)
```
Primary: #eb5a0f (Orange)
Secondary: #00C9FF (Cyan)
Accent: #10B981 (Green)
Background: #0f1419, #1a1f36
Text: #ffffff, #cbd5e1
```

### HPE Partner (Green)
```
Primary: #01a982 (Green)
Secondary: #33dbb4 (Light Green)
Background: #0f1419, #1a1f36
Text: #ffffff, #cbd5e1
```

### Aruba Networking (Blue)
```
Primary: #00a4ef (Blue)
Secondary: #32d6ff (Light Blue)
Background: #0f1419, #1a1f36
Text: #ffffff, #cbd5e1
```

### Accent Colors
```
Success: #10b981 (Green)
Warning: #f59e0b (Amber)
Error: #ef4444 (Red)
Highlight: #ffeb3b (Yellow)
```

---

## Animations

### Keyframe Animations
1. **fadeInUp** - Fade in with upward movement
2. **fadeInLeft** - Fade in from left
3. **fadeInRight** - Fade in from right
4. **twinkle** - Opacity pulse
5. **bounce** - Vertical bounce
6. **float** - Vertical floating motion
7. **pulse** - Scale pulse
8. **gradient-shift** - Gradient position shift
9. **gentle-pulse** - Subtle scale pulse
10. **trophy-float** - Trophy floating animation
11. **trophy-pulse** - Trophy pulse animation
12. **scroll-up** - Scroll upward
13. **scroll-down** - Scroll downward
14. **shimmer** - Shimmer effect
15. **pulse-yellow** - Yellow badge pulse
16. **float-pattern** - Pattern floating

### Animation Delays
- Staggered animations for grid items
- 0.1s, 0.2s, 0.3s, 0.4s delays
- Creates cascading effect

---

## Responsive Breakpoints

### Desktop (1280px+)
- Full 4-column grids
- Large images and spacing
- All animations enabled

### Tablet Landscape (1024px - 1280px)
- 2-column grids
- Reduced spacing
- Optimized layouts

### Tablet Portrait (768px - 1024px)
- Single column layouts
- Reduced padding
- Smaller fonts

### Mobile (480px - 768px)
- Full-width layouts
- Minimal padding
- Touch-friendly sizes

### Small Mobile (360px - 480px)
- Compact spacing
- Smaller fonts
- Optimized images

### Extra Small (< 360px)
- Minimal padding (12px)
- Smallest fonts
- Compact layouts

---

## Accessibility Features

### Focus States
- 2px solid outline
- 2px offset
- Color: #eb5a0f

### Motion Preferences
- Respects `prefers-reduced-motion: reduce`
- Disables animations
- Maintains functionality

### High Contrast Mode
- Thicker borders
- Better visibility
- Respects `prefers-contrast: more`

### Color Contrast
- WCAG AA compliant
- Sufficient contrast ratios
- No color-only information

### Keyboard Navigation
- All elements keyboard accessible
- Logical tab order
- Visible focus indicators

---

## Performance Optimizations

### CSS Optimization
- Used `transform` and `opacity` for animations
- Added `will-change` hints
- Minimized repaints and reflows

### Animation Performance
- Hardware acceleration enabled
- Smooth 60fps animations
- Optimized transition timing

### Image Optimization
- Responsive image sizing
- Proper aspect ratios
- Lazy loading support

---

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| IE 11 | - | ⚠️ Partial |

---

## File Size & Performance

| Metric | Value |
|--------|-------|
| File Size | ~200KB |
| Gzipped | ~40KB |
| CSS Rules | 500+ |
| Selectors | 1000+ |
| Media Queries | 8 |
| Animations | 15+ |

---

## Testing Checklist

- [x] All sections render correctly
- [x] Responsive design works on all breakpoints
- [x] Animations perform smoothly
- [x] Accessibility features functional
- [x] Focus states visible
- [x] Motion preferences respected
- [x] High contrast mode supported
- [x] Color contrast WCAG AA
- [x] Keyboard navigation works
- [x] No CSS errors or warnings

---

**Last Updated**: May 27, 2026  
**Version**: 2.1  
**Status**: ✅ Production Ready
