import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Arcon.css';

const arconUseCases = [
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking & Financial Services (Privileged Access Control)', description: 'Problem: Banks require strict control over privileged accounts and admin access to protect critical financial systems and sensitive customer data from insider threats.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#arcon-banking' },
  { id: 'government', category: 'GOVERNMENT & DEFENCE', icon: 'fas fa-shield-alt', title: 'Government & Defence (Secure Admin Access & Compliance)', description: 'Problem: Government organizations require centralized control over administrator access to critical infrastructure, ensuring compliance and preventing unauthorized access.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#arcon-government' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare & Hospitals (Clinical System Access Security)', description: 'Problem: Hospitals require audited and controlled access to patient databases, medical systems, and clinical applications to prevent data breaches.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#arcon-healthcare' },
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Industry (OT & IT Privileged Access)', description: 'Problem: Manufacturing organizations require controlled privileged access across production systems, OT environments, and IT infrastructure.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#arcon-manufacturing' },
  { id: 'it', category: 'IT & SOFTWARE', icon: 'fas fa-laptop', title: 'IT & Software Companies (Cloud & DevOps Access Governance)', description: 'Problem: IT companies require governed privileged access for DevOps, cloud infrastructure, and multi-tenant environments.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#arcon-it' },
  { id: 'enterprise', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Large Enterprises (Enterprise PAM & Identity Governance)', description: 'Problem: Enterprises require unified privileged access management across on-premises, hybrid cloud, and multi-location environments.', image: '/assets/images/use-cases/usecase3.png', linkTo: '/case-studies#arcon-enterprise' },
];

export default function Arcon() {
  useAwardsSlider();
  const seoData = getSEOData('partnerArcon');
  return (
    <div className="arcon-page arcon-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* ── Hero ── */}
      <section className="arcon2-hero">
        <div className="arcon2-hero-bg" aria-hidden="true"></div>
        <div className="arcon2-hero-glow-left" aria-hidden="true"></div>
        <div className="arcon2-hero-glow-right" aria-hidden="true"></div>
        <div className="arcon2-hero-inner container">

          {/* LEFT */}
          <div className="arcon2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="arcon2-headline">
              ARCON Privileged<br />
              Access Management<br />
              <span className="arcon2-headline-accent">Solutions Provider</span>
            </h1>
            <div className="arcon2-headline-rule"></div>
            <p className="arcon2-desc">
              Enterprise PAM, identity security, privileged session management, and zero-trust access
              governance - delivered by{' '}
              <a href="/contact-us" className="arcon2-desc-link">Trace Network &amp; Engineering.</a>
            </p>
            <div className="arcon2-feature-row">
              <div className="arcon2-feat">
                <div className="arcon2-feat-icon"><i className="fas fa-user-lock"></i></div>
                <div className="arcon2-feat-body">
                  <strong>Privileged Access Mgmt</strong>
                  <span>Control &amp; audit all privileged accounts.</span>
                </div>
              </div>
              <div className="arcon2-feat">
                <div className="arcon2-feat-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="arcon2-feat-body">
                  <strong>Zero-Trust Security</strong>
                  <span>Least-privilege &amp; just-in-time access.</span>
                </div>
              </div>
              <div className="arcon2-feat">
                <div className="arcon2-feat-icon"><i className="fas fa-clipboard-list"></i></div>
                <div className="arcon2-feat-body">
                  <strong>Compliance Ready</strong>
                  <span>Audit trails for regulated industries.</span>
                </div>
              </div>
            </div>
            <div className="arcon2-stats-row">
              <div className="arcon2-stat-card">
                <i className="fas fa-server"></i>
                <div>
                  <span className="arcon2-stat-num">1000+</span>
                  <span className="arcon2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="arcon2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="arcon2-stat-num">6hrs</span>
                  <span className="arcon2-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="arcon2-stat-card arcon2-stat-brand">
                <img loading="lazy" src="/assets/arcon.png" alt="ARCON" className="arcon2-brand-logo"
                  onError={(e) => { e.target.style.opacity = '0.3'; }} />
                <span className="arcon2-stat-lbl">PAM<br />CERTIFIED</span>
              </div>
            </div>
            <div className="arcon2-cta-row">
              <a href="/contact-us" className="arcon2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* RIGHT - Product Showcase */}
          <div className="arcon2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="arcon2-product-glow" aria-hidden="true"></div>
            <div className="arcon2-showcase">
              <img loading="lazy" src="/assets/arcon.png" alt="ARCON PAM Platform"
                className="arcon2-hero-product-img"
                onError={(e) => { e.target.style.opacity = '0.3'; }} />
              <div className="arcon2-platform" aria-hidden="true">
                <div className="arcon2-plat-ring arcon2-plat-ring-1"></div>
                <div className="arcon2-plat-ring arcon2-plat-ring-2"></div>
                <div className="arcon2-plat-ring arcon2-plat-ring-3"></div>
                <div className="arcon2-plat-surface"></div>
              </div>
            </div>
            <div className="arcon2-industry-strip">
              <span className="arcon2-ind-item"><i className="fas fa-university"></i> Banking</span>
              <span className="arcon2-ind-sep"></span>
              <span className="arcon2-ind-item"><i className="fas fa-shield-alt"></i> Government</span>
              <span className="arcon2-ind-sep"></span>
              <span className="arcon2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>
              <span className="arcon2-ind-sep"></span>
              <span className="arcon2-ind-item"><i className="fas fa-industry"></i> Manufacturing</span>
              <span className="arcon2-ind-sep"></span>
              <span className="arcon2-ind-item"><i className="fas fa-building"></i> Enterprise</span>
            </div>
          </div>

        </div>
      </section>

      
      
      
      {/* Use Cases Slider */}

      {/* Career CTA - above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-key"></i><span>FREE PAM CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Secure Your Privileged Access?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three privileged access risks in your environment</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to improve access control without disruption</span></div>
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
        useCases={arconUseCases}
        partnerColor="#ef4444"
        title="ARCON PAM Use Cases"
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
              <p><strong>Multi‑vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof, scalable, and tailored to your exact IT security needs.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div>
              <p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide PAM implementations, vulnerability assessments, and enterprise IT security solutions for campuses, data centres, and enterprises across India.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div>
              <p><strong>Customer‑First, Value‑Driven</strong> Our cost-effective PAM services ensure maximum security with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO).</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div>
              <p><strong>Local Presence with Rapid IT Support</strong> Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag, ensuring quick on-site support whenever you need them.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div>
              <p><strong>ISO 27001‑Certified Cybersecurity Provider</strong> As an ISO 27001-certified company, we follow stringent change management and compliance practices, aligning with global information security standards.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div>
              <p><strong>Proven PAM Deployment Framework</strong> Our structured approach, Assess → Design → Deploy → Optimise → Support, minimises downtime and ensures maximum ROI from your identity security investments.</p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div>
              <p><strong>Flexible MSSP &amp; Security Pricing Models</strong> Choose from CapEx, OpEx, or Managed Security Service Provider models to align PAM investments with your organisation's business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer - FREE POC (Lenovo-style particle section) */}
      <section className="arcon2-poc-section" data-aos="fade-up" data-aos-duration="900">
        {/* Animated particle background */}
        <div className="arcon2-poc-particles" aria-hidden="true">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="arcon2-poc-particle"></span>
          ))}
        </div>
        <div className="arcon2-poc-glow-tl" aria-hidden="true"></div>
        <div className="arcon2-poc-glow-br" aria-hidden="true"></div>

        <div className="arcon2-poc-inner container">

          {/* LEFT */}
          <div className="arcon2-poc-left">
            <div className="arcon2-poc-badge">
              <i className="fas fa-gift"></i>
              <span>SPECIAL OFFER</span>
            </div>
            <h2 className="arcon2-poc-headline">
              <span className="arcon2-poc-free">FREE</span> POC<br />
              <span className="arcon2-poc-headline-white">Available</span>
            </h2>
            <div className="arcon2-poc-rule"></div>
            <p className="arcon2-poc-subtitle">
              Exclusive Offers on{' '}
              <span className="arcon2-poc-link-text">ARCON PAM, Identity Security<br />&amp; Zero-Trust Solutions</span>
            </p>
            <p className="arcon2-poc-desc">
              Get expert guidance for ARCON PAM deployment, privileged session management, password vault setup,
              zero-trust access governance, and compliance reporting.
            </p>
            <Link to="/contact-us" className="arcon2-poc-cta-btn">
              CONTACT TRACE NETWORK <i className="fas fa-arrow-right"></i>
            </Link>
            <div className="arcon2-poc-trust">
              <span className="arcon2-poc-trust-item"><i className="fas fa-shield-alt"></i> Zero Risk</span>
              <span className="arcon2-poc-trust-item"><i className="fas fa-lock"></i> Secure</span>
              <span className="arcon2-poc-trust-item"><i className="fas fa-users"></i> Certified Experts</span>
            </div>
          </div>

          {/* RIGHT - 2×3 icon grid */}
          <div className="arcon2-poc-right">
            <div className="arcon2-poc-grid-row">
              <div className="arcon2-poc-feat-card">
                <div className="arcon2-poc-feat-circle"><i className="fas fa-shield-alt"></i></div>
                <p className="arcon2-poc-feat-label">No upfront cost<br />for POC</p>
                <div className="arcon2-poc-feat-rule"></div>
              </div>
              <div className="arcon2-poc-feat-card">
                <div className="arcon2-poc-feat-circle"><i className="fas fa-sliders-h"></i></div>
                <p className="arcon2-poc-feat-label">Tailored to your<br />security needs</p>
                <div className="arcon2-poc-feat-rule"></div>
              </div>
              <div className="arcon2-poc-feat-card">
                <div className="arcon2-poc-feat-circle"><i className="fas fa-tag"></i></div>
                <p className="arcon2-poc-feat-label">Exclusive pricing<br />on ARCON solutions</p>
                <div className="arcon2-poc-feat-rule"></div>
              </div>
            </div>
            <div className="arcon2-poc-grid-divider"></div>
            <div className="arcon2-poc-grid-row">
              <div className="arcon2-poc-feat-card">
                <div className="arcon2-poc-feat-circle"><i className="fas fa-headset"></i></div>
                <p className="arcon2-poc-feat-label">Expert guidance<br />throughout</p>
                <div className="arcon2-poc-feat-rule"></div>
              </div>
              <div className="arcon2-poc-feat-card">
                <div className="arcon2-poc-feat-circle"><i className="fas fa-user-lock"></i></div>
                <p className="arcon2-poc-feat-label">Test real PAM<br />in your environment</p>
                <div className="arcon2-poc-feat-rule"></div>
              </div>
              <div className="arcon2-poc-feat-card">
                <div className="arcon2-poc-feat-circle"><i className="fas fa-chart-bar"></i></div>
                <p className="arcon2-poc-feat-label">Make confident<br />security decisions</p>
                <div className="arcon2-poc-feat-rule"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
