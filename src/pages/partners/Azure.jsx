import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Azure.css';

const azureUseCases = [
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking & Financial Services (Secure Cloud Infrastructure)', description: 'Problem: Banks require highly secure, compliant, and scalable cloud infrastructure for financial applications, analytics, and disaster recovery.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#azure-banking' },
  { id: 'government', category: 'GOVERNMENT', icon: 'fas fa-university', title: 'Government Organizations (Citizen Services & Data Management)', description: 'Problem: Government organizations require secure, centralized, and scalable infrastructure for citizen services, applications, and data management.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#azure-government' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education Sector (Digital Learning & Scalable Cloud)', description: 'Problem: Educational institutions require scalable infrastructure for digital learning, online platforms, student collaboration, and secure access management.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#azure-education' }
];

export default function Azure() {
  useAwardsSlider();
  const seoData = getSEOData('partnerAzure');
  return (
    <div className="az-page az-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- Hero -- */}
      <section className="az2-hero">
        <div className="az2-hero-bg" aria-hidden="true"></div>
        <div className="az2-hero-glow-left" aria-hidden="true"></div>
        <div className="az2-hero-glow-right" aria-hidden="true"></div>
        <div className="az2-hero-inner container">

          {/* LEFT */}
          <div className="az2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="az2-headline">
              Premier Microsoft Azure<br />
              Cloud Infrastructure<br />
              <span className="az2-headline-accent">Partner</span>
            </h1>
            <div className="az2-headline-rule"></div>
            <p className="az2-desc">
              Secure, scalable, and enterprise-grade cloud infrastructure for businesses,
              government, healthcare, banking, and manufacturing - delivered by{' '}
              <a href="/contact-us" className="az2-desc-link">Trace Network &amp; Engineering.</a>
            </p>
            <div className="az2-feature-row">
              <div className="az2-feat">
                <div className="az2-feat-icon"><i className="fas fa-chart-line"></i></div>
                <div className="az2-feat-body">
                  <strong>Scalable Infrastructure</strong>
                  <span>Apps, VMs, databases &amp; storage on demand.</span>
                </div>
              </div>
              <div className="az2-feat">
                <div className="az2-feat-icon"><i className="fas fa-lock"></i></div>
                <div className="az2-feat-body">
                  <strong>Enterprise Security</strong>
                  <span>Defender, Azure AD, MFA &amp; compliance.</span>
                </div>
              </div>
              <div className="az2-feat">
                <div className="az2-feat-icon"><i className="fas fa-sync-alt"></i></div>
                <div className="az2-feat-body">
                  <strong>Hybrid &amp; DR</strong>
                  <span>Business continuity and disaster recovery.</span>
                </div>
              </div>
            </div>
            <div className="az2-stats-row">
              <div className="az2-stat-card">
                <i className="fas fa-server"></i>
                <div>
                  <span className="az2-stat-num">1000+</span>
                  <span className="az2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="az2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="az2-stat-num">6hrs</span>
                  <span className="az2-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="az2-stat-card az2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/MICROSOFT-AZURE.jpg" alt="Microsoft Azure" className="az2-brand-logo"
                  onError={(e) => { e.target.style.opacity = '0.3'; }} />
                <span className="az2-stat-lbl">AZURE<br />CERTIFIED</span>
              </div>
            </div>
            <div className="az2-cta-row">
              <a href="/contact-us" className="az2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="az2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="az2-product-glow" aria-hidden="true"></div>
            <div className="az2-showcase">
              <img loading="lazy" src="/assets/az.png" alt="Microsoft Azure Cloud"
                className="az2-hero-product-img"
                onError={(e) => { e.target.style.opacity = '0.3'; }} />
              <div className="az2-platform" aria-hidden="true">
                <div className="az2-plat-ring az2-plat-ring-1"></div>
                <div className="az2-plat-ring az2-plat-ring-2"></div>
                <div className="az2-plat-ring az2-plat-ring-3"></div>
                <div className="az2-plat-surface"></div>
              </div>
            </div>
            <div className="az2-industry-strip">
              <span className="az2-ind-item"><i className="fas fa-university"></i> Banking</span>
              <span className="az2-ind-sep"></span>
              <span className="az2-ind-item"><i className="fas fa-landmark"></i> Government</span>
              <span className="az2-ind-sep"></span>
              <span className="az2-ind-item"><i className="fas fa-graduation-cap"></i> Education</span>
              <span className="az2-ind-sep"></span>
              <span className="az2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="az2-ind-sep"></span>
              <span className="az2-ind-item"><i className="fas fa-industry"></i> Manufacturing</span>
            </div>
          </div>

        </div>
      </section>

      
      
      {/* Certifications */}
      <section className="az2-cert-section">
        <div className="az2-cert-container">
          <div className="az2-cert-header" data-aos="fade-up" data-aos-duration="800">
            <div className="az2-port-header-icon" aria-hidden="true"><i className="fas fa-graduation-cap"></i></div>
            <h2 className="az2-port-title">Certifications of Our <span className="az2-port-accent">Technical Team</span></h2>
            <p className="az2-port-subtitle">Azure-certified professionals delivering proven expertise across cloud and infrastructure solutions</p>
          </div>
          <div className="az2-cert-images">
            <div className="az2-cert-img-card" data-aos="zoom-in" data-aos-delay="100">
              <img loading="lazy" src="/assets/images/azure/cert_image.png" alt="Microsoft Azure Certification" />
            </div>
            <div className="az2-cert-img-card" data-aos="zoom-in" data-aos-delay="200">
              <img loading="lazy" src="/assets/azure.png" alt="Microsoft Azure Certificate" />
            </div>
          </div>
        </div>
      </section>

      
      {/* Use Cases Slider */}

      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-cloud"></i><span>FREE CLOUD CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Accelerate Your Cloud Journey?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three migration opportunities in your infrastructure</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to reduce costs and improve resilience</span></div>
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
        useCases={azureUseCases}
        partnerColor="#0072c6"
        title="Microsoft Azure Use Cases"
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
              <p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide cloud migrations, vulnerability assessments, and enterprise IT security solutions for campuses, data centres, and enterprises across India.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div>
              <p><strong>Customer-First, Value-Driven</strong> Our cost-effective cloud services ensure maximum ROI with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO) for businesses.</p>
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
              <p><strong>Proven Cloud Deployment Framework</strong> Our structured approach, Assess → Design → Deploy → Optimise → Support, minimises downtime and ensures maximum ROI from your Azure investments.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div>
              <p><strong>Flexible MSSP &amp; Cloud Pricing Models</strong> Choose from CapEx, OpEx, or Managed Cloud Service models to align your Azure investments with your organisation's business goals.</p>
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
              <span className="gt-star gt-star-2">✦</span>
              <span className="gt-star gt-star-3">★</span>
              <span className="gt-star gt-star-4">✦</span>
            </div>
            <div className="greythr-offer-content sify-offer-content-full">
              <div className="greythr-offer-badge"><i className="fas fa-gift"></i> SPECIAL OFFER</div>
              <h2 className="greythr-offer-title"><span className="greythr-offer-free">FREE POC</span> Available</h2>
              <div className="greythr-offer-pill"><span className="greythr-offer-pill-dot"></span>Exclusive Azure Cloud Offer</div>
              <p className="greythr-offer-desc">Experience the speed, scalability, and security of Microsoft Azure cloud platform. Set up a tailored cloud proof of concept with Trace Network experts to validate migration plans risk-free.</p>
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-shield-alt"></i></div><span>No Upfront Cost<br />for POC Setup</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-sliders-h"></i></div><span>Tailored to Your<br />Cloud Needs</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-tag"></i></div><span>Exclusive Pricing<br />on Azure Solutions</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-headset"></i></div><span>Expert Guidance<br />Throughout</span><div className="greythr-offer-feat-bar"></div></div>
              </div>
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['Cloud Migration', 'Azure VM & Storage', 'Security & Compliance', 'Managed Cloud Services'].map((m, i) => (
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

