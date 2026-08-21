// ================================================================
// USE CASE SLIDER - QUICK START TEMPLATE
// Copy this template and customize for each partner page
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import UseCaseSlider from '../../components/UseCaseSlider';
import './PartnerName.css';

export default function PartnerName() {
  
  // ============================================
  // STEP 1: Define your use cases
  // ============================================
  const useCases = [
    {
      // Required fields
      id: 'unique-identifier',           // Use lowercase-with-dashes
      category: 'INDUSTRY NAME',          // Uppercase, single word if possible
      icon: 'fas fa-icon-name',          // FontAwesome icon class
      title: 'Main use case title (keep under 80 chars)',
      description: 'Detailed description of the use case, challenges solved, and value delivered. Aim for 150-200 characters for best display.',
      
      // Optional fields
      clientName: 'Client Company Name',  // Use 'Confidential' if under NDA
      manager: 'Manager Name',            // Use 'Anonymous' if needed
      image: '/assets/images/use-cases/image-name.jpg',  // Professional photo
      linkTo: '/case-studies#anchor',     // Link to detailed case study
      
      // Optional: Trusted partner logos
      trustedLogos: [
        { name: 'Company A', image: '/assets/logos/company-a.png' },
        { name: 'Company B', image: '/assets/logos/company-b.png' },
        { name: 'Company C', image: '/assets/logos/company-c.png' },
        { name: 'Company D', image: '/assets/logos/company-d.png' },
        { name: 'Company E', image: '/assets/logos/company-e.png' }
      ]
    },
    
    // Add more use cases (recommended: 4-8 slides)
    {
      id: 'second-use-case',
      category: 'ANOTHER INDUSTRY',
      icon: 'fas fa-another-icon',
      title: 'Second use case title',
      description: 'Description of the second use case...',
      clientName: 'Another Client',
      manager: 'Another Manager',
      image: '/assets/images/use-cases/another-image.jpg',
      linkTo: '/case-studies#another-anchor'
    }
    
    // ... add 2-6 more use cases
  ];

  // ============================================
  // STEP 2: Get partner brand color
  // ============================================
  const partnerBrandColor = '#0078d4';  // Replace with partner's primary color
  
  /*
   * Common partner colors:
   * Aruba: #ff8300
   * HPE: #00b08b
   * Nutanix: #00a4e4
   * Veeam: #00b159
   * Dell: #0078d4
   * Microsoft: #0089d0
   * VMware: #00C9FF
   */

  // ============================================
  // STEP 3: Render the component
  // ============================================
  return (
    <div className="partner-page">
      
      {/* Hero Section */}
      <section className="partner-hero">
        {/* Your hero content here */}
      </section>

      {/* Why Choose Section */}
      <section className="partner-why-section">
        {/* Your why choose content here */}
      </section>

      {/* Certifications */}
      <section className="partner-certifications">
        {/* Your certifications content here */}
      </section>

      {/* USE CASE SLIDER - INSERT HERE */}
      <UseCaseSlider 
        useCases={useCases}
        partnerColor={partnerBrandColor}
      />

      {/* Special Offers */}
      <section className="partner-special-offer">
        {/* Your special offer content here */}
      </section>
      
    </div>
  );
}


// ================================================================
// INDUSTRY-SPECIFIC USE CASE EXAMPLES
// Copy and customize these examples for your partner
// ================================================================

/* 
 * EXAMPLE 1: NETWORKING (Aruba, HPE, Cisco)
 * ========================================== */
const networkingUseCases = [
  {
    id: 'enterprise-campus',
    category: 'ENTERPRISE',
    icon: 'fas fa-building',
    title: 'Enterprise campus-wide network transformation',
    description: 'Deployed AI-powered wireless and wired network infrastructure across 50+ buildings, supporting 10,000+ concurrent users with zero downtime migration.',
    clientName: 'Fortune 500 Technology Company',
    manager: 'Chief Network Architect',
    image: '/assets/images/use-cases/enterprise-campus.jpg',
    linkTo: '/case-studies#enterprise-campus'
  },
  {
    id: 'healthcare-network',
    category: 'HEALTHCARE',
    icon: 'fas fa-hospital',
    title: 'HIPAA-compliant hospital network',
    description: 'Secure medical IoT network supporting 5,000+ medical devices with priority QoS, network segmentation, and 99.999% uptime SLA.',
    clientName: 'Regional Healthcare System',
    manager: 'Hospital IT Director',
    image: '/assets/images/use-cases/healthcare-network.jpg',
    linkTo: '/case-studies#healthcare-network'
  }
];

/* 
 * EXAMPLE 2: SECURITY (Sophos, Palo Alto, Fortinet)
 * ================================================== */
const securityUseCases = [
  {
    id: 'ransomware-defense',
    category: 'FINANCIAL',
    icon: 'fas fa-university',
    title: 'Zero-day ransomware attack prevention',
    description: 'Implemented next-gen firewall with AI threat detection, blocking 10,000+ threats daily and preventing $2M potential ransomware damage.',
    clientName: 'National Banking Group',
    manager: 'Chief Information Security Officer',
    image: '/assets/images/use-cases/ransomware-defense.jpg',
    linkTo: '/case-studies#ransomware-defense'
  },
  {
    id: 'endpoint-security',
    category: 'EDUCATION',
    icon: 'fas fa-graduation-cap',
    title: 'University endpoint security deployment',
    description: 'Protected 15,000+ student and faculty devices with cloud-managed endpoint security, reducing malware incidents by 95%.',
    clientName: 'Leading University',
    manager: 'University IT Security Manager',
    image: '/assets/images/use-cases/endpoint-security.jpg',
    linkTo: '/case-studies#endpoint-security'
  }
];

/* 
 * EXAMPLE 3: CLOUD/VIRTUALIZATION (VMware, Nutanix, Azure)
 * ========================================================= */
const cloudUseCases = [
  {
    id: 'datacenter-modernization',
    category: 'ENTERPRISE',
    icon: 'fas fa-server',
    title: 'Hyperconverged infrastructure transformation',
    description: 'Consolidated 500+ physical servers to hyperconverged infrastructure, reducing datacenter footprint by 70% and OpEx by $1M annually.',
    clientName: 'Manufacturing Conglomerate',
    manager: 'VP of Infrastructure',
    image: '/assets/images/use-cases/datacenter-modern.jpg',
    linkTo: '/case-studies#datacenter-modern'
  },
  {
    id: 'disaster-recovery',
    category: 'RETAIL',
    icon: 'fas fa-shopping-cart',
    title: 'Cloud disaster recovery solution',
    description: 'Implemented cloud-based DR with 15-minute RTO, protecting 200+ retail locations and ensuring business continuity during regional outage.',
    clientName: 'National Retail Chain',
    manager: 'Director of IT Operations',
    image: '/assets/images/use-cases/disaster-recovery.jpg',
    linkTo: '/case-studies#disaster-recovery'
  }
];

/* 
 * EXAMPLE 4: BACKUP/STORAGE (Veeam, Acronis, Dell)
 * ================================================= */
const backupUseCases = [
  {
    id: 'data-protection',
    category: 'GOVERNMENT',
    icon: 'fas fa-shield-alt',
    title: 'Government data protection compliance',
    description: 'Deployed immutable backup solution for government agency, achieving 100% data recovery capability and meeting strict compliance requirements.',
    clientName: 'State Government Agency',
    manager: 'IT Security Director',
    image: '/assets/images/use-cases/data-protection.jpg',
    linkTo: '/case-studies#data-protection'
  },
  {
    id: 'ransomware-recovery',
    category: 'MANUFACTURING',
    icon: 'fas fa-industry',
    title: 'Ransomware recovery in 2 hours',
    description: 'Restored encrypted production systems in 2 hours using instant VM recovery, preventing $5M in production downtime costs.',
    clientName: 'Automotive Manufacturing Plant',
    manager: 'Plant IT Manager',
    image: '/assets/images/use-cases/ransomware-recovery.jpg',
    linkTo: '/case-studies#ransomware-recovery'
  }
];

/* 
 * EXAMPLE 5: ENDPOINT MANAGEMENT (42Gears, Microsoft, Apple)
 * ========================================================== */
const endpointUseCases = [
  {
    id: 'mobile-fleet',
    category: 'LOGISTICS',
    icon: 'fas fa-truck',
    title: 'Field workforce mobile device management',
    description: 'Managed 5,000+ rugged mobile devices for logistics fleet, achieving 99% uptime and reducing support tickets by 60%.',
    clientName: 'Global Logistics Provider',
    manager: 'Fleet Technology Manager',
    image: '/assets/images/use-cases/mobile-fleet.jpg',
    linkTo: '/case-studies#mobile-fleet'
  },
  {
    id: 'byod-security',
    category: 'CORPORATE',
    icon: 'fas fa-mobile-alt',
    title: 'BYOD security program rollout',
    description: 'Enabled secure BYOD access for 3,000+ employees while maintaining corporate data isolation and compliance.',
    clientName: 'Professional Services Firm',
    manager: 'IT Director',
    image: '/assets/images/use-cases/byod-security.jpg',
    linkTo: '/case-studies#byod-security'
  }
];


// ================================================================
// ICON REFERENCE GUIDE
// Use appropriate FontAwesome icons for each industry
// ================================================================

const iconReference = {
  // Industries
  defence: 'fas fa-shield-alt',
  education: 'fas fa-graduation-cap',
  healthcare: 'fas fa-hospital',
  banking: 'fas fa-university',
  retail: 'fas fa-shopping-cart',
  manufacturing: 'fas fa-industry',
  enterprise: 'fas fa-building',
  government: 'fas fa-landmark',
  logistics: 'fas fa-truck',
  
  // Technology Areas
  networking: 'fas fa-network-wired',
  security: 'fas fa-lock',
  cloud: 'fas fa-cloud',
  storage: 'fas fa-database',
  server: 'fas fa-server',
  mobile: 'fas fa-mobile-alt',
  iot: 'fas fa-microchip',
  ai: 'fas fa-robot',
  
  // Solutions
  firewall: 'fas fa-fire',
  backup: 'fas fa-save',
  monitoring: 'fas fa-chart-line',
  collaboration: 'fas fa-users',
  email: 'fas fa-envelope',
  endpoint: 'fas fa-laptop',
  wireless: 'fas fa-wifi',
  vpn: 'fas fa-user-shield'
};
