# Aruba Special Offer Section - Image Mapping Instructions

## Your Provided Images → Required Filenames

Based on the images you've provided, here's how to map them to the required filenames:

### Image Mapping

1. **White Aruba Network Switch (Image 1)**
   - This is a white Aruba access point/switch
   - **Save as:** `network-infrastructure.jpg`
   - **Location:** `/public/assets/images/aruba/network-infrastructure.jpg`

2. **Black HPE Aruba Switch (Image 2)**
   - This is a black HPE Aruba network switch with multiple ports
   - **Alternative option for:** `network-infrastructure.jpg` OR
   - **Could also be used for:** `central-management.jpg` (since it shows enterprise-grade equipment)
   - **Suggestion:** Use this as `network-infrastructure.jpg` (it's more impressive than the white one)

3. **ClearPass Policy Manager Diagram (Image 3)**
   - This shows the ClearPass architecture with internet, VPN, applications, and device types
   - **Save as:** `security-clearpass.jpg`
   - **Location:** `/public/assets/images/aruba/security-clearpass.jpg`

4. **Aruba Access Point (Image 4)**
   - This is a ceiling-mounted Aruba wireless access point (white, circular)
   - **Save as:** `wireless-access.jpg`
   - **Location:** `/public/assets/images/aruba/wireless-access.jpg`

## Recommended Mapping (Best Configuration)

Use this configuration for the most impactful visual presentation:

1. **network-infrastructure.jpg** → Black HPE Aruba Switch (Image 2)
   - Shows enterprise-grade infrastructure
   
2. **wireless-access.jpg** → Aruba Access Point (Image 4)
   - Shows wireless access point clearly
   
3. **central-management.jpg** → White Aruba Switch (Image 1)
   - Alternatively, you could use a screenshot of Aruba Central dashboard if available
   
4. **security-clearpass.jpg** → ClearPass Diagram (Image 3)
   - Perfect - shows the complete ClearPass architecture

## Instructions to Add Images

### Step 1: Save Your Images
1. From your screenshots, save each image as a JPG file
2. Recommended dimensions: 600x600px (or at least square aspect ratio)
3. Use the filenames specified above

### Step 2: Place in Correct Directory
Copy all images to:
```
c:\Users\abhis\Downloads\TRACE_WEBSITE_ORIGNAL-main (2)\TRACE_WEBSITE_ORIGNAL-main\public\assets\images\aruba\
```

### Step 3: Verify Filenames
Make sure you have exactly these files:
- ✅ `network-infrastructure.jpg`
- ✅ `wireless-access.jpg`
- ✅ `central-management.jpg`
- ✅ `security-clearpass.jpg`

### Step 4: Test the Page
1. Run your development server
2. Navigate to the Aruba partner page
3. Scroll down to the "SPECIAL OFFER - FREE POC Available" section
4. All four images should now display in the 2x2 grid

## Current Code Reference

The section in `src/pages/partners/Aruba.jsx` (lines 1042-1057) contains:

```jsx
<div className="aruba-offer-image-grid">
  <div className="aruba-offer-img-box">
    <img src="/assets/images/aruba/network-infrastructure.jpg" alt="Aruba Network Infrastructure" />
  </div>
  <div className="aruba-offer-img-box">
    <img src="/assets/images/aruba/wireless-access.jpg" alt="Aruba Wireless Access Points" />
  </div>
  <div className="aruba-offer-img-box">
    <img src="/assets/images/aruba/central-management.jpg" alt="Aruba Central Management" />
  </div>
  <div className="aruba-offer-img-box">
    <img src="/assets/images/aruba/security-clearpass.jpg" alt="Aruba ClearPass Security" />
  </div>
</div>
```

## Alternative: Update Code to Use Your Image Names

If you want to keep your images with different names, I can update the code to reference them. Just let me know what you'd like to name them!

## Need Help?

If you need me to:
- Update the code to use different image names
- Adjust image sizes or styling
- Add more images
- Change the layout

Just let me know!
