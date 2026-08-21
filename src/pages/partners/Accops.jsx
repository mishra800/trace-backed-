import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Accops.css';

const accopsUseCases = [
  { id: 'fmcg', category: 'FMCG', icon: 'fas fa-shopping-cart', title: 'Fast-Moving Consumer Goods (Distributed Workforce & Supply Chain Security)', description: 'Problem: FMCG organizations require secure remote access and centralized application access for distributed sales teams, warehouses, and branch offices.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#accops-fmcg' },
  { id: 'metals', category: 'METALS & MINING', icon: 'fas fa-hammer', title: 'Metals & Mining (Secure Connectivity for Remote Sites)', description: 'Problem: Mining organizations require secure connectivity between sites, operational centers, and corporate offices while protecting critical operational data.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#accops-metals' },
  { id: 'industrials', category: 'INDUSTRIALS', icon: 'fas fa-industry', title: 'Capital Goods & Industrials (ERP & Industrial Application Security)', description: 'Problem: Industrial organizations require secure access to ERP systems, production applications, engineering platforms, and remote operational environments.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#accops-industrials' },
  { id: 'enterprise', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Large Enterprises (Zero Trust Hybrid Workforce)', description: 'Problem: Large enterprises need Zero Trust access to corporate resources for thousands of hybrid workers across multiple locations.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#accops-enterprise' },
  { id: 'bfsi', category: 'BANKING', icon: 'fas fa-university', title: 'Banking & Financial Services (Secure Compliant Access)', description: 'Problem: Financial institutions require compliant, auditable remote access with MFA and strong identity verification for sensitive financial data.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#accops-bfsi' },
];

export default function Accops() {
  useAwardsSlider();
  const seoData = getSEOData('partnerAccops');
  return (
    <div className="accops-page acp-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- HERO -- */}
      <section className="acp2-hero">
        <div className="acp2-hero-glow-left" aria-hidden="true"></div>
        <div className="acp2-hero-glow-right" aria-hidden="true"></div>

        {/* Animated background layer */}
        <div className="acp2-hero-bg-anim" aria-hidden="true">
          {/* Moving grid */}
          <div className="acp2-bg-grid"></div>
          {/* Floating orbs */}
          <div className="acp2-orb acp2-orb-1"></div>
          <div className="acp2-orb acp2-orb-2"></div>
          <div className="acp2-orb acp2-orb-3"></div>
          <div className="acp2-orb acp2-orb-4"></div>
          {/* Rotating rings */}
          <div className="acp2-ring acp2-ring-1"></div>
          <div className="acp2-ring acp2-ring-2"></div>
          <div className="acp2-ring acp2-ring-3"></div>
          {/* Particle dots */}
          <div className="acp2-particles">
            {[...Array(20)].map((_,i) => <span key={i} className={`acp2-particle acp2-p-${i+1}`}></span>)}
          </div>
          {/* Scanning beam */}
          <div className="acp2-scan-beam"></div>
        </div>

        <div className="acp2-hero-inner container">

          <div className="acp2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="acp2-headline">
              Leading Accops Partner for<br />
              Secure Digital<br />
              <span className="acp2-headline-accent">Workspaces</span>
            </h1>
            <div className="acp2-headline-rule"></div>
            <p className="acp2-desc">
              Secure remote access, ZTNA, virtual desktop infrastructure, and digital workspace solutions for modern hybrid enterprises delivered by{' '}
              <a href="/contact-us" className="acp2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="acp2-feature-row">
              <div className="acp2-feat">
                <div className="acp2-feat-icon"><i className="fas fa-user-lock"></i></div>
                <div className="acp2-feat-body"><strong>Zero Trust Network Access</strong><span>Verify every user, every device, every time.</span></div>
              </div>
              <div className="acp2-feat">
                <div className="acp2-feat-icon"><i className="fas fa-desktop"></i></div>
                <div className="acp2-feat-body"><strong>Virtual Desktop Infrastructure</strong><span>Centralized, secure desktop delivery.</span></div>
              </div>
              <div className="acp2-feat">
                <div className="acp2-feat-icon"><i className="fas fa-key"></i></div>
                <div className="acp2-feat-body"><strong>Multi-Factor Authentication</strong><span>Advanced identity verification for all users.</span></div>
              </div>
            </div>

            <div className="acp2-stats-row">
              <div className="acp2-stat-card"><i className="fas fa-shield-alt"></i><div><span className="acp2-stat-num">1000+</span><span className="acp2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span></div></div>
              <div className="acp2-stat-card"><i className="fas fa-clock"></i><div><span className="acp2-stat-num">6hrs</span><span className="acp2-stat-lbl">ISSUE<br />RESOLUTION</span></div></div>
              <div className="acp2-stat-card acp2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/ACCOPS.jpg" alt="Accops" className="acp2-brand-logo" onError={e=>{e.target.style.opacity='0.3';}} />
                <span className="acp2-stat-lbl">ASIA<br />PARTNER</span>
              </div>
            </div>

            <div className="acp2-cta-row">
              <a href="/contact-us" className="acp2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="acp2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="acp2-product-glow" aria-hidden="true"></div>
            <div className="acp2-showcase">
              <img loading="lazy" src="/assets/accops.png" alt="Accops ZTNA Platform" className="acp2-hero-product-img" onError={e=>{e.target.style.opacity='0.3';}} />
            </div>
            <div className="acp2-industry-strip">
              <span className="acp2-ind-item"><i className="fas fa-building"></i> Enterprises</span>
              <span className="acp2-ind-sep"></span>
              <span className="acp2-ind-item"><i className="fas fa-industry"></i> Industrials</span>
              <span className="acp2-ind-sep"></span>
              <span className="acp2-ind-item"><i className="fas fa-shopping-cart"></i> FMCG</span>
              <span className="acp2-ind-sep"></span>
              <span className="acp2-ind-item"><i className="fas fa-hammer"></i> Mining</span>
              <span className="acp2-ind-sep"></span>
              <span className="acp2-ind-item"><i className="fas fa-university"></i> Banking</span>
            </div>
          </div>

        </div>
      </section>

      
      
      

      {/* Use Cases */}
      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-user-lock"></i><span>FREE ZERO TRUST CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Adopt Zero Trust Security?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three access risks in your current environment</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>How ZTNA can eliminate them with zero hardware changes</span></div>
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

      <UseCaseSlider useCases={accopsUseCases} partnerColor="#8b5cf6" title="Accops Use Cases" subtitle="Successfully Deployed by Trace Network across diverse industry sectors" />

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
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" alt="certified" /></div><p><strong>Multi-vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers future-proof, scalable cybersecurity solutions.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div><p><strong>20+ Years of Cybersecurity Leadership</strong> Two decades of proven expertise in enterprise IT security solutions across India.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div><p><strong>Customer-First, Value-Driven</strong> Cost-effective solutions ensuring maximum protection and lowest TCO for businesses.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div><p><strong>Local Presence with Rapid IT Support</strong> Engineers available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div><p><strong>ISO 27001-Certified Cybersecurity Provider</strong> Stringent change management and global compliance practices.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div><p><strong>Proven Deployment Framework</strong> Assess → Design → Deploy → Optimise → Support for maximum ROI.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div><p><strong>Flexible MSSP &amp; Security Pricing Models</strong> CapEx, OpEx, or MSSP models aligned with your goals.</p></div>
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
                Exclusive ZTNA & VDI Offer
              </div>

              <p className="greythr-offer-desc">
                Experience the power of Accops secure access and VDI solutions firsthand — zero risk, zero commitment. Our team will set up a complete proof of concept tailored to your environment so you can see the results before you invest.
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
                  <span>Exclusive Pricing<br />on Accops Solutions</span>
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
                  {['ZTNA & VDI', 'Secure Remote Access', 'Application Virtualization', 'MFA & SSO'].map((m, i) => (
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

