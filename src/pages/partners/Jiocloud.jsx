import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Jiocloud.css';

export default function Jiocloud() {
  useAwardsSlider();
  const seoData = getSEOData('partnerJiocloud') || {
    title: 'JioCloud Partner in India | Enterprise Cloud Solutions - Trace Network',
    description: 'Empower your business with JioCloud solutions for infrastructure, storage, backup, and disaster recovery. Get a free cloud assessment today.',
    keywords: 'JioCloud Partner, Jio Cloud India, Enterprise Cloud, Managed Cloud Services, Cloud Infrastructure'
  };

  return (
    <div className="jio-page jio-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      {/* -- Hero Section -- */}
      <section className="jio2-hero">
        <div className="jio2-hero-bg" aria-hidden="true"></div>
        <div className="jio2-hero-glow-left" aria-hidden="true"></div>
        <div className="jio2-hero-glow-right" aria-hidden="true"></div>
        <div className="jio2-hero-inner container">

          {/* LEFT COLUMN */}
          <div className="jio2-left">
            <div className="jio2-badge">
              <span className="jio2-badge-icon"><i className="fas fa-cloud"></i></span>
              Leading JioCloud Partner in India for 2025
            </div>
            <h1 className="jio2-headline">
              Helping Businesses Accelerate<br />
              <span className="jio2-headline-accent">Digital Transformation</span>
            </h1>
            <div className="jio2-headline-rule"></div>
            <p className="jio2-desc">
              with Secure, Scalable &amp; Reliable Cloud Solutions — delivered by{' '}
              <a href="/contact-us" className="jio2-desc-link">Trace Network &amp; Engineering.</a>
            </p>
            
            <p className="jio2-subtitle-text">
              Migrate, Manage, Backup, and Secure Your Business Applications with JioCloud Infrastructure, Storage, Disaster Recovery, and Managed Cloud Services.
            </p>

            <div className="jio2-feature-row">
              <div className="jio2-feat">
                <div className="jio2-feat-icon"><i className="fas fa-server"></i></div>
                <div className="jio2-feat-body">
                  <strong>JioCloud Infrastructure</strong>
                  <span>On-demand compute, scalable databases &amp; secure networking.</span>
                </div>
              </div>
              <div className="jio2-feat">
                <div className="jio2-feat-icon"><i className="fas fa-database"></i></div>
                <div className="jio2-feat-body">
                  <strong>Storage &amp; Backup</strong>
                  <span>High-durability storage with automated offsite backup solutions.</span>
                </div>
              </div>
              <div className="jio2-feat">
                <div className="jio2-feat-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="jio2-feat-body">
                  <strong>Disaster Recovery</strong>
                  <span>Minimize downtime with reliable failover &amp; enterprise recovery plans.</span>
                </div>
              </div>
            </div>

            <div className="jio2-stats-row">
              <div className="jio2-stat-card">
                <i className="fas fa-server"></i>
                <div>
                  <span className="jio2-stat-num">1000+</span>
                  <span className="jio2-stat-lbl">CLOUD<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="jio2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="jio2-stat-num">6hrs</span>
                  <span className="jio2-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="jio2-stat-card jio2-stat-brand">
                <img loading="lazy" src="/assets/images/jio.png" alt="Jio Cloud Logo" className="jio2-brand-logo" />
                <span className="jio2-stat-lbl">AUTHORIZED<br />PARTNER</span>
              </div>
            </div>

            <div className="jio2-cta-row">
              <Link to="/contact-us" className="jio2-btn-primary">
                Get a FREE Cloud Assessment <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact-us" className="jio2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="jio2-right">
            <div className="jio2-product-glow" aria-hidden="true"></div>
            <div className="jio2-showcase">
              <img loading="lazy" src="/assets/images/jio.png" alt="Jio Cloud Platform" className="jio2-hero-product-img" style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '16px' }} />
              <div className="jio2-platform" aria-hidden="true">
                <div className="jio2-plat-ring jio2-plat-ring-1"></div>
                <div className="jio2-plat-ring jio2-plat-ring-2"></div>
                <div className="jio2-plat-ring jio2-plat-ring-3"></div>
                <div className="jio2-plat-surface"></div>
              </div>
            </div>
            <div className="jio2-industry-strip">
              <span className="jio2-ind-item"><i className="fas fa-university"></i> Banking</span>
              <span className="jio2-ind-sep"></span>
              <span className="jio2-ind-item"><i className="fas fa-landmark"></i> Government</span>
              <span className="jio2-ind-sep"></span>
              <span className="jio2-ind-item"><i className="fas fa-graduation-cap"></i> Education</span>
              <span className="jio2-ind-sep"></span>
              <span className="jio2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="jio2-ind-sep"></span>
              <span className="jio2-ind-item"><i className="fas fa-industry"></i> Manufacturing</span>
            </div>
          </div>

        </div>
      </section>

      {/* -- Free HCI Consult Section -- */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-cubes"></i><span>FREE HCI CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Modernize Your IT Infrastructure?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Infrastructure bottlenecks holding your business back</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to reduce TCO and improve uptime</span></div>
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

      {/* -- Awards Section -- */}
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

      {/* -- Why Choose Trace? Section -- */}
      <section className="premium-cards-section" style={{ marginTop: '-20px' }}>
        <div className="premium-container">
          <div className="section-title text-center pb-4">
            <h2 className="section-title__title">Why Leading<span> Brands</span> Choose<span> Trace</span></h2>
          </div>
          <div className="premium-card-grid">
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/certified.png" alt="certified" />
              </div>
              <p><strong>Multi‑vendor, Certified Network Security Expertise</strong>
                Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof, scalable, and tailored to your exact IT security needs.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/leadership.png" alt="leadership" />
              </div>
              <p><strong>20+ Years of Cybersecurity Leadership</strong>
                With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions for Top Campuses, Global Capability Centres or Special Economic Zones, data centres, and enterprises across India.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/luxury.png" alt="luxury" />
              </div>
              <p><strong>Customer‑First, Value‑Driven</strong>
                Our cost-effective cybersecurity services ensure maximum protection with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO) for businesses.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" />
              </div>
              <p><strong>Local Presence with Rapid IT Support</strong>
                Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag, ensuring quick on-site support and reliable network security services whenever you need them.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" />
              </div>
              <p><strong>ISO 27001‑Certified Cybersecurity Provider</strong>
                As an ISO 27001-certified company, we follow stringent change management and compliance practices, aligning with global information security standards to protect your business.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/frame.png" alt="frame" />
              </div>
              <p><strong>Proven Cybersecurity Deployment Framework</strong>
                Our structured approach, Assess → Design → Deploy → Optimise → Support, minimises downtime, enhances performance, and ensures maximum ROI from your IT and cybersecurity investments.
              </p>
            </div>

            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/agile.png" alt="agile" />
              </div>
              <p><strong>Flexible MSSP & Security Pricing Models</strong>
                Choose from CapEx, OpEx, or Managed Security Service Provider (MSSP) models to align IT security investments with your organisation's business goals and cash-flow requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Special Offer / FREE POC Section -- */}
      <section className="jio-special-offer">
        <div className="container">
          <div className="jio-offer-card">
            <div className="jio-offer-glow-left" aria-hidden="true"></div>
            <div className="jio-offer-glow-right" aria-hidden="true"></div>
            <div className="jio-offer-content">
              <div className="jio-offer-badge"><i className="fas fa-gift"></i> SPECIAL OFFER</div>
              <h2 className="jio-offer-title"><span className="jio-offer-free">FREE POC</span> Available</h2>
              <div className="jio-offer-pill"><span className="jio-offer-pill-dot"></span>Exclusive JioCloud Offer</div>
              <p className="jio-offer-desc">Experience the speed, scalability, and security of the JioCloud platform. Set up a tailored cloud proof of concept with Trace Network experts to validate migration plans risk-free.</p>
              <div className="jio-offer-grid">
                <div className="jio-offer-feature">
                  <div className="jio-offer-feat-icon"><i className="fas fa-shield-alt"></i></div>
                  <span>No Upfront Cost<br />for POC Setup</span>
                </div>
                <div className="jio-offer-feature">
                  <div className="jio-offer-feat-icon"><i className="fas fa-sliders-h"></i></div>
                  <span>Tailored to Your<br />Cloud Needs</span>
                </div>
                <div className="jio-offer-feature">
                  <div className="jio-offer-feat-icon"><i className="fas fa-tag"></i></div>
                  <span>Exclusive Pricing<br />on JioCloud</span>
                </div>
                <div className="jio-offer-feature">
                  <div className="jio-offer-feat-icon"><i className="fas fa-headset"></i></div>
                  <span>Expert Guidance<br />Throughout</span>
                </div>
              </div>
              <Link to="/contact-us" className="jio-contact-btn">CONTACT TRACE NETWORK <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
