import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Safetica.css';

const safeticaUseCases = [
  { id: 'defence', category: 'DEFENCE', icon: 'fas fa-shield-alt', title: 'Defence Sector (Preventing Sensitive Data Leakage)', description: 'Problem: Defence organizations require strict monitoring and prevention of confidential data leakage across endpoints and removable devices.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#safetica-defence' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education Sector (Protecting Student & Institutional Data)', description: 'Problem: Educational institutions need to secure student records, examination data, and internal documents while supporting BYOD environments.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#safetica-education' },
  { id: 'retail', category: 'RETAIL', icon: 'fas fa-shopping-cart', title: 'Retail Sector (Securing Customer & POS Data)', description: 'Problem: Retail businesses require protection for customer information, billing systems, POS data, and branch operations.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#safetica-retail' },
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking Sector (Compliance & Data Security)', description: 'Problem: Banks require strict control over confidential financial data, customer records, and regulatory compliance.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#safetica-banking' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare Sector (Protecting Patient Information)', description: 'Problem: Hospitals and healthcare organizations need to secure patient records, medical reports, and sensitive healthcare data.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#safetica-healthcare' },
  { id: 'enterprise', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Large Enterprises (Enterprise Data Protection)', description: 'Problem: Large organizations require centralized visibility and control over data movement across departments and branch locations.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#safetica-enterprise' },
];

export default function Safetica() {
  useAwardsSlider();
  const seoData = getSEOData('partnerSafetica');
  return (
    <div className="safetica-page sft-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── HERO ── */}
      <section className="sft2-hero">
        <div className="sft2-hero-glow-left" aria-hidden="true"></div>
        <div className="sft2-hero-glow-right" aria-hidden="true"></div>
        <div className="sft2-hero-inner container">

          <div className="sft2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="sft2-headline">
              Leading Safetica Data<br />
              Loss Prevention<br />
              <span className="sft2-headline-accent">Partner</span>
            </h1>
            <div className="sft2-headline-rule"></div>
            <p className="sft2-desc">
              Advanced Data Loss Prevention (DLP) and Insider Risk Management solutions protecting sensitive business data from leaks, threats, and unauthorized transfers – delivered by{' '}
              <a href="/contact-us" className="sft2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="sft2-feature-row">
              <div className="sft2-feat">
                <div className="sft2-feat-icon"><i className="fas fa-lock"></i></div>
                <div className="sft2-feat-body"><strong>Advanced DLP Protection</strong><span>Prevent data leakage via USB, email, cloud &amp; web.</span></div>
              </div>
              <div className="sft2-feat">
                <div className="sft2-feat-icon"><i className="fas fa-user-secret"></i></div>
                <div className="sft2-feat-body"><strong>Insider Risk Management</strong><span>Detect risky behavior before incidents occur.</span></div>
              </div>
              <div className="sft2-feat">
                <div className="sft2-feat-icon"><i className="fas fa-eye"></i></div>
                <div className="sft2-feat-body"><strong>Real-Time Visibility</strong><span>Centralized dashboard for all security events.</span></div>
              </div>
            </div>

            <div className="sft2-stats-row">
              <div className="sft2-stat-card"><i className="fas fa-shield-alt"></i><div><span className="sft2-stat-num">1000+</span><span className="sft2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span></div></div>
              <div className="sft2-stat-card"><i className="fas fa-clock"></i><div><span className="sft2-stat-num">6hrs</span><span className="sft2-stat-lbl">ISSUE<br />RESOLUTION</span></div></div>
              <div className="sft2-stat-card sft2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/SafeticaONE.jpg" alt="Safetica" className="sft2-brand-logo" onError={e=>{e.target.style.opacity='0.3';}} />
                <span className="sft2-stat-lbl">SAARC<br />PARTNER</span>
              </div>
            </div>

            <div className="sft2-cta-row">
              <a href="/contact-us" className="sft2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="sft2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="sft2-product-glow" aria-hidden="true"></div>
            <div className="sft2-showcase">
              <img loading="lazy" src="/assets/sa.png" alt="Safetica DLP Platform" className="sft2-hero-product-img" onError={e=>{e.target.style.opacity='0.3';}} />
            </div>
            <div className="sft2-industry-strip">
              <span className="sft2-ind-item"><i className="fas fa-university"></i> Banking</span>
              <span className="sft2-ind-sep"></span>
              <span className="sft2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="sft2-ind-sep"></span>
              <span className="sft2-ind-item"><i className="fas fa-shield-alt"></i> Defence</span>
              <span className="sft2-ind-sep"></span>
              <span className="sft2-ind-item"><i className="fas fa-building"></i> Enterprise</span>
              <span className="sft2-ind-sep"></span>
              <span className="sft2-ind-item"><i className="fas fa-industry"></i> Manufacturing</span>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section className="sft-certifications">
        <div className="container">
          <div className="aruba-section-header" data-aos="fade-up">
            <h2><i className="fas fa-award header-icon-glow"></i> Our Team Certifications</h2>
            <p>Safetica-certified professionals delivering proven expertise across data loss prevention and insider risk management</p>
          </div>
          <div className="sft-cert-static" data-aos="fade-up" data-aos-delay="100">
            <div className="aruba-cert-img-card">
              <img loading="lazy" src="/assets/safe.png" alt="Safetica Certificate" title="Safetica Certificate" />
              <div className="cert-card-overlay"></div>
              <span className="cert-tooltip">Safetica Certificate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-file-alt"></i><span>FREE DLP CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Stop Data Loss Before It Happens?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three data leak risks in your current environment</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>How Safetica DLP can eliminate them in days</span></div>
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

      <UseCaseSlider useCases={safeticaUseCases} partnerColor="#ef4444" title="Safetica DLP Use Cases" subtitle="Successfully Deployed by Trace Network across diverse industry sectors" />

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
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" alt="certified" /></div><p><strong>Multi‑vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers future-proof, scalable cybersecurity solutions.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div><p><strong>20+ Years of Cybersecurity Leadership</strong> Two decades of proven expertise in enterprise IT security across India.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div><p><strong>Customer‑First, Value‑Driven</strong> Maximum protection with right-sized solutions and lowest TCO.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div><p><strong>Local Presence with Rapid IT Support</strong> Engineers available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div><p><strong>ISO 27001‑Certified Cybersecurity Provider</strong> Stringent change management and global compliance practices.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div><p><strong>Proven Deployment Framework</strong> Assess → Design → Deploy → Optimise → Support for maximum ROI.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div><p><strong>Flexible MSSP Pricing Models</strong> CapEx, OpEx, or MSSP models aligned with your goals.</p></div>
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
                <span className="greythr-offer-free">FREE DLP</span> Assessment
              </h2>

              <div className="greythr-offer-pill">
                <span className="greythr-offer-pill-dot"></span>
                Exclusive Data Security Offer
              </div>

              <p className="greythr-offer-desc">
                Experience the power of Safetica Data Loss Prevention and Insider Risk Management firsthand. Our certified experts will conduct a complete assessment of your data security needs and set up a tailored proof of concept – absolutely free, no commitment required.
              </p>

              {/* Feature Grid */}
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span>Free DLP<br />Assessment Scan</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-sliders-h"></i>
                  </div>
                  <span>Insider Risk<br />Analysis Report</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Exclusive Pricing<br />on Safetica Solutions</span>
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
                  {['Data Loss Prevention', 'Insider Risk Management', 'Workspace Analytics', 'Data Classification'].map((m, i) => (
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

