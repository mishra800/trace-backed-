import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './K7Security.css';

const k7UseCases = [
  {
    id: 'defence',
    category: 'DEFENCE',
    icon: 'fas fa-shield-alt',
    title: 'Defence Sector (High-Security Endpoint Protection)',
    description: 'Problem: Defence organizations require highly secure endpoint protection and strict access control to safeguard sensitive systems and classified information.',
    image: '/assets/images/use-cases/usecase1.png',
    linkTo: '/case-studies#k7security-defence'
  },
  {
    id: 'education',
    category: 'EDUCATION',
    icon: 'fas fa-graduation-cap',
    title: 'Education Sector (Secure Digital Learning Environment)',
    description: 'Problem: Educational institutions require secure systems for students, faculty, labs, and online learning platforms.',
    image: '/assets/images/use-cases/usecase2.png',
    linkTo: '/case-studies#k7security-education'
  },
  {
    id: 'retail',
    category: 'RETAIL',
    icon: 'fas fa-shopping-cart',
    title: 'Retail Sector (Secure POS & Branch Systems)',
    description: 'Problem: Retail businesses require protection for POS systems, billing servers, employee devices, and customer data.',
    image: '/assets/images/use-cases/usecase3.png',
    linkTo: '/case-studies#k7security-retail'
  },
  {
    id: 'banking',
    category: 'BANKING',
    icon: 'fas fa-university',
    title: 'Banking Sector (Compliance & Data Security)',
    description: 'Problem: Banks and financial institutions require strict endpoint security, data protection, and compliance-ready cybersecurity.',
    image: '/assets/images/use-cases/usecase4.png',
    linkTo: '/case-studies#k7security-banking'
  },
  {
    id: 'healthcare',
    category: 'HEALTHCARE',
    icon: 'fas fa-hospital',
    title: 'Healthcare Sector (Hospital & Patient Data Security)',
    description: 'Problem: Hospitals require secure systems for patient records, medical devices, and hospital networks.',
    image: '/assets/images/use-cases/usecase5.png',
    linkTo: '/case-studies#k7security-healthcare'
  },
  {
    id: 'enterprise',
    category: 'ENTERPRISE',
    icon: 'fas fa-building',
    title: 'Large-Scale Enterprises (Enterprise Endpoint Protection)',
    description: 'Problem: Enterprises require scalable cybersecurity solutions to protect users, systems, and business-critical data.',
    image: '/assets/images/use-cases/usecase6.png',
    linkTo: '/case-studies#k7security-enterprise'
  },
  {
    id: 'manufacturing',
    category: 'MANUFACTURING',
    icon: 'fas fa-industry',
    title: 'Manufacturing Industry (Industrial Endpoint Security)',
    description: 'Problem: Manufacturing environments require secure systems for production lines, industrial PCs, and connected devices.',
    image: '/assets/images/use-cases/usecase7.png',
    linkTo: '/case-studies#k7security-manufacturing'
  }
];

export default function K7Security() {
  useAwardsSlider();
  const seoData = getSEOData('partnerK7Security');
  return (
    <div className="k7-page k7v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── K7 Premium Hero ── */}
      <section className="k7v2-hero">
        <div className="k7v2-hero-bg" aria-hidden="true"></div>
        <div className="k7v2-hero-glow-left" aria-hidden="true"></div>
        <div className="k7v2-hero-glow-right" aria-hidden="true"></div>

        <div className="k7v2-hero-inner container">

          {/* LEFT CONTENT */}
          <div className="k7v2-left" data-aos="fade-right" data-aos-duration="900">

            <h1 className="k7v2-headline">
              Leading K7 Security<br />
              Solutions<br />
              <span className="k7v2-headline-accent">Partner</span>
            </h1>
            <div className="k7v2-headline-rule"></div>

            <p className="k7v2-desc">
              AI-driven threat detection, real-time endpoint protection, and centralized
              security management - delivered by{' '}
              <a href="/contact-us" className="k7v2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="k7v2-feature-row">
              <div className="k7v2-feat">
                <div className="k7v2-feat-icon"><i className="fas fa-virus-slash"></i></div>
                <div className="k7v2-feat-body">
                  <strong>Threat Protection</strong>
                  <span>AI-powered anti-malware &amp; ransomware defense.</span>
                </div>
              </div>
              <div className="k7v2-feat">
                <div className="k7v2-feat-icon"><i className="fas fa-tachometer-alt"></i></div>
                <div className="k7v2-feat-body">
                  <strong>Lightweight</strong>
                  <span>No system slowdowns, high performance.</span>
                </div>
              </div>
              <div className="k7v2-feat">
                <div className="k7v2-feat-icon"><i className="fas fa-desktop"></i></div>
                <div className="k7v2-feat-body">
                  <strong>Central Management</strong>
                  <span>Unified security dashboard control.</span>
                </div>
              </div>
            </div>

            <div className="k7v2-stats-row">
              <div className="k7v2-stat-card">
                <i className="fas fa-server"></i>
                <div>
                  <span className="k7v2-stat-num">1000+</span>
                  <span className="k7v2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="k7v2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="k7v2-stat-num">6hrs</span>
                  <span className="k7v2-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="k7v2-stat-card k7v2-stat-brand">
                <img loading="lazy"
                  src="/assets/images/k7.png"
                  alt="K7 Security"
                  className="k7v2-brand-logo"
                />
                <span className="k7v2-stat-lbl">INDIA<br />LEADING PARTNER</span>
              </div>
            </div>

            <div className="k7v2-cta-row">
              <a href="/contact-us" className="k7v2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>

          </div>

          {/* RIGHT - Product Showcase */}
          <div className="k7v2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">

            <div className="k7v2-product-glow" aria-hidden="true"></div>

            <div className="k7v2-showcase">
              <img loading="lazy"
                src="/assets/k7.png"
                alt="K7 Antivirus Endpoint Security"
                className="k7v2-hero-product-img"
                onError={(e) => { e.target.style.opacity = '0.3'; }}
              />
              <div className="k7v2-platform" aria-hidden="true">
                <div className="k7v2-plat-ring k7v2-plat-ring-1"></div>
                <div className="k7v2-plat-ring k7v2-plat-ring-2"></div>
                <div className="k7v2-plat-ring k7v2-plat-ring-3"></div>
                <div className="k7v2-plat-surface"></div>
              </div>
            </div>

            <div className="k7v2-industry-strip">
              <span className="k7v2-ind-item"><i className="fas fa-building"></i> Enterprises</span>
              <span className="k7v2-ind-sep"></span>
              <span className="k7v2-ind-item"><i className="fas fa-university"></i> Banking</span>
              <span className="k7v2-ind-sep"></span>
              <span className="k7v2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="k7v2-ind-sep"></span>
              <span className="k7v2-ind-item"><i className="fas fa-graduation-cap"></i> Education</span>
              <span className="k7v2-ind-sep"></span>
              <span className="k7v2-ind-item"><i className="fas fa-industry"></i> Manufacturing</span>
            </div>

          </div>

        </div>
      </section>

      
      
      
      {/* Use Cases Slider */}

      {/* Career CTA - above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-bug"></i><span>FREE SECURITY CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Strengthen Your Endpoint Security?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three malware risks in your current environment</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to protect devices without slowing them down</span></div>
            <div className="partner-cta-point"><i className="fas fa-calendar-alt"></i><span>An exact timeline & cost estimate - no obligations</span></div>
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
        useCases={k7UseCases}
        partnerColor="#e63946"
        title="K7 Security Use Cases"
        subtitle="Successfully Deployed by Trace Network across diverse industry sectors"
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
            <div className="award-card"><img loading="lazy" src="/assets/images/award/12.png" alt="Sophos Platinum Partner (2019)" /><span>Sophos Platinum Partner (2019)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/13.png" alt="Sophos Best Performing Partner (2018)" /><span>Sophos Best Performing Partner (2018)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/14.png" alt="Sophos Best Solution Partner (2018)" /><span>Sophos Best Solution Partner (2018)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/15.png" alt="Sophos Best Solution Partner (2017)" /><span>Sophos Best Solution Partner (2017)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/16.png" alt="Sophos Best Solution Partner (2016)" /><span>Sophos Best Solution Partner (2016)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/17.png" alt="Sophos Highest Achiever Business Partner (2015)" /><span>Sophos Highest Achiever Business Partner (2015)</span></div>
            <div className="award-card"><img loading="lazy" src="/assets/images/award/18.png" alt="Cyberoam Authorized Goal Partner (2015)" /><span>Cyberoam Authorized Goal Partner (2015)</span></div>
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
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" alt="certified" /></div><p><strong>Multi‑vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof, scalable, and tailored to your exact IT security needs.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div><p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions across India.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div><p><strong>Customer‑First, Value‑Driven</strong> Our cost-effective services ensure maximum protection with right-sized solutions and the lowest total cost of ownership.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div><p><strong>Local Presence with Rapid IT Support</strong> Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag for quick on-site support.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div><p><strong>ISO 27001‑Certified Cybersecurity Provider</strong> We follow stringent change management and compliance practices aligned with global information security standards.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div><p><strong>Proven Cybersecurity Deployment Framework</strong> Assess → Design → Deploy → Optimise → Support minimises downtime and ensures maximum ROI.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div><p><strong>Flexible MSSP &amp; Security Pricing Models</strong> Choose from CapEx, OpEx, or MSSP models to align security investments with your business goals.</p></div>
          </div>
        </div>
      </section>

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
                <span className="greythr-offer-free">FREE POC</span> Available
              </h2>

              <div className="greythr-offer-pill">
                <span className="greythr-offer-pill-dot"></span>
                Exclusive Endpoint Security Offer
              </div>

              <p className="greythr-offer-desc">
                Experience enterprise-grade endpoint security and antivirus protection firsthand - zero risk, zero commitment. Our team will deploy a complete proof of concept tailored to your environment.
              </p>

              {/* Feature Grid */}
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span>No Upfront Cost<br />for POC Setup</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-sliders-h"></i>
                  </div>
                  <span>Tailored to Your<br />Infrastructure</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Exclusive Pricing<br />on K7 Solutions</span>
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
                  {['K7 Endpoint Security', 'K7 Antivirus Premium', 'K7 Unified Threat Mgmt', 'Centralized Security Console'].map((m, i) => (
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

