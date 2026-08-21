import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Seceon.css';

const seceonUseCases = [
  {
    id: 'enterprise',
    category: 'ENTERPRISE',
    icon: 'fas fa-building',
    title: 'Enterprise Sector (Advanced Threat Detection & SOC)',
    description: 'Problem: Enterprises lacked real-time visibility and centralized threat detection across complex IT environments.',
    image: '/assets/images/use-cases/usecase6.png',
    linkTo: '/case-studies#seceon-enterprise'
  },
  {
    id: 'government',
    category: 'GOVERNMENT',
    icon: 'fas fa-university',
    title: 'Government Sector (Secure & Compliant Cybersecurity)',
    description: 'Problem: Government organizations required high-security monitoring and compliance-ready cybersecurity solutions.',
    image: '/assets/images/use-cases/usecase4.png',
    linkTo: '/case-studies#seceon-government'
  },
  {
    id: 'education',
    category: 'EDUCATION',
    icon: 'fas fa-graduation-cap',
    title: 'Education Sector (Campus Cybersecurity & Monitoring)',
    description: 'Problem: Educational institutions needed protection from cyber threats, ransomware, and unauthorized access.',
    image: '/assets/images/use-cases/usecase2.png',
    linkTo: '/case-studies#seceon-education'
  },
  {
    id: 'retail',
    category: 'RETAIL',
    icon: 'fas fa-shopping-cart',
    title: 'Retail & E-commerce Sector (Protecting Transactions & Data)',
    description: 'Problem: Retail and e-commerce businesses faced risks to customer data, payment systems, and online platforms.',
    image: '/assets/images/use-cases/usecase3.png',
    linkTo: '/case-studies#seceon-retail'
  }
];

export default function Seceon() {
  useAwardsSlider();
  const seoData = getSEOData('partnerSeceon');
  return (
    <div className="seceon-page sc2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── Seceon Premium Hero ── */}
      <section className="sc2-hero">
        <div className="sc2-hero-bg" aria-hidden="true"></div>
        <div className="sc2-hero-glow-left" aria-hidden="true"></div>
        <div className="sc2-hero-glow-right" aria-hidden="true"></div>

        <div className="sc2-hero-inner container">

          {/* LEFT CONTENT */}
          <div className="sc2-left" data-aos="fade-right" data-aos-duration="900">

            <h1 className="sc2-headline">
              Leading Seceon Cybersecurity<br />
              &amp; Threat Detection Solutions<br />
              <span className="sc2-headline-accent">Provider</span>
            </h1>
            <div className="sc2-headline-rule"></div>

            <p className="sc2-desc">
              Comprehensive threat detection, incident response, and risk visibility
              across modern IT environments - powered by AI and delivered by{' '}
              <a href="/contact-us" className="sc2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="sc2-feature-row">
              <div className="sc2-feat">
                <div className="sc2-feat-icon"><i className="fas fa-brain"></i></div>
                <div className="sc2-feat-body">
                  <strong>AI-Powered</strong>
                  <span>Machine learning &amp; behavioral analytics.</span>
                </div>
              </div>
              <div className="sc2-feat">
                <div className="sc2-feat-icon"><i className="fas fa-eye"></i></div>
                <div className="sc2-feat-body">
                  <strong>24/7 Monitoring</strong>
                  <span>Continuous SOC visibility across your stack.</span>
                </div>
              </div>
              <div className="sc2-feat">
                <div className="sc2-feat-icon"><i className="fas fa-bolt"></i></div>
                <div className="sc2-feat-body">
                  <strong>Auto Response</strong>
                  <span>Automated investigation &amp; threat containment.</span>
                </div>
              </div>
            </div>

            <div className="sc2-stats-row">
              <div className="sc2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="sc2-stat-num">24/7</span>
                  <span className="sc2-stat-lbl">SOC<br />MONITORING</span>
                </div>
              </div>
              <div className="sc2-stat-card">
                <i className="fas fa-layer-group"></i>
                <div>
                  <span className="sc2-stat-num">SIEM+XDR</span>
                  <span className="sc2-stat-lbl">UNIFIED<br />PLATFORM</span>
                </div>
              </div>
              <div className="sc2-stat-card sc2-stat-brand">
                <img loading="lazy"
                  src="/assets/images/partners/SECEON.jpg"
                  alt="Seceon"
                  className="sc2-brand-logo"
                />
                <span className="sc2-stat-lbl">CERTIFIED<br />PARTNER</span>
              </div>
            </div>

            <div className="sc2-cta-row">
              <a href="/contact-us" className="sc2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>

          </div>

          {/* RIGHT - Product Showcase */}
          <div className="sc2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">

            <div className="sc2-product-glow" aria-hidden="true"></div>

            <div className="sc2-showcase">
              <img loading="lazy"
                src="/assets/season.png"
                alt="Seceon AI-Driven Cybersecurity Platform"
                className="sc2-hero-product-img"
                onError={(e) => { e.target.style.opacity = '0.3'; }}
              />
              <div className="sc2-platform" aria-hidden="true">
                <div className="sc2-plat-ring sc2-plat-ring-1"></div>
                <div className="sc2-plat-ring sc2-plat-ring-2"></div>
                <div className="sc2-plat-ring sc2-plat-ring-3"></div>
                <div className="sc2-plat-surface"></div>
              </div>
            </div>

            <div className="sc2-industry-strip">
              <span className="sc2-ind-item"><i className="fas fa-building"></i> Enterprise</span>
              <span className="sc2-ind-sep"></span>
              <span className="sc2-ind-item"><i className="fas fa-university"></i> Government</span>
              <span className="sc2-ind-sep"></span>
              <span className="sc2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="sc2-ind-sep"></span>
              <span className="sc2-ind-item"><i className="fas fa-graduation-cap"></i> Education</span>
              <span className="sc2-ind-sep"></span>
              <span className="sc2-ind-item"><i className="fas fa-shopping-cart"></i> Retail</span>
            </div>

          </div>

        </div>
      </section>

      
      
      
      {/* Use Cases Slider */}

      {/* Career CTA - above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-chart-line"></i><span>FREE SOC CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Detect &amp; Respond to Threats in Real Time?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Threat detection blind spots in your current SOC setup</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to automate response and reduce detection time</span></div>
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
        useCases={seceonUseCases}
        partnerColor="#0099ff"
        title="Seceon Use Cases"
        subtitle="Successful Deployments by Trace Network across diverse industry sectors"
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
                Exclusive Cybersecurity Offer
              </div>

              <p className="greythr-offer-desc">
                Protect your enterprise with Seceon's AI/ML-driven threat detection and response. Deploy a complete, real-time security proof of concept under specialist supervision.
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
                  <span>Tailored to Your<br />Security Setup</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Exclusive Pricing<br />on Seceon Solutions</span>
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
                  {['aiSIEM Threat Detection', 'aiXDR Cyber Protection', 'ML Security Analytics', 'Real-Time Remediation'].map((m, i) => (
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

