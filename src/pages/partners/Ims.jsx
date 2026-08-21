import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Ims.css';

const imsUseCases = [
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare & Hospitals (System & Network Monitoring)', description: 'Problem: Hospitals require reliable monitoring of healthcare systems, medical applications, servers, and network infrastructure to ensure uninterrupted patient services.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#ims-healthcare' },
  { id: 'government', category: 'GOVERNMENT', icon: 'fas fa-landmark', title: 'Government Organizations (Infrastructure Visibility)', description: 'Problem: Government departments require centralized monitoring and operational visibility across critical infrastructure and digital services.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#ims-government' },
  { id: 'it', category: 'IT & SOFTWARE', icon: 'fas fa-laptop-code', title: 'IT & Software Companies (Cloud & Virtualization Monitoring)', description: 'Problem: IT companies require centralized monitoring for cloud infrastructure, virtualization platforms, applications, and enterprise workloads.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#ims-it' },
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Industry (Production System Monitoring)', description: 'Problem: Manufacturing companies require continuous visibility into production systems, industrial infrastructure, and operational networks.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#ims-manufacturing' },
  { id: 'bfsi', category: 'BANKING', icon: 'fas fa-university', title: 'BFSI (High-Availability Infrastructure Monitoring)', description: 'Problem: Banks require continuous monitoring of critical banking systems, ATM networks, and financial data infrastructure.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#ims-bfsi' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education (Campus-Wide Network & System Monitoring)', description: 'Problem: Universities need centralized visibility across campus networks, servers, and digital learning applications.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#ims-education' },
];

export default function Ims() {
  useAwardsSlider();
  const seoData = getSEOData('partnerIms');
  return (
    <div className="ims-page ims-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- HERO -- */}
      <section className="ims2-hero">
        <div className="ims2-hero-aurora" aria-hidden="true"></div>
        <div className="ims2-hero-glow-left" aria-hidden="true"></div>
        <div className="ims2-hero-glow-right" aria-hidden="true"></div>
        <div className="ims2-hero-inner container">

          <div className="ims2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="ims2-headline">
              Premier EverestIMS Infrastructure<br />
              Monitoring &amp; IT Operations<br />
              <span className="ims2-headline-accent">Partner</span>
            </h1>
            <div className="ims2-headline-rule"></div>
            <p className="ims2-desc">
              AI-driven IT infrastructure monitoring, network observability, and IT operations management - delivered end-to-end by{' '}
              <a href="/contact-us" className="ims2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="ims2-feature-row">
              <div className="ims2-feat">
                <div className="ims2-feat-icon"><i className="fas fa-eye"></i></div>
                <div className="ims2-feat-body"><strong>Unified Monitoring</strong><span>Servers, networks, apps &amp; cloud in one platform.</span></div>
              </div>
              <div className="ims2-feat">
                <div className="ims2-feat-icon"><i className="fas fa-robot"></i></div>
                <div className="ims2-feat-body"><strong>AI-Driven IT Ops</strong><span>Intelligent automation for faster response.</span></div>
              </div>
              <div className="ims2-feat">
                <div className="ims2-feat-icon"><i className="fas fa-bolt"></i></div>
                <div className="ims2-feat-body"><strong>Real-Time Alerts</strong><span>Instant insights into infrastructure health.</span></div>
              </div>
            </div>

            <div className="ims2-stats-row">
              <div className="ims2-stat-card"><i className="fas fa-server"></i><div><span className="ims2-stat-num">1000+</span><span className="ims2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span></div></div>
              <div className="ims2-stat-card"><i className="fas fa-clock"></i><div><span className="ims2-stat-num">6hrs</span><span className="ims2-stat-lbl">ISSUE<br />RESOLUTION</span></div></div>
              <div className="ims2-stat-card ims2-stat-brand">
                <div className="ims2-brand-placeholder"><i className="fas fa-chart-network"></i></div>
                <span className="ims2-stat-lbl">INDIA<br />LEADING PARTNER</span>
              </div>
            </div>

            <div className="ims2-cta-row">
              <a href="/contact-us" className="ims2-btn-ghost">Talk to Our Experts <i className="fas fa-chevron-right"></i></a>
            </div>
          </div>

          <div className="ims2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="ims2-product-glow" aria-hidden="true"></div>
            <div className="ims2-showcase">
              <img loading="lazy" src="/assets/imf.png" alt="EverestIMS Network Monitoring Platform" className="ims2-hero-product-img" onError={e=>{e.target.style.opacity='0.3';}} />
            </div>
            <div className="ims2-industry-strip">
              <span className="ims2-ind-item"><i className="fas fa-server"></i> Servers</span>
              <span className="ims2-ind-sep"></span>
              <span className="ims2-ind-item"><i className="fas fa-globe"></i> Networks</span>
              <span className="ims2-ind-sep"></span>
              <span className="ims2-ind-item"><i className="fas fa-cloud"></i> Cloud</span>
              <span className="ims2-ind-sep"></span>
              <span className="ims2-ind-item"><i className="fas fa-database"></i> Databases</span>
              <span className="ims2-ind-sep"></span>
              <span className="ims2-ind-item"><i className="fas fa-code"></i> Applications</span>
            </div>
          </div>

        </div>
      </section>

      
      
      

      {/* Use Cases */}
      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-eye"></i><span>FREE MONITORING CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Gain Full IT Visibility?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Blind spots in your current IT infrastructure</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to reduce downtime with proactive monitoring</span></div>
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

      <UseCaseSlider useCases={imsUseCases} partnerColor="#1d6af5" title="EverestIMS Use Cases" subtitle="Successfully Deployed by Trace Network across diverse industry sectors" />

      {/* Awards */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box"><div className="section-title__tagline-shape-1"></div><span className="section-title__tagline">Awards</span><div className="section-title__tagline-shape-2"></div></div>
          <h2 className="section-title__title">Recognized &amp; Trusted <span>for Delivering </span><br />Value &amp; Excellence</h2>
        </div>
        <div className="awards-slider"><div className="awards-track">
          {[
            { n: 1,  label: 'Sophos Best Performing Partner (2024)' },
            { n: 2,  label: 'Certification of Completion Aruba Instant (2023)' },
            { n: 3,  label: 'Core Champion HPE Aruba Networking (2023)' },
            { n: 4,  label: 'Sophos Top Performer of the Region' },
            { n: 5,  label: 'Sophos Best Solution Partner' },
            { n: 6,  label: 'Certified by SonicWall (2022)' },
            { n: 7,  label: 'HPE Aruba Accelerating Next (2022)' },
            { n: 11, label: 'Sophos Best Top Performing Partner (2020)' },
            { n: 12, label: 'Sophos Platinum Partner (2019)' },
            { n: 13, label: 'Sophos Best Performing Partner (2018)' },
            { n: 14, label: 'Sophos Best Solution Partner (2018)' },
            { n: 15, label: 'Sophos Best Solution Partner (2017)' },
            { n: 16, label: 'Sophos Best Solution Partner (2016)' },
            { n: 17, label: 'Sophos Highest Achiever Business Partner (2015)' },
            { n: 18, label: 'Cyberoam Authorized Goal Partner (2015)' },
            { n: 19, label: 'Sophos Top Performer Of the Region' },
          ].map(({ n, label }) => (
            <div key={n} className="award-card">
              <img loading="lazy" src={`/assets/images/award/${n}.png`} alt={label} title={label} />
              <span>{label}</span>
            </div>
          ))}
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

      {/* ── SPECIAL OFFER SECTION ── */}
      <section className="greythr-special-offer ims-special-offer" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="greythr-offer-card ims-offer-card">

            {/* Ambient glows */}
            <div className="greythr-offer-glow-left" aria-hidden="true"></div>
            <div className="greythr-offer-glow-right" aria-hidden="true"></div>
            <div className="ims-offer-glow-center" aria-hidden="true"></div>

            {/* Twinkling stars */}
            <div className="greythr-offer-stars" aria-hidden="true">
              <span className="gt-star gt-star-1">★</span>
              <span className="gt-star gt-star-2">✦</span>
              <span className="gt-star gt-star-3">★</span>
              <span className="gt-star gt-star-4">✦</span>
            </div>

            {/* ── TOP HEADER ROW ── */}
            <div className="ims-offer-header">
              <div className="ims-offer-header-left">
                <div className="greythr-offer-badge">
                  <i className="fas fa-gift"></i> SPECIAL OFFER
                </div>
                <h2 className="greythr-offer-title">
                  <span className="greythr-offer-free">FREE POC</span> Available
                </h2>
                <div className="greythr-offer-pill">
                  <span className="greythr-offer-pill-dot"></span>
                  Exclusive SapphireIMS Service Management Offer
                </div>
              </div>
              <div className="ims-offer-header-right">
                <p className="greythr-offer-desc">
                  Experience the full power of SapphireIMS monitoring and IT Service Management — zero risk, zero commitment. Our engineers deploy a complete, tailored proof of concept in your live environment so you can evaluate results before you invest.
                </p>
                <Link to="/contact-us" className="greythr-contact-btn">
                  CLAIM YOUR FREE POC <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* ── DIVIDER ── */}
            <div className="ims-offer-divider" aria-hidden="true"></div>

            {/* ── FEATURE GRID ── */}
            <div className="ims-offer-features">
              <div className="ims-offer-feat-item">
                <div className="greythr-offer-feat-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="ims-offer-feat-body">
                  <strong>FREE Infrastructure Assessment</strong>
                  <span>Full audit of your servers, networks, apps &amp; cloud in one session.</span>
                </div>
              </div>
              <div className="ims-offer-feat-item">
                <div className="greythr-offer-feat-icon"><i className="fas fa-sliders-h"></i></div>
                <div className="ims-offer-feat-body">
                  <strong>FREE Monitoring Consultation</strong>
                  <span>30-minute deep-dive with a certified IMS specialist — no obligation.</span>
                </div>
              </div>
              <div className="ims-offer-feat-item">
                <div className="greythr-offer-feat-icon"><i className="fas fa-tag"></i></div>
                <div className="ims-offer-feat-body">
                  <strong>Tailored to Your IT Environment</strong>
                  <span>Custom deployment matching your exact infrastructure topology.</span>
                </div>
              </div>
              <div className="ims-offer-feat-item">
                <div className="greythr-offer-feat-icon"><i className="fas fa-headset"></i></div>
                <div className="ims-offer-feat-body">
                  <strong>Expert Guidance Throughout</strong>
                  <span>Dedicated Trace Network engineer from setup to sign-off.</span>
                </div>
              </div>
            </div>

            {/* ── MODULES ROW ── */}
            <div className="greythr-offer-modules-row">
              <span className="greythr-offer-modules-label">SOLUTIONS INCLUDED IN YOUR POC</span>
              <div className="greythr-offer-modules-list">
                {['IT Service Management', 'IT Asset Management', 'Enterprise Monitoring', 'Business Service Mgmt'].map((m, i) => (
                  <React.Fragment key={m}>
                    <span className="greythr-offer-module">
                      <i className="fas fa-check-circle"></i> {m}
                    </span>
                    {i < 3 && <span className="greythr-offer-sep">|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
