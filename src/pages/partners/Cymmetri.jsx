import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Cymmetri.css';

const cymmetriUseCases = [
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking & Financial Services (Identity Governance)', description: 'Problem: Financial institutions require strict identity governance, secure user authentication, and controlled access to critical banking systems.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#cymmetri-banking' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare Organizations (Secure Medical Access)', description: 'Problem: Healthcare providers require secure access management for doctors, staff, applications, and patient management systems.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#cymmetri-healthcare' },
  { id: 'government', category: 'GOVERNMENT', icon: 'fas fa-landmark', title: 'Government Sector (Centralized Authentication)', description: 'Problem: Government organizations require secure identity governance and centralized authentication across departments.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#cymmetri-government' },
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Industry (ERP Access Security)', description: 'Problem: Manufacturing organizations require secure access to ERP systems and production applications across multiple locations.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#cymmetri-manufacturing' },
  { id: 'enterprise', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Large Enterprises (Enterprise-Wide IAM)', description: 'Problem: Large enterprises require centralized identity governance for thousands of users, applications, and distributed environments.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#cymmetri-enterprise' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Educational Institutions (Campus IAM)', description: 'Problem: Educational organizations require secure and simplified access for students, faculty, administrators, and digital learning platforms.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#cymmetri-education' },
];

export default function Cymmetri() {
  useAwardsSlider();
  const seoData = getSEOData('partnerCymmetri');
  return (
    <div className="cymmetri-page cym2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── HERO ── */}
      <section className="cym2-hero">
        <div className="cym2-hero-bg" aria-hidden="true"></div>
        <div className="cym2-hero-glow-left" aria-hidden="true"></div>
        <div className="cym2-hero-glow-right" aria-hidden="true"></div>
        <div className="cym2-hero-inner container">

          <div className="cym2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="cym2-headline">
              One of the Leading<br />
              Cymmetri<br />
              <span className="cym2-headline-accent">Partners</span>
            </h1>
            <div className="cym2-headline-rule"></div>
            <p className="cym2-desc">
              Complete IAM, IGA, Zero Trust, SSO, and MFA solutions for enterprise identity security - delivered by{' '}
              <a href="/contact-us" className="cym2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="cym2-feature-row">
              <div className="cym2-feat">
                <div className="cym2-feat-icon"><i className="fas fa-key"></i></div>
                <div className="cym2-feat-body"><strong>Identity Governance</strong><span>Control who has access to what, and why.</span></div>
              </div>
              <div className="cym2-feat">
                <div className="cym2-feat-icon"><i className="fas fa-lock"></i></div>
                <div className="cym2-feat-body"><strong>Zero Trust IAM</strong><span>Verify every identity before granting access.</span></div>
              </div>
              <div className="cym2-feat">
                <div className="cym2-feat-icon"><i className="fas fa-link"></i></div>
                <div className="cym2-feat-body"><strong>Seamless SSO &amp; MFA</strong><span>One secure login across all applications.</span></div>
              </div>
            </div>

            <div className="cym2-stats-row">
              <div className="cym2-stat-card"><i className="fas fa-building"></i><div><span className="cym2-stat-num">1000+</span><span className="cym2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span></div></div>
              <div className="cym2-stat-card"><i className="fas fa-headset"></i><div><span className="cym2-stat-num">6hr</span><span className="cym2-stat-lbl">ISSUE<br />RESOLUTION</span></div></div>
              <div className="cym2-stat-card cym2-stat-brand">
                <img loading="lazy" src="/assets/cyn.png" alt="Cymmetri" className="cym2-brand-logo" onError={e => { e.target.style.opacity = '0.3'; }} />
                <span className="cym2-stat-lbl">CERTIFIED<br />PARTNER</span>
              </div>
            </div>

            <div className="cym2-cta-row">
              <a href="/contact-us" className="cym2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="cym2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="cym2-product-glow" aria-hidden="true"></div>
            <div className="cym2-orbit-ring cym2-orbit-ring-1" aria-hidden="true">
              <div className="cym2-orbit-dot cym2-orbit-dot-1"></div>
              <div className="cym2-orbit-dot cym2-orbit-dot-2"></div>
              <div className="cym2-orbit-dot cym2-orbit-dot-3"></div>
            </div>
            <div className="cym2-orbit-ring cym2-orbit-ring-2" aria-hidden="true"></div>
            <div className="cym2-showcase">
              <div className="cym2-img-badge cym2-img-badge-tl"><i className="fas fa-key"></i> IAM & Zero Trust</div>
              <div className="cym2-img-badge cym2-img-badge-br"><i className="fas fa-shield-alt"></i> 1000+ Deployments</div>
              <img loading="lazy" src="/assets/cyn.png" alt="Cymmetri IAM Platform" className="cym2-hero-product-img" onError={e => { e.target.style.opacity = '0.3'; }} />
              <div className="cym2-platform" aria-hidden="true">
                <div className="cym2-plat-ring cym2-plat-ring-1"></div>
                <div className="cym2-plat-ring cym2-plat-ring-2"></div>
                <div className="cym2-plat-ring cym2-plat-ring-3"></div>
                <div className="cym2-plat-surface"></div>
              </div>
            </div>
            <div className="cym2-industry-strip">
              <span className="cym2-ind-item"><i className="fas fa-key"></i> IAM</span>
              <span className="cym2-ind-sep"></span>
              <span className="cym2-ind-item"><i className="fas fa-lock"></i> IGA</span>
              <span className="cym2-ind-sep"></span>
              <span className="cym2-ind-item"><i className="fas fa-link"></i> SSO</span>
              <span className="cym2-ind-sep"></span>
              <span className="cym2-ind-item"><i className="fas fa-mobile-alt"></i> MFA</span>
              <span className="cym2-ind-sep"></span>
              <span className="cym2-ind-item"><i className="fas fa-shield-alt"></i> Zero Trust</span>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section className="cym-certifications">
        <div className="container">
          <div className="aruba-section-header" data-aos="fade-up">
            <h2><i className="fas fa-award header-icon-glow"></i> Our Team Certifications</h2>
            <p>Cymmetri-certified professionals delivering proven expertise across identity and access management solutions</p>
          </div>
          <div className="cym-cert-static" data-aos="fade-up" data-aos-delay="100">
            <div className="aruba-cert-img-card">
              <img loading="lazy" src="/assets/cym.png" alt="Cymmetri Certificate" title="Cymmetri Certificate" />
              <div className="cert-card-overlay"></div>
              <span className="cert-tooltip">Cymmetri Certificate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-id-badge"></i><span>FREE IAM CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Secure Your Enterprise Identities?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Identity governance gaps in your current environment</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to implement Zero Trust access controls</span></div>
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

      <UseCaseSlider useCases={cymmetriUseCases} partnerColor="#6c2bd9" title="Cymmetri Use Cases" subtitle="Successfully Deployed by Trace Network across diverse industry sectors" />

      {/* Awards */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box"><div className="section-title__tagline-shape-1"></div><span className="section-title__tagline">Awards</span><div className="section-title__tagline-shape-2"></div></div>
          <h2 className="section-title__title">Recognized &amp; Trusted <span>for Delivering </span><br />Value &amp; Excellence</h2>
        </div>
        <div className="awards-slider"><div className="awards-track">
          <div className="award-card"><img loading="lazy" src="/assets/images/award/1.png" alt="Award 1" /><span>Sophos Best Performing Partner (2024)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/2.png" alt="Award 2" /><span>Certification of Completion Aruba Instant (2023)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/3.png" alt="Award 3" /><span>Core Champion HPE Aruba Networking (2023)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/4.png" alt="Award 4" /><span>Sophos Top Performer of the Region</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/5.png" alt="Award 5" /><span>Sophos Best Solution Partner</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/6.png" alt="Award 6" /><span>Certified by SonicWall (2022)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/7.png" alt="Award 7" /><span>HPE Aruba Accelerating Next (2022)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/11.png" alt="Award 11" /><span>Sophos Best Top Performing Partner (2020)</span></div>
          <div className="award-card"><img loading="lazy" src="/assets/images/award/19.png" alt="Award 19" /><span>Sophos Top Performer Of the Region</span></div>
        </div></div>
      </section>

      {/* Why Leading Brands */}
      <section className="premium-cards-section" style={{ marginTop: '-20px' }}>
        <div className="premium-container">
          <div className="section-title text-center pb-4"><h2 className="section-title__title">Why Leading<span> Brands</span> Choose<span> Trace</span></h2></div>
          <div className="premium-card-grid">
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" alt="certified" /></div><p><strong>Multi-vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof and scalable.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div><p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide enterprise IT security solutions across India.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div><p><strong>Customer-First, Value-Driven</strong> Our cost-effective services ensure maximum protection with right-sized solutions and lowest TCO.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div><p><strong>Local Presence with Rapid IT Support</strong> Engineers available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div><p><strong>ISO 27001-Certified Cybersecurity Provider</strong> Following stringent change management and compliance practices.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div><p><strong>Proven Deployment Framework</strong> Assess → Design → Deploy → Optimise → Support ensures maximum ROI.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div><p><strong>Flexible MSSP &amp; Security Pricing Models</strong> CapEx, OpEx, or MSSP models to align with your business goals.</p></div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="greythr-special-offer" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="greythr-offer-card">
            <div className="greythr-offer-glow-left" aria-hidden="true"></div>
            <div className="greythr-offer-glow-right" aria-hidden="true"></div>
            <div className="greythr-offer-stars" aria-hidden="true">
              <span className="gt-star gt-star-1">★</span><span className="gt-star gt-star-2">✦</span>
              <span className="gt-star gt-star-3">★</span><span className="gt-star gt-star-4">✦</span>
            </div>
            <div className="greythr-offer-content sify-offer-content-full">
              <div className="greythr-offer-badge"><i className="fas fa-gift"></i> SPECIAL OFFER</div>
              <h2 className="greythr-offer-title"><span className="greythr-offer-free">FREE POC</span> Available</h2>
              <div className="greythr-offer-pill"><span className="greythr-offer-pill-dot"></span>Exclusive Identity Security Offer</div>
              <p className="greythr-offer-desc">Experience Cymmetri's identity and access management platform firsthand. Discover identity governance gaps and streamline secure access across your enterprise under certified expert guidance.</p>
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-shield-alt"></i></div><span>No Upfront Cost<br />for POC Setup</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-sliders-h"></i></div><span>Tailored to Your<br />Identity Requirements</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-tag"></i></div><span>Exclusive Partner<br />Pricing Plans</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-headset"></i></div><span>Dedicated Expert<br />Support 24/7</span><div className="greythr-offer-feat-bar"></div></div>
              </div>
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['Identity & Access Management', 'Single Sign-On (SSO)', 'Multi-Factor Authentication', 'Identity Governance (IGA)'].map((m, i) => (
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

