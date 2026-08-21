# Use Case Slider - Design Reference

## 🎨 Visual Design Specifications

This document provides exact design specifications matching the reference image provided.

## Design Pattern: "Trusted by the Best"

### Color Palette

```
Primary Background Gradient:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Start: #0a1628 (Deep Navy Blue)
  Mid:   #1a2942 (Dark Slate Blue)
  End:   #2d4263 (Medium Slate Blue)
  Direction: 135deg diagonal
```

```
Text Colors:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Primary:   #ffffff (White)
  Secondary: rgba(255, 255, 255, 0.8)
  Tertiary:  rgba(255, 255, 255, 0.5)
  Disabled:  rgba(255, 255, 255, 0.3)
```

```
Accent Colors:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Partner Brand Color (customizable)
  Default: #3b82f6 (Blue)
  
  Examples:
  - Aruba Orange: #ff8300
  - HPE Green:    #00b08b
  - Nutanix Blue: #00a4e4
```

### Layout Structure

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│                         Use Cases:                             │
│                      Trusted by the Best                       │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │                                                          │ │
│  │  LEFT PANEL (45%)              │  RIGHT PANEL (55%)     │ │
│  │  ─────────────────             │  ──────────────────    │ │
│  │                                 │                        │ │
│  │  ┌──────────────────┐          │                        │ │
│  │  │ [i] CATEGORY     │          │    Professional        │ │
│  │  └──────────────────┘          │    Image or            │ │
│  │                                 │    Gradient            │ │
│  │  Main Use Case Title            │    Background          │ │
│  │  Goes Here in Large             │                        │ │
│  │  Bold Text                      │                        │ │
│  │                                 │                        │ │
│  │  Description paragraph          │                        │ │
│  │  explaining the use case,       │      [◄ PREV]         │ │
│  │  challenges solved, and         │                        │ │
│  │  value delivered...             │      [NEXT ►]         │ │
│  │                                 │                        │ │
│  │  ─────────────────────          │                        │ │
│  │  Client Name:                   │                        │ │
│  │  Major Corporation              │                        │ │
│  │                                 │                        │ │
│  │  Manager:                       │                        │ │
│  │  John Smith                     │                        │ │
│  │  ─────────────────────          │                        │ │
│  │                                 │                        │ │
│  │  Read full case study →         │                        │ │
│  │                                 │                        │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│                    ○  ●  ○  ○  ○  ○                           │
│                   (slide indicators)                           │
│                                                                │
│         ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐         │
│         │Logo │  │Logo │  │Logo │  │Logo │  │Logo │         │
│         └─────┘  └─────┘  └─────┘  └─────┘  └─────┘         │
│              (Trusted Partner Logos)                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Typography

```
Section Title "Use Cases:"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Font Size:   2.5rem (40px)
  Font Weight: 700 (Bold)
  Color:       #ffffff
  Spacing:     -0.02em letter spacing

Section Subtitle "Trusted by the Best"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Font Size:   1rem (16px)
  Font Weight: 400 (Regular)
  Color:       rgba(255,255,255,0.7)
  Transform:   uppercase
  Spacing:     0.1em letter spacing

Category Badge
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Font Size:   0.875rem (14px)
  Font Weight: 600 (Semi-bold)
  Color:       #60a5fa
  Transform:   uppercase
  Spacing:     0.05em letter spacing
  Background:  rgba(59,130,246,0.15)
  Border:      1px solid rgba(59,130,246,0.3)
  Radius:      50px (fully rounded)
  Padding:     10px 20px

Use Case Title
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Font Size:   2rem (32px)
  Font Weight: 700 (Bold)
  Color:       #ffffff
  Line Height: 1.2
  Spacing:     -0.01em letter spacing

Description Text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Font Size:   1rem (16px)
  Font Weight: 400 (Regular)
  Color:       rgba(255,255,255,0.8)
  Line Height: 1.7

Meta Labels
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Font Size:   0.75rem (12px)
  Font Weight: 600 (Semi-bold)
  Color:       rgba(255,255,255,0.5)
  Transform:   uppercase
  Spacing:     0.1em letter spacing

Meta Values
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Font Size:   0.95rem (15px)
  Font Weight: 500 (Medium)
  Color:       #ffffff
```

### Spacing & Dimensions

```
Section Padding
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Top:    80px
  Bottom: 100px
  Sides:  Container padding (20px)

Slider Container
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Max Width:    1400px
  Border Radius: 24px
  Min Height:   500px
  Shadow:       0 20px 60px rgba(0,0,0,0.5)

Left Panel
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Width:   45%
  Padding: 60px 50px
  Gap:     24px (between elements)

Right Panel
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Width: 55%

Navigation Arrows
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Size:          48px × 48px
  Border Radius: 50% (circle)
  Icon Size:     1.2rem (19px)
  Position:      Centered vertically
  Left Arrow:    24px from left
  Right Arrow:   24px from right

Slide Indicators (Dots)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Size:           12px × 12px
  Active Width:   32px
  Active Radius:  6px
  Gap:            12px
  Margin Top:     32px

Trusted Logos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Height:     50px
  Max Width:  140px
  Gap:        40px
  Margin Top: 60px
  Padding Top: 40px
```

### Effects & Interactions

```
Slider Container
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Box Shadow:
    - 0 20px 60px rgba(0,0,0,0.5)
    - 0 0 0 1px rgba(255,255,255,0.1)
    - inset 0 1px 0 rgba(255,255,255,0.1)
  
  Hover:
    - Transform: translateY(-4px)
    - Transition: 0.3s ease

Navigation Arrows
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Default:
    - Background: rgba(255,255,255,0.1)
    - Border: 1px solid rgba(255,255,255,0.2)
    - Backdrop Filter: blur(10px)
  
  Hover:
    - Background: var(--partner-color)
    - Border: var(--partner-color)
    - Transform: translateY(-50%) scale(1.1)
    - Shadow: 0 8px 24px rgba(0,0,0,0.3)

Slide Indicators
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Default:
    - Background: rgba(255,255,255,0.2)
  
  Hover:
    - Background: rgba(255,255,255,0.4)
    - Transform: scale(1.2)
  
  Active:
    - Background: var(--partner-color)
    - Border: 2px solid rgba(255,255,255,0.3)
    - Shadow: 0 0 16px var(--partner-color)

Read More Link
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Default:
    - Color: #60a5fa
    - Gap: 10px
  
  Hover:
    - Color: #93c5fd
    - Gap: 15px
    - Arrow Transform: translateX(4px)

Trusted Logos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Default:
    - Opacity: 0.7
    - Filter: grayscale(100%)
  
  Hover:
    - Opacity: 1
    - Filter: grayscale(0%)
```

### Gradient Overlays

```
Background Accent Radials
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Radial 1:
    - Position: 20% 30%
    - Color: rgba(59,130,246,0.1)
    - Size: 50%
  
  Radial 2:
    - Position: 80% 70%
    - Color: rgba(14,165,233,0.1)
    - Size: 50%

Image Overlay (Left fade)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  linear-gradient(
    to left,
    rgba(15,31,56,0) 0%,
    rgba(15,31,56,0.3) 50%,
    rgba(15,31,56,0.8) 100%
  )

Slider Container Background
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  linear-gradient(
    135deg,
    rgba(15,31,56,0.9) 0%,
    rgba(26,41,66,0.9) 100%
  )
```

### Animation Timings

```
Slide Transitions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Auto-play:  5000ms (5 seconds)
  
Content Entrance
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Duration:   600ms
  Easing:     ease forwards
  Stagger:    100ms per element
  
Hover Transitions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Duration:   300ms
  Easing:     ease
  
Container Lift
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Duration:   300ms
  Movement:   translateY(-4px)
```

## 📐 Responsive Breakpoints

### Desktop (> 992px)
```
Layout:       Side-by-side (45% / 55%)
Min Height:   500px
Padding:      60px 50px
Font Size:    100% (base sizes)
Navigation:   48px arrows
```

### Tablet (768px - 992px)
```
Layout:       Stacked (100% / 100%)
Min Height:   400px (image)
Padding:      50px 40px
Font Size:    95%
Navigation:   48px arrows
```

### Mobile (480px - 768px)
```
Layout:       Stacked (100% / 100%)
Min Height:   300px (image)
Padding:      30px 24px
Font Size:    90%
Navigation:   40px arrows
```

### Small Mobile (< 480px)
```
Layout:       Stacked (100% / 100%)
Min Height:   250px (image)
Padding:      24px 20px
Font Size:    85%
Navigation:   36px arrows
Border Radius: 16px
```

## 🎯 Design Principles

### 1. **Professional & Corporate**
- Clean, modern aesthetic
- Enterprise-grade visual quality
- Trust-building elements

### 2. **Readable & Clear**
- High contrast text (WCAG AA compliant)
- Generous line height (1.7)
- Clear information hierarchy

### 3. **Interactive & Engaging**
- Smooth transitions
- Responsive hover states
- Intuitive navigation

### 4. **Branded & Customizable**
- Partner color integration
- Consistent with brand guidelines
- Flexible for different industries

### 5. **Performance Optimized**
- Efficient animations
- Optimized images
- Smooth 60fps transitions

## 📊 Content Guidelines

### Title (Use Case)
```
Length:    50-80 characters
Style:     Descriptive, benefit-focused
Example:   "Deploying secure network infrastructure 
            for defence facilities"
```

### Description
```
Length:    150-200 characters
Style:     Problem + Solution + Result
Example:   "From privileged access management to 
            certificate security, the ecosystem 
            integrated seamlessly with our 
            environment, delivering 99.9% uptime."
```

### Category
```
Length:    Single word preferred
Style:     Industry or sector name
Transform: Uppercase
Examples:  "DEFENCE", "HEALTHCARE", "RETAIL"
```

### Meta Information
```
Client Name:  Company name or "Confidential"
Manager:      Role title or "Anonymous"
Preference:   Real names build more trust
```

## 🖼️ Image Composition

### Professional Photography
```
Subject Matter:
  - Business professionals collaborating
  - Technology in use
  - Industry-specific environments
  - Modern office settings
  
Avoid:
  - Stock photo clichés
  - Overly staged scenes
  - Poor lighting
  - Low resolution
```

### Color Grading
```
Tone:        Cool to neutral
Saturation:  Moderate (not oversaturated)
Contrast:    Medium-high
Lighting:    Natural or professional
```

### Composition
```
Focus:       Clear subject
Depth:       Shallow to medium depth of field
Angle:       Eye-level or slightly elevated
Space:       Room for text overlay on left
```

## ✅ Quality Checklist

### Visual Quality
- [ ] High contrast text (4.5:1 minimum)
- [ ] Smooth gradients (no banding)
- [ ] Professional images (or proper placeholders)
- [ ] Consistent spacing
- [ ] Aligned elements

### Interaction Quality
- [ ] Smooth slide transitions
- [ ] Responsive hover effects
- [ ] Clear active states
- [ ] No layout shifts
- [ ] Touch-friendly targets (44px min)

### Content Quality
- [ ] Descriptive titles
- [ ] Compelling descriptions
- [ ] Accurate client information
- [ ] Working links
- [ ] Proper grammar and spelling

### Technical Quality
- [ ] Optimized images (< 200KB)
- [ ] No console errors
- [ ] Accessible markup
- [ ] Responsive on all devices
- [ ] 60fps animations

---

**Design Version**: 1.0  
**Last Updated**: June 7, 2026  
**Based On**: Reference image provided  
**Status**: Production Ready
