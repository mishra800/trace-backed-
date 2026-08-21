# Professional Use Case Slider Implementation Guide

## Overview
A modern, professional use case slider component with a dark blue gradient design inspired by "Trusted by the Best" pattern. This component displays use cases in an elegant slider format with professional images, content overlays, and smooth transitions.

## Design Features

### Visual Design
- **Dark Gradient Background**: Linear gradient from #0a1628 to #2d4263
- **Professional Layout**: Split view with content on left, image on right
- **Glass Morphism Effects**: Backdrop blur and semi-transparent panels
- **Smooth Animations**: Slide transitions, hover effects, and entrance animations
- **Responsive Design**: Mobile-first approach with breakpoints

### Interaction Features
- **Auto-play Slider**: Advances every 5 seconds (pauses on interaction)
- **Navigation Controls**: Previous/Next arrows with hover effects
- **Dot Indicators**: Visual feedback for current slide position
- **Hover Effects**: Subtle lift and glow effects
- **Keyboard Accessible**: ARIA labels for screen readers

## File Structure

```
src/
├── components/
│   ├── UseCaseSlider.jsx       # Main slider component
│   └── UseCaseSlider.css       # Slider styles
└── pages/
    └── partners/
        └── Aruba.jsx           # Example implementation
```

## Component API

### Props

```jsx
<UseCaseSlider 
  useCases={arrayOfUseCases}   // Required: Array of use case objects
  partnerColor="#ff8300"       // Optional: Brand color for accents
/>
```

### Use Case Object Structure

```javascript
{
  id: 'unique-id',                    // Unique identifier
  category: 'INDUSTRY',               // Industry category (uppercase)
  icon: 'fas fa-icon-name',          // FontAwesome icon class
  title: 'Use case title',           // Main heading
  description: 'Full description',   // Detailed text
  clientName: 'Client Name',         // Optional: Client identifier
  manager: 'Manager Name',           // Optional: Point of contact
  image: '/path/to/image.jpg',       // Optional: Background image URL
  linkTo: '/case-studies#anchor',    // Optional: Link to detailed case study
  trustedLogos: [                    // Optional: Array of trusted partner logos
    { 
      name: 'Company Name', 
      image: '/path/to/logo.png' 
    }
  ]
}
```

## Implementation Steps

### Step 1: Import the Component

```jsx
import UseCaseSlider from '../../components/UseCaseSlider';
```

### Step 2: Define Use Case Data

```jsx
const useCases = [
  {
    id: 'defence',
    category: 'DEFENCE',
    icon: 'fas fa-shield-alt',
    title: 'Deploying secure network infrastructure',
    description: 'Complete description of the use case...',
    clientName: 'Major Defence Organization',
    manager: 'Senior Network Security Manager',
    image: '/assets/images/use-cases/defence.jpg',
    linkTo: '/case-studies#defence',
    trustedLogos: [
      { name: 'Company A', image: '/assets/logos/company-a.png' },
      { name: 'Company B', image: '/assets/logos/company-b.png' }
    ]
  },
  // ... more use cases
];
```

### Step 3: Use the Component

```jsx
export default function PartnerPage() {
  return (
    <div className="partner-page">
      {/* Other sections */}
      
      <UseCaseSlider 
        useCases={useCases}
        partnerColor="#ff8300"
      />
      
      {/* Other sections */}
    </div>
  );
}
```

## Image Guidelines

### Recommended Image Specifications
- **Dimensions**: 1200 x 800 pixels (3:2 aspect ratio)
- **Format**: JPG or WebP for photos
- **File Size**: < 200KB (optimized for web)
- **Subject**: Professional business scenes, technology, industry-specific imagery

### Image Categories by Industry

1. **Defence**: Security operations, control rooms, surveillance
2. **Education**: Campus scenes, students collaborating, digital classrooms
3. **Retail**: Store interiors, POS systems, customer service
4. **Banking**: Banking halls, secure vaults, financial technology
5. **Healthcare**: Hospital environments, medical equipment, patient care
6. **Manufacturing**: Factory floors, production lines, IoT devices
7. **Enterprise**: Office environments, meeting rooms, collaboration

### Placeholder Handling
If no image is provided, the component automatically shows:
- Gradient background matching the theme
- Large icon representation
- Same professional styling

## Color Customization

### Partner-Specific Colors

```javascript
// Aruba Orange
partnerColor="#ff8300"

// HPE Green
partnerColor="#00b08b"

// Nutanix Blue
partnerColor="#00a4e4"

// Custom colors
partnerColor="#your-hex-color"
```

The `partnerColor` prop affects:
- Navigation arrow hover states
- Active dot indicator
- Accent glows and highlights

## CSS Variables

The component uses CSS variables for easy customization:

```css
--partner-color: #3b82f6;  /* Brand accent color */
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Desktop    | > 992px | Side-by-side layout, full spacing |
| Tablet     | 768px - 992px | Stacked layout, reduced padding |
| Mobile     | < 768px | Compact layout, smaller text |
| Small      | < 480px | Minimal layout, optimized touch targets |

## Best Practices

### Content Guidelines

1. **Titles**: Keep under 80 characters for readability
2. **Descriptions**: 150-200 characters for optimal display
3. **Categories**: Use single-word industry labels (uppercase)
4. **Client Names**: Use "Confidential" if NDAs prevent disclosure
5. **Manager Names**: Use "Anonymous" if privacy is required

### Performance Optimization

1. **Lazy Load Images**: Use loading="lazy" attribute
2. **Optimize Images**: Compress before upload
3. **Limit Slides**: Keep between 4-8 use cases per slider
4. **Use WebP**: Modern format for better compression

### Accessibility

1. **Alt Text**: Always provide descriptive alt text for images
2. **ARIA Labels**: Navigation controls include proper labels
3. **Keyboard Navigation**: Arrow keys work for slide navigation
4. **Color Contrast**: Text meets WCAG AA standards

## Migration from Old Format

If you have existing use case cards, follow this pattern:

### Old Format
```jsx
<div className="use-case-card">
  <h3>Title</h3>
  <p>Description</p>
  <Link to="/more">Read More</Link>
</div>
```

### New Format
```jsx
{
  id: 'use-case-id',
  category: 'INDUSTRY',
  icon: 'fas fa-icon',
  title: 'Title',
  description: 'Description',
  linkTo: '/more'
}
```

## Troubleshooting

### Images Not Loading
- Check image paths are correct
- Verify images exist in `/public/assets/images/`
- Use browser DevTools Network tab to debug

### Slider Not Auto-Playing
- Check console for JavaScript errors
- Verify `useCases` array has multiple items
- Ensure React hooks are properly initialized

### Style Issues
- Verify `UseCaseSlider.css` is imported
- Check for CSS conflicts with parent components
- Use browser DevTools to inspect computed styles

## Advanced Customization

### Custom Animations

Add custom slide transitions by modifying the CSS:

```css
.use-case-slider-left > * {
  animation: customSlideIn 0.6s ease forwards;
}

@keyframes customSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### Multiple Sliders on Same Page

Each slider instance is independent:

```jsx
<UseCaseSlider useCases={networkUseCases} partnerColor="#ff8300" />
<UseCaseSlider useCases={securityUseCases} partnerColor="#00b08b" />
```

## Examples

See the following partner pages for live examples:
- `/partners?partner=hpearubanetworking` - Aruba (Orange theme)
- `/partners?partner=hpe` - HPE (Green theme)
- `/partners?partner=nutanix` - Nutanix (Blue theme)

## Support

For issues or questions:
1. Check this documentation
2. Review the example implementation in `Aruba.jsx`
3. Inspect browser console for errors
4. Contact the development team

---

**Version**: 1.0.0  
**Last Updated**: June 7, 2026  
**Author**: Trace Network & Engineering Development Team
