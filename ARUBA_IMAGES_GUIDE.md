# Aruba Special Offer Section - Image Guide

## Overview
The redesigned Aruba page special offer section now includes a 2x2 image grid showcasing Aruba networking solutions with an animated gradient background.

## Required Images

You need to add 4 images to the following directory:
```
/public/assets/images/aruba/
```

### Image 1: Network Infrastructure
- **File name:** `network-infrastructure.jpg`
- **Recommended content:** Aruba network switches, data center infrastructure, or network rack equipment
- **Dimensions:** 600x600px (square aspect ratio)
- **Image suggestions:**
  - Aruba CX switches in a rack
  - Data center with Aruba equipment
  - Network infrastructure overview

### Image 2: Wireless Access
- **File name:** `wireless-access.jpg`
- **Recommended content:** Aruba wireless access points (APs)
- **Dimensions:** 600x600px (square aspect ratio)
- **Image suggestions:**
  - Aruba AP mounted on ceiling
  - Wireless coverage visualization
  - Indoor/outdoor access points

### Image 3: Central Management
- **File name:** `central-management.jpg`
- **Recommended content:** Aruba Central cloud management dashboard
- **Dimensions:** 600x600px (square aspect ratio)
- **Image suggestions:**
  - Screenshot of Aruba Central dashboard
  - Network monitoring interface
  - Cloud management visualization

### Image 4: Security ClearPass
- **File name:** `security-clearpass.jpg`
- **Recommended content:** Aruba ClearPass security and network access control
- **Dimensions:** 600x600px (square aspect ratio)
- **Image suggestions:**
  - ClearPass interface screenshot
  - Security shield with network icons
  - Network access control visualization

## Where to Find Images

### Option 1: Official HPE Aruba Resources
- Visit: https://www.arubanetworks.com/
- Check their media kit or press resources
- Download product images from their website

### Option 2: Stock Images
If official images aren't available, use high-quality stock images from:
- Unsplash (https://unsplash.com/)
- Pexels (https://pexels.com/)
- Shutterstock (licensed)

Search terms:
- "network switches"
- "wireless access point"
- "network monitoring dashboard"
- "cybersecurity network"
- "data center infrastructure"

### Option 3: Create Placeholders
If you need temporary placeholders, you can use:
- Placeholder image services
- Or create simple graphics with Aruba's orange (#ff8300) color scheme

## Design Features

The section includes:
✅ **Animated gradient background** - Smooth color transitions across dark tones
✅ **2x2 image grid** on the left side
✅ **Hover effects** - Images scale and glow on hover
✅ **Responsive design** - Adapts to mobile, tablet, and desktop
✅ **Orange accent color** (#ff8300) matching Aruba branding

## Technical Details

### Image Properties
- All images should have consistent lighting and style
- Images are displayed with `object-fit: cover` so they fill the square containers
- Hover effect applies a slight orange tint overlay
- Border glow effect uses Aruba's orange color

### Animation
- Background uses a `gradientShift` animation that smoothly transitions between dark blue, purple, and navy tones
- Animation duration: 15 seconds
- Creates a subtle, professional moving background effect

## File Structure
```
public/
  assets/
    images/
      aruba/
        network-infrastructure.jpg  (NEW)
        wireless-access.jpg         (NEW)
        central-management.jpg      (NEW)
        security-clearpass.jpg      (NEW)
        image1.png                  (existing - certifications)
        image2.png                  (existing - certifications)
        ...
```

## Testing
After adding images:
1. Refresh the Aruba page
2. Scroll to the "FREE POC Available" section
3. Verify all 4 images load correctly
4. Test hover effects on each image
5. Check responsiveness on mobile/tablet

## Fallback
If images don't load, the section will still display correctly with:
- The animated gradient background
- All text content
- Call-to-action button
- Orange border glow effects
