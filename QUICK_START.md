# Use Case Slider - Quick Start Guide

## ⚡ 5-Minute Implementation

### 1️⃣ Import (1 line)
```jsx
import UseCaseSlider from '../../components/UseCaseSlider';
```

### 2️⃣ Data (Copy & Customize)
```jsx
const useCases = [
  {
    id: 'your-use-case',
    category: 'INDUSTRY',
    icon: 'fas fa-icon',
    title: 'Your use case title',
    description: 'Description of what was accomplished...',
    clientName: 'Client Name',
    manager: 'Manager Name',
    image: '/assets/images/use-cases/image.jpg',
    linkTo: '/case-studies#anchor'
  }
  // Add 3-7 more use cases
];
```

### 3️⃣ Use (1 line)
```jsx
<UseCaseSlider useCases={useCases} partnerColor="#ff8300" />
```

## 🎨 Common Partner Colors

| Partner | Color Code |
|---------|------------|
| Aruba | `#ff8300` |
| HPE | `#00b08b` |
| Nutanix | `#00a4e4` |
| Veeam | `#00b159` |
| Dell | `#0078d4` |
| VMware | `#00C9FF` |
| Microsoft | `#0089d0` |
| Sophos | `#eb5a0f` |

## 🔧 Common Icons

| Industry | Icon |
|----------|------|
| Defence | `fas fa-shield-alt` |
| Education | `fas fa-graduation-cap` |
| Healthcare | `fas fa-hospital` |
| Banking | `fas fa-university` |
| Retail | `fas fa-shopping-cart` |
| Manufacturing | `fas fa-industry` |
| Enterprise | `fas fa-building` |
| Government | `fas fa-landmark` |

## 📝 Content Template

```
Title: [Action] + [Outcome] for [Industry]
Example: "Deploying secure network infrastructure for defence facilities"

Description: [Challenge] + [Solution] + [Result]
Example: "Implemented AI-powered firewall protection, blocking 10,000+ threats 
daily and achieving 99.9% uptime SLA."

Client: Real name or "Confidential"
Manager: Real name or "Anonymous"
```

## 📊 Recommended Specs

| Element | Specification |
|---------|---------------|
| Use Cases | 4-8 slides |
| Title Length | 50-80 chars |
| Description | 150-200 chars |
| Image Size | 1200x800px |
| Image Format | JPG/WebP |
| File Size | < 200KB |

## ✅ Pre-Launch Checklist

- [ ] Import component
- [ ] Define 4-8 use cases
- [ ] Add partner color
- [ ] Optimize images
- [ ] Test on mobile
- [ ] Verify links work
- [ ] Check accessibility

## 📚 Full Documentation

- **Complete Guide**: `USE_CASE_SLIDER_IMPLEMENTATION.md`
- **Template Code**: `USE_CASE_TEMPLATE.jsx`
- **Design Specs**: `USE_CASE_DESIGN_REFERENCE.md`
- **Summary**: `USE_CASE_SLIDER_SUMMARY.md`

## 🆘 Need Help?

1. Check example: `src/pages/partners/Aruba.jsx`
2. Review template: `USE_CASE_TEMPLATE.jsx`
3. Read docs: `USE_CASE_SLIDER_IMPLEMENTATION.md`

---

**Version**: 1.0 | **Updated**: June 7, 2026
