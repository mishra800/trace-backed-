// SEO Configuration for all pages
// Based on legacy HTML files meta tags and titles

const siteUrl = "https://tracenetwork.in"; // Update with your actual domain
const companyName = "Trace Network & Engineering Pvt Ltd";
const defaultImage = "/assets/images/logoo.png";

export const seoConfig = {
  home: {
    title: "Best Cybersecurity Company in Hyderabad | Trace Network & Engineering",
    description: "Trace Network & Engineering Pvt Ltd is India's leading IT solutions provider delivering advanced cybersecurity, network security, cloud, and managed IT services since 2005. Best Cybersecurity Company in Hyderabad.",
    keywords: "best cybersecurity company in hyderabad, cybersecurity, network security, IT solutions, managed IT services, cloud security, network infrastructure, IT infrastructure, trace network, india, cybersecurity hyderabad, IT company hyderabad",
    ogImage: "/assets/images/trace.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": companyName,
      "url": siteUrl,
      "logo": `${siteUrl}/assets/images/logoo.png`,
      "description": "Leading IT solutions and cybersecurity company in Hyderabad, India",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-40-XXXXXXXX",
        "contactType": "customer service"
      }
    }
  },

  companyProfile: {
    title: "Company Profile | About Us | Trace Network & Engineering Pvt Ltd",
    description: "Learn about Trace Network & Engineering Pvt Ltd – a trusted provider of networking, cybersecurity, IT infrastructure, and engineering solutions delivering reliable and scalable services across industries since 2005.",
    keywords: "company profile, trace network, IT solutions provider, cybersecurity company, network infrastructure, engineering solutions, about us, trace network hyderabad, IT company profile",
    ogImage: "/assets/images/about1.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Trace Network & Engineering",
      "description": "Company profile and information about Trace Network & Engineering Pvt Ltd"
    }
  },

  partners: {
    title: "Technology Partners | Sophos, HPE, Aruba, ManageEngine | Trace Network",
    description: "Trace Network & Engineering partners with leading technology vendors including Sophos, HPE Aruba, ManageEngine, Qualys, Safetica, Forcepoint, Veeam, Tenable, Microsoft, Dell, HP, Lenovo and more to deliver best-in-class IT and cybersecurity solutions.",
    keywords: "technology partners, IT partners, cybersecurity partners, sophos partner, hpe aruba partner, manageengine partner, qualys partner, safetica partner, forcepoint, veeam, tenable, microsoft partner, trace network partners",
    ogImage: "/assets/images/partners nav.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Technology Partners",
      "description": "Our technology partnerships with leading IT and cybersecurity vendors"
    }
  },

  awardsAccreditations: {
    title: "Awards & Accreditations | Certified IT & Cybersecurity Partner",
    description: "Discover the key industry awards, global partner certifications and technical achievements earned by Trace Network & Engineering Pvt Ltd, showcasing excellence in networking, cybersecurity and IT services.",
    keywords: "awards, accreditations, certifications, IT certifications, cybersecurity certifications, partner awards, industry recognition, trace network awards"
  },

  blogs: {
    title: "IT & Cybersecurity Blogs | Expert Insights | Trace Network & Engineering",
    description: "Explore expert blogs on cybersecurity, network infrastructure, cloud security, and IT solutions from Trace Network & Engineering. Browse all articles, search by topic, and stay updated with the latest technology insights from Hyderabad's leading IT company.",
    keywords: "IT blogs hyderabad, cybersecurity blogs india, network security articles, technology insights, IT trends hyderabad, security best practices, trace network blog, cybersecurity articles, IT expert insights, cloud security blog, network infrastructure blog, IT solutions blog hyderabad",
    ogImage: "/assets/images/cybersecurity.jpg",
    canonical: "https://tracenetwork.in/blogs",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Trace Network IT & Cybersecurity Blog",
      "description": "Expert blogs on cybersecurity, network infrastructure, cloud security, and IT solutions from Trace Network & Engineering, Hyderabad.",
      "url": "https://tracenetwork.in/blogs",
      "publisher": {
        "@type": "Organization",
        "name": "Trace Network & Engineering Pvt Ltd",
        "url": "https://tracenetwork.in",
        "logo": "https://tracenetwork.in/assets/images/logoo.png"
      },
      "inLanguage": "en-IN"
    }
  },

  contactUs: {
    title: "Contact Us | Get IT & Cybersecurity Solutions | Trace Network & Engineering",
    description: "Get in touch with Trace Network & Engineering Pvt Ltd for expert IT solutions, cybersecurity services, and network infrastructure support. Contact us today for a free consultation.",
    keywords: "contact us, get in touch, IT support, cybersecurity consultation, network solutions, trace network contact, hyderabad IT company, free consultation, IT services contact",
    ogImage: "/assets/images/contact.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Trace Network & Engineering",
      "description": "Contact information and consultation request form"
    }
  },

  networksecurity: {
    title: "Network Security Solutions | Firewall & Threat Protection | Trace Network",
    description: "Comprehensive network security solutions to protect your business from cyber threats. Expert cybersecurity services including next-gen firewall management, intrusion detection, threat prevention, and 24/7 security monitoring.",
    keywords: "network security, cyber security solutions, firewall solutions, intrusion detection, threat prevention, security services, cybersecurity hyderabad, network protection, security monitoring",
    ogImage: "/assets/images/networksecurity.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Network Security Solutions",
      "description": "Comprehensive network security and threat protection services",
      "provider": {
        "@type": "Organization",
        "name": companyName
      }
    }
  },

  cybersecurity: {
    title: "Cybersecurity Services | Advanced Threat Protection | Trace Network",
    description: "Advanced cybersecurity services to safeguard your organization from evolving cyber threats. Comprehensive security solutions including threat detection, incident response, security audits, and managed security services.",
    keywords: "cybersecurity services, threat protection, security audits, incident response, cyber defense, security solutions, cybersecurity company hyderabad, managed security services, SOC services",
    ogImage: "/assets/images/cybersecurity.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cybersecurity Services",
      "description": "Advanced cybersecurity and threat protection services",
      "provider": {
        "@type": "Organization",
        "name": companyName
      }
    }
  },

  cybersecurityy: {
    title: "Cybersecurity Solutions | Endpoint & Network Security | Trace Network",
    description: "Protect your business with Trace Network's complete cybersecurity solutions — covering endpoint security, network protection, threat intelligence, and compliance. India's trusted cybersecurity partner since 2005.",
    keywords: "cybersecurity solutions, endpoint security, network protection, threat intelligence, cybersecurity company hyderabad, IT security services, information security, cyber defense hyderabad",
    ogImage: "/assets/images/cybersecurity.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cybersecurity Solutions",
      "description": "Complete cybersecurity solutions and endpoint security services",
      "provider": {
        "@type": "Organization",
        "name": companyName
      }
    }
  },

  cloudsecurity: {
    title: "Cloud Security Solutions | Cloud Protection Services",
    description: "Secure your cloud infrastructure with our comprehensive cloud security solutions. Expert services for AWS, Azure, and multi-cloud environments.",
    keywords: "cloud security, cloud protection, AWS security, Azure security, multi-cloud security, cloud infrastructure, cloud security hyderabad"
  },

  accesssecurity: {
    title: "Access Security Solutions | Identity & Access Management",
    description: "Robust access security and identity management solutions to control and monitor user access to your critical systems and data.",
    keywords: "access security, identity management, access control, IAM solutions, user authentication, privileged access, access security hyderabad"
  },

  advancedthreat: {
    title: "Advanced Threat Protection | Threat Intelligence Services",
    description: "Advanced threat protection services to detect, prevent, and respond to sophisticated cyber threats targeting your organization.",
    keywords: "advanced threat protection, threat intelligence, APT protection, threat detection, cyber threats, security monitoring, advanced threat hyderabad"
  },

  firewallsolutions: {
    title: "Firewall Solutions | Next-Gen Firewall Services",
    description: "Enterprise-grade firewall solutions and next-generation firewall services to protect your network perimeter and internal systems.",
    keywords: "firewall solutions, next-gen firewall, NGFW, network firewall, firewall management, perimeter security, firewall hyderabad"
  },

  networking: {
    title: "Network Infrastructure Solutions | Enterprise Networking",
    description: "Comprehensive network infrastructure solutions including design, implementation, and management of enterprise networks.",
    keywords: "network infrastructure, enterprise networking, network design, network implementation, LAN, WAN, network solutions, networking hyderabad"
  },

  infrastructure: {
    title: "IT Infrastructure Solutions in Hyderabad | Cloud, Storage & Network Services",
    description: "Trace Networks delivers secure IT infrastructure solutions including cloud storage, NAS, network security, data center services, and scalable business storage.",
    keywords: "IT infrastructure solutions, IT infrastructure Hyderabad, cloud storage for business, NAS storage solutions, network security services, data center services, server and storage solutions, network infrastructure services, IT infrastructure management, business storage solutions"
  },

  datasolutions: {
    title: "Data Solutions | Data Management & Analytics",
    description: "Comprehensive data solutions including data management, backup, recovery, analytics, and business intelligence services.",
    keywords: "data solutions, data management, data backup, data recovery, data analytics, business intelligence, data solutions hyderabad"
  },

  collaboration: {
    title: "Collaboration Solutions | Unified Communications",
    description: "Modern collaboration and unified communications solutions to enhance productivity and enable seamless teamwork.",
    keywords: "collaboration solutions, unified communications, video conferencing, team collaboration, communication tools, collaboration hyderabad"
  },

  visibility: {
    title: "Network Visibility Solutions | Monitoring & Analytics",
    description: "Advanced network visibility and monitoring solutions to gain insights into your network performance and security.",
    keywords: "network visibility, network monitoring, network analytics, performance monitoring, traffic analysis, visibility solutions hyderabad"
  },

  grc: {
    title: "GRC Solutions | Governance, Risk & Compliance | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd., Hyderabad, provides Governance, Risk, and Compliance (GRC) services that centralize policies, controls, and audits. Our GRC solutions help organizations align business objectives with security standards, automate compliance, and manage risks effectively.",
    keywords: "GRC, governance, risk management, compliance, regulatory compliance, security governance, GRC hyderabad, trace network GRC"
  },

  iso: {
    title: "ISO Certification Services | ISO Compliance | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd., Hyderabad, offers Compliance and Risk Management services aligned with ISO 27001 standards. We help organizations establish, implement, and maintain robust information security frameworks to ensure data protection, regulatory compliance, and risk reduction.",
    keywords: "ISO certification, ISO compliance, ISO 27001, ISO 9001, quality standards, security standards, ISO hyderabad, information security"
  },

  noc: {
    title: "NOC Services | Network Operations Center | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd., based in Hyderabad, is a leading provider of IT infrastructure, network solutions, cybersecurity, and managed services. We deliver end-to-end technology support for enterprises through expert engineers, 24/7 monitoring, and innovative digital solutions.",
    keywords: "NOC services, network operations center, 24/7 monitoring, network management, IT support, proactive monitoring, NOC hyderabad, managed IT services"
  },

  fms: {
    title: "Facility Management Services | IT Facility Management | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd., Hyderabad, delivers comprehensive Facility Management Services (FMS) with on-site IT support, system monitoring, data backup, and endpoint maintenance ensuring smooth operations, maximum uptime, and cost-effective technology management for enterprises.",
    keywords: "facility management, IT facility management, infrastructure maintenance, facility support, FMS, FMS hyderabad, IT maintenance services"
  },

  professionalServices: {
    title: "Professional Services | IT Consulting & Support | Trace Network",
    description: "Trace Network & Engineering Pvt Ltd offers expert Professional Services including Disaster Recovery Planning, vCISO, Crisis Management Advisory, Security Posture Advisory, and Configuration Review Advisory. Safeguard your business with tailored strategies and proactive support from certified professionals.",
    keywords: "professional services, IT consulting, project management, technical support, managed services, IT expertise, vCISO, disaster recovery, security advisory"
  },

  securityAudits: {
    title: "Security Audits | Cybersecurity Assessment Services | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd., Hyderabad, provides comprehensive Security Audits including Network Audits, WiFi Audits, and Network & Server Hardening. Our expert engineers identify vulnerabilities, strengthen system defenses, and ensure your IT infrastructure remains secure and compliant.",
    keywords: "security audits, security assessment, vulnerability assessment, security testing, penetration testing, compliance audit, network audit, WiFi audit, server hardening, hyderabad"
  },

  networkPenetrationTesting: {
    title: "VAPT Services in Hyderabad | Network Penetration Testing Company",
    description: "Trace Networks & Engineering is a specialist VAPT company in Hyderabad offering advanced Vulnerability Assessment and Penetration Testing services. Our certified cybersecurity experts provide detailed security audits, identify vulnerabilities, and safeguard your applications, networks, and cloud environments.",
    keywords: "vapt services in hyderabad, network penetration testing, web application pentesting, cyber security company, vulnerability assessment and penetration testing, trace networks and engineering"
  },

  webApplicationSecurityTesting: {
    title: "Web Application Penetration Testing Services | Trace Networks",
    description: "Secure your web applications with Trace Networks – Hyderabad's trusted VAPT company. Our penetration testing experts identify, assess, and fix vulnerabilities to keep your business safe. Book your VAPT audit today!",
    keywords: "vapt services in hyderabad, web application penetration testing, vapt testing company, vapt audit report, cyber security vapt, network penetration testing, vulnerability assessment, vapt cost, penetration testing hyderabad, application security testing, cloud penetration testing, mobile application vapt, vapt and penetration testing, vapt testing price, trace networks vapt"
  },

  mobileApplicationsSecurityTesting: {
    title: "Mobile Application Security Testing Services in Hyderabad",
    description: "Secure your mobile apps from vulnerabilities with Trace Networks – Hyderabad's trusted mobile application security testing company. Our experts perform in-depth vulnerability assessment, penetration testing, and code-level analysis to protect your Android & iOS applications from cyber threats.",
    keywords: "mobile application security testing, mobile app penetration testing, vapt for mobile apps, android app security testing, ios app security testing, mobile app vulnerability assessment, mobile app vapt services, app security audit, penetration testing company hyderabad, trace networks vapt, mobile application testing company"
  },

  cloudPenetrationTesting: {
    title: "Cloud Penetration Testing Services in Hyderabad | Trace Networks",
    description: "Trace Networks provides expert Cloud Penetration Testing services across Hyderabad, Bengaluru, Chennai, Visakhapatnam, and Vijayawada. Our cloud security specialists identify vulnerabilities in AWS, Azure, and Google Cloud environments to ensure data protection, compliance, and complete infrastructure security.",
    keywords: "cloud penetration testing, cloud vapt services, aws penetration testing, azure security testing, google cloud security testing, cloud security audit, vapt for cloud, penetration testing company hyderabad, cloud vapt in bengaluru, cloud security chennai, cloud vapt visakhapatnam, cloud penetration testing vijayawada, trace networks vapt"
  },

  secureCodeReview: {
    title: "Secure Code Review Services in Hyderabad | Trace Networks",
    description: "Trace Networks offers professional Secure Code Review services in Hyderabad, Bengaluru, Chennai, Visakhapatnam, and Vijayawada. Our experts perform detailed manual and automated code analysis to detect security flaws, prevent vulnerabilities, and ensure your applications meet the highest security standards.",
    keywords: "secure code review, source code review services, application code security, manual code review, automated code review, secure coding practices, code vulnerability assessment, vapt company hyderabad, code review bengaluru, code audit chennai, code analysis visakhapatnam, secure coding vijayawada, trace networks vapt"
  },

  industries: {
    title: "Industries We Serve | Sector-Specific IT Solutions | Trace Network",
    description: "Trace Network & Engineering serves diverse industries with tailored IT and cybersecurity solutions including healthcare, finance, education, manufacturing, and more.",
    keywords: "industries, sectors, healthcare IT, finance IT, education IT, manufacturing IT, industry solutions, trace network industries"
  },

  industriesDetails: {
    title: "Industry Solutions | Trace Network & Engineering Pvt Ltd",
    description: "Detailed industry-specific IT and cybersecurity solutions tailored to meet unique business requirements and compliance needs.",
    keywords: "industry solutions, sector solutions, vertical solutions, industry IT, compliance solutions, trace network industry"
  },

  internationalSchoolsItAvUpgrades: {
    title: "International Schools IT & AV Upgrades | Trace Networks",
    description: "Elevate your international school's IT infrastructure and AV systems with scalable networks, smart classrooms & seamless multimedia solutions by Trace Network & Engineering Pvt Ltd.",
    keywords: "school IT solutions, education technology, AV upgrades, smart classrooms, school network, digital learning, international school IT, AV infrastructure"
  },

  pharmaceuticalNetworkInfrastructure: {
    title: "Pharmaceutical Network Infrastructure Solutions | Trace Networks",
    description: "Leading IT network infrastructure solutions for pharmaceutical & life sciences companies by Trace Network & Engineering Pvt Ltd. Enhance security, connectivity & scalable infrastructure tailored for pharma growth.",
    keywords: "pharmaceutical IT, pharma network, healthcare IT, GxP compliance, pharma infrastructure, life sciences IT, pharmaceutical network hyderabad"
  },

  universityItLearningEcosystem: {
    title: "University IT & Learning Ecosystem Solutions | Trace Networks",
    description: "Transform and modernize your university's IT infrastructure and learning ecosystem with scalable networks, smart classrooms & hybrid learning solutions from Trace Network & Engineering Pvt Ltd.",
    keywords: "university IT, higher education IT, campus network, learning ecosystem, education infrastructure, LMS, university IT hyderabad, hybrid learning"
  },

  softwareLicensingProductivitySolutions: {
    title: "Software Licensing & Productivity Solutions | Microsoft 365 | Trace Network",
    description: "Trace Network & Engineering offers end-to-end software licensing & productivity solutions in India – Google Workspace, Office 365, Zoom, Adobe, Bulk SMS, Business WhatsApp & Cloud Telephony. Authorized reseller pricing, seamless deployment, 24/7 support and usage optimization for cost-efficient productivity.",
    keywords: "software licensing, Microsoft 365, Office 365, productivity solutions, software management, enterprise software, Google Workspace, Zoom, Adobe, cloud telephony, business WhatsApp"
  },

  caseStudies: {
    title: "IT & Cybersecurity Case Studies | Real-World Enterprise Solutions",
    description: "Explore real-world IT infrastructure, networking, and cybersecurity case studies showcasing enterprise deployments, security transformations, and scalable technology solutions.",
    keywords: "case studies, success stories, customer stories, project portfolio, client testimonials, IT case studies, cybersecurity case studies"
  },

  events: {
    title: "IT & Cybersecurity Events in Hyderabad | Webinars & Workshops | Trace Network",
    description: "Browse all upcoming and past IT and cybersecurity events, webinars, workshops, and technology seminars hosted by Trace Network & Engineering in Hyderabad. Search events by title or description and register for sessions on networking, cloud, and security.",
    keywords: "IT events hyderabad, cybersecurity events india, technology webinars hyderabad, IT workshops hyderabad, cybersecurity seminars, network security events, trace network events, technology training hyderabad, cloud security webinars, IT community events india",
    ogImage: "/assets/images/backgrounds/page-header-bg.jpg",
    canonical: "https://tracenetwork.in/events",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Trace Network IT & Cybersecurity Events",
      "description": "Upcoming and past IT, cybersecurity, and technology events, webinars, and workshops hosted by Trace Network & Engineering.",
      "url": "https://tracenetwork.in/events",
      "publisher": {
        "@type": "Organization",
        "name": "Trace Network & Engineering Pvt Ltd",
        "url": "https://tracenetwork.in"
      }
    }
  },

  news: {
    title: "News & Updates | Trace Network & Engineering",
    description: "Latest news, updates, and announcements from Trace Network & Engineering Pvt Ltd.",
    keywords: "news, updates, announcements, company news, IT news, cybersecurity news, trace network news"
  },

  workWithUs: {
    title: "Work With Us | Careers | Trace Network & Engineering Pvt Ltd",
    description: "Explore career opportunities at Trace Network & Engineering Pvt Ltd. Join our team and grow your career in IT, networking and cybersecurity services.",
    keywords: "careers, jobs, employment, work with us, IT jobs, cybersecurity jobs, job opportunities, trace network careers"
  },

  // Partner-specific SEO configurations
  // NOTE: Full partner Sophos entry is defined below in the updated section

  partnerHpe: {
    title: "HPE Server & Infrastructure Partner in Hyderabad | HPE iLO & Hybrid Cloud | Trace Network",
    description: "Trace Network is a top HPE server and infrastructure solution provider in Hyderabad delivering HPE ProLiant servers, HPE iLO intelligent lifecycle management, hybrid cloud-ready architecture, and high-performance enterprise IT infrastructure across 6+ industry sectors.",
    keywords: "hpe partner hyderabad, hpe server hyderabad, hpe proliant hyderabad, hpe ilo management, hpe infrastructure india, hybrid cloud hpe, enterprise server hyderabad, hpe reseller india, trace network hpe, hpe storage hyderabad, hpe server deployment india",
    ogImage: "/assets/images/partners/hpe.png",
    canonical: `${siteUrl}/partners/hpe`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HPE Server & Infrastructure Solutions",
      "description": "Top HPE server and infrastructure solution provider delivering HPE ProLiant, iLO management, and hybrid cloud-ready architecture for enterprises.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Server & IT Infrastructure"
    }
  },

  partnerAruba: {
    title: "HPE Aruba Gold Partner in Hyderabad | Wireless & SD-WAN | Trace Network",
    description: "Trace Network is an HPE Aruba Gold Partner in Hyderabad providing AI-powered wireless networking, Aruba Central, SD-WAN, campus switching, and network access control for enterprises across India.",
    keywords: "hpe aruba gold partner hyderabad, aruba wireless networking hyderabad, aruba SD-WAN, aruba central cloud management, aruba ClearPass NAC, campus network hyderabad, wifi solutions hyderabad, aruba switches hyderabad, trace network aruba, enterprise networking hyderabad",
    ogImage: "/assets/images/partners/aruba.png",
    canonical: `${siteUrl}/partners/aruba`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HPE Aruba Networking Solutions",
      "description": "HPE Aruba Gold Partner delivering AI-powered wireless, SD-WAN and campus networking solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Network Infrastructure Solutions"
    }
  },

  partnerNutanix: {
    title: "Nutanix HCI Partner in Hyderabad | 43% TCO Reduction & 97% Less Downtime | Trace Network",
    description: "Trace Network is a certified Nutanix partner in Hyderabad delivering hyperconverged infrastructure (HCI) with one-click management, 43% TCO reduction, 97% less downtime, and self-healing infrastructure for enterprise data centers across India.",
    keywords: "nutanix partner hyderabad, nutanix HCI hyderabad, hyperconverged infrastructure india, nutanix TCO reduction, nutanix one-click management, nutanix AHV, nutanix cloud platform, HCI solutions india, data center modernization hyderabad, trace network nutanix, nutanix certified partner india",
    ogImage: "/assets/images/partners/nutanix.png",
    canonical: `${siteUrl}/partners/nutanix`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Nutanix HCI & Cloud Platform",
      "description": "Certified Nutanix partner delivering hyperconverged infrastructure with 43% TCO reduction, 97% less downtime, and one-click unified management.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Hyperconverged Infrastructure"
    }
  },

  partnerVeeam: {
    title: "Veeam Authorized Reseller in Hyderabad | Backup, Immutable & Disaster Recovery | Trace Network",
    description: "Trace Network is a Veeam authorized reseller in Hyderabad providing fast backup and recovery, immutable backups for ransomware protection, and cloud-hybrid data protection for virtual, physical, AWS, and Azure environments.",
    keywords: "veeam authorized reseller hyderabad, veeam backup solutions india, veeam immutable backup, veeam ransomware protection, veeam disaster recovery, veeam replication, data protection hyderabad, cloud backup solutions, backup recovery hyderabad, trace network veeam, veeam virtual backup",
    ogImage: "/assets/images/partners/veeam.png",
    canonical: `${siteUrl}/partners/veeam`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Veeam Backup & Recovery Solutions",
      "description": "Veeam authorized reseller delivering fast backup, immutable storage, replication and disaster recovery for virtual, physical and cloud environments.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Backup & Disaster Recovery"
    }
  },

  partnerTenable: {
    title: "Tenable Cyber Exposure Partner in Hyderabad | OT/IoT & Cloud Vulnerability Management | Trace Network",
    description: "Trace Network is a certified Tenable partner in Hyderabad delivering continuous cyber exposure management, vulnerability management for OT, IoT, cloud, applications, and identity — with 100% deployment success and risk-based prioritization.",
    keywords: "tenable partner hyderabad, tenable nessus hyderabad, vulnerability management india, tenable OT security, tenable IoT security, tenable.io, tenable.sc, cyber exposure management hyderabad, risk-based vulnerability management, security scanning hyderabad, trace network tenable, tenable certified partner india",
    ogImage: "/assets/images/partners/tenable.png",
    canonical: `${siteUrl}/partners/tenable`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tenable Cyber Exposure Management",
      "description": "Certified Tenable partner delivering vulnerability management for OT, IoT, cloud, and identity with continuous cyber exposure management.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Vulnerability & Cyber Exposure Management"
    }
  },

  partnerSify: {
    title: "Sify Technologies Partner in Hyderabad | Cloud, Data Center & Connectivity | Trace Network",
    description: "Trace Network is a trusted Sify Technologies partner in Hyderabad providing Sify cloud services, data center co-location, enterprise network connectivity, and managed IT services for digital transformation across Indian enterprises.",
    keywords: "sify technologies partner hyderabad, sify cloud services india, sify data center hyderabad, sify network connectivity, sify managed services, digital transformation hyderabad, cloud infrastructure india, sify colocation, enterprise cloud india, trace network sify, sify certified partner",
    ogImage: "/assets/images/partners/sify.png",
    canonical: `${siteUrl}/partners/sify`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sify Cloud, Data Center & Connectivity Solutions",
      "description": "Trusted Sify Technologies partner delivering cloud services, data center colocation, enterprise connectivity and managed IT services.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Cloud & Digital Services"
    }
  },

  partnerAccops: {
    title: "Accops Partner in Hyderabad | Zero Trust & VDI Solutions | Trace Network",
    description: "Trace Network is an authorized Accops partner in Hyderabad delivering secure Zero Trust remote access, Virtual Desktop Infrastructure (VDI), application virtualization, and endpoint security solutions.",
    keywords: "accops partner hyderabad, zero trust remote access, VDI solutions india, accops VDI hyderabad, virtual desktop infrastructure, secure remote access, application virtualization hyderabad, endpoint security accops, trace network accops, zero trust security hyderabad",
    ogImage: "/assets/images/partners/accops.png",
    canonical: `${siteUrl}/partners/accops`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Accops Zero Trust & VDI Solutions",
      "description": "Authorized Accops partner delivering Zero Trust access, VDI and endpoint security solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Zero Trust & Virtual Desktop Infrastructure"
    }
  },

  partnerCymmetri: {
    title: "Cymmetri Partner in Hyderabad | Identity & Access Management | Trace Network",
    description: "Trace Network is a certified Cymmetri partner in Hyderabad providing Identity and Access Management (IAM), Single Sign-On (SSO), Multi-Factor Authentication (MFA), and Privileged Access Management solutions.",
    keywords: "cymmetri partner hyderabad, identity access management hyderabad, cymmetri IAM, SSO solutions india, multi-factor authentication hyderabad, MFA solutions, privileged access management cymmetri, identity governance hyderabad, trace network cymmetri, IAM solutions india",
    ogImage: "/assets/images/partners/cymmetri.png",
    canonical: `${siteUrl}/partners/cymmetri`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cymmetri Identity & Access Management",
      "description": "Certified Cymmetri partner delivering IAM, SSO, MFA and privileged access management solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Identity & Access Management"
    }
  },

  partnerMotadata: {
    title: "Motadata Partner in Hyderabad | IT Monitoring & ITSM | Trace Network",
    description: "Trace Network is an authorized Motadata partner in Hyderabad delivering IT infrastructure monitoring, network monitoring, log analytics, and IT service management (ITSM) solutions.",
    keywords: "motadata partner hyderabad, motadata IT monitoring, network monitoring hyderabad, motadata ITSM, IT service management india, log analytics hyderabad, infrastructure monitoring solutions, motadata servicegrid, trace network motadata, ITSM solutions india",
    ogImage: "/assets/images/partners/motadata.png",
    canonical: `${siteUrl}/partners/motadata`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Motadata IT Monitoring & ITSM",
      "description": "Authorized Motadata partner delivering IT infrastructure monitoring and service management solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "IT Monitoring & Service Management"
    }
  },

  partnerPaloalto: {
    title: "Palo Alto Networks Partner in Hyderabad | NGFW, Zero Trust & AI-Powered Security | Trace Network",
    description: "Trace Network is a certified Palo Alto Networks partner in Hyderabad delivering next-generation firewalls (NGFW), Zero Trust security, AI-powered threat prevention, Prisma Cloud, Cortex XDR, and SASE solutions with 1000+ enterprise deployments.",
    keywords: "palo alto networks partner hyderabad, palo alto NGFW hyderabad, palo alto zero trust, AI powered firewall hyderabad, prisma cloud india, cortex XDR hyderabad, SASE solutions india, next generation firewall hyderabad, palo alto wildfire, trace network palo alto, cloud security hyderabad, palo alto 1000 deployments",
    ogImage: "/assets/images/partners/paloalto.png",
    canonical: `${siteUrl}/partners/palo-alto`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Palo Alto Networks Security Solutions",
      "description": "Certified Palo Alto Networks partner delivering NGFW, Zero Trust, AI-powered threat prevention, Prisma Cloud, Cortex XDR, and SASE solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Next-Gen Firewall & Cloud Security"
    }
  },

  partnerPeoplelink: {
    title: "PeopleLink Audio & Video Conferencing Partner in Hyderabad | SAARC Leading Partner | Trace Network",
    description: "Trace Network is a SAARC leading PeopleLink partner in Hyderabad delivering HD audio and video conferencing, smart meeting rooms, enterprise collaboration, secure encrypted communication, and scalable unified platforms for enterprises, government, and healthcare.",
    keywords: "peoplelink partner hyderabad, peoplelink audio video conferencing, peoplelink SAARC partner, HD conferencing hyderabad, smart meeting rooms india, enterprise video conferencing hyderabad, peoplelink collaboration, secure conferencing solutions, unified communications hyderabad, trace network peoplelink, peoplelink certified partner india",
    ogImage: "/assets/images/partners/peoplelink.png",
    canonical: `${siteUrl}/partners/peoplelink`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "PeopleLink Audio & Video Conferencing Solutions",
      "description": "SAARC leading PeopleLink partner delivering HD audio/video conferencing, smart meeting rooms and enterprise collaboration solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Audio & Video Conferencing"
    }
  },

  partnerQualys: {
    title: "Qualys SAARC Partner in Hyderabad | Cloud Vulnerability Management & Compliance | Trace Network",
    description: "Trace Network is a leading Qualys partner in SAARC and Hyderabad delivering cloud-based vulnerability management, VMDR, continuous compliance monitoring, patch automation, web application scanning, and real-time threat visibility across hybrid IT environments.",
    keywords: "qualys SAARC partner hyderabad, qualys VMDR, cloud vulnerability management india, qualys compliance monitoring, patch automation hyderabad, qualys web application scanning, qualys cloud platform, continuous security assessment, vulnerability scanning hyderabad, trace network qualys, VMDR solutions india, qualys leading partner",
    ogImage: "/assets/images/partners/qualys.png",
    canonical: `${siteUrl}/partners/qualys`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Qualys Cloud Vulnerability Management",
      "description": "Leading Qualys SAARC partner delivering cloud vulnerability management, VMDR, compliance monitoring and patch automation.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Vulnerability Management & Compliance"
    }
  },

  partnerSafetica: {
    title: "Safetica SAARC Partner in Hyderabad | DLP via USB, Email, Cloud & Web | Trace Network",
    description: "Trace Network is a certified Safetica SAARC partner in Hyderabad providing advanced Data Loss Prevention (DLP) blocking leaks via USB, email, cloud and web, insider risk management, and real-time security dashboards to protect sensitive enterprise data.",
    keywords: "safetica SAARC partner hyderabad, safetica DLP, data loss prevention USB email cloud web, insider threat protection india, safetica one, insider risk management, data security hyderabad, endpoint data protection, trace network safetica, DLP solutions india, safetica certified partner",
    ogImage: "/assets/images/partners/safetica.png",
    canonical: `${siteUrl}/partners/safetica`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Safetica DLP & Insider Risk Management",
      "description": "Certified Safetica SAARC partner delivering DLP protection for USB, email, cloud and web channels along with insider risk management.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Data Loss Prevention"
    }
  },

  partnerManageengine: {
    title: "ManageEngine Partner in Hyderabad | ITSM & Endpoint Management | Trace Network",
    description: "Trace Network is an authorized ManageEngine partner in Hyderabad providing ServiceDesk Plus, Endpoint Central, OpManager, PAM360, and comprehensive IT management solutions for enterprises.",
    keywords: "manageengine partner hyderabad, manageengine servicedesk plus, endpoint central hyderabad, manageengine opmanager, IT management solutions india, ITSM hyderabad, PAM360, manageengine zoho, trace network manageengine, IT service management hyderabad",
    ogImage: "/assets/images/partners/manageengine.png",
    canonical: `${siteUrl}/partners/manage-engine`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ManageEngine IT Management Solutions",
      "description": "Authorized ManageEngine partner providing ITSM, endpoint management and network monitoring solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "IT Management Solutions"
    }
  },

  // ── NEW PARTNER SEO ENTRIES ────────────────────────────────────────────────

  partnerAcronis: {
    title: "Acronis Partner in Hyderabad | Backup & Cyber Protection | Trace Network",
    description: "Trace Network is a trusted Acronis cyber protection partner in Hyderabad delivering enterprise backup, disaster recovery, ransomware protection, and endpoint security. Unified cyber protection for banking, healthcare, government and IT sectors.",
    keywords: "acronis partner hyderabad, acronis backup solutions, acronis cyber protect, enterprise backup hyderabad, ransomware protection, disaster recovery solutions, acronis certified partner india, data backup hyderabad, acronis endpoint security, trace network acronis",
    ogImage: "/assets/images/partners/acronis.png",
    canonical: `${siteUrl}/partners/acronis`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Acronis Cyber Protection Solutions",
      "description": "Enterprise backup, disaster recovery, and cyber protection solutions powered by Acronis, delivered by Trace Network & Engineering.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Backup & Cyber Protection"
    }
  },

  partnerApple: {
    title: "Apple Solutions Partner in Hyderabad | Mac & iOS Enterprise | Trace Network",
    description: "Trace Network is an authorized Apple solutions partner in Hyderabad providing Mac, iPad, and iPhone enterprise deployments, device management, and Apple Business Manager solutions for education, government and enterprises.",
    keywords: "apple partner hyderabad, apple enterprise solutions, mac deployment india, apple business manager, iOS device management, mdm apple, apple reseller hyderabad, mac for enterprise, trace network apple",
    ogImage: "/assets/images/partners/apple.png",
    canonical: `${siteUrl}/partners/apple`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Apple Enterprise Solutions",
      "description": "Authorized Apple solutions partner delivering Mac, iPad and iPhone enterprise deployments and MDM services.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Apple Enterprise Solutions"
    }
  },

  partnerArcon: {
    title: "Arcon Partner | Privileged Access Management | Trace Network Hyderabad",
    description: "Trace Network is an authorized Arcon partner in Hyderabad offering Privileged Access Management (PAM), Privileged Identity Management, and Zero Trust security solutions to protect critical enterprise systems.",
    keywords: "arcon partner hyderabad, privileged access management hyderabad, arcon pam, pam solutions india, privileged identity management, zero trust security, arcon iam, trace network arcon, PAM hyderabad, critical access security",
    ogImage: "/assets/images/partners/arcon.png",
    canonical: `${siteUrl}/partners/arcon`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Arcon Privileged Access Management",
      "description": "Authorized Arcon partner providing Privileged Access Management and identity security solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Privileged Access Management"
    }
  },

  partnerAzure: {
    title: "Microsoft Azure Partner in Hyderabad | Cloud Solutions | Trace Network",
    description: "Trace Network is a Microsoft Azure certified partner in Hyderabad delivering cloud migration, Azure infrastructure, Azure security, and managed cloud services for enterprises across India.",
    keywords: "microsoft azure partner hyderabad, azure cloud solutions india, azure migration hyderabad, azure infrastructure services, azure security hyderabad, cloud managed services india, azure certified partner, azure devops hyderabad, trace network azure, microsoft cloud hyderabad",
    ogImage: "/assets/images/partners/azure.png",
    canonical: `${siteUrl}/partners/azure`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Microsoft Azure Cloud Solutions",
      "description": "Microsoft Azure certified partner providing cloud migration, infrastructure, and managed Azure services.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Cloud Solutions"
    }
  },

  partnerDell: {
    title: "Dell Technologies Partner in Hyderabad | Servers & Storage | Trace Network",
    description: "Trace Network is an authorized Dell Technologies partner in Hyderabad offering Dell PowerEdge servers, Dell EMC storage, networking, and end-to-end IT infrastructure solutions for enterprises and data centers.",
    keywords: "dell technologies partner hyderabad, dell server hyderabad, dell EMC storage india, dell poweredge server, dell networking solutions, dell reseller hyderabad, enterprise server india, IT infrastructure dell, trace network dell, dell workstation hyderabad",
    ogImage: "/assets/images/partners/dell.png",
    canonical: `${siteUrl}/partners/dell`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Dell Technologies IT Infrastructure",
      "description": "Authorized Dell Technologies partner delivering servers, storage, and IT infrastructure solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "IT Infrastructure Solutions"
    }
  },

  partnerForcepoint: {
    title: "Forcepoint Partner in Hyderabad | DLP & Web Security | Trace Network",
    description: "Trace Network is an authorized Forcepoint partner in Hyderabad providing Data Loss Prevention (DLP), web security, CASB, and insider threat solutions to protect enterprise data and users.",
    keywords: "forcepoint partner hyderabad, forcepoint DLP hyderabad, data loss prevention india, forcepoint web security, forcepoint CASB, insider threat protection, forcepoint cybersecurity, data security hyderabad, trace network forcepoint, enterprise DLP solutions",
    ogImage: "/assets/images/partners/forcepoint.png",
    canonical: `${siteUrl}/partners/forcepoint`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Forcepoint Data Security Solutions",
      "description": "Authorized Forcepoint partner delivering DLP, web security and insider threat protection solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Data Loss Prevention"
    }
  },

  partnerFortyTwoGears: {
    title: "42Gears Partner in Hyderabad | MDM & UEM Solutions | Trace Network",
    description: "Trace Network is an authorized 42Gears partner in Hyderabad delivering Mobile Device Management (MDM), Unified Endpoint Management (UEM), and enterprise mobility solutions for Android, iOS and Windows devices.",
    keywords: "42gears partner hyderabad, MDM solutions india, unified endpoint management hyderabad, mobile device management india, 42gears MDM, enterprise mobility solutions, UEM hyderabad, android MDM, iOS MDM, trace network 42gears",
    ogImage: "/assets/images/partners/42gears.png",
    canonical: `${siteUrl}/partners/fortytwo-gears`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "42Gears MDM & UEM Solutions",
      "description": "Authorized 42Gears partner providing Mobile Device Management and Unified Endpoint Management solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Mobile Device Management"
    }
  },

  partnerGfiSoftware: {
    title: "GFI Software Partner in Hyderabad | Email & Network Security | Trace Network",
    description: "Trace Network is an authorized GFI Software partner in Hyderabad providing email security, network monitoring, patch management, and IT security solutions for SMBs and enterprises.",
    keywords: "GFI software partner hyderabad, GFI email security, GFI network monitor, GFI LanGuard, patch management hyderabad, email security india, IT security SMB, network security hyderabad, trace network GFI",
    ogImage: "/assets/images/partners/gfisoftware.png",
    canonical: `${siteUrl}/partners/gfi-software`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "GFI Software Security Solutions",
      "description": "Authorized GFI Software partner providing email security, network monitoring and patch management.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Email & Network Security"
    }
  },

  partnerGreythr: {
    title: "greytHR Partner in Hyderabad | HRMS & Payroll Software | Trace Network",
    description: "Trace Network is an authorized greytHR partner in Hyderabad delivering cloud-based HR management, payroll processing, attendance, and employee self-service solutions for Indian businesses.",
    keywords: "greythr partner hyderabad, greythr HRMS, HR software india, payroll software hyderabad, attendance management, employee self-service, cloud HR hyderabad, HR management system india, trace network greythr, HRMS solutions hyderabad",
    ogImage: "/assets/images/partners/greythr.png",
    canonical: `${siteUrl}/partners/greythr`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "greytHR HRMS Solutions",
      "description": "Authorized greytHR partner delivering cloud HR, payroll, and workforce management solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "HR Management Software"
    }
  },

  partnerHp: {
    title: "HP Partner in Hyderabad | Laptops, Desktops & Printers | Trace Network",
    description: "Trace Network is an authorized HP partner in Hyderabad supplying HP laptops, desktops, workstations, printers, and enterprise IT hardware solutions for businesses, education, and government sectors.",
    keywords: "hp partner hyderabad, hp laptop hyderabad, hp desktop india, hp workstation hyderabad, hp printer hyderabad, hp enterprise hardware, hp reseller india, HP authorized dealer hyderabad, trace network hp, hp elitebook hyderabad",
    ogImage: "/assets/images/partners/hp.png",
    canonical: `${siteUrl}/partners/hp`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HP Hardware Solutions",
      "description": "Authorized HP partner supplying laptops, desktops, workstations and enterprise hardware.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "IT Hardware Solutions"
    }
  },

  partnerIms: {
    title: "IMS Partner | IT Infrastructure & Managed Services | Trace Network",
    description: "Trace Network delivers comprehensive IT Infrastructure Management Services (IMS) in Hyderabad including server management, network monitoring, helpdesk support, and proactive IT management for enterprises.",
    keywords: "IMS partner hyderabad, IT infrastructure management services, managed IT services hyderabad, server management india, IT helpdesk support, proactive IT management, infrastructure monitoring hyderabad, trace network IMS, enterprise IT management",
    ogImage: "/assets/images/partners/ims.png",
    canonical: `${siteUrl}/partners/ims`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IT Infrastructure Management Services",
      "description": "Comprehensive IT infrastructure management and managed services for enterprises.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "IT Infrastructure Management"
    }
  },

  partnerK7Security: {
    title: "K7 Security Partner in Hyderabad | Antivirus & Endpoint Security | Trace Network",
    description: "Trace Network is an authorized K7 Security partner in Hyderabad offering K7 antivirus, endpoint security, unified threat management, and centralized security management for enterprises, banks, and government organizations.",
    keywords: "k7 security partner hyderabad, k7 antivirus hyderabad, k7 endpoint security, k7 enterprise security, antivirus solutions hyderabad, endpoint protection india, k7 UTM, centralized antivirus management, trace network k7, k7 security india",
    ogImage: "/assets/images/partners/k7security.png",
    canonical: `${siteUrl}/partners/k7-security`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "K7 Security Endpoint Protection",
      "description": "Authorized K7 Security partner delivering antivirus, endpoint security and UTM solutions for enterprises.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Antivirus & Endpoint Security"
    }
  },

  partnerLenovo: {
    title: "Lenovo Partner in Hyderabad | ThinkPad, Servers & IT Hardware | Trace Network",
    description: "Trace Network is an authorized Lenovo partner in Hyderabad providing Lenovo ThinkPad laptops, ThinkCentre desktops, ThinkSystem servers, and enterprise IT hardware solutions for businesses across India.",
    keywords: "lenovo partner hyderabad, lenovo thinkpad hyderabad, lenovo server india, lenovo enterprise hardware, lenovo ThinkSystem, lenovo reseller india, lenovo laptop hyderabad, IT hardware lenovo, trace network lenovo, lenovo thinkcenter hyderabad",
    ogImage: "/assets/images/partners/lenovo.png",
    canonical: `${siteUrl}/partners/lenovo`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Lenovo IT Hardware Solutions",
      "description": "Authorized Lenovo partner providing ThinkPad laptops, ThinkSystem servers and enterprise hardware.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "IT Hardware Solutions"
    }
  },

  partnerLogRhythm: {
    title: "LogRhythm Partner in Hyderabad | SIEM Solutions | Trace Network",
    description: "Trace Network is an authorized LogRhythm partner in Hyderabad delivering SIEM, log management, threat intelligence, and security analytics solutions to detect and respond to cyber threats in real time.",
    keywords: "logrhythm partner hyderabad, SIEM solutions india, logrhythm SIEM, security information event management, log management hyderabad, threat intelligence platform, security analytics hyderabad, SOC solutions india, trace network logrhythm, SIEM hyderabad",
    ogImage: "/assets/images/partners/logrhythm.png",
    canonical: `${siteUrl}/partners/logrhythm`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "LogRhythm SIEM Solutions",
      "description": "Authorized LogRhythm partner delivering SIEM, log management and security analytics solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "SIEM & Security Analytics"
    }
  },

  partnerMicrosoft365: {
    title: "Microsoft 365 Partner in Hyderabad | Office 365 & Licensing | Trace Network",
    description: "Trace Network is an authorized Microsoft 365 partner in Hyderabad offering Microsoft 365 licensing, Office 365 deployment, Teams, SharePoint, OneDrive, and Microsoft cloud productivity solutions for businesses.",
    keywords: "microsoft 365 partner hyderabad, office 365 hyderabad, microsoft 365 licensing india, teams deployment hyderabad, microsoft cloud solutions, sharepoint hyderabad, M365 reseller india, microsoft 365 business, trace network microsoft, office 365 setup hyderabad",
    ogImage: "/assets/images/partners/microsoft365.png",
    canonical: `${siteUrl}/partners/microsoft365`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Microsoft 365 Cloud Productivity Solutions",
      "description": "Authorized Microsoft 365 partner delivering Office 365 licensing, Teams, and cloud productivity solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Cloud Productivity Solutions"
    }
  },

  partnerPoly: {
    title: "Poly Collaboration Partner in Hyderabad | AI Noise Cancellation, Teams & Zoom Certified | Trace Network",
    description: "Trace Network is a certified Poly (Plantronics) partner in Hyderabad providing AI noise-cancellation headsets, smart video conferencing cameras, meeting room solutions, and hybrid workplace communication certified for Microsoft Teams, Zoom, and Webex.",
    keywords: "poly partner hyderabad, poly headsets AI noise cancellation, poly video conferencing, poly teams certified, poly zoom certified, poly webex certified, plantronics headsets hyderabad, hybrid workplace communication, smart meeting rooms india, poly collaboration solutions, trace network poly, poly certified partner",
    ogImage: "/assets/images/partners/poly.png",
    canonical: `${siteUrl}/partners/poly`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Poly Collaboration & Communication Solutions",
      "description": "Certified Poly partner delivering AI noise-cancellation headsets, video conferencing, and Teams/Zoom/Webex-certified hybrid workplace solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Collaboration & Unified Communications"
    }
  },

  partnerSeceon: {
    title: "Seceon Partner in Hyderabad | SIEM+XDR & 24/7 SOC Monitoring | Trace Network",
    description: "Trace Network is an authorized Seceon partner in Hyderabad delivering AI-driven open threat management, unified SIEM+XDR platform, 24/7 SOC monitoring, behavioral analytics, and automated incident response for proactive enterprise cybersecurity.",
    keywords: "seceon partner hyderabad, seceon OTM, seceon SIEM XDR, AI threat detection hyderabad, 24/7 SOC monitoring india, open threat management, SOC automation india, behavioral analytics security, cybersecurity AI hyderabad, advanced threat management, trace network seceon, AI security solutions india",
    ogImage: "/assets/images/partners/seceon.png",
    canonical: `${siteUrl}/partners/seceon`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Seceon SIEM+XDR & AI Threat Management",
      "description": "Authorized Seceon partner delivering unified SIEM+XDR platform, 24/7 SOC monitoring, behavioral analytics and automated threat response.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "AI-Driven Threat Detection & SOC"
    }
  },

  partnerSolarWinds: {
    title: "SolarWinds Partner in Hyderabad | Network, Server, Database & Cloud Monitoring | Trace Network",
    description: "Trace Network is a premier SolarWinds partner in Hyderabad providing complete IT infrastructure monitoring covering network, servers, databases, and cloud — with real-time performance analytics, proactive alerting, and 1000+ enterprise deployments.",
    keywords: "solarwinds partner hyderabad, solarwinds network monitoring, solarwinds server monitoring, solarwinds database monitoring, IT monitoring solutions india, solarwinds ITSM, solarwinds NPM, network performance monitoring, IT observability hyderabad, solarwinds service desk, trace network solarwinds, IT management hyderabad",
    ogImage: "/assets/images/partners/solarwinds.png",
    canonical: `${siteUrl}/partners/solarwinds`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SolarWinds IT Infrastructure Monitoring",
      "description": "Premier SolarWinds partner delivering complete monitoring for network, servers, databases and cloud with proactive alerting and performance analytics.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "IT Monitoring & Observability"
    }
  },

  partnerSophos: {
    title: "Sophos Partner of the Year 2025 India & SAARC | #1 Sophos Platinum Partner Hyderabad | Trace Network",
    description: "Trace Network is the Sophos Partner of the Year 2025 for India & SAARC — the #1 Sophos Platinum Partner in Hyderabad with 20+ years of excellence, 1000+ deployments, 15+ certified engineers, delivering endpoint protection, XG Firewall, EDR, MDR, and 24x7 Managed Threat Response.",
    keywords: "sophos partner of the year 2025, sophos platinum partner hyderabad, sophos india SAARC partner, sophos MDR 24x7, sophos XG firewall, sophos endpoint protection, sophos EDR, sophos intercept X, managed threat response hyderabad, sophos email security, best sophos partner india, trace network sophos, sophos 1000 deployments hyderabad",
    ogImage: "/assets/images/partners/sophos.png",
    canonical: `${siteUrl}/partners/sophos`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sophos Cybersecurity Solutions – Partner of the Year 2025",
      "description": "Sophos Partner of the Year 2025 for India & SAARC, delivering endpoint protection, XG Firewall, EDR, MDR and 24x7 Managed Threat Response with 1000+ enterprise deployments.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Endpoint & Network Security"
    }
  },

  partnerVmware: {
    title: "VMware Partner in Hyderabad | Virtualization & Cloud Solutions | Trace Network",
    description: "Trace Network is an authorized VMware partner in Hyderabad delivering server virtualization, VMware vSphere, NSX, vSAN, and VMware Cloud solutions for enterprise data centers and hybrid cloud environments.",
    keywords: "vmware partner hyderabad, vmware virtualization india, vsphere hyderabad, vmware NSX, vmware vSAN, server virtualization solutions, vmware cloud hyderabad, vmware horizon, vmware reseller india, trace network vmware, data center virtualization",
    ogImage: "/assets/images/partners/vmware.png",
    canonical: `${siteUrl}/partners/vmware`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "VMware Virtualization Solutions",
      "description": "Authorized VMware partner delivering server virtualization, vSphere, NSX and cloud solutions.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Virtualization & Cloud"
    }
  },

  partnerZoho: {
    title: "Zoho Authorized Partner in Hyderabad | 45+ Apps, CRM & Business Automation | Trace Network",
    description: "Trace Network is an authorized Zoho partner in Hyderabad delivering Zoho One (45+ integrated apps), Zoho CRM, Zoho Books, Zoho People HRMS, Zoho Desk, and complete cloud-based business automation for sales, finance, marketing, and operations.",
    keywords: "zoho partner hyderabad, zoho one 45 apps hyderabad, zoho CRM hyderabad, zoho books accounting, zoho people HRMS, zoho desk hyderabad, zoho reseller india, zoho business automation, cloud business software hyderabad, trace network zoho, zoho authorized partner india, zoho workflow automation",
    ogImage: "/assets/images/partners/zoho.png",
    canonical: `${siteUrl}/partners/zoho`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Zoho Business Applications & Automation",
      "description": "Authorized Zoho partner delivering Zoho One with 45+ integrated apps for CRM, accounting, HRMS, and complete business automation.",
      "provider": { "@type": "Organization", "name": companyName, "url": siteUrl },
      "areaServed": { "@type": "Country", "name": "India" },
      "serviceType": "Business Cloud Applications"
    }
  },

  // ── UPDATE EXISTING PARTNER ENTRIES WITH FULL structured data ────────────

  soc: {
    title: "SOC Services | Security Operations Center | Trace Network",
    description: "Trace Engineering Network Pvt. Ltd. offers advanced Security Operations Center (SOC) services from Hyderabad, providing 24/7 threat monitoring, incident response, and cybersecurity management to safeguard enterprise networks and data from evolving digital threats.",
    keywords: "SOC services, security operations center, 24/7 threat monitoring, incident response, cybersecurity management, SOC hyderabad, managed SOC, threat detection"
  },

  viewBlog: {
    title: "Blog | Trace Network & Engineering Pvt Ltd",
    description: "Read expert insights on cybersecurity, network infrastructure, cloud solutions, and IT services from Trace Network & Engineering Pvt Ltd.",
    keywords: "IT blog, cybersecurity article, network security, technology insights, trace network blog"
  },

  viewEvent: {
    title: "Event | Trace Network & Engineering Pvt Ltd",
    description: "Stay updated with the latest events, webinars, and workshops on cybersecurity and IT technologies from Trace Network & Engineering Pvt Ltd.",
    keywords: "IT event, cybersecurity event, webinar, workshop, technology event, trace network event",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Trace Network Event",
      "description": "Technology and cybersecurity event by Trace Network & Engineering"
    }
  },

  // Admin pages SEO
  adminDashboard: {
    title: "Admin Dashboard | Trace Network & Engineering",
    description: "Administrative dashboard for managing Trace Network & Engineering website content, blogs, and events.",
    keywords: "admin dashboard, content management, website administration, trace network admin",
    robots: "noindex, nofollow"
  },

  adminLogin: {
    title: "Admin Login | Trace Network & Engineering",
    description: "Secure login portal for Trace Network & Engineering website administrators.",
    keywords: "admin login, secure access, website administration, trace network login",
    robots: "noindex, nofollow"
  },

  adminBlogs: {
    title: "Manage Blogs | Admin Dashboard | Trace Network",
    description: "Administrative interface for managing blog posts and articles on Trace Network & Engineering website.",
    keywords: "blog management, content administration, article management, trace network blogs admin",
    robots: "noindex, nofollow"
  },

  adminEvents: {
    title: "Manage Events | Admin Dashboard | Trace Network",
    description: "Administrative interface for managing events, webinars, and workshops on Trace Network & Engineering website.",
    keywords: "event management, webinar administration, workshop management, trace network events admin",
    robots: "noindex, nofollow"
  },

  createEvent: {
    title: "Create Event | Admin Dashboard | Trace Network",
    description: "Create new events, webinars, and workshops for Trace Network & Engineering website.",
    keywords: "create event, add event, event creation, trace network event admin",
    robots: "noindex, nofollow"
  },

  createBlog: {
    title: "Create Blog | Admin Dashboard | Trace Network",
    description: "Create new blog posts and articles for Trace Network & Engineering website.",
    keywords: "create blog, add article, blog creation, trace network blog admin",
    robots: "noindex, nofollow"
  },

  editBlog: {
    title: "Edit Blog | Admin Dashboard | Trace Network",
    description: "Edit existing blog posts and articles on Trace Network & Engineering website.",
    keywords: "edit blog, modify article, blog editing, trace network blog admin",
    robots: "noindex, nofollow"
  },

  editEvent: {
    title: "Edit Event | Admin Dashboard | Trace Network",
    description: "Edit existing events, webinars, and workshops on Trace Network & Engineering website.",
    keywords: "edit event, modify event, event editing, trace network event admin",
    robots: "noindex, nofollow"
  },

  // Additional missing pages
  allsectionspage: {
    title: "All Services | Complete IT Solutions | Trace Network & Engineering",
    description: "Comprehensive overview of all IT services, cybersecurity solutions, and technology offerings provided by Trace Network & Engineering Pvt Ltd.",
    keywords: "all services, complete IT solutions, comprehensive services, technology offerings, trace network services, IT portfolio",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Complete IT Solutions Portfolio",
      "description": "Comprehensive IT and cybersecurity services portfolio",
      "provider": {
        "@type": "Organization",
        "name": companyName
      }
    }
  },

  eventss: {
    title: "Technology Events & Roadshows | Edutech, Cloud, Sophos MDR & More | Trace Network",
    description: "Explore Trace Network & Engineering's technology events and roadshows in Hyderabad — including Edutech Connect (April 2024), Digital Nexus Cloud & Data Event (June 2024), Sophos MDR Experience Roadshow (July 2024), and Sophos Technical Workshop (August 2024). Powering innovation through technology and collaboration.",
    keywords: "trace network events hyderabad, edutech connect 2024, digital nexus event, sophos MDR roadshow hyderabad, sophos technical workshop, cybersecurity event hyderabad, technology innovation events india, cloud data communication event, IT networking event hyderabad, trace network roadshow",
    canonical: "https://tracenetwork.in/eventss",
    ogImage: "/assets/images/events/event1.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EventSeries",
      "name": "Trace Network Technology Events & Roadshows",
      "description": "A series of technology events, roadshows, and workshops by Trace Network & Engineering covering cybersecurity, cloud, networking, and education technology.",
      "url": "https://tracenetwork.in/eventss",
      "organizer": {
        "@type": "Organization",
        "name": "Trace Network & Engineering Pvt Ltd",
        "url": "https://tracenetwork.in"
      },
      "location": {
        "@type": "Place",
        "name": "Hyderabad, Telangana, India"
      },
      "subEvent": [
        {
          "@type": "Event",
          "name": "Edutech Connect - Bridging Institutions and Tech Innovation",
          "startDate": "2024-04-19",
          "description": "A convergence of academic institutions and technology innovators to enable next-gen learning experiences."
        },
        {
          "@type": "Event",
          "name": "Digital Nexus - Uniting Cloud, Data, and Communication for Your Business",
          "startDate": "2024-06-07",
          "description": "Explore how integrated digital infrastructures are redefining the future of business communications."
        },
        {
          "@type": "Event",
          "name": "Sophos MDR Experience Roadshow - Your Shield Against Cyber Attacks",
          "startDate": "2024-07-17",
          "description": "Discover managed detection and response in action to enhance your cybersecurity posture."
        },
        {
          "@type": "Event",
          "name": "Sophos Technical Workshop",
          "startDate": "2024-08-08",
          "description": "Hands-on workshop on deploying and managing advanced Sophos cybersecurity tools."
        }
      ]
    }
  },

  emailsolutions: {
    title: "Email Solutions & Security in Hyderabad | Microsoft 365 & Google Workspace | Trace Network",
    description: "Secure and manage your cloud email with Microsoft 365, Google Workspace, advanced email security, threat protection, and phishing defense from Trace Network.",
    keywords: "email security, microsoft 365 hyderabad, google workspace hyderabad, cloud email solutions, email threat protection, spam filtering, phishing defense, trace network"
  },

  networkswitches: {
    title: "Enterprise Network Switches & Switching Solutions | Trace Network",
    description: "Scalable, high-performance campus and data center network switches. HPE Aruba and Cisco switching solutions for seamless business connectivity.",
    keywords: "network switches, campus switching, data center switches, ethernet switches, managed switches, poe switches, aruba switches, cisco switches, trace network"
  },

  wirelessaccesspoints: {
    title: "Enterprise Wireless Access Points & Wi-Fi Solutions | Trace Network",
    description: "High-density enterprise wireless access points and Wi-Fi solutions. Multi-gigabit, AI-powered wireless networking for campuses and businesses.",
    keywords: "wireless access points, enterprise wifi, aruba access points, Ruckus wifi, campus wireless, cloud managed wifi, trace network"
  },

  laptopsdesktopsservers: {
    title: "Enterprise Laptops, Desktops & Servers in Hyderabad | Trace Network",
    description: "Get enterprise-grade laptops, workstations, thin clients, and rack/tower servers fully configured and managed for your business infrastructure.",
    keywords: "business laptops, enterprise desktops, rack servers, tower servers, dell servers, lenovo laptops, hp workstations, it hardware procurement, trace network"
  },

  boardroomsolutions: {
    title: "Smart Boardroom & Conferencing Solutions in Hyderabad | Trace Network",
    description: "Transform meeting spaces with state-of-the-art boardroom solutions, AV conferencing, and smart office systems by Trace Network.",
    keywords: "boardroom solutions, AV conferencing, smart boardroom, video conferencing hyderabad, meeting room setup, smart office, trace network"
  },

  interactivepanels: {
    title: "Interactive Flat Panels & Smart Displays | Trace Network",
    description: "Enterprise-grade interactive flat panels and smart displays for modern classrooms and collaborative corporate boardrooms.",
    keywords: "interactive panels, interactive flat panel, smart board, touch display, digital whiteboard, trace network"
  },

  endpointsecurity: {
    title: "Endpoint Security (EDR & XDR) Solutions | Trace Network",
    description: "Protect your enterprise network and endpoints with advanced Endpoint Detection & Response (EDR) and Extended Detection & Response (XDR) solutions.",
    keywords: "endpoint security, EDR, XDR, endpoint detection response, extended detection response, anti malware, sophos edr, trace network"
  },

  datasecurityemailsecurity: {
    title: "Email Security & Data Protection Solutions | Trace Network",
    description: "Enterprise email security and data protection solutions. Defend against phishing, business email compromise (BEC), malware, and data leaks.",
    keywords: "email security, data protection, spam filter, anti phishing, business email security, secure email gateway, trace network"
  },

  notFound: {
    title: "Page Not Found | Trace Network & Engineering",
    description: "The page you are looking for could not be found. Return to Trace Network & Engineering homepage for IT and cybersecurity solutions.",
    keywords: "page not found, 404 error, trace network, IT solutions, cybersecurity",
    robots: "noindex, nofollow"
  }
};

// Helper function to get SEO config by page key
export const getSEOConfig = (pageKey, dynamicData = {}) => {
  const config = seoConfig[pageKey] || seoConfig.home;
  
  // Merge dynamic data if provided
  if (dynamicData && Object.keys(dynamicData).length > 0) {
    return {
      ...config,
      ...dynamicData,
      structuredData: {
        ...config.structuredData,
        ...dynamicData.structuredData
      }
    };
  }
  
  return config;
};

// Helper function to generate breadcrumb structured data
export const generateBreadcrumbData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteUrl}${crumb.url}`
    }))
  };
};

// Helper function to generate organization structured data
export const getOrganizationData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyName,
    "url": siteUrl,
    "logo": `${siteUrl}/assets/images/logoo.png`,
    "description": "Leading IT solutions and cybersecurity company in Hyderabad, India",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-40-XXXXXXXX",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/trace-network-engineering",
      "https://twitter.com/tracenetwork",
      "https://www.facebook.com/tracenetwork"
    ]
  };
};

// Helper function to get SEO data for a page
export const getSEOData = (pageName) => {
  return seoConfig[pageName] || seoConfig.home;
};
