import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Microsoft365.css';

const microsoft365UseCases = [
  { id: 'enterprise', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Corporate Enterprises & Hybrid Workforce (Cloud Collaboration)', description: 'Problem: Organizations require secure communication, collaboration, and productivity solutions for hybrid and remote workforce environments.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#microsoft365-enterprise' },
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking & Financial Services (Secure Communication & Compliance)', description: 'Problem: Banks require secure communication, compliance management, and controlled access to sensitive financial information.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#microsoft365-banking' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare & Government Hospitals (Telemedicine & Data Protection)', description: 'Problem: Hospitals require secure communication, telemedicine collaboration, patient data protection, and centralized document management.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#microsoft365-healthcare' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education Sector (Digital Classrooms & Collaboration)', description: 'Problem: Educational institutions require digital collaboration platforms for students, faculty, administration, and online learning.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#microsoft365-education' },
  { id: 'government', category: 'GOVERNMENT', icon: 'fas fa-university', title: 'Government Organizations (Secure Collaboration & Compliance)', description: 'Problem: Government departments require secure communication, centralized collaboration, compliance monitoring, and document security.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#microsoft365-government' },
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Industry (Plant-to-Office Collaboration)', description: 'Problem: Manufacturing companies require centralized communication and collaboration between production units, warehouses, and corporate offices.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#microsoft365-manufacturing' },
];

export default function Microsoft365() {
  useAwardsSlider();
  const seoData = getSEOData('partnerMicrosoft365');
  return (
    <div className="m365-page m365-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- Hero -- */}
      <section className="m365-hero">
        <div className="m365-hero-bg" aria-hidden="true"></div>
        <div className="m365-hero-glow-left" aria-hidden="true"></div>
        <div className="m365-hero-glow-right" aria-hidden="true"></div>
        <div className="m365-hero-inner container">

          {/* LEFT */}
          <div className="m365-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="m365-headline">
              Leading Microsoft 365<br />
              Cloud Solutions<br />
              <span className="m365-headline-accent">Partner</span>
            </h1>
            <div className="m365-headline-rule"></div>
            <p className="m365-desc">
              Secure communication, cloud-based collaboration, endpoint management, and
              business productivity tools for hybrid work - delivered by{' '}
              <a href="/contact-us" className="m365-desc-link">Trace Network &amp; Engineering.</a>
            </p>
            <div className="m365-feature-row">
              <div className="m365-feat">
                <div className="m365-feat-icon"><i className="fas fa-handshake"></i></div>
                <div className="m365-feat-body">
                  <strong>Modern Workplace</strong>
                  <span>Teams, SharePoint, OneDrive &amp; Outlook.</span>
                </div>
              </div>
              <div className="m365-feat">
                <div className="m365-feat-icon"><i className="fas fa-lock"></i></div>
                <div className="m365-feat-body">
                  <strong>Enterprise Security</strong>
                  <span>Defender, DLP, MFA &amp; Intune.</span>
                </div>
              </div>
              <div className="m365-feat">
                <div className="m365-feat-icon"><i className="fas fa-cloud"></i></div>
                <div className="m365-feat-body">
                  <strong>Cloud Productivity</strong>
                  <span>Work securely from anywhere, anytime.</span>
                </div>
              </div>
            </div>
            <div className="m365-stats-row">
              <div className="m365-stat-card">
                <i className="fas fa-server"></i>
                <div>
                  <span className="m365-stat-num">1000+</span>
                  <span className="m365-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="m365-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="m365-stat-num">6hrs</span>
                  <span className="m365-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="m365-stat-card m365-stat-brand">
                <img loading="lazy" src="/assets/images/partners/MICROSOFT-365.jpg" alt="Microsoft 365" className="m365-brand-logo"
                  onError={(e) => { e.target.style.opacity = '0.3'; }} />
                <span className="m365-stat-lbl">MICROSOFT<br />CERTIFIED</span>
              </div>
            </div>
            <div className="m365-cta-row">
              <a href="/contact-us" className="m365-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="m365-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="m365-product-glow" aria-hidden="true"></div>
            <div className="m365-showcase">
              <img loading="lazy" src="/assets/micscr365.png" alt="Microsoft 365 Platform"
                className="m365-hero-product-img"
                onError={(e) => { e.target.style.opacity = '0.3'; }} />
              <div className="m365-platform" aria-hidden="true">
                <div className="m365-plat-ring m365-plat-ring-1"></div>
                <div className="m365-plat-ring m365-plat-ring-2"></div>
                <div className="m365-plat-ring m365-plat-ring-3"></div>
                <div className="m365-plat-surface"></div>
              </div>
            </div>
            <div className="m365-industry-strip">
              <span className="m365-ind-item"><i className="fas fa-building"></i> Enterprise</span>
              <span className="m365-ind-sep"></span>
              <span className="m365-ind-item"><i className="fas fa-university"></i> Banking</span>
              <span className="m365-ind-sep"></span>
              <span className="m365-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="m365-ind-sep"></span>
              <span className="m365-ind-item"><i className="fas fa-graduation-cap"></i> Education</span>
              <span className="m365-ind-sep"></span>
              <span className="m365-ind-item"><i className="fas fa-landmark"></i> Government</span>
            </div>
          </div>

        </div>
      </section>

      
      
      {/* Certifications */}
      <section className="m365-cert-section">
        <div className="m365-cert-container">
          <div className="m365-cert-header" data-aos="fade-up" data-aos-duration="800">
            <div className="m365-port-header-icon" aria-hidden="true"><i className="fas fa-graduation-cap"></i></div>
            <h2 className="m365-port-title">Certifications of Our <span className="m365-port-accent">Technical Team</span></h2>
            <p className="m365-port-subtitle">Microsoft-certified professionals delivering proven expertise across cloud and productivity solutions</p>
          </div>
          <div className="m365-cert-images">
            <div className="m365-cert-img-card" data-aos="zoom-in" data-aos-delay="100">
              <img loading="lazy" src="/assets/images/microsoft365/image1.jpeg" alt="Microsoft 365 Certification Badge 1" />
            </div>
            <div className="m365-cert-img-card" data-aos="zoom-in" data-aos-delay="200">
              <img loading="lazy" src="/assets/images/microsoft365/image2.png" alt="Microsoft 365 Certification Badge 2" />
            </div>
            <div className="m365-cert-img-card" data-aos="zoom-in" data-aos-delay="300">
              <img loading="lazy" src="/assets/365.png" alt="Microsoft 365 Certificate" />
            </div>
            <div className="m365-cert-img-card" data-aos="zoom-in" data-aos-delay="400">
              <img loading="lazy" src="/assets/365m.png" alt="Microsoft 365 Certificate" />
            </div>
          </div>
        </div>
      </section>

      
      {/* Use Cases Slider */}

      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-th-large"></i><span>FREE M365 CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Unlock the Full Power of Microsoft 365?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Collaboration gaps slowing your teams down today</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to improve productivity with M365 tools</span></div>
            <div className="partner-cta-point"><i className="fas fa-calendar-alt"></i><span>An exact timeline & cost estimate — no obligations</span></div>
          </div>
          <div className="partner-cta-actions">
            <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="partner-cta-primary"><i className="fab fa-whatsapp"></i> Book Your Free Strategy Call</a>
            <a href="/contact-us" className="partner-cta-secondary"><i className="fas fa-envelope"></i> Send Us a Message</a>
          </div>
        </div>
        <div className="partner-cta-glow-l" aria-hidden="true"></div>
        <div className="partner-cta-glow-r" aria-hidden="true"></div>
      </section>

      <UseCaseSlider
        useCases={microsoft365UseCases}
        partnerColor="#0078d4"
        title="Microsoft 365 Use Cases"
        subtitle="Successfully Delivered by Trace Network across diverse industry sectors"
      />

      {/* Awards Section */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Awards</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title">Recognized &amp; Trusted <span>for Delivering </span><br />Value &amp; Excellence</h2>
        </div>
        <div className="awards-slider">
          <div className="awards-track">
            <div className="award-card"><img loading="lazy" src="/assets/images/award/1.png" alt="Sophos Best Performing Partner (2024)" /><span>Sophos Best Performing Partner (2024)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/2.png" alt="Certification of Completion Aruba Instant (2023)" /><span>Certification of Completion Aruba Instant (2023)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/3.png" alt="Core Champion HPE Aruba Networking (2023)" /><span>Core Champion HPE Aruba Networking (2023)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/4.png" alt="Sophos Top Performer of the Region" /><span>Sophos Top Performer of the Region</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/5.png" alt="Sophos Best Solution Partner" /><span>Sophos Best Solution Partner</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/6.png" alt="Certified by SonicWall (2022)" /><span>Certified by SonicWall (2022)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/7.png" alt="HPE Aruba Accelerating Next (2022)" /><span>HPE Aruba Accelerating Next (2022)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/11.png" alt="Sophos Best Top Performing Partner (2020)" /><span>Sophos Best Top Performing Partner (2020)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/19.png" alt="Sophos Top Performer Of the Region" /><span>Sophos Top Performer Of the Region</span></div>
          </div>
        </div>
      </section>

      {/* Why Leading Brands Choose Trace */}
      <section className="premium-cards-section" style={{ marginTop: '-20px' }}>
        <div className="premium-container">
          <div className="section-title text-center pb-4">
            <h2 className="section-title__title">Why Leading<span> Brands</span> Choose<span> Trace</span></h2>
          </div>
          <div className="premium-card-grid">
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" alt="certified" /></div>
              <p><strong>Multi-vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof, scalable, and tailored to your exact IT security needs.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div>
              <p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions for Top Campuses, Global Capability Centres, data centres, and enterprises across India.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div>
              <p><strong>Customer-First, Value-Driven</strong> Our cost-effective cloud services ensure maximum productivity with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO).</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div>
              <p><strong>Local Presence with Rapid IT Support</strong> Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag, ensuring quick on-site support whenever you need them.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div>
              <p><strong>ISO 27001-Certified Cybersecurity Provider</strong> As an ISO 27001-certified company, we follow stringent change management and compliance practices, aligning with global information security standards.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div>
              <p><strong>Proven Cloud Deployment Framework</strong> Our structured approach, Assess → Design → Deploy → Optimise → Support, minimises downtime and ensures maximum ROI from your cloud investments.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div>
              <p><strong>Flexible MSSP &amp; Cloud Pricing Models</strong> Choose from CapEx, OpEx, or Managed Service Provider models to align cloud investments with your organisation's business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIAL OFFER SECTION — just above footer ── */}
      <section className="greythr-special-offer" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="greythr-offer-card">
            <div className="greythr-offer-glow-left" aria-hidden="true"></div>
            <div className="greythr-offer-glow-right" aria-hidden="true"></div>
            <div className="greythr-offer-stars" aria-hidden="true">
              <span className="gt-star gt-star-1">★</span>
              <span className="gt-star gt-star-2">-</span>
              <span className="gt-star gt-star-3">★</span>
              <span className="gt-star gt-star-4">-</span>
            </div>
            <div className="greythr-offer-content sify-offer-content-full">
              <div className="greythr-offer-badge"><i className="fas fa-gift"></i> SPECIAL OFFER</div>
              <h2 className="greythr-offer-title"><span className="greythr-offer-free">FREE POC</span> Available</h2>
              <div className="greythr-offer-pill"><span className="greythr-offer-pill-dot"></span>Exclusive Productivity Offer</div>
              <p className="greythr-offer-desc">Unlock teamwork, security, and productivity with Microsoft 365. Set up a tailored tenant assessment and proof of concept under certified expert guidance.</p>
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-shield-alt"></i></div><span>No Upfront Cost<br />for POC Setup</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-sliders-h"></i></div><span>Tailored to Your<br />Business Needs</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-tag"></i></div><span>Exclusive Pricing<br />on M365 Plans</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-headset"></i></div><span>Expert Guidance<br />Throughout</span><div className="greythr-offer-feat-bar"></div></div>
              </div>
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['Teams & SharePoint Online', 'Exchange & Outlook Business', 'Defender for Business', 'Intune Device Mgmt'].map((m, i) => (
                    <React.Fragment key={m}>
                      <span className="greythr-offer-module"><i className="fas fa-shield-alt"></i> {m}</span>
                      {i < 3 && <span className="greythr-offer-sep">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <Link to="/contact-us" className="greythr-contact-btn">CONTACT TRACE NETWORK <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
