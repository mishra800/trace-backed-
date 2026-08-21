import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './ManageEngine.css';

const manageEngineUseCases = [
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare & Pharmaceuticals (IT Management & Compliance)', description: 'Problem: Healthcare and pharmaceutical organizations require secure management of hospital systems, endpoints, user access, medical applications, and regulatory compliance.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#manageengine-healthcare' },
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Financial Services (Secure Access & Compliance Reporting)', description: 'Problem: Financial institutions require secure access control, continuous monitoring, compliance reporting, and centralized IT management for critical banking systems.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#manageengine-banking' },
  { id: 'textiles', category: 'MANUFACTURING', icon: 'fas fa-cut', title: 'Textiles, Apparel & Luxury Goods (ERP & IT Operations)', description: 'Problem: Textile and apparel organizations require centralized IT management across factories, warehouses, retail branches, and corporate offices.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#manageengine-textiles' },
  { id: 'agriculture', category: 'AGRICULTURE', icon: 'fas fa-seedling', title: 'Agriculture & Fertilizers (Remote Site IT Management)', description: 'Problem: Agriculture and fertilizer companies require reliable monitoring and management of IT infrastructure across production plants, remote offices, warehouses, and operational sites.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#manageengine-agriculture' }
];

export default function ManageEngine() {
  useAwardsSlider();
  const seoData = getSEOData('partnerManageengine');
  return (
    <div className="me-page me-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- Hero -- */}
      <section className="me2-hero">
        <div className="me2-hero-bg" aria-hidden="true"></div>
        <div className="me2-hero-glow-left" aria-hidden="true"></div>
        <div className="me2-hero-glow-right" aria-hidden="true"></div>
        <div className="me2-hero-inner container">

          {/* LEFT */}
          <div className="me2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="me2-headline">
              One of the Leading Zoho<br />
              ManageEngine Partners<br />
              <span className="me2-headline-accent">in INDIA</span>
            </h1>
            <div className="me2-headline-rule"></div>
            <p className="me2-desc">
              Complete enterprise IT management, network monitoring, identity management, endpoint
              management, and ITSM solutions – delivered by{' '}
              <a href="/contact-us" className="me2-desc-link">Trace Network &amp; Engineering.</a>
            </p>
            <div className="me2-feature-row">
              <div className="me2-feat">
                <div className="me2-feat-icon"><i className="fas fa-desktop"></i></div>
                <div className="me2-feat-body">
                  <strong>Complete IT Platform</strong>
                  <span>ITSM, Endpoint &amp; Network Management.</span>
                </div>
              </div>
              <div className="me2-feat">
                <div className="me2-feat-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="me2-feat-body">
                  <strong>Security &amp; Compliance</strong>
                  <span>PAM, SIEM, MFA &amp; patch management.</span>
                </div>
              </div>
              <div className="me2-feat">
                <div className="me2-feat-icon"><i className="fas fa-robot"></i></div>
                <div className="me2-feat-body">
                  <strong>IT Automation</strong>
                  <span>Ticketing, provisioning &amp; patch workflows.</span>
                </div>
              </div>
            </div>
            <div className="me2-stats-row">
              <div className="me2-stat-card">
                <i className="fas fa-server"></i>
                <div>
                  <span className="me2-stat-num">1000+</span>
                  <span className="me2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="me2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="me2-stat-num">6hrs</span>
                  <span className="me2-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="me2-stat-card me2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/Manage-Engine.jpg" alt="ManageEngine" className="me2-brand-logo"
                  onError={(e) => { e.target.style.opacity = '0.3'; }} />
                <span className="me2-stat-lbl">INDIA<br />LEADING PARTNER</span>
              </div>
            </div>
            <div className="me2-cta-row">
              <a href="/contact-us" className="me2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="me2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="me2-product-glow" aria-hidden="true"></div>
            <div className="me2-showcase">
              <img loading="lazy" src="/assets/manage.png" alt="ManageEngine IT Platform"
                className="me2-hero-product-img"
                onError={(e) => { e.target.style.opacity = '0.3'; }} />
              <div className="me2-platform" aria-hidden="true">
                <div className="me2-plat-ring me2-plat-ring-1"></div>
                <div className="me2-plat-ring me2-plat-ring-2"></div>
                <div className="me2-plat-ring me2-plat-ring-3"></div>
                <div className="me2-plat-surface"></div>
              </div>
            </div>
            <div className="me2-industry-strip">
              <span className="me2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="me2-ind-sep"></span>
              <span className="me2-ind-item"><i className="fas fa-university"></i> Banking</span>
              <span className="me2-ind-sep"></span>
              <span className="me2-ind-item"><i className="fas fa-cut"></i> Textiles</span>
              <span className="me2-ind-sep"></span>
              <span className="me2-ind-item"><i className="fas fa-seedling"></i> Agriculture</span>
              <span className="me2-ind-sep"></span>
              <span className="me2-ind-item"><i className="fas fa-building"></i> Enterprise</span>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section className="me-cert-section">
        <div className="container">
          <div className="me-cert-header">
            <h2><i className="fas fa-award me-cert-header-icon"></i> Our ManageEngine Certification</h2>
            <p>Certified ManageEngine professionals delivering proven IT management expertise</p>
          </div>
          <div className="me-cert-body">
            <div className="me-cert-card-wrap">
              <img loading="lazy"
                src="/assets/manage-engine.png"
                alt="ManageEngine Certified Partner"
                title="ManageEngine Certified Partner — Trace Network"
              />
              <div className="me-cert-card-glow"></div>
              <span className="me-cert-label">ManageEngine Certified Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-cogs"></i><span>FREE IT MGMT CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Unify Your IT Management?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three IT operations blind spots in your setup</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to automate and reduce manual overhead</span></div>
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

      {/* Use Cases Slider */}
      <UseCaseSlider
        useCases={manageEngineUseCases}
        partnerColor="#e1541a"
        title="ManageEngine Use Cases"
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
              <p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions for Top Campuses, Global Capability Centres, data centres, and enterprises across India.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div>
              <p><strong>Customer-First, Value-Driven</strong> Our cost-effective IT management services ensure maximum efficiency with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO).</p>
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
              <p><strong>Proven IT Management Deployment Framework</strong> Our structured approach, Assess → Design → Deploy → Optimise → Support, minimises downtime and ensures maximum ROI from your IT investments.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div>
              <p><strong>Flexible MSSP &amp; Security Pricing Models</strong> Choose from CapEx, OpEx, or Managed Security Service Provider (MSSP) models to align IT investments with your organisation's business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIAL OFFER SECTION — just above footer ── */}
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

            {/* Content */}
            <div className="greythr-offer-content sify-offer-content-full">
              <div className="greythr-offer-badge">
                <i className="fas fa-gift"></i> SPECIAL OFFER
              </div>

              <h2 className="greythr-offer-title">
                <span className="greythr-offer-free">FREE POC</span> Available
              </h2>

              <div className="greythr-offer-pill">
                <span className="greythr-offer-pill-dot"></span>
                Exclusive IT Management Offer
              </div>

              <p className="greythr-offer-desc">
                Simplify enterprise IT operations with ManageEngine solutions. Test active directory management, network monitoring, and help desk software in your network environment.
              </p>

              {/* Feature Grid */}
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon"><i className="fas fa-shield-alt"></i></div>
                  <span>No Upfront Cost<br />for POC Setup</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon"><i className="fas fa-sliders-h"></i></div>
                  <span>Tailored to Your<br />IT Environment</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon"><i className="fas fa-tag"></i></div>
                  <span>Exclusive Pricing<br />on ME Solutions</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon"><i className="fas fa-headset"></i></div>
                  <span>Expert Guidance<br />Throughout</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
              </div>

              {/* Modules List */}
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['ADAudit Plus & ADManager', 'OpManager NetFlow Analyzer', 'ServiceDesk Plus', 'Desktop Central UEM'].map((m, i) => (
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
