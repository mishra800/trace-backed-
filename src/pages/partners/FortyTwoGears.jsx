import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './FortyTwoGears.css';

const fortyTwoGearsUseCases = [
  { id: 'logistics', category: 'LOGISTICS', icon: 'fas fa-truck', title: 'Logistics & Transportation (Mobile Device Management)', description: 'Problem: Logistics companies require centralized management of rugged handheld devices, delivery tablets, and warehouse mobility infrastructure.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#fortytwo-logistics' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare & Government Hospitals (Clinical Device Management)', description: 'Problem: Hospitals require secure management of tablets, mobile devices, and healthcare systems used for patient management and clinical operations.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#fortytwo-healthcare' },
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Industry (Industrial Device Management)', description: 'Problem: Manufacturing companies require secure management of industrial handheld devices, tablets, and production floor mobility infrastructure.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#fortytwo-manufacturing' },
  { id: 'retail', category: 'RETAIL', icon: 'fas fa-shopping-cart', title: 'Retail & E-Commerce (POS & Kiosk Management)', description: 'Problem: Retail organizations require centralized management of POS devices, tablets, kiosks, and store mobility infrastructure across multiple branches.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#fortytwo-retail' },
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking & Financial Services (Secure Endpoint Management)', description: 'Problem: Banks require secure endpoint management for tablets, kiosks, and employee devices used for customer service and branch operations.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#fortytwo-banking' },
  { id: 'government', category: 'GOVERNMENT', icon: 'fas fa-university', title: 'Government Organizations (Field Device & Mobility Management)', description: 'Problem: Government departments require secure management of field devices, tablets, and mobility infrastructure for operational and citizen service applications.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#fortytwo-government' },
];

export default function FortyTwoGears() {
  useAwardsSlider();
  const seoData = getSEOData('partnerFortyTwoGears');
  return (
    <div className="ftg-page ftg-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- Hero -- */}
      <section className="ftg2-hero">
        <div className="ftg2-hero-bg" aria-hidden="true"></div>
        <div className="ftg2-hero-glow-left" aria-hidden="true"></div>
        <div className="ftg2-hero-glow-right" aria-hidden="true"></div>
        <div className="ftg2-hero-inner container">

          {/* LEFT */}
          <div className="ftg2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="ftg2-headline">
              Leading 42Gears Unified<br />
              Endpoint Management<br />
              <span className="ftg2-headline-accent">Partner</span>
            </h1>
            <div className="ftg2-headline-rule"></div>
            <p className="ftg2-desc">
              Securely manage, monitor, and control enterprise devices across Android, Windows,
              Linux, macOS, iOS, rugged devices, kiosks, and IoT - delivered by{' '}
              <a href="/contact-us" className="ftg2-desc-link">Trace Network &amp; Engineering.</a>
            </p>
            <div className="ftg2-feature-row">
              <div className="ftg2-feat">
                <div className="ftg2-feat-icon"><i className="fas fa-mobile-alt"></i></div>
                <div className="ftg2-feat-body">
                  <strong>Unified UEM</strong>
                  <span>All OS platforms managed from one console.</span>
                </div>
              </div>
              <div className="ftg2-feat">
                <div className="ftg2-feat-icon"><i className="fas fa-lock"></i></div>
                <div className="ftg2-feat-body">
                  <strong>Kiosk &amp; Lockdown</strong>
                  <span>Single/multi-app kiosk and device lockdown.</span>
                </div>
              </div>
              <div className="ftg2-feat">
                <div className="ftg2-feat-icon"><i className="fas fa-tools"></i></div>
                <div className="ftg2-feat-body">
                  <strong>Remote Support</strong>
                  <span>Real-time visibility and remote troubleshooting.</span>
                </div>
              </div>
            </div>
            <div className="ftg2-stats-row">
              <div className="ftg2-stat-card">
                <i className="fas fa-server"></i>
                <div>
                  <span className="ftg2-stat-num">1000+</span>
                  <span className="ftg2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="ftg2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="ftg2-stat-num">6hrs</span>
                  <span className="ftg2-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="ftg2-stat-card ftg2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/42-Gears.jpg" alt="42Gears" className="ftg2-brand-logo"
                  onError={(e) => { e.target.style.opacity = '0.3'; }} />
                <span className="ftg2-stat-lbl">UEM<br />CERTIFIED</span>
              </div>
            </div>
            <div className="ftg2-cta-row">
              <a href="/contact-us" className="ftg2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="ftg2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="ftg2-product-glow" aria-hidden="true"></div>
            <div className="ftg2-showcase">
              <img loading="lazy" src="/assets/42g.png" alt="42Gears UEM Platform"
                className="ftg2-hero-product-img"
                onError={(e) => { e.target.style.opacity = '0.3'; }} />
              <div className="ftg2-platform" aria-hidden="true">
                <div className="ftg2-plat-ring ftg2-plat-ring-1"></div>
                <div className="ftg2-plat-ring ftg2-plat-ring-2"></div>
                <div className="ftg2-plat-ring ftg2-plat-ring-3"></div>
                <div className="ftg2-plat-surface"></div>
              </div>
            </div>
            <div className="ftg2-industry-strip">
              <span className="ftg2-ind-item"><i className="fas fa-truck"></i> Logistics</span>
              <span className="ftg2-ind-sep"></span>
              <span className="ftg2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="ftg2-ind-sep"></span>
              <span className="ftg2-ind-item"><i className="fas fa-industry"></i> Manufacturing</span>
              <span className="ftg2-ind-sep"></span>
              <span className="ftg2-ind-item"><i className="fas fa-shopping-cart"></i> Retail</span>
              <span className="ftg2-ind-sep"></span>
              <span className="ftg2-ind-item"><i className="fas fa-university"></i> Banking</span>
            </div>
          </div>

        </div>
      </section>

      
      
      
      {/* Use Cases Slider */}

      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-mobile-alt"></i><span>FREE UEM CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Unify Your Enterprise Device Management?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three device management challenges in your setup</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to improve visibility and reduce IT overhead</span></div>
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
        useCases={fortyTwoGearsUseCases}
        partnerColor="#ff6b35"
        title="42Gears UEM Use Cases"
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
              <p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide endpoint management, vulnerability assessments, and enterprise IT security solutions across India.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div>
              <p><strong>Customer-First, Value-Driven</strong> Our cost-effective UEM services ensure maximum control with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO).</p>
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
              <p><strong>Proven UEM Deployment Framework</strong> Our structured approach, Assess → Design → Deploy → Optimise → Support, minimises downtime and ensures maximum ROI from your mobility investments.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div>
              <p><strong>Flexible MSSP &amp; Pricing Models</strong> Choose from CapEx, OpEx, or Managed Service models to align UEM investments with your organisation's business goals.</p>
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
              <div className="greythr-offer-pill"><span className="greythr-offer-pill-dot"></span>Exclusive UEM &amp; MDM Offer</div>
              <p className="greythr-offer-desc">Secure, monitor, and manage your enterprise endpoints with SureMDM. Deploy a tailored UEM proof of concept with full expert support.</p>
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-shield-alt"></i></div><span>No Upfront Cost<br />for POC Setup</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-sliders-h"></i></div><span>Tailored to Your<br />Device Fleet</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-tag"></i></div><span>Exclusive Pricing<br />on UEM Solutions</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-headset"></i></div><span>Expert Guidance<br />Throughout</span><div className="greythr-offer-feat-bar"></div></div>
              </div>
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['Mobile Device Management', 'Unified Endpoint Mgmt', 'SureMDM & SureLock', 'OS & Application Update'].map((m, i) => (
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

