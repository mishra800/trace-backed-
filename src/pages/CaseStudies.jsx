import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import './Partners.css';
import './CaseStudies.css'; // Premium stylesheet
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

// Helper to select a contextually relevant high-res industry image when a specific partner image is missing
const getFallbackImage = (src, alt, icon, overlayText) => {
  const text = `${src || ''} ${alt || ''} ${icon || ''} ${overlayText || ''}`.toLowerCase();
  
  if (text.includes('bank') || text.includes('financial') || text.includes('bfsi') || text.includes('university') || text.includes('wallet') || text.includes('finance')) {
    return '/assets/images/use-cases/banking-secure.png';
  }
  if (text.includes('health') || text.includes('hospital') || text.includes('medical') || text.includes('clinical') || text.includes('patient')) {
    return '/assets/images/use-cases/healthcare-hospital.png';
  }
  if (text.includes('educat') || text.includes('campus') || text.includes('school') || text.includes('student') || text.includes('graduation')) {
    return '/assets/images/use-cases/education-campus.png';
  }
  if (text.includes('manufac') || text.includes('factory') || text.includes('industrial') || text.includes('ot ') || text.includes('industry')) {
    return '/assets/images/use-cases/manufacturing-factory.png';
  }
  if (text.includes('gov') || text.includes('defen') || text.includes('landmark') || text.includes('shield') || text.includes('sovereign')) {
    return '/assets/images/use-cases/defence-network.png';
  }
  if (text.includes('retail') || text.includes('store') || text.includes('ecommerce') || text.includes('shopping') || text.includes('pos')) {
    return '/assets/images/use-cases/retail-store.png';
  }
  if (text.includes('crm') || text.includes('zoho') || text.includes('sales')) {
    return '/assets/images/use-cases/usecase7.png';
  }
  if (text.includes('backup') || text.includes('veeam') || text.includes('recovery')) {
    return '/assets/images/use-cases/usecase3.png';
  }
  if (text.includes('iam') || text.includes('identity') || text.includes('pam') || text.includes('arcon') || text.includes('cymmetri') || text.includes('safetica')) {
    return '/assets/images/use-cases/usecase4.png';
  }
  if (text.includes('vulnerab') || text.includes('tenable') || text.includes('qualys') || text.includes('scan')) {
    return '/assets/images/use-cases/usecase5.png';
  }
  if (text.includes('nutanix') || text.includes('hci') || text.includes('hyperconverged')) {
    return '/assets/images/use-cases/usecase6.png';
  }
  if (text.includes('solarwinds') || text.includes('observ') || text.includes('monitoring')) {
    return '/assets/images/use-cases/usecase2.png';
  }
  
  return '/assets/images/use-cases/enterprise-network.png';
};

// Custom CaseStudyImage component that handles image load failures gracefully with smart context fallbacks
function CaseStudyImage({ src, alt, icon, overlayText, strengthTitle, strengthItems }) {
  const fallbackSrc = getFallbackImage(src, alt, icon, overlayText);
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  const [failedTwice, setFailedTwice] = useState(false);

  useEffect(() => {
    setImgSrc(src || fallbackSrc);
    setFailedTwice(false);
  }, [src, alt, icon, overlayText]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setFailedTwice(true);
    }
  };

  if (failedTwice || !imgSrc) {
    return (
      <div className="use-case-image-enhanced fallback-gradient">
        <div className="fallback-glow"></div>
        <div className="fallback-icon-wrap">
          <i className={icon}></i>
        </div>
        <div className="strength-section strength-section-inset">
          <h4><i className="fas fa-dumbbell"></i> {strengthTitle || "Our Strength:"}</h4>
          <ul className="highlight-list">
            {(strengthItems || []).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="image-overlay">
          <span className="overlay-text">{overlayText}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="use-case-image-enhanced">
      <img 
        loading="lazy" 
        src={imgSrc} 
        alt={alt} 
        onError={handleError} 
      />
      <div className="strength-section strength-section-inset">
        <h4><i className="fas fa-dumbbell"></i> {strengthTitle || "Our Strength:"}</h4>
        <ul className="highlight-list">
          {(strengthItems || []).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="image-overlay">
        <span className="overlay-text">{overlayText}</span>
      </div>
    </div>
  );
}

const remainingBrands = [
  {
    id: "arcon",
    brandName: "ARCON PAM",
    tagline: "Enterprise Privileged Access Management, zero-trust identity security, and session governance.",
    color: "#ef4444",
    icon: "fas fa-user-lock",
    cases: [
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "Privileged Access Control for Critical Financial Systems",
        icon: "fas fa-university",
        challenge: "A leading bank required strict control over privileged accounts and admin access to protect critical financial systems and sensitive customer data from insider threats and unauthorized access.",
        solutions: [
          { title: "ARCON Privileged Access Management (PAM)", desc: "Centralized vaulting and policy enforcement for all admin credentials." },
          { title: "Just-In-Time (JIT) Access", desc: "Time-limited privileged sessions to reduce attack surface." }
        ],
        impacts: [
          { number: "100%", label: "Privileged Session Audit Coverage" },
          { number: "Zero", label: "Unauthorized Admin Access Incidents" }
        ],
        strengths: [
          "Credential vaulting and rotation architecture",
          "Just-in-time privileged access configuration",
          "SIEM integration for real-time threat correlation"
        ]
      },
      {
        id: "government",
        title: "Government & Defence",
        scale: "Secure Admin Access & Compliance for Critical Infrastructure",
        icon: "fas fa-shield-alt",
        challenge: "Government organizations required centralized control over administrator access to critical infrastructure, ensuring compliance with national security mandates and preventing unauthorized access.",
        solutions: [
          { title: "ARCON Identity Governance", desc: "Role-based access control across all government systems and applications." },
          { title: "Session Recording & Audit Trail", desc: "Full forensic audit logging of every privileged session for compliance." }
        ],
        impacts: [
          { number: "100%", label: "Compliance Audit Readiness" },
          { number: "60%", label: "Reduction in Insider Threat Risk" }
        ],
        strengths: [
          "National compliance framework mapping",
          "Air-gapped environment PAM deployment skills",
          "Multi-factor authentication enforcement for privileged users"
        ]
      },
      {
        id: "healthcare",
        title: "Healthcare & Hospitals",
        scale: "Clinical System Access Security & HIPAA Compliance",
        icon: "fas fa-hospital",
        challenge: "Hospitals required audited and controlled access to patient databases, medical systems, and clinical applications to prevent data breaches and maintain HIPAA compliance.",
        solutions: [
          { title: "ARCON PAM for Healthcare Systems", desc: "Secure access to EMR, clinical, and diagnostic platforms." },
          { title: "Privileged Session Monitoring", desc: "Real-time alerts and recording of all admin activity on patient systems." }
        ],
        impacts: [
          { number: "100%", label: "HIPAA Compliance Achieved" },
          { number: "Zero", label: "Patient Data Breach Incidents" }
        ],
        strengths: [
          "Healthcare regulation PAM mapping expertise",
          "EMR and clinical system access workflow design",
          "Real-time session anomaly detection configuration"
        ]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "OT & IT Privileged Access for Smart Factory Environments",
        icon: "fas fa-industry",
        challenge: "Manufacturing organizations required controlled privileged access across production systems, OT environments, and IT infrastructure to prevent operational disruptions.",
        solutions: [
          { title: "ARCON OT/IT PAM Integration", desc: "Unified privileged access governance across factory floor and IT systems." },
          { title: "Automated Credential Rotation", desc: "Scheduled password rotation for all machine and service accounts." }
        ],
        impacts: [
          { number: "Zero", label: "Production Downtime from Credential Misuse" },
          { number: "80%", label: "Faster Compliance Reporting" }
        ],
        strengths: [
          "OT/IT convergence privileged access architecture",
          "Industrial control system (ICS) PAM integration",
          "Automated service account credential rotation setups"
        ]
      },
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Cloud & DevOps Access Governance",
        icon: "fas fa-laptop",
        challenge: "IT companies required governed privileged access for DevOps, cloud infrastructure, and multi-tenant environments without impeding development velocity.",
        solutions: [
          { title: "ARCON Cloud PAM", desc: "Privileged access governance for AWS, Azure, and GCP environments." },
          { title: "DevOps Secrets Management", desc: "Secure injection of credentials into CI/CD pipelines without hardcoding." }
        ],
        impacts: [
          { number: "100%", label: "Cloud Credential Governance" },
          { number: "Zero", label: "Hardcoded Secrets in Pipelines" }
        ],
        strengths: [
          "Cloud-native PAM deployment across AWS/Azure/GCP",
          "CI/CD pipeline secrets management integration",
          "Zero-trust least-privilege enforcement design"
        ]
      },
      {
        id: "enterprise",
        title: "Large Enterprises",
        scale: "Enterprise PAM & Identity Governance at Scale",
        icon: "fas fa-building",
        challenge: "Enterprises required unified privileged access management across on-premises, hybrid cloud, and multi-location environments with centralized policy enforcement.",
        solutions: [
          { title: "ARCON Enterprise PAM Suite", desc: "Centralized privileged access governance across all enterprise environments." },
          { title: "Risk-Based Access Analytics", desc: "Behavioral analytics to detect anomalous privileged account activity." }
        ],
        impacts: [
          { number: "70%", label: "Reduction in Privileged Access Risk" },
          { number: "100%", label: "Enterprise-Wide Audit Coverage" }
        ],
        strengths: [
          "Enterprise-scale PAM architecture and deployment",
          "Risk-based behavioral analytics configuration",
          "Multi-location centralized policy enforcement design"
        ]
      }
    ]
  },
  {
    id: "veeam",
    brandName: "Veeam Backup",
    tagline: "Enterprise-grade data protection, secure replication, and fast ransomware recovery.",
    color: "#00b159",
    icon: "fas fa-save",
    cases: [
      {
        id: "education",
        title: "Education Sector",
        scale: "Secure Campus-Wide Data Protection",
        icon: "fas fa-graduation-cap",
        challenge: "A leading university managing 30,000+ active users needed reliable backup for student data, LMS platforms, and virtual labs with fast RTO.",
        solutions: [
          { title: "Veeam Backup & Replication", desc: "Automated hourly VM snapshots of campus hypervisors and LMS databases." },
          { title: "Immutable Cloud Repository", desc: "Offsite immutable storage targets protecting against ransomware encryption." }
        ],
        impacts: [
          { number: "99.9%", label: "LMS Platform Uptime" },
          { number: "15 min", label: "Recovery Time Objective (RTO)" }
        ],
        strengths: ["VMware/Hyper-V backup architecture", "Immutable repository configuration", "Instant VM recovery setup"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Zero-Downtime ERP & Production Backups",
        icon: "fas fa-industry",
        challenge: "A manufacturing company needed continuous backup of ERP systems, production databases, and assembly line logs with sub-hour RTO.",
        solutions: [
          { title: "Veeam CDP", desc: "Continuous data protection with real-time replication of production databases." },
          { title: "Veeam SureBackup", desc: "Automated backup verification ensuring 100% recoverability." }
        ],
        impacts: [
          { number: "Zero", label: "Production Data Loss" },
          { number: "4x", label: "Faster Restoration Speed" }
        ],
        strengths: ["Continuous data protection design", "ERP backup integration", "SureBackup automated verification"]
      },
      {
        id: "enterprise",
        title: "Enterprise / MNC",
        scale: "Enterprise Backup & Disaster Recovery",
        icon: "fas fa-building",
        challenge: "Large IT organizations needed high-performance backup for multi-location infrastructure and fast DR failover for business-critical workloads.",
        solutions: [
          { title: "Veeam ONE Monitoring", desc: "Real-time backup job monitoring and capacity forecasting." },
          { title: "Veeam Cloud Connect DR", desc: "Cloud-based DR failover ensuring business continuity across regions." }
        ],
        impacts: [
          { number: "100%", label: "Backup Job Success Rate" },
          { number: "< 15 min", label: "DR Failover Time" }
        ],
        strengths: ["Enterprise-scale Veeam deployment", "Cloud DR architecture design", "Multi-site replication setup"]
      },
      {
        id: "government",
        title: "Government Sector",
        scale: "Secure & Compliant Government Data Backup",
        icon: "fas fa-university",
        challenge: "Government organizations required secure, compliant, and reliable data backup meeting data sovereignty and audit requirements.",
        solutions: [
          { title: "Veeam Government Edition", desc: "On-premises backup with encrypted repositories for data sovereignty." },
          { title: "Veeam Compliance Reporting", desc: "Audit-ready backup reports for government compliance requirements." }
        ],
        impacts: [
          { number: "100%", label: "Data Sovereignty Compliance" },
          { number: "Zero", label: "Backup Compliance Violations" }
        ],
        strengths: ["Government compliance backup design", "Encrypted repository configuration", "Audit reporting automation"]
      },
      {
        id: "retail",
        title: "Retail & FMCG",
        scale: "POS & Branch Data Protection",
        icon: "fas fa-shopping-cart",
        challenge: "Retail organizations needed backup for POS systems, sales databases, and branch infrastructure protecting against hardware failures and ransomware.",
        solutions: [
          { title: "Veeam Branch Office Backup", desc: "Lightweight agents protecting POS servers at each store location." },
          { title: "Veeam Instant Recovery", desc: "Boot from backup keeping stores operational within minutes of failure." }
        ],
        impacts: [
          { number: "< 5 min", label: "POS Recovery Time" },
          { number: "200+", label: "Store Locations Protected" }
        ],
        strengths: ["Retail POS backup architecture", "Instant VM recovery configuration", "Multi-branch backup centralization"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Critical Clinical Data Protection & Recovery",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed immutable backups and fast recovery for patient records, EHR systems, and clinical applications.",
        solutions: [
          { title: "Veeam Immutable Backup for Healthcare", desc: "WORM-protected backups preventing ransomware from encrypting patient data." },
          { title: "Veeam Instant VM Recovery", desc: "Restoring clinical VMs within minutes to maintain patient care continuity." }
        ],
        impacts: [
          { number: "Zero", label: "Patient Data Lost to Ransomware" },
          { number: "10 min", label: "EHR System Recovery Time" }
        ],
        strengths: ["HIPAA-compliant backup architecture", "Immutable healthcare data storage", "Clinical VM instant recovery"]
      }
    ]
  },
  {
    id: "tenable",
    brandName: "Tenable Security",
    tagline: "Cyber Exposure Management, vulnerability assessment, and risk-based security analytics.",
    color: "#22c55e",
    icon: "fas fa-search",
    cases: [
      {
        id: "manufacturing",
        title: "Manufacturing Sector",
        scale: "OT & IT Integrated Vulnerability Mapping",
        icon: "fas fa-industry",
        challenge: "Industrial plants lacked unified visibility into OT and IT assets, leaving security gaps that increased cyber risk across production environments.",
        solutions: [
          { title: "Tenable OT Security", desc: "Continuous OT asset discovery and protocol-aware vulnerability detection." },
          { title: "Tenable Vulnerability Management", desc: "Unified dashboards linking OT and corporate IT risk profiles." }
        ],
        impacts: [
          { number: "100%", label: "OT/IT Asset Visibility" },
          { number: "95%", label: "Faster Risk Patching" }
        ],
        strengths: ["SCADA/ICS scanning expertise", "OT/IT unified risk dashboard", "Risk-based patch prioritization"]
      },
      {
        id: "enterprise",
        title: "Large Enterprise / MNC",
        scale: "Enterprise Vulnerability Management at Scale",
        icon: "fas fa-building",
        challenge: "A multinational company struggled with manual patch prioritization across 10,000+ globally distributed servers and endpoints.",
        solutions: [
          { title: "Tenable One Platform", desc: "Exposure management covering all active enterprise endpoints and cloud assets." },
          { title: "Automated SLA Policies", desc: "Automated DevOps team notifications based on CVSS severity scores." }
        ],
        impacts: [
          { number: "10,000+", label: "Daily Scanned Endpoints" },
          { number: "90%", label: "Reduced Manual Triage" }
        ],
        strengths: ["Enterprise Tenable One deployment", "DevSecOps scanner integration", "Custom vulnerability dashboard design"]
      },
      {
        id: "tourism",
        title: "Tourism Sector",
        scale: "Secure Customer Data & Digital Platforms",
        icon: "fas fa-plane",
        challenge: "Tourism businesses needed to protect customer booking data, web applications, and payment systems from external threats.",
        solutions: [
          { title: "Tenable Web App Scanning", desc: "Automated scanning of booking portals and customer-facing web applications." },
          { title: "Tenable Lumin Risk Score", desc: "Business-context risk scoring prioritizing remediation for customer data assets." }
        ],
        impacts: [
          { number: "Zero", label: "Customer Data Breaches" },
          { number: "100%", label: "Web App Vulnerability Coverage" }
        ],
        strengths: ["Web application security scanning", "Customer data risk prioritization", "Booking system security assessment"]
      },
      {
        id: "bfsi",
        title: "Banking & Financial Services",
        scale: "Continuous Compliance & Vulnerability Monitoring",
        icon: "fas fa-university",
        challenge: "Banks required continuous vulnerability scanning and compliance monitoring across thousands of banking workstations and servers.",
        solutions: [
          { title: "Tenable.io for Banking", desc: "Cloud-based continuous vulnerability assessment for all banking infrastructure." },
          { title: "Tenable Compliance Dashboards", desc: "Real-time PCI-DSS and RBI compliance status across all systems." }
        ],
        impacts: [
          { number: "100%", label: "Banking Asset Scan Coverage" },
          { number: "Zero", label: "Undetected Critical Vulnerabilities" }
        ],
        strengths: ["Banking compliance scanning architecture", "PCI-DSS dashboard configuration", "Continuous assessment automation"]
      },
      {
        id: "healthcare",
        title: "Healthcare IT",
        scale: "Medical Device & Network Security Scanning",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed continuous visibility into medical IoT devices, clinical servers, and network infrastructure for security risk management.",
        solutions: [
          { title: "Tenable.ot for Medical IoT", desc: "Passive scanning detecting all connected medical devices without disrupting operations." },
          { title: "Tenable Healthcare Dashboards", desc: "HIPAA-aligned vulnerability reporting for clinical IT environments." }
        ],
        impacts: [
          { number: "100%", label: "Medical Device Visibility" },
          { number: "Zero", label: "Unpatched Critical Clinical Systems" }
        ],
        strengths: ["Passive medical IoT scanning", "HIPAA compliance reporting", "Clinical network asset discovery"]
      },
      {
        id: "cloud",
        title: "Cloud & Hybrid Infrastructure",
        scale: "Multi-Cloud Vulnerability Management",
        icon: "fas fa-cloud",
        challenge: "Organizations in hybrid and multi-cloud environments needed unified vulnerability management across AWS, Azure, GCP, and on-premises assets.",
        solutions: [
          { title: "Tenable Cloud Security (CNAPP)", desc: "Cloud-native application protection covering misconfigurations and vulnerabilities." },
          { title: "Tenable Connector APIs", desc: "Auto-discovery of new cloud assets ensuring continuous scan coverage." }
        ],
        impacts: [
          { number: "100%", label: "Multi-Cloud Asset Coverage" },
          { number: "Zero", label: "Shadow Cloud Assets Missed" }
        ],
        strengths: ["CNAPP cloud security deployment", "Multi-cloud auto-discovery setup", "Cloud compliance posture management"]
      }
    ]
  },
  {
    id: "solarwinds",
    brandName: "SolarWinds",
    tagline: "Full-stack observability, network monitoring, and responsive system health analysis.",
    color: "#ffaa00",
    icon: "fas fa-chart-line",
    cases: [
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "Critical Network Monitoring for Banking Systems",
        icon: "fas fa-university",
        challenge: "Banks required 24/7 monitoring of networks, ATM links, core banking servers, and applications to ensure zero-downtime financial operations.",
        solutions: [
          { title: "SolarWinds NPM", desc: "Real-time network performance monitoring with automatic fault detection." },
          { title: "SolarWinds SAM", desc: "Application and server health monitoring for core banking platforms." }
        ],
        impacts: [
          { number: "99.999%", label: "Core Banking Availability" },
          { number: "< 2 min", label: "Fault Detection Time" }
        ],
        strengths: ["Core banking monitoring design", "ATM network visibility", "Banking application health setup"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Clinical System & Network Visibility",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed continuous monitoring of clinical servers, healthcare applications, medical networks, and connected devices.",
        solutions: [
          { title: "SolarWinds Network Topology Mapper", desc: "Automated discovery and mapping of hospital network infrastructure." },
          { title: "SolarWinds DPA", desc: "Database performance monitoring for EHR and clinical applications." }
        ],
        impacts: [
          { number: "100%", label: "Clinical Network Visibility" },
          { number: "50%", label: "Reduction in Clinical IT Incidents" }
        ],
        strengths: ["Hospital network topology mapping", "Clinical application monitoring", "EHR database performance setup"]
      },
      {
        id: "government",
        title: "Government Organizations",
        scale: "Infrastructure Monitoring for Government Systems",
        icon: "fas fa-landmark",
        challenge: "Government organizations needed centralized visibility and monitoring for e-governance infrastructure, citizen portals, and critical networks.",
        solutions: [
          { title: "SolarWinds IPAM", desc: "IP address and DHCP management for complex government networks." },
          { title: "SolarWinds NCM", desc: "Network configuration management ensuring compliance across all devices." }
        ],
        impacts: [
          { number: "100%", label: "Government Network Compliance" },
          { number: "Zero", label: "Unauthorized Config Changes" }
        ],
        strengths: ["Government network compliance management", "Configuration change tracking", "Multi-site infrastructure monitoring"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Industrial Infrastructure Monitoring",
        icon: "fas fa-industry",
        challenge: "Manufacturing companies needed monitoring of industrial networks, ERP performance, production systems, and operational infrastructure.",
        solutions: [
          { title: "SolarWinds NTA", desc: "Network traffic analysis identifying bandwidth-heavy factory applications." },
          { title: "SolarWinds Virtualization Manager", desc: "Monitoring VMware and Hyper-V hosting manufacturing ERP systems." }
        ],
        impacts: [
          { number: "Zero", label: "Undetected Production Network Issues" },
          { number: "80%", label: "Faster Root Cause Identification" }
        ],
        strengths: ["Factory network monitoring design", "Industrial ERP performance tracking", "Network traffic analysis setup"]
      },
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Data Center & Cloud Monitoring",
        icon: "fas fa-laptop",
        challenge: "IT companies needed centralized monitoring for data centers, cloud infrastructure, applications, and hybrid enterprise environments.",
        solutions: [
          { title: "SolarWinds Hybrid Cloud Observability", desc: "Unified full-stack visibility across on-premises and cloud workloads." },
          { title: "SolarWinds Loggly", desc: "Centralized log management and analysis for cloud applications." }
        ],
        impacts: [
          { number: "100%", label: "Hybrid Infrastructure Visibility" },
          { number: "70%", label: "Reduction in Alert Investigation Time" }
        ],
        strengths: ["Hybrid cloud observability design", "Full-stack monitoring architecture", "Log management integration setup"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Campus Infrastructure Monitoring",
        icon: "fas fa-graduation-cap",
        challenge: "Universities needed centralized visibility into campus networks, servers, digital learning platforms, and student-facing application availability.",
        solutions: [
          { title: "SolarWinds NPM for Campus", desc: "Network monitoring covering all campus switches, routers, and access points." },
          { title: "SolarWinds UDT", desc: "User device tracking identifying which devices connect to campus networks." }
        ],
        impacts: [
          { number: "10,000+", label: "Campus Devices Monitored" },
          { number: "99.9%", label: "LMS Network Availability" }
        ],
        strengths: ["Campus network monitoring design", "Student device tracking setup", "Education IT observability configuration"]
      }
    ]
  },
  {
    id: "sify",
    brandName: "Sify Technologies",
    tagline: "Managed enterprise network services, reliable MPLS links, and cloud hosting solutions.",
    color: "#059669",
    icon: "fas fa-network-wired",
    cases: [
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "Secure Multi-Branch MPLS Network",
        icon: "fas fa-university",
        challenge: "A state bank required high-resilience, encrypted network links between 100+ branches and their central datacenter with zero tolerance for downtime.",
        solutions: [
          { title: "Sify Managed MPLS Network", desc: "Redundant private network routes with automated failover to backup links." },
          { title: "IPsec End-to-End Encryption", desc: "Hardware-level encrypted tunnels protecting all branch-to-DC traffic." }
        ],
        impacts: [
          { number: "100%", label: "Branch Connection Uptime" },
          { number: "Zero", label: "Data Transmission Failures" }
        ],
        strengths: ["MPLS multi-branch network design", "IPsec encryption configuration", "Banking network redundancy architecture"]
      },
      {
        id: "hospitality",
        title: "Hospitality Sector",
        scale: "Managed Connectivity & Cloud for Hotels",
        icon: "fas fa-hotel",
        challenge: "Hotel chains needed reliable internet connectivity, cloud PMS hosting, and secure guest Wi-Fi across multiple properties.",
        solutions: [
          { title: "Sify Managed Internet Services", desc: "High-availability broadband with guaranteed SLAs for each hotel property." },
          { title: "Sify Cloud Hosting", desc: "Hosted property management systems on Sify's secure cloud platform." }
        ],
        impacts: [
          { number: "99.9%", label: "Property Connectivity Uptime" },
          { number: "100%", label: "Guest Network Security" }
        ],
        strengths: ["Hospitality network design", "Cloud PMS hosting configuration", "Guest Wi-Fi security architecture"]
      },
      {
        id: "tourism",
        title: "Tourism Sector",
        scale: "Secure Connectivity for Travel Platforms",
        icon: "fas fa-plane",
        challenge: "Tourism companies needed reliable connectivity and secure cloud platforms for booking systems, customer portals, and travel operations.",
        solutions: [
          { title: "Sify SD-WAN for Tourism", desc: "Software-defined WAN optimizing application performance for booking platforms." },
          { title: "Sify DRaaS", desc: "Disaster recovery as a service protecting booking system availability." }
        ],
        impacts: [
          { number: "99.99%", label: "Booking Platform Availability" },
          { number: "Zero", label: "Customer Data Transmission Failures" }
        ],
        strengths: ["SD-WAN deployment for travel platforms", "DRaaS configuration and testing", "Tourism application network optimization"]
      },
      {
        id: "chemical",
        title: "Chemical Industry",
        scale: "Secure Site Connectivity & Data Management",
        icon: "fas fa-flask",
        challenge: "Chemical organizations needed secure connectivity between manufacturing plants, R&D centers, and corporate offices with data protection compliance.",
        solutions: [
          { title: "Sify Managed WAN", desc: "Secure private WAN connecting all chemical plant sites and offices." },
          { title: "Sify Data Center Services", desc: "Colocation and managed services for chemical industry applications." }
        ],
        impacts: [
          { number: "100%", label: "Inter-Site Connectivity Security" },
          { number: "99.9%", label: "Production System Availability" }
        ],
        strengths: ["Industrial site network design", "Secure WAN architecture", "Datacenter colocation management"]
      },
      {
        id: "utilities",
        title: "Utilities Sector",
        scale: "High-Availability Networks for Utility Operations",
        icon: "fas fa-bolt",
        challenge: "Utility companies needed high-availability, real-time networks connecting substations, control centers, and operational monitoring systems.",
        solutions: [
          { title: "Sify Managed Fiber Network", desc: "Dedicated fiber connectivity for utility SCADA and control systems." },
          { title: "Sify NOC Monitoring", desc: "24/7 network operations monitoring ensuring utility network availability." }
        ],
        impacts: [
          { number: "99.999%", label: "Utility Network Availability" },
          { number: "Zero", label: "SCADA Communication Failures" }
        ],
        strengths: ["Utility SCADA network architecture", "24/7 NOC monitoring setup", "Critical infrastructure connectivity design"]
      },
      {
        id: "government",
        title: "Government Organizations",
        scale: "Cloud & Connectivity for Digital Government",
        icon: "fas fa-landmark",
        challenge: "Government bodies needed secure cloud platforms and nationwide connectivity for digital citizen services and e-governance infrastructure.",
        solutions: [
          { title: "Sify Government Cloud", desc: "Compliant cloud hosting meeting government data sovereignty requirements." },
          { title: "Sify NLD Network", desc: "National long-distance connectivity linking government offices across India." }
        ],
        impacts: [
          { number: "100%", label: "Data Sovereignty Compliance" },
          { number: "99.9%", label: "E-Governance Platform Uptime" }
        ],
        strengths: ["Government cloud compliance design", "National connectivity architecture", "E-governance platform hosting"]
      }
    ]
  },
  {
    id: "seceon",
    brandName: "Seceon",
    tagline: "AI-driven real-time threat detection, automated containment, and SIEM security solutions.",
    color: "#10b981",
    icon: "fas fa-robot",
    cases: [
      {
        id: "enterprise",
        title: "Enterprise Sector",
        scale: "Advanced Threat Detection & SOC Operations",
        icon: "fas fa-building",
        challenge: "Enterprises lacked real-time visibility and centralized AI-driven threat detection across complex multi-cloud and hybrid IT environments.",
        solutions: [
          { title: "Seceon OTM for Enterprise", desc: "AI-powered threat detection correlating events across all enterprise systems." },
          { title: "Seceon Automated Response", desc: "Instant automated containment blocking threats without manual intervention." }
        ],
        impacts: [
          { number: "99.9%", label: "Threat Containment Rate" },
          { number: "< 1 min", label: "Automated Incident Response" }
        ],
        strengths: ["Enterprise AI threat detection setup", "Automated response playbook design", "Multi-cloud SIEM integration"]
      },
      {
        id: "government",
        title: "Government Sector",
        scale: "Secure & Compliant Cybersecurity Monitoring",
        icon: "fas fa-university",
        challenge: "Government organizations required high-security AI monitoring and compliance-ready cybersecurity for critical infrastructure and citizen services.",
        solutions: [
          { title: "Seceon aiSIEM for Government", desc: "AI-driven log correlation and anomaly detection for government systems." },
          { title: "Seceon Compliance Reporting", desc: "Automated compliance reports meeting national cybersecurity frameworks." }
        ],
        impacts: [
          { number: "100%", label: "Government Compliance Coverage" },
          { number: "Zero", label: "Undetected Critical Threats" }
        ],
        strengths: ["Government SIEM deployment", "National compliance reporting", "Critical infrastructure threat detection"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Campus Cybersecurity & Threat Monitoring",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed AI-powered protection against ransomware, phishing campaigns, and unauthorized access to student systems.",
        solutions: [
          { title: "Seceon aiMDR for Education", desc: "Managed detection and response protecting campus networks and endpoints." },
          { title: "Seceon User Behavior Analytics", desc: "Detecting anomalous student and faculty account activity in real time." }
        ],
        impacts: [
          { number: "Zero", label: "Successful Ransomware Encryptions" },
          { number: "100%", label: "Campus Endpoint Coverage" }
        ],
        strengths: ["Campus MDR deployment", "User behavior analytics setup", "Education endpoint threat detection"]
      },
      {
        id: "retail",
        title: "Retail & E-Commerce",
        scale: "Transaction & Customer Data Protection",
        icon: "fas fa-shopping-cart",
        challenge: "Retail and e-commerce businesses faced increasing risks to customer payment data, online platforms, and POS transaction systems from cyber threats.",
        solutions: [
          { title: "Seceon aiSIEM for Retail", desc: "Real-time monitoring of POS systems, web applications, and retail networks." },
          { title: "Seceon Threat Intelligence", desc: "Threat feeds identifying retail-targeted attack campaigns in real time." }
        ],
        impacts: [
          { number: "Zero", label: "Customer Payment Data Breaches" },
          { number: "99.9%", label: "Retail Threat Detection Rate" }
        ],
        strengths: ["Retail POS security monitoring", "E-commerce threat intelligence", "PCI-DSS compliance monitoring"]
      }
    ]
  },
  {
    id: "safetica",
    brandName: "Safetica",
    tagline: "Data Loss Prevention (DLP), file encryption, and active insider threat prevention.",
    color: "#00C9FF",
    icon: "fas fa-user-shield",
    cases: [
      {
        id: "defence",
        title: "Defence Sector",
        scale: "Preventing Classified Data Leakage",
        icon: "fas fa-shield-alt",
        challenge: "Defence organizations required strict monitoring and prevention of confidential data leaving via endpoints, USB drives, and email.",
        solutions: [
          { title: "Safetica DLP for Defence", desc: "Blocking unauthorized transfers of classified documents to external media." },
          { title: "Safetica UEBA", desc: "User behavior analytics flagging suspicious access to classified files." }
        ],
        impacts: [
          { number: "100%", label: "Classified Data Channel Control" },
          { number: "Zero", label: "Unauthorized Data Exfiltration" }
        ],
        strengths: ["Defence DLP policy design", "Classified data classification", "USB and email channel blocking"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Student & Institutional Data Protection",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed to secure student records, exam papers, and institutional documents while managing BYOD environments.",
        solutions: [
          { title: "Safetica Education DLP", desc: "Protecting exam content and student records from unauthorized sharing." },
          { title: "Safetica BYOD Security", desc: "Monitoring personal devices for data leakage without invasive controls." }
        ],
        impacts: [
          { number: "Zero", label: "Exam Content Leaks" },
          { number: "100%", label: "Student Record Protection" }
        ],
        strengths: ["Education DLP deployment", "BYOD monitoring configuration", "Sensitive content classification setup"]
      },
      {
        id: "retail",
        title: "Retail Sector",
        scale: "Customer & POS Data Security",
        icon: "fas fa-shopping-cart",
        challenge: "Retail businesses needed to protect customer payment information, employee records, and POS system data from insider threats.",
        solutions: [
          { title: "Safetica DLP for Retail", desc: "Preventing customer PII and payment data from leaving POS systems." },
          { title: "Safetica Endpoint Monitoring", desc: "Real-time visibility into data activity across all retail workstations." }
        ],
        impacts: [
          { number: "100%", label: "PCI-DSS Data Protection" },
          { number: "Zero", label: "Customer Data Leaks" }
        ],
        strengths: ["Retail POS DLP configuration", "PCI-DSS data protection design", "Endpoint monitoring for retail"]
      },
      {
        id: "banking",
        title: "Banking Sector",
        scale: "Financial Data Compliance & Security",
        icon: "fas fa-university",
        challenge: "Banks required strict control over confidential financial data, customer account records, and compliance with data protection regulations.",
        solutions: [
          { title: "Safetica Banking DLP", desc: "Policy-driven blocking of customer financial data from leaving secured systems." },
          { title: "Safetica Compliance Audit", desc: "Automated compliance reporting for RBI and DPDP Act requirements." }
        ],
        impacts: [
          { number: "100%", label: "Financial Data Policy Coverage" },
          { number: "Zero", label: "Regulatory Compliance Violations" }
        ],
        strengths: ["Banking DLP policy design", "RBI compliance reporting setup", "Financial data classification architecture"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Patient Information Protection",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed to protect patient records, medical reports, and sensitive health data from unauthorized sharing or accidental leakage.",
        solutions: [
          { title: "Safetica Healthcare DLP", desc: "HIPAA-aligned policies preventing patient data from leaving clinical systems." },
          { title: "Safetica File Encryption", desc: "Automatic encryption of patient documents on clinical workstations." }
        ],
        impacts: [
          { number: "100%", label: "HIPAA DLP Compliance" },
          { number: "Zero", label: "Patient Data Breach Events" }
        ],
        strengths: ["HIPAA DLP policy configuration", "Clinical data encryption setup", "Healthcare data classification"]
      },
      {
        id: "enterprise",
        title: "Large Enterprises",
        scale: "Enterprise-Wide Data Protection",
        icon: "fas fa-building",
        challenge: "Large organizations needed centralized visibility and control over data movement across all departments, remote workers, and branch locations.",
        solutions: [
          { title: "Safetica Enterprise DLP", desc: "Centralized DLP management covering all endpoints across the enterprise." },
          { title: "Safetica Risk Dashboard", desc: "Real-time data risk scoring identifying high-risk users and channels." }
        ],
        impacts: [
          { number: "100%", label: "Enterprise Endpoint Coverage" },
          { number: "60%", label: "Reduction in Data Risk Score" }
        ],
        strengths: ["Enterprise DLP centralized management", "Risk-based user monitoring", "Multi-channel data protection design"]
      }
    ]
  },
  {
    id: "qualys",
    brandName: "Qualys",
    tagline: "Cloud-native asset visibility, automated compliance auditing, and vulnerability management.",
    color: "#ff4d4d",
    icon: "fas fa-cloud-shield",
    cases: [
      {
        id: "defence",
        title: "Defence Sector",
        scale: "Continuous Security Monitoring for Defence",
        icon: "fas fa-shield-alt",
        challenge: "Defence organizations needed continuous monitoring of critical systems, endpoints, and networks against rapidly evolving cyber threats.",
        solutions: [
          { title: "Qualys VMDR for Defence", desc: "Continuous vulnerability detection and response across classified systems." },
          { title: "Qualys CyberSecurity Asset Management", desc: "Complete asset inventory of all defence IT and OT assets." }
        ],
        impacts: [
          { number: "100%", label: "Asset Visibility Coverage" },
          { number: "Zero", label: "Unpatched Critical Vulnerabilities" }
        ],
        strengths: ["Defence asset discovery", "VMDR continuous scanning", "OT/IT vulnerability management"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Securing Campus Network & Infrastructure",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed centralized vulnerability management for large campus networks, servers, and thousands of student endpoints.",
        solutions: [
          { title: "Qualys Campus Scanning", desc: "Scheduled vulnerability scans across all campus network segments." },
          { title: "Qualys PCI Compliance", desc: "Compliance monitoring for payment systems used in campus fee collections." }
        ],
        impacts: [
          { number: "100%", label: "Campus Vulnerability Coverage" },
          { number: "90%", label: "Faster Remediation Time" }
        ],
        strengths: ["Campus network vulnerability design", "Compliance monitoring setup", "Large-scale asset scanning configuration"]
      },
      {
        id: "retail",
        title: "Retail Sector",
        scale: "POS & Customer System Protection",
        icon: "fas fa-shopping-cart",
        challenge: "Retail businesses needed continuous monitoring of POS systems, branch networks, and customer-facing applications for vulnerabilities.",
        solutions: [
          { title: "Qualys PCI-DSS Scanner", desc: "Automated PCI-DSS compliance scanning for all retail POS systems." },
          { title: "Qualys Web App Scanning", desc: "Continuous vulnerability testing of e-commerce and customer portals." }
        ],
        impacts: [
          { number: "100%", label: "PCI-DSS Compliance Achieved" },
          { number: "Zero", label: "Exploited Web Application Vulnerabilities" }
        ],
        strengths: ["PCI-DSS scanning configuration", "Retail web app security testing", "Branch network vulnerability management"]
      },
      {
        id: "banking",
        title: "Banking Sector",
        scale: "Vulnerability Management & Risk Compliance",
        icon: "fas fa-university",
        challenge: "Banks required strict vulnerability management, continuous compliance monitoring, and protection of sensitive financial systems from cyber threats.",
        solutions: [
          { title: "Qualys VMDR for Banking", desc: "Risk-prioritized vulnerability remediation across all banking infrastructure." },
          { title: "Qualys TruRisk", desc: "Business-context risk scoring helping banks prioritize patching efforts." }
        ],
        impacts: [
          { number: "100%", label: "Banking Compliance Coverage" },
          { number: "85%", label: "Reduction in Vulnerability Remediation Time" }
        ],
        strengths: ["Banking VMDR deployment", "TruRisk scoring configuration", "RBI compliance vulnerability design"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Protecting Critical Healthcare Infrastructure",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed to identify and remediate vulnerabilities in patient systems, medical applications, and connected healthcare devices.",
        solutions: [
          { title: "Qualys VMDR for Healthcare", desc: "Continuous scanning of clinical systems, servers, and medical network devices." },
          { title: "Qualys HIPAA Compliance", desc: "Automated HIPAA compliance assessments and risk reporting." }
        ],
        impacts: [
          { number: "100%", label: "HIPAA Compliance Coverage" },
          { number: "Zero", label: "Undetected Critical Clinical Vulnerabilities" }
        ],
        strengths: ["Healthcare vulnerability management", "HIPAA compliance scanning design", "Medical system risk reporting"]
      },
      {
        id: "enterprise",
        title: "Large Enterprises",
        scale: "Enterprise Risk Visibility at Scale",
        icon: "fas fa-building",
        challenge: "Large organizations needed centralized vulnerability management across multiple branch offices, cloud environments, and remote endpoints.",
        solutions: [
          { title: "Qualys Enterprise TruRisk Platform", desc: "Unified risk visibility covering on-premises, cloud, and remote assets." },
          { title: "Qualys CSPM", desc: "Cloud security posture management detecting misconfigurations across cloud accounts." }
        ],
        impacts: [
          { number: "100%", label: "Enterprise Asset Coverage" },
          { number: "70%", label: "Reduction in Overall Risk Score" }
        ],
        strengths: ["Enterprise vulnerability platform design", "Cloud posture management setup", "Multi-environment risk scoring"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Industrial Security & OT Compliance",
        icon: "fas fa-industry",
        challenge: "Manufacturing organizations needed vulnerability management for production systems, industrial assets, and operational technology environments.",
        solutions: [
          { title: "Qualys OT Security Scanner", desc: "Passive OT asset discovery and vulnerability detection for production systems." },
          { title: "Qualys Patch Management", desc: "Automated patch orchestration for Windows and Linux manufacturing workstations." }
        ],
        impacts: [
          { number: "100%", label: "OT Asset Visibility" },
          { number: "Zero", label: "Unpatched Production System Vulnerabilities" }
        ],
        strengths: ["OT vulnerability management design", "Passive scanning for production systems", "Patch automation for manufacturing"]
      }
    ]
  },
  {
    id: "fortytwo",
    brandName: "42Gears UEM",
    tagline: "Unified Endpoint Management (UEM), dedicated device lockdown, and kiosk setups.",
    color: "#3b82f6",
    icon: "fas fa-tablet-alt",
    cases: [
      {
        id: "logistics-uem",
        title: "Logistics & Transportation",
        scale: "Scale Rugged Handheld Kiosk Provisioning",
        icon: "fas fa-tablet-alt",
        challenge: "A massive logistics vendor required a secure, locked-down kiosk system across thousands of driver delivery handheld tablets.",
        solutions: [
          { title: "42Gears SureLock & SureFox", desc: "Kiosk browser and app locking to restrict personal device use." },
          { title: "Centralized MDM Console", desc: "Remote updates, location tracking, and bulk policy deployments." }
        ],
        impacts: [
          { number: "15,000+", label: "Devices Managed" },
          { number: "99.9%", label: "Delivery Fleet Uptime" }
        ],
        strengths: [
          "Enterprise scale Android kiosk provisioning",
          "Remote diagnostics and troubleshooting control",
          "Dynamic geolocation asset mapping setups"
        ]
      }
    ]
  },
  {
    id: "accops",
    brandName: "Accops",
    tagline: "Secure virtual desktops (VDI), Zero Trust access (ZTNA), and multi-factor authentication.",
    color: "#e81b23",
    icon: "fas fa-user-lock",
    cases: [
      {
        id: "fmcg",
        title: "FMCG Sector",
        scale: "Zero Trust Supply Chain Desktop Virtualization",
        icon: "fas fa-shopping-basket",
        challenge: "Distributed FMCG field agents required secure access to corporate ERP databases from personal unmanaged mobile devices while ensuring no data residue on endpoints.",
        solutions: [
          { title: "Accops HyWorks & HySecure", desc: "Secure virtual desktop hosting with encrypted client gateways." },
          { title: "Device Fingerprinting & MFA", desc: "Multi-factor authentication restricting access to approved device IDs only." }
        ],
        impacts: [
          { number: "5,000+", label: "Active Mobile Agents" },
          { number: "Zero", label: "Client-Side Data Residue" }
        ],
        strengths: [
          "Secure remote VDI gateway implementations",
          "Active Directory and MFA integrations",
          "BYOD endpoint health audit configurations"
        ]
      },
      {
        id: "metals",
        title: "Metals & Mining Sector",
        scale: "Secure Connectivity for Remote Mine Sites",
        icon: "fas fa-hammer",
        challenge: "Mining organizations required secure connectivity between remote extraction sites, operational centers, and corporate offices while protecting sensitive production data.",
        solutions: [
          { title: "Accops ZTNA Gateway", desc: "Zero-trust network access enabling encrypted connections from remote sites." },
          { title: "Accops HyDesk Virtualization", desc: "Centralized virtual desktops accessible from low-bandwidth remote locations." }
        ],
        impacts: [
          { number: "100%", label: "Encrypted Remote Site Access" },
          { number: "Zero", label: "Unauthorized Data Access Events" }
        ],
        strengths: [
          "Zero-trust architecture for remote site deployments",
          "Low-bandwidth virtual desktop optimization",
          "Centralized policy enforcement for distributed teams"
        ]
      },
      {
        id: "industrials",
        title: "Capital Goods & Industrials",
        scale: "ERP & Industrial Application Security",
        icon: "fas fa-industry",
        challenge: "Industrial organizations needed secure access to ERP systems, engineering platforms, and production applications for contractors and remote engineers.",
        solutions: [
          { title: "Accops HySecure ZTNA", desc: "Policy-based application access without exposing network infrastructure." },
          { title: "Session Recording & Audit", desc: "Full logging of all privileged sessions for compliance and audit purposes." }
        ],
        impacts: [
          { number: "80%", label: "Reduction in VPN Complexity" },
          { number: "100%", label: "Contractor Access Governance" }
        ],
        strengths: [
          "Application-level zero-trust access controls",
          "Contractor identity verification workflows",
          "Compliance-ready session recording and audit trails"
        ]
      },
      {
        id: "enterprise",
        title: "Large Enterprises",
        scale: "Zero Trust Hybrid Workforce Management",
        icon: "fas fa-building",
        challenge: "A large enterprise with thousands of hybrid workers needed secure, policy-driven access to all corporate resources without traditional VPN bottlenecks.",
        solutions: [
          { title: "Accops HyWorks VDI Platform", desc: "Centralized virtual desktop infrastructure for hybrid workforce access." },
          { title: "Accops Identity Gateway", desc: "SSO and adaptive MFA enforcing context-aware access policies." }
        ],
        impacts: [
          { number: "99.9%", label: "VDI Platform Uptime" },
          { number: "60%", label: "Reduction in IT Support Tickets" }
        ],
        strengths: [
          "Enterprise-scale VDI deployment and management",
          "SSO federation with existing identity providers",
          "Adaptive MFA policy configuration expertise"
        ]
      },
      {
        id: "bfsi",
        title: "Banking & Financial Services",
        scale: "Secure Compliant Access for BFSI",
        icon: "fas fa-university",
        challenge: "Financial institutions required compliant, fully auditable remote access with strong identity verification for sensitive financial data and applications.",
        solutions: [
          { title: "Accops HySecure with MFA", desc: "Multi-factor authenticated access with device compliance checks." },
          { title: "Audit Trail & Compliance Reporting", desc: "Comprehensive session logs meeting RBI and IRDAI compliance requirements." }
        ],
        impacts: [
          { number: "100%", label: "Regulatory Compliance Achieved" },
          { number: "Zero", label: "Unauthorized Access Incidents" }
        ],
        strengths: [
          "RBI/IRDAI compliance-aligned access architecture",
          "Hardware token and biometric MFA integrations",
          "Real-time access monitoring and anomaly alerting"
        ]
      }
    ]
  },
  {
    id: "vmware",
    brandName: "VMware",
    tagline: "Hyperconverged private cloud virtualization, SDDC engineering, and server consolidation.",
    color: "#00C9FF",
    icon: "fas fa-layer-group",
    cases: [
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "High-Availability Virtualized Banking Infrastructure",
        icon: "fas fa-university",
        challenge: "Banks required highly available, scalable, and secure infrastructure for financial applications and mission-critical workloads with zero downtime tolerance.",
        solutions: [
          { title: "VMware vSphere HA Clustering", desc: "High-availability virtual machine clustering with automated failover." },
          { title: "VMware NSX Microsegmentation", desc: "Network-level security segmentation protecting core banking systems." }
        ],
        impacts: [
          { number: "99.999%", label: "Core Banking Uptime" },
          { number: "Zero", label: "Unplanned Downtime Events" }
        ],
        strengths: [
          "vSphere HA cluster architecture and deployment",
          "NSX microsegmentation security design",
          "Automated VM recovery and failover configuration"
        ]
      },
      {
        id: "healthcare",
        title: "Healthcare & Hospitals",
        scale: "Scalable Clinical Workload Virtualization",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed reliable and scalable virtualized infrastructure for healthcare applications, patient systems, medical imaging, and PACS workloads.",
        solutions: [
          { title: "VMware vSAN for Healthcare", desc: "All-flash hyper-converged storage for medical imaging and clinical apps." },
          { title: "VMware Horizon VDI", desc: "Secure virtual desktops for clinical staff accessing patient records." }
        ],
        impacts: [
          { number: "50%", label: "Faster Clinical App Load Times" },
          { number: "100%", label: "HIPAA-Compliant Data Storage" }
        ],
        strengths: [
          "Healthcare workload vSAN performance tuning",
          "Horizon VDI for clinical thin-client deployments",
          "HIPAA-aligned infrastructure architecture"
        ]
      },
      {
        id: "government",
        title: "Government Organizations",
        scale: "Secure Centralized Government Infrastructure",
        icon: "fas fa-university",
        challenge: "Government organizations required secure and centralized virtualized infrastructure for hosting critical e-governance applications and citizen-facing digital services.",
        solutions: [
          { title: "VMware vSphere Private Cloud", desc: "Secure on-premises private cloud for government application hosting." },
          { title: "VMware Carbon Black EDR", desc: "Endpoint detection and response protecting government workstations." }
        ],
        impacts: [
          { number: "40%", label: "Infrastructure Cost Reduction" },
          { number: "99.9%", label: "E-Governance Platform Uptime" }
        ],
        strengths: [
          "Government-grade private cloud deployment",
          "Carbon Black endpoint security integration",
          "Compliance with government security frameworks"
        ]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "ERP & Production System Virtualization",
        icon: "fas fa-industry",
        challenge: "Manufacturing companies needed scalable virtual infrastructure for ERP systems, production applications, and operational continuity across multiple factory sites.",
        solutions: [
          { title: "VMware Site Recovery Manager", desc: "Automated DR orchestration for production ERP environments." },
          { title: "VMware vSphere Multi-Site", desc: "Centralized management of VMs across distributed factory sites." }
        ],
        impacts: [
          { number: "Zero", label: "Production ERP Downtime" },
          { number: "3x", label: "Faster Server Provisioning" }
        ],
        strengths: [
          "Multi-site vSphere disaster recovery architecture",
          "ERP workload performance optimization",
          "Factory floor IT/OT virtualization expertise"
        ]
      },
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Virtualization & Cloud Operations at Scale",
        icon: "fas fa-laptop",
        challenge: "IT companies required scalable virtual infrastructure for development environments, testing pipelines, cloud operations, and multi-tenant application hosting.",
        solutions: [
          { title: "VMware Cloud Foundation (VCF)", desc: "Full SDDC stack automating compute, storage, and network provisioning." },
          { title: "Tanzu Kubernetes Integration", desc: "Container orchestration integrated with existing VMware infrastructure." }
        ],
        impacts: [
          { number: "80%", label: "Faster Dev Environment Provisioning" },
          { number: "100%", label: "Multi-Tenant Isolation Achieved" }
        ],
        strengths: [
          "VMware Cloud Foundation deployment and architecture",
          "Kubernetes on Tanzu integration expertise",
          "Multi-tenant security and resource isolation design"
        ]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Virtual Labs & Digital Learning Infrastructure",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed scalable virtualized infrastructure for digital classrooms, virtual computer labs, learning management platforms, and remote learning.",
        solutions: [
          { title: "VMware Horizon Virtual Labs", desc: "On-demand virtual lab environments for students and faculty." },
          { title: "VMware vSphere Campus Cloud", desc: "Centralized resource pool serving all campus workloads." }
        ],
        impacts: [
          { number: "200+", label: "Virtual Labs Provisioned" },
          { number: "70%", label: "Hardware Cost Reduction" }
        ],
        strengths: [
          "Campus virtual lab architecture design",
          "Horizon persistent and non-persistent VDI setups",
          "Education workload resource management"
        ]
      },
      {
        id: "retail",
        title: "Retail & E-Commerce",
        scale: "Scalable Retail & E-Commerce Infrastructure",
        icon: "fas fa-shopping-cart",
        challenge: "Retail businesses required scalable virtual infrastructure for POS systems, ERP applications, inventory management, and peak-season e-commerce traffic handling.",
        solutions: [
          { title: "VMware vSphere Auto-Scaling", desc: "Dynamic resource allocation handling peak retail season traffic spikes." },
          { title: "VMware HCX Cloud Migration", desc: "Seamless workload migration between on-premises and cloud environments." }
        ],
        impacts: [
          { number: "10x", label: "Peak Traffic Handled Without Downtime" },
          { number: "45%", label: "Infrastructure Cost Savings" }
        ],
        strengths: [
          "Auto-scaling VMware cluster configurations",
          "Retail POS system virtualization expertise",
          "HCX cloud migration planning and execution"
        ]
      }
    ]
  },
  {
    id: "acronis",
    brandName: "Acronis",
    tagline: "All-in-one cyber backup, active AI ransomware shields, and disaster recovery.",
    color: "#0f52ba",
    icon: "fas fa-shield-alt",
    cases: [
      {
        id: "banking",
        title: "Banking Sector",
        scale: "AI-Powered Ransomware Protection & Backup",
        icon: "fas fa-university",
        challenge: "A leading regional bank needed high-frequency data protection and real-time antivirus defenses for branch workstations against increasing ransomware attacks.",
        solutions: [
          { title: "Acronis Cyber Protect", desc: "Integrated AI-based ransomware detection and instant backup engines." },
          { title: "Immutable Image Backups", desc: "Automated bootable disk images stored in secure offsite repositories." }
        ],
        impacts: [
          { number: "Zero", label: "Ransomware Penetration Incidents" },
          { number: "100%", label: "Workstation Data Redundancy" }
        ],
        strengths: [
          "AI behavioral threat shield configuration",
          "Automated boot backup scripting skills",
          "Centralized branch recovery orchestration"
        ]
      },
      {
        id: "healthcare",
        title: "Healthcare & Hospitals",
        scale: "Patient Data Protection & Clinical Recovery",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed secure backup and protection for patient records, clinical applications, and healthcare systems to prevent downtime and data loss from cyber incidents.",
        solutions: [
          { title: "Acronis Cyber Backup for Healthcare", desc: "Automated backup of EHR and clinical databases with HIPAA-compliant storage." },
          { title: "Acronis Disaster Recovery", desc: "Failover to standby cloud instances within minutes of an outage." }
        ],
        impacts: [
          { number: "15 min", label: "Recovery Time Objective (RTO)" },
          { number: "100%", label: "HIPAA-Compliant Data Protection" }
        ],
        strengths: [
          "Healthcare regulation backup architecture design",
          "Agentless VM backup for clinical hypervisors",
          "Immutable cloud storage configuration"
        ]
      },
      {
        id: "government",
        title: "Government Organizations",
        scale: "Centralized Backup & Endpoint Protection",
        icon: "fas fa-university",
        challenge: "Government organizations required centralized backup, endpoint protection, and disaster recovery for mission-critical infrastructure and citizen services.",
        solutions: [
          { title: "Acronis Cyber Protect Cloud", desc: "Centralized management of backup and security across all government endpoints." },
          { title: "Air-Gapped Backup Storage", desc: "Isolated backup repositories protecting against network-based attacks." }
        ],
        impacts: [
          { number: "100%", label: "Critical Data Protected" },
          { number: "Zero", label: "Successful Ransomware Encryptions" }
        ],
        strengths: [
          "Government-grade isolated backup architecture",
          "Multi-site backup orchestration expertise",
          "Security compliance framework alignment"
        ]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "ERP Backup & Operational Recovery",
        icon: "fas fa-industry",
        challenge: "Manufacturing organizations needed reliable backup and recovery solutions for ERP systems, production environments, and operational infrastructure to avoid costly downtime.",
        solutions: [
          { title: "Acronis CDP for ERP", desc: "Continuous data protection with sub-minute RPO for production databases." },
          { title: "Bare-Metal Recovery", desc: "Full system recovery to any hardware minimizing production line delays." }
        ],
        impacts: [
          { number: "Zero", label: "Production Data Loss" },
          { number: "30 min", label: "Full System Recovery Time" }
        ],
        strengths: [
          "CDP continuous replication architecture",
          "ERP system backup integration expertise",
          "Bare-metal recovery workflow design"
        ]
      },
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Cloud Workload & Endpoint Security",
        icon: "fas fa-laptop",
        challenge: "IT companies needed centralized backup, endpoint security, cloud workload protection, and disaster recovery for development and business operations.",
        solutions: [
          { title: "Acronis Cyber Protect Cloud", desc: "Unified backup and security platform covering all cloud workloads and endpoints." },
          { title: "Acronis Advanced Security", desc: "AI-powered threat detection and automated incident response for developer machines." }
        ],
        impacts: [
          { number: "100%", label: "Cloud Workload Coverage" },
          { number: "Zero", label: "Developer Endpoint Compromises" }
        ],
        strengths: [
          "Multi-cloud backup connector configurations",
          "Endpoint EDR and backup unified deployment",
          "DevOps environment protection architecture"
        ]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Academic Data & Endpoint Protection",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed protection for academic systems, student data, faculty endpoints, and digital learning platforms against ransomware and accidental deletion.",
        solutions: [
          { title: "Acronis Cyber Backup for Education", desc: "Automated backup of learning platforms, student databases, and admin systems." },
          { title: "Acronis Anti-Malware", desc: "AI-powered malware prevention for all campus endpoints including student devices." }
        ],
        impacts: [
          { number: "50,000+", label: "Student Records Protected" },
          { number: "Zero", label: "Exam Data Loss Events" }
        ],
        strengths: [
          "Campus-wide backup orchestration design",
          "Student data FERPA compliance architecture",
          "Centralized antivirus policy management"
        ]
      },
      {
        id: "retail",
        title: "Retail & E-Commerce",
        scale: "POS & Transaction Data Protection",
        icon: "fas fa-shopping-cart",
        challenge: "Retail businesses needed protection for POS systems, transaction data, branch infrastructure, and customer information against ransomware and hardware failures.",
        solutions: [
          { title: "Acronis Backup for Retail", desc: "Automated hourly backups of POS databases and store management systems." },
          { title: "Instant Recovery", desc: "Boot from backup to keep stores operational within minutes of system failure." }
        ],
        impacts: [
          { number: "< 5 min", label: "POS Recovery Time" },
          { number: "100%", label: "Transaction Data Integrity" }
        ],
        strengths: [
          "POS system backup and recovery automation",
          "Multi-branch centralized backup management",
          "Instant VM boot recovery configuration",
          "Centralized branch recovery orchestration"
        ]
      }
    ]
  },
  {
    id: "apple",
    brandName: "Apple Enterprise",
    tagline: "Scale business macOS deployments, enterprise device enrollment, and high-performance setups.",
    color: "#a6a6a6",
    icon: "fab fa-apple",
    cases: [
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Enterprise MacBook Fleet Provisioning",
        icon: "fas fa-laptop-code",
        challenge: "A leading software house required zero-touch enrollment and automated security setups for hybrid employees choosing Apple computers.",
        solutions: [
          { title: "Apple Business Manager & MDM", desc: "Zero-touch remote laptop configuration over the air." },
          { title: "Touch ID & FileVault Security", desc: "Enforced hardware security and data encryption profiles." }
        ],
        impacts: [
          { number: "50%", label: "Faster Employee Setup Times" },
          { number: "99%", label: "Developer Satisfaction" }
        ],
        strengths: [
          "Apple Business Manager tenant integrations",
          "Automated MDM payload enrollment scripting",
          "High performance creative tool tuning"
        ]
      },
      {
        id: "media",
        title: "Media & Creative Industry",
        scale: "High-Performance Mac Workstation Deployment",
        icon: "fas fa-film",
        challenge: "A media production company needed powerful systems for 4K video editing, motion graphics, and content production workflows.",
        solutions: [
          { title: "Apple Mac Studio & Mac Pro", desc: "High-performance workstations with Apple Silicon for video editing." },
          { title: "Final Cut Pro & ProRes Workflow", desc: "Optimized editing pipelines leveraging Apple GPU acceleration." }
        ],
        impacts: [
          { number: "3x", label: "Faster Video Render Times" },
          { number: "100%", label: "ProRes 4K Pipeline Stability" }
        ],
        strengths: [
          "Apple Silicon workstation performance optimization",
          "Creative suite configuration and deployment",
          "Storage RAID integration for media workflows"
        ]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "iPad & MacBook Digital Classroom Deployment",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed secure and reliable Apple devices for faculty, students, digital classrooms, and content creation at scale.",
        solutions: [
          { title: "Apple School Manager", desc: "Centralized device enrollment and app distribution for campus iPads." },
          { title: "Classroom App Management", desc: "Teacher-controlled iPad sessions for focused learning environments." }
        ],
        impacts: [
          { number: "5,000+", label: "iPads Deployed Campus-Wide" },
          { number: "Zero-Touch", label: "Device Enrollment Process" }
        ],
        strengths: [
          "Apple School Manager deployment expertise",
          "Shared iPad multi-user setup configurations",
          "Volume Purchase Program (VPP) app management"
        ]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Secure Clinical iPad & Mac Deployment",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed reliable Apple devices for clinical administration, patient bedside care, diagnostics, and telemedicine applications.",
        solutions: [
          { title: "iPad for Clinical Mobility", desc: "Managed iPads for bedside patient management and clinical documentation." },
          { title: "HIPAA-Compliant MDM Setup", desc: "Strict data encryption and remote wipe policies for all clinical devices." }
        ],
        impacts: [
          { number: "40%", label: "Faster Clinical Documentation" },
          { number: "100%", label: "HIPAA Device Compliance" }
        ],
        strengths: [
          "Healthcare MDM policy and encryption setup",
          "Clinical workflow app deployment expertise",
          "Remote device management and wipe capabilities"
        ]
      },
      {
        id: "enterprise",
        title: "Corporate Enterprises",
        scale: "Executive MacBook Fleet for Hybrid Workforce",
        icon: "fas fa-building",
        challenge: "Organizations needed secure, lightweight, and high-performance Apple devices for executives and hybrid workforce with seamless SSO integration.",
        solutions: [
          { title: "MacBook Pro for Executives", desc: "Thin, powerful laptops with Apple Silicon and 18-hour battery life." },
          { title: "Jamf Enterprise MDM", desc: "Zero-touch enrollment with corporate security policies enforced automatically." }
        ],
        impacts: [
          { number: "60%", label: "Reduction in Device Setup Time" },
          { number: "Zero", label: "BIOS-Level Security Exploits" }
        ],
        strengths: [
          "Jamf Pro MDM enterprise deployment expertise",
          "SSO federation with Azure AD and Okta",
          "Corporate security baseline configuration"
        ]
      },
      {
        id: "design",
        title: "Design & Animation Studios",
        scale: "High-Performance Creative Infrastructure",
        icon: "fas fa-palette",
        challenge: "Design and animation studios needed high-performance systems for 3D rendering, animation, graphic design, and large-format multimedia production.",
        solutions: [
          { title: "Mac Pro with Apple M2 Ultra", desc: "Maximum compute power for real-time 3D rendering and animation." },
          { title: "Thunderbolt Storage Arrays", desc: "High-speed external storage for large project file management." }
        ],
        impacts: [
          { number: "5x", label: "Faster 3D Render Performance" },
          { number: "40TB+", label: "Networked Storage Managed" }
        ],
        strengths: [
          "Apple Pro hardware configuration and optimization",
          "High-bandwidth Thunderbolt storage integration",
          "Studio workflow software configuration expertise"
        ]
      }
    ]
  },
  {
    id: "azure",
    brandName: "Microsoft Azure",
    tagline: "Highly scalable hybrid cloud databases, web hosting, and corporate infrastructure modernization.",
    color: "#0089d0",
    icon: "fab fa-microsoft",
    cases: [
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "Secure Cloud Infrastructure for Banking",
        icon: "fas fa-university",
        challenge: "Banks required highly secure, compliant, and scalable cloud infrastructure for financial applications, analytics, and disaster recovery.",
        solutions: [
          { title: "Azure Private Link & VNet", desc: "Isolated private cloud networking for core banking applications." },
          { title: "Azure Security Center", desc: "Continuous compliance monitoring and threat protection for financial workloads." }
        ],
        impacts: [
          { number: "99.99%", label: "Banking Application Uptime" },
          { number: "100%", label: "Regulatory Compliance Achieved" }
        ],
        strengths: [
          "Azure private networking and VNet peering design",
          "Banking compliance framework alignment",
          "Disaster recovery automation with Azure Site Recovery"
        ]
      },
      {
        id: "government",
        title: "Government Organizations",
        scale: "Citizen Services & Data Management Platform",
        icon: "fas fa-university",
        challenge: "Government organizations required secure, centralized, and scalable infrastructure for citizen services, applications, and data management.",
        solutions: [
          { title: "Azure Government Cloud", desc: "Compliance-certified cloud infrastructure for government data sovereignty." },
          { title: "Azure Active Directory", desc: "Centralized identity management for government employees and citizen portals." }
        ],
        impacts: [
          { number: "10x", label: "Citizen Service Scalability" },
          { number: "Zero", label: "Data Sovereignty Violations" }
        ],
        strengths: [
          "Government cloud compliance architecture",
          "Azure AD federation with government identity systems",
          "Multi-region disaster recovery configuration"
        ]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Digital Learning & Scalable Cloud Infrastructure",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions required scalable infrastructure for digital learning, online platforms, student collaboration, and secure identity management.",
        solutions: [
          { title: "Azure Virtual Desktop (AVD)", desc: "Cloud-based virtual labs accessible by students from any device." },
          { title: "Microsoft Teams + SharePoint", desc: "Integrated collaboration and content management for faculty and students." }
        ],
        impacts: [
          { number: "50,000+", label: "Concurrent Student Users Supported" },
          { number: "70%", label: "Infrastructure Cost Reduction" }
        ],
        strengths: [
          "AVD multi-session virtual desktop deployment",
          "Education tenant Azure AD configuration",
          "Teams Rooms and hybrid classroom architecture"
        ]
      },
      {
        id: "cloud-modernization",
        title: "E-Commerce Enterprise",
        scale: "Scalable Hybrid Cloud E-Commerce Orchestration",
        icon: "fas fa-shopping-cart",
        challenge: "A retail brand suffered server crashes during seasonal traffic spikes and required database auto-scaling and global content delivery.",
        solutions: [
          { title: "Azure App Services & SQL Scale", desc: "Automated scaling based on active browser request patterns." },
          { title: "Azure CDN & Front Door", desc: "Global asset caching to minimize page response latencies." }
        ],
        impacts: [
          { number: "10x", label: "Scale Capacity Maintained" },
          { number: "99.99%", label: "Cloud Application Uptime" }
        ],
        strengths: [
          "Azure dynamic load balancer configurations",
          "Secure SQL clustering and geo-replication",
          "Cost management optimization practices"
        ]
      }
    ]
  },
  {
    id: "dell",
    brandName: "Dell Technologies",
    tagline: "Enterprise Dell PowerEdge server clustering, secure backup systems, and storage SANs.",
    color: "#0078d4",
    icon: "fas fa-server",
    cases: [
      {
        id: "banking",
        title: "Banking Sector",
        scale: "High-Availability PowerEdge Infrastructure for Banking",
        icon: "fas fa-university",
        challenge: "A bank required high-throughput, zero-downtime server infrastructure for core banking applications and financial data processing.",
        solutions: [
          { title: "Dell PowerEdge HA Cluster", desc: "Hot-swappable redundant server nodes for continuous banking operations." },
          { title: "Dell PowerVault SAN", desc: "High-performance storage arrays with automated tiering for financial data." }
        ],
        impacts: [
          { number: "99.999%", label: "Core Banking Uptime" },
          { number: "Zero", label: "Unplanned Downtime Events" }
        ],
        strengths: ["HA cluster architecture design", "iDRAC remote management", "Storage SAN performance tuning"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Reliable Hospital IT Infrastructure",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed reliable computing systems for patient records, PACS medical imaging, diagnostics, and clinical applications.",
        solutions: [
          { title: "Dell PowerEdge for HIS/PACS", desc: "High-compute servers for medical imaging and clinical workloads." },
          { title: "Dell EMC Storage", desc: "Scalable storage for medical imaging archives and EHR systems." }
        ],
        impacts: [
          { number: "100%", label: "Clinical System Availability" },
          { number: "50%", label: "Faster Medical Image Retrieval" }
        ],
        strengths: ["Healthcare workload server configuration", "PACS storage integration expertise", "HIPAA-compliant infrastructure design"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Campus Digital Learning Infrastructure",
        icon: "fas fa-graduation-cap",
        challenge: "Universities needed scalable server infrastructure for digital classrooms, virtual labs, LMS platforms, and student portals.",
        solutions: [
          { title: "Dell PowerEdge Tower Servers", desc: "Cost-effective compute for campus data centers and virtual labs." },
          { title: "Dell Networking Switches", desc: "High-speed campus network backbone supporting thousands of users." }
        ],
        impacts: [
          { number: "10,000+", label: "Students Supported Concurrently" },
          { number: "40%", label: "Infrastructure Cost Reduction" }
        ],
        strengths: ["Campus data center design", "Education workload optimization", "Network switch configuration"]
      },
      {
        id: "enterprise",
        title: "Enterprise & Corporate Offices",
        scale: "Hybrid Workplace Server Infrastructure",
        icon: "fas fa-building",
        challenge: "Large enterprises needed scalable compute and storage infrastructure supporting hybrid work, cloud burst, and enterprise applications.",
        solutions: [
          { title: "Dell VxRail HCI", desc: "Hyper-converged infrastructure simplifying VM management at enterprise scale." },
          { title: "Dell Apex Cloud Platform", desc: "Flexible as-a-service compute matching hybrid workplace demand." }
        ],
        impacts: [
          { number: "60%", label: "Faster VM Provisioning" },
          { number: "99.9%", label: "Enterprise Application Uptime" }
        ],
        strengths: ["VxRail HCI deployment expertise", "Apex cloud integration design", "Enterprise capacity planning"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Industrial IT Infrastructure for Smart Factory",
        icon: "fas fa-industry",
        challenge: "Manufacturing companies required reliable infrastructure for ERP, MES, production monitoring, and OT/IT convergence.",
        solutions: [
          { title: "Dell Rugged Edge Servers", desc: "Hardened compute deployed directly on factory floors." },
          { title: "Dell EMC PowerScale", desc: "Scalable NAS storage for large production data and analytics." }
        ],
        impacts: [
          { number: "Zero", label: "Production Line Downtime" },
          { number: "Real-Time", label: "OT Data Processing" }
        ],
        strengths: ["Rugged edge server deployment", "Factory floor OT/IT integration", "ERP system infrastructure design"]
      },
      {
        id: "government",
        title: "Government & Defence",
        scale: "Secure Policy-Driven Government Infrastructure",
        icon: "fas fa-shield-alt",
        challenge: "Government agencies required secure, policy-driven, and high-performance IT infrastructure meeting strict compliance and data sovereignty requirements.",
        solutions: [
          { title: "Dell PowerEdge Secure Boot", desc: "BIOS-level security and firmware validation for all servers." },
          { title: "Dell APEX Private Cloud", desc: "On-premises private cloud meeting government data sovereignty rules." }
        ],
        impacts: [
          { number: "100%", label: "Government Compliance Met" },
          { number: "Zero", label: "Firmware Tampering Incidents" }
        ],
        strengths: ["Government compliance infrastructure design", "Secure boot and firmware hardening", "Private cloud on-prem deployment"]
      }
    ]
  },
  {
    id: "forcepoint",
    brandName: "Forcepoint",
    tagline: "Risk-based secure web gateway, cloud DLP policies, and secure SASE connections.",
    color: "#4f46e5",
    icon: "fas fa-lock",
    cases: [
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "Data Loss Prevention for Financial Data",
        icon: "fas fa-university",
        challenge: "A bank needed to prevent sensitive financial data and customer PII from leaking via email, cloud apps, and employee endpoints.",
        solutions: [
          { title: "Forcepoint DLP", desc: "Policy-driven data classification blocking unauthorized transfers of financial data." },
          { title: "Forcepoint ONE SASE", desc: "Secure web gateway filtering malicious traffic for all remote banking users." }
        ],
        impacts: [
          { number: "100%", label: "PII Data Leak Channels Blocked" },
          { number: "Zero", label: "Regulatory Compliance Violations" }
        ],
        strengths: ["Financial data DLP policy architecture", "SASE remote access security", "Compliance framework alignment"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Patient Data Security & Access Control",
        icon: "fas fa-hospital",
        challenge: "Healthcare organizations needed to protect patient records and medical information from unauthorized sharing or accidental leakage.",
        solutions: [
          { title: "Forcepoint DLP for Healthcare", desc: "HIPAA-aligned policies protecting patient data across all digital channels." },
          { title: "Forcepoint Web Security", desc: "Blocking malicious websites accessed from clinical workstations." }
        ],
        impacts: [
          { number: "100%", label: "HIPAA DLP Compliance" },
          { number: "Zero", label: "Patient Data Breach Events" }
        ],
        strengths: ["HIPAA DLP policy design", "Clinical workstation web filtering", "Healthcare data classification"]
      },
      {
        id: "government",
        title: "Government & Defence",
        scale: "Zero Trust Security for Government Networks",
        icon: "fas fa-shield-alt",
        challenge: "Government sectors required Zero Trust access control, insider threat monitoring, and strict data loss prevention for classified systems.",
        solutions: [
          { title: "Forcepoint Zero Trust CDR", desc: "Content disarm and reconstruct for all file transfers to classified systems." },
          { title: "Forcepoint Insider Threat", desc: "Behavioral analytics detecting anomalous user activity on sensitive data." }
        ],
        impacts: [
          { number: "100%", label: "Classified Data Channel Control" },
          { number: "60%", label: "Reduction in Insider Threat Risk" }
        ],
        strengths: ["Government-grade zero trust architecture", "Insider threat behavioral analytics", "CDR file sanitization deployment"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Intellectual Property Protection",
        icon: "fas fa-industry",
        challenge: "Manufacturing companies needed to protect product designs, R&D data, and proprietary processes from leaving the organization.",
        solutions: [
          { title: "Forcepoint DLP for IP", desc: "Classification and blocking of design files, CAD data, and trade secrets." },
          { title: "Forcepoint Cloud Security Gateway", desc: "Monitoring and controlling cloud upload of sensitive manufacturing data." }
        ],
        impacts: [
          { number: "100%", label: "R&D Data Protected" },
          { number: "Zero", label: "IP Exfiltration Incidents" }
        ],
        strengths: ["IP data classification design", "Cloud egress DLP policy", "CAD/design file pattern detection"]
      },
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Cloud & Endpoint Security for DevOps Teams",
        icon: "fas fa-laptop",
        challenge: "IT companies required centralized protection for source code, cloud workloads, and remote employees using personal devices.",
        solutions: [
          { title: "Forcepoint CASB", desc: "Cloud access security broker monitoring sanctioned and shadow IT cloud usage." },
          { title: "Forcepoint Endpoint DLP", desc: "Preventing source code and customer data from leaving developer machines." }
        ],
        impacts: [
          { number: "100%", label: "Shadow IT Visibility Achieved" },
          { number: "Zero", label: "Source Code Leak Incidents" }
        ],
        strengths: ["CASB deployment and policy architecture", "Developer endpoint DLP configuration", "Shadow IT discovery expertise"]
      },
      {
        id: "retail",
        title: "Retail & E-Commerce",
        scale: "Customer Payment Data Protection",
        icon: "fas fa-shopping-cart",
        challenge: "Retail organizations needed to protect customer payment card data, transaction records, and PII across POS systems and e-commerce platforms.",
        solutions: [
          { title: "Forcepoint DLP for PCI-DSS", desc: "PCI-DSS aligned policies preventing credit card data exposure." },
          { title: "Forcepoint Secure Web Gateway", desc: "Filtering malicious traffic targeting retail e-commerce portals." }
        ],
        impacts: [
          { number: "100%", label: "PCI-DSS Compliance Achieved" },
          { number: "Zero", label: "Payment Card Data Breaches" }
        ],
        strengths: ["PCI-DSS DLP policy configuration", "E-commerce traffic security", "Retail endpoint data protection"]
      }
    ]
  },
  {
    id: "gfisoftware",
    brandName: "GFI Software",
    tagline: "Kerio Control firewalls, advanced mail filter security, and endpoint patch management.",
    color: "#3b82f6",
    icon: "fas fa-mail-bulk",
    cases: [
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "Email Security & Compliance for Banks",
        icon: "fas fa-university",
        challenge: "Banks required secure email communication and protection against phishing, ransomware, and regulatory non-compliance.",
        solutions: [
          { title: "GFI MailEssentials", desc: "Advanced spam filtering and email threat protection for banking staff." },
          { title: "GFI LanGuard Patch Management", desc: "Automated patching of banking workstations meeting compliance requirements." }
        ],
        impacts: [
          { number: "99%", label: "Phishing Emails Blocked" },
          { number: "100%", label: "Patch Compliance Achieved" }
        ],
        strengths: ["Email security policy design", "Regulatory patch compliance automation", "Financial sector network security"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Server & Network Monitoring for Production",
        icon: "fas fa-industry",
        challenge: "Manufacturing organizations required proactive monitoring of servers, OT networks, and production infrastructure to minimize downtime.",
        solutions: [
          { title: "GFI LanGuard Network Scanner", desc: "Continuous vulnerability scanning across manufacturing network devices." },
          { title: "Kerio Control Firewall", desc: "Protecting OT/IT network boundaries at manufacturing sites." }
        ],
        impacts: [
          { number: "95%", label: "Network Threat Containment" },
          { number: "Zero", label: "Unpatched Critical Vulnerabilities" }
        ],
        strengths: ["OT/IT boundary firewall configuration", "Vulnerability scanning automation", "Production network security design"]
      },
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Centralized Monitoring & Patch Management",
        icon: "fas fa-laptop",
        challenge: "IT companies required centralized patch management, network monitoring, and secure communications infrastructure for operations.",
        solutions: [
          { title: "GFI LanGuard for IT", desc: "Centralized patch deployment for all servers, desktops, and network devices." },
          { title: "GFI MailEssentials", desc: "Protecting corporate email from malware, spam, and phishing campaigns." }
        ],
        impacts: [
          { number: "80%", label: "Reduction in Patch Deployment Time" },
          { number: "Zero", label: "Successful Email Malware Delivery" }
        ],
        strengths: ["Multi-OS patch management expertise", "Email gateway security configuration", "Central IT management console setup"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Endpoint Monitoring & Secure Communication",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed secure communication, endpoint monitoring, and centralized IT management for academic operations.",
        solutions: [
          { title: "GFI LanGuard for Campus", desc: "Network vulnerability scanning and patch management for campus devices." },
          { title: "Kerio Connect Email Server", desc: "Reliable on-premises email platform for faculty and students." }
        ],
        impacts: [
          { number: "5,000+", label: "Campus Endpoints Managed" },
          { number: "99.9%", label: "Email Service Uptime" }
        ],
        strengths: ["Campus network security scanning", "On-premises email server deployment", "Education IT compliance support"]
      },
      {
        id: "retail",
        title: "Retail & E-Commerce",
        scale: "Branch Infrastructure Visibility",
        icon: "fas fa-shopping-cart",
        challenge: "Retail organizations needed centralized monitoring, secure branch communications, and infrastructure visibility across multiple store locations.",
        solutions: [
          { title: "Kerio Control for Retail Branches", desc: "Branch firewall and VPN connectivity to corporate headquarters." },
          { title: "GFI LanGuard for Stores", desc: "Automated patch deployment ensuring all POS systems stay secure." }
        ],
        impacts: [
          { number: "200+", label: "Store Locations Secured" },
          { number: "99.9%", label: "Branch VPN Uptime" }
        ],
        strengths: ["Multi-branch VPN architecture", "Retail POS patch management", "Centralized branch network monitoring"]
      }
    ]
  },
  {
    id: "greythr",
    brandName: "greytHR",
    tagline: "Automated cloud payroll calculations, shift scheduling, and employee attendance.",
    color: "#0284c7",
    icon: "fas fa-users-cog",
    cases: [
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Payroll & Hybrid Workforce Management",
        icon: "fas fa-laptop-code",
        challenge: "IT companies needed efficient payroll automation, attendance tracking, and HR management for large distributed and hybrid teams.",
        solutions: [
          { title: "greytHR Payroll Engine", desc: "Automated salary calculation with TDS, PF, and ESI compliance." },
          { title: "greytHR Attendance Module", desc: "Geo-fenced attendance tracking for hybrid employees." }
        ],
        impacts: [
          { number: "70%", label: "Reduction in HR Processing Time" },
          { number: "100%", label: "Statutory Compliance Achieved" }
        ],
        strengths: ["IT payroll compliance automation", "Geo-fenced attendance configuration", "HRMS integration expertise"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Shift & Payroll Processing for Factory Workers",
        icon: "fas fa-industry",
        challenge: "A manufacturing company with varied shift patterns needed accurate attendance tracking and automated payroll for thousands of factory workers.",
        solutions: [
          { title: "greytHR Shift Management", desc: "Automated shift roster planning and biometric attendance integration." },
          { title: "Statutory Compliance Engine", desc: "Automated PF, ESI, and labor law compliance calculations." }
        ],
        impacts: [
          { number: "60%", label: "Saved HR Administrative Time" },
          { number: "Zero", label: "Payroll Compliance Violations" }
        ],
        strengths: ["Shift roster automation design", "Biometric system API integration", "Labor law compliance configuration"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Faculty & Staff HR Management",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions required centralized HR systems for faculty payroll, leave management, and academic staff administration.",
        solutions: [
          { title: "greytHR for Education", desc: "Centralized payroll and leave management for teaching and non-teaching staff." },
          { title: "Employee Self-Service Portal", desc: "Faculty self-service access to payslips, leaves, and HR documents." }
        ],
        impacts: [
          { number: "50%", label: "Reduction in HR Queries" },
          { number: "100%", label: "On-Time Salary Processing" }
        ],
        strengths: ["Education sector payroll design", "Self-service portal configuration", "Academic staff categorization setup"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Shift-Based Employee HR Management",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed efficient HR operations for doctors, nurses, admin staff, and shift-based clinical employees with complex pay structures.",
        solutions: [
          { title: "greytHR Healthcare Module", desc: "Configurable pay structures for doctors, nurses, and support staff." },
          { title: "Shift & Roster Management", desc: "Automated 24/7 shift planning with leave and overtime calculation." }
        ],
        impacts: [
          { number: "100%", label: "Payroll Accuracy Rate" },
          { number: "40%", label: "HR Processing Time Saved" }
        ],
        strengths: ["Healthcare pay structure configuration", "24/7 roster management design", "Clinical staff compliance setup"]
      },
      {
        id: "retail",
        title: "Retail Sector",
        scale: "Multi-Location Employee Management",
        icon: "fas fa-shopping-cart",
        challenge: "Retail chains needed centralized employee management, attendance tracking, and payroll processing across hundreds of store locations.",
        solutions: [
          { title: "greytHR Multi-Location HR", desc: "Centralized HRMS managing employees across all retail branches." },
          { title: "POS-Linked Attendance", desc: "Integration with store POS systems for seamless attendance tracking." }
        ],
        impacts: [
          { number: "300+", label: "Store Locations Managed" },
          { number: "Zero", label: "Payroll Errors Across Branches" }
        ],
        strengths: ["Multi-location HRMS configuration", "Retail attendance system integration", "Branch payroll centralization"]
      },
      {
        id: "enterprise",
        title: "Enterprises & SMEs",
        scale: "Modern HR & Payroll Automation",
        icon: "fas fa-building",
        challenge: "Organizations needed modern cloud HR systems to replace manual Excel-based HR and payroll processes causing errors and delays.",
        solutions: [
          { title: "greytHR Cloud Platform", desc: "Cloud-based HRMS replacing manual processes with automated workflows." },
          { title: "Compliance Dashboard", desc: "Real-time statutory compliance monitoring across all locations." }
        ],
        impacts: [
          { number: "80%", label: "Reduction in Manual HR Work" },
          { number: "100%", label: "On-Time Compliance Filing" }
        ],
        strengths: ["Cloud HRMS migration design", "Compliance dashboard configuration", "Payroll automation architecture"]
      },
      {
        id: "startup",
        title: "Startups & Growing Businesses",
        scale: "Scalable HR Solutions for Fast-Growing Teams",
        icon: "fas fa-rocket",
        challenge: "Growing startups needed affordable, scalable HR solutions to onboard employees, process payroll, and manage leaves efficiently.",
        solutions: [
          { title: "greytHR Starter Plan", desc: "Lightweight HR platform covering payroll, leave, and attendance." },
          { title: "Digital Onboarding", desc: "Paperless employee onboarding with automated document collection." }
        ],
        impacts: [
          { number: "3x", label: "Faster Employee Onboarding" },
          { number: "Zero", label: "Payroll Compliance Issues" }
        ],
        strengths: ["Startup HR platform setup", "Digital onboarding workflow design", "Scalable HRMS configuration"]
      }
    ]
  },
  {
    id: "hp",
    brandName: "HP Enterprise",
    tagline: "Corporate EliteBook fleets, secure business printing, and lifecycle hardware.",
    color: "#0096d6",
    icon: "fas fa-print",
    cases: [
      {
        id: "banking",
        title: "Banking Sector",
        scale: "Secure Computing Fleet for Banking Operations",
        icon: "fas fa-university",
        challenge: "Banks required secure, high-performance devices for employees with hardware-level security protecting sensitive financial data.",
        solutions: [
          { title: "HP EliteBook with Wolf Security", desc: "Business laptops with hardware-enforced malware isolation below the OS." },
          { title: "HP Sure Start BIOS", desc: "Self-healing BIOS preventing firmware attacks on banking devices." }
        ],
        impacts: [
          { number: "Zero", label: "BIOS-Level Security Exploits" },
          { number: "100%", label: "Hardware Self-Healing Active" }
        ],
        strengths: ["Wolf Security hardware isolation config", "HP Sure Start firmware deployment", "Banking device fleet management"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Reliable Hospital Devices & Print Infrastructure",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed reliable computing devices for clinical staff and secure printing for patient records and prescriptions.",
        solutions: [
          { title: "HP ProBook for Clinical Staff", desc: "Durable, reliable laptops for doctors and administrative teams." },
          { title: "HP LaserJet Enterprise for Hospitals", desc: "Secure networked printing with PIN-protected document release." }
        ],
        impacts: [
          { number: "100%", label: "Clinical Device Reliability" },
          { number: "Zero", label: "Unauthorized Document Prints" }
        ],
        strengths: ["Clinical environment device deployment", "Secure pull-printing configuration", "Healthcare fleet lifecycle management"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Student & Faculty Device Deployment",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed affordable, durable computing devices for students and faculty with centralized management.",
        solutions: [
          { title: "HP Chromebook Enterprise", desc: "Affordable cloud-first devices for student digital learning programs." },
          { title: "HP Device as a Service (DaaS)", desc: "Subscription device management including repairs and upgrades." }
        ],
        impacts: [
          { number: "10,000+", label: "Student Devices Deployed" },
          { number: "50%", label: "Device Management Cost Reduction" }
        ],
        strengths: ["Large-scale student device deployment", "HP DaaS lifecycle management", "Education MDM configuration"]
      },
      {
        id: "enterprise",
        title: "Enterprise & Corporate Offices",
        scale: "Hybrid Workplace Device Infrastructure",
        icon: "fas fa-building",
        challenge: "Organizations needed scalable computing devices and managed print services for modern hybrid workplaces.",
        solutions: [
          { title: "HP EliteBook & ZBook Fleet", desc: "Premium business laptops for office and remote workforce productivity." },
          { title: "HP Managed Print Services", desc: "Centralized fleet management reducing printing costs by 30%." }
        ],
        impacts: [
          { number: "30%", label: "Print Cost Reduction" },
          { number: "5,000+", label: "Devices Under Management" }
        ],
        strengths: ["Enterprise laptop fleet deployment", "Managed print services configuration", "Print analytics dashboard setup"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Industrial Workstation & Print Infrastructure",
        icon: "fas fa-industry",
        challenge: "Manufacturing companies required reliable workstations for CAD/CAM design, ERP operations, and industrial-floor label printing.",
        solutions: [
          { title: "HP Z-Series Workstations", desc: "High-performance CAD/CAM workstations for engineering design teams." },
          { title: "HP Industrial Label Printers", desc: "Reliable label and barcode printing for production floor operations." }
        ],
        impacts: [
          { number: "3x", label: "Faster CAD Rendering Performance" },
          { number: "Zero", label: "Production Label Printing Failures" }
        ],
        strengths: ["Z-Series workstation configuration", "Industrial printer fleet management", "CAD application optimization"]
      },
      {
        id: "government",
        title: "Government & Defence",
        scale: "Secure Policy-Driven Government Devices",
        icon: "fas fa-shield-alt",
        challenge: "Government and defence organizations required secure, policy-driven, and high-performance devices meeting strict security certifications.",
        solutions: [
          { title: "HP EliteBook Government Edition", desc: "FIPS 140-2 certified devices for classified government environments." },
          { title: "HP Sure View Privacy Screen", desc: "Built-in privacy filters preventing visual eavesdropping on sensitive documents." }
        ],
        impacts: [
          { number: "100%", label: "Government Security Certification Met" },
          { number: "Zero", label: "Visual Eavesdropping Incidents" }
        ],
        strengths: ["FIPS-certified device deployment", "Government security baseline configuration", "Physical security feature management"]
      }
    ]
  },
  {
    id: "ims",
    brandName: "IMS",
    tagline: "Infrastructure management services, thermal rack layouts, and continuous NOC health audits.",
    color: "#0891b2",
    icon: "fas fa-network-wired",
    cases: [
      {
        id: "healthcare",
        title: "Healthcare & Hospitals",
        scale: "System & Network Monitoring for Clinical Operations",
        icon: "fas fa-hospital",
        challenge: "Hospitals required reliable monitoring of healthcare systems, medical applications, servers, and network infrastructure for uninterrupted patient services.",
        solutions: [
          { title: "IMS NOC Monitoring", desc: "24/7 monitoring of hospital servers, networks, and critical clinical applications." },
          { title: "IMS Infrastructure Management", desc: "Proactive alerts and incident response for healthcare IT systems." }
        ],
        impacts: [
          { number: "99.9%", label: "Clinical System Availability" },
          { number: "< 5 min", label: "Incident Response Time" }
        ],
        strengths: ["Healthcare IT monitoring setup", "24/7 NOC operations management", "Clinical system alerting configuration"]
      },
      {
        id: "government",
        title: "Government Organizations",
        scale: "Infrastructure Visibility for Government Systems",
        icon: "fas fa-landmark",
        challenge: "Government departments required centralized monitoring and operational visibility across critical e-governance infrastructure and digital services.",
        solutions: [
          { title: "IMS Datacenter Services", desc: "Structured datacenter management for government server and network infrastructure." },
          { title: "IMS Compliance Monitoring", desc: "Audit-ready infrastructure management meeting government compliance requirements." }
        ],
        impacts: [
          { number: "100%", label: "Infrastructure Compliance Coverage" },
          { number: "Zero", label: "Undetected Critical Failures" }
        ],
        strengths: ["Government datacenter management", "Compliance monitoring architecture", "Critical infrastructure audit readiness"]
      },
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Cloud & Virtualization Infrastructure Monitoring",
        icon: "fas fa-laptop-code",
        challenge: "IT companies needed centralized monitoring for cloud infrastructure, virtualization platforms, application stacks, and enterprise workloads.",
        solutions: [
          { title: "IMS Cloud Monitoring Services", desc: "Visibility into hybrid cloud, hypervisors, and container workloads." },
          { title: "IMS ITSM Integration", desc: "Automated ticket creation from monitoring alerts for rapid resolution." }
        ],
        impacts: [
          { number: "80%", label: "Faster Mean Time to Resolve" },
          { number: "99.9%", label: "Cloud Platform Availability" }
        ],
        strengths: ["Cloud infrastructure monitoring design", "ITSM alerting integration", "Virtualization platform monitoring"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Production System & Network Monitoring",
        icon: "fas fa-industry",
        challenge: "Manufacturing companies needed continuous visibility into production systems, industrial networks, OT infrastructure, and ERP platforms.",
        solutions: [
          { title: "IMS OT/IT Network Monitoring", desc: "Monitoring production floor networks, PLCs, and SCADA systems." },
          { title: "IMS ERP System Monitoring", desc: "Proactive monitoring ensuring ERP availability for production operations." }
        ],
        impacts: [
          { number: "Zero", label: "Undetected Production Network Failures" },
          { number: "99.9%", label: "ERP System Uptime" }
        ],
        strengths: ["OT/IT monitoring architecture", "SCADA system visibility setup", "Manufacturing network monitoring"]
      },
      {
        id: "bfsi",
        title: "Banking & Financial Services",
        scale: "High-Availability Infrastructure Monitoring",
        icon: "fas fa-university",
        challenge: "Banks required continuous monitoring of critical banking systems, ATM networks, and financial data infrastructure to ensure zero downtime.",
        solutions: [
          { title: "IMS Banking Infrastructure NOC", desc: "24/7 real-time monitoring of core banking servers and ATM networks." },
          { title: "IMS SLA Management", desc: "Monitoring against strict banking SLAs with automated escalation workflows." }
        ],
        impacts: [
          { number: "99.999%", label: "Banking System Availability" },
          { number: "100%", label: "SLA Compliance Met" }
        ],
        strengths: ["Core banking monitoring architecture", "ATM network visibility design", "Banking SLA management setup"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Campus-Wide Network & System Monitoring",
        icon: "fas fa-graduation-cap",
        challenge: "Universities needed centralized visibility across campus networks, servers, digital learning applications, and student-facing systems.",
        solutions: [
          { title: "IMS Campus Network Monitoring", desc: "Real-time visibility into campus switches, access points, and LAN infrastructure." },
          { title: "IMS Application Monitoring", desc: "Proactive monitoring of LMS platforms and student portal availability." }
        ],
        impacts: [
          { number: "10,000+", label: "Campus Devices Monitored" },
          { number: "99.9%", label: "LMS Platform Uptime" }
        ],
        strengths: ["Campus network monitoring design", "LMS application availability setup", "Student portal performance monitoring"]
      }
    ]
  },
  {
    id: "k7security",
    brandName: "K7 Security",
    tagline: "Lightweight endpoint antivirus, cloud-managed defenses, and local personal firewalls.",
    color: "#e8232a",
    icon: "fas fa-user-shield",
    cases: [
      {
        id: "defence",
        title: "Defence Sector",
        scale: "High-Security Endpoint Protection",
        icon: "fas fa-shield-alt",
        challenge: "Defence organizations required highly secure endpoint protection and strict access control to safeguard sensitive classified systems and data.",
        solutions: [
          { title: "K7 Enterprise Security", desc: "Centrally managed endpoint security across all classified workstations." },
          { title: "K7 Device Control", desc: "USB and peripheral device control preventing unauthorized data transfers." }
        ],
        impacts: [
          { number: "Zero", label: "Malware Incidents on Classified Systems" },
          { number: "100%", label: "USB Device Policy Enforced" }
        ],
        strengths: ["Air-gapped environment endpoint security", "Device control policy configuration", "Classified system security hardening"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Lightweight Campus Endpoint Protection",
        icon: "fas fa-graduation-cap",
        challenge: "Schools with legacy computer labs required lightweight antivirus that protected students without slowing down aging hardware.",
        solutions: [
          { title: "K7 Endpoint Security Cloud", desc: "Lightweight antivirus with minimal system resource usage." },
          { title: "K7 USB Auto-Scan", desc: "Automated isolation of malware on student storage drives." }
        ],
        impacts: [
          { number: "Zero", label: "Lab Virus Spread Incidents" },
          { number: "99.9%", label: "Workstation Performance Maintained" }
        ],
        strengths: ["Low-overhead antivirus deployment", "Centralized cloud console management", "USB threat isolation configuration"]
      },
      {
        id: "retail",
        title: "Retail Sector",
        scale: "Secure POS & Branch Systems",
        icon: "fas fa-shopping-cart",
        challenge: "Retail businesses needed cost-effective endpoint protection for POS systems, billing servers, and employee devices across all branches.",
        solutions: [
          { title: "K7 Total Security for Retail", desc: "Protecting POS terminals and employee PCs from malware and ransomware." },
          { title: "K7 Centralized Management", desc: "Remote monitoring and policy management across all store locations." }
        ],
        impacts: [
          { number: "200+", label: "Store Locations Protected" },
          { number: "Zero", label: "POS System Malware Incidents" }
        ],
        strengths: ["Retail POS endpoint security config", "Multi-branch centralized management", "Ransomware protection deployment"]
      },
      {
        id: "banking",
        title: "Banking Sector",
        scale: "Compliance-Ready Endpoint Security",
        icon: "fas fa-university",
        challenge: "Banks required strict endpoint security, data protection, and compliance-ready cybersecurity for all branch and corporate workstations.",
        solutions: [
          { title: "K7 Enterprise Security for Banking", desc: "Compliance-mapped endpoint protection for all banking workstations." },
          { title: "K7 Email Protection", desc: "Advanced email threat protection blocking phishing attacks targeting bank staff." }
        ],
        impacts: [
          { number: "100%", label: "Endpoint Compliance Coverage" },
          { number: "Zero", label: "Phishing Success Incidents" }
        ],
        strengths: ["Banking compliance endpoint architecture", "Email threat protection setup", "Branch security policy management"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Hospital & Patient Data Security",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed to secure patient records, clinical workstations, medical device interfaces, and hospital networks from malware.",
        solutions: [
          { title: "K7 Healthcare Endpoint Security", desc: "HIPAA-aligned endpoint protection for all clinical and admin systems." },
          { title: "K7 Network Protection", desc: "Blocking network-borne threats targeting clinical systems." }
        ],
        impacts: [
          { number: "100%", label: "Clinical Endpoint Coverage" },
          { number: "Zero", label: "Patient Data Breach Events" }
        ],
        strengths: ["HIPAA-aligned security deployment", "Clinical workstation protection setup", "Hospital network threat blocking"]
      },
      {
        id: "enterprise",
        title: "Large-Scale Enterprises",
        scale: "Enterprise Endpoint Protection at Scale",
        icon: "fas fa-building",
        challenge: "Enterprises needed scalable, centrally managed cybersecurity protecting thousands of endpoints across multiple offices and remote workers.",
        solutions: [
          { title: "K7 Enterprise Security Cloud", desc: "Cloud-managed endpoint security with centralized policy across all offices." },
          { title: "K7 VPN & Firewall", desc: "Personal firewall and secure VPN for remote employee devices." }
        ],
        impacts: [
          { number: "10,000+", label: "Endpoints Under Management" },
          { number: "99.9%", label: "Threat Detection Rate" }
        ],
        strengths: ["Enterprise cloud console management", "Remote device security configuration", "Scalable policy deployment design"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Industrial Endpoint Security",
        icon: "fas fa-industry",
        challenge: "Manufacturing environments needed endpoint security for production floor PCs, industrial controllers, and connected operational technology devices.",
        solutions: [
          { title: "K7 Industrial Endpoint Security", desc: "Lightweight protection for industrial PCs running factory floor software." },
          { title: "K7 Device Control for OT", desc: "Preventing unauthorized USB and media access to production systems." }
        ],
        impacts: [
          { number: "Zero", label: "Production Floor Malware Incidents" },
          { number: "100%", label: "OT Device Control Enforced" }
        ],
        strengths: ["Industrial PC endpoint security config", "OT device control policy design", "Factory floor security architecture"]
      }
    ]
  },
  {
    id: "lenovo",
    brandName: "Lenovo Enterprise",
    tagline: "ThinkPad business laptops, high-performance ThinkSystem servers, and clustering.",
    color: "#e2231a",
    icon: "fas fa-laptop-code",
    cases: [
      {
        id: "banking",
        title: "Banking Sector",
        scale: "Secure Computing Devices for Financial Operations",
        icon: "fas fa-university",
        challenge: "Banks needed secure, high-performance ThinkPad devices with hardware-level security for employee banking operations.",
        solutions: [
          { title: "Lenovo ThinkPad with ThinkShield", desc: "Business laptops with BIOS-level security and firmware protection." },
          { title: "Lenovo Managed Services", desc: "Lifecycle management ensuring devices stay patched and compliant." }
        ],
        impacts: [
          { number: "5,000+", label: "Banking Devices Secured" },
          { number: "Zero", label: "Firmware Security Incidents" }
        ],
        strengths: ["ThinkShield security deployment", "Banking device fleet management", "Firmware compliance configuration"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Reliable Clinical & Administrative Devices",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed reliable computing devices for patient management, clinical documentation, and hospital administrative operations.",
        solutions: [
          { title: "Lenovo ThinkCentre for Clinics", desc: "All-in-one desktops for clinical workstations at nursing stations." },
          { title: "Lenovo ThinkPad for Mobile Clinicians", desc: "Lightweight laptops for doctors doing ward rounds and remote consultations." }
        ],
        impacts: [
          { number: "100%", label: "Clinical Device Reliability" },
          { number: "50%", label: "Faster Clinical Documentation" }
        ],
        strengths: ["Clinical workstation deployment", "Healthcare MDM enrollment setup", "Hospital device lifecycle management"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Digital Learning Device Infrastructure",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed scalable, cost-effective devices for student digital learning programs and faculty collaboration.",
        solutions: [
          { title: "Lenovo 300e Chromebook for Students", desc: "Rugged, affordable devices for student digital learning." },
          { title: "Lenovo Smart Collaboration Solutions", desc: "Interactive displays for smart classroom installations." }
        ],
        impacts: [
          { number: "15,000+", label: "Student Devices Deployed" },
          { number: "30%", label: "Device Cost Reduction vs Prior Fleet" }
        ],
        strengths: ["Large-scale student device deployment", "Smart classroom display setup", "Education MDM policy configuration"]
      },
      {
        id: "enterprise",
        title: "Enterprise & Corporate Offices",
        scale: "Hybrid Workplace Device Fleet",
        icon: "fas fa-building",
        challenge: "Organizations needed scalable, premium computing devices for hybrid workplace employees with seamless IT management.",
        solutions: [
          { title: "Lenovo ThinkPad X1 Series", desc: "Ultra-lightweight premium business laptops for executive and hybrid employees." },
          { title: "Lenovo DaaS", desc: "Device as a Service subscription covering procurement, management, and support." }
        ],
        impacts: [
          { number: "3,000+", label: "Enterprise Devices Managed" },
          { number: "40%", label: "IT Management Cost Reduction" }
        ],
        strengths: ["Premium device fleet deployment", "DaaS lifecycle management", "Enterprise MDM enrollment config"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Industrial IT & Server Infrastructure",
        icon: "fas fa-industry",
        challenge: "Manufacturing companies needed reliable ThinkSystem servers for ERP, production monitoring, and operational computing at multiple plant sites.",
        solutions: [
          { title: "Lenovo ThinkSystem SR Series", desc: "High-density rack servers for ERP and production management systems." },
          { title: "Lenovo XClarity Management", desc: "Centralized server management across all manufacturing sites." }
        ],
        impacts: [
          { number: "99.9%", label: "ERP Server Uptime" },
          { number: "50%", label: "Server Management Overhead Reduced" }
        ],
        strengths: ["ThinkSystem server deployment", "XClarity management platform setup", "Manufacturing ERP infrastructure design"]
      },
      {
        id: "government",
        title: "Government & Defence",
        scale: "Secure & Certified Government Devices",
        icon: "fas fa-shield-alt",
        challenge: "Government and defence organizations needed secure, certified computing devices meeting strict security and compliance requirements.",
        solutions: [
          { title: "Lenovo ThinkPad Government Edition", desc: "Devices meeting Common Criteria and FIPS security certifications." },
          { title: "Lenovo Security Suite", desc: "End-to-end encryption and remote management for classified environments." }
        ],
        impacts: [
          { number: "100%", label: "Government Security Standards Met" },
          { number: "Zero", label: "Hardware Security Violations" }
        ],
        strengths: ["Government-certified device deployment", "FIPS security configuration", "Classified environment device management"]
      }
    ]
  },
  {
    id: "logrhythm",
    brandName: "LogRhythm",
    tagline: "Enterprise-grade SIEM engine, automated threat analysis, and regulatory log tracking.",
    color: "#0ea5e9",
    icon: "fas fa-shield-alt",
    cases: [
      {
        id: "government",
        title: "Government & Defence",
        scale: "SIEM & Compliance Monitoring for Critical Infrastructure",
        icon: "fas fa-university",
        challenge: "Government organizations required centralized threat monitoring, compliance reporting, and real-time protection against advanced cyber threats.",
        solutions: [
          { title: "LogRhythm SIEM Platform", desc: "Centralized log ingestion and threat correlation for government systems." },
          { title: "LogRhythm UEBA", desc: "User and entity behavior analytics detecting insider threats and anomalies." }
        ],
        impacts: [
          { number: "100%", label: "Compliance Audit Coverage" },
          { number: "< 3 min", label: "Threat Alert Delivery Time" }
        ],
        strengths: ["Government SIEM architecture design", "UEBA behavioral analytics setup", "Compliance reporting automation"]
      },
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "Fraud Detection & 24/7 SOC Operations",
        icon: "fas fa-university",
        challenge: "Banks needed 24/7 security monitoring to detect fraud, insider threats, and suspicious transaction activity with automated alerting.",
        solutions: [
          { title: "LogRhythm Financial SIEM", desc: "Real-time correlation of transaction logs and user activity for fraud detection." },
          { title: "LogRhythm Automated Response", desc: "Playbook-driven automated blocking of suspicious accounts and transactions." }
        ],
        impacts: [
          { number: "90%", label: "Faster Fraud Detection" },
          { number: "Zero", label: "Missed Critical Security Events" }
        ],
        strengths: ["Banking fraud detection SIEM config", "Automated response playbook design", "Transaction log correlation setup"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Ransomware Protection & Clinical System Monitoring",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed continuous monitoring of healthcare systems and early detection of ransomware attacks targeting patient data.",
        solutions: [
          { title: "LogRhythm Healthcare SIEM", desc: "Monitoring clinical systems, EHR access, and medical device network activity." },
          { title: "LogRhythm Threat Intelligence", desc: "Threat feeds alerting on healthcare-targeted ransomware campaigns." }
        ],
        impacts: [
          { number: "Zero", label: "Successful Ransomware Encryptions" },
          { number: "100%", label: "Clinical System Log Coverage" }
        ],
        strengths: ["Healthcare SIEM architecture", "Ransomware early detection setup", "Clinical system monitoring design"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "OT & IT Security Visibility",
        icon: "fas fa-industry",
        challenge: "Manufacturing organizations needed security visibility across production systems, industrial IoT, and operational technology environments.",
        solutions: [
          { title: "LogRhythm OT/IT SIEM", desc: "Unified visibility across corporate IT and production floor OT systems." },
          { title: "LogRhythm Anomaly Detection", desc: "Detecting unusual OT device behavior indicating potential cyber intrusions." }
        ],
        impacts: [
          { number: "100%", label: "OT Asset Log Coverage" },
          { number: "Zero", label: "Undetected OT Intrusions" }
        ],
        strengths: ["OT/IT SIEM unified deployment", "Industrial anomaly detection setup", "Factory floor security monitoring"]
      },
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Centralized Cloud & Application Monitoring",
        icon: "fas fa-laptop",
        challenge: "IT companies needed centralized monitoring for cloud infrastructure, multi-cloud applications, and hybrid endpoint environments.",
        solutions: [
          { title: "LogRhythm Cloud SIEM", desc: "Cloud-native log collection from AWS, Azure, and GCP environments." },
          { title: "LogRhythm API Integration", desc: "Automated log ingestion from DevOps tools and CI/CD pipelines." }
        ],
        impacts: [
          { number: "100%", label: "Multi-Cloud Log Coverage" },
          { number: "70%", label: "Reduction in Alert Investigation Time" }
        ],
        strengths: ["Cloud SIEM architecture design", "Multi-cloud connector configuration", "DevOps log integration setup"]
      },
      {
        id: "retail",
        title: "Retail & E-Commerce",
        scale: "POS & Branch Security Monitoring",
        icon: "fas fa-shopping-cart",
        challenge: "Retail organizations needed protection for POS systems, customer payment data, and multi-branch networks from cyber threats.",
        solutions: [
          { title: "LogRhythm Retail SIEM", desc: "Centralized log collection from POS systems and branch network devices." },
          { title: "LogRhythm PCI-DSS Reporting", desc: "Automated PCI-DSS compliance reports from POS transaction logs." }
        ],
        impacts: [
          { number: "100%", label: "PCI-DSS Compliance Coverage" },
          { number: "Zero", label: "Undetected POS Security Breaches" }
        ],
        strengths: ["Retail POS SIEM integration", "PCI-DSS compliance reporting", "Multi-branch log centralization"]
      }
    ]
  },
  {
    id: "manageengine",
    brandName: "ManageEngine",
    tagline: "Unified ServiceDesk Plus workflows, endpoint patching, and dynamic UEM solutions.",
    color: "#f43f5e",
    icon: "fas fa-cogs",
    cases: [
      {
        id: "healthcare",
        title: "Healthcare & Pharmaceuticals",
        scale: "IT Management & Compliance for Healthcare",
        icon: "fas fa-hospital",
        challenge: "Healthcare organizations needed secure endpoint management, user access control, and IT compliance for clinical systems.",
        solutions: [
          { title: "ManageEngine ADManager Plus", desc: "User account lifecycle management for clinical and admin staff." },
          { title: "ManageEngine Endpoint Central", desc: "Centralized patch management for clinical workstations and medical PCs." }
        ],
        impacts: [
          { number: "100%", label: "Endpoint Patch Compliance" },
          { number: "60%", label: "Reduction in IT Admin Overhead" }
        ],
        strengths: ["Healthcare IT compliance management", "Clinical endpoint patch automation", "AD user lifecycle configuration"]
      },
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "Secure Access & Compliance Reporting",
        icon: "fas fa-university",
        challenge: "Financial institutions needed secure access control, compliance monitoring, and centralized IT management for critical banking systems.",
        solutions: [
          { title: "ManageEngine PAM360", desc: "Privileged access management for banking IT administrators." },
          { title: "ManageEngine Log360 SIEM", desc: "Compliance reporting and log management for banking audit requirements." }
        ],
        impacts: [
          { number: "100%", label: "Banking Compliance Achieved" },
          { number: "Zero", label: "Unauthorized Admin Access Events" }
        ],
        strengths: ["Banking PAM deployment", "SIEM compliance reporting setup", "Admin access governance design"]
      },
      {
        id: "textiles",
        title: "Textiles & Manufacturing",
        scale: "ERP & IT Operations Management",
        icon: "fas fa-cut",
        challenge: "Textile organizations needed centralized IT management across factories, warehouses, retail branches, and corporate offices.",
        solutions: [
          { title: "ManageEngine ServiceDesk Plus", desc: "IT service management across all manufacturing and retail locations." },
          { title: "ManageEngine OpManager", desc: "Network and infrastructure monitoring across factory and office sites." }
        ],
        impacts: [
          { number: "70%", label: "Faster IT Ticket Resolution" },
          { number: "99.9%", label: "Factory Network Availability" }
        ],
        strengths: ["Multi-site ITSM deployment", "Factory network monitoring", "ERP infrastructure management"]
      },
      {
        id: "agriculture",
        title: "Agriculture & Fertilizers",
        scale: "Remote Site IT Management",
        icon: "fas fa-seedling",
        challenge: "Agriculture companies needed reliable IT management across production plants, warehouses, remote offices, and distribution centers.",
        solutions: [
          { title: "ManageEngine Remote Monitoring", desc: "Centralized management of remote site servers, network, and endpoints." },
          { title: "ManageEngine Patch Manager Plus", desc: "Automated patch deployment to remote site devices from a central console." }
        ],
        impacts: [
          { number: "100%", label: "Remote Site Patch Compliance" },
          { number: "80%", label: "Reduction in Remote IT Issues" }
        ],
        strengths: ["Remote site IT management design", "Patch automation for distributed sites", "Centralized monitoring dashboard setup"]
      }
    ]
  },
  {
    id: "motadata",
    brandName: "Motadata",
    tagline: "Real-time network monitoring software (NMS), bandwidth audits, and dynamic ITSM solutions.",
    color: "#2563eb",
    icon: "fas fa-tachometer-alt",
    cases: [
      {
        id: "datacenter",
        title: "Data Center Infrastructure",
        scale: "Server, Storage & Virtualization Monitoring",
        icon: "fas fa-building",
        challenge: "Organizations needed centralized visibility into servers, storage, and virtualization to prevent unplanned downtime.",
        solutions: [
          { title: "Motadata AIOps Platform", desc: "Unified monitoring of physical servers, VMs, storage, and applications." },
          { title: "Motadata Auto-Remediation", desc: "Automated incident response reducing mean time to resolve." }
        ],
        impacts: [
          { number: "99.9%", label: "Data Center Uptime" },
          { number: "70%", label: "Reduction in MTTR" }
        ],
        strengths: ["Data center monitoring architecture", "AIOps auto-remediation setup", "Virtual infrastructure visibility design"]
      },
      {
        id: "network",
        title: "Network Performance Monitoring",
        scale: "Bandwidth, Latency & Branch Visibility",
        icon: "fas fa-globe",
        challenge: "Enterprises needed real-time visibility into network devices, bandwidth usage, latency, and multi-branch connectivity health.",
        solutions: [
          { title: "Motadata NMS", desc: "Real-time network performance monitoring with intelligent alerting." },
          { title: "Motadata Bandwidth Monitor", desc: "Granular visibility into bandwidth utilization across all network segments." }
        ],
        impacts: [
          { number: "Real-Time", label: "Network Health Visibility" },
          { number: "Zero", label: "Undetected Branch Connectivity Issues" }
        ],
        strengths: ["SNMP-based NMS deployment", "Bandwidth utilization monitoring", "Multi-branch network visibility setup"]
      },
      {
        id: "multibranch",
        title: "Multi-Branch Enterprise",
        scale: "Centralized Distributed IT Management",
        icon: "fas fa-building",
        challenge: "Organizations with multiple branches needed centralized monitoring and ITSM management of distributed IT infrastructure.",
        solutions: [
          { title: "Motadata ITSM", desc: "Centralized service desk managing IT incidents across all branch locations." },
          { title: "Motadata Remote Monitoring", desc: "Agent-based monitoring of branch servers and network devices." }
        ],
        impacts: [
          { number: "50%", label: "Reduction in Branch IT Incidents" },
          { number: "100%", label: "Branch Infrastructure Visibility" }
        ],
        strengths: ["Multi-branch ITSM deployment", "Remote agent monitoring setup", "Distributed infrastructure management"]
      },
      {
        id: "bfsi",
        title: "Banking & Financial Services",
        scale: "High-Availability Banking System Monitoring",
        icon: "fas fa-university",
        challenge: "Banks needed high-availability monitoring for core banking applications, ATM networks, and critical financial servers.",
        solutions: [
          { title: "Motadata Banking Infrastructure Monitor", desc: "24/7 monitoring of core banking systems with automated escalation." },
          { title: "Motadata SLA Tracking", desc: "Real-time banking SLA compliance tracking and breach alerting." }
        ],
        impacts: [
          { number: "99.999%", label: "Core Banking System Availability" },
          { number: "100%", label: "Banking SLA Compliance" }
        ],
        strengths: ["Core banking monitoring design", "SLA compliance tracking setup", "ATM network visibility configuration"]
      },
      {
        id: "healthcare",
        title: "Healthcare IT Monitoring",
        scale: "Critical Systems & Application Availability",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed continuous monitoring of healthcare applications, clinical servers, connected devices, and critical systems.",
        solutions: [
          { title: "Motadata Healthcare IT Monitor", desc: "Monitoring EHR, PACS, and clinical application availability." },
          { title: "Motadata IoT Monitoring", desc: "Visibility into connected medical devices and healthcare IoT systems." }
        ],
        impacts: [
          { number: "99.9%", label: "Clinical Application Uptime" },
          { number: "Zero", label: "Undetected Medical System Failures" }
        ],
        strengths: ["Healthcare application monitoring", "Medical IoT visibility setup", "Clinical system alerting configuration"]
      },
      {
        id: "cloud",
        title: "Cloud & Hybrid Infrastructure",
        scale: "Unified Multi-Cloud Observability",
        icon: "fas fa-cloud",
        challenge: "Organizations operating hybrid and cloud environments needed unified visibility across on-premises and cloud workloads.",
        solutions: [
          { title: "Motadata Cloud Monitor", desc: "Unified observability for AWS, Azure, GCP, and on-premises infrastructure." },
          { title: "Motadata AIOps for Cloud", desc: "AI-powered anomaly detection reducing cloud infrastructure noise." }
        ],
        impacts: [
          { number: "100%", label: "Multi-Cloud Visibility Achieved" },
          { number: "60%", label: "Alert Noise Reduction" }
        ],
        strengths: ["Multi-cloud monitoring architecture", "AIOps anomaly detection setup", "Hybrid infrastructure observability design"]
      }
    ]
  },
  {
    id: "paloalto",
    brandName: "Palo Alto",
    tagline: "Next-generation hardware firewalls (NGFW), Prisma Access ZTNA, and threat analysis.",
    color: "#ea580c",
    icon: "fas fa-shield-alt",
    cases: [
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "NGFW & Advanced Threat Protection for Banking",
        icon: "fas fa-university",
        challenge: "Banks needed next-generation firewall protection against ransomware, phishing, and unauthorized access to core financial systems.",
        solutions: [
          { title: "Palo Alto PA-Series NGFW", desc: "High-throughput NGFW with application-layer inspection for banking traffic." },
          { title: "Palo Alto WildFire", desc: "Cloud-based threat intelligence detecting zero-day banking malware." }
        ],
        impacts: [
          { number: "99.99%", label: "Intrusion Prevention Rate" },
          { number: "Zero", label: "Zero-Day Malware Penetration" }
        ],
        strengths: ["Banking NGFW policy architecture", "WildFire threat intelligence setup", "Core banking network security design"]
      },
      {
        id: "government",
        title: "Government Organizations",
        scale: "Critical Infrastructure Security for Government",
        icon: "fas fa-landmark",
        challenge: "Government sectors needed high-security network protection for classified systems and critical e-governance digital infrastructure.",
        solutions: [
          { title: "Palo Alto Panorama", desc: "Centralized firewall management across all government network perimeters." },
          { title: "Cortex XDR for Government", desc: "AI-powered threat detection and response across government endpoints." }
        ],
        impacts: [
          { number: "100%", label: "Government Network Compliance" },
          { number: "Zero", label: "Classified System Breaches" }
        ],
        strengths: ["Government NGFW centralized management", "Cortex XDR deployment design", "Classified network security architecture"]
      },
      {
        id: "healthcare",
        title: "Healthcare Providers",
        scale: "Medical Device & Hospital Network Security",
        icon: "fas fa-hospital",
        challenge: "Healthcare organizations needed to protect patient records, medical IoT devices, and clinical networks from cyber threats.",
        solutions: [
          { title: "Palo Alto Medical IoT Security", desc: "Device identification and security policy for all connected medical devices." },
          { title: "Palo Alto NGFW for Healthcare", desc: "Segmenting clinical and administrative networks to contain breaches." }
        ],
        impacts: [
          { number: "100%", label: "Medical IoT Devices Identified" },
          { number: "Zero", label: "Clinical Network Breaches" }
        ],
        strengths: ["Healthcare IoT security deployment", "Clinical network segmentation design", "HIPAA-aligned firewall policy"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industries",
        scale: "OT/IT Security for Smart Manufacturing",
        icon: "fas fa-industry",
        challenge: "Manufacturing companies needed protection for industrial control networks, OT systems, and production floor IT/OT convergence points.",
        solutions: [
          { title: "Palo Alto Industrial NGFW", desc: "Firewall rules protecting OT protocols including Modbus, DNP3, and IEC 61850." },
          { title: "Palo Alto Zero Trust for OT", desc: "Microsegmentation isolating production zones from corporate networks." }
        ],
        impacts: [
          { number: "Zero", label: "OT Network Security Breaches" },
          { number: "100%", label: "Production Zone Microsegmentation" }
        ],
        strengths: ["Industrial protocol firewall expertise", "OT/IT microsegmentation design", "SCADA network security architecture"]
      },
      {
        id: "education",
        title: "Educational Institutions",
        scale: "Campus Network Security",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed to secure large campus networks from external threats while supporting thousands of student and faculty devices.",
        solutions: [
          { title: "Palo Alto Campus NGFW", desc: "Application-aware campus firewall controlling student internet access." },
          { title: "Prisma Access for Education", desc: "Secure remote access for students and faculty working off-campus." }
        ],
        impacts: [
          { number: "10,000+", label: "Campus Users Protected" },
          { number: "95%", label: "Threat Blocking Rate" }
        ],
        strengths: ["Campus firewall policy design", "Education SASE deployment", "Student network segmentation setup"]
      },
      {
        id: "enterprise",
        title: "Large Enterprises",
        scale: "Enterprise-Wide Security & SASE",
        icon: "fas fa-building",
        challenge: "Enterprises needed centralized security management across branch offices, remote workers, cloud environments, and data centers.",
        solutions: [
          { title: "Prisma SASE for Enterprise", desc: "Cloud-native security consolidating networking and security for hybrid work." },
          { title: "Palo Alto Panorama", desc: "Single pane of glass managing all NGFW deployments enterprise-wide." }
        ],
        impacts: [
          { number: "50%", label: "Security Management Complexity Reduced" },
          { number: "99.99%", label: "Enterprise Network Protection" }
        ],
        strengths: ["Prisma SASE architecture design", "Panorama centralized management", "Enterprise security consolidation"]
      }
    ]
  },
  {
    id: "peoplelink",
    brandName: "PeopleLink",
    tagline: "Low-latency unified video collaboration, media streams, and digital room designs.",
    color: "#06b6d4",
    icon: "fas fa-video",
    cases: [
      {
        id: "defence",
        title: "Defence Sector",
        scale: "Secure Communication Infrastructure",
        icon: "fas fa-shield-alt",
        challenge: "Defence organizations needed secure, encrypted video communication systems for coordination across locations and command centers.",
        solutions: [
          { title: "PeopleLink Secure VC", desc: "End-to-end encrypted video conferencing for classified communications." },
          { title: "PeopleLink On-Premises Deployment", desc: "Air-gapped video system hosted on-premises for classified environments." }
        ],
        impacts: [
          { number: "100%", label: "Encrypted Communication Coverage" },
          { number: "Zero", label: "Communication Security Incidents" }
        ],
        strengths: ["Secure on-premises VC deployment", "Encrypted communication architecture", "Air-gapped video system setup"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Smart Classrooms & Virtual Learning",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed stable, low-bandwidth video platforms for online classes, hybrid learning, and virtual student collaboration.",
        solutions: [
          { title: "PeopleLink Virtual Classrooms", desc: "Custom digital classrooms with whiteboards, hand-raise, and breakout rooms." },
          { title: "Adaptive Bandwidth Compression", desc: "Optimized video for low-speed student internet connections." }
        ],
        impacts: [
          { number: "10,000+", label: "Virtual Class Hours Delivered" },
          { number: "99%", label: "Session Stability Rate" }
        ],
        strengths: ["Virtual classroom deployment", "LMS integration expertise", "Low-bandwidth stream optimization"]
      },
      {
        id: "retail",
        title: "Retail Sector",
        scale: "Multi-Branch Video Communication",
        icon: "fas fa-shopping-cart",
        challenge: "Retail organizations needed centralized video communication between branches, distribution centers, and corporate headquarters.",
        solutions: [
          { title: "PeopleLink Branch Connect", desc: "Video conferencing linking all retail branches to corporate offices." },
          { title: "PeopleLink Digital Signage", desc: "Centrally managed in-store digital display systems for retail promotions." }
        ],
        impacts: [
          { number: "200+", label: "Branch Locations Connected" },
          { number: "40%", label: "Travel Cost Reduction" }
        ],
        strengths: ["Multi-branch video network design", "Retail digital signage setup", "Corporate-branch communication architecture"]
      },
      {
        id: "banking",
        title: "Banking Sector",
        scale: "Secure Enterprise Video Collaboration",
        icon: "fas fa-university",
        challenge: "Banks needed secure, reliable video conferencing for executive meetings, branch manager briefings, and customer engagement.",
        solutions: [
          { title: "PeopleLink Banking VC", desc: "Secure video conferencing with access controls and session recording." },
          { title: "PeopleLink Webinar Platform", desc: "Large-scale webinar capability for regulatory training and announcements." }
        ],
        impacts: [
          { number: "100%", label: "Encrypted Session Coverage" },
          { number: "50%", label: "Meeting Coordination Time Saved" }
        ],
        strengths: ["Banking secure VC deployment", "Session recording and compliance", "Large-scale webinar configuration"]
      },
      {
        id: "healthcare",
        title: "Healthcare Sector",
        scale: "Telemedicine & Hospital Collaboration",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed reliable video systems for telemedicine consultations, specialist referrals, and inter-department clinical collaboration.",
        solutions: [
          { title: "PeopleLink Telemedicine Platform", desc: "HIPAA-compliant video consultations for doctors and remote patients." },
          { title: "PeopleLink Clinical Rooms", desc: "Video-enabled examination rooms for remote specialist consultations." }
        ],
        impacts: [
          { number: "5,000+", label: "Monthly Telemedicine Sessions" },
          { number: "100%", label: "HIPAA-Compliant Video Sessions" }
        ],
        strengths: ["Telemedicine platform deployment", "HIPAA compliance configuration", "Clinical video room setup"]
      },
      {
        id: "enterprise",
        title: "Large Enterprises",
        scale: "Hybrid Workplace Collaboration Platform",
        icon: "fas fa-building",
        challenge: "Enterprises needed scalable video collaboration platforms supporting hybrid work, global meetings, and cross-functional team coordination.",
        solutions: [
          { title: "PeopleLink Enterprise VC", desc: "Scalable video platform supporting thousands of concurrent enterprise users." },
          { title: "PeopleLink Room Systems", desc: "Conference room video systems integrated with enterprise calendaring." }
        ],
        impacts: [
          { number: "10,000+", label: "Enterprise Users Supported" },
          { number: "99.9%", label: "Platform Availability" }
        ],
        strengths: ["Enterprise VC platform deployment", "Conference room integration design", "Scalable media infrastructure setup"]
      },
      {
        id: "manufacturing",
        title: "Manufacturing Industry",
        scale: "Plant-to-HQ Communication",
        icon: "fas fa-industry",
        challenge: "Manufacturing organizations needed real-time video communication between factory floors, plant managers, and corporate headquarters.",
        solutions: [
          { title: "PeopleLink Factory Connect", desc: "Ruggedized video terminals at plant floors for real-time operations briefings." },
          { title: "PeopleLink Mobile VC", desc: "Mobile video app enabling plant engineers to connect while on the floor." }
        ],
        impacts: [
          { number: "30%", label: "Reduction in Plant Visit Travel" },
          { number: "100%", label: "Plant-HQ Video Connectivity" }
        ],
        strengths: ["Factory floor VC deployment", "Mobile video application setup", "Plant operations communication design"]
      }
    ]
  },
  {
    id: "poly",
    brandName: "Poly",
    tagline: "Premium smart video conferencing studio bars, intelligent audio, and room cameras.",
    color: "#ff5a00",
    icon: "fas fa-headset",
    cases: [
      {
        id: "enterprise",
        title: "Corporate Enterprises",
        scale: "Professional Collaboration for Hybrid Workforce",
        icon: "fas fa-building",
        challenge: "Organizations needed premium audio and video collaboration solutions for executive boardrooms, hybrid teams, and remote employee productivity.",
        solutions: [
          { title: "Poly Studio R30 & X50", desc: "All-in-one video bars for medium and large conference rooms." },
          { title: "Poly Acoustic Fence Technology", desc: "Hardware noise isolation for open-plan office collaboration." }
        ],
        impacts: [
          { number: "100%", label: "Echo Cancellation Rate" },
          { number: "98%", label: "User Satisfaction Score" }
        ],
        strengths: ["Boardroom AV architecture design", "Teams/Zoom native room integration", "Acoustic noise isolation setup"]
      },
      {
        id: "healthcare",
        title: "Healthcare & Hospitals",
        scale: "Telemedicine & Clinical Communication",
        icon: "fas fa-hospital",
        challenge: "Hospitals needed reliable, high-quality audio and video systems for telemedicine consultations, inter-department meetings, and remote specialist collaboration.",
        solutions: [
          { title: "Poly Telehealth Solutions", desc: "Clinical-grade video endpoints for patient consultations and specialist reviews." },
          { title: "Poly Headsets for Clinical Staff", desc: "Noise-cancelling headsets for nurses and admissions staff handling patient calls." }
        ],
        impacts: [
          { number: "5,000+", label: "Monthly Clinical Video Sessions" },
          { number: "100%", label: "Audio Clarity in Clinical Calls" }
        ],
        strengths: ["Telehealth video endpoint deployment", "Clinical noise-cancelling headset setup", "HIPAA-compliant communication design"]
      },
      {
        id: "education",
        title: "Education Sector",
        scale: "Smart Classrooms & Distance Learning",
        icon: "fas fa-graduation-cap",
        challenge: "Educational institutions needed high-quality audio and video infrastructure for hybrid classrooms, faculty meetings, and distance learning programs.",
        solutions: [
          { title: "Poly Studio E70 Camera", desc: "Director AI smart camera for lecture-capture and hybrid classrooms." },
          { title: "Poly Sync Speakerphones", desc: "Portable meeting devices for student group collaboration rooms." }
        ],
        impacts: [
          { number: "500+", label: "Smart Classrooms Equipped" },
          { number: "100%", label: "Remote Lecture Capture Quality" }
        ],
        strengths: ["Hybrid classroom AV design", "Director AI camera configuration", "Education room system deployment"]
      },
      {
        id: "banking",
        title: "Banking & Financial Services",
        scale: "Secure Executive & Branch Communication",
        icon: "fas fa-university",
        challenge: "Banks needed secure, high-quality audio and video systems for executive meetings, branch manager briefings, and board-level communications.",
        solutions: [
          { title: "Poly Executive Room Systems", desc: "Premium 4K video rooms for board meetings with recording capabilities." },
          { title: "Poly Trio Speakerphones", desc: "Branch-level conference phones for regional manager collaboration." }
        ],
        impacts: [
          { number: "100+", label: "Banking Locations Equipped" },
          { number: "50%", label: "Executive Travel Cost Reduction" }
        ],
        strengths: ["Banking boardroom AV deployment", "Branch communication system setup", "Secure meeting room configuration"]
      },
      {
        id: "it",
        title: "IT & Software Companies",
        scale: "Hybrid Team Collaboration Infrastructure",
        icon: "fas fa-laptop",
        challenge: "IT companies needed seamless communication infrastructure for hybrid development teams, global project collaboration, and agile sprint meetings.",
        solutions: [
          { title: "Poly Voyager Headsets", desc: "Premium wireless headsets for developer focus and team calls." },
          { title: "Poly Studio USB Video Bar", desc: "Compact video bars for developer den and small team meeting rooms." }
        ],
        impacts: [
          { number: "3,000+", label: "Developer Headsets Deployed" },
          { number: "99.9%", label: "Team Meeting Quality Satisfaction" }
        ],
        strengths: ["Developer workspace audio design", "Small room video bar deployment", "Headset fleet management setup"]
      },
      {
        id: "government",
        title: "Government Organizations",
        scale: "Secure Meeting Infrastructure for Government",
        icon: "fas fa-university",
        challenge: "Government departments needed reliable, secure communication infrastructure for inter-department meetings, briefings, and policy coordination.",
        solutions: [
          { title: "Poly Government Room Systems", desc: "Secure video conferencing rooms for government meeting halls." },
          { title: "Poly Managed VC Services", desc: "End-to-end managed video infrastructure for government facilities." }
        ],
        impacts: [
          { number: "100%", label: "Government Meeting Room Coverage" },
          { number: "40%", label: "Inter-Department Travel Reduction" }
        ],
        strengths: ["Government AV room deployment", "Managed VC services setup", "Secure government communication design"]
      },
      {
        id: "bpo",
        title: "BPO & Call Center Industry",
        scale: "High-Quality Communication Devices",
        icon: "fas fa-phone-alt",
        challenge: "BPOs and customer support centers needed high-quality, durable communication headsets for thousands of agents handling customer interactions.",
        solutions: [
          { title: "Poly Encore Pro Headsets", desc: "Wired professional headsets with noise cancellation for call center agents." },
          { title: "Poly DECT Wireless Headsets", desc: "Wireless headsets enabling agent mobility across the BPO floor." }
        ],
        impacts: [
          { number: "10,000+", label: "Agent Headsets Deployed" },
          { number: "95%", label: "Customer Call Quality Score" }
        ],
        strengths: ["Large-scale BPO headset deployment", "Call center audio infrastructure design", "Wireless DECT system configuration"]
      }
    ]
  }
];

const tabs = [
  { id: "overview", label: "Featured Cases", icon: "fas fa-star", color: "#eb5a0f", rgb: "235, 90, 15", logo: "/assets/images/favicon.png" },
  { id: "sophos", label: "Sophos Security", icon: "fas fa-shield-alt", color: "#eb5a0f", rgb: "235, 90, 15", logo: "/assets/images/partners/SOPHOS.jpg" },
  { id: "aruba", label: "Aruba Networks", icon: "fas fa-wifi", color: "#ff8300", rgb: "255, 131, 0", logo: "/assets/images/partners/HPE-Aruba.jpg" },
  { id: "hpe", label: "HPE Servers", icon: "fas fa-server", color: "#00b08b", rgb: "0, 176, 139", logo: "/assets/images/partners/Hewlett-Packard-Enterprise-2.jpg" },
  { id: "zoho", label: "Zoho Solutions", icon: "fas fa-cube", color: "#007bff", rgb: "0, 123, 255", logo: "/assets/images/zoho.png" },
  { id: "microsoft365", label: "Microsoft 365", icon: "fab fa-windows", color: "#ea4335", rgb: "234, 67, 53", logo: "/assets/images/partners/MICROSOFT-365-2.jpg" },
  { id: "cymmetri", label: "Cymmetri IAM", icon: "fas fa-key", color: "#3b82f6", rgb: "59, 130, 246", logo: "/assets/images/partners/cymmetri.png" },
  { id: "nutanix", label: "Nutanix Cloud", icon: "fas fa-cloud", color: "#00a4e4", rgb: "0, 164, 228", logo: "/assets/images/partners/nutanix.png" },
  { id: "arcon", label: "ARCON PAM", icon: "fas fa-user-lock", color: "#ef4444", rgb: "239, 68, 68", logo: "/assets/images/partners/ARCON.jpg" },
  { id: "veeam", label: "Veeam Backup", icon: "fas fa-save", color: "#00b159", rgb: "0, 177, 89", logo: "/assets/images/partners/VEEAM.jpg" },
  { id: "tenable", label: "Tenable Security", icon: "fas fa-search", color: "#22c55e", rgb: "34, 197, 94", logo: "/assets/images/partners/TENABLE-2.jpg" },
  { id: "solarwinds", label: "SolarWinds", icon: "fas fa-chart-line", color: "#ffaa00", rgb: "255, 170, 0", logo: "/assets/images/partners/SOLARWINDS.jpg" },
  { id: "sify", label: "Sify Technologies", icon: "fas fa-network-wired", color: "#059669", rgb: "5, 150, 105", logo: "/assets/images/partners/SIFY-2.jpg" },
  { id: "seceon", label: "Seceon Security", icon: "fas fa-robot", color: "#10b981", rgb: "16, 185, 129", logo: "/assets/images/partners/SECEON.jpg" },
  { id: "safetica", label: "Safetica DLP", icon: "fas fa-user-shield", color: "#00C9FF", rgb: "0, 201, 255", logo: "/assets/images/partners/SafeticaONE.jpg" },
  { id: "qualys", label: "Qualys Security", icon: "fas fa-cloud-shield", color: "#ff4d4d", rgb: "255, 77, 77", logo: "/assets/images/partners/QUALYS.jpg" },
  { id: "fortytwo", label: "42Gears UEM", icon: "fas fa-tablet-alt", color: "#3b82f6", rgb: "59, 130, 246", logo: "/assets/images/partners/42-Gears.jpg" },
  { id: "accops", label: "Accops VDI", icon: "fas fa-user-lock", color: "#e81b23", rgb: "232, 27, 35", logo: "/assets/images/partners/ACCOPS.jpg" },
  { id: "vmware", label: "VMware Cloud", icon: "fas fa-layer-group", color: "#00C9FF", rgb: "0, 201, 255", logo: "/assets/images/partners/Vmware.jpg" },
  { id: "acronis", label: "Arcon Security", icon: "fas fa-shield-alt", color: "#0f52ba", rgb: "15, 82, 186", logo: "/assets/images/partners/ARCON.jpg" },
  { id: "apple", label: "Apple Enterprise", icon: "fab fa-apple", color: "#a6a6a6", rgb: "166, 166, 166", logo: "/assets/images/partners/APPLE-2.jpg" },
  { id: "azure", label: "Microsoft Azure", icon: "fab fa-windows", color: "#0089d0", rgb: "0, 137, 208", logo: "/assets/images/partners/MICROSOFT-AZURE.jpg" },
  { id: "dell", label: "Dell Technologies", icon: "fas fa-server", color: "#0078d4", rgb: "0, 120, 212", logo: "/assets/images/partners/DELL-2.jpg" },
  { id: "forcepoint", label: "Forcepoint", icon: "fas fa-lock", color: "#4f46e5", rgb: "79, 70, 229", logo: "/assets/images/partners/Forcepoint.jpg" },
  { id: "gfisoftware", label: "GFI Software", icon: "fas fa-mail-bulk", color: "#2563eb", rgb: "37, 99, 235", logo: "/assets/images/partners/GFI-SOFTWARE.jpg" },
  { id: "greythr", label: "greytHR HRMS", icon: "fas fa-users-cog", color: "#d97706", rgb: "217, 119, 6", logo: "/assets/images/hr/Screenshot 2026-05-26 001758.png" },
  { id: "hp", label: "HP Solutions", icon: "fas fa-print", color: "#0096d6", rgb: "0, 150, 214", logo: "/assets/images/partners/HP.jpg" },
  { id: "ims", label: "IMS Solutions", icon: "fas fa-network-wired", color: "#7c3aed", rgb: "124, 58, 237", logo: "/assets/images/ims-logo.png" },
  { id: "k7security", label: "K7 Security", icon: "fas fa-user-shield", color: "#e8232a", rgb: "232, 35, 42", logo: "/assets/images/k7.png" },
  { id: "lenovo", label: "Lenovo Enterprise", icon: "fas fa-laptop-code", color: "#e2231a", rgb: "226, 35, 26", logo: "/assets/images/partners/LENOVO.jpg" },
  { id: "logrhythm", label: "LogRhythm SIEM", icon: "fas fa-shield-alt", color: "#0ea5e9", rgb: "14, 165, 233", logo: "/assets/images/partners/Logrythm.jpg" },
  { id: "manageengine", label: "ManageEngine", icon: "fas fa-cogs", color: "#f43f5e", rgb: "244, 63, 94", logo: "/assets/images/partners/Manage-Engine.jpg" },
  { id: "motadata", label: "Motadata ITOM", icon: "fas fa-tachometer-alt", color: "#2563eb", rgb: "37, 99, 235", logo: "/assets/images/partners/MOTADATA.jpg" },
  { id: "paloalto", label: "Palo Alto", icon: "fas fa-shield-alt", color: "#f97316", rgb: "249, 115, 22", logo: "/assets/images/partners/Palo-Alto-Networks-2.jpg" },
  { id: "peoplelink", label: "PeopleLink VC", icon: "fas fa-video", color: "#06b6d4", rgb: "6, 182, 212", logo: "/assets/images/partners/PEOPLE-LINK.jpg" },
  { id: "poly", label: "Poly Headsets", icon: "fas fa-headset", color: "#ff5a00", rgb: "255, 90, 0", logo: "/assets/images/partners/POPY.jpg" }
];

export default function CaseStudies() {
  const seoData = getSEOData('caseStudies');
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollToLogoBar = () => {
    const anchor = document.getElementById("brand-logo-nav-anchor");
    if (anchor) {
      const top = anchor.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sticky ScrollSpy effect to track active brand category on scroll using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -70% 0px',
      threshold: 0
    };

    const sectionElements = [
      { id: "overview", el: document.querySelector(".blog-carousel-page") },
      ...tabs.slice(1).map(tab => ({
        id: tab.id,
        el: document.getElementById(`${tab.id}-cases`)
      }))
    ].filter(section => section.el !== null);

    const intersectingSections = new Map();

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const id = entry.target.id === "overview" || entry.target.classList.contains("blog-carousel-page") 
          ? "overview" 
          : entry.target.id.replace("-cases", "");
        intersectingSections.set(id, entry.isIntersecting);
      });

      // Find the first visible (intersecting) section from top to bottom
      let activeSectionId = null;
      for (const section of sectionElements) {
        if (intersectingSections.get(section.id)) {
          activeSectionId = section.id;
          break;
        }
      }

      if (activeSectionId) {
        setActiveTab((prev) => {
          if (prev !== activeSectionId) {
            // Smoothly auto-scroll active logo tab button into center view in sticky bar
            const activeBtn = document.getElementById(`tab-btn-${activeSectionId}`);
            if (activeBtn) {
              activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
            return activeSectionId;
          }
          return prev;
        });
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionElements.forEach(section => {
      if (section.el) {
        observer.observe(section.el);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Hash/Anchor scrolling support for deep links
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Smooth scroll helper for tabs clicking
  const scrollToSection = (id) => {
    const el = id === "overview" ? document.querySelector(".blog-carousel-page") : document.getElementById(`${id}-cases`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 160; // Clear sticky header and sub-navigation bar
      window.scrollTo({
        top,
        behavior: "smooth"
      });
      setActiveTab(id);
      
      // Auto-scroll active logo tab button into center view in sticky bar
      const activeBtn = document.getElementById(`tab-btn-${id}`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const activeTabObj = tabs.find(t => t.id === activeTab);

  return (
    <div className="case-studies-container">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      {/* Page Header Section */}
      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}></div>
        <div className="container">
          <div className="page-header__inner">
            <h1>Case Studies</h1>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/" title="best cybersecurity companies in hyd"><i className="fas fa-home"></i>Home</a></li>
                <li><span className="icon-right-arrow-1"></span></li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Static anchor for back-to-brands scrolling reference */}
      <div id="brand-logo-nav-anchor" style={{ position: 'relative', top: '-10px', height: '1px' }}></div>

      {/* Interactive Sticky Sub-Navigation Bar */}
      <div 
        id="brand-logo-nav"
        className="sticky-sub-nav"
        style={{
          '--brand-color': activeTabObj?.color || '#eb5a0f',
          '--brand-color-rgb': activeTabObj?.rgb || '235, 90, 15',
          '--brand-glow': `rgba(${activeTabObj?.rgb || '235, 90, 15'}, 0.25)`
        }}
      >
        <div className="sub-nav-relative-container">
          <button className="sub-nav-scroll-btn left" onClick={scrollLeft} aria-label="Scroll Left">
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="sticky-sub-nav-wrapper" ref={scrollRef}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                className={`sub-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => scrollToSection(tab.id)}
              >
                {tab.logo ? (
                  <img loading="lazy" 
                    src={tab.logo} 
                    alt={tab.label} 
                    className="sub-nav-logo" 
                    onError={(e) => { 
                      // Fallback to FontAwesome icon if image fails to load
                      e.currentTarget.style.display = 'none';
                      const sibling = e.currentTarget.nextSibling;
                      if (sibling) sibling.style.display = 'inline-block';
                    }} 
                  />
                ) : null}
                <i className={tab.icon} style={{ display: tab.logo ? 'none' : 'inline-block' }}></i>
                {tab.label}
              </button>
            ))}
          </div>
          
          <button className="sub-nav-scroll-btn right" onClick={scrollRight} aria-label="Scroll Right">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Trace Case Studies (Overview Section) */}
      <section className="blog-carousel-page">
        <div className="blog-page__shape-1"></div>
        <div className="blog-page__shape-2"></div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape-1"></div>
              <span className="section-title__tagline">Trace Network</span>
              <div className="section-title__tagline-shape-2"></div>
            </div>
            <h2 className="section-title__title">
              Featured<span> Case Studies</span>
            </h2>
          </div>

          <div className="event-cards" style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
            {/* Case Study 1 */}
            <div className="blog-one__single" style={{ width: "410px" }}>
              <div className="blog-one__img">
                <img src="/assets/images/case1.jpg" alt="Pharmaceutical Leader Future-Proofs their Network Infrastructure" title="Pharmaceutical Leader Future-Proofs their Network Infrastructure" loading="lazy" />
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  Pharmaceutical Leader Future-Proofs their Network Infrastructure
                </h3>
                <p className="blog-one__text">
                  A renowned pharmaceutical company, known for its innovation and research excellence,
                  needed a high-performance IT infrastructure that could scale with their rapid growth.
                </p>
                <div className="blog-one__btn-box">
                  <a className="thm-btn" href="/pharmaceutical-network-infrastructure" title="pharmaceutical-network-infrastructure">
                    Read More<span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="blog-one__single" style={{ width: "410px" }}>
              <div className="blog-one__img">
                <img src="/assets/images/case2.jpg" alt="University Revamps Campus IT & Learning Ecosystem" title="University Revamps Campus IT & Learning Ecosystem" loading="lazy" />
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  University Revamps Campus IT &amp; Learning Ecosystem
                </h3>
                <p className="blog-one__text">
                  One of the country's oldest universities, managing over 30,000 users on a 100-acre
                  campus, needed to modernize its network and learning environment to support growth
                  and hybrid education.
                </p>
                <div className="blog-one__btn-box">
                  <a className="thm-btn" href="/university-it-learning-ecosystem" title="university-it-learning-ecosystem">
                    Read More<span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="blog-one__single" style={{ width: "410px" }}>
              <div className="blog-one__img">
                <img src="/assets/images/case3.jpg" alt="Chain of International Schools Elevate Learning" title="Chain of International Schools Elevate Learning" loading="lazy" />
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  Chain of International Schools Elevate Learning Through Scalable IT &amp; AV Upgrades
                </h3>
                <p className="blog-one__text">
                  A premium group of international schools revamped their IT infrastructure and
                  classrooms to support 2,000 students.
                </p>
                <div className="blog-one__btn-box">
                  <a className="thm-btn" href="/international-schools-it-av-upgrades" title="international-schools-it-av-upgrades">
                    Read More<span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sophos Case Studies */}
          <div id="sophos-cases" className="brand-section sophos-section" style={{ marginTop: '80px', paddingTop: '60px' }}>
            <div className="section-title text-center" style={{ marginBottom: '50px' }}>
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Sophos Security</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <h2 className="section-title__title">
                Sophos <span>Real-World Success Stories</span>
              </h2>
              <p style={{ marginTop: '15px', color: '#94a3b8', fontSize: '1.05rem' }}>
                Proven implementations showcasing our Partner of the Year 2025 expertise
              </p>
            </div>

            <div className="enhanced-use-cases" style={{ textAlign: 'left' }}>
              {/* Case Study 1 Details */}
              <div id="sophos-firewall" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-fire"></i></div>
                  <div className="case-title-section">
                    <h3>Large-Scale Firewall Deployment</h3>
                    <div className="case-scale-badge">30,000+ Users Network</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>A large enterprise network with 30,000+ users required a high-performance, scalable firewall solution to secure multiple locations without impacting uptime or network speed.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Deployed Sophos XGS 8500</strong> - High-throughput enterprise firewall</li>
                          <li>✓ <strong>High-Availability Architecture</strong> - Uninterrupted operations design</li>
                          <li>✓ <strong>Advanced Security Features</strong> - IPS, DPI, VPN, application control</li>
                          <li>✓ <strong>Centralized Management</strong> - Unified visibility and policy control</li>
                          <li>✓ <strong>Zero-Downtime Migration</strong> - Seamless deployment process</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">30,000+</span>
                          <span className="impact-label">Users Secured</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">90%+</span>
                          <span className="impact-label">Threat Reduction</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">99.9%</span>
                          <span className="impact-label">Uptime Achieved</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/Sophos-8500.png" 
                    alt="Sophos XGS 8500 Firewall - Enterprise Deployment" 
                    icon="fas fa-fire" 
                    overlayText="Sophos XGS 8500 Series"
                    strengthItems={[
                      "Experience deploying 7500 / 8500 series firewalls",
                      "15+ years in network security",
                      "Proven execution across multiple industries and scale levels"
                    ]}
                  />
                </div>
              </div>

              {/* Case Study 2 Details */}
              <div id="sophos-healthcare" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-hospital"></i></div>
                  <div className="case-title-section">
                    <h3>Healthcare Network Security</h3>
                    <div className="case-scale-badge">Multi-Location Medical Institution</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Securing sensitive patient records and medical devices across multiple hospitals while complying with strict healthcare data privacy regulations.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Multi-Site VPN Connectivity</strong> - Secure data exchange across locations</li>
                          <li>✓ <strong>Device Segmentation</strong> - Isolation of critical medical machines</li>
                          <li>✓ <strong>Intrusion Prevention (IPS)</strong> - Real-time protection against network threats</li>
                          <li>✓ <strong>Compliance Alignment</strong> - Deployed systems meeting privacy standards</li>
                          <li>✓ <strong>MDR Integration</strong> - Continuous monitoring and threat hunting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Data Isolation</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">24/7</span>
                          <span className="impact-label">Continuous Monitoring</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Zero</span>
                          <span className="impact-label">Compliance Breaches</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/Sophos-hospital.png" 
                    alt="Sophos Healthcare Cybersecurity - Secure Network" 
                    icon="fas fa-hospital" 
                    overlayText="Secure Medical Networks"
                    strengthItems={[
                      "Deep understanding of healthcare workflows",
                      "Proven track record in healthcare IT safety compliance",
                      "Advanced segmentation for IoT medical devices"
                    ]}
                  />
                </div>
              </div>

              {/* Case Study 3 Details */}
              <div id="sophos-retail" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-shopping-cart"></i></div>
                  <div className="case-title-section">
                    <h3>Retail Chain Security</h3>
                    <div className="case-scale-badge">150+ Outlets Nationwide</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Managing security and guest Wi-Fi access across a large network of 150+ retail stores with minimal local IT personnel.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Sophos RED (Remote Ethernet Device)</strong> - Zero-touch remote site security</li>
                          <li>✓ <strong>Synchronized Security</strong> - Automated host isolation and response</li>
                          <li>✓ <strong>Centralized Wireless Control</strong> - Secure guest and corporate Wi-Fi</li>
                          <li>✓ <strong>Web Filtering</strong> - Increased productivity and site categorization</li>
                          <li>✓ <strong>Cloud Management</strong> - Remote updates via Sophos Central</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">150+</span>
                          <span className="impact-label">Outlets Secured</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">10x</span>
                          <span className="impact-label">Faster Deployment</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">80%</span>
                          <span className="impact-label">Lower Admin Overhead</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/Retail.png" 
                    alt="Sophos Retail Chain Secure Deployment" 
                    icon="fas fa-shopping-cart" 
                    overlayText="Secure Retail Outlets"
                    strengthItems={[
                      "Rapid remote deployment architecture expertise",
                      "Scalable configuration templates for easy replication",
                      "Centralized cloud orchestration capabilities"
                    ]}
                  />
                </div>
              </div>
            </div>
            
            <div className="section-back-to-top">
              <button className="back-to-top-btn" onClick={scrollToLogoBar}>
                <i className="fas fa-chevron-up"></i> Back to Brands
              </button>
            </div>
          </div>

          {/* Aruba Networking Use Cases */}
          <div id="aruba-cases" className="brand-section aruba-section" style={{ marginTop: '80px', paddingTop: '60px' }}>
            <div className="section-title text-center" style={{ marginBottom: '50px' }}>
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Aruba Networking</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <h2 className="section-title__title">
                Aruba Networking <span>Use Cases</span>
              </h2>
              <p style={{ marginTop: '15px', color: '#94a3b8', fontSize: '1.05rem' }}>
                Successfully Deployed by Trace Network across diverse industry sectors
              </p>
            </div>
            
            <div className="enhanced-use-cases" style={{ textAlign: 'left' }}>
              {/* 1. Defence Sector */}
              <div id="aruba-defence" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-shield-alt"></i></div>
                  <div className="case-title-section">
                    <h3>Defence Sector Solutions</h3>
                    <div className="case-scale-badge">High-Security Network Deployment</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Defence environments require highly secure, isolated, and policy-driven network access with strict information assurance.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Aruba ClearPass</strong> - Identity-based access control &amp; Zero Trust</li>
                          <li>✓ <strong>Aruba Central</strong> - Centralized monitoring and orchestration</li>
                          <li>✓ <strong>Aruba CX Switches</strong> - High-performance secure switching</li>
                          <li>✓ <strong>Aruba Access Points</strong> - Secure wireless communication</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Military-Grade Security</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Full</span>
                          <span className="impact-label">Device Visibility</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Multi-Site</span>
                          <span className="impact-label">Access Control</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/Cloud-defense.jpg" 
                    alt="Aruba Defence Sector High-Security Network Deployment" 
                    icon="fas fa-shield-alt" 
                    overlayText="Aruba ClearPass &amp; Zero Trust"
                    strengthItems={[
                      "Proven experience in high-security deployments",
                      "Strong Zero Trust architecture implementation",
                      "Military-grade data protection configurations"
                    ]}
                  />
                </div>
              </div>

              {/* 2. Education Sector */}
              <div id="aruba-education" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-graduation-cap"></i></div>
                  <div className="case-title-section">
                    <h3>Education Sector Solutions</h3>
                    <div className="case-scale-badge">Campus-Wide High-Density Connectivity</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Need seamless, high-density, and secure connectivity for students, faculty, and guests across large campus structures.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Aruba Access Points</strong> - High-density campus Wi-Fi</li>
                          <li>✓ <strong>Aruba CX Switches</strong> - Reliable core and access layer switching</li>
                          <li>✓ <strong>Aruba ClearPass</strong> - Secure guest onboarding &amp; BYOD policy</li>
                          <li>✓ <strong>Aruba Central</strong> - Easy cloud-managed campus-wide operations</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">Seamless</span>
                          <span className="impact-label">Campus-Wide Roaming</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Safe Learning Space</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Simplified</span>
                          <span className="impact-label">IT Team Management</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/nutanix-education.jpg" 
                    alt="Aruba Campus-Wide High-Density Wi-Fi" 
                    icon="fas fa-graduation-cap" 
                    overlayText="High-Density Campus Wi-Fi"
                    strengthItems={[
                      "Expertise in large-scale campus design",
                      "Effective student/faculty policy implementation",
                      "Cloud-managed network orchestrations"
                    ]}
                  />
                </div>
              </div>

              {/* 3. Retail Sector */}
              <div id="aruba-retail" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-shopping-cart"></i></div>
                  <div className="case-title-section">
                    <h3>Retail Sector Solutions</h3>
                    <div className="case-scale-badge">Enterprise Customer Experience</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Retail spaces need secure corporate systems alongside robust guest Wi-Fi for shoppers and real-time location insights.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Aruba APs with Location Services</strong> - Customer analytics</li>
                          <li>✓ <strong>Aruba ClearPass</strong> - Controlled guest portal access</li>
                          <li>✓ <strong>Aruba CX Switches</strong> - PCI-compliant POS connectivity</li>
                          <li>✓ <strong>Aruba Central</strong> - Centralized retail network oversight</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">Enhanced</span>
                          <span className="impact-label">Customer Engagement</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Secure</span>
                          <span className="impact-label">POS &amp; Checkout Systems</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Real-Time</span>
                          <span className="impact-label">Foot-Traffic Analytics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/Retail.png" 
                    alt="Aruba Retail Location Services and Analytics" 
                    icon="fas fa-shopping-cart" 
                    overlayText="Aruba Location Services"
                    strengthItems={[
                      "PCI-DSS payment security alignment",
                      "Location-based marketing setup experience",
                      "Distributed store remote network orchestration"
                    ]}
                  />
                </div>
              </div>

              {/* 4. Banking Sector */}
              <div id="aruba-banking" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-university"></i></div>
                  <div className="case-title-section">
                    <h3>Banking Sector Solutions</h3>
                    <div className="case-scale-badge">High-Availability Financial Enterprise</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Banks must enforce strict data isolation, audit compliance, and bulletproof network access across all branches.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Aruba ClearPass Policy Manager</strong> - Advanced threat control</li>
                          <li>✓ <strong>Aruba CX Switches</strong> - High-availability redundancy</li>
                          <li>✓ <strong>Aruba AirWave/Central</strong> - Deep network visibility &amp; audits</li>
                          <li>✓ <strong>Secure VPN Gateways</strong> - Protected branch connections</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Financial Compliance</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Zero-Trust</span>
                          <span className="impact-label">Branch Access</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">99.999%</span>
                          <span className="impact-label">System Uptime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/aruba-banking.jpg" 
                    alt="Aruba Secure Banking and Finance Network" 
                    icon="fas fa-university" 
                    overlayText="Secure Banking Network"
                    strengthItems={[
                      "Financial sector data protection knowledge",
                      "High-availability network clustering",
                      "Strict regulatory compliance configurations"
                    ]}
                  />
                </div>
              </div>

              {/* 5. Healthcare Sector */}
              <div id="aruba-healthcare" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-heartbeat"></i></div>
                  <div className="case-title-section">
                    <h3>Healthcare Sector Solutions</h3>
                    <div className="case-scale-badge">Critical IoT &amp; Patient Care Deployment</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Hospitals require flawless, interference-free wireless coverage for critical patient monitors and mobile medical staff.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Aruba Medical APs</strong> - Interference-free wireless</li>
                          <li>✓ <strong>Aruba ClearPass</strong> - Automated IoT device classification</li>
                          <li>✓ <strong>Aruba CX Switches</strong> - Power-over-Ethernet (PoE) smart power</li>
                          <li>✓ <strong>Aruba Central</strong> - Fast remote troubleshooting capability</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">Stable</span>
                          <span className="impact-label">Life-Safety Network</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Isolated</span>
                          <span className="impact-label">Secure Visitor Wi-Fi</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Mobile</span>
                          <span className="impact-label">Productive Health Staff</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/Sophos-hospital.png" 
                    alt="Aruba Healthcare Medical-Grade Wireless Network" 
                    icon="fas fa-heartbeat" 
                    overlayText="Medical-Grade Wireless"
                    strengthItems={[
                      "Medical-grade wireless design certification",
                      "Automated device profile safety controls",
                      "High-integrity clinical network designs"
                    ]}
                  />
                </div>
              </div>

              {/* 6. Large Enterprises */}
              <div id="aruba-enterprise" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-building"></i></div>
                  <div className="case-title-section">
                    <h3>Large Enterprise Solutions</h3>
                    <div className="case-scale-badge">Global Scalable SD-Branch Infrastructure</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Distributed offices require standardized security, simple deployment, and hybrid-work support globally.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Aruba SD-Branch</strong> - Integrated branch operations</li>
                          <li>✓ <strong>Aruba APs &amp; CX Switches</strong> - Scalable corporate LAN</li>
                          <li>✓ <strong>Aruba ClearPass</strong> - Global identity consistency</li>
                          <li>✓ <strong>Aruba Central</strong> - Single pane of glass cloud monitoring</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">Rapid</span>
                          <span className="impact-label">Branch Onboarding</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Global</span>
                          <span className="impact-label">Access Security Consistency</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Substantial</span>
                          <span className="impact-label">Infrastructure Savings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/nutanix-enterprise.jpg" 
                    alt="Aruba Large Enterprise SD-Branch Network" 
                    icon="fas fa-building" 
                    overlayText="Aruba SD-Branch"
                    strengthItems={[
                      "Global SD-Branch architecture expertise",
                      "Unified cloud management setup",
                      "Wide-area network orchestration"
                    ]}
                  />
                </div>
              </div>

              {/* 7. Manufacturing Sector */}
              <div id="aruba-manufacturing" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-industry"></i></div>
                  <div className="case-title-section">
                    <h3>Manufacturing Sector Solutions</h3>
                    <div className="case-scale-badge">Hardened Operational Technology (OT) Network</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Industrial complexes require rugged wireless networks for automated systems, IoT sensors, and OT environments.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Aruba Rugged APs</strong> - Built for harsh environments</li>
                          <li>✓ <strong>Aruba CX Industrial Switches</strong> - Temperature hardened</li>
                          <li>✓ <strong>Aruba ClearPass</strong> - Access validation for machinery</li>
                          <li>✓ <strong>Aruba Central</strong> - Simple predictive maintenance alerts</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">Rugged</span>
                          <span className="impact-label">Uninterrupted Operations</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Secure IoT/OT Segmentation</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Reduced</span>
                          <span className="impact-label">Machine Downtime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/nutanix-factory.jpg" 
                    alt="Aruba Hardened Industrial OT Network" 
                    icon="fas fa-industry" 
                    overlayText="Industrial OT Networking"
                    strengthItems={[
                      "Industrial wireless environment engineering",
                      "OT and IT integration expertise",
                      "Hardened hardware configuration"
                    ]}
                  />
                </div>
              </div>
            </div>
            
            <div className="section-back-to-top">
              <button className="back-to-top-btn" onClick={scrollToLogoBar}>
                <i className="fas fa-chevron-up"></i> Back to Brands
              </button>
            </div>
          </div>

          {/* HPE Server Success Stories */}
          <div id="hpe-cases" className="brand-section hpe-section" style={{ marginTop: '80px', paddingTop: '60px' }}>
            <div className="section-title text-center" style={{ marginBottom: '50px' }}>
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">HPE Servers</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <h2 className="section-title__title">
                HPE Server <span>Success Stories</span>
              </h2>
              <p style={{ marginTop: '15px', color: '#94a3b8', fontSize: '1.05rem' }}>
                Enterprise-grade server deployments across diverse industry sectors by Trace Network
              </p>
            </div>

            <div className="enhanced-use-cases" style={{ textAlign: 'left' }}>
              {/* Education Sector Case Study */}
              <div id="hpe-education" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-graduation-cap"></i></div>
                  <div className="case-title-section">
                    <h3>Education Sector Infrastructure</h3>
                    <div className="case-scale-badge">Campus IT Infrastructure & Virtualization</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Educational institutions required reliable, high-performance servers to run Learning Management Systems (LMS), student databases, virtual labs, and support thousands of concurrent users during peak academic periods.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>HPE ProLiant DL380 Gen10</strong> - High-performance rack servers for core applications</li>
                          <li>✓ <strong>HPE SimpliVity</strong> - Hyperconverged infrastructure for virtual labs</li>
                          <li>✓ <strong>HPE iLO Management</strong> - Remote monitoring and intelligent management</li>
                          <li>✓ <strong>Redundant Storage Systems</strong> - High-availability data protection</li>
                          <li>✓ <strong>Virtualization Platform</strong> - VMware vSphere integration</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Educational Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">5,000+</span>
                          <span className="impact-label">Students Supported</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">99.8%</span>
                          <span className="impact-label">System Uptime</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">50%</span>
                          <span className="impact-label">Faster Performance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/hpe-server-image1.jpeg" 
                    alt="HPE Education Server Deployment" 
                    icon="fas fa-graduation-cap" 
                    overlayText="HPE ProLiant DL380 Gen10"
                    strengthItems={[
                      "Campus-wide infrastructure expertise",
                      "Educational technology integration",
                      "High-density user environment management"
                    ]}
                  />
                </div>
              </div>

              {/* Hospitality Sector Case Study */}
              <div id="hpe-hospitality" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-hotel"></i></div>
                  <div className="case-title-section">
                    <h3>Hospitality Sector Solutions</h3>
                    <div className="case-scale-badge">Guest Services & IT Operations</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Hotel chains needed reliable backend systems for booking management, billing systems, guest services, and property management systems with 24/7 availability requirements.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>HPE ProLiant ML350 Gen10</strong> - Tower servers for property management</li>
                          <li>✓ <strong>HPE MSA Storage</strong> - Reliable data storage for guest records</li>
                          <li>✓ <strong>High Availability Setup</strong> - Redundant systems for zero downtime</li>
                          <li>✓ <strong>Backup & Recovery</strong> - Automated data protection systems</li>
                          <li>✓ <strong>Remote Management</strong> - HPE iLO for 24/7 monitoring</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Hospitality Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">24/7</span>
                          <span className="impact-label">System Availability</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">40%</span>
                          <span className="impact-label">Faster Check-in</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Data Security</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/hpe-server-image2.jpeg" 
                    alt="HPE Hospitality Server Solution" 
                    icon="fas fa-hotel" 
                    overlayText="HPE ProLiant ML350 Gen10"
                    strengthItems={[
                      "24/7 hospitality operations expertise",
                      "Guest service system integration",
                      "High-availability deployment experience"
                    ]}
                  />
                </div>
              </div>

              {/* Manufacturing Sector Case Study */}
              <div id="hpe-manufacturing" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-industry"></i></div>
                  <div className="case-title-section">
                    <h3>Manufacturing &amp; Textile Solutions</h3>
                    <div className="case-scale-badge">ERP &amp; Production Systems</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Manufacturing companies needed high-performance servers to run ERP systems, inventory management, production planning applications, and real-time monitoring systems for their operations.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>HPE ProLiant DL360 Gen10</strong> - High-density compute for ERP systems</li>
                          <li>✓ <strong>HPE Nimble Storage</strong> - All-flash arrays for database performance</li>
                          <li>✓ <strong>Database Optimization</strong> - SQL Server and Oracle tuning</li>
                          <li>✓ <strong>Production Integration</strong> - Real-time data processing capabilities</li>
                          <li>✓ <strong>Disaster Recovery</strong> - Business continuity planning</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Manufacturing Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">60%</span>
                          <span className="impact-label">Faster ERP Performance</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">99.9%</span>
                          <span className="impact-label">Production Uptime</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">30%</span>
                          <span className="impact-label">Cost Reduction</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/hpe-server-image3.png" 
                    alt="HPE Manufacturing Server Solution" 
                    icon="fas fa-industry" 
                    overlayText="HPE ProLiant DL360 Gen10"
                    strengthItems={[
                      "Industrial ERP system expertise",
                      "Production environment integration",
                      "High-performance database optimization"
                    ]}
                  />
                </div>
              </div>

              {/* Healthcare & Pharma Case Study */}
              <div id="hpe-healthcare" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-flask"></i></div>
                  <div className="case-title-section">
                    <h3>Healthcare &amp; Pharmaceuticals</h3>
                    <div className="case-scale-badge">Secure &amp; Compliant Infrastructure</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Healthcare and pharmaceutical organizations required secure, compliant, and high-performance servers for sensitive patient data, research systems, and regulatory compliance requirements.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>HPE ProLiant DL380 Gen10</strong> - HIPAA-compliant server infrastructure</li>
                          <li>✓ <strong>Advanced Security Features</strong> - Silicon Root of Trust technology</li>
                          <li>✓ <strong>Encrypted Storage</strong> - Data protection at rest and in transit</li>
                          <li>✓ <strong>Compliance Monitoring</strong> - Audit trail and reporting systems</li>
                          <li>✓ <strong>Backup & Archive</strong> - Long-term data retention solutions</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Healthcare Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">HIPAA Compliance</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">256-bit</span>
                          <span className="impact-label">Data Encryption</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">99.99%</span>
                          <span className="impact-label">Data Availability</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/hpe-server-image4.jpeg" 
                    alt="HPE Healthcare Server Solution" 
                    icon="fas fa-flask" 
                    overlayText="HIPAA-Compliant Infrastructure"
                    strengthItems={[
                      "Healthcare compliance expertise",
                      "Secure infrastructure deployment",
                      "Regulatory requirement understanding"
                    ]}
                  />
                </div>
              </div>

              {/* Energy & Utilities Case Study */}
              <div id="hpe-energy" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-bolt"></i></div>
                  <div className="case-title-section">
                    <h3>Energy &amp; Utilities Sector</h3>
                    <div className="case-scale-badge">High Availability &amp; Monitoring Systems</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Energy companies needed robust, reliable servers for critical monitoring systems, operational data management, and SCADA systems with zero-tolerance for downtime.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>HPE Integrity Servers</strong> - Mission-critical computing platform</li>
                          <li>✓ <strong>Fault-Tolerant Design</strong> - Redundant components and hot-swap capabilities</li>
                          <li>✓ <strong>Real-time Monitoring</strong> - SCADA system integration</li>
                          <li>✓ <strong>High Availability Clustering</strong> - Zero-downtime architecture</li>
                          <li>✓ <strong>Environmental Monitoring</strong> - Temperature and power management</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Energy Sector Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">99.999%</span>
                          <span className="impact-label">System Uptime</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">24/7</span>
                          <span className="impact-label">Monitoring Coverage</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Zero</span>
                          <span className="impact-label">Unplanned Downtime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/hpe-energy.jpg" 
                    alt="HPE Energy Sector Server Solution" 
                    icon="fas fa-bolt" 
                    overlayText="Mission-Critical Infrastructure"
                    strengthItems={[
                      "Mission-critical system expertise",
                      "Industrial environment deployment",
                      "High-availability architecture design"
                    ]}
                  />
                </div>
              </div>

              {/* Tourism Sector Case Study */}
              <div id="hpe-tourism" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-plane"></i></div>
                  <div className="case-title-section">
                    <h3>Tourism &amp; Travel Sector</h3>
                    <div className="case-scale-badge">Data &amp; Application Hosting</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Tourism companies required secure and scalable servers for booking systems, customer data management, and seasonal traffic handling with peak load capabilities.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>HPE ProLiant DL380 Gen10</strong> - Scalable web application hosting</li>
                          <li>✓ <strong>Load Balancing</strong> - Traffic distribution for peak seasons</li>
                          <li>✓ <strong>Database Clustering</strong> - High-performance booking systems</li>
                          <li>✓ <strong>Content Delivery</strong> - Fast website and application performance</li>
                          <li>✓ <strong>Security Hardening</strong> - PCI-DSS compliance for payments</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Tourism Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">300%</span>
                          <span className="impact-label">Peak Load Handling</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">2x</span>
                          <span className="impact-label">Faster Bookings</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">PCI Compliance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/hpe-tourism.jpg" 
                    alt="HPE Tourism Server Solution" 
                    icon="fas fa-plane" 
                    overlayText="Scalable Tourism Platform"
                    strengthItems={[
                      "Seasonal traffic management expertise",
                      "E-commerce platform optimization",
                      "Payment system security implementation"
                    ]}
                  />
                </div>
              </div>
            </div>
            
            <div className="section-back-to-top">
              <button className="back-to-top-btn" onClick={scrollToLogoBar}>
                <i className="fas fa-chevron-up"></i> Back to Brands
              </button>
            </div>
          </div>

          {/* Zoho Business Solutions Case Studies */}
          <div id="zoho-cases" className="brand-section zoho-section" style={{ marginTop: '80px', paddingTop: '60px' }}>
            <div className="section-title text-center" style={{ marginBottom: '50px' }}>
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Zoho Solutions</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <h2 className="section-title__title">
                Zoho Business <span>Success Stories</span>
              </h2>
              <p style={{ marginTop: '15px', color: '#94a3b8', fontSize: '1.05rem' }}>
                Operational excellence and automated workflows driven by Zoho ERP and SaaS solutions
              </p>
            </div>

            <div className="enhanced-use-cases" style={{ textAlign: 'left' }}>
              {/* Sales Teams Case Study */}
              <div id="zoho-crm" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-chart-line"></i></div>
                  <div className="case-title-section">
                    <h3>Sales &amp; CRM Automation</h3>
                    <div className="case-scale-badge">Enterprise Sales Operations</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Corporate sales teams struggled with manual lead tracking, fragmented customer data, poor pipeline visibility, and delayed response times to prospective clients.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Zoho CRM Enterprise</strong> - Centralized lead and deal lifecycle management</li>
                          <li>✓ <strong>Blueprint Automation</strong> - Guided sales processes for reps</li>
                          <li>✓ <strong>Zia AI Assistant</strong> - Predictive sales intelligence and anomaly detection</li>
                          <li>✓ <strong>Omnichannel Communication</strong> - Integrated email, telephony, and chat</li>
                          <li>✓ <strong>Zoho Analytics Link</strong> - Comprehensive sales pipeline dashboard</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Sales Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">300%</span>
                          <span className="impact-label">Lead Conversion Improvement</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">45%</span>
                          <span className="impact-label">Reduction in Sales Cycle</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">95%</span>
                          <span className="impact-label">Pipeline Accuracy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/zoho-crm.jpg" 
                    alt="Zoho CRM Sales Management Solution" 
                    icon="fas fa-chart-line" 
                    overlayText="Zoho CRM Enterprise"
                    strengthItems={[
                      "Custom Blueprint & workflow design expertise",
                      "End-to-end cloud ERP integrations",
                      "AI-assisted sales forecasting systems"
                    ]}
                  />
                </div>
              </div>

              {/* Finance Teams Case Study */}
              <div id="zoho-books" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-wallet"></i></div>
                  <div className="case-title-section">
                    <h3>Financial Operations &amp; Books</h3>
                    <div className="case-scale-badge">Automated Accounting &amp; Billing</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Finance departments faced massive reconciliation delays, manual invoicing errors, lack of multi-currency handling, and non-compliance with regional tax regimes.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Zoho Books</strong> - Unified accounting and automated compliance</li>
                          <li>✓ <strong>Zoho Expense</strong> - Corporate card reconciliation and claims routing</li>
                          <li>✓ <strong>Automated Workflows</strong> - Recurring billing and payment reminders</li>
                          <li>✓ <strong>Multi-Currency Handling</strong> - Real-time forex calculations</li>
                          <li>✓ <strong>Auditor Portal</strong> - Secure access for third-party tax validation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Financial Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">5x</span>
                          <span className="impact-label">Faster Month-End Closure</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">99.9%</span>
                          <span className="impact-label">Billing Accuracy</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Tax Compliance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/zoho-books.jpg" 
                    alt="Zoho Books Finance Automation" 
                    icon="fas fa-wallet" 
                    overlayText="Zoho Books Automation"
                    strengthItems={[
                      "Custom regional tax structure configurations",
                      "Bank feed integrations & auto-matching systems",
                      "Automated expenditure control designs"
                    ]}
                  />
                </div>
              </div>

              {/* Marketing Teams Case Study */}
              <div id="zoho-marketing" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-bullhorn"></i></div>
                  <div className="case-title-section">
                    <h3>Omnichannel Marketing</h3>
                    <div className="case-scale-badge">Unified Brand Outreach</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Brands lacked centralized lead nurturing, resulting in scattered social messaging, uncoordinated email campaigns, and difficulty measuring ROI on digital marketing spend.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Zoho Marketing Automation</strong> - Visual journey builders</li>
                          <li>✓ <strong>Zoho Campaigns</strong> - Responsive newsletters and A/B testing</li>
                          <li>✓ <strong>Zoho Social</strong> - Multi-channel publishing and listening</li>
                          <li>✓ <strong>Web Analytics Integration</strong> - Visitor tracking and behavior maps</li>
                          <li>✓ <strong>Smart Segmentation</strong> - Dynamic lists based on customer criteria</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Marketing Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">150%</span>
                          <span className="impact-label">Increase in Engagement</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">80%</span>
                          <span className="impact-label">Better Lead Quality</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Outreach Attribution</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/zoho-marketing.jpg" 
                    alt="Zoho Marketing Automation Setup" 
                    icon="fas fa-bullhorn" 
                    overlayText="Zoho Marketing Cloud"
                    strengthItems={[
                      "Visual journey mapping & automated triggers",
                      "Multi-platform data synchronization",
                      "Advanced visitor tracking implementation"
                    ]}
                  />
                </div>
              </div>

              {/* Retail & eCommerce Case Study */}
              <div id="zoho-retail" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-store"></i></div>
                  <div className="case-title-section">
                    <h3>Retail &amp; eCommerce</h3>
                    <div className="case-scale-badge">Unified Inventory &amp; Point of Sale</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Retail chains struggled with stock discrepancies between online and physical stores, slow POS checkout speeds, and poor loyalty program tracking.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Zoho Commerce</strong> - Sleek online storefront design</li>
                          <li>✓ <strong>Zoho Inventory</strong> - Real-time stock sync across multiple channels</li>
                          <li>✓ <strong>Cloud POS Integration</strong> - Rapid billing and custom receipt generation</li>
                          <li>✓ <strong>Customer Portal</strong> - Unified portal for order history and loyalty points</li>
                          <li>✓ <strong>Automated Restocking</strong> - Low stock alerts and auto purchase order creation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Retail Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">Zero</span>
                          <span className="impact-label">Stock Discrepancies</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">50%</span>
                          <span className="impact-label">Faster Checkout Times</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">40%</span>
                          <span className="impact-label">Repeat Purchase Rate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/zoho-retail.jpg" 
                    alt="Zoho Retail Inventory System" 
                    icon="fas fa-store" 
                    overlayText="Zoho eCommerce Suite"
                    strengthItems={[
                      "Multi-channel inventory synchronization",
                      "Custom point-of-sale workflow setups",
                      "Dynamic loyalty program configuration"
                    ]}
                  />
                </div>
              </div>

              {/* Manufacturing Case Study */}
              <div id="zoho-manufacturing" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-industry"></i></div>
                  <div className="case-title-section">
                    <h3>Manufacturing Logistics</h3>
                    <div className="case-scale-badge">Shop Floor &amp; Resource Automation</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Plants lacked real-time visibility into machine output, raw material bottlenecks on the floor, and faced manual maintenance log entry delays.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Zoho Creator custom applications</strong> - Mobile shop floor interfaces</li>
                          <li>✓ <strong>Barcode &amp; QR scanning</strong> - Easy asset and material tracking</li>
                          <li>✓ <strong>Predictive Maintenance Alerts</strong> - Automatically generated task orders</li>
                          <li>✓ <strong>Supplier Portal</strong> - Real-time tracking of raw material shipping</li>
                          <li>✓ <strong>Production Analytics</strong> - Custom reports monitoring throughput</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Logistical Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">30%</span>
                          <span className="impact-label">Increase in Shop Throughput</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">85%</span>
                          <span className="impact-label">Fewer Material Bottlenecks</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">99.9%</span>
                          <span className="impact-label">Accurate Production Tracking</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/zoho-manufacturing.jpg" 
                    alt="Zoho Manufacturing Floor Automation" 
                    icon="fas fa-industry" 
                    overlayText="Zoho Creator Industry"
                    strengthItems={[
                      "Custom low-code industrial application design",
                      "Rugged mobile interface engineering",
                      "Automated procurement chain triggers"
                    ]}
                  />
                </div>
              </div>

              {/* Large Enterprise Case Study */}
              <div id="zoho-enterprise" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-cubes"></i></div>
                  <div className="case-title-section">
                    <h3>Large Enterprise HR &amp; Service</h3>
                    <div className="case-scale-badge">Global Employee Lifecycle Management</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Global companies with thousands of employees faced massive ticket resolution queues, disjointed onboarding, and high HR admin costs.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Zoho People Enterprise</strong> - Integrated personnel profile database</li>
                          <li>✓ <strong>Zoho Desk</strong> - Ticket routing for multi-department service queries</li>
                          <li>✓ <strong>Self-Service HR Portals</strong> - Easy profile data updates and leave requests</li>
                          <li>✓ <strong>Dynamic Onboarding Workflows</strong> - Standardized globally</li>
                          <li>✓ <strong>SLA Escalation Rules</strong> - Guaranteeing employee ticket closures</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Enterprise Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">10,000+</span>
                          <span className="impact-label">Profiles Managed</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">70%</span>
                          <span className="impact-label">Faster Ticket Resolution</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">55%</span>
                          <span className="impact-label">Lower Operational Admin Overhead</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/zoho-enterprise.jpg" 
                    alt="Zoho Enterprise Portal Solutions" 
                    icon="fas fa-cubes" 
                    overlayText="Zoho Enterprise Cloud"
                    strengthItems={[
                      "Global HR platform deployment expertise",
                      "Multi-region ticket routing architectures",
                      "Automated SLA monitoring system integration"
                    ]}
                  />
                </div>
              </div>
            </div>
            
            <div className="section-back-to-top">
              <button className="back-to-top-btn" onClick={scrollToLogoBar}>
                <i className="fas fa-chevron-up"></i> Back to Brands
              </button>
            </div>
          </div>

          {/* Microsoft 365 Success Stories */}
          <div id="microsoft365-cases" className="brand-section m365-section" style={{ marginTop: '80px', paddingTop: '60px' }}>
            <div className="section-title text-center" style={{ marginBottom: '50px' }}>
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Microsoft 365</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <h2 className="section-title__title">
                Microsoft 365 <span>Success Stories</span>
              </h2>
              <p style={{ marginTop: '15px', color: '#94a3b8', fontSize: '1.05rem' }}>
                Secure, modern workplace designs powered by Microsoft 365 enterprise suite
              </p>
            </div>

            <div className="enhanced-use-cases" style={{ textAlign: 'left' }}>
              {/* Corporate Enterprise Case Study */}
              <div id="microsoft365-enterprise" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-briefcase"></i></div>
                  <div className="case-title-section">
                    <h3>Corporate Enterprise Setup</h3>
                    <div className="case-scale-badge">Modern Workplace &amp; Secure Collaboration</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Large corporations faced fragmented communication, unsecure file sharing across personal drives, compliance risks, and complex onboarding for hybrid workers.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Microsoft Teams Enterprise</strong> - Hub for chat, calls, and meetings</li>
                          <li>✓ <strong>SharePoint Online &amp; OneDrive</strong> - Secure document management</li>
                          <li>✓ <strong>Microsoft Purview</strong> - Strict information protection and compliance</li>
                          <li>✓ <strong>Entra ID (Active Directory)</strong> - Single Sign-On and multi-factor access</li>
                          <li>✓ <strong>Autopilot Deployment</strong> - Zero-touch device configurations</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Corporate Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">5,000+</span>
                          <span className="impact-label">Users Onboarded</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Secure File Sharing</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">60%</span>
                          <span className="impact-label">Faster Employee Setup</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/microsoft365-enterprise.jpg" 
                    alt="Microsoft 365 Enterprise Solution" 
                    icon="fas fa-briefcase" 
                    overlayText="Microsoft 365 Enterprise"
                    strengthItems={[
                      "Enterprise-scale Purview compliance architecture",
                      "Seamless Active Directory tenant migrations",
                      "Zero-touch corporate laptop setup configurations"
                    ]}
                  />
                </div>
              </div>

              {/* Banking & Finance Case Study */}
              <div id="microsoft365-banking" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-university"></i></div>
                  <div className="case-title-section">
                    <h3>Banking &amp; Financial Services</h3>
                    <div className="case-scale-badge">Highly Secure &amp; Auditable Environment</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Banks required extreme document auditing controls, encrypted external email capabilities, and strict prevention of data leaks (DLP) across messaging lines.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Exchange Online Protection</strong> - Advanced email defense and filters</li>
                          <li>✓ <strong>Sensitivity Labels</strong> - Automatic categorization of sensitive files</li>
                          <li>✓ <strong>Data Loss Prevention (DLP)</strong> - Dynamic block on credit card share attempts</li>
                          <li>✓ <strong>Customer Lockbox</strong> - Bank-approved administrative tasks</li>
                          <li>✓ <strong>eDiscovery (Premium)</strong> - Deep audit capabilities for security investigators</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Financial Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">Zero</span>
                          <span className="impact-label">Data Leaks Recorded</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Audit Compliance</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">256-bit</span>
                          <span className="impact-label">Message Encryption</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/microsoft365-banking.jpg" 
                    alt="Microsoft 365 Secure Banking Setup" 
                    icon="fas fa-university" 
                    overlayText="Highly Secure M365 Setup"
                    strengthItems={[
                      "Rigid financial security standard experience",
                      "Automated sensitive label scripting capabilities",
                      "Complex data loss policy architecture design"
                    ]}
                  />
                </div>
              </div>

              {/* Healthcare Case Study */}
              <div id="microsoft365-healthcare" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-hospital"></i></div>
                  <div className="case-title-section">
                    <h3>Healthcare &amp; Government Hospitals</h3>
                    <div className="case-scale-badge">HIPAA Compliant Remote Consultation</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Hospitals needed virtual consult tools conforming to HIPAA standards, secure patient updates between doctors, and simplified shift schedules for nursing staff.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Teams for Healthcare</strong> - Secure, encrypted video calls for patients</li>
                          <li>✓ <strong>Shifts in Teams</strong> - Automated shift scheduling and trades</li>
                          <li>✓ <strong>Microsoft Bookings</strong> - Easy patient online consult booking portal</li>
                          <li>✓ <strong>HIPAA Compliance templates</strong> - Preset Purview data lock rules</li>
                          <li>✓ <strong>Mobile Intune Controls</strong> - Isolated patient data on doctors' tablets</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Medical Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">HIPAA Conformance</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">20,000+</span>
                          <span className="impact-label">Consultations Hosted</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">80%</span>
                          <span className="impact-label">Reduced Schedule Mistakes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/microsoft365-healthcare.jpg" 
                    alt="Microsoft 365 Medical Consult Setup" 
                    icon="fas fa-hospital" 
                    overlayText="HIPAA Compliant M365"
                    strengthItems={[
                      "Intune Mobile Device Management setup skills",
                      "HIPAA presets compliance automation",
                      "Integration with hospital patient databases"
                    ]}
                  />
                </div>
              </div>

              {/* Education Sector Case Study */}
              <div id="microsoft365-education" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-graduation-cap"></i></div>
                  <div className="case-title-section">
                    <h3>Education Sector</h3>
                    <div className="case-scale-badge">Unified Remote Learning Platforms</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Schools required reliable, easy-to-use virtual class portals, digital assignment collectors, and tools to handle seasonal student onboarding without manual strain.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Teams for Education</strong> - Interactive classrooms and notebooks</li>
                          <li>✓ <strong>OneNote Class Notebook</strong> - Flexible workspace for student tasks</li>
                          <li>✓ <strong>School Data Sync (SDS)</strong> - Auto creation of class rosters</li>
                          <li>✓ <strong>Microsoft Forms</strong> - Interactive quizzes with automatic grades</li>
                          <li>✓ <strong>A1/A3 Student Licenses</strong> - Safe, targeted digital environments</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Educational Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">15,000+</span>
                          <span className="impact-label">Active Student Rosters</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">99.9%</span>
                          <span className="impact-label">Class Availability</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">70%</span>
                          <span className="impact-label">Lower Admin Overhead</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/microsoft365-education.jpg" 
                    alt="Microsoft 365 Education Roster Setup" 
                    icon="fas fa-graduation-cap" 
                    overlayText="M365 Education Cloud"
                    strengthItems={[
                      "School Data Sync automation setups",
                      "Academic policy lockdown configuration skills",
                      "Enterprise-scale student license control"
                    ]}
                  />
                </div>
              </div>

              {/* Government Organizations Case Study */}
              <div id="microsoft365-government" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-landmark"></i></div>
                  <div className="case-title-section">
                    <h3>Government Organizations</h3>
                    <div className="case-scale-badge">Centralized Directory &amp; Sovereignty</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Sovereign entities needed centralized directories for hundreds of departments, extremely strong access controls, and data residency in approved geographic centers.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Entra ID Multi-Tenant Directory</strong> - Department separation</li>
                          <li>✓ <strong>Microsoft Purview Geo-Lock</strong> - Confined storage inside country lines</li>
                          <li>✓ <strong>FIDO2 / Certificate Authentication</strong> - Hardware key security</li>
                          <li>✓ <strong>Compliance Audits</strong> - Continuous automated reporting</li>
                          <li>✓ <strong>Defender for Office 365</strong> - Anti phishing and spear attacks</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Government Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Local Data Residency</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">Zero Trust</span>
                          <span className="impact-label">Identity Validation</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">95%</span>
                          <span className="impact-label">Defense Accuracy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/microsoft365-government.jpg" 
                    alt="Microsoft 365 Government Solution" 
                    icon="fas fa-landmark" 
                    overlayText="Government Security Platform"
                    strengthItems={[
                      "Government compliance expertise",
                      "Security and governance implementation",
                      "Public sector digital transformation"
                    ]}
                  />
                </div>
              </div>
            </div>
            
            <div className="section-back-to-top">
              <button className="back-to-top-btn" onClick={scrollToLogoBar}>
                <i className="fas fa-chevron-up"></i> Back to Brands
              </button>
            </div>
          </div>

          {/* Cymmetri Identity & Access Management Case Studies */}
          <div id="cymmetri-cases" className="brand-section cymmetri-section" style={{ marginTop: '80px', paddingTop: '60px' }}>
            <div className="section-title text-center" style={{ marginBottom: '50px' }}>
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Cymmetri IAM</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <h2 className="section-title__title">
                Cymmetri Identity <span>Success Stories</span>
              </h2>
              <p style={{ marginTop: '15px', color: '#94a3b8', fontSize: '1.05rem' }}>
                Advanced identity governance and secure access management across critical industries
              </p>
            </div>

            <div className="enhanced-use-cases" style={{ textAlign: 'left' }}>
              {/* Banking & Financial Services Case Study */}
              <div id="cymmetri-banking" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-university"></i></div>
                  <div className="case-title-section">
                    <h3>Banking &amp; Financial Services</h3>
                    <div className="case-scale-badge">Identity Governance &amp; Secure Authentication</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Financial institutions required strict identity governance, secure user authentication, and controlled access to critical banking systems and customer data while maintaining regulatory compliance.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Cymmetri Identity Governance</strong> - Centralized identity lifecycle management</li>
                          <li>✓ <strong>Multi-Factor Authentication</strong> - Advanced authentication mechanisms</li>
                          <li>✓ <strong>Privileged Access Management</strong> - Secure admin and privileged user access</li>
                          <li>✓ <strong>Compliance Reporting</strong> - Automated audit trails and compliance reports</li>
                          <li>✓ <strong>Risk-Based Access</strong> - Dynamic access controls based on risk assessment</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Banking Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Regulatory Compliance</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">85%</span>
                          <span className="impact-label">Reduced Security Incidents</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">60%</span>
                          <span className="impact-label">Faster User Provisioning</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/cymmetri-banking.jpg" 
                    alt="Cymmetri Banking IAM Solution" 
                    icon="fas fa-university" 
                    overlayText="Banking IAM Platform"
                    strengthItems={[
                      "Financial services IAM expertise",
                      "Regulatory compliance implementation",
                      "Risk-based access control design"
                    ]}
                  />
                </div>
              </div>

              {/* Healthcare Organizations Case Study */}
              <div id="cymmetri-healthcare" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-hospital"></i></div>
                  <div className="case-title-section">
                    <h3>Healthcare Organizations</h3>
                    <div className="case-scale-badge">Secure Access for Medical Staff &amp; Systems</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Healthcare providers required secure access management for doctors, staff, applications, and patient management systems while ensuring HIPAA compliance and patient data protection.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Healthcare IAM</strong> - Role-based access for medical staff</li>
                          <li>✓ <strong>Single Sign-On (SSO)</strong> - Seamless access to medical applications</li>
                          <li>✓ <strong>Patient Data Protection</strong> - Secure access to patient records</li>
                          <li>✓ <strong>HIPAA Compliance</strong> - Healthcare regulatory compliance</li>
                          <li>✓ <strong>Emergency Access</strong> - Break-glass access for critical situations</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Healthcare Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">HIPAA Compliance</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">70%</span>
                          <span className="impact-label">Faster Patient Access</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">90%</span>
                          <span className="impact-label">Reduced Unauthorized Access</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/cymmetri-healthcare.jpg" 
                    alt="Cymmetri Healthcare IAM Solution" 
                    icon="fas fa-hospital" 
                    overlayText="Healthcare IAM Platform"
                    strengthItems={[
                      "Healthcare compliance expertise",
                      "Medical workflow integration",
                      "Patient data security implementation"
                    ]}
                  />
                </div>
              </div>

              {/* Government Sector Case Study */}
              <div id="cymmetri-government" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-landmark"></i></div>
                  <div className="case-title-section">
                    <h3>Government Sector</h3>
                    <div className="case-scale-badge">Centralized Authentication &amp; Zero Trust</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Government organizations required secure identity governance, controlled user access, and centralized authentication across departments and systems with strict security protocols.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Government-Grade IAM</strong> - High-security identity management</li>
                          <li>✓ <strong>Zero Trust Architecture</strong> - Never trust, always verify approach</li>
                          <li>✓ <strong>Multi-Department SSO</strong> - Unified access across government systems</li>
                          <li>✓ <strong>Advanced Audit Trails</strong> - Comprehensive access logging and monitoring</li>
                          <li>✓ <strong>Secure Federation</strong> - Inter-agency identity federation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Government Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Security Compliance</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">80%</span>
                          <span className="impact-label">Reduced Admin Overhead</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">95%</span>
                          <span className="impact-label">Access Control Accuracy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/cymmetri-government.jpg" 
                    alt="Cymmetri Government IAM Solution" 
                    icon="fas fa-landmark" 
                    overlayText="Government Zero Trust"
                    strengthItems={[
                      "Government security standards expertise",
                      "Zero Trust architecture implementation",
                      "Multi-agency federation experience"
                    ]}
                  />
                </div>
              </div>

              {/* Manufacturing Industry Case Study */}
              <div id="cymmetri-manufacturing" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-industry"></i></div>
                  <div className="case-title-section">
                    <h3>Manufacturing Industry</h3>
                    <div className="case-scale-badge">ERP &amp; Operational Access Security</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Manufacturing organizations required secure access to ERP systems, production applications, and operational infrastructure across multiple locations with varying security requirements.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Industrial IAM</strong> - Manufacturing-specific identity management</li>
                          <li>✓ <strong>ERP Integration</strong> - Seamless access to SAP, Oracle, and other ERP systems</li>
                          <li>✓ <strong>Operational Technology (OT) Security</strong> - Secure access to production systems</li>
                          <li>✓ <strong>Multi-Site Management</strong> - Centralized identity across manufacturing locations</li>
                          <li>✓ <strong>Shift-Based Access</strong> - Time-based access controls for shift workers</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Manufacturing Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">75%</span>
                          <span className="impact-label">Reduced Security Risks</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">50%</span>
                          <span className="impact-label">Faster System Access</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">90%</span>
                          <span className="impact-label">Compliance Achievement</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/cymmetri-manufacturing.jpg" 
                    alt="Cymmetri Manufacturing IAM Solution" 
                    icon="fas fa-industry" 
                    overlayText="Industrial IAM Platform"
                    strengthItems={[
                      "Industrial security expertise",
                      "ERP system integration experience",
                      "Multi-site deployment capabilities"
                    ]}
                  />
                </div>
              </div>

              {/* Large Enterprises Case Study */}
              <div id="cymmetri-enterprise" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-building"></i></div>
                  <div className="case-title-section">
                    <h3>Large Enterprises</h3>
                    <div className="case-scale-badge">Enterprise-Wide IAM &amp; Governance</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Large enterprises required centralized identity governance and secure authentication for thousands of users, applications, and distributed environments across global locations.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Enterprise IAM Platform</strong> - Scalable identity management for large organizations</li>
                          <li>✓ <strong>Global Directory Services</strong> - Unified identity across global locations</li>
                          <li>✓ <strong>Application Portfolio Management</strong> - Centralized access to hundreds of applications</li>
                          <li>✓ <strong>Identity Analytics</strong> - Advanced analytics for access patterns and risks</li>
                          <li>✓ <strong>Automated Provisioning</strong> - Streamlined user lifecycle management</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Enterprise Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">10,000+</span>
                          <span className="impact-label">Users Managed</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">65%</span>
                          <span className="impact-label">Reduced IT Costs</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">80%</span>
                          <span className="impact-label">Faster User Onboarding</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/cymmetri-enterprise.jpg" 
                    alt="Cymmetri Enterprise IAM Solution" 
                    icon="fas fa-building" 
                    overlayText="Enterprise IAM Platform"
                    strengthItems={[
                      "Enterprise-scale IAM deployment",
                      "Global identity management",
                      "Complex integration capabilities"
                    ]}
                  />
                </div>
              </div>

              {/* Educational Institutions Case Study */}
              <div id="cymmetri-education" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-graduation-cap"></i></div>
                  <div className="case-title-section">
                    <h3>Educational Institutions</h3>
                    <div className="case-scale-badge">Campus Identity &amp; Access Management</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>Educational organizations required secure and simplified access for students, faculty, administrators, and digital learning platforms with varying access requirements and seasonal user changes.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Campus IAM</strong> - Education-specific identity management</li>
                          <li>✓ <strong>Student Lifecycle Management</strong> - Automated enrollment and graduation processes</li>
                          <li>✓ <strong>Learning Management Integration</strong> - Seamless access to educational platforms</li>
                          <li>✓ <strong>Guest Access Management</strong> - Secure access for visitors and temporary users</li>
                          <li>✓ <strong>Mobile-First Access</strong> - Student-friendly mobile authentication</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Education Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">15,000+</span>
                          <span className="impact-label">Students &amp; Faculty</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">90%</span>
                          <span className="impact-label">User Satisfaction</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">70%</span>
                          <span className="impact-label">Reduced Help Desk Calls</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/cymmetri-education.jpg" 
                    alt="Cymmetri Education IAM Solution" 
                    icon="fas fa-graduation-cap" 
                    overlayText="Campus IAM Platform"
                    strengthItems={[
                      "Educational technology expertise",
                      "Student lifecycle management",
                      "Campus-wide integration experience"
                    ]}
                  />
                </div>
            </div>
          </div>
          
          <div className="section-back-to-top">
            <button className="back-to-top-btn" onClick={scrollToLogoBar}>
              <i className="fas fa-chevron-up"></i> Back to Brands
            </button>
          </div>
        </div>

          {/* Nutanix Cloud Success Stories */}
          <div id="nutanix-cases" className="brand-section nutanix-section" style={{ marginTop: '80px', paddingTop: '60px' }}>
            <div className="section-title text-center" style={{ marginBottom: '50px' }}>
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Nutanix Cloud</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <h2 className="section-title__title">
                Nutanix <span>HCI & Cloud Success Stories</span>
              </h2>
              <p style={{ marginTop: '15px', color: '#94a3b8', fontSize: '1.05rem' }}>
                Enterprise hyperconverged infrastructure and private cloud solutions delivered by Trace Network
              </p>
            </div>

            <div className="enhanced-use-cases" style={{ textAlign: 'left' }}>
              {/* Smart Factory Case Study */}
              <div id="nutanix-manufacturing" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-industry"></i></div>
                  <div className="case-title-section">
                    <h3>Smart Factory with Nutanix HCI</h3>
                    <div className="case-scale-badge">Manufacturing Industry Deployment</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>A leading manufacturing group struggled with high latency, frequent production line downtime, and complex decentralized IT management across multiple factory sites, which disrupted their real-time IoT processing and manufacturing execution systems (MES).</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Nutanix Cloud Platform (HCI)</strong> - Consolidated compute, storage, and virtualization</li>
                          <li>✓ <strong>Nutanix AHV Hypervisor</strong> - Migrated from expensive traditional hypervisors with zero license fees</li>
                          <li>✓ <strong>Multi-Site Prism Central</strong> - Single pane-of-glass orchestration for all factories</li>
                          <li>✓ <strong>Edge Smart Computing</strong> - Low-latency localized processing for factory floor IoT devices</li>
                          <li>✓ <strong>High-Availability Clusters</strong> - Active-active nodes to prevent any single point of failure</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Industrial Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">43%</span>
                          <span className="impact-label">TCO Reduction</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">99.99%</span>
                          <span className="impact-label">Assembly Uptime</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">40%</span>
                          <span className="impact-label">Lower Latency</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/nutanix-factory.jpg" 
                    alt="Nutanix Manufacturing Smart Factory HCI Solution" 
                    icon="fas fa-industry" 
                    overlayText="Nutanix HCI for Smart Manufacturing"
                    strengthItems={[
                      "HCI architecture for industrial smart factories",
                      "AHV license fee reduction optimization",
                      "Multi-site edge cluster deployment certified"
                    ]}
                  />
                </div>
              </div>

              {/* Modern Campus IT Case Study */}
              <div id="nutanix-education" className="enhanced-use-case reverse" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-graduation-cap"></i></div>
                  <div className="case-title-section">
                    <h3>Modern Campus IT Infrastructure</h3>
                    <div className="case-scale-badge">Education Sector Cloud Solution</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>A multi-campus university faced massive performance bottlenecks during online exams and student registration, caused by outdated legacy 3-tier servers that were complex to scale and expensive to maintain.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Nutanix Enterprise Cloud</strong> - Replaced complex legacy SAN/servers with unified HCI</li>
                          <li>✓ <strong>Linear Scalability</strong> - Added nodes on-the-fly to support registration peaks</li>
                          <li>✓ <strong>Nutanix Files</strong> - High-throughput secure storage for student research records</li>
                          <li>✓ <strong>Self-Healing Infrastructure</strong> - Automated system recovery with zero downtime</li>
                          <li>✓ <strong>Nutanix Frame Integration</strong> - Virtual desktops (VDI) for student computer labs</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Campus Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">1-Click</span>
                          <span className="impact-label">Easy Management</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">97%</span>
                          <span className="impact-label">Less Downtime</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">15,000+</span>
                          <span className="impact-label">Students Supported</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/nutanix-education.jpg" 
                    alt="Nutanix Campus Cloud Deployment" 
                    icon="fas fa-graduation-cap" 
                    overlayText="Nutanix Campus Cloud Solution"
                    strengthItems={[
                      "High-density student VDI implementation",
                      "Flexible scale-out cluster architecture",
                      "Educational SaaS integration expertise"
                    ]}
                  />
                </div>
              </div>

              {/* Large-Scale Enterprises Case Study */}
              <div id="nutanix-enterprise" className="enhanced-use-case" style={{ scrollMarginTop: '160px' }}>
                <div className="use-case-header">
                  <div className="case-icon-large"><i className="fas fa-building"></i></div>
                  <div className="case-title-section">
                    <h3>Enterprise Cloud Modernization</h3>
                    <div className="case-scale-badge">Large-Scale Enterprise Deployment</div>
                  </div>
                </div>
                <div className="use-case-content-enhanced">
                  <div className="use-case-text-enhanced">
                    <div className="problem-section">
                      <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                      <p>A multi-national enterprise with massive databases was burdened by escalating public cloud costs, strict compliance mandates, and slow provisioning times for developmental environments.</p>
                    </div>
                    <div className="solution-section">
                      <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                      <div className="highlight-box">
                        <ul className="highlight-list">
                          <li>✓ <strong>Nutanix Cloud Clusters (NC2) on AWS</strong> - Dynamic hybrid cloud architecture</li>
                          <li>✓ <strong>Database Management System (NDB)</strong> - 1-click database provisioning and scaling</li>
                          <li>✓ <strong>Nutanix Flow Network Security</strong> - Microsegmentation to isolate critical data assets</li>
                          <li>✓ <strong>Nutanix Unified Storage (NUS)</strong> - Unified object, file, and block data storage</li>
                          <li>✓ <strong>Disaster Recovery Automation</strong> - Continuous background replication to safe sites</li>
                        </ul>
                      </div>
                    </div>
                    <div className="impact-section">
                      <h4><i className="fas fa-chart-bar"></i> Business Impact:</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-number">60%</span>
                          <span className="impact-label">Faster Deployment</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">35%</span>
                          <span className="impact-label">Public Cloud Savings</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-number">100%</span>
                          <span className="impact-label">Compliance Achieved</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyImage 
                    src="/assets/images/partners/nutanix-enterprise.jpg" 
                    alt="Nutanix Enterprise Hybrid Cloud Modernization" 
                    icon="fas fa-building" 
                    overlayText="Nutanix Enterprise Cloud Platform"
                    strengthItems={[
                      "Hybrid cloud NC2 on AWS/Azure setup skills",
                      "Microsegmentation database isolation expertise",
                      "Automated disaster recovery architecture design"
                    ]}
                  />
                </div>
              </div>
              
              <div className="section-back-to-top">
                <button className="back-to-top-btn" onClick={scrollToLogoBar}>
                  <i className="fas fa-chevron-up"></i> Back to Brands
                </button>
              </div>
            </div>

            {/* Dynamically Render All Other Partner Case Studies to Resolve Deep Links perfectly */}
            {remainingBrands.map((brand) => (
              <div 
                key={brand.id}
                id={`${brand.id}-cases`} 
                className={`brand-section ${brand.id}-section`} 
                style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
              >
                <div className="section-title text-center" style={{ marginBottom: '50px' }}>
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-1" style={{ backgroundColor: brand.color }}></div>
                    <span className="section-title__tagline" style={{ color: brand.color }}>{brand.brandName}</span>
                    <div className="section-title__tagline-shape-2" style={{ backgroundColor: brand.color }}></div>
                  </div>
                  <h2 className="section-title__title">
                    {brand.brandName} <span>Success Stories</span>
                  </h2>
                  <p style={{ marginTop: '15px', color: '#94a3b8', fontSize: '1.05rem' }}>
                    {brand.tagline}
                  </p>
                </div>

                <div className="enhanced-use-cases" style={{ textAlign: 'left' }}>
                  {brand.cases.map((cs, idx) => (
                    <div 
                      key={idx}
                      id={`${brand.id}-${cs.id}`}
                      className={`enhanced-use-case ${idx % 2 === 1 ? 'reverse' : ''}`} 
                      style={{ scrollMarginTop: '160px' }}
                    >
                      <div className="use-case-header">
                        <div className="case-icon-large" style={{ color: brand.color }}><i className={cs.icon}></i></div>
                        <div className="case-title-section">
                          <h3>{cs.title}</h3>
                          <div className="case-scale-badge">{cs.scale}</div>
                        </div>
                      </div>
                      <div className="use-case-content-enhanced">
                        <div className="use-case-text-enhanced">
                          <div className="problem-section">
                            <h4><i className="fas fa-exclamation-triangle"></i> Challenge:</h4>
                            <p>{cs.challenge}</p>
                          </div>
                          <div className="solution-section">
                            <h4><i className="fas fa-wrench"></i> Our Solution:</h4>
                            <div className="highlight-box">
                              <ul className="highlight-list">
                                {cs.solutions.map((sol, sIdx) => (
                                  <li key={sIdx}>✓ <strong>{sol.title}</strong> - {sol.desc}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="impact-section">
                            <h4><i className="fas fa-chart-bar"></i> Measurable Impact:</h4>
                            <div className="impact-grid">
                              {cs.impacts.map((imp, impIdx) => (
                                <div className="impact-item" key={impIdx}>
                                  <span className="impact-number" style={{ color: brand.color, textShadow: `0 0 10px ${brand.color}44` }}>{imp.number}</span>
                                  <span className="impact-label">{imp.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <CaseStudyImage 
                          src={`/assets/images/partners/${brand.id}-${cs.id}.jpg`}
                          alt={`${brand.brandName} ${cs.title} Solution`} 
                          icon={cs.icon} 
                          overlayText={`${brand.brandName} ${cs.scale}`}
                          strengthItems={cs.strengths}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="section-back-to-top">
                  <button className="back-to-top-btn" onClick={scrollToLogoBar} style={{ '--brand-color': brand.color }}>
                    <i className="fas fa-chevron-up"></i> Back to Brands
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
