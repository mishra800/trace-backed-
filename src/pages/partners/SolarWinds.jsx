import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './SolarWinds.css';

const solarwindsUseCases = [
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking & Financial Services (Critical Network Monitoring)', description: 'Problem: Banks require 24/7 monitoring of networks, applications, ATMs, and critical financial systems for uninterrupted services.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#solarwinds-banking' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare (Infrastructure Visibility)', description: 'Problem: Hospitals require continuous monitoring of servers, applications, medical systems, and network infrastructure.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#solarwinds-healthcare' },
  { id: 'government', category: 'GOVERNMENT', icon: 'fas fa-landmark', title: 'Government Organizations (Infrastructure Monitoring)', description: 'Problem: Government organizations require centralized visibility and monitoring for critical infrastructure.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#solarwinds-government' },
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Industry (Industrial Infrastructure)', description: 'Problem: Manufacturing companies require monitoring of industrial networks, production systems, and operational infrastructure.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#solarwinds-manufacturing' },
  { id: 'it', category: 'IT & SOFTWARE', icon: 'fas fa-laptop', title: 'IT & Software Companies (Data Center & Cloud Monitoring)', description: 'Problem: IT companies require centralized monitoring for cloud infrastructure, applications, and enterprise servers.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#solarwinds-it' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education Sector (Campus Infrastructure Monitoring)', description: 'Problem: Educational institutions require centralized visibility into campus networks, servers, and digital learning systems.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#solarwinds-education' },
];

export default function SolarWinds() {
  useAwardsSlider();
  const seoData = getSEOData('partnerSolarWinds');
  return (
    <div className="solarwinds-page sw2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── HERO ── */}
      <section className="sw2-hero">
        <div className="sw2-hero-glow-left" aria-hidden="true"></div>
        <div className="sw2-hero-glow-right" aria-hidden="true"></div>
        <div className="sw2-hero-inner container">

          <div className="sw2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="sw2-headline">
              Premier SolarWinds Network<br />
              &amp; IT Infrastructure Monitoring<br />
              <span className="sw2-headline-accent">Partner</span>
            </h1>
            <div className="sw2-headline-rule"></div>
            <p className="sw2-desc">
              Comprehensive IT infrastructure monitoring, network visibility, and performance management - delivered by{' '}
              <a href="/contact-us" className="sw2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="sw2-feature-row">
              <div className="sw2-feat">
                <div className="sw2-feat-icon"><i className="fas fa-satellite-dish"></i></div>
                <div className="sw2-feat-body"><strong>Network Monitoring</strong><span>Full visibility across all network devices.</span></div>
              </div>
              <div className="sw2-feat">
                <div className="sw2-feat-icon"><i className="fas fa-chart-bar"></i></div>
                <div className="sw2-feat-body"><strong>Performance Analytics</strong><span>Real-time dashboards and trend analysis.</span></div>
              </div>
              <div className="sw2-feat">
                <div className="sw2-feat-icon"><i className="fas fa-bell"></i></div>
                <div className="sw2-feat-body"><strong>Proactive Alerting</strong><span>Detect and resolve issues before they impact users.</span></div>
              </div>
            </div>

            <div className="sw2-stats-row">
              <div className="sw2-stat-card"><i className="fas fa-building"></i><div><span className="sw2-stat-num">1000+</span><span className="sw2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span></div></div>
              <div className="sw2-stat-card"><i className="fas fa-headset"></i><div><span className="sw2-stat-num">6hr</span><span className="sw2-stat-lbl">ISSUE<br />RESOLUTION</span></div></div>
              <div className="sw2-stat-card sw2-stat-brand">
                <img loading="lazy" src="/assets/solar.png" alt="SolarWinds" className="sw2-brand-logo" onError={e => { e.target.style.opacity = '0.3'; }} />
                <span className="sw2-stat-lbl">CERTIFIED<br />PARTNER</span>
              </div>
            </div>

            <div className="sw2-cta-row">
              <a href="/contact-us" className="sw2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="sw2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="sw2-product-glow" aria-hidden="true"></div>
            <div className="sw2-orbit-ring sw2-orbit-ring-1" aria-hidden="true">
              <div className="sw2-orbit-dot sw2-orbit-dot-1"></div>
              <div className="sw2-orbit-dot sw2-orbit-dot-2"></div>
              <div className="sw2-orbit-dot sw2-orbit-dot-3"></div>
            </div>
            <div className="sw2-orbit-ring sw2-orbit-ring-2" aria-hidden="true"></div>
            <div className="sw2-showcase">
              <div className="sw2-img-badge sw2-img-badge-tl"><i className="fas fa-satellite-dish"></i> IT Monitoring</div>
              <div className="sw2-img-badge sw2-img-badge-br"><i className="fas fa-shield-alt"></i> 1000+ Deployments</div>
              <img loading="lazy" src="/assets/solar.png" alt="SolarWinds IT Monitoring Platform" className="sw2-hero-product-img" onError={e => { e.target.style.opacity = '0.3'; }} />
              <div className="sw2-platform" aria-hidden="true">
                <div className="sw2-plat-ring sw2-plat-ring-1"></div>
                <div className="sw2-plat-ring sw2-plat-ring-2"></div>
                <div className="sw2-plat-ring sw2-plat-ring-3"></div>
                <div className="sw2-plat-surface"></div>
              </div>
            </div>
            <div className="sw2-industry-strip">
              <span className="sw2-ind-item"><i className="fas fa-network-wired"></i> Network</span>
              <span className="sw2-ind-sep"></span>
              <span className="sw2-ind-item"><i className="fas fa-server"></i> Servers</span>
              <span className="sw2-ind-sep"></span>
              <span className="sw2-ind-item"><i className="fas fa-database"></i> Database</span>
              <span className="sw2-ind-sep"></span>
              <span className="sw2-ind-item"><i className="fas fa-cloud"></i> Cloud</span>
              <span className="sw2-ind-sep"></span>
              <span className="sw2-ind-item"><i className="fas fa-shield-alt"></i> Security</span>
            </div>
          </div>

        </div>
      </section>

      
      
      

      {/* Use Cases */}
      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-chart-line"></i><span>FREE MONITORING CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Achieve Complete IT Visibility?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Blind spots in your current IT infrastructure visibility</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to improve monitoring and reduce downtime</span></div>
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

      <UseCaseSlider useCases={solarwindsUseCases} partnerColor="#f78a1d" title="SolarWinds Use Cases" subtitle="Successfully Deployed by Trace Network across diverse industry sectors" />

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
              <div className="greythr-offer-pill"><span className="greythr-offer-pill-dot"></span>Exclusive IT Monitoring Offer</div>
              <p className="greythr-offer-desc">Experience SolarWinds' full IT monitoring capabilities firsthand. Identify visibility gaps in your network, servers, and applications under certified expert guidance.</p>
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-shield-alt"></i></div><span>No Upfront Cost<br />for POC Setup</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-sliders-h"></i></div><span>Tailored to Your<br />Monitoring Needs</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-tag"></i></div><span>Exclusive Partner<br />Pricing Plans</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-headset"></i></div><span>Dedicated Expert<br />Support 24/7</span><div className="greythr-offer-feat-bar"></div></div>
              </div>
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['SolarWinds NPM', 'Server & App Monitor', 'Security Event Manager', 'Database Performance'].map((m, i) => (
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

