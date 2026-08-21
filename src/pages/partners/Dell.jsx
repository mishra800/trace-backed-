import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Dell.css';

const dellUseCases = [
  { id: 'banking', category: 'BANKING', icon: 'fas fa-university', title: 'Banking Sector (Secure Enterprise Computing)', description: 'Problem: Banks require secure, high-performance devices and reliable backend infrastructure for financial applications and secure operations.', image: '/assets/images/use-cases/usecase4.png', linkTo: '/case-studies#dell-banking' },
  { id: 'healthcare', category: 'HEALTHCARE', icon: 'fas fa-hospital', title: 'Healthcare Sector (Hospital IT Infrastructure)', description: 'Problem: Hospitals require reliable systems for patient records, diagnostics, telemedicine, and healthcare applications.', image: '/assets/images/use-cases/usecase5.png', linkTo: '/case-studies#dell-healthcare' },
  { id: 'education', category: 'EDUCATION', icon: 'fas fa-graduation-cap', title: 'Education Sector (Digital Learning Infrastructure)', description: 'Problem: Educational institutions require scalable infrastructure for digital classrooms, labs, and campus administration.', image: '/assets/images/use-cases/usecase2.png', linkTo: '/case-studies#dell-education' },
  { id: 'enterprise', category: 'ENTERPRISE', icon: 'fas fa-building', title: 'Enterprise & Corporate Offices (Hybrid Workplace Infrastructure)', description: 'Problem: Organizations need scalable computing devices and backend infrastructure for hybrid workplaces and enterprise operations.', image: '/assets/images/use-cases/usecase6.png', linkTo: '/case-studies#dell-enterprise' },
  { id: 'manufacturing', category: 'MANUFACTURING', icon: 'fas fa-industry', title: 'Manufacturing Industry (Industrial IT Infrastructure)', description: 'Problem: Manufacturing companies require reliable infrastructure for ERP systems, production monitoring, and industrial operations.', image: '/assets/images/use-cases/usecase7.png', linkTo: '/case-studies#dell-manufacturing' },
  { id: 'government', category: 'GOVERNMENT', icon: 'fas fa-shield-alt', title: 'Government & Defence (Secure Policy-Driven Infrastructure)', description: 'Problem: Government and defence organizations require secure, policy-driven, and high-performance IT infrastructure.', image: '/assets/images/use-cases/usecase1.png', linkTo: '/case-studies#dell-government' },
];

export default function Dell() {
  useAwardsSlider();
  const seoData = getSEOData('partnerDell');
  return (
    <div className="dell-page dell-v2-page">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

      {/* -- DELL Premium Hero -- */}
      <section className="dell2-hero">
        <div className="dell2-hero-glow-left" aria-hidden="true"></div>
        <div className="dell2-hero-glow-right" aria-hidden="true"></div>

        {/* Animated background layer */}
        <div className="dell2-hero-bg-anim" aria-hidden="true">
          <div className="dell2-bg-grid"></div>
          <div className="dell2-orb dell2-orb-1"></div>
          <div className="dell2-orb dell2-orb-2"></div>
          <div className="dell2-orb dell2-orb-3"></div>
          <div className="dell2-orb dell2-orb-4"></div>
          <div className="dell2-bg-ring dell2-bg-ring-1"></div>
          <div className="dell2-bg-ring dell2-bg-ring-2"></div>
          <div className="dell2-bg-ring dell2-bg-ring-3"></div>
          <div className="dell2-particles">
            {[...Array(20)].map((_,i) => <span key={i} className={`dell2-particle dell2-p-${i+1}`}></span>)}
          </div>
          <div className="dell2-scan-beam"></div>
        </div>

        <div className="dell2-hero-inner container">

          {/* LEFT */}
          <div className="dell2-left" data-aos="fade-right" data-aos-duration="900">
            <h1 className="dell2-headline">
              Premier Dell Infrastructure<br />
              &amp; Enterprise Computing<br />
              <span className="dell2-headline-accent">Partner</span>
            </h1>
            <div className="dell2-headline-rule"></div>
            <p className="dell2-desc">
              Secure, high-performance, and scalable Dell IT infrastructure designed for enterprises, SMBs, healthcare, education, banking, and government - delivered by{' '}
              <a href="/contact-us" className="dell2-desc-link">Trace Network &amp; Engineering.</a>
            </p>

            <div className="dell2-feature-row">
              <div className="dell2-feat">
                <div className="dell2-feat-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="dell2-feat-body">
                  <strong>Secure &amp; Reliable</strong>
                  <span>Dell Trusted Devices - built-in hardware-level protection.</span>
                </div>
              </div>
              <div className="dell2-feat">
                <div className="dell2-feat-icon"><i className="fas fa-tachometer-alt"></i></div>
                <div className="dell2-feat-body">
                  <strong>High Performance</strong>
                  <span>Powerful solutions built for mission-critical workloads.</span>
                </div>
              </div>
              <div className="dell2-feat">
                <div className="dell2-feat-icon"><i className="fas fa-chart-line"></i></div>
                <div className="dell2-feat-body">
                  <strong>Scalable Solutions</strong>
                  <span>Grow your infrastructure with confidence.</span>
                </div>
              </div>
            </div>

            <div className="dell2-stats-row">
              <div className="dell2-stat-card">
                <i className="fas fa-server"></i>
                <div>
                  <span className="dell2-stat-num">1000+</span>
                  <span className="dell2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>
                </div>
              </div>
              <div className="dell2-stat-card">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="dell2-stat-num">6hrs</span>
                  <span className="dell2-stat-lbl">ISSUE<br />RESOLUTION</span>
                </div>
              </div>
              <div className="dell2-stat-card dell2-stat-brand">
                <img loading="lazy" src="/assets/images/partners/DELL-2.jpg" alt="Dell" className="dell2-brand-logo" />
                <span className="dell2-stat-lbl">CERTIFIED<br />PARTNER</span>
              </div>
            </div>

            <div className="dell2-cta-row">
              <a href="/contact-us" className="dell2-btn-ghost">
                Talk to Our Experts <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="dell2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <div className="dell2-product-glow" aria-hidden="true"></div>
            <div className="dell2-showcase">
              <img loading="lazy"
                src="/assets/Dell.png"
                alt="Dell Latitude, OptiPlex and PowerEdge Server"
                className="dell2-hero-product-img"
                onError={e => { e.target.style.opacity = '0.3'; }}
              />
              <div className="dell2-platform" aria-hidden="true">
                <div className="dell2-plat-ring dell2-plat-ring-1"></div>
                <div className="dell2-plat-ring dell2-plat-ring-2"></div>
                <div className="dell2-plat-ring dell2-plat-ring-3"></div>
                <div className="dell2-plat-surface"></div>
              </div>
            </div>
            <div className="dell2-industry-strip">
              <span className="dell2-ind-item"><i className="fas fa-building"></i> For Enterprises</span>
              <span className="dell2-ind-sep"></span>
              <span className="dell2-ind-item"><i className="fas fa-store"></i> For SMBs</span>
              <span className="dell2-ind-sep"></span>
              <span className="dell2-ind-item"><i className="fas fa-hospital"></i> For Healthcare</span>
              <span className="dell2-ind-sep"></span>
              <span className="dell2-ind-item"><i className="fas fa-graduation-cap"></i> For Education</span>
              <span className="dell2-ind-sep"></span>
              <span className="dell2-ind-item"><i className="fas fa-landmark"></i> For Government</span>
            </div>
          </div>

        </div>
      </section>

      
      
      

      {/* Use Cases */}
      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-server"></i><span>FREE IT CONSULTATION</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Build a Future-Ready IT Environment?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Top three risks hiding in your current stack</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins that boost performance without new hardware</span></div>
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
        useCases={dellUseCases}
        partnerColor="#1a73e8"
        title="Dell Laptop, Desktop & Server Use Cases"
        subtitle="Successfully Delivered by Trace Network across diverse industry sectors"
      />

      {/* Awards */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Awards</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
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
          <div className="section-title text-center pb-4">
            <h2 className="section-title__title">Why Leading<span> Brands</span> Choose<span> Trace</span></h2>
          </div>
          <div className="premium-card-grid">
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/certified.png" alt="certified" /></div><p><strong>Multi-vendor, Certified Network Security Expertise</strong> Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof, scalable, and tailored to your exact IT security needs.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/leadership.png" alt="leadership" /></div><p><strong>20+ Years of Cybersecurity Leadership</strong> With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions across India.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/luxury.png" alt="luxury" /></div><p><strong>Customer-First, Value-Driven</strong> Our cost-effective cybersecurity services ensure maximum protection with right-sized solutions, delivering the lowest total cost of ownership (TCO).</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/technical-support.png" alt="technical-support" /></div><p><strong>Local Presence with Rapid IT Support</strong> Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag, ensuring quick on-site support.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" /></div><p><strong>ISO 27001-Certified Cybersecurity Provider</strong> As an ISO 27001-certified company, we follow stringent change management and compliance practices.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/frame.png" alt="frame" /></div><p><strong>Proven Cybersecurity Deployment Framework</strong> Our structured approach, Assess → Design → Deploy → Optimise → Support, ensures maximum ROI from your IT investments.</p></div>
            <div className="premium-service-card"><div className="premium-icon-wrapper"><img loading="lazy" src="/assets/images/agile.png" alt="agile" /></div><p><strong>Flexible MSSP &amp; Security Pricing Models</strong> Choose from CapEx, OpEx, or Managed Security Service Provider (MSSP) models to align IT investments with your goals.</p></div>
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
                Exclusive Dell Enterprise Offer
              </div>

              <p className="greythr-offer-desc">
                Experience the power of Dell enterprise solutions firsthand – zero risk, zero commitment. Our certified team will set up a complete proof of concept tailored to your environment so you can see measurable results before you invest.
              </p>

              {/* Feature Grid */}
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span>FREE Infrastructure<br />Assessment</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-sliders-h"></i>
                  </div>
                  <span>FREE Solution<br />Consultation</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <span>Special Enterprise<br />Pricing</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>

                <div className="greythr-offer-feature">
                  <div className="greythr-offer-feat-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <span>Deployment & Config<br />Support</span>
                  <div className="greythr-offer-feat-bar"></div>
                </div>
              </div>

              {/* Modules List */}
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['PowerEdge Servers', 'Latitude & OptiPlex', 'Enterprise Storage', 'Hyperconverged Infra'].map((m, i) => (
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

