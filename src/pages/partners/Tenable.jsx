import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Tenable.css';

const tenableUseCases = [
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Sector (OT & IT Security Visibility)', description: 'Problem: Manufacturing environments lacked visibility into IT and OT assets, increasing risk of vulnerabilities and cyber threats.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#tenable-manufacturing' },
  { id: 'enterprise', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Top IT Company / MNC (Enterprise Vulnerability Management)', description: 'Problem: Large IT organizations needed centralized visibility and control over thousands of assets and applications.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#tenable-enterprise' },
  { id: 'tourism', category: 'TOURISM', icon: 'fas fa-plane', title: 'Tourism Sector (Secure Customer Data & Digital Platforms)', description: 'Problem: Tourism businesses needed to protect customer data, booking platforms, and web applications from cyber threats.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#tenable-tourism' },
  { id: 'bfsi', category: 'BANKING', icon: 'fas fa-university', title: 'BFSI (Continuous Compliance & Vulnerability Monitoring)', description: 'Problem: Banks require continuous vulnerability scanning and compliance reporting across critical banking infrastructure.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#tenable-bfsi' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare IT (Medical Device & Network Security Scanning)', description: 'Problem: Hospitals need continuous visibility into connected medical devices, servers, and clinical networks for security.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#tenable-healthcare' },
  { id: 'cloud', category: 'CLOUD', icon: 'fas fa-cloud', title: 'Cloud & Hybrid (Multi-Cloud Vulnerability Management)', description: 'Problem: Organizations in hybrid and cloud environments need unified vulnerability management across on-prem and cloud assets.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#tenable-cloud' },
];

export default function Tenable() {
  useAwardsSlider();
  const seoData = getSEOData('partnerTenable');
  return (
    <div className="tenable-page tnb-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- HERO -- */}
      <section className="tnb2-hero">
        <div className="tnb2-hero-glow-left" aria-hidden="true"></div>
        <div className="tnb2-hero-glow-right" aria-hidden="true"></div>
        <div className="tnb2-hero-inner container">

          <div className="tnb2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="tnb2-headline">
              Premier Tenable Cyber Exposure<br />
              &amp; Vulnerability Management<br />
              <span className="tnb2-headline-accent">Partner</span>
            </h1>
            <div className="tnb2-headline-rule"></div>
            <p className="tnb2-desc">
              Continuously see, understand, and reduce cyber risk across hybrid and cloud environments - delivered by{' '}
              <a href="/contact-us" className="tnb2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="tnb2-feature-row">
              <div className="tnb2-feat">
                <div className="tnb2-feat-icon"><i className="fas fa-eye"></i></div>
                <div className="tnb2-feat-body"><strong>Continuous Visibility</strong><span>Unmatched exposure across hybrid &amp; cloud.</span></div>
              </div>
              <div className="tnb2-feat">
                <div className="tnb2-feat-icon"><i className="fas fa-bolt"></i></div>
                <div className="tnb2-feat-body"><strong>Automated Detection</strong><span>Faster scanning, smarter analysis.</span></div>
              </div>
              <div className="tnb2-feat">
                <div className="tnb2-feat-icon"><i className="fas fa-bullseye"></i></div>
                <div className="tnb2-feat-body"><strong>Risk-Based Prioritization</strong><span>Fix critical risks, minimize attack surface.</span></div>
              </div>
            </div>

            <div className="tnb2-stats-row">
              <div className="tnb2-stat-card"><i className="fas fa-shield-alt"></i><div><span className="tnb2-stat-num">6hr</span><span className="tnb2-stat-lbl">SUPPORT<br />RESOLUTION</span></div></div>
              <div className="tnb2-stat-card"><i className="fas fa-rocket"></i><div><span className="tnb2-stat-num">100%</span><span className="tnb2-stat-lbl">DEPLOYMENT<br />SUCCESS</span></div></div>
              <div className="tnb2-stat-card tnb2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/TENABLE-2.jpg" alt="Tenable" className="tnb2-brand-logo" onError={e=>{e.target.style.opacity='0.3';}} />
                <span className="tnb2-stat-lbl">CERTIFIED<br />PARTNER</span>
              </div>
            </div>

            <div className="tnb2-cta-row">
              <a href="/contact-us" className="tnb2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="tnb2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="tnb2-product-glow" aria-hidden="true"></div>
            <div className="tnb2-orbit-ring tnb2-orbit-ring-1" aria-hidden="true">
              <div className="tnb2-orbit-dot tnb2-orbit-dot-1"></div>
              <div className="tnb2-orbit-dot tnb2-orbit-dot-2"></div>
              <div className="tnb2-orbit-dot tnb2-orbit-dot-3"></div>
            </div>
            <div className="tnb2-orbit-ring tnb2-orbit-ring-2" aria-hidden="true"></div>
            <div className="tnb2-showcase">
              <div className="tnb2-img-badge tnb2-img-badge-tl"><i className="fas fa-shield-alt"></i> Cyber Exposure Mgmt</div>
              <img loading="lazy" src="/assets/tenable.png" alt="Tenable Cyber Exposure Platform" className="tnb2-hero-product-img" onError={e=>{e.target.style.opacity='0.3';}} />
              <div className="tnb2-platform" aria-hidden="true">
                <div className="tnb2-plat-ring tnb2-plat-ring-1"></div>
                <div className="tnb2-plat-ring tnb2-plat-ring-2"></div>
                <div className="tnb2-plat-ring tnb2-plat-ring-3"></div>
                <div className="tnb2-plat-surface"></div>
              </div>
            </div>
            <div className="tnb2-industry-strip">
              <span className="tnb2-ind-item"><i className="fas fa-server"></i> Infrastructure</span>
              <span className="tnb2-ind-sep"></span>
              <span className="tnb2-ind-item"><i className="fas fa-cloud"></i> Cloud</span>
              <span className="tnb2-ind-sep"></span>
              <span className="tnb2-ind-item"><i className="fas fa-mobile-alt"></i> OT/IoT</span>
              <span className="tnb2-ind-sep"></span>
              <span className="tnb2-ind-item"><i className="fas fa-code"></i> Applications</span>
              <span className="tnb2-ind-sep"></span>
              <span className="tnb2-ind-item"><i className="fas fa-user-shield"></i> Identity</span>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section className="tnb-certifications">
        <div className="container">
          <div className="aruba-section-header" data-aos="fade-up">
            <h2><i className="fas fa-award header-icon-glow"></i> Our Team Certifications</h2>
            <p>Tenable-certified professionals delivering proven expertise across vulnerability management and cyber exposure solutions</p>
          </div>
          <div className="tnb-cert-static" data-aos="fade-up" data-aos-delay="100">
            <div className="aruba-cert-img-card">
              <img loading="lazy" src="/assets/TENABLE certificate .png" alt="Tenable Certificate" title="Tenable Certificate" />
              <div className="cert-card-overlay"></div>
              <span className="cert-tooltip">Tenable Certificate</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section â€” above Use Cases */}
      <section
        className="tnb2-cta-with-bg"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 8, 20, 0.82), rgba(2, 11, 28, 0.90)), url(/assets/images/bggg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <div className="tnb2-cta-content">
            <h2 className="tnb2-cta-title">Ready to Reduce Your<br /><span className="tnb2-cta-title-accent">Cyber Exposure?</span></h2>
            <p className="tnb2-cta-subtitle">Speak with a senior security consultant today. In 30 minutes you'll know:</p>

            <ul className="tnb2-cta-list">
              <li>âœ“ Blind spots in your current vulnerability management</li>
              <li>âœ“ Quick wins to reduce attack surface immediately</li>
              <li>âœ“ An exact timeline &amp; cost estimate â€” no obligations</li>
            </ul>

            <div className="tnb2-cta-btn-wrapper">
              <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="tnb2-cta-btn-main">
                <span className="tnb2-cta-btn-text">Book Your Free Strategy Call</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <UseCaseSlider useCases={tenableUseCases} partnerColor="#38bdf8" title="Tenable Use Cases" subtitle="Successfully Deployed by Trace Network across diverse industry sectors" />

      {/* Awards */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box"><div className="section-title__tagline-shape-1"></div><span className="section-title__tagline">Awards</span><div className="section-title__tagline-shape-2"></div></div>
          <h2 className="section-title__title">Recognized &amp; Trusted <span>for Delivering </span><br />Value &amp; Excellence</h2>
        </div>
        <div className="awards-slider"><div className="awards-track">
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
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div><p><strong>Proven Deployment Framework</strong> Assess â†’ Design â†’ Deploy â†’ Optimise â†’ Support ensures maximum ROI.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div><p><strong>Flexible MSSP &amp; Security Pricing Models</strong> CapEx, OpEx, or MSSP models to align with your business goals.</p></div>
          </div>
        </div>
      </section>

      {/* â”€â”€ SPECIAL OFFER SECTION â”€â”€ */}
      <section className="greythr-special-offer" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="greythr-offer-card">
            
            {/* Ambient background glows */}
            <div className="greythr-offer-glow-left" aria-hidden="true"></div>
            <div className="greythr-offer-glow-right" aria-hidden="true"></div>

            {/* Twinkling stars */}
            <div className="greythr-offer-stars" aria-hidden="true">
              <span className="gt-star gt-star-1">â˜…</span>
              <span className="gt-star gt-star-2">âœ¦</span>
              <span className="gt-star gt-star-3">â˜…</span>
              <span className="gt-star gt-star-4">âœ¦</span>
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
                Exclusive Exposure Management Offer
              </div>

              <p className="greythr-offer-desc">
                Discover Tenable Nessus vulnerability management. Identify and secure exposure paths in your enterprise IT and cloud environments under certified expert guidance.
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
                  <span>Tailored to Your<br />Vulnerability Rules</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Exclusive Partner<br />Pricing Plans</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <span>Dedicated Expert<br />Support 24/7</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
              </div>

              {/* Modules List */}
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['Tenable Nessus Professional', 'Tenable.io Vulnerability Mgmt', 'Tenable.ot Cyber Security', 'Active Directory Security'].map((m, i) => (
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

