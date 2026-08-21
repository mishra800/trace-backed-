# Sophos Page Design Reference Guide

## Visual Design Improvements at a Glance

### 1. Award Section
```
┌─────────────────────────────────────────────────────────┐
│  🏆 CELEBRATING EXCELLENCE                              │
│                                                          │
│  Sophos Partner of the Year 2025                        │
│  India & SAARC                                          │
│                                                          │
│  ✓ Award-Winning Partner                               │
│  ✓ Platinum Partner for over a Decade                  │
│  ✓ 1000+ Successful Deployments                        │
│  ✓ 15+ Certified Engineers                             │
│                                                          │
│  [Award Image - 650px max height]                       │
│  Enhanced with 4px border + glow effect                │
└─────────────────────────────────────────────────────────┘
```

**Key Improvements:**
- Larger award image (450-650px)
- Enhanced border with glow (4px, cyan accent)
- Better shadow layers
- Hover scale effect
- Improved filters (brightness 1.15, contrast 1.1)

---

### 2. Platinum Partner Stats
```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  10+  |  1000+  |  15+  |  #1                           │
│  Years| Deploy- | Cert. | Partner                       │
│  Plat.| ments   | Eng.  | SAARC                         │
│                                                          │
│  [Gradient background with cyan/green accents]          │
└─────────────────────────────────────────────────────────┘
```

**Key Improvements:**
- Stat numbers: 3rem, weight 900
- Gradient background
- Divider lines between stats
- Better visual separation
- Responsive flex layout

---

### 3. Feature Cards
```
┌──────────────────────────────┐
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔│  ← Top border glow on hover
│                              │
│  🌍  Global Reach            │
│                              │
│  Protecting organizations    │
│  across 150+ countries       │
│                              │
│  #1 PARTNER IN SAARC         │
│                              │
└──────────────────────────────┘
```

**Key Improvements:**
- Top border glow animation (3px gradient)
- Larger lift on hover (8px)
- Better shadows (25px)
- Icon scale/rotate animation
- Improved padding (36px)

---

### 4. Certification Cards
```
┌─────────────────────────────────────────┐
│ 🔥 Firewall Expertise                   │
│    ENTERPRISE GRADE                     │
├─────────────────────────────────────────┤
│ • Sophos Firewall Engineer              │
│   Advanced configuration & deployment   │
│                                         │
│ • Sophos Firewall Architect             │
│   Enterprise-scale design               │
│                                         │
│ • XGS Series Specialist                 │
│   High-performance implementation       │
└─────────────────────────────────────────┘
```

**Key Improvements:**
- Color-coded headers (firewall, endpoint, cloud, etc.)
- Pill-based certification list
- Hover effects with translation
- Better visual hierarchy
- Responsive grid layout

---

### 5. Hero Section
```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  🛡️  Award-Winning Sophos Partner                       │
│                                                          │
│  Your Trusted Sophos Partner                            │
│                                                          │
│  Recognized as Partner of the Year 2025 for India &     │
│  SAARC, delivering world-class cybersecurity solutions  │
│                                                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 600K+  │  100M+  │  500+                        │   │
│  │ Orgs   │ Users   │ Experts                      │   │
│  │ Protected                                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Key Improvements:**
- Increased padding (140px top)
- Better badge styling
- Stats in gradient container
- Larger stat numbers (2.8rem)
- Enhanced text shadows

---

### 6. Section Headers
```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  Why Choose Our Award-Winning Sophos Solutions?        │
│                                                          │
│  Global leader in cybersecurity delivering              │
│  next-generation protection through AI-driven           │
│  threat detection                                       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Key Improvements:**
- Font size: clamp(2rem, 4vw, 2.8rem)
- Weight: 800
- Better letter spacing (-0.02em)
- Improved line height (1.2)
- Responsive typography

---

### 7. Gradient Text Animation
```
Sophos
↓
[Cyan → Green → Blue → Cyan] (4s loop)
↓
Smooth flowing effect
```

**Key Improvements:**
- Animated gradient shift
- 4-color gradient
- Smooth 4s animation
- Creates dynamic visual interest

---

### 8. Award Highlight Section
```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  [Multiple radial gradients]                            │
│  [Better color layering]                                │
│  [Improved depth perception]                            │
│                                                          │
│  Padding: 130px top, 90px bottom                        │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Key Improvements:**
- Multiple radial gradients
- Better color layering
- Improved depth
- Increased padding

---

### 9. Strength Section
```
┌─────────────────────────────────────────┐
│ 💪 Our Strength:                        │
│                                         │
│ ✓ Experience deploying 7500/8500        │
│ ✓ 15+ years in network security         │
│ ✓ Proven execution across industries    │
└─────────────────────────────────────────┘
```

**Key Improvements:**
- Orange accent color (#f59e0b)
- Better visual hierarchy
- Inset variant for image panels
- Professional styling

---

## Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Cyan | #00C9FF | Primary accent, borders, glows |
| Green | #10B981 | Success, growth, achievements |
| Blue | #3B82F6 | Trust, security, stability |
| Orange | #f59e0b | Strength, warnings, highlights |
| Gold | #FFD700 | Awards, premium features |

### Background Colors
| Color | Usage |
|-------|-------|
| #0a0e1a | Dark base |
| #1a1f36 | Secondary dark |
| #0f1419 | Tertiary dark |
| rgba(30, 41, 59, 0.85) | Card backgrounds |

---

## Animation Effects

### 1. Top Border Glow
```css
.feature-card::after {
  height: 3px;
  background: linear-gradient(90deg, #00C9FF, #10B981, #3B82F6);
  opacity: 0 → 1 on hover;
}
```

### 2. Gradient Shift
```css
@keyframes gradient-shift {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}
```

### 3. Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### 4. Bounce
```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}
```

### 5. Shimmer
```css
@keyframes shimmer {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}
```

---

## Responsive Breakpoints

### Desktop (1920px+)
- Full-width layouts
- All animations enabled
- Maximum visual effects

### Laptop (1280-1920px)
- Optimized spacing
- Full feature set
- All animations

### Tablet Landscape (1024px)
- Adjusted font sizes
- Single column layouts
- Optimized grids

### Tablet Portrait (768px)
- Reduced padding
- Single column features
- Stacked layouts

### Mobile Large (480px)
- Compact spacing
- Vertical stat layouts
- Smaller images

### Mobile Small (360px)
- Minimal padding
- Smallest fonts
- Ultra-compact badges

---

## Key CSS Properties

### Shadows
```css
/* Award images */
box-shadow: 
  0 40px 80px rgba(0, 0, 0, 0.7),
  0 0 0 4px rgba(0, 201, 255, 0.35),
  0 0 60px rgba(0, 201, 255, 0.25);

/* Feature cards */
box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 
            0 0 30px rgba(0, 201, 255, 0.1);
```

### Borders
```css
/* Award images */
border: 4px solid rgba(0, 201, 255, 0.45);
border-radius: 25px;

/* Feature cards */
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 20px;
```

### Filters
```css
/* Award images */
filter: brightness(1.15) contrast(1.1) saturate(1.1);

/* Hover state */
filter: brightness(1.2) contrast(1.2) saturate(1.2);
```

---

## Browser Compatibility

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  

---

## Performance Notes

- All animations use CSS (no JavaScript)
- Hardware acceleration via transforms
- Optimized for mobile devices
- Fast load times
- Smooth 60fps animations

---

**Design Version**: 3.0  
**Last Updated**: May 27, 2026  
**Status**: Production Ready ✅
