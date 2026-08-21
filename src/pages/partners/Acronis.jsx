import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Acronis.css';

const acronisUseCases = [
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking & Financial Services (Backup & Ransomware Protection)', description: 'Problem: Banks require secure backup, ransomware protection, and disaster recovery solutions to protect sensitive financial data and critical applications.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#acronis-banking' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare & Government Hospitals (Data Protection & Recovery)', description: 'Problem: Hospitals require secure backup and protection for patient records, medical applications, and healthcare systems to prevent downtime and data loss.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#acronis-healthcare' },
  { id: 'government', category: 'GOVERNMENT', icon: 'fas fa-university', title: 'Government Organizations (Centralized Backup & Endpoint Protection)', description: 'Problem: Government organizations require centralized backup, endpoint protection, and disaster recovery solutions for mission-critical infrastructure.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#acronis-government' },
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Industry (ERP Backup & Operational Recovery)', description: 'Problem: Manufacturing organizations require reliable backup and recovery solutions for ERP systems, production environments, and operational infrastructure.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#acronis-manufacturing' },
  { id: 'it', category: 'IT & SOFTWARE', icon: 'fas fa-laptop', title: 'IT & Software Companies (Cloud Workload & Endpoint Security)', description: 'Problem: IT companies require centralized backup, endpoint security, cloud workload protection, and disaster recovery for development and business operations.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#acronis-it' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education Sector (Academic Data & Endpoint Protection)', description: 'Problem: Educational institutions require protection for academic systems, student data, faculty endpoints, and digital learning platforms.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#acronis-education' },
  { id: 'retail', category: 'RETAIL', icon: 'fas fa-shopping-cart', title: 'Retail & E-Commerce Sector (POS & Transaction Data Protection)', description: 'Problem: Retail businesses require protection for POS systems, transaction data, branch infrastructure, and customer information.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#acronis-retail' }
];
export default function Acronis() {
  useAwardsSlider();
  const seoData = getSEOData('partnerAcronis');
  return (
    <div className="acronis-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

          {/* Acronis Hero */}
          <section className="acronis-hero">
            <div className="acronis-hero-bg"></div>
            <div className="container">
              <div className="acronis-hero-content" data-aos="fade-up" data-aos-duration="1000">
                <div className="acronis-badge" data-aos="fade-down" data-aos-delay="200">
                  <span className="acronis-badge-icon"><i className="fas fa-shield-alt"></i></span>
                  Trusted Acronis Cyber Protection Partner
                </div>
                <h1 className="acronis-hero-title">
                  Enterprise-Grade
                  <span className="acronis-gradient-text"> Cyber Protection</span>
                  <br />Powered by Acronis
                </h1>
                <p className="acronis-hero-desc">
                  Backup, disaster recovery, endpoint security, ransomware protection, and centralized management - all in one integrated platform, delivered by Trace Network &amp; Engineering.
                </p>
                <div className="acronis-hero-stats" data-aos="fade-up" data-aos-delay="400">
                  <div className="acronis-stat-item">
                    <span className="acronis-stat-number">1000+</span>
                    <span className="acronis-stat-label">Enterprise Deployments</span>
                  </div>
                  <div className="acronis-stat-item">
                    <span className="acronis-stat-number">6hrs</span>
                    <span className="acronis-stat-label">Issue Resolution</span>
                  </div>
                  <div className="acronis-stat-item">
                    <span className="acronis-stat-number">Acronis</span>
                    <span className="acronis-stat-label">Certified Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          {/* Top Reasons */}
          <section className="acronis-features-section">
            <div className="container">
              <div className="acronis-section-header" data-aos="fade-up">
                <h2><i className="fas fa-key header-icon-glow"></i>Top Reasons to Choose Acronis</h2>
                <p>Complete cyber protection for modern enterprises - all in one platform</p>
              </div>
              <div className="acronis-features-grid">
                <div className="acronis-feature-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="partner-icon-circle"><i className="fas fa-link"></i></div>
                  <h3>Integrated Cyber Protection</h3>
                  <p>Acronis combines backup, cybersecurity, disaster recovery, and endpoint protection into one unified platform - eliminating the need for multiple point solutions.</p>
                </div>
                <div className="acronis-feature-card" data-aos="fade-up" data-aos-delay="150">
                  <div className="partner-icon-circle"><i className="fas fa-bug"></i></div>
                  <h3>Advanced Ransomware Protection</h3>
                  <p>AI-based anti-ransomware technology detects and blocks ransomware attacks in real time, protecting your data before damage occurs.</p>
                </div>
                <div className="acronis-feature-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="partner-icon-circle"><i className="fas fa-save"></i></div>
                  <h3>Reliable Backup &amp; Disaster Recovery</h3>
                  <p>Protect physical servers, virtual machines, cloud workloads, laptops, desktops, and Microsoft 365 environments with fast, reliable recovery.</p>
                </div>
                <div className="acronis-feature-card" data-aos="fade-up" data-aos-delay="250">
                  <div className="partner-icon-circle"><i className="fas fa-desktop"></i></div>
                  <h3>Centralized Management</h3>
                  <p>Manage backup, endpoint protection, patching, and monitoring through a single centralized console - simplifying IT operations across your organization.</p>
                </div>
                <div className="acronis-feature-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="partner-icon-circle"><i className="fas fa-cloud"></i></div>
                  <h3>Cloud &amp; Microsoft 365 Protection</h3>
                  <p>Comprehensive backup for Microsoft 365, Google Workspace, and cloud workloads - ensuring SaaS data is always protected and recoverable.</p>
                </div>
                <div className="acronis-feature-card" data-aos="fade-up" data-aos-delay="350">
                  <div className="partner-icon-circle"><i className="fas fa-wrench"></i></div>
                  <h3>Endpoint &amp; Patch Management</h3>
                  <p>Centralized patch management, remote monitoring, device health monitoring, and automated updates keep your endpoints secure and up to date.</p>
                </div>
              </div>
            </div>
          </section>

          
          
          {/* CTA Section */}
          <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
            <div className="career-cta-container">
              <div className="partner-cta-eyebrow"><i className="fas fa-shield-alt"></i><span>FREE CYBER PROTECTION CONSULT</span></div>
              <h2 className="career-cta-title partner-cta-title">Ready to Build a Future-Ready IT Environment?</h2>
              <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
              <div className="partner-cta-points">
                <div className="partner-cta-point"><i className="fas fa-search"></i><span>The top three risks hiding in your current stack</span></div>
                <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins that boost performance without new hardware</span></div>
                <div className="partner-cta-point"><i className="fas fa-calendar-alt"></i><span>An exact timeline &amp; cost estimate - no obligations</span></div>
              </div>
              <div className="partner-cta-actions">
                <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="partner-cta-primary"><i className="fab fa-whatsapp"></i>Book Your Free Strategy Call</a>
                <a href="/contact-us" className="partner-cta-secondary"><i className="fas fa-envelope"></i>Send Us a Message</a>
              </div>
            </div>
            <div className="partner-cta-glow-l" aria-hidden="true"></div>
            <div className="partner-cta-glow-r" aria-hidden="true"></div>
          </section>

          {/* Use Cases - Professional Slider */}
          <UseCaseSlider
            useCases={acronisUseCases}
            partnerColor="#ef1c25"
            title="Acronis Use Cases"
            subtitle="Successfully Delivered by Trace Network across diverse industry sectors"
          />
    </div>
  );
}
