import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import './Qualys.css';

const qualysUseCases = [
  {
    id: 'defence',
    category: 'DEFENCE',
    icon: 'fas fa-shield-alt',
    title: 'Defence Sector (Continuous Security Monitoring)',
    description: 'Problem: Defence organizations require continuous monitoring of critical infrastructure, systems, and endpoints against evolving cyber threats.',
    image: '/assets/images/use-cases/usecase1.png',
    linkTo: '/case-studies#qualys-defence'
  },
  {
    id: 'education',
    category: 'EDUCATION',
    icon: 'fas fa-graduation-cap',
    title: 'Education Sector (Securing Campus Infrastructure)',
    description: 'Problem: Educational institutions require centralized visibility and protection for large-scale campus networks, servers, and endpoints.',
    image: '/assets/images/use-cases/usecase2.png',
    linkTo: '/case-studies#qualys-education'
  },
  {
    id: 'retail',
    category: 'RETAIL',
    icon: 'fas fa-shopping-cart',
    title: 'Retail Sector (Protecting POS & Customer Systems)',
    description: 'Problem: Retail businesses require continuous monitoring of POS systems, branch networks, and customer-facing applications.',
    image: '/assets/images/use-cases/usecase3.png',
    linkTo: '/case-studies#qualys-retail'
  },
  {
    id: 'banking',
    category: 'BANKING',
    icon: 'fas fa-university',
    title: 'Banking Sector (Compliance & Risk Management)',
    description: 'Problem: Banks require strict vulnerability management, compliance monitoring, and protection of sensitive financial systems.',
    image: '/assets/images/use-cases/usecase4.png',
    linkTo: '/case-studies#qualys-banking'
  },
  {
    id: 'healthcare',
    category: 'HEALTHCARE',
    icon: 'fas fa-hospital',
    title: 'Healthcare Sector (Protecting Critical Healthcare Infrastructure)',
    description: 'Problem: Hospitals and healthcare providers need to secure patient systems, medical applications, and connected healthcare devices.',
    image: '/assets/images/use-cases/usecase5.png',
    linkTo: '/case-studies#qualys-healthcare'
  },
  {
    id: 'enterprise',
    category: 'ENTERPRISE',
    icon: 'fas fa-building',
    title: 'Large Enterprises (Enterprise Risk Visibility)',
    description: 'Problem: Large organizations require centralized vulnerability management across multiple branches, cloud environments, and endpoints.',
    image: '/assets/images/use-cases/usecase6.png',
    linkTo: '/case-studies#qualys-enterprise'
  },
  {
    id: 'manufacturing',
    category: 'MANUFACTURING',
    icon: 'fas fa-industry',
    title: 'Manufacturing Industry (Industrial Security & Compliance)',
    description: 'Problem: Manufacturing organizations require protection for production systems, industrial assets, and operational technology environments.',
    image: '/assets/images/use-cases/usecase7.png',
    linkTo: '/case-studies#qualys-manufacturing'
  }
];

export default function Qualys() {
  const seoData = getSEOData('partnerQualys');
  return (
    <div className="qualys-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

          {/* Hero */}
          <section className="qualys-hero">
            <div className="qualys-hero-bg"></div>
            <div className="container">
              <div className="qualys-hero-content" data-aos="fade-up" data-aos-duration="1000">
                <div className="qualys-badge" data-aos="fade-down" data-aos-delay="200">
                  <span className="qualys-badge-icon"><i className="fas fa-search"></i></span>
                  One of the Leading Qualys Partners in SAARC
                </div>
                <h1 className="qualys-hero-title">
                  Leading Qualys Cybersecurity<br />
                  &amp; Compliance<br />
                  <span className="qualys-gradient-text">Partner</span>
                </h1>
                <p className="qualys-hero-desc">
                  Continuous vulnerability management, compliance monitoring, patch automation, and real-time threat visibility across hybrid IT environments - delivered by Trace Network &amp; Engineering.
                </p>
                <div className="qualys-hero-stats" data-aos="fade-up" data-aos-delay="400">
                  <div className="qualys-stat-item">
                    <span className="qualys-stat-number">1000+</span>
                    <span className="qualys-stat-label">Enterprise Deployments</span>
                  </div>
                  <div className="qualys-stat-item">
                    <span className="qualys-stat-number">6hrs</span>
                    <span className="qualys-stat-label">Issue Resolution</span>
                  </div>
                  <div className="qualys-stat-item">
                    <span className="qualys-stat-number">SAARC</span>
                    <span className="qualys-stat-label">Leading Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          {/* Certifications Section - Content Based */}
          <section className="qualys-certifications">
            <div className="container">
              <div className="qualys-section-header" data-aos="fade-up">
                <h2><i className="fas fa-graduation-cap header-icon-glow"></i> Our Qualys Expertise &amp; Capabilities</h2>
                <p>Certified professionals delivering proven expertise across Qualys vulnerability management and compliance solutions</p>
              </div>
              <div className="qualys-expertise-showcase">
                <div className="expertise-content">
                  <h3>Professional Qualys Expertise</h3>
                  <div className="expertise-grid">
                    <div className="expertise-item">
                      <span className="partner-icon-circle sm"><i className="fas fa-medal"></i></span>
                      <div className="expertise-details">
                        <h4>Qualys VMDR Specialists</h4>
                        <p>Vulnerability Management, Detection &amp; Response implementation and optimization</p>
                      </div>
                    </div>
                    <div className="expertise-item">
                      <span className="partner-icon-circle sm"><i className="fas fa-medal"></i></span>
                      <div className="expertise-details">
                        <h4>Qualys Cloud Platform Experts</h4>
                        <p>Complete platform administration, configuration, and deployment</p>
                      </div>
                    </div>
                    <div className="expertise-item">
                      <span className="partner-icon-circle sm"><i className="fas fa-medal"></i></span>
                      <div className="expertise-details">
                        <h4>Compliance Monitoring Specialists</h4>
                        <p>ISO 27001, PCI-DSS, HIPAA, GDPR, SOC 2, CIS Benchmarks implementation</p>
                      </div>
                    </div>
                    <div className="expertise-item">
                      <span className="partner-icon-circle sm"><i className="fas fa-medal"></i></span>
                      <div className="expertise-details">
                        <h4>Web Application Security Experts</h4>
                        <p>Web app scanning, API security, and DevSecOps integration</p>
                      </div>
                    </div>
                    <div className="expertise-item">
                      <span className="partner-icon-circle sm"><i className="fas fa-medal"></i></span>
                      <div className="expertise-details">
                        <h4>Endpoint Detection &amp; Response (EDR)</h4>
                        <p>Advanced endpoint protection and threat hunting capabilities</p>
                      </div>
                    </div>
                    <div className="expertise-item">
                      <span className="partner-icon-circle sm"><i className="fas fa-medal"></i></span>
                      <div className="expertise-details">
                        <h4>Cloud &amp; Container Security</h4>
                        <p>AWS, Azure, Google Cloud security and Kubernetes protection</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="qualys-solutions-overview">
                  <h3>Complete Qualys Security Solutions</h3>
                  <div className="solutions-list">
                    <div className="solution-item-detailed">
                      <span className="solution-icon"><i className="fas fa-search"></i></span>
                      <div>
                        <h4>Vulnerability Management (VMDR)</h4>
                        <p>Continuous vulnerability assessment and threat detection</p>
                      </div>
                    </div>
                    <div className="solution-item-detailed">
                      <span className="solution-icon"><i className="fas fa-wrench"></i></span>
                      <div>
                        <h4>Patch Management</h4>
                        <p>Automated patch deployment and remediation workflows</p>
                      </div>
                    </div>
                    <div className="solution-item-detailed">
                      <span className="solution-icon"><i className="fas fa-clipboard-list"></i></span>
                      <div>
                        <h4>Policy Compliance</h4>
                        <p>Regulatory compliance monitoring and reporting</p>
                      </div>
                    </div>
                    <div className="solution-item-detailed">
                      <span className="solution-icon"><i className="fas fa-globe"></i></span>
                      <div>
                        <h4>Web Application Scanning</h4>
                        <p>OWASP Top 10 coverage and API security testing</p>
                      </div>
                    </div>
                    <div className="solution-item-detailed">
                      <span className="solution-icon"><i className="fas fa-shield-alt"></i></span>
                      <div>
                        <h4>Endpoint Detection &amp; Response</h4>
                        <p>Advanced endpoint protection and forensic analysis</p>
                      </div>
                    </div>
                    <div className="solution-item-detailed">
                      <span className="solution-icon"><i className="fas fa-cloud"></i></span>
                      <div>
                        <h4>Cloud &amp; Container Security</h4>
                        <p>Multi-cloud security and container image scanning</p>
                      </div>
                    </div>
                    <div className="solution-item-detailed">
                      <span className="solution-icon"><i className="fas fa-chart-bar"></i></span>
                      <div>
                        <h4>Asset Inventory &amp; Discovery</h4>
                        <p>Comprehensive asset management and classification</p>
                      </div>
                    </div>
                    <div className="solution-item-detailed">
                      <span className="solution-icon"><i className="fas fa-lock"></i></span>
                      <div>
                        <h4>File Integrity Monitoring</h4>
                        <p>Real-time file and system change monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Top Reasons / Features */}
          <section className="qualys-features-section">
            <div className="container">
              <div className="qualys-section-header" data-aos="fade-up">
                <h2><i className="fas fa-search header-icon-glow"></i> Why Qualys is the Global Leader in Vulnerability Management</h2>
                <p>Complete cloud-based vulnerability management and compliance platform trusted by 19,000+ organizations worldwide</p>
              </div>
              <div className="qualys-features-grid">
                <div className="qualys-feature-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="partner-icon-circle"><i className="fas fa-search"></i></div>
                  <h3>Continuous Vulnerability Management</h3>
                  <p>Continuously scans and identifies vulnerabilities across servers, endpoints, applications, cloud workloads, and network devices with real-time threat intelligence and risk prioritization.</p>
                </div>
                <div className="qualys-feature-card" data-aos="fade-up" data-aos-delay="150">
                  <div className="partner-icon-circle"><i className="fas fa-cloud"></i></div>
                  <h3>Unified Cloud Platform</h3>
                  <p>Single cloud-based platform managing vulnerability assessment, compliance monitoring, patch management, threat detection, and incident response from one centralized dashboard.</p>
                </div>
                <div className="qualys-feature-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="partner-icon-circle"><i className="fas fa-eye"></i></div>
                  <h3>Real-Time Asset Discovery &amp; Visibility</h3>
                  <p>Automatically discovers and inventories all IT assets including cloud instances, containers, endpoints, and IoT devices with continuous monitoring and classification.</p>
                </div>
                <div className="qualys-feature-card" data-aos="fade-up" data-aos-delay="250">
                  <div className="partner-icon-circle"><i className="fas fa-cog"></i></div>
                  <h3>Automated Patch Management</h3>
                  <p>Intelligent patch deployment with automated testing, scheduling, and rollback capabilities. Reduces patch deployment time by 80% while maintaining system stability.</p>
                </div>
                <div className="qualys-feature-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="partner-icon-circle"><i className="fas fa-clipboard-list"></i></div>
                  <h3>Comprehensive Compliance Monitoring</h3>
                  <p>Built-in compliance templates for ISO 27001, PCI-DSS, HIPAA, GDPR, SOC 2, CIS Benchmarks, and NIST frameworks with automated reporting and remediation guidance.</p>
                </div>
                <div className="qualys-feature-card" data-aos="fade-up" data-aos-delay="350">
                  <div className="partner-icon-circle"><i className="fas fa-shield-alt"></i></div>
                  <h3>Advanced Threat Detection &amp; Response</h3>
                  <p>VMDR (Vulnerability Management, Detection &amp; Response) with behavioral analysis, threat hunting, and automated incident response powered by global threat intelligence.</p>
                </div>
                <div className="qualys-feature-card" data-aos="fade-up" data-aos-delay="400">
                  <div className="partner-icon-circle"><i className="fas fa-globe"></i></div>
                  <h3>Web Application Security</h3>
                  <p>Comprehensive web application scanning with OWASP Top 10 coverage, API security testing, and integration with CI/CD pipelines for DevSecOps workflows.</p>
                </div>
                <div className="qualys-feature-card" data-aos="fade-up" data-aos-delay="450">
                  <div className="partner-icon-circle"><i className="fas fa-mobile-alt"></i></div>
                  <h3>Endpoint Detection &amp; Response (EDR)</h3>
                  <p>Advanced endpoint protection with behavioral monitoring, threat hunting, forensic analysis, and automated response capabilities for Windows, Mac, and Linux systems.</p>
                </div>
                <div className="qualys-feature-card" data-aos="fade-up" data-aos-delay="500">
                  <div className="partner-icon-circle"><i className="fas fa-lock"></i></div>
                  <h3>Container &amp; Cloud Security</h3>
                  <p>Native cloud security for AWS, Azure, Google Cloud with container image scanning, Kubernetes security, and cloud configuration assessment.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Career CTA — above Use Cases */}
          <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
            <div className="career-cta-container">
              <div className="partner-cta-eyebrow"><i className="fas fa-clipboard-check"></i><span>FREE COMPLIANCE CONSULT</span></div>
              <h2 className="career-cta-title partner-cta-title">Ready to Achieve Continuous Security Compliance?</h2>
              <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
              <div className="partner-cta-points">
                <div className="partner-cta-point"><i className="fas fa-search"></i><span>Compliance gaps putting your organisation at risk</span></div>
                <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to automate vulnerability scanning and reporting</span></div>
                <div className="partner-cta-point"><i className="fas fa-calendar-alt"></i><span>An exact timeline &amp; cost estimate — no obligations</span></div>
              </div>
              <div className="partner-cta-actions">
                <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="partner-cta-primary"><i className="fab fa-whatsapp"></i> Book Your Free Strategy Call</a>
                <a href="/contact-us" className="partner-cta-secondary"><i className="fas fa-envelope"></i> Send Us a Message</a>
              </div>
            </div>
            <div className="partner-cta-glow-l" aria-hidden="true"></div>
            <div className="partner-cta-glow-r" aria-hidden="true"></div>
          </section>

          {/* Use Cases Slider */}
          <UseCaseSlider
            useCases={qualysUseCases}
            partnerColor="#ef4444"
          />


                {/* ── SPECIAL OFFER SECTION ── */}
      <section className="greythr-special-offer" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="greythr-offer-card">
            
            {/* Ambient background glows */}
            <div className="greythr-offer-glow-left" aria-hidden="true"></div>
            <div className="greythr-offer-glow-right" aria-hidden="true"></div>

            {/* Twinkling stars */}
            <div className="greythr-offer-stars" aria-hidden="true">
              <span className="gt-star gt-star-1">★</span>
              <span className="gt-star gt-star-2">✦</span>
              <span className="gt-star gt-star-3">★</span>
              <span className="gt-star gt-star-4">✦</span>
            </div>

            {/* RIGHT COLUMN: Interactive Content */}
            <div className="greythr-offer-content sify-offer-content-full">
              <div className="greythr-offer-badge">
                <i className="fas fa-gift"></i> SPECIAL OFFER
              </div>

              <h2 className="greythr-offer-title">
                <span className="greythr-offer-free">FREE Scan</span> & Assessment
              </h2>

              <div className="greythr-offer-pill">
                <span className="greythr-offer-pill-dot"></span>
                Exclusive Vulnerability Assessment
              </div>

              <p className="greythr-offer-desc">
                Discover vulnerabilities across your IT infrastructure with Qualys VMDR. Set up a tailored security assessment and proof of concept under certified guidance.
              </p>

              {/* Feature Grid */}
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span>Free Vulnerability<br />Assessment Scan</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-sliders-h"></i>
                  </div>
                  <span>Compliance Gap<br />Analysis Report</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Exclusive Pricing<br />on Qualys Solutions</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <span>Expert Guidance<br />Throughout</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
              </div>

              {/* Modules List */}
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['Vulnerability Mgmt (VMDR)', 'Policy Compliance', 'Asset Inventory', 'Endpoint Detection (EDR)'].map((m, i) => (
                    <React.Fragment key={m}>
                      <span className="greythr-offer-module">
                        <i className="fas fa-shield-alt"></i> {m}
                      </span>
                      {i < 3 && <span className="greythr-offer-sep">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* CTA button */}
              <Link to="/contact-us" className="greythr-contact-btn">
                CONTACT TRACE NETWORK <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>

        </div>
  );
}

